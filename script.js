const cards = document.querySelectorAll('.bogo-card');
cards.forEach(card => {
  const radio = card.querySelector('.card-radio');
  const selectors = card.querySelector('.variant-selectors');
  radio.addEventListener('change', () => {
    cards.forEach(c => {
      c.classList.remove('selected');
      const s = c.querySelector('.variant-selectors');
      if (s) s.style.display = 'none';
    });
    card.classList.add('selected');
    if (selectors) selectors.style.display = 'flex';
  });
});
const initiallyChecked = document.querySelector('.card-radio:checked');
if (initiallyChecked) {
  initiallyChecked.dispatchEvent(new Event('change'));
}
