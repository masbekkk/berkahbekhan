---
name: demo-recorder
description: Record deterministic proof of a real web project from a verified video plan using Playwright, producing raw clips for TikTok/Reels composition.
when_to_use: Use only after a video plan has been checked against project-truth.json.
allowed-tools: Read, Grep, Glob, Bash
version: 1.0.0
priority: HIGH
---

# Demo Recorder Skill

## Core rule

**The real application performs every visible product interaction.**

This skill may automate clicks, typing, navigation, hover, scroll, and waiting. It must not synthesize a replacement UI when the app cannot perform a planned step.

## Required inputs

- `projects/<project-name>/project-truth.json`
- one `video-plan.json` compatible with `schemas/video-plan.schema.json`
- running application base URL or safe preview URL
- demo-only credentials/data when authentication is required

## Web recording workflow

1. Verify the requested flow exists in `project-truth.json`.
2. Run a dry pass with Playwright before recording.
3. Fail on missing selectors, failed navigation, console-breaking errors relevant to the flow, or missing expected visible states.
4. Remove/redact unsafe data before the final recording.
5. Record a clean source capture at the plan viewport.
6. Save the raw recording under `captures/<project>/<video-slug>/`.
7. Save a machine-readable run report beside the video.

Use `tools/video-recorder/record.mjs` for deterministic browser capture.

## Never do this

- fabricate a page state in Figma or image generation and splice it in as if the app produced it
- type real customer PII for a demo
- perform irreversible production actions
- bypass authentication/authorization to obtain a shot
- hide a failed feature behind editing
- represent a source-verified but runtime-failing feature as successfully demonstrated

## Recording conventions

Default source viewport for desktop apps: `1440x900`.

Default source viewport for mobile web: use the actual intended mobile width from the project. Do not force a desktop dashboard into 9:16 purely to fill TikTok.

The final 1080x1920 composition should be created after capture so UI geometry remains truthful and readable.

## Failure behavior

When a step fails, produce:

- failed step number
- selector/action
- observed state
- whether the plan, demo data, or application needs revision

Then stop. Do not continue recording a misleading sequence.
