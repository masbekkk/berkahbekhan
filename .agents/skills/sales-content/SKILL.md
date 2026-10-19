---
name: sales-content
description: Convert verified project capabilities into buyer desire, sales angles, hooks, value statements, objections, and CTAs for persuasive real-app demo videos without fabricated outcomes.
when_to_use: Use after project-intelligence and before sales-video-director.
allowed-tools: Read, Grep, Glob
version: 1.1.0
priority: HIGH
---

# Sales Content Skill

## Role

Translate verified software into a reason for a potential client to care and inquire.

Do not merely describe features. Find the buyer-facing meaning that the real recording can prove.

The viewer should understand:

1. `this is relevant to a business/task like mine`,
2. `I can see the software really doing it`,
3. `I can imagine a similar workflow for my own business`,
4. `I know what to do if I want one built`.

## Inputs

First check for `brand/<projectSlug>/product-profile.json`. When present, use its product audience, offer and CTA instead of the generic custom-development defaults. For BerkahEmas, the offer is ready-to-use Software Toko Emas and the conversion action is requesting a product demo.

Read:

- `projects/<project-name>/project-truth.json`
- `brand/feed-direction.md`
- `brand/video-direction.md`
- `brand/content-rules.md`

Use only verified/documented facts with appropriate labeling.

## Build a buyer map first

For each candidate video, identify:

- `targetBuyer` — who would plausibly care
- `buyerTask` — what they/customer/admin needs to do
- `buyerFriction` — a common/general friction, or documented project problem
- `buyerDesire` — the capability they would want
- `proofMoment` — the strongest real interaction/result that demonstrates it
- `conversionBridge` — why this naturally leads to ordering a similar project

Never invent a specific client's pain or result.

## Sales-angle families

Generate 3-5 and rank them by proof + buyer relevance + visual interest.

### 1. Customer self-service

`Customer bisa [verified action] langsung dari website/app.`

Strong for booking, ordering, registration, selection, upload, payment initiation, status checks.

### 2. Operational control

`Admin bisa [verified admin task] dari satu dashboard.`

Strong for orders, inventory, booking, reports, statuses, CRM-like workflows.

### 3. Result-first transformation

Show the useful final state first, then prove the real workflow that creates it.

### 4. Friction -> workflow

Frame a general problem:
`Kalau [task] masih dilakukan satu-satu lewat chat/spreadsheet, alur seperti ini bisa dibuat langsung di sistem.`

Do not claim this was the project's real “before” unless documented.

### 5. Feature proof

One surprising or satisfying real interaction with immediate payoff.

## Hook rules

- Indonesian by default.
- Prefer 4-10 spoken/display words.
- Make the buyer benefit/task understandable without code knowledge.
- Pair words with a visually strong real app state.
- No greetings, logo animations, or `hari ini aku mau...`.

Generate at least 3 hooks for the top angle:

1. **Result hook** — show desired outcome.
2. **Pain/relevance hook** — recognize a common task/friction.
3. **Curiosity hook** — invite the viewer to see how the workflow works without clickbait that overpromises.

## Desire without fake promises

Use `capability -> imagined use`, not `capability -> guaranteed ROI`.

Good:
`Customer bisa pilih jadwal tanpa menunggu admin memilihkan slot.`

Good:
`Alur booking seperti ini bisa disesuaikan dengan layanan dan jadwal bisnismu.`

Bad:
`Pasti meningkatkan booking 2x.`

Bad:
`Hemat 10 jam tiap minggu.`

## CTA rules

CTA should match the demonstrated workflow.

Preferred format:

`Punya usaha dan butuh alur seperti ini? DM jenis usaha + kebutuhanmu.`

Also valid:

- `Mau dibuatkan website/app sesuai alur bisnismu? Kirim kebutuhannya lewat DM.`
- `Butuh sistem booking/order/dashboard seperti ini? Kita bisa bahas lewat DM.`

No fake scarcity, discount, delivery time, or guaranteed result.

## Output

Return:

- target buyer
- buyer task/friction/desire
- ranked angles
- strongest proof moment
- 3 hook variants for top angle
- recommended hook
- conversion bridge
- CTA
- claims that must not be used
- proof shots required
