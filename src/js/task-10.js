function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('#controls input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

btnCreate.addEventListener('click', onAmountValue);
btnDestroy.addEventListener('click', destroyBoxes);

function onAmountValue() {
  let amount = input.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let size = 30;
  let step = 10;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size + i * step}px`;
    box.style.height = `${size + i * step}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.append(box);
  }
  btnCreate.removeEventListener('click', onAmountValue);
}

function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';
  btnCreate.addEventListener('click', onAmountValue);
}
