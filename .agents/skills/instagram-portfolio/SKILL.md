---
name: instagram-portfolio
description: Transforms real software projects into high-credibility Instagram portfolio posts and focused micro-carousels anchored strictly in verified project artifacts.
when_to_use: Use when structuring portfolio showcases, feature spotlights, or product UI posts from verified projects in projects/<project-name>/.
allowed-tools: Read, Grep, Glob
version: 2.0.0
priority: HIGH
---

# Instagram Portfolio Case Study Skill

> **Core Philosophy**: **THE WORK IS THE DESIGN.**  
> Transforms **real, documented software projects** into technical portfolio posts and focused visual breakdowns for **@berkahbekhan.inc**. Highlights real engineering decisions, actual software interfaces, architecture choices, and developer workflows.

---

## 1. Input Grounding & Absolute Anti-Fabrication Mandate

> **CRITICAL RULE**: Never invent, hallucinate, or extrapolate project facts. The project itself must remain the hero.

### Expected Input Artifacts (in `projects/<project-name>/`):
- `project.md` or `README.md` (Overview, problem domain, actual architecture, genuine constraints)
- `screenshots/` (Genuine application screenshots, dashboards, mobile views, export previews)
- Source code / migrations / configs (Actual technical implementation files)
- `documentation/` (API notes, user manuals, deployment configs)

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

## 2. Rejecting the Mandatory 7-Slide Deck

> ❌ **STOP forcing every project into `CASE STUDY / 01 / 07` decks.**  
> Do not assume every project needs a multi-slide carousel.

### Flexible Post Types:
1. **Single Feed Post (`1080 × 1350 px`)**:
   - Ideal for **Product Screenshot**, **Feature Spotlight**, or **Project Hero**.
   - 1 dominant visual + 1 powerful headline + concise technical context.
   - High impact, scannable, and clean.

2. **Focused Micro-Carousel (2–4 Slides)**:
   - Slide 1: One primary idea / hook + hero UI.
   - Slide 2–3: Direct workflow walkthrough or comparison (e.g., "From student assessment to PDF compilation").
   - Slide 3–4: Verified technical architecture or takeaway.

3. **In-Depth Case Study (5–7 Slides — Only When Justified)**:
   - Reserved strictly for complex multi-tier systems with extensive verified architectural documentation.
   - Every slide must present new, high-signal evidence. Never pad slides with filler text.

---

## 3. One Dominant Message Per Post

Each portfolio post must tackle exactly **one primary idea**:

- ✅ *"180 indicators. One digital assessment."*
- ✅ *"From student assessment to PDF report."*
- ✅ *"A counseling portal for teachers and students."*
- ✅ *"Built with Laravel + React."*
- ❌ *"A complete 7-part overview of our database, all 12 features, our client feedback, and full frontend setup."*

---

## 4. Visual & Layout Rules for Portfolio Content

1. **Orthographic Screenshot Dominance**:
   - Allocate 60%–85% of the slide canvas to the real screenshot or UI panel.
   - Present screenshots flat and orthographic. No 3D perspectives, no fake laptop bezels, no device hands.
   - Frame with a subtle `1px solid` border (e.g., `#263241` for dark canvas, `#E2E8F0` for light canvas).
2. **Contextual Canvas Backgrounds**:
   - Use deep obsidian (`#0B0F14`), light clean canvas (`#F8FAFC`), or a subtle project-derived background tone that complements the screenshot's primary palette.
   - Avoid enclosing every screenshot inside an extra dark card container.
3. **Typography Standards**:
   - Sans: Inter or Geist Sans for title and body.
   - Mono: JetBrains Mono or Geist Mono for stack badges, file paths, and metrics.

---

## 5. Pre-Publication Portfolio Checklist

Before approving any portfolio post:
- [ ] Is every feature, workflow, and metric supported by actual files in `projects/<project-name>/`?
- [ ] Are all screenshots genuine captures of the application (no fake UI or generic vector graphics)?
- [ ] Does the post communicate one clear, dominant message?
- [ ] Is the presentation free of forced `CASE STUDY / 01 / 07` templates?
- [ ] Does it make the viewer understand that this developer actually builds real software?
