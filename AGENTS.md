# Agent Guide: berkahbekhan.inc Instagram Content Generator

## Purpose

This repository is a design and content workspace for **@berkahbekhan.inc**. Produce Instagram feed posts, carousels, stories, and reel covers that document real software built by the developer.

**THE WORK IS THE DESIGN.** Real interfaces, verified code, and concrete engineering decisions are the primary material. Portfolio work leads the feed; technical tips support it.

The current audience is Indonesian UMKM and service businesses seeking websites. Read `brand/feed-direction.md` for the active client-facing direction; it supersedes older template examples. Use Indonesian benefit-led copy, verified work, actual process, and clear service invitations. Technical details normally belong in captions. Follow the selected post's purpose rather than enforcing a screenshot quota or a nine-slide deck.

## Start Here

1. Read `README.md` for the workspace structure and operating pipeline.
2. Read `brand/README.md`, `brand/colors.md`, `brand/typography.md`, `brand/visual-rules.md`, and `brand/content-rules.md` before designing or reviewing content.
3. Inspect the requested project's source files, documentation, and screenshots before drafting claims or choosing a layout.
4. Read the relevant local skills listed below. Use only the skills needed for the task.
5. Inspect existing drafts and output for context, then check `git status --short` before editing.

Follow explicit user direction within the task's scope. Use current brand documents and the brand skill for visual guidance; existing templates, drafts, and exports are examples, not overrides. Some older artifacts use different palettes and presentation styles. Do not carry those choices forward automatically. If current guidance conflicts in a way that affects the deliverable, identify the conflict and resolve it explicitly.

## Repository Map

| Path | Responsibility |
| --- | --- |
| `brand/` | Brand identity, color tokens, typography, geometry, and editorial rules. |
| `.agents/skills/` | Reusable instructions for strategy, composition, Figma construction, and review. |
| `projects/<project-name>/` | Optional local project inputs: summary, documentation, screenshots, and assets. |
| `content/portfolio/` | Portfolio briefs, captions, and carousel storyboards. |
| `content/tips/` | Verified engineering tips and technical breakdowns. |
| `content/reels/`, `content/stories/` | Reel scripts and story copy. |
| `content/drafts/` | Exploratory content that is not ready for production. |
| `templates/feed/`, `templates/carousel/`, `templates/story/`, `templates/reel/` | Reusable composition specifications and layout sources. |
| `output/feed/`, `output/carousel/`, `output/story/`, `output/reel/` | Rendered assets and their production sources. |
| `references/` | Visual inspiration and benchmarks; consult `references/README.md`. |

Use descriptive lowercase kebab-case names for new project and post folders. Keep a post's production source, required assets, and exports together under `output/<format>/<post-slug>/`. Number carousel exports in reading order, such as `slide-01.png`.

## Skill Routing

All paths below are relative to `.agents/skills/`.

| Task | Skill entry point |
| --- | --- |
| Complete Instagram content pipeline | `instagram-content/SKILL.md` |
| Content angles, composition families, and feed rhythm | `instagram-art-direction/SKILL.md` |
| Project showcase or focused micro-carousel | `instagram-portfolio/SKILL.md` |
| Developer insight grounded in actual build work | `instagram-tips/SKILL.md` |
| Visual identity and design tokens | `berkahbekhan-brand/SKILL.md` |
| Editable Figma frames, components, and Auto Layout | `figma-design/SKILL.md` |
| Build or update designs in a connected Figma file using Figwright | `figma-build/SKILL.md` |
| Generate framework-aware code from a connected Figma design | `figma-codegen/SKILL.md` |
| Accuracy and visual quality audit | `content-review/SKILL.md` |

Art direction determines the message and composition. Figma construction implements those decisions. Content review checks the resulting copy and visuals. Keep these responsibilities clear even when one agent performs the entire task.

## Evidence and Project Inputs

- Support both ingestion modes documented in `projects/README.md`: direct reads from a supplied external project directory, or local materials in `projects/<project-name>/`.
- Treat external project sources and original screenshots as read-only inputs unless the user requests changes there. Store new content and derivatives in this workspace.
- Verify technologies and versions against manifests; features against implementation and documentation; results against actual measurements or logs.
- Record supporting file paths in the content brief so claims and visual assets can be traced to their sources. An old draft's audit verdict is not fresh evidence.
- Never invent features, client testimonials, performance improvements, user counts, deployment status, or technology choices.
- Omit unavailable facts or state `Information not provided`. If a required asset is missing, identify it and continue the work supported by available evidence.
- Use genuine software captures. Do not generate replacement UI, fictional people, or fabricated proof with an image generator.

## Content and Design Workflow

