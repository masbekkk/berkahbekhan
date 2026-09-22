---
name: content-review
description: Pre-publication audit and quality assurance skill for @berkahbekhan.inc. Evaluates drafts with the AI-Slop Test, Simplification Test, and Portfolio Test.
when_to_use: Use before approving or publishing any Instagram post, carousel, story, caption, or Figma design spec for @berkahbekhan.inc.
allowed-tools: Read, Grep, Glob
version: 2.0.0
priority: CRITICAL
---

# Content Review & Quality Audit Skill

> **Core Mandate**: Strict pre-publication quality gate for **@berkahbekhan.inc**.  
> Guarantees that every post adheres to **THE WORK IS THE DESIGN**, eliminates AI slop, enforces strict factual grounding, and ensures designs communicate authentic developer craftsmanship.

---

## 1. The 3 Mandatory Pre-Flight Tests

Every proposed post (copy, layout, and visual framing) must pass all three tests before approval:

### Test 1: The AI-Slop Test
> *"Does this look like something an AI image generator or generic marketing template tool would automatically produce as a software portfolio?"*
- **Check For**: Excessive dark cards inside dark cards, rounded container bubbles, pill badge clusters, floating 3D spheres, neon glow halos, gradient meshes, fake browser chrome with colored dots, stock corporate buzzwords (*"supercharge"*, *"revolutionize"*, *"unlock your potential"*), or generic `CASE STUDY / 01 / 07` presentation decks.
- **Action**: If **YES** → **IMMEDIATELY REJECT & REDESIGN**.

### Test 2: The Simplification Test
> *"Can 20% of the visual or textual elements be removed without losing meaning?"*
- **Check For**: Redundant borders, decorative divider lines, extra tag pills, superfluous subheads, unnecessary mockup frames, decorative background shapes.
- **Action**: If **YES** → **REMOVE THEM IMMEDIATELY**.

### Test 3: The Portfolio Test
> *"Does this make the viewer immediately understand that this person actually builds software?"*
- **Check For**: Real product UI dominance, genuine technical naming (exact libraries, models, schemas), concrete operational problems, and credible engineering workflows.
- **Action**: If **NO** → **REJECT & RESTRUCTURE**.

---

## 2. Comprehensive Audit Matrix

### A. Content & Veracity Audit
- [ ] **Factually Supported**: Is every claim, tech stack mention, and metric backed by actual files in `projects/<project-name>/`?
- [ ] **Real Project & Screens**: Are the screenshots genuine captures of a running or built application?
- [ ] **Real Features**: Does the post describe functional software capabilities rather than hypothetical roadmap items?
- [ ] **Concise Wording**: Is the copy tight, direct, and free of sales padding?
- [ ] **One Dominant Message**: Does the post tackle exactly one primary idea?

### B. Design & Visual Audit
- [ ] **Actual Work Visible**: Is the real software interface clearly visible and prominent?
- [ ] **Screenshot Scale**: Does the screenshot occupy at least 60%–85% of the canvas?
- [ ] **Clear Hierarchy**: Is the reading order obvious at a glance on mobile?
- [ ] **Intentional Whitespace**: Does the layout have generous breathing room without cramped containers?
- [ ] **Strong Typography**: Are font pairings disciplined (Inter/Geist Sans + JetBrains/Geist Mono)?
- [ ] **Zero Unnecessary Decoration**: Are decorative grids, 3D shapes, and neon gradients completely absent?
- [ ] **Non-Repetitive Composition**: Does this post avoid repeating the exact layout of the preceding post?
- [ ] **Mockup Elimination**: Is the screenshot presented raw and orthographic without fake laptop/phone bezels?

---

## 3. Strict Anti-Fabrication Mandate

Never approve content containing:
- ❌ Fabricated user counts or performance metrics (e.g., *"300% faster"*, *"used by 10,000+ users"*) unless verified by project logs.
- ❌ Fictional client names, quotes, or testimonials.
- ❌ Hallucinated technologies (e.g., claiming Redis or Kafka when only PostgreSQL is used).
- ❌ Generic vector illustrations standing in place of real software UI.

If information is missing:
- State `"Information not provided"` or focus strictly on documented code and UI.
- Never fill missing gaps with plausible-sounding fictional claims.

---

## 4. Review Report Format

When reviewing a draft post or Figma spec, output this standardized report:

```markdown
### Content Review Report: [Post Title / Project Slug]

- **The AI-Slop Test**: [PASS / FAIL] — [Notes]
- **The Simplification Test**: [PASS / FAIL] — [Notes on 20% reduction]
- **The Portfolio Test**: [PASS / FAIL] — [Credibility check]
- **Factual Accuracy**: [PASS / FAIL] — [Cross-check against project files]
- **Visual Hierarchy & Framing**: [PASS / FAIL] — [Screenshot dominance & typography]
- **One Primary Idea**: [PASS / FAIL] — [Identified dominant message]

**Verdict**: [APPROVED / REVISION REQUIRED]

**Required Modifications (if revision required)**:
1. ...
2. ...
```
