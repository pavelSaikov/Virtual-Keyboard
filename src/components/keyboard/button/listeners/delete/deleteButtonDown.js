export default function deleteButtonDown() {
  if (!this.classList.contains('down')) this.classList.add('down');

  const textArea = document.querySelector('.text-area');

  const cursorPosition = textArea.selectionStart;
  const textLength = textArea.value.length;
  if (cursorPosition !== textLength) textArea.setRangeText('', cursorPosition, cursorPosition + 1, 'start');
}
