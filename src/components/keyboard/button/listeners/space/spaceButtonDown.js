export default function spaceButtonDown() {
  if (!this.classList.contains('down')) this.classList.add('down');

  const textArea = document.querySelector('.text-area');

  const cursorPosition = textArea.selectionStart;
  textArea.setRangeText(' ', cursorPosition, cursorPosition, 'end');
}
