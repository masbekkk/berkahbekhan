---
name: video-review
description: Final quality, engagement, sales-story, privacy, and veracity gate for real-project TikTok/Reels demos.
when_to_use: Use after recording/editing and before publishing any project demo video.
allowed-tools: Read, Grep, Glob
version: 1.1.0
priority: CRITICAL
---

# Video Review Skill

## Mandatory checks

### 1. Real Product Test
Every product state shown comes from the actual application recording.

### 2. Claim-to-Proof Test
Every spoken/on-screen product claim maps to project truth and matching visual proof.

### 3. Privacy Test
No credentials, tokens, private URLs, real customer PII, or unsafe internal information.

### 4. Sales Truth Test
No invented ROI, conversion lift, delivery time, price, testimonial, user count, revenue, availability, or scarcity.

### 5. Scroll-Stop Test
Within the first 1-2 seconds, a viewer sees either a strong real result/action or instantly understandable buyer-relevant tension. Reject logo/loading/slow intro openings.

### 6. Relevance Test
By roughly 3-5 seconds, the intended buyer can understand why the workflow could matter to a business like theirs.

### 7. Proof Momentum Test
The middle is not a passive tour. It contains meaningful cause/effect interactions and removes dead navigation/setup.

### 8. Payoff Test
The viewer sees a clear completed/result state before the CTA.

### 9. Mobile Legibility Test
At phone size, focal UI, overlays, and results are readable. Cropping does not alter meaning.

### 10. CTA Fit Test
CTA follows naturally from the demonstrated capability and tells a relevant potential client what to send/do next.

### 11. Desire-without-Hype Test
The edit makes the viewer imagine a similar solution for their own business without promising unverified business outcomes.

## Report format

```md
### Video Review: <slug>

- Real Product: PASS/FAIL
- Claim-to-Proof: PASS/FAIL
- Privacy: PASS/FAIL
- Sales Truth: PASS/FAIL
- Scroll Stop: PASS/FAIL
- Buyer Relevance: PASS/FAIL
- Proof Momentum: PASS/FAIL
- Payoff: PASS/FAIL
- Mobile Legibility: PASS/FAIL
- CTA Fit: PASS/FAIL
- Desire Without Hype: PASS/FAIL

Verdict: APPROVED / REVISION REQUIRED

Required changes:
1. ...
```
