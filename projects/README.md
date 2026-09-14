# Projects Directory — berkahbekhan.inc

This directory is the **single source of truth** for all real software projects showcased on the `@berkahbekhan.inc` Instagram account.

To generate authentic portfolio posts, carousels, stories, or developer tips, real project files must be placed here.

---

## 1. Project Ingestion Modes

This workspace supports two modes for referencing project materials:

### Mode A: External Directory Direct Read (Standard / Active Mode)
Projects can remain in their original workspace or repository directory (e.g. `../<project-name>`). The agent inspects the code, `screenshots/`, and documentation directly from that external path without duplicating files.

### Mode B: Local Project Directory
Alternatively, project materials can be placed directly inside this repository under `projects/<project-name>/`:
```
projects/
└── <project-name>/
    ├── project.md         # Primary project summary & technical breakdown
    ├── README.md          # Original project README or repo documentation
    ├── screenshots/       # Real application screenshots (PNG/JPEG)
    ├── assets/            # Architecture diagrams, database schemas, brand assets
    └── documentation/     # Supplementary technical notes, API docs, changelogs
```


---

## 2. File Guidelines

### `project.md` (Recommended Format)
Create a `project.md` file inside the project directory containing:
- **Title**: Official project name
- **Summary**: 2–3 sentences explaining what problem the software solves
- **Tech Stack**: Actual technologies, frameworks, libraries, and infrastructure
- **Architecture**: Key components, data flow, integrations
- **Key Technical Challenges**: Difficult bugs, scaling bottlenecks, or trade-offs resolved
- **Results / Metrics**: Real production numbers (if available; otherwise omit)

### `screenshots/`
- High-resolution, uncompressed captures of real interfaces.
- Show actual user workflows (dashboards, forms, settings, complex tables, dark mode views).
- Do not use generic placeholder wireframes or fake designs.

### `assets/`
- System architecture diagrams, ER diagrams, or terminal recordings.

---

## 3. Strict Rule of Truth

The content generation system relies entirely on the artifacts placed in each project folder.

> **Agents and generators must NEVER fabricate:**
> - Missing performance statistics
> - Fictional client testimonials
> - Technologies not present in the project files
> - Fake product features

If a piece of information is missing, omit it or state: `"Information not provided"`.
