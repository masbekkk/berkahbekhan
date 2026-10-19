---
name: sales-video-director
description: Direct real-project demo recordings as persuasive short-form sales stories: stop the scroll, create curiosity, prove the product, make the business value obvious, and end with a relevant inquiry CTA.
when_to_use: Use after project-intelligence + sales-content and before demo-recorder. This skill decides the order, pace, framing, and purpose of every real-app shot.
allowed-tools: Read, Grep, Glob
version: 1.1.0
priority: CRITICAL
---

# Sales Video Director

## Mission

For a named product campaign, read `brand/<projectSlug>/product-profile.json` first when it exists. Its offer and CTA override generic requests for a similar custom build. BerkahEmas uses the product-demo CTA and the Software Toko Emas descriptor.

A correct screen recording is not automatically persuasive.

Direct the real application into a short sales story that makes a relevant viewer think:

1. `this is for a problem/business like mine`,
2. `I want to see what happens next`,
3. `this actually works`,
4. `this would be useful for my business`,
5. `I should ask about getting something similar`.

**Do not record the app in menu order. Record it in persuasion order.**

## Non-negotiable truth rule

Every product state and interaction must still come from the real application. Persuasive sequencing, demo data, crops, zooms, pacing, text, and voiceover are allowed. Inventing a feature, client result, testimonial, metric, urgency, or product state is not.

## Default persuasion arc

### Beat 1 — Stop the scroll (0-2s)

Open on the strongest truthful visual/result, not a logo, loading screen, home page, IDE, or greeting.

Good openings:

- completed booking/result state
- dashboard with a meaningful status change
- polished before/after UI transition when both states are real
- one-click action with immediate visible payoff
- customer-facing flow already in motion

Overlay should communicate one business-relevant idea in a glance.

Examples:

- `Booking masuk tanpa chat manual`
- `Pesanan langsung muncul di dashboard`
- `Website ini bukan cuma buat dilihat`
- `Customer bisa pilih jadwal sendiri`

Avoid vague hooks like `Website terbaru saya` unless the visual itself is exceptional.

### Beat 2 — Create relevance/tension (2-5s)

Give the viewer a reason to care. Frame a common business task or friction without pretending it happened to a specific client unless documented.

Examples:

- `Kalau booking masih bolak-balik lewat chat...`
- `Untuk usaha yang perlu cek order dari satu tempat...`
- `Biar customer nggak perlu nunggu admin pilih jadwal.`

Keep this beat short. Do not turn the video into a lecture.

### Beat 3 — Proof sequence (5-15s)

Show 2-4 real actions with visible cause/effect.

Prefer actions with movement:

- select
- type
- filter
- submit
- drag
- toggle
- upload
- checkout
- status change
- generated result

Remove dead navigation, login waiting, long scrolling, and setup that does not prove the sales idea.

Each proof shot must answer: `what does the viewer understand after seeing this?`

### Beat 4 — Payoff/value (12-20s)

Show the finished state and translate the feature into a buyer-relevant capability.

Feature: `admin can update booking status`.

Better value overlay: `Admin bisa cek & update booking dari satu dashboard.`

Never convert a capability into an unverified result such as `hemat 5 jam/minggu` or `naikkan omzet`.

### Beat 5 — Conversion CTA (final 2-4s)

Ask for one simple next action connected to what was demonstrated.

Default:

`Punya usaha dan butuh alur seperti ini? DM jenis usaha + kebutuhannya.`

Other allowed CTA patterns:

- `Butuh website yang bisa dipakai customer, bukan cuma dilihat? DM saya.`
- `Mau dibuatkan sistem dengan alur serupa? Kirim kebutuhanmu lewat DM.`
- `Kalau bisnis kamu butuh booking/order/dashboard seperti ini, kita bisa bahas lewat DM.`

Do not invent scarcity or fake discounts.

## Result-first storytelling

The final product result may be shown at the beginning as a teaser and shown again after the action sequence.

Example:

`0-1.5s: booking success + dashboard count changes`
`1.5-4s: "customer pilih jadwal sendiri"`
`4-10s: fill -> choose schedule -> submit`
`10-15s: admin dashboard -> new booking appears`
`15-18s: "Semua masuk ke satu alur"`
`18-21s: CTA`

This is not fabrication because the result and actions are captured from the real app. It is editorial sequencing.

## Demo data as art direction

Use safe demo data that improves comprehension:

- realistic Indonesian names that are clearly demo data
- readable service/product names
- useful statuses (`Menunggu`, `Dikonfirmasi`, etc.)
- enough rows/cards to make dashboards visually understandable
- dates/times that make the workflow easy to follow

Do not use real customer PII or invent testimonials/business metrics.

## Shot selection score

Score candidate moments 1-5 on:

- `scroll_stop` — visually understandable immediately
- `buyer_relevance` — matters to the target client
- `cause_effect` — action produces an obvious result
- `visual_motion` — useful movement/change exists
- `proof_strength` — strongly demonstrates a real capability
- `conversion_bridge` — naturally supports ordering a similar project

Prefer shots with high total scores. A technically impressive screen with low buyer relevance should not dominate a sales video.

## Retention rules

- change visual state every ~1-3 seconds when the workflow allows
- cut setup/dead time aggressively
- one message per text overlay
- show cursor/finger action only when it helps viewers follow cause/effect
- use purposeful zooms to the active area, then zoom back out for payoff
- do not hide the product under oversized captions
- captions/voiceover should add meaning, not narrate every click

## Output to video-plan.json

The director must define:

- `targetBuyer`
- `buyerDesire`
- `openingFrame`
- `hook`
- `salesAngle`
- `cta`
- `voiceover` (optional)
- ordered shots with a `salesRole`: `hook`, `relevance`, `proof`, `payoff`, or `cta`
- proof shots may be editorially ordered differently from application navigation order
- `focusSelector` when a zoom/crop should emphasize a real control/result
- `overlay`
- `voiceoverLine` (optional)
- `maxDurationMs`

## Rejection conditions

Reject/rewrite the concept when:

- strongest opening is only a logo/homepage with no immediate value
- first meaningful app interaction arrives after 5 seconds
- video is mainly route-by-route navigation
- viewer needs framework knowledge to understand why it matters
- proof is too weak to support the CTA
- hook promises more than the recorded flow demonstrates
- CTA is generic and disconnected from the demonstrated capability
