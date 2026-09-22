# berkahbekhan.inc — Instagram Content Generator Workspace

A specialized, reproducible workspace and agentic skill system for generating editorial-grade, developer-focused Instagram content for **@berkahbekhan.inc**.

> **Core Philosophy**: **THE WORK IS THE DESIGN.**  
> A developer's visual archive of real software that has actually been built. Every post communicates: *"This developer actually builds software,"* never *"This account generates AI portfolio graphics."*

---

## 1. Operating Pipeline

```
REAL PROJECT (projects/<project-name>/)
         ↓
PROJECT ANALYSIS (Extract verified facts, features, stack, challenges)
         ↓
IDENTIFY REAL FEATURES / SCREENS (Inspect screenshots/ for genuine UI)
         ↓
IDENTIFY STRONGEST VISUAL MATERIAL (Find high-impact visual anchors)
         ↓
IDENTIFY CONTENT OPPORTUNITIES (Brainstorm 4–8 standalone post angles)
         ↓
SELECT ONE PRIMARY IDEA (Define single dominant message)
         ↓
SELECT COMPOSITION FAMILY (Choose 1 of 7 composition families)
         ↓
DESIGN IN FIGMA (Invoke @figma-design using Auto Layout & tokens)
         ↓
CONTENT REVIEW (Audit with @content-review for slop & accuracy)
         ↓
FEED-LEVEL REVIEW (Verify 3x3 grid balance, rhythm, & color diversity)
```

- **The Software is the Hero**: Genuine application screenshots and valid code snippets remain the primary visual element. Screenshots sit flat and orthographic, free of fake laptop/phone mockups and skeuomorphic browser bars.
- **Zero Fabrication**: We never fabricate client metrics, features, testimonials, or technologies. Missing info is omitted or stated as `"Information not provided"`.
- **Portfolio-First**: The feed showcases working software. Developer tips and technical insights serve as supporting evidence of engineering depth.

---

## 2. Directory Structure

```
berkahbekhan/
│
├── .agents/
│   └── skills/
│       │
│       ├── berkahbekhan-brand/       # Single source of truth for brand visual identity & tokens
│       │   └── SKILL.md
│       │
│       ├── figma-design/             # Figma workspace engineering, Auto Layout, figwright MCP
│       │   └── SKILL.md
│       │
│       ├── instagram-art-direction/  # Decides what to post, 7 composition families, feed rhythm
│       │   └── SKILL.md
│       │
│       ├── instagram-portfolio/      # Structures portfolio posts & micro-carousels from real projects
│       │   └── SKILL.md
│       │
│       ├── instagram-content/        # Master orchestrator for Instagram post generation pipeline
│       │   └── SKILL.md
│       │
│       ├── instagram-tips/           # Supporting developer insights & code breakdowns
│       │   └── SKILL.md
│       │
│       └── content-review/           # Quality audit, Anti-AI-slop & veracity verification
│           └── SKILL.md
│
├── brand/                            # Core brand documentation & design tokens
│   ├── README.md                     # Brand system overview & philosophy
│   ├── colors.md                     # Flexible canvas system (dark, light, neutral, project-derived)
│   ├── typography.md                 # Font hierarchy (Inter/Geist Sans + JetBrains/Geist Mono)
│   ├── visual-rules.md               # Layout geometry, orthographic screenshot framing, 7 families
│   └── content-rules.md              # Anti-AI-slop rules, one idea per post, veracity guidelines
│
├── projects/                         # Source of truth: Real project inputs
│   ├── README.md                     # Guide to adding projects
│   └── .gitkeep
│
├── content/                          # Written post drafts and storyboards
│   ├── portfolio/                    # Draft portfolio posts & micro-carousels
│   ├── tips/                         # Draft developer tips & code explanations
│   ├── reels/                        # Reel scripts, concepts, and hooks
│   ├── stories/                      # Story updates and snippets
│   └── drafts/                       # Uncategorized exploratory drafts
│
├── templates/                        # Conceptual layouts & composition families
│   ├── README.md                     # The 7 composition families & Figma system guide
│   ├── feed/                         # Single feed layouts (1080 × 1350)
│   ├── carousel/                     # Micro-carousel layouts (1080 × 1350)
│   ├── story/                        # Story layouts (1080 × 1920)
│   └── reel/                         # Reel cover layouts (1080 × 1920 with safe zones)
│
├── output/                           # Production-ready generated assets
│   ├── feed/
│   ├── carousel/
│   ├── story/
│   └── reel/
│
├── references/                       # Visual references & high-standard benchmarks
│   ├── README.md                     # Inspiration guidelines (Webcare IDN, Apple Developer Academy @ UC)
│   └── .gitkeep
│
└── README.md                         # Workspace documentation (this file)
```

