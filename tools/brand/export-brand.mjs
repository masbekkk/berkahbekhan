import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const out = path.join(root, 'brand/berkahemas');
await fs.mkdir(out, { recursive: true });

export const colors = {
  emerald: '#075E46', emeraldHover: '#064B39', gold: '#C6A15B', goldText: '#876515',
  ivory: '#F8F6EF', white: '#FFFFFF', ink: '#182923', muted: '#526259', border: '#DFE5DD',
};

// One geometric master, reused unchanged by the app icons and brand exports.
export function mark(mono = false, reversed = false) {
  const foreground = reversed ? colors.ivory : colors.emerald;
  return `<path fill="${foreground}" fill-rule="evenodd" d="M12 8h17c10 0 16 5 16 13 0 5-2 8-6 10 6 2 9 6 9 12 0 9-7 14-18 14H12V8Zm10 9v10h7c4 0 6-2 6-5s-2-5-6-5h-7Zm0 19v12h8c5 0 8-2 8-6s-3-6-8-6h-8Z"/><path fill="${mono ? foreground : colors.gold}" d="m42 8 10 5-5 10-10-5z"/>`;
}

function svg(width, height, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="BerkahEmas — Software Toko Emas">${body}</svg>`;
}

for (const variant of ['color', 'mono', 'reversed']) {
  const reversed = variant === 'reversed';
  const mono = variant !== 'color';
  const ink = reversed ? colors.ivory : colors.ink;
  const detail = reversed ? colors.ivory : colors.muted;
  const icon = `<g>${mark(mono, reversed)}</g>`;
  await fs.writeFile(path.join(out, `icon-${variant}.svg`), svg(64, 64, icon));
  await fs.writeFile(path.join(out, `horizontal-${variant}.svg`), svg(480, 96,
    `<g transform="translate(8 12) scale(1.1)">${icon}</g><text x="98" y="46" fill="${ink}" font-family="Manrope,Arial,sans-serif" font-size="36" font-weight="800" letter-spacing="-1.2">BerkahEmas</text><text x="100" y="73" fill="${detail}" font-family="Manrope,Arial,sans-serif" font-size="18" font-weight="500">Software Toko Emas</text>`));
  await fs.writeFile(path.join(out, `stacked-${variant}.svg`), svg(400, 240,
    `<g transform="translate(152 12) scale(1.5)">${icon}</g><text x="200" y="158" text-anchor="middle" fill="${ink}" font-family="Manrope,Arial,sans-serif" font-size="40" font-weight="800" letter-spacing="-1.2">BerkahEmas</text><text x="200" y="193" text-anchor="middle" fill="${detail}" font-family="Manrope,Arial,sans-serif" font-size="22" font-weight="500">Software Toko Emas</text>`));
}

await fs.writeFile(path.join(out, 'favicon.svg'), svg(64, 64,
  `<rect width="64" height="64" rx="14" fill="${colors.emerald}"/>${mark(false, true)}`));
await fs.writeFile(path.join(out, 'tokens.json'), JSON.stringify({ version: '1.0.0', name: 'BerkahEmas', descriptor: 'Software Toko Emas', fontFamily: 'Manrope', colors }, null, 2) + '\n');

await fs.writeFile(path.join(out, 'social-preview.svg'), svg(1200, 630,
  `<rect width="1200" height="630" fill="${colors.ivory}"/><rect width="24" height="630" fill="${colors.emerald}"/><g transform="translate(70 70) scale(1.5)">${mark()}</g><text x="78" y="315" fill="${colors.ink}" font-family="Manrope,Arial,sans-serif" font-size="88" font-weight="800" letter-spacing="-3">BerkahEmas</text><text x="82" y="383" fill="${colors.emerald}" font-family="Manrope,Arial,sans-serif" font-size="44" font-weight="600">Software Toko Emas</text><path d="M82 435h120" stroke="${colors.gold}" stroke-width="7"/><text x="82" y="505" fill="${colors.muted}" font-family="Manrope,Arial,sans-serif" font-size="25">Inventori · POS · Buyback · Laporan</text>`));

for (const repo of ['jewerly-erp', 'astaenterprise']) {
  const publicDir = path.resolve(root, '..', repo, 'public');
  const target = path.join(publicDir, 'brand/berkahemas/v1');
  await fs.mkdir(target, { recursive: true });
  for (const file of await fs.readdir(out)) {
    if (/\.(svg|png|json)$/.test(file)) await fs.copyFile(path.join(out, file), path.join(target, file));
  }
  await fs.copyFile(path.join(out, 'favicon.svg'), path.join(publicDir, 'favicon.svg'));
}
console.log('BerkahEmas v1 SVG masters, tokens, and independent app copies exported.');
