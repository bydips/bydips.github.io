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

const topbars = document.querySelectorAll('.topbar');
if (topbars.length) {
  const threshold = 12;
  let ticking = false;

  const updateTopbarState = () => {
    const scrolled = window.scrollY > threshold;
    topbars.forEach((bar) => {
      bar.classList.toggle('is-scrolled', scrolled);
    });
    ticking = false;
  };

  updateTopbarState();

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateTopbarState);
    },
    { passive: true }
  );

  window.addEventListener('resize', updateTopbarState);
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
  const button = contactForm.querySelector('button[type="submit"]');
  const statusNode = contactForm.querySelector('#form-status');
  const defaultButtonLabel = button ? button.textContent : 'Kirim';

  const setStatus = (message, state) => {
    if (!statusNode) return;
    statusNode.textContent = message;
    statusNode.classList.remove('is-info', 'is-success', 'is-error');
    if (state) statusNode.classList.add(state);
  };

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!button) return;

    const formData = new FormData(contactForm);
    const botcheckValue = String(formData.get('botcheck') || '').trim();
    if (botcheckValue) {
      setStatus('Pengiriman gagal. Coba lagi.', 'is-error');
      return;
    }

    button.disabled = true;
    button.textContent = 'Mengirim...';
    setStatus('Sedang mengirim pesan Anda...', 'is-info');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      let payload = {};
      try {
        payload = await response.json();
      } catch (parseError) {
        payload = {};
      }

      const isSuccess = response.ok && payload.success !== false;
      if (!isSuccess) {
        throw new Error(payload.message || 'Pengiriman gagal');
      }

      setStatus('Pesan berhasil terkirim. Terima kasih, kami akan segera menghubungi Anda.', 'is-success');
      console.log('GENERATE LEAD TRIGGERED');

if (typeof gtag === 'function') {
  gtag('event', 'generate_lead', {
    form_name: 'contact_form'
  });
}

      contactForm.reset();
    } catch (error) {
      setStatus('Pesan belum terkirim. Silakan coba lagi dalam beberapa saat.', 'is-error');
    } finally {
      button.disabled = false;
      button.textContent = defaultButtonLabel;
    }
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
