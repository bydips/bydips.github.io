(function () {
  'use strict';

  var grid = document.getElementById('katalog-grid');
  if (!grid) return;

  var cards = grid.querySelectorAll('.katalog-card--live');
  var current = 0;

  function focusCard(index) {
    if (index < 0) index = cards.length - 1;
    if (index >= cards.length) index = 0;
    current = index;
    cards[current].focus();
  }

  grid.addEventListener('keydown', function (e) {
    if (e.target === grid || !grid.contains(e.target)) return;

    var card = Array.prototype.indexOf.call(cards, e.target);
    if (card === -1) return;

    current = card;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      focusCard(current - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      focusCard(current + 1);
    }
  });

  grid.querySelectorAll('.katalog-card--placeholder').forEach(function (card) {
    card.setAttribute('tabindex', '-1');
  });
})();
