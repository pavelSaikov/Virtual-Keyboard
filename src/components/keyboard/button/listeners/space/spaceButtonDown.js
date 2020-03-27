export default function spaceButtonDown() {
  const textArea = document.querySelector('.text-area');

  const cursorPosition = textArea.selectionStart;
  textArea.setRangeText(' ', cursorPosition, cursorPosition, 'end');
}
