import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const require = createRequire(path.resolve(root, process.argv[2] || '../jewerly-erp', 'package.json'));
const { chromium } = require('playwright');
const out = path.join(root, 'brand/berkahemas');
const browser = await chromium.launch({ channel: 'chrome', headless: true });
try {
  const page = await browser.newPage({ deviceScaleFactor: 2 });
  const cssResponse = await page.request.get('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
  if (!cssResponse.ok()) throw new Error('Manrope stylesheet could not be downloaded.');
  const css = await cssResponse.text();
  const urls = [...new Set([...css.matchAll(/url\((https:[^)]+)\)/g)].map(m => m[1]))];
  let embedded = css;
  for (let i = 0; i < urls.length; i++) {
    const response = await page.request.get(urls[i]);
    if (!response.ok()) throw new Error('Manrope font could not be downloaded.');
    const bytes = await response.body();
    const ext = urls[i].endsWith('.woff2') ? 'woff2' : 'ttf';
    const name = `manrope-${i}.${ext}`;
    await fs.writeFile(path.join(out, name), bytes);
    embedded = embedded.replaceAll(urls[i], `data:font/${ext};base64,${bytes.toString('base64')}`);
  }
  await fs.writeFile(path.join(out, 'manrope.css'), css.replace(/url\((https:[^)]+)\)/g, (_, url) => `url('./manrope-${urls.indexOf(url)}.${url.endsWith('.woff2') ? 'woff2' : 'ttf'}')`));
  // Embedding makes text-based SVG masters portable without requiring an installed font.
  for (const file of (await fs.readdir(out)).filter(f => f.endsWith('.svg'))) {
    let svg = await fs.readFile(path.join(out, file), 'utf8');
    svg = svg.replace(/<style data-brand-font(?:="true")?>[\s\S]*?<\/style>/g, '');
    if (svg.includes('<text')) svg = svg.replace(/(<svg[^>]*>)/, `$1<style data-brand-font="true">${embedded}</style>`);
    await fs.writeFile(path.join(out, file), svg);
    const width = Number(svg.match(/width="(\d+)"/)[1]);
    const height = Number(svg.match(/height="(\d+)"/)[1]);
    await page.setViewportSize({ width, height });
    await page.setContent(`<style>html,body{margin:0;background:transparent}svg{display:block}</style>${svg}`);
    await page.evaluate(() => document.fonts.ready);
    await page.locator('svg').screenshot({ path: path.join(out, file.replace('.svg', '.png')), omitBackground: true });
  }
  const favicon = await fs.readFile(path.join(out, 'favicon.svg'), 'utf8');
  const iconPage = await browser.newPage({ viewport: { width: 64, height: 64 }, deviceScaleFactor: 1 });
  await iconPage.setContent(`<style>body{margin:0}</style>${favicon}`);
  await iconPage.screenshot({ path: path.join(out, 'favicon.png'), omitBackground: true });
  await iconPage.setViewportSize({ width: 180, height: 180 });
  await iconPage.setContent(`<style>body{margin:0}svg{width:180px;height:180px}</style>${favicon}`);
  await iconPage.screenshot({ path: path.join(out, 'apple-touch-icon.png'), omitBackground: true });
  for (const repo of ['jewerly-erp', 'astaenterprise']) {
    const publicDir = path.resolve(root, '..', repo, 'public');
    const target = path.join(publicDir, 'brand/berkahemas/v1');
    for (const file of await fs.readdir(out)) {
      if (/\.(svg|png|json|css|woff2|ttf)$/.test(file)) await fs.copyFile(path.join(out, file), path.join(target, file));
    }
    await fs.copyFile(path.join(out, 'favicon.png'), path.join(publicDir, 'favicon.png'));
    if (repo === 'astaenterprise') {
      // Social card must be exactly 1200x630, independent of high-DPI logo exports.
      const source = path.join(out, 'social-preview.svg');
      await iconPage.setViewportSize({ width: 1200, height: 630 });
      await iconPage.setContent(`<style>body{margin:0}</style>${await fs.readFile(source, 'utf8')}`);
      await iconPage.evaluate(() => document.fonts.ready);
      await iconPage.screenshot({ path: path.join(publicDir, 'og-image.png') });
    }
  }
  console.log('PNG lockups, embedded Manrope SVGs, favicons and social card exported.');
} finally { await browser.close(); }
