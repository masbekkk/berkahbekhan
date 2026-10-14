---
name: instagram-art-direction
description: Decides what to post for @berkahbekhan.inc by mining real projects for multiple independent content opportunities, assigning composition families, and curating feed-level visual rhythm.
when_to_use: Use when analyzing real projects, identifying content angles, selecting composition families, or planning 3x3 feed rhythm before designing in Figma.
allowed-tools: Read, Grep, Glob
version: 2.0.0
priority: HIGH
---

# Instagram Art Direction Skill
## Active client-facing feed direction

For @berkahbekhan.inc content, first read [brand/feed-direction.md](../../../brand/feed-direction.md). This is the active direction for Indonesian UMKM and service businesses and takes precedence over older examples below: lead with practical Indonesian copy, preserve real project evidence, support actual process stories and service invitations, and normally move framework details into captions. Screenshot-area targets apply to product showcases, not every post. Nine-slide sequences and stack-first covers are optional examples. Use the four publishing compositions alongside the seven visual families. Verify the headline and focal UI at mobile size; do not require all peripheral screenshot text to be readable. Keep the original industry visible and never invent results.

> **Core Philosophy**: **THE WORK IS THE DESIGN.**  
> The Instagram account for **@berkahbekhan.inc** is a developer's visual archive of real software that has actually been built. Every post must communicate: *"This developer actually builds software,"* never *"This account generates AI portfolio graphics."*
> 
> **MANDATORY**: Optimize for **SCREENSHOT READABILITY > NUMBER OF SCREENSHOTS**.

This skill answers the primary editorial and visual direction question: **"What should I post, how should the carousel unfold as a story, and what layout honors the screenshots?"**  
It inspects real project repositories, identifies authentic visual materials, defines the narrative arc, selects layout compositions based on screenshot geometry, and curates visual rhythm.

---

## 1. Absolute Rejections (Anti-AI-Slop Direction)

The generated content must NEVER feel like an AI-generated Behance case study or generic marketing pitch. We explicitly reject:

- ❌ Distorted, squashed, or non-uniformly stretched screenshots
- ❌ Unreadable microscopic screenshots crammed into equal-sized boxes
- ❌ Generic AI portfolio graphics and presentation-deck layouts
- ❌ Repetitive `CASE STUDY / 01 / 07` slide decks
- ❌ Excessive dark cards inside dark cards
- ❌ Excessive rounded containers and pill tags
- ❌ Browser mockups, laptop bezels, and phone hand frames around screenshots
- ❌ Decorative grids, gradient meshes, glassmorphism, and neon halos
- ❌ Floating 3D objects, clay shapes, or generic SaaS vector illustrations
- ❌ Unnecessary badges, fake metrics, or fabricated user counts

If an element does not improve communication, **remove it**.

---

## 2. Carousel as a Story Sequence

Treat every carousel as a **coherent project story**, not nine unrelated posters. Every slide must have a clear purpose in the sequence.

### Recommended Story Structure:
1. **01 — Hook / Project Introduction**: What was built, problem domain, primary architecture.
2. **02 — Strong Product Screen**: Dominant high-resolution view of the flagship interface.
3. **03 — Core Feature Spotlight**: Deep dive into the primary functional tool or user task.
4. **04 — Workflow Walkthrough**: Operational pipeline (e.g. intake → triage → resolution).
5. **05 — Feature / Product Detail**: Data tables, scoring brackets, or specialized views.
6. **06 — Technical / Build Architecture**: Concrete backend mechanism, database logic, or PDF engine.
7. **07 — Additional Product Area / RBAC**: Multi-role mapping, admin settings, or sub-portals.
8. **08 — Engineering Insight**: Architectural trade-off, lesson learned, or framework heuristic.
9. **09 — Closing / Production Archive**: Verified deliverable, production status, and sign-off.

> **Flexibility Rule**: The actual project source material determines the final sequence. Do NOT create filler slides. If a project has four strong screens, produce a 4-slide micro-carousel.

---

## 3. Each Slide Has One Job

Every slide must answer **one primary question** with clarity:
- *"What is this project?"*
- *"What does this feature do?"*
- *"How does this workflow operate?"*
- *"What does the dashboard look like?"*
- *"What technical problem was solved?"*
- *"What makes this implementation detail interesting?"*

Do not make every slide attempt to explain the entire project.

---

## 4. Visual Rhythm Across the Carousel

Maintain brand consistency while varying visual density across slides:

```
Slide 1: Hero (Display title + dominant screen + stack)
Slide 2: Screenshot-heavy (Pure product UI celebration)
Slide 3: Typography + Screenshot (Problem-solution focus)
Slide 4: Workflow (Sequential multi-step UI or drill-down modal)
Slide 5: Detail (Scoring tiers or specialized table view)
Slide 6: Technical (In-depth architecture or code snippet)
Slide 7: Screenshot-heavy (Secondary portal / role view)
Slide 8: Insight (Engineering heuristic diff)
Slide 9: Closing (System summary + verified deliverable)
```

