# AGENTS.md

Simple static HTML project — no build system, tests, or complex tooling.

## Running

```bash
python -m http.server 8000     # serve locally (fetch() components require HTTP)
```

Open `http://localhost:8000` — `file://` won't load modals (components loaded via `fetch()` into `#components-container`).

## Key Facts

- **Entry point:** `index.html` → `js/app.js` (init order: load components → init modals → init birthday countdown)
- **Birthday:** May 28, 2026 — unlocked via password `2580` → shows live countdown
- **Brand:** "REHAN" (logo in sidebar header)
- **Deployed:** Netlify (README badge) — no CI config in repo
- **Icons:** Lucide — call `lucide.createIcons()` after dynamically adding HTML
- **Styling:** Tailwind CSS + `css/styles.css` (modal transitions, scrollbar-hide, mobile touch)
- **Components:** 9 HTML files in `components/` (gifts, surprise, memories, archive, trash, calendar, menu dropdown, birthday password/locked popups)
