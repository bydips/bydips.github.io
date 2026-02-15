/**
 * bydips — Coffee shop landing.
 * CTA scroll to menu.
 */

(function () {
  'use strict';

  var cta = document.getElementById('coffee-cta');
  if (!cta) return;

  var menu = document.getElementById('menu');
  if (menu) {
    cta.addEventListener('click', function (e) {
      e.preventDefault();
      menu.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
})();
