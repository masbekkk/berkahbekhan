# Instagram Feed Refactor: Figma + Figwright

**Status:** Complete as of 2026-10-13. Six unique designs, four component masters, captions, and overview boards delivered in Figma. Shared color/text styles and the outer-margin variable are bound and verified. See `content/drafts/feed-refactor-review.md` for results and links.

**Audience:** Indonesian UMKM and service businesses seeking websites.

**Goal:** Make @berkahbekhan.inc communicate what clients can hire you for, supported by readable examples of real work and a clear inquiry path.

## Direction and first release

Use short Indonesian headlines about client needs, authentic product screenshots, varied editorial compositions, and a quiet brand signature. Keep typography and spacing consistent; let each project supply its own visual character. Move framework details into captions. Remove decorative grids, fake browser chrome, redundant badges, and repetitive dark-card layouts.

Create **four reusable composition masters, three finished post covers, and one four-slide case study**. Reuse the selected-work cover as the carousel's first slide: six unique production frames. Add a nine-position feed planning board; unfinished positions remain clearly labeled planning notes, never exported as portfolio proof. No publishing is included.

## Inputs and dependencies

- Target: [existing Figma file](https://www.figma.com/design/rlngsFaoNqCPP8PzeItbLk/Untitled?node-id=24-341), file key `rlngsFaoNqCPP8PzeItbLk`, starting node `24:341`. Inspected live and exported; the original overview was verified unchanged after the refactor.
- References: [Webcare IDN](https://www.instagram.com/webcare.idn/) and [Apple Developer Academy @ UC](https://www.instagram.com/ucs_appledeveloperacademy/). Previous web access failed; visual conclusions must wait for accessible posts or supplied captures.
- Available evidence: `output/figma-exports/4-2.png`, `output/carousel/bk-mtsngresik-v2/`, and the sibling source repository `../bk-mtsngresik-v2`. The local Figma export is not confirmed to represent the linked node.
- Figwright was connected through `scripts/figwright.mjs` and the running local relay. The target node was read and the new page created at `49:30`. Server 0.6.0 / plugin 0.5.0; node construction and exports were verified. Variable creation and style binding returned Figma API connection errors.

## Ordered implementation tasks

1. [x] **Connect and identify the file.** Discover actual Figwright tool schemas, run `ping`, inspect connected files, and use `list_files` / `use_file` when needed. Match the target file and node before any write. **Pass:** the intended frame can be read and screenshotted. Connection failure blocks Figma work only; evidence and copy preparation can continue.

2. [x] **Audit the design and references.** Capture the existing frames; inventory variables, shared styles, and components with `get_variable_defs`, `get_styles`, and `get_local_components` / `scan_components`. Record specific keep/change decisions and accessible reference examples. **Pass:** findings distinguish observed visuals from assumptions; originals are preserved.

3. [x] **Select evidence and write copy.** Prepare `content/drafts/feed-refactor-brief.md` with project, contribution, source paths, headline, visual, caption, and CTA for each post. Prioritize a verified business website if available; otherwise identify the school portal honestly as education-sector work. Never relabel it as an UMKM commission. **Pass:** every capability has evidence; unsupported metrics and offers are omitted.

4. [x] **Align the repository guidance.** Update `brand/content-rules.md`, `brand/visual-rules.md`, `templates/README.md`, and affected instructions in `AGENTS.md` to support client-facing copy, process content, and service invitations while preserving portfolio-first evidence rules. Resolve conflicting local skill guidance without rewriting the installed upstream Figwright skills. **Pass:** recurring generation instructions support the new direction consistently.

5. [x] **Build an isolated Figma system.** Create a new `Feed Refactor` page with `Audit`, `Components`, `Posts`, and `Feed Overview` sections. Reuse compatible components and token bindings; create separate variants or variables for changed styles so original posts remain intact. Use editable text, replaceable images, semantic names, and Auto Layout. **Pass:** four masters exist: Selected Work, Useful Feature, Behind the Work, Service Invitation.

6. [x] **Design the three pilot covers.** Instantiate Selected Work, Useful Feature, and Service Invitation using verified material. Vary image scale, text position, and light/dark treatment; use concise Indonesian hooks and a DM invitation without invented pricing or guarantees. Run `get_screenshot`, inspect, and correct after each build. **Pass:** the covers have distinct compositions, a recognizable shared identity, and a clear client-facing message.

7. [x] **Complete the case study and feed board.** Extend the selected-work cover into four slides: useful outcome, relevant interface detail, demonstrated workflow, contribution plus inquiry CTA. Plan nine posts as five work examples, two client questions, one process post, and one service offer. Map each to an appropriate master and record intended posting order. **Pass:** the carousel tells one supported story; each post stands alone; remaining grid slots are explicitly planned content.

8. [x] **Verify, export, and hand off.** Apply `content-review` to screenshots and copy, fix failures, then export PNGs at `1080 x 1350`. Check 80px safe margins, native screenshot proportions, contrast, clipping, and readability at roughly 360px display width. Inspect the overview at thumbnail size. **Pass:** six unique frames pass review, remain editable, and export correctly; no unsupported proof, placeholders, or planning notes enter production assets.

## Handoff and completion

Save covers to `output/feed/<post-slug>/`, carousel slides to `output/carousel/<case-study-slug>/`, and the overview to `output/figma-exports/feed-refactor-overview.png`. Record Figma node links, source evidence, captions, export paths, and review results in `content/drafts/feed-refactor-review.md`. Document reusable master links in `templates/feed/README.md` and `templates/carousel/README.md`.

Complete when the six unique frames and four masters are verified, originals remain intact, and a prospective client can understand the service, see real work, and find the inquiry action. After publication is separately requested, compare qualified inquiries, profile visits, and saves; engagement improvement is an experiment, not a promised result.

## Execution notes

- Task 2: live Figma audit completed; Instagram reference imagery remained unavailable, so no exact visual comparison is claimed.
- Task 5: completed on 2026-10-13 after the Figma connection recovered. Existing shared paint/text styles were bound to the four masters and three standalone carousel frames; cover instances inherit them. Created and bound `space/post-margin` (80px) in the existing editorial collection. Readback confirms bindings, and all six production PNGs are byte-identical to the prior reviewed exports.
- Task 8: visual, geometry, contrast, PNG-size, source-evidence, and original-preservation checks passed. Production files and node links are listed in the review.
