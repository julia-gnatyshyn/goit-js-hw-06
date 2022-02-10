const inputFontSize = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');

inputFontSize.addEventListener('input', onChangeInputFontSize);

function onChangeInputFontSize(event) {
  inputText.style.fontSize = `${event.currentTarget.value}px`;
}
