export default function deleteButtonDown() {
  const textArea = document.querySelector('.text-area');

  const cursorPosition = textArea.selectionStart;
  const textLength = textArea.value.length;
  if (cursorPosition !== textLength) textArea.setRangeText('', cursorPosition, cursorPosition + 1, 'start');
}
