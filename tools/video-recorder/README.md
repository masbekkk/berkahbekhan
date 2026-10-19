# Real project video recorder

Deterministic Playwright capture for TikTok/Reels source footage.

## Why this exists

The AI/content agent chooses what is worth showing, but this recorder captures the actual running application. If an interaction cannot be performed, recording fails rather than fabricating a successful state.

## Setup

```bash
cd tools/video-recorder
npm install
npm run install-browser
```

Start the target application separately, then create a `video-plan.json` under `content/tiktok/<project>/<video-slug>/`.

## Record

```bash
npm run record -- \
  --plan ../../content/tiktok/my-project/booking-flow/video-plan.json \
  --out ../../captures/my-project/booking-flow
```

Use `--headed` while developing selectors.

Output:

```text
captures/my-project/booking-flow/
  raw.webm
  run-report.json
```

## Example plan

```json
{
  "slug": "booking-flow",
  "projectSlug": "my-project",
  "baseUrl": "http://127.0.0.1:3000",
  "hook": "Booking langsung dari website",
  "salesAngle": "Pelanggan dapat memilih jadwal dari website.",
  "cta": "Butuh alur booking seperti ini? Kirim kebutuhanmu lewat DM.",
  "viewport": { "width": 1440, "height": 900 },
  "shots": [
    {
      "id": "choose-service",
      "purpose": "Show the real start of the booking flow",
      "path": "/booking",
      "proofFeatureId": "booking-create",
      "expected": "Service selection is visible",
      "expectedSelector": "[data-demo='service-list']",
      "holdMs": 700,
      "actions": [
        { "type": "click", "selector": "[data-demo='service-card']:first-child" }
      ]
    }
  ]
}
```

Prefer stable `data-demo`/`data-testid` selectors in demo-safe screens rather than brittle CSS chains.

## Safety

Do not point this at destructive production flows. Use demo/staging/local data and keep credentials outside plan files.

## Compose a vertical sales-ready MP4

Requires `ffmpeg` on PATH. The compositor keeps the product capture uniformly scaled and places hook/CTA text outside the main product frame.

```bash
npm run compose -- \
  --plan ../../content/tiktok/my-project/booking-flow/video-plan.json \
  --input ../../captures/my-project/booking-flow/raw.webm \
  --output ../../output/tiktok/my-project/booking-flow.mp4
```

The default output is 1080x1920 H.264/AAC MP4. Keep the final human/editor review step: automated composition is a baseline, not a substitute for checking pacing and legibility.
