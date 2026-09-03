(() => {
  const ctaButton = document.getElementById('cta-button');

  if (!ctaButton) return;

  ctaButton.addEventListener('click', () => {
    ctaButton.textContent = 'Thanks for clicking!';
  });
})();
