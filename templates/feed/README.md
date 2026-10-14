# Editable feed masters

Open [Feed Refactor - UMKM](https://www.figma.com/design/rlngsFaoNqCPP8PzeItbLk/Untitled?node-id=49-30). The original portfolio page remains intact. Follow [the active direction](../../brand/feed-direction.md).

| Master | Figma component | Use |
| --- | --- | --- |
| Selected Work | [51:64](https://www.figma.com/design/rlngsFaoNqCPP8PzeItbLk/Untitled?node-id=51-64) | Project introduction with a readable real interface. |
| Useful Feature | [51:76](https://www.figma.com/design/rlngsFaoNqCPP8PzeItbLk/Untitled?node-id=51-76) | One useful interaction; focused screenshot and concise explanation. |
| Behind the Work | [51:88](https://www.figma.com/design/rlngsFaoNqCPP8PzeItbLk/Untitled?node-id=51-88) | Real source or iteration, with a practical explanation. |
| Service Invitation | [51:105](https://www.figma.com/design/rlngsFaoNqCPP8PzeItbLk/Untitled?node-id=51-105) | Clear offer, helpful inquiry prompts, and a labeled work sample. |

Create instances rather than detaching or editing the master for each new post. Preserve 1080 x 1350 geometry and 80px margins. Replace images with uniformly scaled sources; change the crop viewport rather than stretching the image. Keep text and images separate. Read supporting source files before changing claims.

Palette values: paper `#F5F5F7`, white `#FFFFFF`, ink `#1D1D1F`, dark `#161617`, muted `#6E6E73`, pale `#A1A1A6`. Inter handles editorial copy; JetBrains Mono handles metadata and actual code. Headlines use 80px or 64px, supporting text 32px or 28px, metadata 22px.

Shared paint and text styles under `Feed Refactor / ...` are bound to the four masters and three standalone carousel frames. Cover instances inherit them. The `space/post-margin` variable in `Feed Refactor / Editorial` controls all four 80px outer margins. Bindings were completed and read back on 2026-10-13; fresh production PNGs are byte-identical to the reviewed exports. Reuse these definitions rather than creating duplicates. See [the review](../../content/drafts/feed-refactor-review.md).
