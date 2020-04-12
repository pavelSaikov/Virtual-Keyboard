export default function enterButtonDown() {
  const textArea = document.querySelector('.text-area');

  const cursorPosition = textArea.selectionStart;
  textArea.setRangeText('\n', cursorPosition, cursorPosition, 'end');
}
