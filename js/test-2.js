const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#e91e63', rgb: '233,30,99' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#e91e63', rgb: '233,30,99' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#e91e63', rgb: '233,30,99' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#e91e63', rgb: '233,30,99' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#2196f3', rgb: '33,150,243' },
];

const paletteContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardsMarcup(colors);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

paletteContainer.addEventListener('click', onPaletteContainerClick);

function createColorCardsMarcup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `
  <div class="color-card">
    <div
      class="color-swatch"
      data-hex="${hex}"
      data-rgb="${rgb}"
      style="background-color: ${hex}">
    </div>
    <div calss="color-meta">
      <p>HEX: ${hex}</p>
      <p>RGB: ${rgb}</p>
    </div>
  </div>
  `;
    })
    .join('');
}

function onPaletteContainerClick(e) {
  const isColorSwatchEl = e.target.classList.contains('color-swatch');

  if (!isColorSwatchEl) {
    return;
  }

  const swatchEl = e.target;
  const parentColorCard = swatchEl.closest('.color-card');

  parentColorCard.classList.add('is-active');

  // console.log(e.target.dataset.hex);
}
