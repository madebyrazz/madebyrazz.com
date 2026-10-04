import { img } from '../content.mjs';

// A project name you can hover: shows a small preview that follows the cursor.
// With an href it's also a link.
const p = (label, src, ratio = 16 / 10, cap = '', href = null) => {
  const attrs = `class="p" data-src="${src}" data-ratio="${ratio}"${cap ? ` data-cap="${cap}"` : ''}`;
  return href
    ? `<a ${attrs} href="${href}" target="_blank" rel="noopener">${label}</a>`
    : `<span ${attrs} tabindex="0">${label}</span>`;
};

const list = (items) =>
  items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items.at(-1)}`;

export default {
  name: 'Running text, mobile + desktop',
  idea: 'Super short. Mobile: one narrow column. Desktop: labels left, text right, normal reading width. Plain running text in lowercase, two round photos stacked, every project name hoverable with a small preview that follows the cursor.',
  theme: '#0e0e0d',
  fonts: 'family=Geist:wght@400;500',
  script: true,
  render: (c) => {
    const [film, music, editing, code] = c.currently;
    const f = c.film, m = c.music, r = c.rippleedit, v = c.vibecoded;
    const kurz = f.awards.filter(([o]) => o === 'Kurzsüchtig').map(([, x]) => x);

    return `
<main class="col">

<header class="intro">
  <h1>${c.greeting}</h1>
  <p>${c.hero}</p>
</header>

<section class="me" aria-label="then and now">
  <figure>${img({ ...c.then.img, src: 'img/me-then.jpg', w: 480, h: 480 }, '', 'eager')}<figcaption>${c.then.line}</figcaption></figure>
  <figure>${img({ ...c.now.img, src: 'img/me-now.jpg', w: 640, h: 640 }, '', 'eager')}<figcaption>${c.now.line}</figcaption></figure>
</section>

<section>
  <h2>${c.currentlyLabel}</h2>
  <p><span class="k">${film.label}</span> <span class="yr">${film.years}</span> ${film.role} @ ${film.at}. ${film.lines.join(' ')}</p>
  <p><span class="k">${music.label}</span> <span class="yr">${music.years}</span> ${music.role} @ ${music.at}. ${music.lines.join(' ')}</p>
  <p><span class="k">${editing.label}</span> <span class="yr">${editing.years}</span> ${editing.role} @ ${editing.at}. ${editing.lines.join(' ')}</p>
  <p><span class="k">${code.label}</span> ${code.lines.join(' ')}</p>
</section>

<section>
  <h2>${c.workLabel}</h2>
  <p><span class="k">${f.label}</span> ${p(f.title, f.preview.src, f.preview.ratio, f.preview.credit)}, ${f.meta.toLowerCase()}.
    <span class="dim">${f.awards.filter(([o]) => o !== 'Kurzsüchtig').slice(0, 2).map(([o, x]) => `${o}: ${x}`).join('. ')}. kurzsüchtig: ${list(kurz.map((x) => x.toLowerCase()))}. ${f.awards.at(-1).join(': ')}.</span></p>
  <p><span class="k">${m.label}</span> ${m.about} ${m.intro}: ${m.songs.map((s) => `${p(s.title, s.preview, 1, "", s.href)} <span class="dim">(${s.artist})</span>`).join(', ')}, ${m.more}</p>
  <p><span class="k">${r.label}</span> ${r.intro} ${r.clientsLabel}: ${list(r.clients.map((n) => p(n, r.clientWork[n].preview, 1, '', r.clientWork[n].href)))}.</p>
  <p><span class="k">${v.label}</span> ${v.intro} ${v.websitesLabel}: ${list(v.websites.map((w) => p(w.title, w.preview, 16 / 10, w.meta, w.href)))}. ${v.toolsLabel}: ${v.tools.map((t) => `${p(t.title, t.preview, 16 / 10)} <span class="dim">(${t.meta.replace(/\.$/, '')})</span>`).join(' and ')}.</p>
</section>

<section>
  <p>${c.connect.text} ${c.connect.cta}</p>
  <p class="links">${c.connect.links.map((l) => `<span class="k">${l.label}</span> <a href="${l.href}">${l.value}</a>`).join('<br>')}</p>
</section>

<footer>
  <span>${c.footer.domain}</span>
  <span class="legal"><a href="${c.footer.imprintHref}">${c.footer.imprint}</a><a href="${c.footer.privacyHref}">${c.footer.privacy}</a></span>
</footer>

</main>

<div class="peek" aria-hidden="true"><div class="frame"><img alt=""></div><p></p></div>`;
  },
};
