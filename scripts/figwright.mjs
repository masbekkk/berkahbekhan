import { spawn } from 'node:child_process';
import { readFile, writeFile, mkdir, readdir, access } from 'node:fs/promises';
import path from 'node:path';

// Run a JSON array of MCP requests against the locally installed Figwright server.
// Usage: node scripts/figwright.mjs requests.json results.json
const [inputPath, outputPath] = process.argv.slice(2);
if (!inputPath || !outputPath) throw new Error('Usage: figwright.mjs requests.json results.json');
const input = JSON.parse((await readFile(inputPath, 'utf8')).replace(/^\uFEFF/, ''));
const requests = Array.isArray(input) ? input : input.requests;
const references = Array.isArray(input) ? {} : { ...input.references };
function resolveReferences(value) {
  if (Array.isArray(value)) return value.map(resolveReferences);
  if (value && typeof value === 'object') {
    if ('$ref' in value) {
      const result = value.$ref.split('.').reduce((item, key) => item?.[key], references);
      if (result === undefined) throw new Error(`Unresolved reference: ${value.$ref}`);
      return result;
    }
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, resolveReferences(item)]));
  }
  return value;
}
let entry = process.env.FIGWRIGHT_MCP_ENTRY;
if (!entry) {
  const cache = path.join(process.env.LOCALAPPDATA, 'npm-cache', '_npx');
  for (const directory of await readdir(cache)) {
    const candidate = path.join(cache, directory, 'node_modules', '@figwright', 'mcp', 'dist', 'index.mjs');
    try { await access(candidate); entry = candidate; break; } catch {}
  }
}
if (!entry) throw new Error('Install @figwright/mcp or set FIGWRIGHT_MCP_ENTRY to its dist/index.mjs.');
const child = spawn(process.execPath, [entry], { windowsHide: true, stdio: ['pipe', 'pipe', 'pipe'] });
const pending = new Map();
let sequence = 0;
let buffer = '';
child.stderr.on('data', chunk => process.stderr.write(chunk));
child.on('error', error => { for (const waiter of pending.values()) waiter.reject(error); });
child.on('exit', code => { for (const waiter of pending.values()) waiter.reject(new Error(`Figwright exited: ${code}`)); });
child.stdout.on('data', chunk => {
  buffer += chunk;
  let index;
  while ((index = buffer.indexOf('\n')) !== -1) {
    const line = buffer.slice(0, index);
    buffer = buffer.slice(index + 1);
    if (!line.trim()) continue;
    const response = JSON.parse(line);
    const waiter = pending.get(response.id);
    if (!waiter) continue;
    pending.delete(response.id);
    response.error ? waiter.reject(new Error(JSON.stringify(response.error))) : waiter.resolve(response.result);
  }
});
function call(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++sequence;
    const timer = setTimeout(() => { pending.delete(id); reject(new Error(`${method} timed out`)); }, 45000);
    pending.set(id, {
      resolve: result => { clearTimeout(timer); resolve(result); },
      reject: error => { clearTimeout(timer); reject(error); },
    });
    child.stdin.write(JSON.stringify({ jsonrpc: '2.0', id, method, params }) + '\n');
  });
}
const results = [];
try {
  await call('initialize', { protocolVersion: '2024-11-05', capabilities: {}, clientInfo: { name: 'berkahbekhan-feed-refactor', version: '1.0' } });
  child.stdin.write(JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized' }) + '\n');
  for (const request of requests) {
    const result = await call(request.method ?? 'tools/call', resolveReferences(request.params ?? { name: request.name, arguments: request.arguments ?? {} }));
    const firstText = result.content?.find(item => item.type === 'text')?.text;
    let data;
    try { data = JSON.parse(firstText.split('\n\n\n')[0]); } catch {}
    if (request.as) references[request.as] = data;
    results.push({ request, result, data });
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, JSON.stringify(results, null, 2) + '\n');
    const summary = data?.pageId ? { pageId: data.pageId, sections: data.children?.length } : data;
    console.log(JSON.stringify({ tool: request.name ?? request.method, alias: request.as, error: result.isError ?? false, data: request.as ? summary : undefined, text: result.isError ? firstText : undefined, tools: result.tools?.length }));
    if (result.isError) throw new Error(`Figwright rejected ${request.name}; see ${outputPath}`);
  }
} finally {
  child.stdin.end();
  child.kill();
}
