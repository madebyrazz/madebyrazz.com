
// A project name you can hover: shows a small preview that follows the cursor.
// With an href it's also a link.
const p = (label, src, ratio = 16 / 10, cap = '', href = null) => {
  const attrs = `class="p" data-src="${src}" data-ratio="${ratio}"${cap ? ` data-cap="${cap}"` : ''}`;
  return href
    ? `<a ${attrs} href="${href}" target="_blank" rel="noopener">${label}</a>`
    : `<span ${attrs} tabindex="0">${label}</span>`;
};

const HERO = 'Today that means editing films and producing music for a living, building brands and vibecoding.';

const list = (items) =>
  items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items.at(-1)}`;

export default {
  name: 'V8 (based on V7)',
  idea: 'V7 with the new first sentence, the brighter boat photo and hoverable photos.',
  theme: '#000000',
  fonts: '',
  preload: ['fonts/geist.woff2'],
  script: true,
  hero: HERO,
  render: (c) => {
    const [film, music, editing, code] = c.currently;
    const f = c.film, m = c.music, r = c.rippleedit, v = c.vibecoded;
    const kurz = f.awards.filter(([o]) => o === 'Kurzsüchtig').map(([, x]) => x);

    return `
<main class="col">

<header class="intro">
  <h1>${c.greeting}</h1>
  <p><img class="p face" src="img/me-then.jpg" data-src="img/me-then.jpg" data-ratio="1" alt="${c.then.img.alt}" width="480" height="480" tabindex="0"> ${c.then.line}
  <img class="p face" src="img/me-now.jpg" data-src="img/me-now.jpg" data-ratio="1" alt="${c.now.img.alt}" width="640" height="640" tabindex="0"> ${c.now.line}
  ${HERO.replace('editing films', '<strong>editing films</strong>').replace('producing music', '<strong>producing music</strong>').replace('building brands', '<strong>building brands</strong>')}</p>
</header>

<section>
  <h2>${c.currentlyLabel}</h2>
  <p><span class="k">${film.label}</span> <span class="role">${film.role} @ FABW,</span> ${film.lines.join(' ')} <span class="yr">${film.years}</span></p>
  <p><span class="k">${music.label}</span> <span class="role">${music.role} @ ${music.at}.</span> ${music.lines.join(' ')} <span class="yr">${music.years}</span></p>
  <p><span class="k">${editing.label}</span> <span class="role">${editing.role} @ ${editing.at}.</span> ${editing.lines.join(' ')} <span class="yr">${editing.years}</span></p>
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
  <p class="say">${c.connect.text} ${c.connect.cta}</p>
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
