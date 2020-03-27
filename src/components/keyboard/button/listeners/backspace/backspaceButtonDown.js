export default function backspaceButtonDown() {
  if (!this.classList.contains('down')) this.classList.add('down');

  const textArea = document.querySelector('.text-area');

  let contentTextArea = textArea.innerHTML;
  if (contentTextArea.length !== 0) {
    contentTextArea = contentTextArea.substr(0, contentTextArea.length - 1);
  }

  textArea.innerHTML = contentTextArea;
}
