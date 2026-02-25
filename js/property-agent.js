/**
 * bydips - Property Agent landing.
 * Smooth scroll, reveal animations, FAQ accordion, testimonial nav, mobile menu.
 */

(function () {
  'use strict';

  // ── Smooth scroll ──
  var links = document.querySelectorAll('a[href^="#"]');
  if (links.length) {
    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var id = link.getAttribute('href');
        if (!id || id === '#') return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Close mobile menu if open
        var header = document.querySelector('.pa-header');
        if (header && header.classList.contains('is-open')) {
          header.classList.remove('is-open');
          var toggle = header.querySelector('.pa-menu-toggle');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // ── Mobile menu toggle ──
  var menuToggle = document.querySelector('.pa-menu-toggle');
  var header = document.querySelector('.pa-header');
  if (menuToggle && header) {
    menuToggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // ── IntersectionObserver for reveal ──
  var revealSections = document.querySelectorAll('[data-reveal]');
  var revealItems = document.querySelectorAll('[data-reveal-item]');
  var allTargets = Array.prototype.slice.call(revealSections)
    .concat(Array.prototype.slice.call(revealItems));

  if (allTargets.length) {
    var page = document.querySelector('.property-agent-page');
    if (page) page.classList.add('has-reveal');

    revealSections.forEach(function (section, i) {
      section.style.setProperty('--reveal-delay', Math.min(i * 80, 320) + 'ms');
    });

    revealItems.forEach(function (item, i) {
      item.style.setProperty('--item-delay', (i % 2) * 80 + Math.floor(i / 2) * 35 + 'ms');
    });

    if (!('IntersectionObserver' in window)) {
      allTargets.forEach(function (t) { t.classList.add('is-visible'); });
    } else {
      var observer = new IntersectionObserver(function (entries, io) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

      allTargets.forEach(function (t) { observer.observe(t); });
    }
  }

  // ── FAQ accordion ──
  var faqItems = document.querySelectorAll('.pa-faq-item');
  if (faqItems.length) {
    faqItems.forEach(function (item) {
      var trigger = item.querySelector('.pa-faq-trigger');
      if (!trigger) return;

      trigger.addEventListener('click', function () {
        var isOpen = item.classList.contains('is-open');

        // Close all
        faqItems.forEach(function (fi) {
          fi.classList.remove('is-open');
          var t = fi.querySelector('.pa-faq-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        });

        // Open clicked (if it wasn't already open)
        if (!isOpen) {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // ── Testimonial carousel ──
  var track = document.querySelector('.pa-testimonials-track');
  var viewport = document.querySelector('.pa-testimonials-viewport');
  var prevBtn = document.querySelector('.pa-testi-prev');
  var nextBtn = document.querySelector('.pa-testi-next');

  if (track && viewport && prevBtn && nextBtn) {
    var cards = track.querySelectorAll('.pa-testimonial-card');
    var currentIndex = 0;
    var gap = 20; // must match CSS gap

    function getVisibleCount() {
      return window.innerWidth > 768 ? 3 : 1;
    }

    function getCardWidth() {
      var visible = getVisibleCount();
      var viewportWidth = viewport.offsetWidth;
      return (viewportWidth - gap * (visible - 1)) / visible;
    }

    function updateCarousel() {
      var cardW = getCardWidth();
      var offset = currentIndex * (cardW + gap);
      track.style.transform = 'translateX(-' + offset + 'px)';
    }

    function goTo(index) {
      var visible = getVisibleCount();
      var maxIndex = Math.max(0, cards.length - visible);
      // Wrap around for infinite loop
      if (index < 0) {
        currentIndex = maxIndex;
      } else if (index > maxIndex) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
      updateCarousel();
    }

    prevBtn.addEventListener('click', function () {
      goTo(currentIndex - 1);
    });

    nextBtn.addEventListener('click', function () {
      goTo(currentIndex + 1);
    });

    // Re-calc on resize
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        goTo(currentIndex);
      }, 150);
    });

    // Init
    track.style.transition = 'transform 0.4s ease';
    updateCarousel();
  }
})();
