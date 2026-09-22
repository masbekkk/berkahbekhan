---
name: berkahbekhan-brand
description: The single source of truth for the visual and communication identity of berkahbekhan.inc. Enforces typography hierarchy, real screenshot primacy, flexible canvas treatments, restrained design tokens, and developer aesthetics.
when_to_use: Use whenever designing, styling, or reviewing visual content for @berkahbekhan.inc. Defines color tokens, typography scales, layout geometry, screenshot framing, and anti-AI-slop rules.
allowed-tools: Read, Grep, Glob
version: 2.0.0
priority: CRITICAL
---

# BerkahBekhan Brand Identity Skill

> **Core Philosophy**: **THE WORK IS THE DESIGN.**  
> The Instagram identity of **@berkahbekhan.inc** is a developer's visual archive of real software that has actually been built. Every post communicates: *"This developer actually builds software,"* never *"This account generates AI portfolio graphics."*

Use this skill whenever designing, styling, formatting, or evaluating content for **berkahbekhan.inc**.

---

## 1. Core Visual Hierarchy (Priority Order)

Every design decision must strictly respect this 9-level priority ranking:

1. **Real project screenshots** (Uncompromised, sharp captures of actual interfaces)
2. **Real product UI** (Genuine forms, tables, workflows, components)
3. **Strong typography** (Clear, assertive type hierarchy; high legibility on mobile)
4. **Clear hierarchy** (Immediate scannability; headline → subhead → visual → metadata)
5. **Editorial composition** (Thoughtful layout, balanced asymmetry, magazine-grade structure)
6. **Whitespace** (Generous breathing room; no cramped cards)
7. **Consistent branding** (Understated watermark, consistent fonts, disciplined margins)
8. **Supporting metadata** (Stack labels, file paths, dates, counters)
9. **Decoration** (Minimal or absent. If an element does not improve communication, **remove it**)

---

## 2. Screenshot & Asset Primacy: "The Work Is the Hero"

We enforce an absolute preference for authentic software artifacts:

- **PREFER**: Real unadorned screenshot **OVER** fake laptop + screenshot
- **PREFER**: Real unadorned screenshot **OVER** browser mockup + screenshot
- **PREFER**: Real product UI **OVER** AI-generated visual representations

### What to Avoid:
- ❌ Laptop mockups and phone bezels
- ❌ Isometric or 3D perspective mockups
- ❌ Heavy fake browser chrome or simulated OS window headers with colored dots
- ❌ Floating screenshot cards wrapped inside nested dark containers
- ❌ Fake product 3D renders or conceptual wireframes

> **Rule of Thumb**: Let the screenshot sit cleanly on the canvas with a crisp `1px` border or flat edge. Only use device framing when a mobile flow strictly requires displaying native viewport boundaries.

---

## 3. Brand System & Palette Flexibility

The BerkahBekhan brand provides **systemic consistency**, while the individual project provides **product personality**.

### What the Brand Provides (Consistent Across All Posts):
- **Typography**: Inter / Geist Sans for editorial copy, JetBrains Mono / Geist Mono for technical metadata.
- **Spacing**: Disciplined 8px rhythm (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `80px`).
- **Margins**: Consistent `80px` outer canvas margins for feed posts (`1080 × 1350`).
- **Labeling & Structure**: Restrained mono eyebrows, precise headers, quiet footer handles.
- **Visual Rhythm**: Intentional pacing between image-dominant and typography-dominant posts.

### What the Project Provides (Flexible Per Post):
- **Actual UI & Screens**: Real screenshots retain their original colors, theme, and styling.
- **Product Personality**: Project-specific accent colors and interface aesthetics.
- **Authentic Details**: Exact frameworks, packages, database schemas, and workflows.

### Background & Dark Mode Rules:
- **Dark mode is NOT mandatory**.
- Canvas backgrounds may be:
  - Deep obsidian dark (`#0B0F14` or `#0F172A`)
  - Clean editorial light (`#F8FAFC` or `#F1F5F9`)
  - Warm/cool neutral (`#18181B` or `#1E293B`)
  - Project-derived background tones sampled subtly from the software interface
- Never force every screenshot into an elevated dark card container.

---

## 4. Design System Tokens

### A. Core Tokens

| Token | Dark Canvas | Light Canvas | Role |
| :--- | :--- | :--- | :--- |
| **Canvas** | `#0B0F14` | `#F8FAFC` | Primary post background. |
| **Surface** | `#151B23` | `#FFFFFF` | Code snippet panels, callouts (when strictly needed). |
| **Primary Text** | `#F8FAFC` | `#0F172A` | Main headlines, primary messaging. |
| **Muted Text** | `#94A3B8` | `#64748B` | Stack tags, labels, captions, metadata. |
| **Border** | `#263241` | `#E2E8F0` | Hairline boundaries, screenshot edge (1px solid). |
| **Brand Accent** | `#3B82F6` | `#2563EB` | Subtle tag accents, active focal highlights. |

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

---

## 6. Prohibited AI-Slop Checklist

Eliminate all generic social media gimmicks:

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
- [`brand/visual-rules.md`](file:///d:/Repos/berkahbekhan/brand/visual-rules.md) — Spacing rhythm, safe zones, composition families
- [`brand/content-rules.md`](file:///d:/Repos/berkahbekhan/brand/content-rules.md) — Anti-AI-slop manifesto and veracity rules