---

## 3. Available Agent Skills

| Skill Name | Location | Primary Role |
| :--- | :--- | :--- |
| **`instagram-content`** | [`.agents/skills/instagram-content/SKILL.md`](file://.agents/skills/instagram-content/SKILL.md) | Master orchestrator. Drives the 10-stage pipeline from project assets to publication. |
| **`instagram-art-direction`** | [`.agents/skills/instagram-art-direction/SKILL.md`](file://.agents/skills/instagram-art-direction/SKILL.md) | Decides *"What should I post?"*. Mines projects for multiple opportunities, selects 1 of 7 composition families, and balances 3×3 feed rhythm. |
| **`figma-design`** | [`.agents/skills/figma-design/SKILL.md`](file://.agents/skills/figma-design/SKILL.md) | Decides *"How should it be visually designed in Figma?"*. Connects to `figwright` MCP, enforces Auto Layout, design tokens, and editable layers. |
| **`instagram-portfolio`** | [`.agents/skills/instagram-portfolio/SKILL.md`](file://.agents/skills/instagram-portfolio/SKILL.md) | Structures single feed showcases and focused 2–4 slide micro-carousels centered on one dominant message. |
| **`berkahbekhan-brand`** | [`.agents/skills/berkahbekhan-brand/SKILL.md`](file://.agents/skills/berkahbekhan-brand/SKILL.md) | Enforces the design system: flexible canvas, screenshot primacy, Inter/JetBrains Mono typography, and strict anti-slop rules. |
| **`content-review`** | [`.agents/skills/content-review/SKILL.md`](file://.agents/skills/content-review/SKILL.md) | Pre-flight audit gate applying the AI-Slop Test, Simplification Test, Portfolio Test, and strict fact verification. |
| **`instagram-tips`** | [`.agents/skills/instagram-tips/SKILL.md`](file://.agents/skills/instagram-tips/SKILL.md) | Supporting skill for technical breakdowns and development insights extracted from real build hurdles. |

---

## 4. Architectural Separation

| Domain | Question | Responsible Skill |
| :--- | :--- | :--- |
| **Strategy & Art Direction** | *"What should I post?"* | `instagram-art-direction` |
| **Workspace & Construction** | *"How should it be visually designed in Figma?"* | `figma-design` |
| **Portfolio Structuring** | *"How to package this project into a post?"* | `instagram-portfolio` |
| **Audit & Quality Assurance** | *"Does this meet veracity and anti-slop standards?"* | `content-review` |
| **Orchestration** | *"How do all steps connect together?"* | `instagram-content` |

---

## 5. Visual References & Inspiration

- **Webcare IDN** (`https://www.instagram.com/webcare.idn/`): Reference for prolific portfolio-heavy cadence and project delivery showcase.
- **Apple Developer Academy @ UC** (`https://www.instagram.com/ucs_appledeveloperacademy/`): Reference for clean typography, editorial composition, and visual rhythm.
- *Strict Rule*: Inspiration only. Never copy their branding, layouts, colors, or typography.
