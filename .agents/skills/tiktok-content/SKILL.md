---
name: tiktok-content
description: Master orchestrator for converting a real web/app project into persuasive TikTok/Reels sales demos using project truth, sales strategy, directed real-app recording, and strict proof review.
when_to_use: Use when creating short-form video content from an existing project for client acquisition.
allowed-tools: Read, Grep, Glob, Bash
version: 1.1.0
priority: CRITICAL
---

# TikTok / Reels Content Orchestrator

## Mission

Create short-form videos that are both **interesting to watch** and **credible enough to sell development work**.

This is not a documentation walkthrough and not an AI-video generation pipeline.

AI chooses the sales story. The real project supplies the visual proof.

## Required reading

1. `brand/feed-direction.md`
2. `brand/video-direction.md`
3. `brand/content-rules.md`
4. project files under `projects/<project-name>/`

## Pipeline

```text
REAL PROJECT
  -> PROJECT INTELLIGENCE
  -> VERIFIED PROJECT TRUTH
  -> SALES CONTENT / BUYER MAP
  -> SALES VIDEO DIRECTOR
  -> RESULT-FIRST STORYBOARD
  -> DRY-RUN REAL APPLICATION
  -> RECORD REAL APPLICATION
  -> RETENTION-FOCUSED 9:16 EDIT
  -> VIDEO REVIEW
  -> PUBLISHABLE VIDEO + CTA
```

## Step 1 — Build/refresh project truth

Invoke `project-intelligence`.

## Step 2 — Find buyer desire

Invoke `sales-content`.

Generate 3-5 angles and rank by:

1. buyer relevance
2. strength of visible real proof
3. scroll-stopping visual potential
4. understandable cause/effect
5. natural path to ordering a similar build

## Step 3 — Direct the sales story

Invoke `sales-video-director`.

Do **not** default to chronological navigation.

The director should normally use:

`strong result -> relevance -> real actions -> payoff -> CTA`

The same real payoff may appear at both the beginning (teaser) and later (proof completion).

## Step 4 — Write `video-plan.json`

Create a plan compatible with `schemas/video-plan.schema.json`.

The plan must define:

- `targetBuyer`
- `buyerDesire`
- `openingFrame`
- hook + sales angle + CTA
- optional voiceover
- shots tagged by `salesRole`
- each shot's proof feature ID
- expected visible state
- overlay/voiceover line
- focus selector when a punch-in helps comprehension
- maximum useful duration

Every shot must either hold attention, create relevance, prove the feature, show payoff, or convert. Remove shots that do none of those jobs.

## Step 5 — Dry run

Use Playwright/appropriate mobile automation.

If the real product cannot produce a planned state, rewrite the story. Never fabricate the state.

## Step 6 — Record for editing, not documentation

Use `tools/video-recorder/record.mjs`.

Capture clean real interactions. It is okay to:

- repeat a real action for a cleaner take
- prepare safe demo data
- start directly on a deep route
- capture payoff before setup for editorial use

Do not force the final published order to match capture order.

## Step 7 — Compose retention-focused edit

Target 1080x1920.

Prefer:

- strongest real visual immediately
- visual change every ~1-3 seconds when natural
- dead-time removal
- short value overlays
- one purposeful zoom/punch-in at a time
- payoff frame before CTA

Product proof remains visible and legible.

## Step 8 — Final copy

Produce:

- cover text: 3-7 words
- hook
- optional concise voiceover
- caption
- contextual CTA
- 3-6 relevant hashtags maximum

## Step 9 — Review

Invoke `video-review`.

Publication is blocked until truth/privacy **and sales-story quality** pass.
