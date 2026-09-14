---
name: content-review
description: >-
  Pre-publication audit and quality assurance skill for berkahbekhan.inc.
  Evaluates drafts for authenticity, specificity, brand compliance, factual accuracy, and AI-slop elimination.
---

# Content Review & Quality Audit Skill

Use this skill to perform a rigorous editorial and design audit on any proposed Instagram post, carousel slide, story, caption, or visual spec before it is approved or published.

---

## 1. The 7-Dimension Audit Matrix

Evaluate every piece of content against the following criteria:

### A. Authenticity
- Does this sound like a practicing developer who has solved this in production?
- Is the tone grounded, measured, and free of artificial corporate cheerleading?
- **Pass**: Uses realistic terminology, admits engineering trade-offs, speaks peer-to-peer.
- **Fail**: Sounds like an AI marketer, motivational influencer, or sales pitch.

### B. Specificity
- Does the content reference concrete files, commands, schemas, or architectural components?
- Are code snippets idiomatic and practical rather than abstract pseudo-code?
- **Pass**: Mentions exact configurations, database indexes, or state transitions.
- **Fail**: Uses vague generalities ("improve your app speed", "write cleaner code").

### C. Originality
- Could this exact post have been copy-pasted onto any generic social media tech account?
- Does it reflect the distinct engineering perspective of **berkahbekhan.inc**?
- **Pass**: Distinct architectural angle or real case study breakdown.
- **Fail**: Generic regurgitation of standard documentation basics.

### D. Visual Consistency
- Does the layout strictly adhere to `.agents/skills/berkahbekhan-brand/SKILL.md`?
  - Background: `#0B0F14`
  - Card Surface: `#151B23` with `#263241` border
  - Accents: `#3B82F6` / `#60A5FA`
  - Typography: Inter / JetBrains Mono
- Are screenshot safe zones (margins, header, footer) respected?
- Is the real software screenshot the dominant element?

### E. Information Accuracy
- Are all facts, metrics, features, and stack details supported by the actual files in `projects/<project-name>/`?
- **Pass**: All claims are cross-checked against project code or documentation.
- **Fail**: Fictionalized client results, invented user counts, or hallucinated frameworks.

### F. AI-Slop Detection & Elimination
Inspect and remove:
- ❌ Hype buzzwords (*"revolutionize"*, *"supercharge"*, *"game changer"*, *"unleash"*)
- ❌ Exaggerated claims (*"100x faster"*, *"effortless scaling"*)
- ❌ Generic clickbait hooks (*"Stop doing X immediately!"*)
- ❌ Gratuitous emoji clusters (e.g., 🔥🚀💡🤯)
- ❌ Decorative visual noise (3D shapes, neon gradients, glassmorphism)

### G. Portfolio Credibility
- Does the post clearly demonstrate genuine software craftsmanship?
- Does it respect the viewer's technical intelligence?

---

## 2. Review Decision Flow

```
DRAFT CONTENT
      ↓
EVALUATE 7 DIMENSIONS
      ↓
[ ANY CRITICAL FAILS? ]
      ├── YES ──→ REJECT & REVISE
      │             - Identify specific failing dimensions
      │             - Provide line-by-line redline edits
      │             - Strip buzzwords / replace with verified facts
      │             - Re-run review
      └── NO  ──→ APPROVE FOR OUTPUT
                    - Save final copy to content/ or output/
```

---

## 3. Output Format for Review Reports

When auditing a post, output the review summary in this format:

```markdown
### Content Review Report: [Post Title / Project Name]

- **Authenticity**: [PASS / FAIL] — [Brief observation]
- **Specificity**: [PASS / FAIL] — [Brief observation]
- **Originality**: [PASS / FAIL] — [Brief observation]
- **Visual Consistency**: [PASS / FAIL] — [Token & layout compliance]
- **Accuracy**: [PASS / FAIL] — [Verification against source files]
- **AI-Slop Score**: [CLEAN / NEEDS REVISION] — [Flagged phrases if any]
- **Credibility**: [PASS / FAIL] — [Engineering substance check]

**Verdict**: [APPROVED / REVISION REQUIRED]

**Required Edits (if revision required)**:
1. ...
2. ...
```
