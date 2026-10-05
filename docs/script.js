// Small preview that follows the cursor over project names (image + caption),
// or a small "magnifier" card for fabw / straightupglobal / rippleedit (logo + name + a few lines).
// Touch: first tap shows it, a second tap opens the link (if any).
(() => {
  const peek = document.querySelector('.peek');
  const pic = peek.querySelector('img');
  const cap = peek.querySelector('p');
  const title = peek.querySelector('.info b');
  const desc = peek.querySelector('.info span');
  const GAP = 18;
  let x = 0, y = 0, tx = 0, ty = 0, raf = 0, current = null;

  // preload so the window never opens empty
  document.querySelectorAll('.p').forEach((el) => { new Image().src = el.dataset.src; });

  const place = (cx, cy) => {
    const w = peek.offsetWidth || 140, h = peek.offsetHeight || w;
    tx = cx + GAP + w > innerWidth - 8 ? cx - GAP - w : cx + GAP;
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
    const card = !!el.dataset.title;
    peek.classList.toggle('card', card);
    peek.classList.toggle('wide', el.dataset.shape === 'wide');
    cap.textContent = card ? '' : el.dataset.cap || '';
    title.textContent = card ? el.dataset.title : '';
    desc.textContent = card ? el.dataset.desc : '';
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
        show(el, Math.min(r.left, innerWidth - (peek.offsetWidth || 140) - 16) - GAP, r.bottom + 12 + (peek.offsetHeight || 140) / 2, true);
      }
    });
  }
  addEventListener('scroll', () => current && matchMedia('(hover: hover)').matches && hide(), { passive: true });
  document.addEventListener('pointerdown', (e) => { if (!e.target.closest('.p')) hide(); });
})();

// The arrow next to each handwritten button. One stroke of fixed length that bends around its start:
// closed it points right (with a slight hand-drawn curve), open it points straight down.
// The head travels on a clean arc from right to down; it is always tangent to the stroke.
(() => {
  const X0 = 3, Y0 = 10, L = 24, HEAD = 6.5, SPREAD = 0.62; // start point, stroke length, arrowhead size + opening
  const CLOSED = 0.12, OPEN = Math.PI / 2;                     // total bend (radians)
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // same curve and duration as the section opening (CSS: cubic-bezier(.33,1,.68,1), .32s) so both move as one
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  const f = (n) => +n.toFixed(2);

  // arc of length L starting at (X0,Y0) heading right, turning clockwise (downward) by `bend`
  const shape = (bend) => {
    let x1, y1, shaft;
    if (bend < 1e-4) {
      x1 = X0 + L; y1 = Y0; shaft = `M${X0} ${Y0} L ${f(x1)} ${f(y1)}`;
    } else {
      const r = L / bend;
      x1 = X0 + r * Math.sin(bend);
      y1 = Y0 + r * (1 - Math.cos(bend));
      shaft = `M${X0} ${Y0} A ${f(r)} ${f(r)} 0 0 1 ${f(x1)} ${f(y1)}`;
    }
    // arrowhead: two short strokes pointing back along the tangent
    const a = Math.PI + bend;
    const p1 = [x1 + HEAD * Math.cos(a - SPREAD), y1 + HEAD * Math.sin(a - SPREAD)];
    const p2 = [x1 + HEAD * Math.cos(a + SPREAD), y1 + HEAD * Math.sin(a + SPREAD)];
    const tip = `M${f(p1[0])} ${f(p1[1])} L ${f(x1)} ${f(y1)} L ${f(p2[0])} ${f(p2[1])}`;
    return { shaft, tip };
  };

  for (const details of document.querySelectorAll('details.more')) {
    const shaft = details.querySelector('.go .shaft');
    const tip = details.querySelector('.go .tip');
    let t = details.open ? 1 : 0, raf = 0;
    const draw = () => {
      const s = shape(CLOSED + (OPEN - CLOSED) * ease(t));
      shaft.setAttribute('d', s.shaft);
      tip.setAttribute('d', s.tip);
    };
    draw();
    details.addEventListener('toggle', () => {
      const to = details.open ? 1 : 0;
      cancelAnimationFrame(raf);
      if (reduce) { t = to; draw(); return; }
      const from = t, start = performance.now(), dur = 320 * Math.abs(to - from) || 1;
      const step = (now) => {
        const k = Math.min(1, (now - start) / dur);
        t = from + (to - from) * k;
        draw();
        if (k < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    });
  }
})();

