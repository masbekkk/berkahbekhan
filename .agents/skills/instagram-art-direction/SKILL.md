---
name: instagram-art-direction
description: Decides what to post for @berkahbekhan.inc by mining real projects for multiple independent content opportunities, assigning composition families, and curating feed-level visual rhythm.
when_to_use: Use when analyzing real projects, identifying content angles, selecting composition families, or planning 3x3 feed rhythm before designing in Figma.
allowed-tools: Read, Grep, Glob
version: 1.0.0
priority: HIGH
---

# Instagram Art Direction Skill

> **Core Philosophy**: **THE WORK IS THE DESIGN.**  
> The Instagram account for **@berkahbekhan.inc** is a developer's visual archive of real software that has actually been built. Every post must communicate: *"This developer actually builds software,"* never *"This account generates AI portfolio graphics."*

This skill answers the primary editorial question: **"What should I post?"**  
It inspects real project repositories, identifies authentic visual materials and feature angles, assigns the appropriate composition family, and curates feed-level visual rhythm before passing specifications to `figma-design`.

---

## 1. Absolute Rejections (Anti-AI-Slop Direction)

The generated content must NEVER feel like an AI-generated Behance case study or generic marketing pitch. We explicitly reject:

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

## 2. Project Mining: 1 Project = Many Independent Posts

Never force an entire software system into a single bloated 7-slide carousel. Real software contains dozens of genuine engineering decisions, interfaces, and workflows.

### Independent Content Opportunities
Analyze each project in `projects/<project-name>/` to identify multiple standalone content opportunities:

- **Project Introduction**: Purpose, problem domain, and primary architecture.
- **Specific Feature Spotlight**: A single deep workflow (e.g., student assessment intake, billing checkout).
- **Product UI Showcase**: High-resolution, unencumbered view of the actual dashboard or data view.
- **Data / Workflow Pipeline**: From input to output (e.g., "From student survey to 50-page PDF compilation").
- **Technical Implementation**: How a specific backend job, database index, or frontend state machine was built.
- **Development Insight**: An architectural trade-off, refactor, or production bug fix discovered during build.
- **Report / Output Generation**: Concrete artifacts produced by the app (PDFs, exports, analytics tables).

*Example (MTsN Gresik Counseling Portal)*:
Instead of one 7-slide carousel, this single project generates at least 7 independent posts:
1. Project Introduction: School counseling & positive discipline portal
2. Feature Spotlight: 180-question psychological needs assessment
3. Role Workflow: Teacher merit and violation fast-logging
4. Counselor Triage: Real-time lowest score analytics
5. Document Engine: In-browser vector PDF report generation
6. Batch Processing: Class-wide merged PDF synthesis
7. Engineering Insight: Why Laravel 12 + Inertia React replaced physical paper binders

---

## 3. One Primary Idea Per Post

Every post must communicate **one dominant message**. Do not dilute content by cramming multiple features or technical lessons into a single piece.

**Examples of Strong Single Messages**:
- *"180 indicators. One digital assessment."*
- *"From student assessment to PDF report."*
- *"A counseling portal for teachers and students."*
- *"Built with Laravel + React."*
- *"Handling bulk class PDF synthesis in memory."*

If an idea requires a secondary thesis, split it into a separate post.

---

## 4. The 7 Composition Families

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

## 5. Visual References & Art Direction Inspiration

Use these accounts solely for visual cadence, editorial culture, and social rhythm inspiration:

- **Webcare IDN** (`https://www.instagram.com/webcare.idn/`): Inspires portfolio-heavy cadence, presenting numerous real software deliverables, and modern design culture.
- **Apple Developer Academy @ UC** (`https://www.instagram.com/ucs_appledeveloperacademy/`): Inspires project-focused storytelling, clean typography, editorial composition, and understated visual dignity.

> **STRICT PROHIBITION**: Do NOT copy their exact layouts, brand marks, logos, typography, color palettes, or phrasing. Use them to calibrate high editorial standards while maintaining the distinct BerkahBekhan identity.

---

## 6. Feed-Level Art Direction & 3×3 Grid Planning

Never design a post in isolation. An Instagram feed is evaluated as a dynamic 3×3 grid.

```
[ POST 01: Hero ]     [ POST 02: Screenshot ]  [ POST 03: Breakdown ]
[ POST 04: Spotlight ][ POST 05: Insight ]     [ POST 06: Detail ]
[ POST 07: Screenshot ][ POST 08: Hero ]       [ POST 09: Proof ]
```

### Feed Rhythm Principles
1. **Visual Balance**: Alternate between image-heavy compositions (Product Screenshot, Project Hero) and typography/code-heavy compositions (Technical Breakdown, Development Insight).
2. **Color Rhythm**: Vary background shades across adjacent posts. Do not publish nine consecutive dark cards. Mix dark obsidian (`#0B0F14`), light clean surfaces (`#F8FAFC`), and project-tinted backgrounds.
3. **Repetition Control**: Never place two identical composition families adjacent horizontally or vertically in the 3×3 grid.
4. **Project Diversity**: Interleave posts from different projects across the grid to showcase a prolific body of work.

---

## 7. Art Direction Decision Process

When preparing content:
```
1. REAL PROJECT REPOSITORY (projects/<project-name>/)
         ↓
2. EXTRACT VERIFIED FACTS & ASSETS (screens, stack, architecture, logs)
         ↓
3. BRAINSTORM CONTENT OPPORTUNITIES (list 4-8 candidate topics)
         ↓
4. SELECT ONE PRIMARY IDEA
         ↓
5. ASSIGN COMPOSITION FAMILY (1 of 7)
         ↓
6. CHECK 3×3 FEED CONTEXT (verify contrast & rhythm against previous 3 posts)
         ↓
7. PASS SPECIFICATION TO @figma-design
```

