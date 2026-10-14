# Feed refactor review

Date: 2026-10-13 (visual review 2026-10-12; binding completion 2026-10-13). Audience: Indonesian UMKM and service businesses. Status: deliverables and native style/variable binding complete; nothing published.

## Open the work

- [New Figma page](https://www.figma.com/design/rlngsFaoNqCPP8PzeItbLk/Untitled?node-id=49-30)
- [Six-design preview](https://www.figma.com/design/rlngsFaoNqCPP8PzeItbLk/Untitled?node-id=52-258)
- [Nine-position feed plan](https://www.figma.com/design/rlngsFaoNqCPP8PzeItbLk/Untitled?node-id=52-177)
- [Local six-design preview](../../output/figma-exports/feed-refactor-preview.png)
- [Local feed plan](../../output/figma-exports/feed-refactor-overview.png)
- [Copy and source evidence](feed-refactor-brief.md)

## Delivered

Four native component masters, three cover instances, three additional carousel frames, an audit section, a nine-position planning board, and a six-design preview. The four-slide carousel reuses the selected-work cover, so there are six unique production designs and seven production PNG exports.

| Deliverable | Figma node | Production file |
| --- | --- | --- |
| Selected-work cover | `51:106` | `output/feed/portal-dua-akses/post.png` |
| Feature cover | `51:116` | `output/feed/rapor-satu-pdf/post.png` |
| Service cover | `51:127` | `output/feed/website-untuk-usaha/post.png` |
| Carousel | `51:106`, `51:143`, `51:153`, `51:163` | `output/carousel/portal-sekolah-refactor/slide-01.png` to `slide-04.png` |

Each production folder includes its caption. Raw node-ID exports and execution records are retained for traceability. The six unfinished feed slots are labeled RENCANA / BELUM DIBUAT and excluded from production exports.

## Content Review Report

- **Proportion & Distortion Check: PASS.** Nine source-image layers across the six designs and four masters retain the native 2880:1800 ratio. Cropping is performed in editable clipping frames.
- **Screenshot Readability Check: PASS for focal content.** Inspected full-size exports and 360px previews. Headlines, role choices, class/semester selectors, and the DM action remain understandable. Peripheral UI copy and quiet metadata are secondary.
- **Multi-Image Hierarchy Check: N/A.** Each product visual is one source capture; the paired role choices are part of the real interface, not separate compressed screenshots.
- **AI-Slop & Card Test: PASS.** No added browser chrome, grid decorations, gradients, nested presentation cards, or invented interface assets. Client-facing copy replaces technical cover language.
- **Simplification Test: PASS.** Removed framework pills, redundant technical explanations, and unsupported metrics. Each slide has one job; image-first slides interrupt the repeated headline-first rhythm.
- **Portfolio & Veracity Test: PASS for inspected evidence.** Claims are grounded in source code, manual sections, and screenshots listed in the brief. The school context is explicit. No production runtime, conversion uplift, user count, or sole-authorship claim was inferred.
- **Carousel Story & Sequence Check: PASS.** Introduction, role detail, report workflow, inquiry. Identical export dimensions and safe margins throughout.
- **Editability Check: PASS.** Four Figma COMPONENT masters; three cover INSTANCE nodes; editable TEXT and separate image layers; vertical Auto Layout on every master and production frame.
- **Native token/style binding: PASS.** Existing paint/text styles are bound to the four masters and three standalone carousel frames; cover instances inherit them. The `space/post-margin` variable (80px) controls all four outer margins. Readback verifies shared text/fill styles on all 62 authored text nodes and margin bindings on all ten production/master frames.

**Verdict:** Visual assets and reusable Figma system are ready for user review. Nothing was published.

## Verification and limitations

`node scripts/verify-feed-refactor.mjs` checks the captured Figma node tree and PNG headers. Result: six unique production frames, four masters, 62 text nodes inside 80px safe bounds, nine proportional images, minimum authored-text contrast 4.66:1, and seven 1080 x 1350 production PNGs. See `output/figma-exports/feed-refactor/verification.json`.

The existing node `24:341` was inspected before and after the work to check preservation. Original-page exports are stored under `output/figma-exports/feed-refactor-audit/`.

The two Instagram reference profiles could not be visually fetched earlier, so no claim of a precise visual comparison is made. The design is grounded in the actual Figma audit, local brand guidance, and the user's selected audience.

Figwright server 0.6.0 reported plugin 0.5.0. The earlier variable/style API connection failure was resolved on 2026-10-13. Bindings succeeded and were verified through node readback. The editorial variable collection now contains `space/post-margin`; original variables were not changed.

The complete refactor page was compared before and after binding: all serialized properties except style references and variable bindings remained identical. All six fresh production PNGs are byte-for-byte identical to the prior reviewed exports. The newly exported six-design overview was also visually inspected. See `output/figma-exports/feed-refactor/binding-verification.json`, `resume-finish-results.json`, and `bound/` for evidence.

## Maintaining the build

`scripts/figwright.mjs` runs sequential MCP requests against the locally cached Figwright server, or the entry specified by `FIGWRIGHT_MCP_ENTRY`. It saves every completed response and stops at the first error. `scripts/prepare-feed-build.mjs` prepares staged request files and refuses a phase that already has results to prevent duplicate creation. Set `FIGWRIGHT_SESSION_ID` if the plugin session changes. Inspect existing results and resume only unfinished work.

Use the existing Figma component instances for normal content editing. The saved creation requests are implementation records, not commands to replay over the completed page.

`scripts/prepare-feed-bindings.mjs` records the completed binding migration. It requires the saved inspection snapshots and a verified `FIGWRIGHT_SESSION_ID`; run `node scripts/prepare-feed-bindings.mjs` to prepare requests only. The actual migration used `node scripts/figwright.mjs output/figma-exports/feed-refactor/resume-finish-requests.json output/figma-exports/feed-refactor/resume-finish-results.json`. Do not replay historical token-creation requests. Verification runs with `node scripts/verify-feed-refactor.mjs` against the final captured tree.
