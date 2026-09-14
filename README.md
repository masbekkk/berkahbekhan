# berkahbekhan.inc — Instagram Content Generator Workspace

A specialized, reproducible workspace and agentic skill system for generating editorial-grade, developer-focused Instagram content for **@berkahbekhan.inc**.

---

## 1. Purpose of this Workspace

This workspace bridges real engineering work and high-signal Instagram content. Instead of generating fictional marketing posts or generic advice, this system processes **real software projects, architecture decisions, and codebases** and translates them into polished, technically credible Instagram assets (Carousels, Single Feeds, Stories, and Reel concepts).

### Core Operating Principle

```
REAL PROJECT INFORMATION
          ↓
 CONTENT UNDERSTANDING
          ↓
  INSTAGRAM FORMAT
          ↓
BERKAHBEKHAN BRAND DESIGN
          ↓
    FINAL CONTENT
```

- **The Software is the Hero**: Genuine application screenshots and valid code snippets remain the primary visual element.
- **Zero Hallucinations**: We never fabricate client metrics, features, testimonials, or technologies.
- **Editorial Over Advertising**: Content reads like an engineering blog or micro-article, not a generic social media sales pitch.

---

## 2. Directory Structure

```
berkahbekhan-instagram/
│
├── .agents/
│   └── skills/
│       │
│       ├── berkahbekhan-brand/       # Single source of truth for brand visual identity
│       │   └── SKILL.md
│       │
│       ├── instagram-content/        # Master orchestrator for Instagram post generation
│       │   └── SKILL.md
│       │
│       ├── instagram-portfolio/      # Transforms real projects into portfolio case studies
│       │   └── SKILL.md
│       │
│       ├── instagram-tips/           # Generates practical developer tips & code breakdowns
│       │   └── SKILL.md
│       │
│       └── content-review/           # Quality audit & Anti-AI-slop verification
│           └── SKILL.md
│
├── brand/                            # Core brand documentation & design tokens
│   ├── README.md                     # Brand system overview & philosophy
│   ├── colors.md                     # Color palette tokens (#0B0F14, #151B23, #3B82F6, etc.)
│   ├── typography.md                 # Font hierarchy (Inter + JetBrains Mono)
│   ├── visual-rules.md               # Spacing, cards, screenshot framing, safe zones
│   └── content-rules.md              # Anti-AI-slop rules, tone of voice, veracity guidelines
│
├── projects/                         # Source of truth: Real project inputs
│   ├── README.md                     # Guide to adding projects
│   └── .gitkeep
│
├── content/                          # Written post drafts and storyboards
│   ├── portfolio/                    # Draft portfolio carousels
│   ├── tips/                         # Draft developer tips & code explanations
│   ├── reels/                        # Reel scripts, concepts, and hooks
│   ├── stories/                      # Story updates and snippets
│   └── drafts/                       # Uncategorized exploratory drafts
│
├── templates/                        # Conceptual layouts and visual specs
│   ├── README.md                     # Documentation for the 5 conceptual templates
│   ├── feed/                         # Single feed templates (1080 × 1350)
│   ├── carousel/                     # Multi-slide carousel templates (1080 × 1350)
│   ├── story/                        # Story templates (1080 × 1920)
│   └── reel/                         # Reel cover templates (1080 × 1920 with safe zones)
│
├── output/                           # Production-ready generated assets
│   ├── feed/
│   ├── carousel/
│   ├── story/
│   └── reel/
│
├── references/                       # Visual references & high-standard benchmarks
│   ├── README.md
│   └── .gitkeep
│
└── README.md                         # Workspace documentation (this file)
```

---

## 3. Available Agent Skills

| Skill Name | Location | Primary Role |
| :--- | :--- | :--- |
| **`berkahbekhan-brand`** | [`.agents/skills/berkahbekhan-brand/SKILL.md`](file://.agents/skills/berkahbekhan-brand/SKILL.md) | Enforces the design system: dark `#0B0F14` canvas, `#151B23` surfaces, `#3B82F6`/`#60A5FA` accents, `#263241` borders, Inter + JetBrains Mono typography, and screenshot framing. |
| **`instagram-content`** | [`.agents/skills/instagram-content/SKILL.md`](file://.agents/skills/instagram-content/SKILL.md) | Master orchestrator. Maps incoming content goals to the right format (Carousel, Feed, Story, Reel Cover) and manages the generation lifecycle. |
| **`instagram-portfolio`** | [`.agents/skills/instagram-portfolio/SKILL.md`](file://.agents/skills/instagram-portfolio/SKILL.md) | Ingests real project materials (`projects/<project-name>/`) and structures factual, visually compelling case study carousels (5–7 high-signal slides). |
| **`instagram-tips`** | [`.agents/skills/instagram-tips/SKILL.md`](file://.agents/skills/instagram-tips/SKILL.md) | Formulates actionable developer tips using the 5-stage signal chain: Real Problem → Why It Happens → How to Solve It → Practical Example → Takeaway. |
| **`content-review`** | [`.agents/skills/content-review/SKILL.md`](file://.agents/skills/content-review/SKILL.md) | 7-dimension audit filter (Authenticity, Specificity, Originality, Visual Consistency, Accuracy, AI-Slop Elimination, Credibility) that must pass before publishing. |

---

## 4. How Projects Are Added

Projects serve as the single factual source of truth. To add a project:

1. Create a directory inside `projects/`:
   ```bash
   projects/my-project/
   ├── project.md         # Overview, tech stack, architecture, challenges
   ├── README.md          # Original repository documentation
   ├── screenshots/       # Real UI screenshots (uncompressed PNGs)
   ├── assets/            # Architecture diagrams, database schemas
   └── documentation/     # API notes, deployment logs, metrics
   ```
2. Populate the folder with real project data and screenshots.
3. The content generator reads only from this folder. If an item is not documented, it will never be hallucinated.

---

## 5. How Content Generation & Review Works

1. **Input Analysis**: The agent inspects `projects/<project-name>/` to verify stack, features, and actual screenshots.
2. **Drafting & Layout**: The appropriate skill (`instagram-portfolio` or `instagram-tips`) creates structured copy and visual layout specs according to the `berkahbekhan-brand` rules.
3. **Audit**: `content-review` evaluates the draft against the 7-dimension matrix.
4. **Approval**: Once verified as authentic and AI-slop free, the content is saved to `content/` (copy) and `output/` (final assets).

---

## 6. Brand & Anti-AI-Slop Philosophy

We reject the generic marketing tropes that dominate tech social media:
- **No Hype Phrases**: Never use *"supercharge"*, *"revolutionize"*, *"unlock your potential"*, or *"in today's digital era"*.
- **No Fabricated Evidence**: No fake metrics, fictional testimonials, or AI-generated faces.
- **No Decorative Gimmicks**: No floating 3D clay shapes, neon gradients, or glassmorphism blurs.
- **Real Engineering Voice**: We talk about N+1 queries, race conditions, caching strategies, Docker builds, and real architecture trade-offs.

---

## 7. Example Future Commands

The following commands demonstrate how this workspace will be operated in future workflows.

> **NOTE: These are examples for future reference only. Do NOT execute them now.**

```bash
# Example 1: Generate a portfolio case study carousel
"Create an Instagram portfolio carousel from projects/my-project"

# Example 2: Extract a developer tip from an encountered bug
"Create a developer tip from this project"

# Example 3: Prepare a vertical story spotlight
"Create a Story from this project"

# Example 4: Conceptualize a Reel video cover and script
"Create a Reel concept from this project"

# Example 5: Audit a post draft for buzzwords and factual grounding
"Review this Instagram post for AI slop"
```
