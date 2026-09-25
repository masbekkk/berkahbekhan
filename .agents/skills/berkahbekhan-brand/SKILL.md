---
name: berkahbekhan-brand
description: The single source of truth for the visual and communication identity of berkahbekhan.inc. Enforces typography hierarchy, real screenshot primacy, flexible canvas treatments, restrained design tokens, and developer aesthetics.
when_to_use: Use whenever designing, styling, or reviewing visual content for @berkahbekhan.inc. Defines color tokens, typography scales, layout geometry, screenshot framing, and anti-AI-slop rules.
allowed-tools: Read, Grep, Glob
version: 2.1.0
priority: CRITICAL
---

# BerkahBekhan Brand Identity Skill

> **Core Philosophy**: **THE WORK IS THE DESIGN.**  
> The Instagram identity of **@berkahbekhan.inc** is a developer's visual archive of real software that has actually been built. Every post communicates: *"This developer actually builds software,"* never *"This account generates AI portfolio graphics."*

Use this skill whenever designing, styling, formatting, or evaluating content for **berkahbekhan.inc**.

---

## 1. Core Visual Hierarchy (Priority Order)

Every design decision must strictly respect this 9-level priority ranking:

1. **Real project screenshots** (Undistorted, sharp, clear, primary visual)
2. **Real product UI** (Genuine forms, tables, workflows, components)
3. **Strong typography** (Clear, assertive type hierarchy; high legibility on mobile)
4. **Clear hierarchy** (Primary visual → Primary message → Secondary info → Branding)
5. **Editorial composition** (Thoughtful layout, balanced asymmetry, magazine-grade structure)
6. **Whitespace** (Generous breathing room, consistent 80px safe margins)
7. **Consistent branding** (Understated watermark, consistent fonts, disciplined margins)
8. **Supporting metadata** (Stack labels, file paths, dates, counters)
9. **Decoration** (Remove if non-functional)

---

## 2. Screenshot & Asset Primacy: "The Work Is the Hero"

> 🔴 **ABSOLUTE RULE**: **NEVER DISTORT A PROJECT SCREENSHOT.**  
> Every screenshot MUST preserve its original, true aspect ratio.
> 
> Optimize for: **SCREENSHOT READABILITY > NUMBER OF SCREENSHOTS**  
> Never optimize for: **NUMBER OF SCREENSHOTS > READABILITY**

### A. Prohibited Geometric Distortions
Never under any circumstances:
- ❌ Stretch horizontally or vertically
- ❌ Squeeze or squash
- ❌ Scale non-uniformly
- ❌ Force an image into an arbitrary pre-defined rectangle
- ❌ Distort UI typography, icons, charts, or product screenshots

### B. Image Fitting Mental Model
- **`CONTAIN`**: Use when the full screenshot and all surrounding context must remain completely visible.
- **`COVER + CROP`**: Use when the screenshot should fill a designated visual area, but non-essential peripheral edges can be cleanly cropped without losing context or labels.
- **`DETAIL CROP`**: Use when a specific UI component (a form control, modal, data row, or chart element) deserves deliberate emphasis.
- **NEVER `STRETCH TO FIT`**: If the screenshot aspect ratio and the container ratio differ, **change the composition layout**, do not deform the screenshot.

### C. Direct Editorial Image Placement (Anti-Card Rule)
- A screenshot **does NOT need to live inside a card**.
- Prefer direct editorial image placement: let the interface sit cleanly directly on the canvas.
- Apply a subtle `1px solid` hairline border (`#2C2C2E` on dark canvas, `#E5E5EA` on light canvas) and a crisp corner radius (`12px - 16px`).
- Strictly avoid:
  - ❌ Laptop mockups and phone bezels
  - ❌ Isometric or 3D perspective mockups
  - ❌ Heavy fake browser chrome or simulated OS window headers with colored dots
  - ❌ Floating screenshot cards wrapped inside nested dark containers
  - ❌ Fake product 3D renders or conceptual wireframes

---

## 3. Brand System & Safe Margin Architecture

The BerkahBekhan brand provides **systemic consistency**, while the individual project provides **product personality**.

### What the Brand Provides (Consistent Across All Posts):
- **Canvas Geometry**: Standard carousel feed size is `1080 × 1350 px` (4:5). All slides in a carousel MUST use the exact same dimensions.
- **Safe Margin System**: Generous, consistent `80px` outer margins from top, bottom, left, and right. Never place important headlines or UI flush against canvas edges.
- **Typography**: Inter / Geist Sans for editorial copy, JetBrains Mono / Geist Mono for technical metadata.
- **Spacing Scale**: Disciplined 8px rhythm (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `80px`).
- **Labeling & Structure**: Restrained mono eyebrows, precise headers, quiet footer handles.
- **Visual Rhythm**: Intentional pacing between image-dominant and typography-dominant posts.

