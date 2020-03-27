export default function keyUp(e) {
  const { code } = e;
  const domElement = document.querySelector(`.${code}`);
  if (domElement !== null) domElement.onButtonUp();

  //   e.stopPropagation();
  e.preventDefault();
}
