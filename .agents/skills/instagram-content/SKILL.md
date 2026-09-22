---
name: instagram-content
description: Master orchestrator for generating Instagram content for @berkahbekhan.inc. Coordinates the project-to-Instagram pipeline across art direction, Figma design, and quality review.
when_to_use: Use as the primary entry point when generating, planning, or orchestrating Instagram posts, carousels, stories, or reel concepts for @berkahbekhan.inc.
allowed-tools: Read, Grep, Glob, Edit, Write
version: 2.0.0
priority: HIGH
---

# Instagram Content Orchestrator Skill

> **Core Mandate**: Master orchestrator for Instagram content at **@berkahbekhan.inc**.  
> Coordinates the end-to-end pipeline from real project repositories into authentic, publication-ready Instagram assets.  
> Upholds the core principle: **THE WORK IS THE DESIGN.**

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

## 2. End-to-End Operating Pipeline

Every piece of content must move through this disciplined 10-stage pipeline:

```
1. REAL PROJECT (projects/<project-name>/)
         ↓
2. PROJECT ANALYSIS (Extract verified facts, features, stack, challenges)
         ↓
3. IDENTIFY REAL FEATURES / SCREENS (Inspect screenshots/ for genuine UI)
         ↓
4. IDENTIFY STRONGEST VISUAL MATERIAL (Find high-impact visual anchors)
         ↓
5. IDENTIFY CONTENT OPPORTUNITIES (Brainstorm 4–8 standalone post angles)
         ↓
6. SELECT ONE PRIMARY IDEA (Define the single dominant message)
         ↓
7. SELECT COMPOSITION FAMILY (Choose 1 of 7 composition families)
         ↓
8. DESIGN IN FIGMA (Invoke @figma-design using Auto Layout & tokens)
         ↓
9. CONTENT REVIEW (Audit with @content-review for slop & accuracy)
         ↓
10. FEED-LEVEL REVIEW (Verify 3x3 grid balance, rhythm, & color diversity)
```

---

## 3. Delegation & Architectural Separation

| Question / Responsibility | Responsible Skill | Key Output |
| :--- | :--- | :--- |
| **"What should I post?"** | [`instagram-art-direction`](../instagram-art-direction/SKILL.md) | Content angle, 1 primary idea, composition family, 3×3 grid rhythm. |
| **"How should it be visually designed?"**| [`figma-design`](../figma-design/SKILL.md) | Figma Auto Layout frames, editable non-flattened layers, design tokens. |
| **"How to structure portfolio copy?"** | [`instagram-portfolio`](../instagram-portfolio/SKILL.md) | Single feed or micro-carousel copy, verified stack tags, editorial hook. |
| **"Does this meet brand & accuracy standards?"** | [`content-review`](../content-review/SKILL.md) | 3 pre-flight tests (Slop, Simplification, Portfolio), fact-check pass. |

---

## 4. Supported Instagram Formats

| Format | Dimensions | Aspect Ratio | Primary Purpose | Safe Zones / Margin |
| :--- | :--- | :--- | :--- | :--- |
| **Feed Post** | `1080 × 1350 px` | 4:5 | Standalone UI showcase, single feature spotlight, or project hero. | `80px` padding on all sides. |
| **Square Post**| `1080 × 1080 px` | 1:1 | Feed post alternative, square portfolio thumbnail. | `80px` padding on all sides. |
| **Micro-Carousel**| `1080 × 1350 px` | 4:5 | 2–4 slide workflow walkthrough or comparison. | `80px` padding. Consistent layout cadence. |
| **Story** | `1080 × 1920 px` | 9:16 | Fast build update, behind-the-scenes snippet, announcement. | Top `250px` & bottom `350px` safe zones. |
| **Reel Cover** | `1080 × 1920 px` | 9:16 | Thumbnail for screen recordings and developer videos. | Center `1080 × 1080 px` safe for profile grid crop. |

---

## 5. Directory & Asset Routing

- **Raw Project Truth**: `projects/<project-name>/`
- **Written Post Copy & Storyboards**: `content/<category>/<post-slug>.md`
  - `content/portfolio/`
  - `content/tips/`
  - `content/stories/`
  - `content/reels/`
- **Visual Production Assets**: `output/<project-name>/<format>/`
- **Figma Design System & Staging**: Figma workspace operated via `figma-design` and `figwright` MCP.
