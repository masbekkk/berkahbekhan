# Brand Colors — berkahbekhan.inc

> **Reference Anchor**: Analyzed and traced from **Apple Developer Academy @ UC** ([@ucs_appledeveloperacademy](https://www.instagram.com/ucs_appledeveloperacademy/) / [appledeveloperacademy.ciputra.ac.id](https://appledeveloperacademy.ciputra.ac.id/)).  
> **Aesthetic Identity**: Apple Human Interface Guidelines (HIG) minimalism meets Universitas Ciputra's developer culture — high-contrast stark neutrals, pure studio whites, deep space darks, and restrained precision accents.

---

## 1. Core Color Philosophy

The color system for **@berkahbekhan.inc** balances disciplined brand consistency with individual project personality:

1. **The Work Is the Hero**: Real project screenshots retain their authentic interface colors, themes, and styling. The brand does not recolor or tint software UI.
2. **Apple-Grade Restraint**: The brand framing relies on pure Apple neutrals (`#FFFFFF`, `#F5F5F7`, `#1D1D1F`, `#000000`). Accents never exceed 5% of the slide area.
3. **No Monotone Mandate**: Dark mode is not compulsory. We alternate between Apple Studio Light, Space Black, and project-derived surfaces to establish feed rhythm.

---

## 2. Flexible Canvas Foundations

Select the canvas surface that best frames and contrasts the real software interface:

| Canvas Style | Hex Code | Visual Character | Best Used For |
| :--- | :--- | :--- | :--- |
| **Apple Studio White** | `#FFFFFF` | Pure, razor-sharp white canvas. | Clean SaaS dashboards, web portals, student survey modules. |
| **Apple Off-White Canvas** | `#F5F5F7` | Signature Apple light gray; soft, editorial, low eye strain. | Magazine-grade editorial crops, multi-screen workflows, documentation. |
| **Space Black (Pro Dark)** | `#000000` | Pure OLED black with maximum contrast. | High-impact hero launches, mobile app showcases, production milestones. |
| **Studio Dark (Space Gray)**| `#161617` or `#1D1D1F` | Deep titanium slate; technical and modern. | Terminal output, code architecture breakdowns, database schemas. |
| **Project-Derived Tint** | *Sampled from UI* | Ultra-subtle ambient tint sampled from application UI. | Deep contextual cohesion with specific project aesthetics. |

---

## 3. Design System Tokens

### A. Light Canvas System (Apple Studio Minimalist)
Directly mirroring Apple's editorial light mode aesthetics:

| Token Name | Hex Code | Role & Usage |
| :--- | :--- | :--- |
| **Canvas** | `#FFFFFF` / `#F5F5F7` | Primary background canvas. |
| **Surface** | `#FFFFFF` | Code snippet panels, elevated inspection cards. |
| **Primary Text** | `#1D1D1F` | Apple Dark Slate. High-contrast display headlines and primary narrative. |
| **Secondary Text**| `#6E6E73` | Apple System Gray. Balanced subheadings and section descriptions. |
| **Muted Text** | `#86868B` | Apple System Gray 2. Eyebrow tags, timestamps, mono metadata, footer handles. |
| **Hairline Border**| `#E5E5EA` / `#D2D2D7`| Crisp 1px solid container and screenshot boundaries. |
| **Primary Accent** | `#FC8117` | **Academy Tangerine**. The signature UC Apple Academy warm accent for focus tags. |
| **System Accent** | `#0071E3` | **Apple Developer Blue**. Interactive links, primary stack badges, active markers. |

### B. Dark Canvas System (Apple Pro / Space Black)
Directly mirroring Apple's Developer / Pro dark presentation:

| Token Name | Hex Code | Role & Usage |
| :--- | :--- | :--- |
| **Canvas** | `#000000` / `#161617` | Pure space black / deep titanium background. |
| **Surface** | `#1C1C1E` / `#2C2C2E` | Apple System Secondary Dark. Code blocks, terminal panels, callout boxes. |
| **Primary Text** | `#F5F5F7` | Apple Off-White. High-legibility headlines and primary messaging. |
| **Secondary Text**| `#A1A1A6` | Apple System Gray Light. Subtitles and explanatory copy. |
| **Muted Text** | `#86868B` | System Gray Neutral. Mono metadata, stack labels, footer handles. |
| **Hairline Border**| `#2C2C2E` / `#38383A`| Subtle 1px solid screenshot edge and divider line. |
| **Primary Accent** | `#FF9500` / `#FC8117`| **Academy Sunset Orange**. High-visibility tag highlight on dark backgrounds. |
| **System Accent** | `#0A84FF` / `#0071E3`| **Apple System Blue (Dark)**. Code syntax highlights, key tech tags. |

---

## 4. The Functional Accent Spectrum

Accents are drawn directly from the Apple Developer and Universitas Ciputra institutional color wheel:

| Accent Token | Hex Code | Origin & Meaning | Application |
| :--- | :--- | :--- | :--- |
| **Academy Tangerine** | `#FC8117` | UC Apple Academy signature brand color. | Primary focal badges, eyebrow tags, key takeaways. |
| **Apple Developer Blue**| `#0071E3` | Iconic Apple system tint & Developer Portal blue. | Tech stack labels, framework versions, hyperlinks. |
| **Swift Flame** | `#F05138` | Official Swift programming language orange-red. | Compiler notes, architecture trade-offs, code diffs. |
| **System Mint / Green** | `#34C759` / `#30D158` | Apple HIG positive / success state. | Shipped status, production verification, test coverage. |
| **System Purple** | `#AF52DE` / `#5856D6` | Apple HIG design & creative exploration. | Engineering heuristics, UX decisions, challenge learning. |

---

## 5. Usage & Anti-AI-Slop Rules

1. **5% Accent Cap**: Accent colors must never cover more than 5% of the slide area. They are precision instruments (tags, monospaced metadata, active counters), never decorative canvas washes.
2. **Zero Neon Halos**: Strictly eliminate all multi-color gradient meshes, purple/cyan AI glow spots, and translucent glassmorphism borders.
3. **No Double-Boxing**: Never place a dark screenshot container inside another dark card container. Screenshots sit cleanly on the canvas with a `1px` hairline boundary (`#E5E5EA` on light, `#2C2C2E` on dark).
4. **Natural UI Primacy**: If a client application has green, gold, or navy styling (e.g. Madrasah emerald), keep that UI unaltered. The Apple-inspired neutral frame provides dignified elevation without aesthetic competition.
