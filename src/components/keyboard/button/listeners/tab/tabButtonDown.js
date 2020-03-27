export default function tabButtonDown() {
  if (!this.classList.contains('down')) this.classList.add('down');
  const textArea = document.querySelector('.text-area');

  let contentTextArea = textArea.innerHTML;
  contentTextArea += '        ';

  textArea.innerHTML = contentTextArea;
}
