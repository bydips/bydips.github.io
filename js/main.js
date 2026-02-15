const yearNodes = document.querySelectorAll('#currentYear');
yearNodes.forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

const revealNodes = document.querySelectorAll('[data-reveal]');
if (revealNodes.length) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );

  revealNodes.forEach((node) => revealObserver.observe(node));
}

const menuToggles = document.querySelectorAll('.menu-toggle');
menuToggles.forEach((button) => {
  const bar = button.closest('.topbar');
  if (!bar) return;

  const menu = bar.querySelector('.menu');
  if (!menu) return;

  button.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
    });
  });
});

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const button = contactForm.querySelector('button[type=\"submit\"]');
    if (!button) return;

    button.disabled = true;
    button.textContent = 'Mengirim...';

    window.setTimeout(() => {
      button.textContent = 'Terima kasih - kami akan menghubungi Anda.';
    }, 800);
  });
}

const parallaxSheet = document.querySelector('.parallax-sheet');
const allowParallax = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

if (parallaxSheet && allowParallax) {
  const speed = Number(parallaxSheet.dataset.parallaxSpeed) || 0.18;
  const maxShift = 84;
  const heroSection = document.querySelector('.hero');
  let ticking = false;

  const updateParallax = () => {
    const heroHeight = heroSection ? heroSection.getBoundingClientRect().height : window.innerHeight;
    const activeRange = Math.max(heroHeight - 120, 260);
    const remaining = Math.max(activeRange - window.scrollY, 0);
    const shift = -Math.min(remaining * speed, maxShift);
    parallaxSheet.style.setProperty('--parallax-y', `${shift}px`);
    ticking = false;
  };

  updateParallax();

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateParallax);
    },
    { passive: true }
  );

  window.addEventListener('resize', () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateParallax);
  });
}
