---
name: project-intelligence
description: Inspect a real web/app project and produce a verified project truth file for social content, demo recording, and sales messaging.
when_to_use: Use before planning TikTok/Reels or sales content from a project. Re-run when meaningful project features or routes change.
allowed-tools: Read, Grep, Glob, Bash
version: 1.0.0
priority: CRITICAL
---

# Project Intelligence Skill

## Mandate

Create a factual, reusable source of truth for one real project. Do not start from marketing copy. Start from code, documentation, screenshots, routes, tests, database/schema files, and—when runnable—the actual application.

The output is `projects/<project-name>/project-truth.json` and must validate conceptually against `schemas/project-truth.schema.json`.

## Inputs to inspect

Inspect what exists; do not require every category:

1. README / docs / manual books.
2. Package manifests and lockfiles.
3. Route definitions and navigation.
4. Page/screen components.
5. API/controllers/services/actions.
6. Database migrations/schema/models.
7. Tests and fixtures.
8. Existing screenshots or recordings.
9. Runtime UI on localhost/staging when a safe demo environment is available.

## Separate four kinds of truth

Every relevant claim must be classified:

- `source_verified` — implementation exists in source.
- `runtime_verified` — behavior was actually observed in the running application.
- `documented_only` — docs say it exists but it was not independently verified in this run.
- `unknown` — insufficient evidence; do not market it as a feature.

Source existence does not prove production usage, customer adoption, revenue impact, speed improvement, conversion improvement, or availability at this moment.

## Project truth fields

Capture at minimum:

- project identity and accurate context
- project type: website / web app / mobile app / API / other
- target users or business audience only when supported
- run instructions and safe base URL
- verified features
- routes/screens related to each feature
- demo-safe user flows
- exact evidence for important claims
- tech stack from manifests/configuration
- privacy/recording restrictions
- known limitations
- forbidden/unverified claims

## Sales translation

For every high-value verified feature, derive a **client value statement** without inventing outcomes.

Good:

`Verified feature: customer can choose an appointment slot.`
`Client value: booking can happen directly from the website.`

Bad:

`Client value: increases bookings by 40%.`

The first is an observable capability. The second is an unverified business result.

## Runtime inspection

When the app can run safely:

1. Start it using documented project commands.
2. Use demo credentials/data only.
3. Visit the candidate route.
4. Perform the exact interaction.
5. Record whether the expected visible state appears.
6. Mark the flow `runtime_verified` only after the observable result succeeds.

If authentication, external services, payment gateways, or destructive actions make runtime verification unsafe, stop at source/documentation evidence and record the limitation.

## Output quality gate

Before saving `project-truth.json`, confirm:

- no feature is inferred solely because it would be common for this type of app
- no fabricated business metric exists
- no private credential is stored
- every proposed demo flow points to a real route/screen or is marked unverified
- limitations and missing information are explicit
