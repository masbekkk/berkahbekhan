import { chromium } from '../../../../bk-mtsngresik-v2/node_modules/playwright/index.mjs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function render() {
  console.log('Launching browser to render 1080x1350 Instagram slides...');
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1080, height: 1350 },
    deviceScaleFactor: 1, // Exact 1080x1350 output
  });

  const htmlPath = path.join(__dirname, 'index.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });

  // Wait for Google Fonts to be loaded
  await page.evaluate(() => document.fonts.ready);

  const totalSlides = 7;
  for (let i = 1; i <= totalSlides; i++) {
    console.log(`Rendering slide ${i} of ${totalSlides}...`);
    
    // Configure DOM for exact capture of slide i
    await page.evaluate((slideNum) => {
      // Hide toolbar
      const toolbar = document.querySelector('.app-toolbar');
      if (toolbar) toolbar.style.display = 'none';

      // Reset viewport styling
      const viewport = document.getElementById('viewport');
      viewport.className = 'slides-viewport';
      viewport.style.padding = '0';
      viewport.style.margin = '0';
      viewport.style.display = 'block';

      // Hide all cards except target
      document.querySelectorAll('.slide-card').forEach((card, idx) => {
        if (idx + 1 === slideNum) {
          card.style.display = 'flex';
          card.style.zoom = '1';
          card.style.transform = 'none';
          card.style.margin = '0';
          card.style.border = 'none';
        } else {
          card.style.display = 'none';
        }
      });
      document.body.style.padding = '0';
      document.body.style.margin = '0';
      document.body.style.background = '#0B0F14';
    }, i);

    // Short pause for any layout stabilization
    await page.waitForTimeout(300);

    const targetElement = await page.$(`#slide-${i}`);
    const outputPath = path.join(__dirname, `slide-0${i}.png`);
    await targetElement.screenshot({
      path: outputPath,
      type: 'png',
    });
    console.log(`Saved: ${outputPath}`);
  }

  await browser.close();
  console.log('All slides rendered successfully!');
}

render().catch((err) => {
  console.error('Error rendering slides:', err);
  process.exit(1);
});
