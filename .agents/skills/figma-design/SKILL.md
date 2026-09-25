---
name: figma-design
description: Visual design and Figma workspace engineering for @berkahbekhan.inc using the BerkahBekhan Design System, Auto Layout, components, tokens, and figwright MCP.
when_to_use: Use when designing Instagram assets in Figma, creating or modifying Figma frames, applying design system tokens, inspecting Figma files, or orchestrating Figma MCP tools.
allowed-tools: Read, Grep, Glob, call_mcp_tool
version: 2.0.0
priority: HIGH
---

# Figma Design Workspace Skill

> **Core Mandate**: Figma is the actual production design workspace for **@berkahbekhan.inc**.  
> This skill answers the technical design question: **"How should it be visually designed in Figma?"**  
> It implements the visual decisions made by `instagram-art-direction` using strict Figma best practices, Auto Layout, reusable design tokens, semantic components, and non-destructive editable layers.

---

## 1. Architectural Separation

To keep workflows clean and focused:
- **`instagram-art-direction`** decides: *What should I post?* (content angle, message, composition family, carousel sequence, feed rhythm).
- **`figma-design`** decides: *How should it be constructed in Figma?* (frame geometry, image proportionality, typography hierarchy, Auto Layout constraints, layer structure, token bindings).

Never make Figma responsible for deciding content strategy.

---

## 2. Absolute Rule: Proportional Image Geometry in Figma

> 🔴 **MANDATORY**: **NEVER DISTORT A PROJECT SCREENSHOT.**  
> Every screenshot imported or placed in Figma MUST preserve its original, true aspect ratio.
> 
> **SCREENSHOT READABILITY > NUMBER OF SCREENSHOTS**

### A. Proportional Geometry Calculation
When calling `import_image` or calculating container bounds:
```python
# Compute proportional height from natural aspect ratio
aspect_ratio = original_width / original_height
target_width = 920  # Content width within 80px safe margins (1080 - 160)
target_height = round(target_width / aspect_ratio)

# If target_height exceeds available vertical space (e.g. > 650px),
# scale down proportionally or use intentional cropping:
if target_height > max_available_height:
    target_height = max_available_height
    target_width = round(target_height * aspect_ratio)
```

- **NEVER** set arbitrary width and height that alter the native aspect ratio.
- **NEVER** stretch an image horizontally or vertically to "fit" an arbitrary card.
- **NEVER** squeeze dashboard tables, distort icons, or compress charts.

### B. Image Fitting Modes in Figma
- **`CONTAIN` (`scaleMode: "FIT"`)**: Use when the complete screenshot, navigation, and surrounding context must remain fully visible.
- **`COVER + CROP` (`scaleMode: "FILL"`)**: Use when the screenshot fills a designated visual container. Ensure the container has `clipsContent: true` and the crop preserves high-signal UI while trimming only non-essential peripheral margins.
- **`DETAIL CROP` (Masking / Frame Clipping)**: Create a parent frame with `clipsContent: true`, place the screenshot proportionally inside, and position it to highlight a specific component, modal, or form control.
- **NEVER `STRETCH TO FIT`**: If the screenshot ratio does not match the target container, **change the container layout**, do not deform the screenshot.

---

## 3. Figma MCP Integration (`figwright`)

When the `figwright` MCP server is active in the environment, use MCP tools to inspect, construct, and manipulate frames programmatically:

- **Inspection & Analysis**: `call_mcp_tool` with `ServerName: "figwright"`:
  - `get_document`, `get_node`, `get_styles`, `get_variable_defs`, `get_local_components`
- **Frame & Layout Creation**:
  - `create_frame`: Build top-level post frames with exact dimensions (`1080 × 1350 px`).
  - `set_auto_layout`: Apply vertical/horizontal layouts, item spacing (`24px` / `32px`), and padding (`80px`).
  - `resize_nodes`: Adjust widths and heights while strictly preserving image aspect ratios.
- **Typography & Styling**:
  - `create_text`, `set_text_properties`: Set font family (Inter / JetBrains Mono), size, line-height, letter spacing.
  - `set_fills`, `set_strokes`, `set_corner_radius`: Apply design system color fills and subtle hairline borders (`#2C2C2E` / `#E5E5EA`, `1px solid`).
- **Component & Instance Management**:
  - `create_component`, `create_instance`, `swap_component`: Instantiate and manage design system components.
  - `import_image`: Place authentic product screenshots directly with proportional dimensions.

---

## 4. Canvas Formats, Safe Margin System & Carousel Structure

### Canvas Standards:
| Asset Format | Figma Dimensions | Aspect Ratio | Safe Zones & Margin System |
|---|---|---|---|
| **Feed / Carousel** | `1080 × 1350 px` | 4:5 | **`80px` outer padding** on all sides. Core content inside `920 × 1190 px`. |
| **Square Post** | `1080 × 1080 px` | 1:1 | **`80px` outer padding**. Core content inside `920 × 920 px`. |
| **Story** | `1080 × 1920 px` | 9:16 | `250px` top safe margin, `350px` bottom safe margin, `80px` side padding. |
| **Reel Cover** | `1080 × 1920 px` | 9:16 | Center `1080 × 1080 px` square contains all primary text & hero visual for grid crop; `1080 × 1350 px` feed crop safe. |

