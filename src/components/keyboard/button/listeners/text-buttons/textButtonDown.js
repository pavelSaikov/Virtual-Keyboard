export default function textButtonDown(button) {
  const textArea = document.querySelector('.text-area');

  const cursorPosition = textArea.selectionStart;
  textArea.setRangeText(button.innerText, cursorPosition, cursorPosition, 'end');
}
