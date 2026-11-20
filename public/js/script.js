(() => {
  'use strict';
  const $ = (s) => document.querySelector(s);
  const hide = () => $('#loader').classList.add('done');
  window.addEventListener('load', () => setTimeout(hide, 250));
  setTimeout(hide, 2500);

  /* Menu mobile */
  const burger = $('#burger'), menu = $('#menu');
  const closeMenu = () => { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); };
  burger.addEventListener('click', () => { const o = menu.classList.toggle('open'); burger.setAttribute('aria-expanded', o); });
  menu.addEventListener('click', (e) => e.target.closest('a') && closeMenu());
  document.addEventListener('click', (e) => { if (!e.target.closest('#nav')) closeMenu(); });

  /* Reveal saat scroll + menu aktif */
  const links = [...menu.querySelectorAll('a')];
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((en) => en.forEach((x) => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { threshold: .12 });
    items.forEach((n) => io.observe(n));
    const so = new IntersectionObserver((en) => en.forEach((x) => {
      if (x.isIntersecting) links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${x.target.id}`));
    }), { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach((s) => so.observe(s));
  } else items.forEach((n) => n.classList.add('in'));

  /* Tilt 3D ringan (desktop dengan mouse saja) */
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches;
  if (fine) {
    document.querySelectorAll('.project,.skill,.lang,.hero-photo').forEach((n) => {
      const max = +(n.dataset.tiltMax || 6);
      n.addEventListener('pointermove', (e) => {
        const r = n.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        n.classList.add('tilting');
        requestAnimationFrame(() => { n.style.setProperty('--ry', `${x * max * 2}deg`); n.style.setProperty('--rx', `${-y * max * 2}deg`); });
      });
      n.addEventListener('pointerleave', () => { n.classList.remove('tilting'); n.style.setProperty('--rx', '0deg'); n.style.setProperty('--ry', '0deg'); });
    });
  }

  /* Lightbox foto profil */
  const lb = $('#lightbox'), lbImg = $('#lbImg'), src = $('#avatarImg');
  let last;
  const open = () => { last = document.activeElement; lbImg.src = src.currentSrc || src.src; lb.hidden = false; requestAnimationFrame(() => lb.classList.add('open')); document.body.style.overflow = 'hidden'; $('#lbClose').focus(); };
  const close = () => { lb.classList.remove('open'); document.body.style.overflow = ''; setTimeout(() => { lb.hidden = true; last && last.focus(); }, 350); };
  $('#avatarBtn').addEventListener('click', open);
  $('#lbClose').addEventListener('click', close);
  lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !lb.hidden) close(); });
})();
