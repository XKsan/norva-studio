(() => {
  const canvas = document.getElementById('universe');
  const ctx = canvas.getContext('2d', { alpha: true });
  let w = 0, h = 0, dpr = 1, stars = [], pointer = { x: 0, y: 0 };
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.6);
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = Math.floor(w * dpr); canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(150, Math.floor((w * h) / 9500));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.15 + .2, a: Math.random() * .45 + .12,
      phase: Math.random() * Math.PI * 2, speed: Math.random() * .004 + .001
    }));
  }
  function draw(t = 0) {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      const twinkle = reduced ? 1 : .72 + Math.sin(t * s.speed + s.phase) * .28;
      const dx = (pointer.x - w / 2) * .006;
      const dy = (pointer.y - h / 2) * .006;
      ctx.beginPath();
      ctx.arc(s.x + dx, s.y + dy, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220,232,235,${s.a * twinkle})`;
      ctx.fill();
    }
    if (!reduced) requestAnimationFrame(draw);
  }
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pointermove', e => { pointer.x = e.clientX; pointer.y = e.clientY; }, { passive: true });
  resize(); draw();

  const menuButton = document.querySelector('.mobile-menu');
  const nav = document.querySelector('.nav');
  menuButton?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? '×' : '＋';
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) menuButton.textContent = '＋';
  }));

  // Subtle pointer parallax on the hero installation; disabled for touch/reduced motion.
  if (!reduced && window.matchMedia('(pointer:fine)').matches) {
    const art = document.querySelector('.hero-art');
    window.addEventListener('pointermove', e => {
      const x = (e.clientX / window.innerWidth - .5) * 7;
      const y = (e.clientY / window.innerHeight - .5) * 7;
      if (art) art.style.transform = `translate(${x}px, calc(-48% + ${y}px))`;
    }, { passive: true });
  }
})();
