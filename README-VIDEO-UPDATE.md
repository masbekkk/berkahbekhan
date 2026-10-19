# v2-design persuasive video + sales update

## BerkahEmas product campaign

The prepared **BerkahEmas — Software Toko Emas** campaign sells ready-to-use gold-store software. Start with [the brand guide](brand/berkahemas/README.md), [brand board](brand/berkahemas/preview.html), [project truth](projects/berkahemas/project-truth.json), and [implementation handoff](projects/berkahemas/implementation-handoff.md).

Three runtime-backed storyboards live in `content/tiktok/berkahemas/`: `pos-ke-nota`, `cari-stok-emas`, and `catat-buyback`. The static vertical template is in `templates/video/berkahemas/`. Three captioned 1080x1920 MP4 demos are in `output/tiktok/berkahemas/`; their real ERP source captures and proof reports are in `captures/berkahemas/`. They are silent drafts ready for editorial and publication review. The generic recorder/compositor extensions remain deferred; the authenticated capture and edits used task-local scripts.

This overlay extends the Instagram-first workspace with a TikTok/Reels client-acquisition pipeline where **the real demo recording itself is directed to sell**.

## The important distinction

This is NOT:

`record full app walkthrough -> add sales caption at the end`

It IS:

`understand real project -> identify buyer desire -> select strongest real proof -> direct result-first story -> record real interactions -> retention edit -> contextual CTA`

## Added capabilities

- inspect a real project and create reusable `project-truth.json`
- translate verified features into buyer tasks/desires without fake ROI
- score real UI moments for scroll-stop + buyer relevance + proof strength
- direct recordings in persuasion order rather than menu/navigation order
- open on a real payoff/result, then prove how it happens
- use safe demo data to make workflows easier to understand
- record real local/staging interactions with Playwright
- fail when planned selectors/results are not real
- review both truth AND sales-story quality before publishing

## New pipeline

```text
REAL PROJECT
  -> project-intelligence
  -> project-truth.json
  -> sales-content
  -> buyer desire + sales angle
  -> sales-video-director
  -> result-first video-plan.json
  -> demo-recorder / real app
  -> retention-focused 9:16 edit
  -> video-review
  -> TikTok / Reels
  -> DM / inquiry
```

## New/updated skills

- `.agents/skills/project-intelligence/SKILL.md`
- `.agents/skills/sales-content/SKILL.md`
- `.agents/skills/sales-video-director/SKILL.md`
- `.agents/skills/tiktok-content/SKILL.md`
- `.agents/skills/demo-recorder/SKILL.md`
- `.agents/skills/video-review/SKILL.md`

## Core positioning

**AI is the sales/demo director. The real application is the actor and the proof.**

The system is allowed to make the video more persuasive through sequencing, pacing, overlays, demo data, crops, zooms, voiceover, and CTA—but not by inventing functionality or business results.