1. **Inspect the material.** Identify actual screens, workflows, architecture, and challenges. Inspect image dimensions, aspect ratios, focal points, and legibility.
2. **Choose the message.** For open-ended planning, identify several independent content opportunities. For a specific request, focus on the requested angle. Give each post one primary idea and each slide one job.
3. **Select a composition.** Use PROJECT HERO, FEATURE SPOTLIGHT, PRODUCT SCREENSHOT, TECHNICAL BREAKDOWN, DEVELOPMENT INSIGHT, PROJECT DETAIL, or PROOF / ACHIEVEMENT. Adapt the layout to the evidence.
4. **Write a brief.** Include source paths, format, headline, concise supporting copy, caption, selected family, canvas treatment, and visual assets. For carousels, specify slide order and each slide's purpose.
5. **Construct the design.** Prefer editable Figma frames with Auto Layout, reusable components, and brand tokens when the required tools are available. Verify tool availability before promising a Figma deliverable. A local HTML renderer can produce previews and exports when appropriate; describe its actual output accurately.
6. **Review the visuals and facts.** Apply `content-review`, correct failures, and inspect rendered assets at full resolution and mobile viewing size.
7. **Review feed rhythm.** Evaluate a 3 x 3 overview when planning multiple posts or when neighboring posts are available. Vary composition and light/dark surfaces; avoid adjacent identical families. Do not fabricate existing feed history or add filler to complete a grid.
8. **Export and hand off.** Save the editable source, ordered images, caption, evidence references, and review findings. Generating assets does not itself authorize posting to Instagram; publish only when requested.

Default to a single post or focused 2-4 slide micro-carousel. Use more slides only when the verified material supports a coherent story or the user requests them. Nine-slide sequences in the documentation are examples, not quotas.

## Visual Requirements

- **Feed and carousel:** default to `1080 x 1350 px` with `80px` outer margins. All slides in one carousel must have identical dimensions. Square posts use `1080 x 1080 px` when requested.
- **Stories:** `1080 x 1920 px`, with `250px` top, `350px` bottom, and `80px` side safe zones.
- **Reel covers:** `1080 x 1920 px`; protect essential content within the centered square and feed crop regions specified in `brand/visual-rules.md`.
- Preserve every screenshot's native aspect ratio. Scale uniformly; use contain, intentional cropping, or detail crops. Change the composition when the image does not fit.
- Default to one dominant screenshot. Add another only to explain an essential relationship, workflow, or comparison. Split slides if interface labels become unreadable.
- Use Inter or Geist Sans for editorial text and JetBrains Mono or Geist Mono for technical metadata. Follow `brand/typography.md` for sizes and hierarchy. Remove copy before shrinking it below readable sizes.
- Use the spacing scale `8, 16, 24, 32, 48, 64, 80px`.
- Choose light, dark, neutral, or subtle project-derived canvas treatments using `brand/colors.md`. Keep the application's original UI colors. Limit framing accents to 5% of slide area.
- Place screenshots directly on the canvas with restrained hairline borders and corners where appropriate. Avoid device mockups, fake browser chrome, nested cards, neon glows, decorative grids, gradient meshes, glassmorphism, floating 3D objects, and excessive pills.
- Keep branding quiet and consistent with `@berkahbekhan.inc`. Avoid repeated presentation-deck headers and emojis in slide titles.
- Write concrete, understated copy in the requested language. Avoid hype and the banned vocabulary in `brand/content-rules.md`.
- Use reference accounts for inspiration without copying their identity, layouts, logos, or wording.

## Tooling and Verification

Figwright uses an MCP server configured with `command: "npx"` and `args: ["-y", "@figwright/mcp@latest"]`. The upstream `figma-build` and `figma-codegen` skills are installed in `.agents/skills/`, with provenance recorded in `skills-lock.json`. Use them alongside the project's `figma-design` skill and brand rules. Before operating on Figma, verify the Figwright plugin is connected to the target open file with `ping`; claim the intended file when multiple files are connected. Installation alone does not prove a live connection.

This workspace has no root package manifest or standard build/test command. Do not invent `npm` scripts or introduce an application framework for a content-only task.

An existing local renderer lives at `output/carousel/bk-mtsngresik-v2/render_slides.js`. It imports Playwright from the sibling `bk-mtsngresik-v2` project's dependencies, loads Google Fonts, and overwrites that carousel's seven PNG exports. Verify its dependency path, browser installation, font availability, and intended output before using it. Treat it as a project-specific example, not a portable generator.

For newly written renderers, document real prerequisites and the exact invocation. Wait for fonts and images before capture. Check exports for correct pixel dimensions, ordering, missing assets, clipping, distorted screenshots, and mobile legibility. Do not report visual review as complete without inspecting the rendered result.

Every finished design must pass:

- **Proportion and readability:** true screenshot geometry, legible text, and clear image hierarchy.
- **AI-Slop Test:** the design reads as real software work with an original editorial composition.
- **Simplification Test:** remove elements that add no meaning; check whether 20% can be removed.
- **Portfolio Test:** the viewer can immediately understand what the developer built.
- **Fact check:** each feature, stack claim, and result has supporting evidence.

For documentation-only changes, verify referenced paths, consistency with current guidance, and `git diff --check`. Do not rerender unrelated assets. Preserve existing user changes and keep edits scoped to the request.

In the final handoff, link the created files, state what was checked, and disclose any missing inputs or tool limitations. Distinguish drafts, reviewed exports, and published assets accurately.
