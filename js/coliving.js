/* ==========================================================================
   Coliving Page JavaScript
   ========================================================================== */

(function() {
  'use strict';

  // ==========================================================================
  // Gallery Tabs
  // ==========================================================================

  const tabButtons = document.querySelectorAll('.cl-tab-btn');
  const tabPanels = document.querySelectorAll('.cl-tab-panel');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.dataset.tab;

      // Remove active state from all buttons
      tabButtons.forEach(btn => btn.classList.remove('is-active'));

      // Remove active state from all panels
      tabPanels.forEach(panel => panel.classList.remove('is-active'));

      // Add active state to clicked button
      button.classList.add('is-active');

      // Show corresponding panel
      const targetPanel = document.querySelector(`[data-panel="${targetTab}"]`);
      if (targetPanel) {
        targetPanel.classList.add('is-active');
      }
    });
  });

  // ==========================================================================
  // Mobile Menu Toggle
  // ==========================================================================

  const menuToggle = document.querySelector('.cl-menu-toggle');
  const mobileNav = document.querySelector('.cl-mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.cl-mobile-nav-links a');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileNav.classList.toggle('is-open');
      document.body.style.overflow = isExpanded ? '' : 'hidden';
    });

    // Close menu when clicking on a link
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // ==========================================================================
  // Scroll Reveal Animation
  // ==========================================================================

  const revealElements = document.querySelectorAll('[data-reveal]');
  const revealItems = document.querySelectorAll('[data-reveal-item]');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 80;

    // Reveal sections
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('is-visible');
      }
    });

    // Reveal items immediately (no stagger delay)
    revealItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < windowHeight - revealPoint) {
        item.classList.add('is-visible');
      }
    });
  };

  // Initial check
  revealOnScroll();

  // Listen for scroll
  window.addEventListener('scroll', revealOnScroll, { passive: true });

  // ==========================================================================
  // Smooth Scroll for Navigation Links
  // ==========================================================================

  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================================================================
  // Header Scroll Effect
  // ==========================================================================

  const header = document.querySelector('.cl-header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
    } else {
      header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  }, { passive: true });

})();
