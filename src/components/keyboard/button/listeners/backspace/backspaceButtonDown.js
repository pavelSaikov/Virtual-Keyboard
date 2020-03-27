export default function backspaceButtonDown() {
  if (!this.classList.contains('down')) this.classList.add('down');

  const textArea = document.querySelector('.text-area');

  const cursorPosition = textArea.selectionStart;
  if (cursorPosition !== 0) textArea.setRangeText('', cursorPosition - 1, cursorPosition, 'end');
}
