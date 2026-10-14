# Design Templates & Composition Families — berkahbekhan.inc

This directory establishes the layout specifications and composition families for **@berkahbekhan.inc** Instagram assets.

The active client-facing system is defined in [feed-direction.md](../brand/feed-direction.md). Start with the four reusable masters in [feed/README.md](./feed/README.md) and the short story sequence in [carousel/README.md](./carousel/README.md). The seven families below remain a vocabulary for composition; their old palette examples and stack-first copy do not override current brand tokens or audience needs.

> **Design Principle**: **THE WORK IS THE DESIGN.**  
> Avoid decorative, repetitive template-heavy designs. We do not use rigid `CASE STUDY / 01 / 07` decks. Layouts prioritize **real screenshots, clear typography, generous whitespace, and authentic software interfaces**.

---

## 1. The 7 Composition Families

Instead of forcing all content into a single universal template, content is designed using seven distinct composition families:

### 1. PROJECT HERO (`templates/feed/` or `templates/carousel/`)
- **Format**: `1080 × 1350 px` (4:5)
- **Visual Focus**: Dominant product interface screenshot occupying 65%–75% of the canvas.
- **Structure**:
  - Top: Eyebrow badge `[ PROJECT HERO ]` in JetBrains Mono + Display title in Inter Bold (`64px - 76px`)
  - Center: Clean, orthographic screenshot container (`1px solid` border, `16px` radius)
  - Bottom: Tech stack metadata row (e.g., `PHP 8.4 • Laravel 12 • Inertia React • Tailwind v4`)
  - Footer: `@berkahbekhan.inc` handle

### 2. FEATURE SPOTLIGHT (`templates/feed/` or `templates/carousel/`)
- **Format**: `1080 × 1350 px` (4:5)
- **Visual Focus**: Focused screenshot of a specific workflow UI (e.g., assessment instrument, export modal).
- **Structure**:
  - Top: Feature label `[ FEATURE SPOTLIGHT ]` + Problem-solution headline
  - Center: High-detail cropped UI flow with concise annotations
  - Bottom: Concrete operational benefit (e.g., *"Automated state lock per academic year"*)
  - Footer: `@berkahbekhan.inc` handle

### 3. PRODUCT SCREENSHOT (`templates/feed/`)
- **Format**: `1080 × 1350 px` (4:5)
- **Visual Focus**: The pure, unencumbered interface screenshot occupies 80%+ of the canvas.
- **Structure**:
  - Minimal top header (project name + brief subtext)
  - Center: Full-width or generous margin orthographic UI capture
  - Minimal footer: `@berkahbekhan.inc`

### 4. TECHNICAL BREAKDOWN (`templates/feed/` or `templates/carousel/`)
- **Format**: `1080 × 1350 px` (4:5)
- **Visual Focus**: Syntax-highlighted code block, database schema, or topology diagram.
- **Structure**:
  - Top: Engineering challenge header (e.g., `[ ARCHITECTURE BREAKDOWN ]`)
  - Center: Dark surface code panel (`#151B23`, `1px solid #263241`, JetBrains Mono)
  - Bottom: 1-sentence engineering takeaway or architectural trade-off

### 5. DEVELOPMENT INSIGHT (`templates/feed/`)
- **Format**: `1080 × 1350 px` (4:5)
- **Visual Focus**: Bold editorial typography paired with contextual code diff or terminal output.
- **Structure**:
  - Strong, provocative headline stating the engineering realization
  - Concise technical narrative (35–55 characters per line)
  - Code diff or terminal log container

### 6. PROJECT DETAIL (`templates/feed/`)
- **Format**: `1080 × 1350 px` (4:5)
- **Visual Focus**: Close-up macro screenshot of a micro-interaction, form control, or specialized UI state.
- **Structure**:
  - Top: Micro-interaction badge
  - Center: 1:1 or 4:3 high-resolution UI detail
  - Bottom: Note on UX polish or accessibility implementation

### 7. PROOF / ACHIEVEMENT (`templates/feed/`)
- **Format**: `1080 × 1350 px` (4:5)
- **Visual Focus**: Verified production deployment log, passing test suite (Pest/PHPUnit), or live milestone.
- **Structure**:
  - Factual outcome headline
  - Terminal or pipeline status output
  - Verified production date and environment

---

## 2. Vertical Formats (Stories & Reel Covers)

### Story (`templates/story/`)
- **Dimensions**: `1080 × 1920 px` (9:16)
- **Safe Zones**: Top `250px`, bottom `350px` padding.
- **Visual Focus**: Fast, vertical build update or code snippet callout.

### Reel Cover (`templates/reel/`)
- **Dimensions**: `1080 × 1920 px` (9:16)
- **Safe Zones**: Center `1080 × 1080 px` square contains all key typography and hero screenshot for profile grid thumbnail; `1080 × 1350 px` feed crop safe.

---

## 3. Figma Design System Alignment

These templates are maintained directly in Figma using [`figma-design`](file://.agents/skills/figma-design/SKILL.md).  
Frames are structured with Auto Layout, reusable components, and editable layers.
