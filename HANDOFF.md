# madebyrazz.com — handoff

Personal homepage of Razz (Emanuel Funck). Live at **https://madebyrazz.com**.
Repo: github.com/madebyrazz/madebyrazz.com (account `madebyrazz`). Static site, no dependencies, no framework.

## How it works

- **Live version = `09/`.** Versions `07` and `08` are older design directions kept for comparison.
- `content.mjs` holds the shared copy and data (orgs, hover-card texts, songs, clients, footer). V09 also has some copy directly in `09/template.mjs` (hero sentence, section labels).
- `NN/template.mjs` renders the markup, `NN/style.css` and `NN/script.js` are hand-written, `NN/img/` and `NN/fonts/` are the assets.
- **`node build.mjs`** renders every `NN/index.html`, the overview `index.html`, and **publishes V09 to `docs/`** (removes the review switcher, fixes links, adds `CNAME` + `.nojekyll`). Never edit files in `docs/` by hand.
- Preview locally: `python3 serve.py` → http://localhost:4877/09/ (dev) or http://localhost:4877/docs/ (exactly what goes live). `serve.py` sends no-cache headers.

## Deploy

1. Edit `content.mjs` / `09/*`.
2. `node build.mjs`
3. Commit + push to `main`. GitHub Pages serves `main:/docs`, live after ~1–2 min.

Git author for this repo is set locally to `madebyrazz <337641834+madebyrazz@users.noreply.github.com>`. Commits end with a `Co-Authored-By` line.

DNS at Strato: A `185.199.108.153` (Strato allows only one A record, that's fine), AAAA `2606:50c0:8000::153`, `www` CNAME → `madebyrazz.github.io`. HTTPS is enforced in Pages settings.

## V09 design rules (agreed with Razz)

- Dark neutral background `#0a0a0a`, white text, grey `#8c8c8c` for secondary clauses. **No colour accents**, no gradients (all tried and removed).
- Everything lowercase (`text-transform`). Fonts self-hosted: **Geist** (text) and **Caveat** (handwriting). No requests to third parties (privacy page says so — keep it true).
- Film grain overlay (`img/grain.png`, generated, not copied) flickers in place, sits above everything.
- **Hero:** "hey, i'm razz." → childhood photo + arrow + handwritten "i've been creating / for as long as i can remember." → indented row (flush with the first handwritten line) with "and i still am." + arrow + today photo → closing sentence with four hand-drawn underlines.
- Handwriting size `--hand`; arrow/underline stroke `--pen` = 6.5 % of it. Every underline on the page has a **unique generated shape** (`newStroke()` in the template).
- Two handwritten buttons ("what i currently do", "check out some of my work") open `<details>` sections. The arrow bends from right to down in sync with the opening (JS arc, 0.32 s, easeOutCubic = CSS `cubic-bezier(.33,1,.68,1)`).
- Inside: label + small round image (`.ico`) + name. Image and name are one hover block, only the name is underlined. Hover shows a card (round image left, title + short text right) that follows the cursor. Hand cursor only on real links. All external links open in a new tab.
- "currently" labels have underlines; the "work" section has none. vibecoding / vibecoded lines are fully grey, no underline.
- Load animation: the whole page arrives in **one smooth wave** (opacity + blur + slight push-down, 1 s each), top to bottom, 0.07 s apart (`--t` on each block, 0.05 s → 0.54 s). No pauses, no second wave — feedback was that the staged version felt slow. Arrows, handwriting and underlines are **not** drawn/written — they arrive with their block. Respect `prefers-reduced-motion`.

## Assets / sources

- Photos: `me-then.jpg` (childhood), `me-now.jpg` (Razz's own edit of `_assets/DSCN1518_2.png`). `_assets/` holds originals and is git-ignored.
- Logos/badges made from Razz's own project folders (RippleEdit, RippleReview, SUG, SUG Packs); FABW logo from filmakademie.de; "RE LAB" badge was built in HTML.
- Halfway House still: MDR / Paul Ader, highlights pulled down (`haus-am-hang-graded.jpg`). Trailer: https://youtu.be/LbID0HTj_wI
- Cover art via Spotify; listener numbers from the SUG deck (Aug 2026); creator follower numbers checked on YouTube/Instagram (Oct 2026). These are static text — update by hand.
- Favicon = round crop of `me-now.jpg` (`favicon-64/512.png`, `apple-touch-icon.png`). Social preview `img/og.png` = hero sentences only (rendered with Playwright).

## Legal

`imprint/` and `privacy/` are final (Emanuel Funck, c/o flexdienst – #11374, Kurt-Schumacher-Straße 76, 67663 Kaiserslautern, +49 1567 9697690). Privacy covers GitHub Pages hosting, local fonts, no tracking. Supervisory authority: LfDI Rheinland-Pfalz.

## Open items

- Imprint image credit still says "Haus am Hang" — maybe "Halfway House (Haus am Hang)".
- Store link points to `7b4b9b.myshopify.com` — swap for the real domain when the store is live (`content.mjs` → `cards.sugStore.href`).
- Optional: verify `madebyrazz.com` in GitHub account settings → Pages (TXT record at Strato) to prevent domain takeover.
- Optional cleanup: remove versions 07/08 and the review switcher once nobody needs them.
