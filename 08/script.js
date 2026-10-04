// Small preview window that follows the cursor over project names.
// Touch: first tap shows the preview, a second tap opens the link (if any).
(() => {
  const peek = document.querySelector('.peek');
  const pic = peek.querySelector('img');
  const cap = peek.querySelector('p');
  const W = () => peek.offsetWidth || 120, GAP = 18;
  let x = 0, y = 0, tx = 0, ty = 0, raf = 0, current = null;

  // preload so the window never opens empty
  document.querySelectorAll('.p').forEach((el) => { new Image().src = el.dataset.src; });

  const place = (cx, cy) => {
    const h = W() + (cap.textContent ? 24 : 0);
    tx = cx + GAP + W() > innerWidth - 8 ? cx - GAP - W() : cx + GAP;
    ty = Math.min(Math.max(cy - h / 2, 8), innerHeight - h - 8);
  };
  const loop = () => {
    x += (tx - x) * 0.22; y += (ty - y) * 0.22;
    peek.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.3 ? requestAnimationFrame(loop) : 0;
  };
  const kick = () => { if (!raf) raf = requestAnimationFrame(loop); };

  const show = (el, cx, cy, snap) => {
    current?.classList.remove('on');
    current = el;
    el.classList.add('on');
    pic.src = el.dataset.src;
    cap.textContent = el.dataset.cap || '';
    place(cx, cy);
    if (snap) { x = tx; y = ty; }
    kick();
    peek.classList.add('on');
  };
  const hide = () => {
    current?.classList.remove('on');
    current = null;
    peek.classList.remove('on');
  };

  for (const el of document.querySelectorAll('.p')) {
    el.addEventListener('pointerenter', (e) => {
      if (e.pointerType === 'touch') return;
      show(el, e.clientX, e.clientY, !peek.classList.contains('on'));
    });
    el.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'touch' || current !== el) return;
      place(e.clientX, e.clientY);
      kick();
    });
    el.addEventListener('pointerleave', (e) => e.pointerType !== 'touch' && hide());
    el.addEventListener('focus', () => {
      if (current === el) return;
      const r = el.getBoundingClientRect();
      show(el, r.right, r.top + r.height / 2, true);
    });
    el.addEventListener('blur', hide);
    el.addEventListener('click', (e) => {
      if (e.pointerType !== 'touch' && matchMedia('(hover: hover)').matches) return;
      if (current !== el) {
        e.preventDefault();
        const r = el.getBoundingClientRect();
        const h = W();
        show(el, Math.min(r.left, innerWidth - W() - 16) - GAP, r.bottom + 12 + h / 2, true);
      }
    });
  }
  addEventListener('scroll', () => current && matchMedia('(hover: hover)').matches && hide(), { passive: true });
  document.addEventListener('pointerdown', (e) => { if (!e.target.closest('.p')) hide(); });
})();

