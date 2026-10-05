# madebyrazz.com

Live: https://madebyrazz.com — the live version is `09/`, published to `docs/`. **Start with [HANDOFF.md](HANDOFF.md).**

Personal homepage of Razz. Static site, no dependencies.

- `content.mjs` — shared copy and image data
- `07/`, `08/`, `09/` — design directions: `template.mjs` (markup), `style.css`, `script.js`, `img/`, `fonts/`
- `imprint/`, `privacy/` — legal pages (drafts, placeholders still to fill in)
- `shared/switcher.js` — review-only version switcher (keys 7–9, ←/→, H hides it)
- `index.html` — overview of the directions

Rebuild after changing `content.mjs` or a template:

    node build.mjs

Local preview (no caching):

    python3 serve.py

then open http://localhost:4877
