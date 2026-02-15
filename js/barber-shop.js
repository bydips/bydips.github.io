const barberHero = document.querySelector('.barber-hero');
if (barberHero) {
  window.addEventListener('scroll', () => {
    const shift = Math.min(window.scrollY * 0.08, 14);
    barberHero.style.backgroundPosition = `0 ${shift}px`;
  });
}
