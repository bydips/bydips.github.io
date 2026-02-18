/**
 * bydips - Coffee shop landing.
 * Smooth scroll and section reveal animation.
 */

(function () {
  'use strict';

  var links = document.querySelectorAll('a[href^="#"]');
  if (links.length) {
    links.forEach(function (link) {
      link.addEventListener('click', function (event) {
        var targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;

        var target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  var revealSections = document.querySelectorAll('[data-reveal]');
  var revealItems = document.querySelectorAll('[data-reveal-item]');
  var allTargets = Array.prototype.slice.call(revealSections).concat(Array.prototype.slice.call(revealItems));

  if (!allTargets.length) return;

  var page = document.querySelector('.coffee-page');
  if (page) {
    page.classList.add('has-reveal');
  }

  revealSections.forEach(function (section, index) {
    section.style.setProperty('--reveal-delay', Math.min(index * 80, 320) + 'ms');
  });

  revealItems.forEach(function (item, index) {
    item.style.setProperty('--item-delay', (index % 2) * 80 + Math.floor(index / 2) * 35 + 'ms');
  });

  if (!('IntersectionObserver' in window)) {
    allTargets.forEach(function (target) {
      target.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries, io) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });

  allTargets.forEach(function (target) {
    observer.observe(target);
  });
})();
