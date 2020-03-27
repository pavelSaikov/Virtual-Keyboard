export default function backspaceButtonDown() {
  const textArea = document.querySelector('.text-area');

  const cursorPosition = textArea.selectionStart;
  if (cursorPosition !== 0) textArea.setRangeText('', cursorPosition - 1, cursorPosition, 'end');
}
