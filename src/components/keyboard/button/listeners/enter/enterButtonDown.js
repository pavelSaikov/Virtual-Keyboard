export default function enterButtonDown() {
  if (!this.classList.contains('down')) this.classList.add('down');

  const textArea = document.querySelector('.text-area');

  let contentTextArea = textArea.innerHTML;
  contentTextArea += '\n';

  textArea.innerHTML = contentTextArea;
}
