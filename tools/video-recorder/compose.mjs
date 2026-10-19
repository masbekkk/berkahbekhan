#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { spawnSync } from 'node:child_process';

const args = parseArgs(process.argv.slice(2));
if (!args.plan || !args.input) {
  fail('Usage: node compose.mjs --plan path/to/video-plan.json --input captures/.../raw.webm [--output output/.../video.mp4]');
}

const planPath = path.resolve(args.plan);
const inputPath = path.resolve(args.input);
const plan = JSON.parse(await fs.readFile(planPath, 'utf8'));
const outputPath = path.resolve(args.output || path.join('output', 'tiktok', plan.projectSlug, `${plan.slug}.mp4`));
const workDir = path.join(path.dirname(outputPath), `.${plan.slug}-compose`);
await fs.mkdir(workDir, { recursive: true });
await fs.mkdir(path.dirname(outputPath), { recursive: true });

const hookFile = path.join(workDir, 'hook.txt');
const ctaFile = path.join(workDir, 'cta.txt');
await fs.writeFile(hookFile, String(plan.hook || ''), 'utf8');
await fs.writeFile(ctaFile, String(plan.cta || ''), 'utf8');

const ffmpegCheck = spawnSync('ffmpeg', ['-version'], { encoding: 'utf8' });
if (ffmpegCheck.error || ffmpegCheck.status !== 0) {
  fail('ffmpeg is required for composition. Install ffmpeg and run again.');
}

const hookEscaped = escapeFilterPath(hookFile);
const ctaEscaped = escapeFilterPath(ctaFile);

// Keep the source capture geometrically truthful. It is uniformly scaled to fit
// a large 960x1320 proof area, centered on a 1080x1920 canvas. Hook and CTA
// remain outside the product frame so they do not obscure important controls.
const filter = [
  'color=c=0x0E0E0F:s=1080x1920:r=30[bg]',
  '[0:v]scale=960:1320:force_original_aspect_ratio=decrease[product]',
  '[bg][product]overlay=(W-w)/2:(H-h)/2:shortest=1[base]',
  `[base]drawtext=textfile='${hookEscaped}':fontcolor=white:fontsize=58:line_spacing=14:x=60:y=90:box=0[v1]`,
  `[v1]drawtext=textfile='${ctaEscaped}':fontcolor=white:fontsize=32:line_spacing=10:x=60:y=h-210:box=0[vout]`
].join(';');

const ffmpegArgs = [
  '-y',
  '-i', inputPath,
  '-filter_complex', filter,
  '-map', '[vout]',
  '-map', '0:a?',
  '-c:v', 'libx264',
  '-preset', 'medium',
  '-crf', '18',
  '-pix_fmt', 'yuv420p',
  '-c:a', 'aac',
  '-b:a', '192k',
  '-movflags', '+faststart',
  outputPath
];

const result = spawnSync('ffmpeg', ffmpegArgs, { stdio: 'inherit' });
if (result.error || result.status !== 0) {
  await fs.rm(workDir, { recursive: true, force: true });
  fail('ffmpeg composition failed.');
}

await fs.rm(workDir, { recursive: true, force: true });
console.log(outputPath);

function parseArgs(argv) {
  const result = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--plan') result.plan = argv[++i];
    else if (argv[i] === '--input') result.input = argv[++i];
    else if (argv[i] === '--output') result.output = argv[++i];
  }
  return result;
}

function escapeFilterPath(filePath) {
  return filePath
    .replaceAll('\\', '\\\\')
    .replaceAll(':', '\\:')
    .replaceAll("'", "\\'");
}

function fail(message) {
  console.error(message);
  process.exit(1);
}
