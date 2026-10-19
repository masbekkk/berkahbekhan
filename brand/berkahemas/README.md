# BerkahEmas — Software Toko Emas

Brand kit v1.0.0 · prepared 19 October 2026 · producer: BerkahBekhan.

The product is ready-to-use software for Indonesian gold stores. The main action is **Minta Demo BerkahEmas**.
Use the geometric B monogram and small gold-bar cue with Manrope. Display the exact product spelling **BerkahEmas**.
The standard full lockup includes **Software Toko Emas**. Icon-only versions are for compact navigation and favicons.

## Files and use

- `horizontal-*` and `stacked-*`: color, monochrome, and reversed SVG/transparent PNG lockups.
- `icon-*`: compact B mark in the same variants. Use reversed artwork on emerald or ink backgrounds.
- `favicon.svg`, `favicon.png`, `apple-touch-icon.png`: application and browser icons.
- `social-preview.svg` / `.png`: master social card. Website `public/og-image.png` is 1200×630.
- `tokens.json`: versioned names, colors, and font specification.
- `preview.html`: local brand board; `brand-board.png` is its review export.
- Manrope font files and CSS are included; text-bearing SVG masters embed the font.

| Role | Value |
|---|---|
| Emerald / primary | #075E46 |
| Hover / deep emerald | #064B39 |
| Gold decoration | #C6A15B |
| Dark gold text | #876515 |
| Ivory canvas | #F8F6EF |
| White card | #FFFFFF |
| Ink | #182923 |
| Supporting text | #526259 |
| Borders | #DFE5DD |

Keep operational screens light. White on emerald is 7.78:1; ink on ivory 14.07:1;
supporting text on ivory 5.98:1; dark gold on ivory 4.98:1. Decorative gold is not body text on ivory.
Do not use white text on gold. Keep semantic warning/error/info colors separate from the brand palette.
Leave clear space of at least the gold bar’s height around the logo. Use the icon when the descriptor cannot remain at least 12 CSS pixels.

## Regeneration

From the video workspace, run `node tools/brand/export-brand.mjs` then `node tools/brand/render-assets.mjs`.
The renderer uses the ERP’s installed Playwright and Chrome and downloads Manrope from Google Fonts.
It embeds the fonts and copies versioned assets to both app public directories. App builds are independent of this workspace.
After changing any SVG master, regenerate PNG exports and recopy the kit before rebuilding.

## Positioning and evidence

Lead with inventory, POS, buyback and reports. Use real app captures with fictional demo data.
Do not use customer counts, testimonials, ratings, ISO/bank-grade claims, synchronization-time guarantees or revenue promises without evidence.
Existing website domains, WhatsApp destinations, and email/social contacts remain in use during this release.
Do not describe those technical identifiers as a new BerkahEmas domain.

Finished videos, recording-tool extensions, domain migration, deployment, and publishing are outside this delivery.
