# Visual Rules — berkahbekhan.inc

This document defines layout geometry, screenshot presentation, the 7 composition families, and visual anti-slop rules for **@berkahbekhan.inc**.

---

## 1. Core Visual Hierarchy

All visual compositions follow this priority order:

```
1. REAL PROJECT SCREENSHOTS
2. REAL PRODUCT UI
3. STRONG TYPOGRAPHY
4. CLEAR HIERARCHY
5. EDITORIAL COMPOSITION
6. WHITESPACE
7. CONSISTENT BRANDING
8. SUPPORTING METADATA
9. DECORATION (Remove if non-functional)
```

---

## 2. Canvas Dimensions & Outer Margins

| Format | Dimensions | Aspect Ratio | Outer Margins & Safe Area |
| :--- | :--- | :--- | :--- |
| **Feed Post** | `1080 × 1350 px` | 4:5 | `80px` padding on all four edges. Core content area: `920 × 1190 px`. |
| **Square Post** | `1080 × 1080 px` | 1:1 | `80px` padding on all edges. Core content area: `920 × 920 px`. |
| **Story** | `1080 × 1920 px` | 9:16 | `250px` top safe zone, `350px` bottom safe zone, `80px` side padding. |
| **Reel Cover** | `1080 × 1920 px` | 9:16 | Center `1080 × 1080 px` square safe zone for profile grid crop; `1080 × 1350 px` feed crop. |

---

## 3. Spacing Rhythm (8px Base Scale)

Use multiples of 8px to maintain consistent vertical and horizontal rhythm:
- `8px`: Micro spacing (tag internal padding, badge margin)
- `16px`: Compact spacing (subtitle to body gap, list item separation)
- `24px`: Moderate gap (between metadata pills and headline)
- `32px`: Component gap (between header group and screenshot container)
- `48px`: Section block gap
- `64px`: Major layout separation
- `80px`: Canvas outer border padding

---

## 4. Screenshot Presentation: Real UI Over Mockups

> **THE WORK IS THE HERO**: We strictly reject presentation-deck clichés and fake 3D mockups.

- **Orthographic & Flat**: Screenshots must sit directly and front-facing on the canvas. No 3D tilting, no isometric angles, no perspective warping.
- **No Device Bezels**: Do not insert screenshots into fake laptops, smartphone cutouts, or hands holding devices unless displaying a native mobile OS interaction that requires viewport context.
- **No Skeuomorphic Chrome**: Avoid fake browser tabs, colored dots, or simulated window title bars. If a screenshot requires separation, use a clean `1px solid` border (`#263241` or `#E2E8F0`) with a subtle `12px - 16px` corner radius.
- **Dominance**: The real application interface should occupy between **60% and 85%** of the slide canvas. Never shrink screenshots to fit decorative background shapes.

---

## 5. The 7 Composition Families

Do not use a single repetitive template. Every post is styled using one of these seven distinct composition families:

### 1. PROJECT HERO
- **Purpose**: Introduce a major built project or newly shipped web portal.
- **Layout**: Top eyebrow tag + strong display headline (`64px - 76px`) + dominant UI screenshot spanning 70%+ of canvas + subtle tech stack row.

### 2. FEATURE SPOTLIGHT
- **Purpose**: Walk through a specific tool or workflow (e.g., student assessment form, export wizard).
- **Layout**: Clear problem-solution headline + tight UI crop focusing on the active interface + short annotation callouts.

### 3. PRODUCT SCREENSHOT
- **Purpose**: Pure visual celebration of software craftsmanship.
- **Layout**: Minimal typographic framing (small top label and quiet footer); 80%+ of canvas dedicated to a crisp, unencumbered interface screenshot.

### 4. TECHNICAL BREAKDOWN
- **Purpose**: Explain an architectural mechanism, data model, or query optimization.
- **Layout**: Headline stating the architectural problem + clean syntax-highlighted code container in JetBrains Mono + concise explanation.

### 5. DEVELOPMENT INSIGHT
- **Purpose**: Share a concrete engineering trade-off or hard-won production lesson.
- **Layout**: Bold editorial type headline + concise narrative + supporting code diff or terminal output.

### 6. PROJECT DETAIL
- **Purpose**: Highlight a micro-interaction, form control, modal, or custom component.
- **Layout**: Close-up interface crop + subtle descriptive caption emphasizing UX craftsmanship.

### 7. PROOF / ACHIEVEMENT
- **Purpose**: Share verified production deployment, test suite run, or milestone.
- **Layout**: Factual metric or terminal test output (`Pest / PHPUnit / Playwright`) + clean status badge. Strictly zero fabrication.

---

## 6. Prohibited Visual Slop Patterns

Treat all of the following as immediate grounds for redesign:
- ❌ Excessive dark cards nested inside dark cards
- ❌ Bloated rounded containers (`32px`+ bubble corners)
- ❌ Excessive pill badges and tag clusters
- ❌ Browser mockups and device hand cutouts
- ❌ Decorative grids, gradient meshes, and neon glow halos
- ❌ Floating 3D objects, clay shapes, or generic SaaS vectors
- ❌ Repetitive `CASE STUDY / 01 / 07` slide deck headers
