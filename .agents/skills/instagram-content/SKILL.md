---
name: instagram-content
description: Master orchestrator for generating Instagram content for @berkahbekhan.inc. Coordinates the project-to-Instagram pipeline across art direction, Figma design, and quality review.
when_to_use: Use as the primary entry point when generating, planning, or orchestrating Instagram posts, carousels, stories, or reel concepts for @berkahbekhan.inc.
allowed-tools: Read, Grep, Glob, Edit, Write
version: 2.1.0
priority: HIGH
---

# Instagram Content Orchestrator Skill

> **Core Mandate**: Master orchestrator for Instagram content at **@berkahbekhan.inc**.  
> Coordinates the end-to-end pipeline from real project repositories into authentic, publication-ready Instagram assets.  
> Upholds the core principle: **THE WORK IS THE DESIGN.**
> 
> 🔴 **PRIMARY MANDATE**: Optimize for **SCREENSHOT READABILITY > NUMBER OF SCREENSHOTS**.  
> Never optimize for **NUMBER OF SCREENSHOTS > READABILITY**.

---

## 1. Content Strategy & Portfolio-First Hierarchy

The `@berkahbekhan.inc` account is a developer's visual archive. It is **portfolio-first**:

| Priority | Content Category | Role & Purpose |
| :--- | :--- | :--- |
| **1. Primary** | **Portfolio / Projects** | Complete applications, newly shipped systems, and active client portals. |
| **2. Secondary** | **Feature / Product Details** | Focused walkthroughs of specific flows, dashboards, tables, or export tools. |
| **3. Secondary** | **Technical Breakdowns** | Architecture diagrams, query optimizations, or queue worker pipelines. |
| **4. Supporting** | **Developer Tips & Insights** | Practical bug fixes and engineering heuristics discovered during build. |
| **5. Supporting** | **Achievements / Proof** | Verified production metrics, live deployments, or project completions. |

> **Anti-Pattern Warning**: Do NOT turn the account into a generic programming-tips feed. The portfolio of real built software must remain the core identity.

---

## 2. End-to-End Asset-First Operating Pipeline

Every piece of content must move through this disciplined 12-stage pipeline:

```
1. REAL PROJECT REPOSITORY (projects/<project-name>/)
         ↓
2. PROJECT ANALYSIS (Extract verified facts, features, stack, architecture)
         ↓
3. INSPECT SCREENSHOT ASSETS (Examine orientation, aspect ratios, focal points)
         ↓
4. SELECT CAROUSEL STORY ARC (Determine 01 Cover → 09 Closing narrative)
         ↓
5. DEFINE ONE JOB PER SLIDE (Assign single primary question per slide)
         ↓
6. ASSET-FIRST LAYOUT SELECTION (Select composition tailored to screenshot geometry)
         ↓
7. MULTI-IMAGE & READABILITY CHECK (Apply hierarchy: 70/30, vertical; split if unreadable)
         ↓
8. DESIGN IN FIGMA (Invoke @figma-design using proportional geometry & tokens)
         ↓
9. STAGE CAROUSEL OVERVIEW (Build '00 — Carousel Overview' to inspect sequence)
         ↓
10. CONTENT & PROPORTION REVIEW (Audit with @content-review for distortion & slop)
         ↓
11. FEED-LEVEL RHYTHM REVIEW (Verify 3x3 grid balance & dark/light cadence)
         ↓
12. EXPORT & ARTIFACT DOCUMENTATION (Export PNGs, embed in walkthrough.md)
```

---

## 3. Delegation & Architectural Separation

| Question / Responsibility | Responsible Skill | Key Output |
| :--- | :--- | :--- |
| **"What should I post & what is the story?"** | [`instagram-art-direction`](../instagram-art-direction/SKILL.md) | Content angle, 1 primary idea, carousel story arc, composition family, feed rhythm. |
| **"How should it be constructed in Figma?"**| [`figma-design`](../figma-design/SKILL.md) | Auto Layout frames, proportional geometry, editable layers, token bindings. |
| **"How to structure portfolio copy & hierarchy?"** | [`instagram-portfolio`](../instagram-portfolio/SKILL.md) | Single feed or micro-carousel copy, verified stack tags, editorial hook. |
| **"Does this meet proportion, brand & accuracy standards?"** | [`content-review`](../content-review/SKILL.md) | Pre-flight tests (Proportion, Readability, Multi-Image, AI-Slop, Simplification). |

---

## 4. Supported Instagram Formats & Safe Margin System

| Format | Dimensions | Aspect Ratio | Primary Purpose | Safe Zones / Margin System |
| :--- | :--- | :--- | :--- | :--- |
| **Feed / Carousel** | `1080 × 1350 px` | 4:5 | Standalone UI showcase or multi-slide carousel story. | **`80px` padding on all sides**. Core content inside `920 × 1190 px`. |
| **Square Post**| `1080 × 1080 px` | 1:1 | Feed post alternative, square portfolio thumbnail. | `80px` padding on all sides. |
| **Micro-Carousel**| `1080 × 1350 px` | 4:5 | 2–4 slide workflow walkthrough or comparison. | `80px` padding. Consistent layout cadence across slides. |
| **Story** | `1080 × 1920 px` | 9:16 | Fast build update, behind-the-scenes snippet, announcement. | Top `250px` & bottom `350px` safe zones. |
| **Reel Cover** | `1080 × 1920 px` | 9:16 | Thumbnail for screen recordings and developer videos. | Center `1080 × 1080 px` safe for profile grid crop. |

> **Carousel Standard**: Every slide in a carousel sequence **MUST use identical canvas dimensions** (`1080 × 1350 px`) and maintain identical outer safe margin bounds (`80px`).

---

## 5. Hard Execution Rules

1. **NEVER SACRIFICE PROPORTION**: Never stretch, squash, or force a screenshot into an arbitrary box. Scale proportionally, contain, or crop with intention.
2. **READABILITY FIRST**: If multiple desktop screenshots shrink until table data or UI labels are unreadable, **split them across consecutive slides**.
3. **LESS IS BETTER**: If a slide feels crowded, remove content rather than shrinking typography or images.
4. **DIRECT EDITORIAL PLACEMENT**: Avoid unnecessary card containers, fake laptop bezels, and browser mockups. Let the software speak for itself.

---

## 6. Directory & Asset Routing

- **Raw Project Truth**: `projects/<project-name>/`
- **Written Post Copy & Storyboards**: `content/<category>/<post-slug>.md`
  - `content/portfolio/`
  - `content/tips/`
  - `content/stories/`
  - `content/reels/`
- **Visual Production Assets**: `output/<project-name>/<format>/`
- **Figma Design System & Staging**: Figma workspace operated via `figma-design` and `figwright` MCP.

