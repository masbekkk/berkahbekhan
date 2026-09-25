# Content & Anti-AI-Slop Rules — berkahbekhan.inc

This document establishes the mandatory editorial and content architecture rules for **@berkahbekhan.inc**.  
Guiding philosophy: **THE WORK IS THE DESIGN.**

---

## 1. Portfolio-First Content Hierarchy

The `@berkahbekhan.inc` account is a developer's visual archive. Maintain this strict content priority:

1. **Portfolio / Projects (Primary)**: Showcases of real software systems actually built and deployed.
2. **Feature / Product Details (Secondary)**: Specific workflows, interfaces, dashboards, and export features.
3. **Technical Breakdowns (Secondary)**: Architecture diagrams, database schemas, and performance optimizations.
4. **Developer Tips & Insights (Supporting)**: Hard-won lessons and bug fixes discovered while building.
5. **Achievements / Proof (Supporting)**: Verified test suites, deployment logs, and real project milestones.

> **DO NOT** turn the account into a generic programming-tips feed. The portfolio of real built software is our primary identity.

---

## 2. Carousel as a Story Sequence

Treat a carousel as a **coherent story**, not nine disconnected posters. Every slide must have a distinct, purposeful role in the narrative arc.

### Recommended Story Structure:
- **01 — Hook / Project Introduction**: What was built, why it matters, primary architecture.
- **02 — Strong Product Screen**: Dominant high-resolution view of the flagship interface.
- **03 — Core Feature Spotlight**: Deep dive into the primary functional tool or user task.
- **04 — Workflow Walkthrough**: Operational pipeline (e.g., intake → triage → resolution).
- **05 — Feature / Product Detail**: Data tables, scoring brackets, or specialized views.
- **06 — Technical / Build Architecture**: Concrete backend mechanism, database logic, or PDF engine.
- **07 — Additional Product Area / RBAC**: Multi-role mapping, admin settings, or sub-portals.
- **08 — Engineering Insight**: Architectural trade-off, lesson learned, or framework heuristic.
- **09 — Closing / Production Archive**: Verified deliverable, production status, and sign-off.

> **Flexibility Rule**: The actual project source material determines the final sequence. Do NOT create filler slides just to reach nine slides; if a project has three high-signal screens, produce a 3-slide micro-carousel.

---

## 3. Each Slide Has One Job

Every slide must answer **one primary question** without diluting focus:
- *"What is this project?"*
- *"What does this feature do?"*
- *"How does this workflow operate?"*
- *"What does the data dashboard look like?"*
- *"What technical problem was solved?"*
- *"What makes this implementation detail interesting?"*

Do NOT make every slide attempt to summarize the entire project.

---

## 4. Text vs. Image Balance

The real application screenshot must always occupy the **largest visual area** on the canvas.

### Preferred Pattern:
```
[SHORT PUNCHY HEADLINE]
         ↓
[DOMINANT REAL SCREENSHOT (60%–85% canvas)]
         ↓
[CONCISE 2-LINE SUPPORTING TEXT + TECH METADATA]
```

### Prohibited Overcrowded Pattern:
- ❌ Giant 4-line display headline
- ❌ Long 5-line paragraph
- ❌ Two squeezed, unreadable desktop screenshots
- ❌ Five colored badge pills
- ❌ Complex tech stack chip matrix

The visual hierarchy must be obvious to the viewer within **1–2 seconds**.

---

## 5. Visual Hierarchy: Product First

Every slide must respect this reading order:
1. **Primary Visual** (The actual software interface)
2. **Primary Message** (Headline explaining the action or problem)
3. **Secondary Information** (Short operational narrative)
4. **Optional Technical Metadata & Branding** (Mono eyebrow, stack indicator, `@berkahbekhan.inc`)

Metadata and tags must **never compete** with or visually overpower the product screenshot.

---

## 6. Project Source of Truth & Asset-First Layout Selection

Always design **around verified project assets**, never force assets into a rigid template:

1. **Inspect First**: Inspect repository code, manual books, screenshots, and database migrations.
2. **Extract Authentic Workflows**: Identify what the software actually does in production.
3. **Analyze Screenshot Geometry**: Before choosing a layout, determine:
   - Screenshot orientation (landscape desktop vs. portrait mobile)
   - Native aspect ratio
   - Importance and readability threshold
   - Crop potential (can peripheral navigation be cropped without losing meaning?)
   - Text density
4. **Choose Layout Matching Asset**: Adapt the slide layout to accommodate the screenshot proportionally. Never pick a fixed card template and squash the screenshot to fit.

---

## 7. Hard Rules: Proportion & Simplification

### Hard Rule 1: Never Sacrifice Proportion
- **SCREENSHOT READABILITY > NUMBER OF SCREENSHOTS**.
- Never shrink desktop screenshots to fit side-by-side if text/charts become illegible.
- If multiple screens are valuable, **split them across consecutive slides**.

### Hard Rule 2: Less Is Better
- If a slide feels crowded: **remove content**.
- Do not shrink fonts to microscopic sizes or shrink images into thumbnails.
- Eliminate redundant tags, decorative borders, and secondary text.

---

## 8. Absolute Anti-Fabrication Mandate (Zero Tolerance)

Never invent, exaggerate, or extrapolate information. Strictly prohibit:
- ❌ **NO Fabricated Metrics**: Never claim *"boosted speed by 300%"*, *"reduced load by 80%"*, or *"10,000+ active users"* unless backed by real production logs.
- ❌ **NO Fabricated Testimonials**: Never invent client praises, quotes, or fictional stakeholder names.
- ❌ **NO Fabricated Stacks**: Never claim Redis, Kafka, or GraphQL are used when the codebase only runs MySQL and Laravel.
- ❌ **NO Fabricated Features**: Only describe capabilities that actually exist in the codebase and screenshots.
- ❌ **NO AI-Generated People / Mock UI**: Never use Midjourney headshots or fake vector UI mockups.

### The Missing Information Rule:
If documentation lacks specific metrics, state `"Information not provided"` or focus strictly on documented code, architecture, and real interfaces.

---

## 9. The 3 Mandatory Pre-Flight Tests

Before publishing any draft:
1. **The AI-Slop Test**: Does this look like an AI image generator or generic social media template tool produced it? (If YES → redesign).
2. **The Simplification Test**: Can 20% of elements be removed without losing meaning? (If YES → remove them immediately).
3. **The Portfolio Test**: Does this make the viewer immediately understand that this developer actually builds real software? (If NO → restructure).

---

## 10. Banned AI-Slop Vocabulary

Never use corporate fluff or social media hype words:
- ❌ *"Revolutionize your workflow"*
- ❌ *"Unlock your potential"*
- ❌ *"In today's fast-paced digital era"*
- ❌ *"Game changer for developers"*
- ❌ *"Supercharge your productivity"*
- ❌ *"Seamless and intuitive experience"*
- ❌ *"Empowering modern teams"*
- ❌ Emojis in slide titles (keep slide headings clean and typographic; maximum 1–2 relevant emojis in captions).

