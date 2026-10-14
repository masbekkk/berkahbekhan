---
name: content-review
description: Pre-publication audit and quality assurance skill for @berkahbekhan.inc. Evaluates drafts with the AI-Slop Test, Simplification Test, and Portfolio Test.
when_to_use: Use before approving or publishing any Instagram post, carousel, story, caption, or Figma design spec for @berkahbekhan.inc.
allowed-tools: Read, Grep, Glob
version: 2.1.0
priority: CRITICAL
---

# Content Review & Quality Audit Skill
## Active client-facing feed direction

For @berkahbekhan.inc content, first read [brand/feed-direction.md](../../../brand/feed-direction.md). This is the active direction for Indonesian UMKM and service businesses and takes precedence over older examples below: lead with practical Indonesian copy, preserve real project evidence, support actual process stories and service invitations, and normally move framework details into captions. Screenshot-area targets apply to product showcases, not every post. Nine-slide sequences and stack-first covers are optional examples. Use the four publishing compositions alongside the seven visual families. Verify the headline and focal UI at mobile size; do not require all peripheral screenshot text to be readable. Keep the original industry visible and never invent results.

> **Core Mandate**: Strict pre-publication quality gate for **@berkahbekhan.inc**.  
> Guarantees that every post adheres to **THE WORK IS THE DESIGN**, eliminates AI slop, enforces strict factual grounding, and ensures designs communicate authentic developer craftsmanship.
> 
> 🔴 **PRIMARY MANDATE**: Optimize for **SCREENSHOT READABILITY > NUMBER OF SCREENSHOTS**.  
> Never optimize for **NUMBER OF SCREENSHOTS > READABILITY**.

---

## 1. The 6 Mandatory Pre-Flight Tests

Every proposed post or carousel slide (copy, layout, and visual framing) must pass all six tests before approval:

### Test 1: The Proportion & Distortion Test
> *"Is every project screenshot completely undistorted and preserving its native aspect ratio?"*
- **Check For**: Non-uniform scaling, horizontal or vertical stretching, squashed UI tables, distorted typography, or deformed icons.
- **Action**: If distorted in ANY way → **IMMEDIATELY REJECT & RESTORE NATIVE ASPECT RATIO**.

### Test 2: The Screenshot Readability Test
> *"Can UI labels, table rows, button copy, and chart elements be easily read at mobile preview scale?"*
- **Check For**: Microscopic desktop screenshots shrunk down to fit excessive surrounding text or secondary elements.
- **Action**: If unreadable → **DO NOT SQUEEZE. SPLIT ACROSS CONSECUTIVE SLIDES OR CROP INTENTIONALLY**.

### Test 3: The Multi-Image Hierarchy Test
> *"If a slide contains more than one screenshot, is there a clear visual hierarchy and an essential reason for both images?"*
- **Check For**: Equal-sized side-by-side desktop boxes (`SCREENSHOT A | SCREENSHOT B`) that make both unreadable, or redundant secondary screenshots added without communicative purpose.
- **Action**: If hierarchy is missing or images are tiny → **ENFORCE HERO (70%) + SECONDARY (30%), VERTICAL SEQUENCE, OR SPLIT INTO TWO SLIDES**.

### Test 4: The AI-Slop & Card Test
> *"Does this look like an AI image generator or generic marketing template tool automatically produced it?"*
- **Check For**: Excessive dark cards inside dark cards, rounded container bubbles (`32px`+), pill badge clusters, floating 3D spheres, neon glow halos, gradient meshes, fake browser chrome with colored dots, stock corporate buzzwords (*"supercharge"*, *"revolutionize"*), or generic `CASE STUDY / 01 / 07` presentation decks.
- **Action**: If **YES** → **IMMEDIATELY REJECT & SIMPLIFY**.

### Test 5: The Simplification Test (Less Is Better)
> *"Can 20% of the visual or textual elements be removed without losing meaning?"*
- **Check For**: Redundant borders, decorative divider lines, extra tag pills, superfluous subheads, unnecessary mockup frames, or long paragraphs that crowd out the screenshot.
- **Action**: If **YES** → **REMOVE THEM IMMEDIATELY**. Never shrink fonts to fit excess copy.

### Test 6: The Portfolio & Veracity Test
> *"Does this make the viewer immediately understand that this person actually builds software?"*
- **Check For**: Real product UI dominance, genuine technical naming (exact libraries, models, schemas), concrete operational problems, and credible engineering workflows backed by actual files in `projects/<project-name>/`.
- **Action**: If **NO** → **REJECT & RESTRUCTURE**.

---

## 2. Comprehensive Audit Matrix

### A. Screenshot Geometry & Proportion Audit
- [ ] **Strict Aspect Ratio**: Every screenshot preserves its natural aspect ratio with zero non-uniform scaling.
- [ ] **Fitting Method**: Uses `CONTAIN`, `COVER + CROP`, or `DETAIL CROP` (never `STRETCH TO FIT`).
- [ ] **Readability Threshold**: Primary UI text, data rows, and controls are legible at mobile viewport scale.
- [ ] **Multi-Screen Justification**: Multiple screenshots appear only when communicating a clear relationship/workflow, with a dominant primary image (70/30 weight).
- [ ] **Split Rule Applied**: Squeezed multi-image compositions have been split into separate slides rather than compromised.
- [ ] **Direct Editorial Placement**: Screenshots sit cleanly on canvas without fake laptop/phone frames or nested card wrappers.

### B. Carousel Sequence & Storytelling Audit
- [ ] **Carousel Story Arc**: Slides follow a purposeful narrative (01 Hook → 02 Product → 03 Feature → 04 Workflow → 05 Detail → 06 Technical → 07 Sub-portal → 08 Insight → 09 Closing).
- [ ] **One Job Per Slide**: Every slide answers exactly one primary question without trying to explain the entire system.
- [ ] **Visual Rhythm**: Visual density alternates across the sequence (Hero → UI heavy → Typography+UI → Workflow → Detail → Technical).
- [ ] **Consistent Canvas & Margins**: All slides use identical `1080 × 1350 px` dimensions and consistent `80px` safe margins.

### C. Content & Veracity Audit
- [ ] **Factually Supported**: Every claim, tech stack mention, and metric is backed by actual files in `projects/<project-name>/`.
- [ ] **Zero Fabrication**: No invented user counts, fake benchmarks, or unverified claims. Missing info is omitted or marked `"Information not provided"`.
- [ ] **Reading Hierarchy**: Primary Visual (60%–85% canvas) → Punchy Headline → Short 2-line Narrative → Tech Metadata.

---

## 3. Review Report Format

When reviewing a draft post or Figma spec, output this standardized report:

```markdown
### Content Review Report: [Post Title / Project Slug]

- **Proportion & Distortion Check**: [PASS / FAIL] — [Aspect ratio preservation & geometry]
- **Screenshot Readability Check**: [PASS / FAIL] — [Legibility at mobile viewport scale]
- **Multi-Image Hierarchy Check**: [PASS / FAIL / N/A] — [70/30 ratio, vertical stack, or split recommendation]
- **The AI-Slop & Card Test**: [PASS / FAIL] — [Direct placement vs nested cards/mockups]
- **The Simplification Test**: [PASS / FAIL] — [20% reduction check, absence of crowded text]
- **The Portfolio & Veracity Test**: [PASS / FAIL] — [Factual grounding against project files]
- **Carousel Story & Sequence Check**: [PASS / FAIL / N/A] — [Narrative arc & one-job per slide]

**Verdict**: [APPROVED / REVISION REQUIRED]

**Required Modifications (if revision required)**:
1. ...
2. ...
```

