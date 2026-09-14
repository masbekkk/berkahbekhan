# Content & Anti-AI-Slop Rules — berkahbekhan.inc

This document establishes the mandatory editorial standard for **berkahbekhan.inc**. All agent skills, post copywriters, caption generators, and reviewers must strictly adhere to these principles.

The guiding mandate:
> **The content must feel like an experienced, thoughtful software engineer documenting real work, sharing practical lessons, and breaking down real architecture.**

---

## 1. Absolute Prohibitions (Zero Tolerance)

Never generate or approve content containing:

### A. Fabricated Data & Hallucinations
- **NO Fake Statistics**: Never write "boosted efficiency by 300%", "99.9% customer satisfaction", or "used by 10,000+ users" unless supported by real project documentation.
- **NO Fabricated Testimonials / Clients**: Never invent client quotes, company names, or fictional user praises.
- **NO Fabricated Features / Tech Stacks**: If a project uses MySQL, never say it uses Redis or Kafka unless documented in the project files.
- **NO Fake UI / Mockups**: Never substitute real application screenshots with fake generic SaaS landing pages or vector mockups.
- **NO AI-Generated People**: Never use Midjourney/DALL-E headshots of fake founders or developers.

### B. Marketing Clichés & Corporate Buzzwords
Never use corporate fluff or hollow hype phrases, including but not limited to:
- ❌ *"Revolutionize your business"*
- ❌ *"Unlock your potential"*
- ❌ *"In today's fast-paced digital era"*
- ❌ *"Game changer for developers"*
- ❌ *"Supercharge your workflow"*
- ❌ *"Skyrocket your productivity"*
- ❌ *"Seamless and intuitive experience"*
- ❌ *"Empowering modern enterprises"*

### C. Generic Influencer Slop & Clickbait
- ❌ *"5 tips every developer NEEDS to know (Number 4 will shock you!)"*
- ❌ Generic motivational quotes (e.g., *"Code is like humor. When you have to explain it, it’s bad."*)
- ❌ Vague generalities with no technical depth (e.g., *"Clean code is important because it makes your app maintainable."*)
- ❌ Excessive emojis (e.g., 🚀🔥💡🤯✨) scattered across headings and bullet points. Maximum 1–2 relevant emojis per post caption, 0 in slide titles.

---

## 2. What to Prefer (The BerkahBekhan Standard)

| Prefer This (Real Developer Voice) | Instead of This (AI Marketing Slop) |
| :--- | :--- |
| "Handling N+1 queries when loading nested comments in Laravel" | "Optimize your database for lightning-fast speeds" |
| "Why we chose SQLite over PostgreSQL for local sync in this tool" | "Using cutting-edge database technology to revolutionize storage" |
| "Refactoring a 400-line controller into single-action invokable classes" | "Write clean, elegant, world-class code every day" |
| "Real screenshot of the actual dashboard showing order status transitions" | "Generic 3D render of a purple chart trending upward" |
| "Trade-off: Inertia.js saved us from writing a separate REST API, but SSR required extra Node daemon configuration" | "Our framework provides seamless full-stack perfection" |

---

## 3. The Missing Information Rule

If a project's documentation lacks specific information (e.g., production deployment stats, user retention metrics, client name, or server benchmarks):

1. **DO NOT invent or extrapolate fake numbers.**
2. **State honestly**: `"Information not provided"` or focus entirely on the architectural and code details that **are** present.
3. It is always better to publish a tight 5-slide carousel backed by 100% verified facts than a 9-slide carousel padded with fluff.

---

## 4. Editorial Voice Checklist

Before any content is finalized, verify:
- [ ] Could an actual engineer read this without cringing?
- [ ] Is every technical term used accurately in context?
- [ ] Are code snippets syntactically valid and idiomatically written?
- [ ] Is the tone confident yet humble and realistic about trade-offs?
- [ ] Does the hook pose a concrete technical problem rather than hype?
