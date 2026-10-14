import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';

const directory = 'output/figma-exports/feed-refactor';
const results = JSON.parse(await readFile(`${directory}/resume-finish-results.json`, 'utf8'));
const document = results.find(item => item.request.as === 'after').data;
function find(node, id) {
  if (node.id === id) return node;
  for (const child of node.children ?? []) { const match = find(child, id); if (match) return match; }
}
function luminance(color) {
  const linear = value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  return 0.2126 * linear(color.r) + 0.7152 * linear(color.g) + 0.0722 * linear(color.b);
}
const frames = ['51:106', '51:116', '51:127', '51:143', '51:153', '51:163'];
const masters = ['51:64', '51:76', '51:88', '51:105'];
let texts = 0;
let images = 0;
let minimumContrast = Infinity;
function inspect(node, x, y, background) {
  const solid = node.fills?.find(fill => fill.type === 'SOLID' && fill.visible !== false);
  if (node.type === 'TEXT') {
    texts++;
    assert(node.styleIds?.text && node.styleIds?.fill, `Unbound text style: ${node.id}`);
    assert(x >= 79.9 && y >= 79.9 && x + node.width <= 1000.1 && y + node.height <= 1270.1, `Text outside safe bounds: ${node.id} ${node.name}`);
    assert(node.characters && node.fontSize >= 22, `Missing or small text: ${node.id}`);
    if (solid && background) {
      const a = luminance(solid.color), b = luminance(background);
      const contrast = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
      minimumContrast = Math.min(minimumContrast, contrast);
      assert(contrast >= 4.5, `Low text contrast: ${node.id} ${contrast}`);
    }
  } else if (solid) background = solid.color;
  if (node.type === 'RECTANGLE' && node.fills?.some(fill => fill.type === 'IMAGE')) {
    images++;
    assert(Math.abs(node.width / node.height - 2880 / 1800) < 0.001, `Distorted source image: ${node.id}`);
  }
  for (const child of node.children ?? []) inspect(child, x + child.x, y + child.y, background);
}
for (const id of [...frames, ...masters]) {
  const node = find(document, id);
  assert(node, `Missing Figma node ${id}`);
  assert.equal(node.width, 1080);
  assert.equal(node.height, 1350);
  assert.equal(node.layout?.mode, 'VERTICAL');
  for (const side of ['Top', 'Right', 'Bottom', 'Left']) assert.equal(node.layout[`padding${side}`], 80);
  for (const side of ['Top', 'Right', 'Bottom', 'Left']) assert(node.boundVariables?.[`padding${side}`]?.includes('VariableID:58:132'), `Unbound margin: ${id}`);
  if (masters.includes(id)) assert.equal(node.type, 'COMPONENT');
  inspect(node, 0, 0);
}
const exports = [
  ['output/feed/portal-dua-akses/51-106.png', '51:106'],
  ['output/feed/rapor-satu-pdf/51-116.png', '51:116'],
  ['output/feed/website-untuk-usaha/51-127.png', '51:127'],
  ...['51-106', '51-143', '51-153', '51-163'].map(name => [`output/carousel/portal-sekolah-refactor/${name}.png`, name.replace('-', ':')]),
];
for (const [file] of exports) {
  const data = await readFile(file);
  assert.equal(data.subarray(1, 4).toString(), 'PNG');
  assert.equal(data.readUInt32BE(16), 1080, file);
  assert.equal(data.readUInt32BE(20), 1350, file);
}
const report = { pageId: document.pageId, productionFrames: frames.length, componentMasters: masters.length, checkedTextNodes: texts, proportionalImageLayers: images, minimumTextContrast: Number(minimumContrast.toFixed(2)), pngExports: exports.length, nativeBindings: 'PASS', status: 'PASS', limitations: ['Image readability is reviewed visually, not inferred from geometry.'] };
await writeFile(`${directory}/verification.json`, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
