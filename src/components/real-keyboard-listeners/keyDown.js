export default function keyDown(e) {
  const { code } = e;
  const domElement = document.querySelector(`.${code}`);

  if (domElement !== null && !((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && e.repeat === true)) {
    domElement.onButtonDown();
    if (code === 'CapsLock') {
      domElement.classList.toggle('down');
    } else {
      domElement.classList.add('down');
    }
  }
  e.preventDefault();
}
