# Visual Rules — berkahbekhan.inc

This document defines the layout grids, spacing rules, card styling, screenshot framing, and visual consistency requirements for **berkahbekhan.inc**.

---

## 1. Grid & Canvas Margins

### Feed & Carousel (1080 × 1350 px — 4:5 Aspect Ratio)
- **Outer Canvas Margins**: Minimum `80px` on all 4 sides (`80px` left/right, `80px` top, `90px` bottom).
- **Safe Area**: Keep all core text and visuals inside the `920 × 1170 px` inner boundary.
- **Top Header Height**: `100px - 140px` (Eyebrow tag + Slide Title or Category).
- **Bottom Footer Height**: `80px - 100px` (Brand handle `@berkahbekhan.inc` + Slide Pagination `01 / 07`).

### Story & Reel Cover (1080 × 1920 px — 9:16 Aspect Ratio)
- **Top Safe Margin**: `250px` (clears Instagram account header and story progression bars).
- **Bottom Safe Margin**: `350px` (clears message box, reel caption, audio ticker, like/comment buttons).
- **Side Margins**: `80px` left and right.
- **Reel Grid Thumbnail Safe Zone**: Center `1080 × 1080 px` square (and `1080 × 1350 px` feed crop) must contain the primary title and screenshot hook.

---

## 2. Spacing Scale

Use a consistent 8px base rhythm:
- `8px` — Micro spacing (tag padding, icon margins)
- `16px` — Compact spacing (list item gap, subtitle margin)
- `24px` — Card internal padding (small devices / dense snippets)
- `32px` — Standard card internal padding / section gap
- `48px` — Block gap (between header and screenshot / code card)
- `64px` — Major structural separation

---

## 3. Cards & Containers

- **Background Color**: `#151B23` (Surface token).
- **Border**: `1px solid #263241`.
- **Corner Radius (Border Radius)**:
  - Standard cards / containers: `16px` or `20px`.
  - Inner elements / badges: `8px` or `9999px` (pill badges).
- **Elevation / Shadow**: Flat. Do not use blurred colored drop shadows or neon glows. A very subtle black shadow (`rgba(0, 0, 0, 0.4) 0px 8px 24px`) is permissible only to separate a floating screenshot card from the `#0B0F14` background.

---

## 4. Screenshot & Code Treatment

> **CRITICAL RULE**: The real software screenshot must remain visually dominant. Avoid shrinking screenshots to make room for decorative shapes.

### Screenshot Framing
- **No 3D Tilting**: Screenshots must be presented flat and front-facing (orthographic). No isometric perspective angles or fake phone hand mockups.
- **Window Chrome**:
  - Optional clean dark title bar (`#151B23`) with three subtle neutral window dots (or no dots).
  - Outline: `1px solid #263241`.
  - Corner Radius: `12px` to `16px`.
- **Cropping**: Crop tightly to the relevant user flow or interface section. Do not include empty white browser tabs or irrelevant desktop clutter.
- **Authenticity**: Never blur out entire interfaces or substitute real UI with generic vector wireframe drawings.

### Code Snippets
- Always use dark surface background `#151B23` with `#263241` border.
- Syntax highlighting: Subtle, restrained colors matching the brand palette (e.g., `#60A5FA` for functions/types, `#F8FAFC` for code, `#94A3B8` for comments/operators).
- Line numbers: Display in `#94A3B8` at `50%` opacity.

---

## 5. Header, Footer, and Pagination Treatment

### Header Structure
- **Left**: Category / Topic Pill (e.g., `[ ARCHITECTURE ]`, `[ CASE STUDY ]`, `[ LARAVEL + VITE ]`) in `#60A5FA` JetBrains Mono.
- **Right** (Optional): Series tag or context badge.

### Footer Structure
- **Left**: Brand watermark `@berkahbekhan.inc` in `#94A3B8` (small, clean, understated).
- **Right**: Slide Pagination formatted as `01 / 07` or `03 / 05` in `#94A3B8` JetBrains Mono.
- **Divider**: A subtle `1px` horizontal border (`#263241`) can sit above the footer, or the footer can rest naturally with adequate whitespace.

---

## 6. Prohibited Visual Patterns

1. **NO Excessive Gradients**: No bright purple-to-yellow or rainbow neon backgrounds.
2. **NO Heavy Glassmorphism**: No frosted glass layers with high blur and heavy white specular highlights.
3. **NO Floating 3D Shapes**: No floating clay donuts, spheres, coins, or isometric emojis.
4. **NO Fake Stock Device Frames**: Avoid photorealistic hands holding phones or laptops in coffee shops. Focus on the software itself.
5. **NO Visual Decoration Without Function**: Every line, border, and badge must serve structure or legibility.
