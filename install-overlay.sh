#!/usr/bin/env bash
set -euo pipefail

if [[ ! -f README.md || ! -d .agents/skills || ! -d brand ]]; then
  echo "Run this script from the root of the berkahbekhan v2-design checkout." >&2
  exit 1
fi

SRC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

for p in .agents/skills/project-intelligence .agents/skills/sales-content .agents/skills/sales-video-director .agents/skills/tiktok-content .agents/skills/demo-recorder .agents/skills/video-review brand schemas tools/video-recorder content/tiktok output/tiktok captures templates/video; do
  mkdir -p "$p"
  cp -R "$SRC_DIR/$p/." "$p/"
done

cp "$SRC_DIR/README-VIDEO-UPDATE.md" ./README-VIDEO-UPDATE.md

python3 - <<'PY'
from pathlib import Path
p = Path('README.md')
s = p.read_text()

s = s.replace(
    '# berkahbekhan.inc — Instagram Content Generator Workspace',
    '# berkahbekhan.inc — Social Portfolio & Client Acquisition Workspace',
    1,
)

old = 'A specialized, reproducible workspace and agentic skill system for generating editorial-grade, developer-focused Instagram content for @berkahbekhan.inc.'
new = 'A specialized, reproducible workspace and agentic skill system for turning real software projects into Instagram, TikTok, and Reels content for @berkahbekhan.inc, with real product evidence, client-facing Indonesian messaging, deterministic demo recording, and zero fabricated project claims.'
s = s.replace(old, new, 1)

marker = '## 6. Short-form Video & Sales Pipeline'
if marker not in s:
    s = s.rstrip() + '''\n\n---\n\n## 6. Short-form Video & Sales Pipeline\n\nTikTok/Reels now use the same core philosophy as the feed: **THE WORK IS THE DESIGN**. AI may inspect, plan, write, and direct; the real application must perform every visible product interaction.\n\n```text\nREAL PROJECT\n  -> project-intelligence\n  -> project-truth.json\n  -> sales-content\n  -> tiktok-content\n  -> video-plan.json\n  -> demo-recorder / Playwright\n  -> raw.webm\n  -> 1080x1920 composition\n  -> video-review\n  -> TikTok / Reels\n```\n\nNew skills: `project-intelligence`, `sales-content`, `sales-video-director`, `tiktok-content`, `demo-recorder`, and `video-review`. See `brand/video-direction.md`, `schemas/`, and `tools/video-recorder/` for the operating rules and executable recorder.\n'''

p.write_text(s)
PY

echo "Video + sales overlay installed and README updated."
echo "Next: review with 'git diff', then commit on v2-design."