> **Carousel Consistency**: All slides in a carousel sequence **MUST use the exact same dimensions** (`1080 × 1350 px`) and maintain consistent `80px` outer margins.

### Carousel Frame Structure:
Organize carousel nodes in Figma under a unified naming convention:
```
CAROUSEL — [PROJECT NAME]
├── 00 — Carousel Overview (3×3 or linear staging board of all slides)
├── 01 — Cover / Project Hook
├── 02 — Product Overview / Flagship UI
├── 03 — Feature Spotlight
├── 04 — Workflow Walkthrough
├── 05 — Product Detail / Scoring Tiers
├── 06 — Technical Implementation
├── 07 — System Area / Permissions
├── 08 — Development Insight
└── 09 — Closing / Archive Proof
```

---

## 5. Construction Rules for Figma Files

### A. Non-Destructive, Editable Layers (Never Flatten)
- **Zero Flattened Exports**: Never merge typography, borders, and screenshots into a single rasterized image inside Figma.
- **Screenshots as Separate Image Layers**: Product screenshots must sit in their own distinct image container with proportional scaling. This preserves sharpness and allows updating screenshots without rebuilding frames.

### B. Auto Layout Everywhere
- Every top-level frame must use Auto Layout (`layoutMode: "VERTICAL"`, `itemSpacing: 32` or `24`, `padding: 80`).
- Content children should set horizontal sizing to `FILL_CONTAINER` and vertical sizing to `HUG_CONTENTS`.
- Never use absolute positioning unless anchoring an understated brand mark or small status tag.

### C. Direct Editorial Image Placement (Anti-Card Rule)
- Screenshots sit directly on the canvas with a clean `1px solid` hairline border (`#2C2C2E` on dark canvas, `#E5E5EA` on light canvas) and restrained corner radius (`12px` or `16px`).
- Do NOT wrap screenshots in unnecessary dark container cards or glassmorphism panels.

### D. Multi-Screenshot Layout Implementation
When a slide requires multiple screenshots:
- **Hero + Secondary**: Dominant primary image (`width: 920px`, `height: proportional`) + supporting detail image (`width: 500px - 600px`).
- **Vertical Sequence**: Two stacked images with equal or proportional widths and calibrated heights separated by `16px` - `24px` gutter.
- **Context + Detail**: Macro view with a callout border connecting to an enlarged micro crop.
- **Avoid Equal-Sized Desktop Columns**: Never split two full desktop UIs into equal `445px` columns if table rows, buttons, or labels become illegible.
- **The Split Rule**: If multiple screenshots cannot remain clearly readable within the content bounds, **create another slide**.

### E. Semantic Layer Naming
Every node must carry a clear, recognizable name:
- ✅ `Post / 01 - Project Hero`
- ✅ `Container / Screenshot Frame`
- ✅ `Image / Landing Page Hero`
- ✅ `Text / Main Headline`
- ✅ `Meta / Tech Stack`
- ✅ `Footer / Brand Handle`
- ❌ `Frame 32`, `Rectangle 104`, `Group 12`, `Text 5`

---

## 6. Anti-AI-Slop Visual Controls in Figma

When styling layers, enforce these strict boundaries:

1. **Backgrounds**: Use clean solid canvases: Space Black (`#000000`), Studio Dark (`#161617`), Apple Off-White (`#F5F5F7`), or Studio White (`#FFFFFF`). Never use random neon gradients or AI gradient blobs.
2. **Cards & Containers**: Avoid nesting cards inside cards. Use a container only when isolating a code block.
3. **Corner Radius**: Restrained. `0px` (editorial sharp), `8px` (small badges/code blocks), `12px - 16px` (screenshot containers). Never use bloated `32px`+ bubble corners.
4. **Drop Shadows**: Strictly subtle (`rgba(0, 0, 0, 0.25) 0px 4px 16px`) or completely flat. Never use blurred neon colored glows or fuzzy 50px drop shadows.
5. **Gradients**: Prohibited unless representing real product UI assets. Canvas and surfaces use solid, confident colors.

---

## 7. Feed Staging & Carousel Overview Board

When staging a carousel or feed, build **`00 — Carousel Overview`**:
- Top-level board: `3400 × 4350 px` (for 3×3 grid) or continuous horizontal banner.
- Contains all slides arranged with `40px` gutter gaps.
- Enables instant visual verification of:
  - Sequence story arc
  - Screenshot legibility
  - Dark/light alternating cadence
  - Typographic hierarchy consistency

---

## 8. Figma Design Review Checkpoints

Before exporting or finalizing any Figma post:
- [ ] **Proportion Check**: Is every screenshot strictly proportional with zero stretching or squeezing?
- [ ] **Readability Check**: Are UI labels, charts, and buttons clearly readable at mobile preview?
- [ ] **Multi-Image Check**: Does every secondary image serve a purpose? Would splitting across slides create a clearer design?
- [ ] **Margin Check**: Are all elements respecting the `80px` safe margin boundaries?
- [ ] **Anti-Slop Check**: Are device mockups, fake browser chrome, glassmorphism, and neon halos completely absent?


