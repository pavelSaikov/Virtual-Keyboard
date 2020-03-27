export default function textButtonDown() {
  if (!this.classList.contains('down')) this.classList.add('down');
  const textArea = document.querySelector('.text-area');

  const cursorPosition = textArea.selectionStart;
  textArea.setRangeText(this.innerText, cursorPosition, cursorPosition, 'end');
}
