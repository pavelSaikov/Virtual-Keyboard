export default function tabButtonDown() {
  const textArea = document.querySelector('.text-area');

  const cursorPosition = textArea.selectionStart;
  textArea.setRangeText('        ', cursorPosition, cursorPosition, 'end');
}
