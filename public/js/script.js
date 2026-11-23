(() => {

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];

  const loader = $('#loader');

  // Loader
  const hideLoader = () => {
    if (loader) loader.classList.add('done');
  };

  window.addEventListener('load', hideLoader, { once: true });
  setTimeout(hideLoader, 2000);

  // Mobile menu
  const burger = $('#burger');
  const menu = $('#menu');

  if (burger && menu) {
    const closeMenu = () => {
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    };

    burger.addEventListener('click', () => {
      const opened = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(opened));
    });

    menu.addEventListener('click', (e) => {
      if (e.target.closest('a')) closeMenu();
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('#nav')) closeMenu();
    });
  }

  // Reveal on scroll
  const revealItems = $$('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, io) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -25px 0px'
    });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('in'));
  }

  // Active navigation
  if (menu && 'IntersectionObserver' in window) {
    const links = [...menu.querySelectorAll('a[href^="#"]')];

    const sections = $$('main section[id]');

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => {
            const active =
              link.getAttribute('href') === `#${entry.target.id}`;

            link.classList.toggle('active', active);
          });
        }
      });
    }, {
      rootMargin: '-35% 0px -55% 0px'
    });

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }

  // Profile image lightbox
  const lightbox = $('#lightbox');
  const lightboxImage = $('#lbImg');
  const avatarButton = $('#avatarBtn');
  const avatarImage = $('#avatarImg');
  const closeButton = $('#lbClose');

  if (
    lightbox &&
    lightboxImage &&
    avatarButton &&
    avatarImage &&
    closeButton
  ) {
    let lastFocus = null;
    let closeTimer;

    const openLightbox = () => {
      lastFocus = document.activeElement;

      lightboxImage.src =
        avatarImage.currentSrc || avatarImage.src;

      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';

      requestAnimationFrame(() => {
        lightbox.classList.add('open');
        closeButton.focus();
      });
    };

    const closeLightbox = () => {
      if (lightbox.hidden) return;

      lightbox.classList.remove('open');
      document.body.style.overflow = '';

      clearTimeout(closeTimer);

      closeTimer = setTimeout(() => {
        lightbox.hidden = true;

        if (lastFocus && lastFocus.focus) {
          lastFocus.focus();
        }
      }, 220);
    };

    avatarButton.addEventListener('click', openLightbox);
    closeButton.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    });
  }

})();
