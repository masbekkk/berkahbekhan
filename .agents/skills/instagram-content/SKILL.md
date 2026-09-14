---
name: instagram-content
description: >-
  General orchestrator for creating Instagram content formats (Feed, Carousel, Story, Reel Cover)
  for berkahbekhan.inc. Transforms verified project information into editorial-grade posts following brand guidelines.
---

# Instagram Content Orchestrator Skill

This skill acts as the master orchestrator for generating Instagram content for **berkahbekhan.inc**. It transforms genuine engineering details, code solutions, and system designs into structured, publication-ready Instagram assets.

---

## 1. Supported Instagram Formats

| Format | Dimensions | Aspect Ratio | Primary Purpose | Safe Zones / Framing |
| :--- | :--- | :--- | :--- | :--- |
| **Carousel Slide** | `1080 × 1350 px` | 4:5 | In-depth case studies, multi-step code walkthroughs, architecture breakdowns | `80px` padding all around. Seamless visual flow across slides. |
| **Feed Post (Single)**| `1080 × 1350 px` | 4:5 | Single impactful diagram, quick tip, milestone showcase, or code insight | `80px` padding. Single standalone message. |
| **Story** | `1080 × 1920 px` | 9:16 | Fast progress updates, polling, quick behind-the-scenes, snippet callouts | Top `250px` & Bottom `350px` reserved for Instagram UI. |
| **Reel Cover** | `1080 × 1920 px` | 9:16 | Video preview thumbnail for developer reels / screen recordings | Centered `1080 × 1080 px` square safe zone + `1080 × 1350 px` feed crop safe zone. |

---

## 2. Content Structure Flow

Every piece of content must respect this structural sequence:

```
1. HOOK (Clear, concrete technical problem or outcome)
      ↓
2. CONTEXT / PROBLEM (Why it matters, architectural constraints)
      ↓
3. USEFUL INFORMATION (The technical approach, reasoning, trade-offs)
      ↓
4. VISUAL EVIDENCE (Real screenshot, genuine code snippet, or topology diagram)
      ↓
5. KEY TAKEAWAY (Practical insight the developer can apply)
      ↓
6. CALL TO ACTION (Optional — only when organic and appropriate)
```

> **IMPORTANT**: Never force a Call to Action (CTA) onto every post. Editorial technical posts often conclude with a strong technical takeaway or open question rather than "Drop a comment below!"

---

## 3. Editorial Voice & Rules

- **Tone**: Pragmatic, direct, peer-to-peer developer voice.
- **Editorial Feel**: Treat each post like a micro-article or engineering blog post, NOT a billboard advertisement.
- **No AI-Slop**: Apply all prohibitions from `brand/content-rules.md` (no fake metrics, no corporate buzzwords, no hyperbolic claims).
- **Visual Compliance**: Adhere strictly to `.agents/skills/berkahbekhan-brand/SKILL.md` (exact `#0B0F14` dark palette, Inter/JetBrains Mono typography, clean borders).

---

## 4. Orchestration Workflow

When a request arrives to generate Instagram content:

1. **Step 1: Inspect Source Material**:
   - Locate the project folder in `projects/<project-name>/`.
   - Read `project.md`, `README.md`, codebase, and `screenshots/`.
   - Determine what facts, screenshots, and technical details exist.

2. **Step 2: Select Format & Specialized Skill**:
   - For project case studies or feature breakdowns → invoke `.agents/skills/instagram-portfolio/SKILL.md`.
   - For standalone developer lessons, performance fixes, or code patterns → invoke `.agents/skills/instagram-tips/SKILL.md`.

3. **Step 3: Structure Draft & Visual Spec**:
   - Write slide-by-slide copy or storyboard.
   - Specify screenshot references and code snippets for each frame.
   - Ensure slide count is justified (prefer 5–7 strong slides over padding to 9–10).

4. **Step 4: Audit with Content Review**:
   - Run the drafted content through `.agents/skills/content-review/SKILL.md`.
   - Fix any flagged buzzwords, unsupported claims, or formatting violations.

5. **Step 5: Output Storage**:
   - Store written drafts in `content/<category>/<topic-slug>.md`.
   - Store production layout assets/code in `output/<project-name>/<format>/`.
