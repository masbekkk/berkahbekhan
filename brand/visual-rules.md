# Visual Rules — berkahbekhan.inc

This document defines layout geometry, screenshot presentation, carousel sequence standards, composition families, and visual anti-slop rules for **@berkahbekhan.inc**.

Apply [feed-direction.md](./feed-direction.md) for the active UMKM audience and four reusable publishing compositions. The hierarchy below governs product showcases; service invitations and client questions may lead with typography. Preserve native screenshot geometry in every format. Use varied content order and image scale, not a mandatory badge/headline/card/footer sequence.

---

## 1. Core Visual Hierarchy

All visual compositions strictly follow this priority order:

```
1. REAL PROJECT SCREENSHOTS (Undistorted, sharp, clear, primary visual)
2. REAL PRODUCT UI (Genuine forms, tables, workflows, components)
3. STRONG TYPOGRAPHY (Clear headline hierarchy, high mobile legibility)
4. CLEAR HIERARCHY (Primary visual → Primary message → Secondary info → Branding)
5. EDITORIAL COMPOSITION (Thoughtful layout, balanced asymmetry, magazine-grade structure)
6. WHITESPACE (Generous breathing room, consistent safe margins)
7. CONSISTENT BRANDING (Understated watermark, consistent fonts, disciplined margins)
8. SUPPORTING METADATA (Stack labels, file paths, dates, counters)
9. DECORATION (Remove if non-functional)
```

---

## 2. Hard Rules: Proportion & Readability Primacy

> 🔴 **MANDATORY**: Optimize for **SCREENSHOT READABILITY > NUMBER OF SCREENSHOTS**.  
> Never optimize for **NUMBER OF SCREENSHOTS > READABILITY**.

### Rule A: Absolute Screenshot Proportionality (Aspect Ratio Inviolability)
- **NEVER distort a project screenshot**. Every image MUST preserve its original, true aspect ratio.
- Strictly forbidden:
  - ❌ Stretching horizontally or vertically
  - ❌ Squeezing or squashing
  - ❌ Non-uniform scaling
  - ❌ Forcing an image into an arbitrary rectangle
  - ❌ Distorting UI typography, icons, charts, or tables
- When fitting an image into a composition, ALWAYS:
  1. Preserve original aspect ratio.
  2. Scale proportionally.
  3. Crop intentionally when necessary.
  4. Use masking/clipping for focused UI sections.
  5. Position the crop intelligently to emphasize high-value UI.
- The screenshot MUST remain geometrically true to the running software.

### Rule B: Image Fitting Mental Model
Use this strict mental model:
- **`CONTAIN`**: Use when the complete screenshot and all surrounding context must remain fully visible.
- **`COVER + CROP`**: Use when the screenshot should fill a visual area, but non-essential peripheral edges can be cleanly cropped without losing context or labels.
- **`DETAIL CROP`**: Use when a specific UI component (a form control, modal, data row, or chart element) deserves deliberate emphasis.
- **NEVER `STRETCH TO FIT`**: If the screenshot aspect ratio and the container ratio differ, **change the composition layout**, do not deform the screenshot.

### Rule C: Never Sacrifice Proportion
When there is a conflict between:
- **Option A**: Fitting more content into a slide
- **Option B**: Preserving screenshot quality, proportion, and readability  
→ **ALWAYS choose Option B**. Templates adapt to the content; content is never distorted to fit templates.

### Rule D: Less Is Better
If a slide feels crowded:
- Do NOT shrink typography or squeeze screenshots into tiny cards.
- **Remove secondary content**.
- **Remove secondary screenshots**.
- **Simplify surrounding text**.
- **Split content into another slide**.
- **Increase screenshot size and whitespace**.

---

## 3. Canvas Dimensions & Safe Margin System

All slides in an Instagram carousel **MUST use exactly the same dimensions**:

| Format | Dimensions | Aspect Ratio | Safe Margins & Content Bounds |
| :--- | :--- | :--- | :--- |
| **Feed / Carousel** | `1080 × 1350 px` | 4:5 | **80px outer padding** on all four edges. Core content boundary: `920 × 1190 px`. |
| **Square Post** | `1080 × 1080 px` | 1:1 | **80px outer padding**. Core content boundary: `920 × 920 px`. |
| **Story** | `1080 × 1920 px` | 9:16 | `250px` top safe zone, `350px` bottom safe zone, `80px` side padding. |
| **Reel Cover** | `1080 × 1920 px` | 9:16 | Center `1080 × 1080 px` square safe zone for profile grid crop; `1080 × 1350 px` feed crop safe. |

### Safe Margin Rules:
- Generous, consistent margins from top, bottom, left, and right.
- Never place important headlines, UI details, or tags flush against canvas edges.
- Maintain consistent outer margin rhythm (`80px`) across every slide in the carousel sequence.
- Do not sacrifice margins or readability to artificially maximize content size.

---

## 4. One Primary Visual Per Slide & Multi-Screenshot Hierarchy

### Default Rule: One Primary Screenshot Per Slide
A slide may contain additional screenshots **ONLY** when they communicate an explicit relationship, workflow, comparison, or sequence.
> **The Addition Gate**: Before adding a second screenshot, ask:  
> *"Does this second image communicate something essential that the first image cannot?"*  
> If **NO** → Do NOT add it.

