export default function enterButtonDown() {
  if (!this.classList.contains('down')) this.classList.add('down');

  const textArea = document.querySelector('.text-area');

  const cursorPosition = textArea.selectionStart;
  textArea.setRangeText('\n', cursorPosition, cursorPosition, 'end');

  //   textArea.innerHTML = contentTextArea;
}
