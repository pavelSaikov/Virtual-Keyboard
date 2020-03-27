export default function keyDown(e) {
  const { code } = e;
  const domElement = document.querySelector(`.${code}`);
  if (domElement !== null) domElement.onButtonDown();

  //   e.stopPropagation();
  e.preventDefault();
}
