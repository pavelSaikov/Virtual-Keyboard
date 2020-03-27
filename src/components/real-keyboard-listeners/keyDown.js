export default function keyDown(e) {
  //   if (e.ctrlKey) {
  //     console.log('change language');
  //   }
  const { code } = e;
  const domElement = document.querySelector(`.${code}`);
  if (domElement !== null) domElement.onButtonDown();

  //   e.stopPropagation();
  e.preventDefault();
}
