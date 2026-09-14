# Brand Typography — berkahbekhan.inc

Typography at **berkahbekhan.inc** balances editorial authority with a clean developer aesthetic. It prioritizes legibility at mobile scale on Instagram, geometric precision, and clear technical hierarchy.

---

## 1. Type Families

| Role | Font Family | Fallback Stack | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Sans** | **Inter** or **Geist Sans** | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` | Headlines, slide titles, body copy, captions, CTAs |
| **Technical Mono** | **JetBrains Mono** or **Geist Mono** | `ui-monospace, "Fira Code", Menlo, Monaco, Consolas, monospace` | Eyebrow badges, code snippets, file paths, metrics, slide numbering, tech stack tags |

---

## 2. Typographic Hierarchy (Feed & Carousel: 1080 × 1350)

| Level | Typeface | Size | Weight | Line Height | Color Token | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Category / Eyebrow** | Mono | `24px - 28px` | Medium (500) | `1.2` | `#60A5FA` | `+0.05em` (uppercase) |
| **Main Slide Title** | Sans | `64px - 76px` | Bold / SemiBold (700/600) | `1.15` | `#F8FAFC` | `-0.02em` |
| **Content Subtitle** | Sans | `36px - 44px` | SemiBold (600) | `1.25` | `#F8FAFC` | `-0.01em` |
| **Section Header** | Sans | `30px - 34px` | Medium (500) | `1.3` | `#60A5FA` | `0` |
| **Body Copy** | Sans | `26px - 30px` | Regular (400) | `1.45` | `#94A3B8` (or `#F8FAFC` for key points) | `0` |
| **Code Snippet** | Mono | `22px - 26px` | Regular (400) | `1.5` | `#F8FAFC` | `0` |
| **Metadata / Footer** | Mono | `20px - 24px` | Medium (500) | `1.2` | `#94A3B8` | `+0.02em` |

---

## 3. Typographic Hierarchy (Stories & Reel Covers: 1080 × 1920)

- **Reel Title (Central Safe Zone)**: `72px - 84px`, SemiBold / Bold, tight line-height (`1.15`).
- **Story Headline**: `56px - 68px`, Bold.
- **Story Body / Caption**: `28px - 32px`, Regular, line-height (`1.4`).
- **Safe Zone Rule**: For 1080 × 1920 (Reels & Stories), keep all critical titles, text, and captions within the vertical bounds of `250px` from top and `350px` from bottom to prevent clipping by Instagram UI overlays.

---

## 4. Typography Editorial Rules

1. **Monospace for Technical Truth**: Always format file names (e.g., `app/Models/User.php`), terminal commands (e.g., `php artisan migrate`), tech stacks, and slide indexes in the monospace font.
2. **Scannable Line Length**: Keep body text lines between 35 and 55 characters. Never stretch text across full canvas margins.
3. **No Decorative Fonts**: Never use script, handwriting, comic, or novelty fonts.
4. **No All-Caps Paragraphs**: Reserve uppercase strictly for short category pills/eyebrows (e.g., `ARCHITECTURE DEEP DIVE`) or short file extensions.
5. **High-Contrast Readability**: Never place `#94A3B8` text over busy background images or non-surface elements.
