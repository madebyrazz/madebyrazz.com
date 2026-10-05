// node build.mjs — renders every version from content.mjs into NN/index.html
import { writeFileSync, existsSync, readFileSync, rmSync, mkdirSync, cpSync } from 'node:fs';
import { content } from './content.mjs';

const ids = ['07', '08', '09'];
const versions = [];

for (const id of ids) {
  if (!existsSync(`./${id}/template.mjs`)) continue;
  const v = (await import(`./${id}/template.mjs`)).default;
  versions.push({ id, ...v });

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${v.title ?? 'Razz — madebyrazz.com'}</title>
<meta name="description" content="${v.hero ?? content.hero}">
<meta name="theme-color" content="${v.theme}">
${v.fonts ? `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?${v.fonts}&display=swap">
` : ''}${v.preload ? v.preload.map((f) => `<link rel="preload" href="${f}" as="font" type="font/woff2" crossorigin>
`).join('') : ''}<link rel="stylesheet" href="style.css">${v.head ? '\n' + v.head : ''}
<script>document.documentElement.classList.add('js')</script>
</head>
<body>
${v.render(content).trim()}
${v.script ? `<script src="script.js" defer></script>` : ''}
<script src="../shared/switcher.js" defer></script>
</body>
</html>
`;
  writeFileSync(`./${id}/index.html`, html);
  console.log(`built ${id} — ${v.name}`);
}

// Overview page for comparing the directions (not part of the final site)
const overview = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>madebyrazz.com — directions</title>
<style>
  :root { color-scheme: dark; }
  body { margin: 0; background: #0b0b0b; color: #d8d4cc; font: 15px/1.5 ui-monospace, Menlo, monospace; }
  main { max-width: 760px; margin: 0 auto; padding: 12vh 20px; }
  h1 { font-size: 15px; font-weight: 400; color: #77736b; margin: 0 0 6vh; }
  a { display: grid; grid-template-columns: 3ch 1fr; gap: 0 2ch; padding: 22px 0; border-top: 1px solid #222; color: inherit; text-decoration: none; }
  a:last-child { border-bottom: 1px solid #222; }
  a:hover strong { color: #fff; }
  strong { font-weight: 400; }
  p { grid-column: 2; margin: 6px 0 0; color: #77736b; max-width: 60ch; }
</style>
</head>
<body>
<main>
<h1>madebyrazz.com — directions. Inside each version: keys 7–9 or ←/→ to switch, H hides the switcher.</h1>
${versions.map((v) => `<a href="${v.id}/"><span>${v.id}</span><strong>${v.name}</strong><p>${v.idea}</p></a>`).join('\n')}
</main>
</body>
</html>
`;
writeFileSync('./index.html', overview);
console.log('built overview');

// ---------- publish: the live site for GitHub Pages lives in docs/ ----------
// V09 becomes the homepage, next to the imprint and privacy pages. No review switcher, links fixed for the root.
const LIVE = '09';
rmSync('./docs', { recursive: true, force: true });
mkdirSync('./docs', { recursive: true });
for (const f of ['style.css', 'script.js']) if (existsSync(`./${LIVE}/${f}`)) cpSync(`./${LIVE}/${f}`, `./docs/${f}`);
for (const d of ['img', 'fonts']) if (existsSync(`./${LIVE}/${d}`)) cpSync(`./${LIVE}/${d}`, `./docs/${d}`, { recursive: true });
const page = readFileSync(`./${LIVE}/index.html`, 'utf8')
  .replace('<script src="../shared/switcher.js" defer></script>\n', '')
  .replaceAll('href="../imprint/"', 'href="imprint/"')
  .replaceAll('href="../privacy/"', 'href="privacy/"');
if (page.includes('../')) throw new Error('docs/index.html still points outside the site');
writeFileSync('./docs/index.html', page);
cpSync('./imprint', './docs/imprint', { recursive: true });
cpSync('./privacy', './docs/privacy', { recursive: true });
mkdirSync('./docs/shared', { recursive: true });
cpSync('./shared/legal.css', './docs/shared/legal.css');
writeFileSync('./docs/CNAME', 'madebyrazz.com\n');
writeFileSync('./docs/.nojekyll', '');
console.log(`published ${LIVE} to docs/`);
