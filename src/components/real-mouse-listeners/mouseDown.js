export default function mouseDown(e) {
  if (e.which === 1) {
    const { target } = e;
    if (target.classList.contains('text-button')) {
      target.classList.toggle('down');
      target.onButtonDown();
    }
  }
}
