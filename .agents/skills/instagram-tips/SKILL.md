---
name: instagram-tips
description: Generates practical, high-signal developer insights, technical breakdowns, and code snippets for @berkahbekhan.inc based on real build workflows.
when_to_use: Use when formatting supporting technical breakdowns, code snippets, or development insights extracted from real software projects.
allowed-tools: Read, Grep, Glob
version: 2.0.0
priority: MEDIUM
---

# Developer Insights & Technical Breakdown Skill

> **Role in Portfolio Strategy**: Supporting content.  
> This skill operates strictly in service of the portfolio: it extracts genuine engineering trade-offs, architecture patterns, and bug fixes discovered while building real software. It aligns directly with Composition Family 4 (**TECHNICAL BREAKDOWN**) and Composition Family 5 (**DEVELOPMENT INSIGHT**).

---

## 1. Editorial Positioning

- **Portfolio-First Guardrail**: Never let tips overshadow real project showcases. Developer insights serve to prove technical depth behind the software we build.
- **Rooted in Real Builds**: Every tip must originate from an actual implementation hurdle in `projects/<project-name>/`, not generic syntax tutorials.
- **Zero Beginner Tropes**: Never produce *"What is an array?"* or *"Top 5 VS Code extensions"*. Focus on production architecture, framework nuances, and real debugging.

---

## 2. Core Structure: The 5-Stage Engineering Signal Chain

All technical breakdowns follow this disciplined sequence:

```
1. CONCRETE PROBLEM
   Real production friction point or bug encountered during development.
   (e.g., "Eloquent N+1 query when eager loading nested polymorphic relationships")
         ↓
2. ROOT CAUSE
   The architectural or runtime mechanism causing the issue.
   (e.g., "Two-step query hydration in Laravel's query planner")
         ↓
3. ARCHITECTURAL RESOLUTION
   The exact technique, pattern, or refactor applied.
         ↓
4. VERIFIED CODE / SCHEMA
   Syntactically valid, highlighted snippet or config diff from the actual repository.
         ↓
5. ENGINEERING TAKEAWAY
   A concise rule of thumb or architectural trade-off for fellow developers.
```

---

## 3. Formatting Standards

- **Single Feed Post (`1080 × 1350 px`)**:
  - Clear mono header + concise problem title.
  - Large, high-contrast code panel in JetBrains Mono.
  - Brief caption carrying the root cause and resolution.
- **Figma Alignment**: Frame code containers with clean `1px solid` border (`#263241`), minimal syntax highlighting, and generous padding.
- **Anti-Slop Guardrail**: No clickbait hooks (*"Stop doing X!"*), no fake benchmark numbers, no neon drop shadows.
