---
name: instagram-portfolio
description: Transforms real software projects into high-credibility Instagram portfolio posts and focused micro-carousels anchored strictly in verified project artifacts.
when_to_use: Use when structuring portfolio showcases, feature spotlights, or product UI posts from verified projects in projects/<project-name>/.
allowed-tools: Read, Grep, Glob
version: 2.1.0
priority: HIGH
---

# Instagram Portfolio Case Study Skill

> **Core Philosophy**: **THE WORK IS THE DESIGN.**  
> Transforms **real, documented software projects** into technical portfolio posts, multi-slide carousels, and focused visual breakdowns for **@berkahbekhan.inc**. Highlights real engineering decisions, actual software interfaces, architecture choices, and developer workflows.
> 
> 🔴 **MANDATORY**: Optimize for **SCREENSHOT READABILITY > NUMBER OF SCREENSHOTS**.  
> Never optimize for **NUMBER OF SCREENSHOTS > READABILITY**.

---

## 1. Input Grounding & Absolute Anti-Fabrication Mandate

> **CRITICAL RULE**: Never invent, hallucinate, or extrapolate project facts. The project itself must remain the hero.

### Expected Input Artifacts (in `projects/<project-name>/`):
- `project.md` or `README.md` (Overview, problem domain, actual architecture, genuine constraints)
- `screenshots/` (Genuine application screenshots, dashboards, mobile views, export previews)
- Source code / migrations / configs (Actual technical implementation files)
- `documentation/` or manual book (User flows, role assignments, deployment configs)

### Strict Fact Verification:
Before proposing any post copy:
1. Scan provided project files in `projects/<project-name>/`.
2. Extract only documented facts:
   - Primary problem being solved.
   - Exact technology stack (e.g., PHP 8.4, Laravel 12, Inertia React 19, Tailwind v4).
   - Real interface screenshots available on disk.
   - Genuine technical challenges mentioned in docs or git history.
3. If specific details (such as client metrics, user counts, performance numbers) are not documented, **DO NOT fabricate them**. Omit the claim or mark it `"Information not provided"`.

---

## 2. Flexible Portfolio Architectures

> ❌ **STOP forcing every project into `CASE STUDY / 01 / 07` decks.**  
> Choose the portfolio format matching the verified assets:

### Formats:
1. **Single Feed Post (`1080 × 1350 px`)**:
   - Ideal for **Product Screenshot**, **Feature Spotlight**, or **Project Hero**.
   - 1 dominant visual + 1 powerful headline + concise technical context.
   - High impact, scannable, and clean.

2. **Focused Micro-Carousel (2–4 Slides)**:
   - Slide 1: One primary idea / hook + hero UI.
   - Slide 2–3: Direct workflow walkthrough or comparison (e.g., "From student assessment to PDF compilation").
   - Slide 3–4: Verified technical architecture or takeaway.

3. **Complete Portfolio Carousel (5–9 Slides)**:
   - Structured as a sequential project narrative:
     - 01 Cover / Hook → 02 Flagship Screen → 03 Core Feature → 04 Workflow → 05 Data / Scoring Detail → 06 Technical / Engine → 07 Sub-portal / RBAC → 08 Dev Insight → 09 Production Closing.
   - Every slide presents new, high-signal evidence. Never pad slides with filler text.

---

## 3. One Primary Visual Per Slide & Multi-Screenshot Hierarchy

### Default Rule: One Primary Screenshot Per Slide
A slide may contain additional screenshots **ONLY** when communicating a specific relationship, comparison, or sequence.
> **The Addition Gate**: Ask: *"Does this second image communicate something essential that the first image cannot?"* If **NO** → Do NOT add it.

### Multi-Screenshot Visual Hierarchy Patterns:
When multiple screenshots are necessary, **DO NOT automatically use equal-sized boxes** (especially for desktop screens).

| Hierarchy Pattern | Structure | Best Application |
| :--- | :--- | :--- |
| **A. Hero + Secondary** | Large primary screenshot (70% weight) + smaller supporting screenshot (30% weight) | Main screen context + focused action modal |
| **B. Vertical Sequence** | Stacked full-width screenshots (Screenshot A over Screenshot B) with proportional heights | Before/After states or two-step sequential actions |
| **C. Workflow** | Proportional sequential cards (`A → B → C`) or distinct status transitions | Step-by-step pipeline from input to output |
| **D. Context + Detail** | Large macro interface view + zoomed detail crop highlighting a micro-interaction | Highlighting a table with a zoomed row or status badge |
| **E. Primary + Supporting** | Clear dominant anchor image with supporting evidence element | Dashboard overview with small supporting metric card |

> ⚠️ **The Split Rule (Readability First)**: If placing multiple screenshots forces them so small that UI labels, table data, or buttons become unreadable on mobile, **SPLIT THEM INTO SEPARATE CONSECUTIVE SLIDES**. A large, understandable screenshot is always better than three tiny unreadable ones.

---

## 4. Text vs. Image Balance & Reading Hierarchy

The real application screenshot must always occupy the **largest visual area** on the canvas (60%–85%).

### Reading Hierarchy:
```
1. REAL PROJECT SCREENSHOT (Primary visual anchor)
         ↓
2. PUNCHY HEADLINE (Inter Bold, 64px - 80px)
         ↓
3. SHORT 2-LINE NARRATIVE (Inter Regular, 26px - 30px)
         ↓
4. MONO METADATA & STACK (JetBrains Mono, 20px - 24px)
```

- **Avoid**: Large headline + long paragraph + two tiny screenshots + five badges.
- **If Text Overflows**: **REMOVE CONTENT**. Never shrink typography into microscopic illegibility.

---

## 5. Visual & Layout Rules for Portfolio Content

1. **Orthographic Screenshot Dominance**:
   - Present screenshots flat and orthographic. No 3D perspectives, no fake laptop bezels, no device hands.
   - Frame with a subtle `1px solid` border (`#2C2C2E` for dark canvas, `#E5E5EA` for light canvas) and restrained corner radius (`12px - 16px`).
2. **Contextual Canvas Backgrounds**:
   - Use Space Black (`#000000`), Studio Dark (`#161617`), Apple Off-White (`#F5F5F7`), or Studio White (`#FFFFFF`).
   - Avoid enclosing every screenshot inside an extra dark card container.
3. **Typography Standards**:
   - Sans: Inter or Geist Sans for title and body.
   - Mono: JetBrains Mono or Geist Mono for stack badges, file paths, and metrics.

---

## 6. Pre-Publication Portfolio Checklist

Before approving any portfolio post:
- [ ] **Factually Supported**: Is every feature, workflow, and metric supported by actual files in `projects/<project-name>/`?
- [ ] **Real Project Screenshots**: Are all screenshots genuine captures of the application (no fake UI or generic vector graphics)?
- [ ] **Strict Proportionality**: Are all screenshots geometrically true with zero horizontal or vertical distortion?
- [ ] **Readability First**: Are all UI labels, tables, and buttons clearly readable on mobile preview?
- [ ] **Multi-Image Justification**: If multiple screenshots are on one slide, is there a clear hierarchy (e.g. 70/30 or vertical sequence) or would splitting produce a clearer slide?
- [ ] **One Dominant Message**: Does the slide answer exactly one primary question?
- [ ] **Anti-Slop Verified**: Free of fake mockups, glassmorphism, floating cards, and forced `CASE STUDY / 01 / 07` headers?