### Multi-Screenshot Visual Hierarchy Rules
When multiple screenshots are justified, **DO NOT automatically place them in equal-sized side-by-side boxes** (e.g. `SCREENSHOT A | SCREENSHOT B` on wide desktop screens causes both to shrink into illegibility).

Use intentional visual hierarchy:

| Pattern | Layout Mechanism | Best Use Case |
| :--- | :--- | :--- |
| **A. Hero + Secondary** | Large primary screenshot (70% visual weight) + smaller supporting screenshot (30% weight) | Main screen context + focused action modal |
| **B. Vertical Sequence** | Stacked full-width screenshots (Screenshot A over Screenshot B) with proportional heights | Before/After states or two-step sequential actions |
| **C. Workflow** | Proportional sequential cards (`A → B → C`) or distinct status transitions | Step-by-step pipeline from input to output |
| **D. Context + Detail** | Large macro interface view + zoomed detail crop highlighting a micro-interaction | Highlighting a table with a zoomed row or status badge |
| **E. Primary + Supporting** | Clear dominant anchor image with supporting evidence element | Dashboard overview with small supporting metric card |

> ⚠️ **Readability Threshold**: If shrinking screenshots makes UI labels, table cells, or buttons unreadable on mobile, **SPLIT THE SCREENSHOTS ACROSS SEPARATE SLIDES**. A large, understandable screenshot is always better than three tiny unreadable ones.

---

## 5. Desktop vs. Mobile Screenshot Handling

### Wide Desktop & Dashboard Screenshots
- **Prefer**:
  - Large single screenshot spanning full content width (`920px`).
  - Wide screenshot with proportional scaling and generous vertical breathing room.
  - Intentional horizontal or vertical crop focusing on the active module.
  - Context + Detail layout (macro view + micro crop).
- **Strictly Avoid**:
  - ❌ Tiny side-by-side desktop screens in equal columns.
  - ❌ Narrow cards compressing an entire 1920×1080 desktop interface into 400px width.
  - ❌ Squeezing multiple dashboards into one slide.

### Mobile & Portrait Screenshots
- **Preserve the portrait aspect ratio** (typically 9:16, 9:19.5, or 3:4).
- Never stretch mobile screens to fill a landscape container.
- **Prefer**:
  - One large prominent mobile screenshot.
  - Two proportional mobile screens side-by-side (natural 9:16 proportion fits portrait feed comfortably).
  - Vertical or horizontal sequence with proportional scaling.
  - Intentional detail crops on specific mobile sheet interactions.

---

## 6. Anti-Card Rule: Direct Editorial Image Placement

- A screenshot **does NOT need to live inside a card**.
- Prefer **direct editorial image placement**: let the interface sit cleanly directly on the canvas.
- Apply a subtle `1px solid` hairline border (`#2C2C2E` on dark canvas, `#E5E5EA` on light canvas) and a crisp corner radius (`12px - 16px`).
- Strictly avoid:
  - ❌ Wrapping screenshots in extra dark container cards.
  - ❌ Floating glassmorphism cards with thick glowing borders.
  - ❌ Fake laptop bezels, tablet mockups, or phone cutouts.
  - ❌ Fake browser address bars and window headers with colored dots.
- Use a container only when strictly necessary to separate contrasting elements or group a code block.

---

## 7. Spacing Rhythm (8px Base Scale)

Use strict multiples of 8px:
- `8px`: Micro spacing (pill internal padding, badge margin)
- `16px`: Compact spacing (subtitle to body gap, list item separation)
- `24px`: Moderate gap (between eyebrow tag and headline)
- `32px`: Component gap (between header group and screenshot container)
- `48px`: Section block gap
- `64px`: Major layout separation
- `80px`: Canvas outer border padding

---

## 8. The 7 Composition Families

Every post or carousel slide is styled using one of these seven distinct composition families:

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

## 9. Carousel Frame Structure

When constructing a multi-slide carousel:
```
CAROUSEL — [PROJECT NAME]
├── 00 — Carousel Overview (3×3 or sequential staging board to review story flow)
├── 01 — Cover / Project Hook
├── 02 — Product Overview / Strong Screen
├── 03 — Feature Spotlight
├── 04 — Workflow Walkthrough
├── 05 — Product Detail / Tiers
├── 06 — Technical Implementation
├── 07 — System Area / Permissions
├── 08 — Development Insight
└── 09 — Closing / Archive Proof
```

---

## 10. Prohibited Visual Slop Patterns

Treat all of the following as immediate grounds for redesign:
- ❌ Distorted, squashed, or non-uniformly stretched screenshots
- ❌ Unreadable tiny screenshots packed into equal-sized boxes
- ❌ Excessive dark cards nested inside dark cards
- ❌ Bloated rounded containers (`32px`+ bubble corners)
- ❌ Excessive pill badges and tag clusters
- ❌ Browser mockups and device hand cutouts
- ❌ Decorative grids, gradient meshes, and neon glow halos
- ❌ Floating 3D objects, clay shapes, or generic SaaS vectors
- ❌ Repetitive `CASE STUDY / 01 / 07` slide deck headers
