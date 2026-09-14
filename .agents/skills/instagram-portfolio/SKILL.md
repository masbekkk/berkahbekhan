---
name: instagram-portfolio
description: >-
  Transforms real software projects, codebases, and case studies into high-credibility Instagram
  portfolio carousels and posts for berkahbekhan.inc. Anchored strictly in verified project artifacts.
---

# Instagram Portfolio Case Study Skill

This skill converts **real, documented software projects** into technical case studies and portfolio showcases for **berkahbekhan.inc**. It highlights real engineering decisions, actual software interfaces, architecture choices, and developer workflows.

---

## 1. Input Grounding & Verification Mandate

> **CRITICAL RULE**: You must NEVER invent or hallucinate project information. The project itself must remain the hero.

### Expected Input Artifacts (in `projects/<project-name>/`)
- `project.md` or `README.md` (Project overview, purpose, architecture)
- `screenshots/` (Genuine application screenshots, dashboards, mobile views)
- Source code / migrations / configs (Actual technical implementation)
- `documentation/` (API specs, technical constraints, deployment notes)

### Initial Analysis Procedure
Before drafting any content:
1. Scan all provided files in `projects/<project-name>/`.
2. Extract verified facts:
   - Primary problem being solved.
   - Exact technology stack (e.g., Laravel 11, Inertia.js, React, Tailwind, PostgreSQL).
   - Available UI screenshots and what flows they demonstrate.
   - Genuine technical challenges mentioned in the docs/code.
3. If specific details (such as client metrics, user counts, or performance gains) are not documented, **DO NOT fabricate them**. Either state `"Information not provided"` or omit the claim entirely.

---

## 2. Portfolio Carousel Architecture (1080 × 1350)

Use the following slide blueprint as a guide. **Do not force all 9 slides if the project does not warrant them.** Prefer 5–7 compelling, evidence-backed slides over filler content.

### Conceptual Slide Structure

```
Slide 1: Project Cover
  - Clean title + category eyebrow [ CASE STUDY ]
  - Subtitle: One-sentence genuine summary of what the system does
  - Hero visual: Real UI screenshot framed cleanly in #151B23 window

Slide 2: Context & Problem
  - The specific operational or developer bottleneck
  - Why standard off-the-shelf solutions were insufficient

Slide 3: System Solution & Architecture
  - High-level architecture overview or tech stack badges
  - Concrete breakdown of key technical components

Slide 4: Core Features in Action
  - Real UI screenshot spotlighting a critical workflow
  - Short annotations explaining the user flow

Slide 5: Technical Implementation Detail
  - Deep-dive into a key mechanism (e.g., state machine, queue worker, database query)
  - Clean code block or schema diagram

Slide 6: Hardest Technical Challenge
  - An actual engineering hurdle encountered during development
  - How it was diagnosed and resolved

Slide 7: Outcome & Engineering Takeaways
  - Concrete result (e.g., "Full sync runs in under 200ms", "Zero-downtime deployment achieved")
  - What was learned or key architectural trade-off

Slide 8 (Optional): Source / Next Steps / Discussion
  - Repository link (if open source), demo link, or thoughtful discussion question
  - Subtle brand watermark @berkahbekhan.inc
```

---

## 3. Visual & Layout Rules for Portfolio Content

- **Screenshots are Hero Assets**:
  - Always allocate at least 50–65% of the slide canvas to the real screenshot or code panel.
  - Frame with `1px solid #263241`, `#151B23` surface, and `16px` border-radius.
  - No 3D perspectives, no mockups on skewed devices.
- **Palette**: `#0B0F14` background, `#F8FAFC` headline, `#94A3B8` body, `#3B82F6` primary badge.
- **Typography**: Inter for editorial narrative, JetBrains Mono for stack tags and code references.

---

## 4. Quality Checklist

- [ ] Is every feature and capability backed by the actual project files?
- [ ] Are the screenshots genuine captures of the application?
- [ ] Are all corporate buzzwords removed?
- [ ] Does the carousel read like a developer sharing genuine work with fellow builders?
