#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { chromium } from 'playwright';

const args = parseArgs(process.argv.slice(2));
if (!args.plan) {
  fail('Usage: npm run record -- --plan path/to/video-plan.json [--out captures/project/video] [--headed]');
}

const planPath = path.resolve(args.plan);
const plan = JSON.parse(await fs.readFile(planPath, 'utf8'));
validatePlan(plan);

const outDir = path.resolve(args.out || path.join('captures', plan.projectSlug, plan.slug));
const videoDir = path.join(outDir, '.video-tmp');
await fs.mkdir(videoDir, { recursive: true });

const report = {
  plan: planPath,
  startedAt: new Date().toISOString(),
  baseUrl: plan.baseUrl,
  shots: [],
  consoleErrors: [],
  pageErrors: [],
  status: 'running'
};

const browser = await chromium.launch({ headless: !args.headed });
const context = await browser.newContext({
  viewport: plan.viewport,
  recordVideo: {
    dir: videoDir,
    size: plan.viewport
  }
});

const page = await context.newPage();
page.on('console', msg => {
  if (msg.type() === 'error') report.consoleErrors.push(msg.text());
});
page.on('pageerror', err => report.pageErrors.push(String(err)));

let video;
try {
  video = page.video();

  for (const shot of plan.shots) {
    const shotReport = { id: shot.id, status: 'running', actions: [] };
    report.shots.push(shotReport);

    const target = new URL(shot.path, ensureSlash(plan.baseUrl)).toString();
    await page.goto(target, { waitUntil: 'domcontentloaded' });
    shotReport.url = page.url();

    for (const action of shot.actions) {
      const started = Date.now();
      await runAction(page, action, plan.baseUrl);
      shotReport.actions.push({ ...action, elapsedMs: Date.now() - started, status: 'pass' });
    }

    if (shot.expectedSelector) {
      await page.locator(shot.expectedSelector).first().waitFor({ state: 'visible', timeout: 8000 });
    }

    if (shot.holdMs) await page.waitForTimeout(shot.holdMs);
    shotReport.status = 'pass';
  }

  report.status = 'pass';
} catch (error) {
  report.status = 'fail';
  report.error = error instanceof Error ? error.stack || error.message : String(error);
  const currentShot = [...report.shots].reverse().find(s => s.status === 'running');
  if (currentShot) currentShot.status = 'fail';
  process.exitCode = 1;
} finally {
  report.finishedAt = new Date().toISOString();
  await context.close();
  await browser.close();

  if (video) {
    try {
      const rawPath = await video.path();
      const destination = path.join(outDir, 'raw.webm');
      await fs.mkdir(outDir, { recursive: true });
      await fs.copyFile(rawPath, destination);
      report.video = destination;
    } catch (error) {
      report.videoError = String(error);
      process.exitCode = 1;
    }
  }

  await fs.writeFile(path.join(outDir, 'run-report.json'), JSON.stringify(report, null, 2));
  await fs.rm(videoDir, { recursive: true, force: true });
}

async function runAction(page, action, baseUrl) {
  switch (action.type) {
    case 'click':
      requireField(action, 'selector');
      await page.locator(action.selector).first().click();
      break;
    case 'fill':
      requireField(action, 'selector');
      await page.locator(action.selector).first().fill(String(action.value ?? ''));
      break;
    case 'press':
      requireField(action, 'selector');
      await page.locator(action.selector).first().press(String(action.value ?? 'Enter'));
      break;
    case 'hover':
      requireField(action, 'selector');
      await page.locator(action.selector).first().hover();
      break;
    case 'scroll':
      await page.mouse.wheel(0, Number(action.value ?? 600));
      break;
    case 'wait':
      await page.waitForTimeout(Number(action.ms ?? action.value ?? 500));
      break;
    case 'goto': {
      requireField(action, 'path');
      const url = new URL(action.path, ensureSlash(baseUrl)).toString();
      await page.goto(url, { waitUntil: 'domcontentloaded' });
      break;
    }
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

function parseArgs(argv) {
  const result = {};
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--headed') result.headed = true;
    else if (arg === '--plan') result.plan = argv[++i];
    else if (arg === '--out') result.out = argv[++i];
  }
  return result;
}

function validatePlan(plan) {
  for (const key of ['slug', 'projectSlug', 'baseUrl', 'viewport', 'shots']) {
    if (plan[key] == null) fail(`video plan is missing required field: ${key}`);
  }
  if (!Array.isArray(plan.shots) || plan.shots.length === 0) fail('video plan must include at least one shot');
  if (!plan.viewport.width || !plan.viewport.height) fail('video plan viewport must include width and height');
}

function requireField(obj, field) {
  if (!obj[field]) throw new Error(`${obj.type} action requires ${field}`);
}

function ensureSlash(url) {
  return url.endsWith('/') ? url : `${url}/`;
}

function fail(message) {
  console.error(message);
  process.exit(1);
}
