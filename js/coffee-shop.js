const quote = document.querySelector('.quote-block blockquote');
if (quote) {
  quote.animate(
    [
      { opacity: 0.82, transform: 'translateY(4px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ],
    {
      duration: 820,
      fill: 'forwards',
      easing: 'ease-out'
    }
  );
}
