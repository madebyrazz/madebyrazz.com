// Review-only version switcher. Remove this script tag once a direction is chosen.
(() => {
  const ids = ['07', '08', '09'];
  const m = location.pathname.match(/\/(0[7-9])\/(index\.html)?$/);
  if (!m) return;
  const cur = m[1];
  const go = (id) => (location.href = `../${id}/`);

  const bar = document.createElement('nav');
  bar.setAttribute('aria-label', 'Design versions');
  bar.innerHTML =
    `<a href="../" title="Overview">≡</a>` +
    ids.map((id) => `<a href="../${id}/"${id === cur ? ' aria-current="page"' : ''}>${id}</a>`).join('');
  bar.style.cssText =
    'position:fixed;left:12px;bottom:12px;z-index:2147483647;display:flex;gap:1px;' +
    'font:11px/1 ui-monospace,Menlo,monospace;background:#000;border:1px solid #333;padding:1px;mix-blend-mode:normal;';
  for (const a of bar.children) {
    a.style.cssText = 'color:#888;text-decoration:none;padding:7px 8px;letter-spacing:0;text-transform:none;font:inherit;';
    if (a.getAttribute('aria-current')) a.style.cssText += 'background:#e8e4dc;color:#000;';
  }
  let hidden = sessionStorage.getItem('switcher-hidden') === '1';
  const sync = () => (bar.style.display = hidden ? 'none' : 'flex');
  sync();
  document.body.appendChild(bar);

  addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey || /input|textarea/i.test(e.target.tagName)) return;
    const i = ids.indexOf(cur);
    if (ids.includes(`0${e.key}`)) go(`0${e.key}`);
    else if (e.key === 'ArrowRight') go(ids[(i + 1) % ids.length]);
    else if (e.key === 'ArrowLeft') go(ids[(i + ids.length - 1) % ids.length]);
    else if (e.key.toLowerCase() === 'h') {
      hidden = !hidden;
      try { sessionStorage.setItem('switcher-hidden', hidden ? '1' : '0'); } catch {}
      sync();
    }
  });
})();
