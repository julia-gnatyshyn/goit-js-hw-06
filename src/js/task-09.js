function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const color = document.querySelector('.color');

changeColorBtn.addEventListener('click', onChangeColor);
function onChangeColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = document.body.style.backgroundColor;
}
