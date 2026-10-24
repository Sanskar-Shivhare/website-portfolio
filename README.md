# Sanskar Shivhare — portfolio

A static, responsive portfolio for analytics, dashboards and reporting automation.

## Local preview

From this directory, run:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Then open http://127.0.0.1:8765/. No package installation or build is required.

## Pages

- `index.html`: services, professional work summaries and independent projects.
- `about.html`: background, professional experience and tools.
- `contact.html`: direct email and LinkedIn contact options.
- `css/portfolio.css`: shared responsive styles, keyboard focus and reduced-motion support.

All three pages work without JavaScript. Work summaries use native HTML disclosure controls. Contact links open an email client; the site does not submit or store messages.

The site uses relative asset paths for GitHub Pages project hosting. Existing legacy template assets remain in the repository but are not loaded by these pages.

## Updating content

Keep the header, footer and contact details consistent across all three HTML pages. Professional work summaries and independent projects are separate: employer datasets and internal dashboards should not be added to this public repository. Add employment dates and quantified outcomes only after checking them against the current résumé and approved public information.

## Review checks

Before publishing, preview all three pages at desktop and mobile widths. Check navigation and anchors, expand the work summaries, verify email and project destinations, and check that images load and content does not overflow horizontally.