### What the Project Provides (Flexible Per Post):
- **Actual UI & Screens**: Real screenshots retain their original colors, theme, and styling.
- **Product Personality**: Project-specific accent colors and interface aesthetics.
- **Authentic Details**: Exact frameworks, packages, database schemas, and workflows.

### Background & Dark Mode Rules:
- **Dark mode is NOT mandatory**.
- Canvas backgrounds may be:
  - Apple Studio White (`#FFFFFF`) or Signature Off-White (`#F5F5F7`)
  - Space Black (`#000000`) or Studio Dark (`#161617` / `#1D1D1F`)
  - Project-derived background tones sampled subtly from the software interface
- Never force every screenshot into an elevated dark card container.

---

## 4. Design System Tokens (Apple Developer Academy @ UC Reference)

### Core Tokens:

| Token | Dark Canvas | Light Canvas | Role |
| :--- | :--- | :--- | :--- |
| **Canvas** | `#000000` / `#161617` | `#FFFFFF` / `#F5F5F7` | Primary post background. |
| **Surface** | `#1C1C1E` / `#2C2C2E` | `#FFFFFF` | Code snippet panels, callouts (when strictly needed). |
| **Primary Text** | `#F5F5F7` | `#1D1D1F` | Main headlines, primary messaging. |
| **Muted Text** | `#86868B` | `#6E6E73` / `#86868B` | Stack tags, labels, captions, metadata. |
| **Border** | `#2C2C2E` / `#38383A` | `#E5E5EA` / `#D2D2D7` | Hairline boundaries, screenshot edge (1px solid). |
| **Primary Accent** | `#FF9500` / `#FC8117` | `#FC8117` | **Academy Tangerine**. UC Apple Academy signature focus accent. |
| **System Accent** | `#0A84FF` / `#0071E3` | `#0071E3` | **Apple Developer Blue**. Interactive links, technical badges. |
| **Swift Accent** | `#F05138` | `#F05138` | **Swift Flame**. Architecture diffs and compiler callouts. |

---

## 5. Typography Hierarchy

- **Pairings**:
  - Primary Sans: **Inter** or **Geist Sans**
  - Technical Mono: **JetBrains Mono** or **Geist Mono**

### Feed Scale (1080 × 1350 px):
- **Eyebrow Tag**: `24px - 28px` Mono (Uppercase, `+0.05em` tracking)
- **Primary Headline**: `64px - 80px` Sans (Bold / SemiBold, line-height `1.15`, `-0.02em` tracking)
- **Subtitle / Section**: `32px - 40px` Sans (Medium / SemiBold, line-height `1.25`)
- **Body / Narrative**: `26px - 30px` Sans (Regular, line-height `1.45`, `35–55` character line length)
- **Code Block**: `22px - 26px` Mono (Regular, line-height `1.5`)
- **Metadata / Footer**: `20px - 24px` Mono (Medium, Muted token)

> **Typography Guardrail**: If text does not fit comfortably within the safe margins, **REMOVE CONTENT**, do not shrink typography until it becomes unreadable.

---

## 6. Prohibited AI-Slop Checklist

Eliminate all generic social media gimmicks:
- ❌ Distorted, squeezed, or non-uniformly scaled screenshots
- ❌ Unreadable, microscopic screenshots squeezed into equal-sized boxes
- ❌ Excessive gradients, neon glow halos, or blurred radial spots
- ❌ Glassmorphism blurs with heavy translucent white outlines
- ❌ Excessive pill badges and rounded pill clusters
- ❌ Decorative background grids, circuit board lines, or dots
- ❌ Floating 3D geometric shapes, spheres, donuts, coins, or isometric emojis
- ❌ Fake user counts, fabricated metrics, or generic buzzwords (*"supercharge"*, *"revolutionize"*)
- ❌ Repetitive presentation-deck layouts (`CASE STUDY / 01 / 07` on every slide)

---

## 7. Canonical Brand Documentation References

For specific deep-dives, consult:
- [`brand/colors.md`](file:///d:/Repos/berkahbekhan/brand/colors.md) — Canvas variations and palette usage
- [`brand/typography.md`](file:///d:/Repos/berkahbekhan/brand/typography.md) — Font stacks and mobile scales
- [`brand/visual-rules.md`](file:///d:/Repos/berkahbekhan/brand/visual-rules.md) — Spacing rhythm, safe zones, composition families, screenshot proportion rules
- [`brand/content-rules.md`](file:///d:/Repos/berkahbekhan/brand/content-rules.md) — Carousel story sequence, single-job rule, anti-fabrication mandate
