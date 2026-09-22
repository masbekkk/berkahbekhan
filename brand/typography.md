# Brand Typography — berkahbekhan.inc

Typography at **@berkahbekhan.inc** balances editorial authority with a clean, understated developer aesthetic. It prioritizes legibility at mobile scale on Instagram, geometric precision, and clear technical hierarchy.

---

## 1. Type Families

| Role | Primary Typefaces | Fallback Stack | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Sans** | **Inter** or **Geist Sans** | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` | Display headlines, slide titles, body narrative, subheadings |
| **Technical Mono** | **JetBrains Mono** or **Geist Mono** | `ui-monospace, "Fira Code", Menlo, Monaco, Consolas, monospace` | Category eyebrows, tech stack tags, code snippets, file paths, metadata |

---

## 2. Typographic Scale (Feed & Carousel: 1080 × 1350 px)

| Level | Font Family | Size | Weight | Line Height | Tracking | Role |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Eyebrow Tag** | Mono | `24px - 28px` | Medium (500) | `1.2` | `+0.05em` | Category badge (uppercase) |
| **Display Title** | Sans | `64px - 80px` | Bold (700) / SemiBold (600) | `1.15` | `-0.02em` | Primary post headline / dominant message |
| **Content Subtitle**| Sans | `32px - 40px` | SemiBold (600) | `1.25` | `-0.01em` | Feature context / workflow summary |
| **Section Header** | Sans | `28px - 32px` | Medium (500) | `1.3` | `0` | Subsection callout |
| **Body Copy** | Sans | `24px - 28px` | Regular (400) | `1.45` | `0` | Editorial narrative (35–55 chars/line) |
| **Code Block** | Mono | `22px - 26px` | Regular (400) | `1.5` | `0` | Syntax snippets & terminal logs |
| **Metadata / Footer**| Mono | `20px - 24px` | Medium (500) | `1.2` | `+0.02em` | Handle `@berkahbekhan.inc` & timestamps |

---

## 3. Typographic Scale (Stories & Reel Covers: 1080 × 1920 px)

- **Reel Title (Central Safe Zone)**: `72px - 84px`, SemiBold / Bold, tight line-height (`1.15`).
- **Story Headline**: `56px - 68px`, Bold.
- **Story Body / Caption**: `28px - 32px`, Regular, line-height (`1.4`).
- **Safe Zone Rule**: For 1080 × 1920 (Reels & Stories), keep all critical titles, text, and captions within the vertical bounds of `250px` from top and `350px` from bottom to prevent clipping by Instagram UI overlays.

---

## 4. Typographic Editorial Rules

1. **Monospace for Technical Truth**: Always format file names (e.g., `app/Models/User.php`), terminal commands (e.g., `php artisan migrate`), tech stacks, and slide indexes in the monospace font.
2. **Scannable Line Length**: Keep body text lines between 35 and 55 characters. Never stretch text across full canvas margins.
3. **No Decorative Fonts**: Never use script, handwriting, comic, or novelty fonts.
4. **No All-Caps Paragraphs**: Reserve uppercase strictly for short category pills/eyebrows (e.g., `PROJECT HERO`) or short file extensions.
5. **High-Contrast Readability**: Ensure all text tokens maintain minimum 4.5:1 contrast ratio against the chosen canvas background.
