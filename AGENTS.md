# AGENTS.md

Simple static HTML project - no build system, tests, or complex tooling.

## Project Structure

```
/                    # Root
├── index.html       # Main entry point
├── css/
│   └── styles.css   # Custom styles
├── js/
│   └── app.js       # Main application logic
├── components/      # Modular UI components (loaded dynamically)
│   ├── calendar-modal.html
│   ├── gifts-popup.html
│   ├── surprise-popup.html
│   ├── memories-popup.html
│   ├── archive-popup.html
│   ├── menu-dropdown.html
│   ├── birthday-password-popup.html
│   └── birthday-locked-popup.html
└── images/
    ├── canvas.png
    └── image.png
```

## Tech Stack

- Tailwind CSS (via CDN)
- Lucide Icons (via CDN)
- Inter font (Google Fonts)

## Running the Project

1. Serve locally (required for component loading):
   ```bash
   python -m http.server 8000
   ```
2. Open `http://localhost:8000` in browser

**Note**: Components are loaded via fetch(). Opening directly as `file://` won't load modals.

## Notes

- Brand name in UI is "REHAN" (logo on line 21-24)
- Birthday corner password: `2580`
- Contains JavaScript interactivity (calendar, items management, birthday countdown)