export default function mouseUp(e) {
  const { target } = e;

  if (e.which === 1 && target.classList.contains('text-button')) {
    target.classList.toggle('down');
    target.onButtonUp();
  }
}
