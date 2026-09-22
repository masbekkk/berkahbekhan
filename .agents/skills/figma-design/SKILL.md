---
name: figma-design
description: Visual design and Figma workspace engineering for @berkahbekhan.inc using the BerkahBekhan Design System, Auto Layout, components, tokens, and figwright MCP.
when_to_use: Use when designing Instagram assets in Figma, creating or modifying Figma frames, applying design system tokens, inspecting Figma files, or orchestrating Figma MCP tools.
allowed-tools: Read, Grep, Glob, call_mcp_tool
version: 1.0.0
priority: HIGH
---

# Figma Design Workspace Skill

> **Core Mandate**: Figma is the actual production design workspace for **@berkahbekhan.inc**.  
> This skill answers the technical design question: **"How should it be visually designed in Figma?"**  
> It implements the visual decisions made by `instagram-art-direction` using strict Figma best practices, Auto Layout, reusable design tokens, semantic components, and non-destructive editable layers.

---

## 1. Architectural Separation

To keep workflows clean and focused:
- **`instagram-art-direction`** decides: *What should I post?* (content angle, message, composition family, feed rhythm).
- **`figma-design`** decides: *How should it be constructed in Figma?* (frame geometry, typography hierarchy, Auto Layout constraints, layer structure, token bindings).

Never make Figma responsible for deciding content strategy.

---

## 2. Figma MCP Integration (`figwright`)

When the `figwright` MCP server is active in the environment, use MCP tools to inspect, construct, and manipulate frames programmatically:

- **Inspection & Analysis**: `call_mcp_tool` with `ServerName: "figwright"`:
  - `get_document`, `get_node`, `get_styles`, `get_variable_defs`, `get_local_components`
- **Frame & Layout Creation**:
  - `create_frame`: Build top-level post frames with exact dimensions.
  - `set_auto_layout`: Apply vertical/horizontal layouts, item spacing, and padding.
  - `resize_nodes`: Adjust widths, heights, or responsive constraint fills.
- **Typography & Styling**:
  - `create_text`, `set_text_properties`: Set font family, size, line-height, letter spacing.
  - `set_fills`, `set_strokes`, `set_corner_radius`: Apply design system color fills and subtle hairline borders.
- **Component & Instance Management**:
  - `create_component`, `create_instance`, `swap_component`: Instantiate and manage design system components.
  - `import_image`: Place authentic product screenshots directly into designated screenshot frames.

---

## 3. BerkahBekhan Design System in Figma

Organize the Figma design system into four clean tiers:

```
BERKAHBEKHAN DESIGN SYSTEM
├── 01 — FOUNDATIONS
│   ├── Typography Styles (Sans & Mono)
│   ├── Color Variables (Canvas, Surfaces, Accents, Text, Borders)
│   ├── Spacing Scale (8px rhythm)
│   └── Layout Grids & Safe Margins
│
├── 02 — COMPONENTS
│   ├── Project Label (Mono eyebrow)
│   ├── Project Title (Display headline)
│   ├── Description (Clean editorial body)
│   ├── Tech Metadata (Mono stack badges / text lines)
│   ├── Screenshot Frame (Hairline orthographic container)
│   ├── Caption / Subtitle
│   ├── Brand Mark (@berkahbekhan.inc)
│   └── Call to Action / Source Link (Optional)
│
├── 03 — COMPOSITION FAMILIES
│   ├── Template / Project Hero
│   ├── Template / Feature Spotlight
│   ├── Template / Product Screenshot
│   ├── Template / Technical Breakdown
│   ├── Template / Development Insight
│   ├── Template / Project Detail
│   └── Template / Proof / Achievement
│
└── 04 — FEED PLANNING
    └── Canvas / 3x3 Feed Staging Grid
```

> **Avoid Over-Componentization**: Keep components pragmatic and lightweight. Do not create complex nested variant matrices for elements that can be styled cleanly with Auto Layout.

---

## 4. Canvas Formats & Dimensional Standards

| Asset Format | Figma Dimensions | Aspect Ratio | Safe Zones & Padding |
|---|---|---|---|
| **Feed Post** | `1080 × 1350 px` | 4:5 | `80px` outer padding on all sides. Core content inside `920 × 1190 px`. |
| **Square Post** | `1080 × 1080 px` | 1:1 | `80px` outer padding. |
| **Story** | `1080 × 1920 px` | 9:16 | `250px` top safe margin, `350px` bottom safe margin, `80px` side padding. |
| **Reel Cover** | `1080 × 1920 px` | 9:16 | Center `1080 × 1080 px` square contains all primary text & hero visual for grid crop; `1080 × 1350 px` feed crop safe. |

---

## 5. Construction Rules for Figma Files

### A. Non-Destructive, Editable Layers (Never Flatten)
- **Zero Flattened Exports**: Never merge typography, borders, and screenshots into a single rasterized image inside Figma.
- **Screenshots as Separate Image Layers**: Product screenshots must sit in their own distinct image container with `FIT` or `FILL` scaling. This preserves sharpness and allows updating screenshots without rebuilding frames.

### B. Auto Layout Everywhere
- Every top-level frame must use Auto Layout (`layoutMode: "VERTICAL"`, `itemSpacing: 32` or `48`, `padding: 80`).
- Use responsive sizing properties: Set content children to `FILL_CONTAINER` horizontally and `HUG_CONTENTS` vertically.
- Never use absolute positioning unless anchoring a subtle brand mark or floating badge.

### C. Semantic Layer Naming
Every node must carry a clear, recognizable name:
- ✅ `Post / 01 - Project Hero`
- ✅ `Container / Screenshot Frame`
- ✅ `Text / Main Headline`
- ✅ `Meta / Tech Stack`
- ✅ `Footer / Brand Handle`
- ❌ `Frame 32`, `Rectangle 104`, `Group 12`, `Text 5`

---

## 6. Anti-AI-Slop Visual Controls in Figma

When styling layers, enforce these strict boundaries:

1. **Backgrounds**: Do not force dark `#0B0F14` everywhere. Use light (`#F8FAFC`), clean neutral (`#0F172A`, `#18181B`), or project-derived background colors when appropriate for the product screenshot.
2. **Cards & Containers**: Avoid nesting cards inside cards. If a screenshot sits directly on the canvas with a clean 1px hairline border, do not wrap it in another dark container card.
3. **Corner Radius**: Restrained. `0px` (editorial sharp), `8px` (small badges/code blocks), `16px` (screenshot containers). Never use bloated `32px`+ bubble corners.
4. **Drop Shadows**: Strictly subtle (`rgba(0, 0, 0, 0.25) 0px 4px 16px`) or completely flat. Never use blurred neon colored glows or fuzzy 50px drop shadows.
5. **Gradients**: Prohibited unless representing real product UI assets. Canvas and surfaces use solid, confident colors.

---

## 7. Feed Staging & 3×3 Grid Frame

When staging upcoming posts, arrange them in Figma on a dedicated **`Feed / 3x3 Staging`** board:
- Top-level board: `3320 × 4130 px`
- Contains 9 feed post frames (`1080 × 1350 px`) arranged in a 3-column by 3-row grid with `40px` gutter gaps.
- Allows immediate visual inspection of rhythm, color alternating, typography weight balance, and screenshot dominance across the entire profile grid.

