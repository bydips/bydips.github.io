/**
 * bydips — Barber shop landing.
 * CTA scroll, optional booking hook.
 */

(function () {
  'use strict';

  var cta = document.getElementById('barber-cta');
  if (!cta) return;

  var booking = document.getElementById('booking');
  if (booking) {
    cta.addEventListener('click', function (e) {
      e.preventDefault();
      booking.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  // If no #booking section, link can be replaced with external URL or form in production
})();
