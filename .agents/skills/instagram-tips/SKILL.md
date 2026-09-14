---
name: instagram-tips
description: >-
  Generates practical, high-signal developer educational tips and code breakdowns for berkahbekhan.inc.
  Extracts genuine engineering problems, bug fixes, and architectural patterns from real project workflows.
---

# Developer Tips & Technical Insights Skill

This skill generates developer tips, architecture patterns, and debugging breakdowns for **berkahbekhan.inc**. Content created by this skill stems from real problems encountered when building software, not generic regurgitated tutorials.

---

## 1. Technical Scope & Domains

Focus on pragmatic, production-grade topics commonly encountered in full-stack engineering:

- **Backend & Frameworks**: Laravel, PHP 8+, Eloquent optimization, background jobs, queue workers
- **Frontend & Bridge**: React, TypeScript, Inertia.js, state management, Vite asset pipelines
- **Databases & Storage**: PostgreSQL, MySQL, indexing strategies, locking, migration safety
- **Infrastructure & DevOps**: Nginx configuration, VPS deployment, Docker, SSL, Linux daemons
- **Architecture & Tooling**: Git workflows, API design, authentication, refactoring patterns

---

## 2. Core Post Structure

All developer tips must adhere strictly to the **5-Stage Signal Chain**:

```
1. REAL PROBLEM
   A concrete, relatable engineering friction point or bug.
   (e.g., "Eloquent eager loading failing on polymorphic relations")
         ↓
2. WHY IT HAPPENS
   The underlying architectural or runtime reason.
   (e.g., "How the query planner handles the two-step hydration")
         ↓
3. HOW TO SOLVE IT
   The exact technique, pattern, or refactor needed.
         ↓
4. PRACTICAL EXAMPLE
   Syntactically correct, highlighted code snippet or config diff.
   Before vs. After or clean idiomatic implementation.
         ↓
5. TAKEAWAY
   A concise heuristic or rule of thumb for future projects.
```

---

## 3. Formatting by Post Type

### A. Carousel Breakdown (4–6 Slides, 1080 × 1350)
- **Slide 1 (Hook / Problem)**: Category eyebrow (e.g., `[ LARAVEL + POSTGRES ]`), bold title stating the problem clearly, and a teaser snippet or terminal error output.
- **Slide 2 (The Cause)**: Concise breakdown of the runtime behavior or edge case.
- **Slide 3 (The Flawed / Common Approach)**: Why the intuitive naive solution causes bottlenecks or bugs.
- **Slide 4 (The Correct Solution / Code)**: Dark code container (`#151B23`) with clean JetBrains Mono snippet.
- **Slide 5 (Summary & Takeaway)**: Key engineering principle and invitation for technical discussion.

### B. Single Feed Post (1080 × 1350)
- Clear top header identifying the topic.
- Central framed code card or configuration diff (`#151B23` with `#263241` border).
- Accompanying caption carrying the full 5-stage explanation.

---

## 4. Quality & Originality Standards

- **Avoid Generic Beginner Tropes**: Never create posts like *"What is an array?"* or *"How to declare a variable in JavaScript"*, unless presenting an advanced compiler nuance or edge case.
- **Syntactic Correctness**: Every code snippet must be valid, formatted, and strictly follow language conventions (e.g., PSR-12 for PHP, modern TS conventions for React).
- **Zero AI Hype**: No *"5 insane productivity hacks"* or *"10x your coding speed"*. Focus on craftsmanship, reliability, and maintainability.
