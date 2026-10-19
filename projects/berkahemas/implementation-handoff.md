# BerkahEmas implementation handoff

Completed 19 October 2026. Product: **BerkahEmas — Software Toko Emas**. Producer: BerkahBekhan.

## Review the delivery

- [Brand board](../../brand/berkahemas/preview.html) and [PNG preview](../../brand/berkahemas/brand-board.png).
- [Brand kit and usage](../../brand/berkahemas/README.md): SVG/transparent PNG lockups, monochrome/reversed versions, icons, favicon set, embedded Manrope fonts and license, palette tokens and social card.
- [Website desktop](../../captures/berkahemas/verification/website-id-desktop.png), [mobile](../../captures/berkahemas/verification/website-mobile.png), and [ERP mobile navigation](../../captures/berkahemas/verification/navigation-mobile.png).
- [Vertical template](../../templates/video/berkahemas/frame.svg) and [PNG preview](../../templates/video/berkahemas/frame.png). It uses a focused capture from the real POS with fictional data.
- [POS storyboard](../../content/tiktok/berkahemas/pos-ke-nota/storyboard.md), [inventory storyboard](../../content/tiktok/berkahemas/cari-stok-emas/storyboard.md), and [buyback storyboard](../../content/tiktok/berkahemas/catat-buyback/storyboard.md).
- [Project truth](project-truth.json), [runtime results](../../captures/berkahemas/verification/runtime-report.json), [website results](../../captures/berkahemas/verification/website-report.json), and [screenshot manifest](../../captures/berkahemas/screenshot-manifest.json).

## Applications

The ERP now uses a shared brand component and constants for its product lockup, emerald/ivory theme, updated browser icons/titles, authentication layouts, navigation, loading and subscription presentation. Legacy maroon utilities map to emerald. Primary action buttons use emerald with white text. Charts use emerald and dark gold.

Merchant-provided company names, logos, invoice colors and headers remain authoritative. A real saved demo transaction was checked for its configured merchant name and custom invoice header. No existing store settings or historical records were migrated. The settings controller uses a generic Toko Emas name only when stored settings are absent.

The marketing site leads with BerkahEmas and a product-demo CTA, retains Indonesian/English navigation, and focuses on inventory, POS, buyback and reports. Academy/community promotions and unsupported social proof/security promises were removed from the active page. Client metadata and prerendering share the brand/schema module and bilingual content. Public LLM descriptions and social preview were updated.

Ten real ERP screens were captured at 1440×900 and saved as PNG/WebP: dashboard, inventory, POS, buyback, reports, gold prices, CRM, employees, settings and multi-branch. The active landing-page screenshots use these new captures; they preserve the original aspect ratio. All demo records were created in a separate SQLite database under `D:/Repos/.berkahemas-work/`.

## Verification

| Check | Result |
|---|---|
| ERP `npm run build` | Passed; existing large-chunk warnings remain |
| Website `npm run build`, including bilingual prerendering | Passed |
| Focused existing ERP tests | 37 passed, 257 assertions |
| PHP formatting for changed files | Passed |
| Bilingual metadata/schema regression check | Passed: `node scripts/brand-metadata.test.cjs` in astaenterprise |
| Project-truth schema | Valid against the existing project-truth schema |
| Final ERP TypeScript check | 647 diagnostics, identical to untouched HEAD with the same generated routes and dependencies; no added diagnostics |
| Inventory search/category/purity filtering | Verified in the isolated runtime |
| POS selection → saved transaction → merchant invoice | Verified in the isolated runtime |
| Buyback customer selection → item/weight/purity → saved history | Verified in the isolated runtime |
| Website ID/EN, language switching, metadata and demo links | Passed in Chrome; no page errors |
| Website at 390×844 | Menu passed; no horizontal overflow |
| ERP login and mobile drawer | Captured and visually reviewed |
| Subscription screen | Actual component visually reviewed with explicit fictional fixture props on a task-local preview route; expiry enforcement covered by existing tests |
| SVG masters and application copies | Valid XML; standalone images render |
| Brand text contrast | White/emerald 7.78:1; ink/ivory 14.07:1; muted/ivory 5.98:1; dark gold/ivory 4.98:1 |
| Git whitespace checks | Passed in both repositories |

The TypeScript baseline comparison used an untouched HEAD archive, the same installed node_modules, and the same generated Wayfinder output. Existing type errors were not expanded into this rebrand.

## Retained references and compatibility

Existing technical identifiers remain: `astaenterprise.id` and its app URLs, platform/tenant reserved subdomains, subscription API contracts, storage keys, database names, and repository directory names. Existing WhatsApp/email/Instagram destinations remain in use; inquiry text now names BerkahEmas.

The ERP's existing demo account identifiers/password defaults and unused mock exports were preserved. Earlier branding documents, unreferenced historical screenshots, unused legacy marketing page sources, and the unreferenced `logo-asta.png` remain historical material. They are not the active product identity. A global replacement would risk changing credentials, tenant routing, merchant data or real contact destinations.

No API/schema, pricing calculation or authentication contract changes were made. Dependency manifests and lockfile contents are unchanged.

## Runtime and release notes

The installed PHP is 8.5.10. Existing PHP extensions GD, sockets, ZIP and SQLite were enabled per process for local installation/testing; the global PHP configuration was not changed. The locked spreadsheet package declares a PHP version below 8.5, conflicting with the ERP's PHP 8.5 requirement. The existing locked packages were installed for these local checks with `--ignore-platform-req=php+`; this is a pre-existing compatibility caveat, not a dependency upgrade or proof that every spreadsheet path supports PHP 8.5.

Normal app builds use `npm run build`; the ERP also needs its existing PHP dependencies and configuration. Deploy with `APP_NAME=BerkahEmas`, rebuild assets, and refresh cached application configuration through the normal release process. This delivery does not migrate the public domain or publish/deploy either app.

Keep any local demo credentials and browser storage state outside published content. The task-local SQLite database is fictional and separate from production. Recreate it when recording new content rather than using production records.

## Recording handoff

The three JSON/Markdown storyboard pairs remain editorial plans. The generic recorder cannot load authenticated browser storage state, and its compositor does not perform result-first cuts or timed captions. An authenticated task-local Playwright script was therefore used against a copy of the isolated fictional SQLite demo database. It logged in before starting video capture, dry-checked all three flows, and saved raw WebM clips plus proof screenshots and run reports under `captures/berkahemas/<story>/`. No owner-account credentials or session state were placed in published artifacts.

Three silent, captioned 1080x1920 H.264 MP4 drafts now live under `output/tiktok/berkahemas/`: POS to invoice (17.40 seconds), inventory search (16.48 seconds), and buyback record (18.44 seconds). Each opens on a real result, shows the recorded interaction, zooms into a real UI detail, and closes with the WhatsApp demo CTA. The source footage preserves ERP geometry; the zooms are crops. The output has no narration or music, so audio can be added during publication review. The task-local scripts are under `D:/Repos/.berkahemas-work/`; the generic recorder/compositor was not extended.

The product profile overrides generic custom-development CTAs in the content guidance. BerkahEmas invites viewers to **Minta Demo**, while BerkahBekhan remains the producer. Review the MP4s and any platform-specific audio before publishing.

A later creative comparison added three unframed 1440x900 landscape cuts under `output/tiktok/berkahemas/frameless-landscape/`. They reuse the verified captures, show a real result first, and leave hook/CTA copy to the TikTok post. They are silent and intentionally preserve the desktop aspect ratio. The landscape UI is small on an upright phone, so compare its published preview and response against the 9:16 drafts before selecting a default.
