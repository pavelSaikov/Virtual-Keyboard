export default function keyUp(e) {
  const { code } = e;
  const domElement = document.querySelector(`.${code}`);
  if (domElement !== null) {
    domElement.onButtonUp();
    if (code !== 'CapsLock') {
      domElement.classList.remove('down');
    }
  }
  e.preventDefault();
}
