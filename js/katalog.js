const katalogCards = document.querySelectorAll('.katalog-card');

katalogCards.forEach((card, index) => {
  card.style.setProperty('--delay', `${index * 50}ms`);

  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-3px)';
    card.style.transition = 'transform 0.2s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});
