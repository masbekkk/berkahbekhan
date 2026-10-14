import { readFile, writeFile } from 'node:fs/promises';

// Generate requests from the inspected page; never create duplicate styles or masters.
const directory = 'output/figma-exports/feed-refactor';
const read = async name => JSON.parse(await readFile(`${directory}/${name}`, 'utf8'));
const inspection = await read('resume-inspect-results.json');
const tokens = await read('resume-token-results.json');
const styles = inspection.find(item => item.request.as === 'styles').data;
const document = tokens.find(item => item.request.as === 'before').data;
const marginId = tokens.find(item => item.request.as === 'margin').data.variableId;
const requests = [{ name: 'use_file', arguments: { sessionId: process.env.FIGWRIGHT_SESSION_ID } }];
if (!process.env.FIGWRIGHT_SESSION_ID) throw new Error('Set FIGWRIGHT_SESSION_ID to the verified target session.');
const roots = new Set(['51:64', '51:76', '51:88', '51:105', '51:143', '51:153', '51:163']);
const close = (a, b) => Math.abs(a - b) < 0.001;
const measure = (a, b) => a?.unit === b?.unit && close(a?.value, b?.value);
const color = (a, b) => ['r', 'g', 'b'].every(key => close(a[key], b[key]));
function bind(node) {
  if (node.type === 'INSTANCE') return;
  if (node.fills?.length === 1 && node.fills[0].type === 'SOLID') {
    const style = styles.paints.find(item => color(item.paints[0].color, node.fills[0].color));
    if (style) requests.push({ name: 'apply_style_to_node', arguments: { nodeId: node.id, styleId: style.id, field: 'fill' } });
  }
  if (node.type === 'TEXT') {
    const style = styles.texts.find(item => item.fontName.family === node.fontName.family && item.fontName.style === node.fontName.style && close(item.fontSize, node.fontSize) && measure(item.lineHeight, node.lineHeight) && measure(item.letterSpacing, node.letterSpacing));
    if (!style) throw new Error(`No exact text style for ${node.id}`);
    requests.push({ name: 'apply_style_to_node', arguments: { nodeId: node.id, styleId: style.id, field: 'text' } });
  }
  if (roots.has(node.id)) {
    for (const field of ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft']) {
      if (node.layout[field] !== 80) throw new Error(`Unexpected margin on ${node.id}`);
      requests.push({ name: 'bind_variable_to_node', arguments: { nodeId: node.id, field, variableId: marginId } });
    }
  }
  for (const child of node.children ?? []) bind(child);
}
function visit(node) {
  if (roots.has(node.id)) bind(node);
  else for (const child of node.children ?? []) visit(child);
}
visit(document);
requests.push({ name: 'get_document', arguments: {}, as: 'after' });
requests.push({ name: 'get_variable_defs', arguments: {}, as: 'variables' });
requests.push({ name: 'save_screenshots', arguments: { nodeIds: ['51:64','51:76','51:88','51:105','51:106','51:116','51:127','51:143','51:153','51:163','52:258'], outDir: 'D:/Repos/berkahbekhan/output/figma-exports/feed-refactor/bound', scale: 1 }, as: 'exports' });
await writeFile(`${directory}/resume-finish-requests.json`, JSON.stringify(requests, null, 2) + '\n');
console.log(`Prepared ${requests.length} requests.`);
