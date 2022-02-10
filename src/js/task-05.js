const input = document.querySelector('#name-input');
const nameInput = document.querySelector('#name-output');

input.addEventListener('input', onNameInputChange);

function onNameInputChange(event) {
  nameInput.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    nameInput.textContent = 'Anonymous';
  }
}
