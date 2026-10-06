
// A project name you can hover: shows a small preview that follows the cursor.
// With an href it's also a link.
const p = (label, src, ratio = 16 / 10, cap = '', href = null) => {
  const attrs = `class="p" data-src="${src}" data-ratio="${ratio}"${cap ? ` data-cap="${cap}"` : ''}`;
  return href
    ? `<a ${attrs} href="${href}" target="_blank" rel="noopener">${label}</a>`
    : `<span ${attrs} tabindex="0">${label}</span>`;
};

const HERO = 'I edit films and produce music for a living. In between, I build brands and vibecode.';

// Hand-drawn underlines: every one on the page gets its own shape.
// A tiny seeded random generator keeps them stable between builds but never repeats a stroke.
let strokeSeed = 7;
const rand = () => {
  strokeSeed = (strokeSeed + 0x6d2b79f5) | 0;
  let t = Math.imul(strokeSeed ^ (strokeSeed >>> 15), 1 | strokeSeed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const r = (a, b) => +(a + (b - a) * rand()).toFixed(1);
const newStroke = () => {
  // start, a wavy middle, an end that can lift, dip or curl back a little
  const y0 = r(4, 7.5), x0 = r(0.5, 5);
  const c1 = [r(12, 28), r(2.5, 8.5)], c2 = [r(32, 52), r(3, 8.5)], m = [r(55, 68), r(4, 7.5)];
  const c3 = [r(78, 92), r(2.5, 8.5)];
  const end = [r(94, 99.5), r(3, 8)];
  let d = `M${x0} ${y0} C ${c1[0]} ${c1[1]}, ${c2[0]} ${c2[1]}, ${m[0]} ${m[1]} S ${c3[0]} ${c3[1]}, ${end[0]} ${end[1]}`;
  const tail = rand();
  if (tail < 0.3) d += ` q ${r(1, 2.5)} ${r(-1.5, -0.4)} ${r(1.5, 3)} ${r(-2.2, -0.8)}`;      // flicks up
  else if (tail < 0.5) d += ` q ${r(-0.5, 0.8)} ${r(0.6, 1.4)} ${r(-2.5, -1.2)} ${r(0.8, 1.6)}`; // curls back
  return d;
};

const scribble = (text, i) =>
  `<span class="scribble" style="--d:${i}">${text}<svg viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true"><path d="${newStroke()}"/></svg></span>`;

// Small round image inside the running text (logo, still, cover, screenshot).
const ico = (src, alt = '') => `<img class="ico" src="${src}" alt="${alt}" loading="lazy" decoding="async">`;

// Image + name as one hover block. The underline only sits under the text; the preview follows the cursor.
const item = (label, src, href = null, cap = '', card = null) => {
  const wide = card?.shape === 'wide';
  const attrs = `class="p${wide ? ' wide' : ''}" data-src="${src}" data-ratio="${wide ? 16 / 9 : 1}"${wide ? ' data-shape="wide"' : ''}${cap ? ` data-cap="${cap}"` : ''}${card ? ` data-title="${card.title}" data-desc="${card.text}"` : ''}`;
  const inner = `${ico(src)}<span class="t">${label}</span>`;
  return href
    ? `<a ${attrs} href="${href}" target="_blank" rel="noopener">${inner}</a>`
    : `<span ${attrs} tabindex="0">${inner}</span>`;
};

// Organisation (fabw, straightupglobal, rippleedit): hover opens a small "magnifier" card.
const org = (o) => {
  const attrs = `class="p org" data-src="${o.logo}" data-title="${o.name}" data-desc="${o.text}"`;
  const inner = `${ico(o.logo, o.name)}<span class="t">${o.label}</span>`;
  return o.href
    ? `<a ${attrs} href="${o.href}" target="_blank" rel="noopener">${inner}</a>`
    : `<span ${attrs} tabindex="0">${inner}</span>`;
};

// Label with a hand-drawn underline; it draws itself when its section opens.
const lab = (text, i) =>
  `<span class="k">${text}<svg viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true" style="--i:${i}"><path d="${newStroke()}"/></svg></span>`;

// Handwritten button that opens/closes a section. The arrow is drawn by script.js:
// a stroke of fixed length that bends from pointing right (closed) to pointing down (open).
const opener = (label) => `<summary><span class="hand">${label}</span><svg class="go" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path class="shaft" d="M3 10 L 27 12"/><path class="tip" d="M21.5 7 L 27 12 L 21 16.5"/></svg></summary>`;

// Work entry with a hover card; uses the card's image and link when it has them.
const cardItem = (label, card, fallbackImg) => item(label, card.img || fallbackImg, card.href || null, '', card);

const list = (items) =>
  items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items.at(-1)}`;

export default {
  name: 'Hero + expandable sections',
  idea: 'The handwritten hero, then two handwritten buttons that expand “what i currently do” and “some of my work”. All white, small round images in the text.',
  theme: '#0a0a0a',
  fonts: '',
  preload: ['fonts/geist.woff2', 'fonts/caveat.woff2'],
  script: true,
  hero: HERO,
  title: 'razz - editor, producer & creative',
  head: [
    '<link rel="icon" type="image/png" sizes="64x64" href="img/favicon-64.png">',
    '<link rel="icon" type="image/png" sizes="512x512" href="img/favicon-512.png">',
    '<link rel="apple-touch-icon" href="img/apple-touch-icon.png">',
    '<meta property="og:type" content="website">',
    '<meta property="og:url" content="https://madebyrazz.com/">',
    '<meta property="og:title" content="razz - editor, producer & creative">',
    '<meta property="og:description" content="i edit films and produce music for a living. in between, i build brands and vibecode.">',
    '<meta property="og:image" content="https://madebyrazz.com/img/og.png">',
    '<meta property="og:image:width" content="1200">',
    '<meta property="og:image:height" content="630">',
    '<meta name="twitter:card" content="summary_large_image">',
    '<meta name="twitter:image" content="https://madebyrazz.com/img/og.png">',
  ].join('\n'),
  render: (c) => {
    const [film, music, editing, code] = c.currently;
    const f = c.film, m = c.music, r = c.rippleedit, v = c.vibecoded;
    const kurz = f.awards.filter(([o]) => o === 'Kurzsüchtig').map(([, x]) => x);

    return `
<div class="grain" aria-hidden="true"></div>

<main class="col">

<header class="intro">
  <h1 class="in" style="--t:.05s">${c.greeting}</h1>
  <figure class="row then in" style="--t:.12s">
    <img class="p face" src="img/me-then.jpg" data-src="img/me-then.jpg" data-ratio="1" alt="${c.then.img.alt}" width="480" height="480" tabindex="0">
    <svg class="arrow" viewBox="0 0 48 28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path class="draw" d="M44 9 C 32 4, 18 8, 6 17"/><path class="draw tip" d="M15.5 17.5 L 6 17.5 L 10 8.5"/></svg>
    <figcaption class="hand">i've been creating<br>for as long as i can remember.</figcaption>
  </figure>
  <figure class="row now in" style="--t:.19s">
    <figcaption class="hand">${c.now.line}</figcaption>
    <svg class="arrow" viewBox="0 0 48 28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path class="draw" d="M4 18 C 16 24, 30 22, 42 12"/><path class="draw tip" d="M39.5 21.5 L 42 12 L 32.5 11.5"/></svg>
    <img class="p face" src="img/me-now.jpg" data-src="img/me-now.jpg" data-ratio="1" alt="${c.now.img.alt}" width="640" height="640" tabindex="0">
  </figure>
  <p class="today in" style="--t:.26s">${['edit films', 'produce music', 'build brands', 'vibecode'].reduce((t, w, i) => t.replace(w, scribble(w, i)), HERO)}</p>
</header>

<details class="more in" style="--t:.33s">
  ${opener('what i currently do')}
  <div class="body">
    <p>${lab('film:', 0)} full-time film editing student @ ${org(c.orgs.fabw)}, <span class="dim">one of the world's leading film schools.</span></p>
    <p>${lab('music:', 1)} co-founder @ ${org(c.orgs.sug)}, <span class="dim">multi-platinum producer / sample maker.</span></p>
    <p>${lab('editing:', 2)} founder @ ${org(c.orgs.rippleedit)}, <span class="dim">working with the biggest creators in music production.</span></p>
    <p class="quiet"><span class="k">vibecoding:</span> ${code.lines.join(' ')}</p>
  </div>
</details>

<details class="more in" style="--t:.4s">
  ${opener('check out some of my work')}
  <div class="body">
    <p><span class="k">one of the films i edited:</span> ${cardItem('halfway house', c.cards.hausAmHang, f.preview.src)}. <span class="dim">${f.awards.filter(([o]) => o !== 'Kurzsüchtig').slice(0, 2).map(([o, x]) => `${o}: ${x}`).join('. ')}. kurzsüchtig: ${list(kurz.map((x) => x.toLowerCase()))}. ${f.awards.at(-1).join(': ')}.</span></p>
    <p><span class="k">songs my team and i produced:</span> ${m.songs.map((s) => `${item(s.title, s.preview, s.href, '', c.cards[s.title])} <span class="dim">(${s.artist})</span>`).join(', ')}, <span class="dim">${m.more}</span></p>
    <p><span class="k">creators i edit for:</span> ${list(r.clients.map((n) => item(n, r.clientWork[n].preview, r.clientWork[n].href, '', c.cards[n])))}.</p>
    <p class="quiet"><span class="k">websites i vibecoded:</span> ${list([
      cardItem('rippleedit', c.cards.rippleeditSite),
      cardItem('fukagawa fine dining', c.cards.fukagawa, v.websites[1].preview),
      cardItem('straightupglobal', c.cards.sugStore),
    ])}.</p>
    <p class="quiet"><span class="k">tools i vibecoded:</span> ${list([
      cardItem('ripplereview', c.cards.rippleReview),
      cardItem('ripplelab', c.cards.rippleLab),
      cardItem('sug packs', c.cards.sugPacks),
    ])}.</p>
  </div>
</details>

<section class="in" style="--t:.47s">
  <p class="say">${c.connect.text} ${c.connect.cta}</p>
  <p class="links">${c.connect.links.map((l) => `<span class="k">${l.label}</span> <a href="${l.href}"${l.href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${l.value}</a>`).join('<br>')}</p>
</section>

<footer class="in" style="--t:.54s">
  <span class="legal"><a href="${c.footer.imprintHref}">${c.footer.imprint}</a><a href="${c.footer.privacyHref}">${c.footer.privacy}</a></span>
</footer>

</main>

<div class="peek" aria-hidden="true"><div class="frame"><img alt=""></div><p></p><div class="info"><b></b><span></span></div></div>`;
  },
};
