# Brand Colors — berkahbekhan.inc

The color system for **berkahbekhan.inc** is engineered for high contrast, dark-mode visual comfort, and technical elegance. It allows real software screenshots and code blocks to remain visually prominent without competition from loud backgrounds.

> **CRITICAL RULE**: Do not introduce additional colors or rainbow gradients unless explicitly requested.

---

## 1. Palette Tokens

| Token Name | Hex Code | Preview | Purpose & Role |
| :--- | :--- | :--- | :--- |
| **Background** | `#0B0F14` | `■` `#0B0F14` | Deep obsidian canvas. Primary background for all slides, canvases, and full-screen layouts. |
| **Surface** | `#151B23` | `■` `#151B23` | Elevated card surfaces, code snippet backgrounds, container boxes, and sidebar panels. |
| **Primary Accent** | `#3B82F6` | `■` `#3B82F6` | Electric Blue. Primary interactive elements, key tags, active slide indicators, and primary focal points. |
| **Secondary Accent** | `#60A5FA` | `■` `#60A5FA` | Soft Light Blue. Secondary highlights, code token emphasis, subheadings, and subtle pill badges. |
| **Primary Text** | `#F8FAFC` | `■` `#F8FAFC` | Slate White. Headlines, primary body copy, titles, and high-priority information. |
| **Muted Text** | `#94A3B8` | `■` `#94A3B8` | Cool Gray. Secondary captions, slide numbers, metadata, timestamps, and subtle notes. |
| **Border** | `#263241` | `■` `#263241` | Hairline borders, dividers, card boundaries, screenshot frame outlines. |

---

## 2. Usage Rules

### Canvas & Backgrounds
- Always use **`#0B0F14`** as the base canvas for Instagram carousels, feed posts, story frames, and reel covers.
- Never use pure pitch black (`#000000`) or light backgrounds as the main canvas.

### Surfaces & Cards
- When grouping content (e.g., code snippets, architecture highlights, callout notes), use **`#151B23`** with a 1px border of **`#263241`**.
- Keep surface elevation flat or subtly outlined. Avoid heavy drop shadows or colored ambient glows.

### Accents & Emphasis
- **Primary Accent (`#3B82F6`)**: Use sparingly for punchy focal points—such as a single keyword in a title, an active step indicator, or a pill tag (e.g., `[LARAVEL + INERTIA]`).
- **Secondary Accent (`#60A5FA`)**: Use for secondary technical keywords, diff highlights, or subheaders.
- Never flood the canvas with accent colors. Maximum 5–10% of total surface area should carry accent color.

### Borders & Dividers
- All container boundaries, card borders, and screenshot frames must use **`#263241`** with a stroke width of `1px` (or `1.5px` on high-DPI canvases).
- Avoid dashed borders, neon outlines, or multi-color gradients.
