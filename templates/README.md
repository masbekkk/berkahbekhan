# Template System — berkahbekhan.inc

This directory establishes the conceptual and layout templates for **berkahbekhan.inc** Instagram assets.

> **Design Principle**: Avoid decorative, template-heavy designs. Templates emphasize **clean typography, generous whitespace, real screenshots, clear hierarchy, and consistent framing**.

All templates share the exact brand tokens defined in `.agents/skills/berkahbekhan-brand/SKILL.md` (Canvas `#0B0F14`, Surface `#151B23`, Border `#263241`, Text `#F8FAFC`, Accents `#3B82F6` / `#60A5FA`).

---

## The 5 Conceptual Templates

### 1. Portfolio Showcase (Carousel / Feed)
- **Format**: `1080 × 1350 px` (4:5)
- **Visual Focus**: Real software interface screenshot dominates 60% of the canvas.
- **Components**:
  - Top: Eyebrow pill tag `[ PORTFOLIO / STACK ]` + Clear project title
  - Center: Clean screenshot window (`1px solid #263241`, rounded corners, flat orthographic view)
  - Bottom: Concrete feature highlight or architecture note
  - Footer: `@berkahbekhan.inc` watermark + slide counter

### 2. Developer Tip (Carousel / Single Post)
- **Format**: `1080 × 1350 px` (4:5)
- **Visual Focus**: Problem-solving code snippet or terminal command.
- **Components**:
  - Top: Problem statement badge `[ DEBUGGING / FRAMEWORK ]` + High-signal question/title
  - Center: Code snippet surface (`#151B23`, JetBrains Mono font, subtle syntax highlights)
  - Bottom: The "Why it happens" and "How to fix it" explanation
  - Footer: Brand handle + slide index

### 3. Case Study (Deep-Dive Carousel)
- **Format**: `1080 × 1350 px` (4:5, 5–7 slides)
- **Visual Focus**: Comprehensive engineering narrative (Context → Architecture → Hurdle → Solution → Result).
- **Components**:
  - Cover slide with hero UI
  - Context & architectural constraints slide
  - Flow / schema diagrams
  - Technical challenge & code refactor
  - Production outcome & verified takeaways

### 4. Story (Quick Update & Spotlight)
- **Format**: `1080 × 1920 px` (9:16)
- **Visual Focus**: Vertical single-card view with high readability on mobile.
- **Safe Zones**: Top `250px` padding, bottom `350px` padding.
- **Components**:
  - Centered card (`#151B23`, `1px solid #263241`) with focused code block or screenshot snippet
  - Clear, concise headline in Inter Bold (`56px - 68px`)
  - Optional engagement trigger (native Instagram poll or sticker placement area)

### 5. Reel Cover (Thumbnail Framing)
- **Format**: `1080 × 1920 px` (9:16)
- **Visual Focus**: High-clarity title and hero screenshot framed to look perfect across both feed grid and reel tabs.
- **Safe Zones**:
  - Center `1080 × 1080 px` square: The entire primary title, category pill, and hero visual must fit cleanly inside this square for the Instagram profile grid.
  - `1080 × 1350 px` vertical crop: For feed recommendations.
- **Components**:
  - Category pill + high-contrast headline (`72px - 84px`)
  - Crisp, real UI snapshot underneath

---

## Directory Organization

```
templates/
├── README.md        # Conceptual template specifications & layout rules
├── feed/            # Single feed post templates
├── carousel/        # Multi-slide carousel templates
├── story/           # Vertical story templates (9:16)
└── reel/            # Reel cover templates (9:16 with 1:1 safe zones)
```
