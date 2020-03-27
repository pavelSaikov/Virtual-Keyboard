export default function textButtonDown() {
  if (!this.classList.contains('down')) this.classList.add('down');
  const textArea = document.querySelector('.text-area');

  let contentTextArea = textArea.innerHTML;
  contentTextArea += this.innerHTML;

  textArea.innerHTML = contentTextArea;
}
