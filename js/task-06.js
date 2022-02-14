const formInput = document.querySelector('#validation-input');
const inputLength = document.querySelector('[data-length]');

formInput.addEventListener('blur', onCheckInputLength);

function onCheckInputLength(event) {
  formInput.classList.add('invalid');
  if (event.currentTarget.value.length === Number(inputLength.dataset.length)) {
    formInput.classList.replace('invalid', 'valid');
  }
}
