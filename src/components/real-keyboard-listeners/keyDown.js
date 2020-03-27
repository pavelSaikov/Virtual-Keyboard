export default function keyDown(e) {
  const { code } = e;
  const domElement = document.querySelector(`.${code}`);

  if (domElement !== null && !((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && e.repeat === true)) {
    domElement.onButtonDown();
    domElement.classList.toggle('down');
  }
  e.preventDefault();
}