**Avoid Monotony**: Never produce nine identical slides formatted as `headline + 2 screenshots + paragraph`.

---

## 5. Asset-First Layout Selection Process

Before designing each slide, analyze the screenshot first. **Templates must adapt to the content; content is never distorted to fit templates.**

```
1. ANALYZE SCREENSHOT:
   - Orientation (Landscape desktop vs. Portrait mobile)
   - Native aspect ratio
   - Visual priority & focal point
   - Readability threshold (will table text be legible on mobile?)
   - Crop potential (can peripheral navigation be cropped cleanly?)
   - Required text volume
         ↓
2. SELECT APPROPRIATE COMPOSITION:
   - Full-width hero view (for rich dashboards)
   - Vertical sequence (for two-step actions)
   - Context + Detail crop (for complex data tables)
   - Side-by-side (ONLY for natural portrait mobile screens)
         ↓
3. ENFORCE READABILITY THRESHOLD:
   - If secondary screenshots shrink the primary visual into illegibility → SPLIT ACROSS SLIDES.
```

---

## 6. Desktop vs. Mobile Screenshot Rules

### Wide Desktop & Dashboard Screenshots
- **Prefer**:
  - Large single screenshot spanning full content width (`920px`).
  - Wide screenshot with proportional scaling and generous vertical breathing room.
  - Intentional horizontal or vertical crop focusing on the active module.
  - Context + Detail layout (macro view + micro crop).
- **Strictly Avoid**:
  - ❌ Tiny side-by-side desktop screens in equal columns.
  - ❌ Narrow cards compressing an entire 1920×1080 desktop interface into 400px width.
  - ❌ Squeezing multiple dashboards into one slide.

### Mobile & Portrait Screenshots
- **Preserve the portrait aspect ratio** (typically 9:16, 9:19.5, or 3:4).
- Never stretch mobile screens to fill a landscape container.
- **Prefer**:
  - One large prominent mobile screenshot.
  - Two proportional mobile screens side-by-side (natural 9:16 proportion fits portrait feed comfortably).
  - Vertical sequence with proportional scaling.
  - Intentional detail crops on specific mobile sheet interactions.

---

## 7. The 7 Composition Families

To maintain visual variety across the feed while preserving brand coherence, every post is assigned to one of seven distinct composition families:

| # | Composition Family | Dominant Visual Asset | Core Communication Goal |
|---|---|---|---|
| 1 | **PROJECT HERO** | Dominant product interface + stack metadata | High-impact introduction to a newly shipped project or system. |
| 2 | **FEATURE SPOTLIGHT** | Focused screenshot of an active workflow + concise operational context | Deep dive into how a specific functional tool works in practice. |
| 3 | **PRODUCT SCREENSHOT** | High-resolution UI screenshot (80%+ canvas), minimal typographic framing | Pure orthographic UI showcase; lets the software interface speak for itself. |
| 4 | **TECHNICAL BREAKDOWN** | Clean syntax-highlighted code snippet or topology diagram | Explains a concrete backend mechanism, query optimization, or algorithm. |
| 5 | **DEVELOPMENT INSIGHT** | Editorial typography + contextual code or terminal diff | Practical engineering lesson, architectural trade-off, or bug diagnosis. |
| 6 | **PROJECT DETAIL** | Cropped micro-interaction, form control, modal, or custom component | Celebrates detailed craftsmanship in UI/UX and front-end execution. |
| 7 | **PROOF / ACHIEVEMENT** | Production status, live deployment, or verified benchmark log | Concrete evidence that the software runs in production (strictly factual). |

---

## 8. Intentional Cropping Rules

Cropping is encouraged when it enhances focus and composition, but it must be intentional:
- **Preserve Essential Context**: Do not crop out active form inputs or primary status indicators if the headline refers to them.
- **Avoid Confusing Cuts**: Do not slice through text labels, action buttons, or table columns haphazardly.
- **Answer the Question**: *"What is the single most interesting, high-craft part of this screen?"*

---

## 9. Feed-Level Art Direction & 3×3 Grid Planning

Never design a post in isolation. An Instagram feed is evaluated as a dynamic 3×3 grid.

```
[ POST 01: Hero ]     [ POST 02: Screenshot ]  [ POST 03: Breakdown ]
[ POST 04: Spotlight ][ POST 05: Insight ]     [ POST 06: Detail ]
[ POST 07: Screenshot ][ POST 08: Hero ]       [ POST 09: Proof ]
```

### Feed Rhythm Principles:
1. **Visual Balance**: Alternate between image-heavy compositions and typography/code-heavy compositions.
2. **Color Rhythm**: Vary background shades across adjacent posts (Space Black, Studio Dark, Apple Off-White, Studio White).
3. **Repetition Control**: Never place two identical composition families adjacent horizontally or vertically in the 3×3 grid.
4. **Project Diversity**: Interleave posts from different projects across the grid to showcase a prolific body of work.


