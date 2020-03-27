export default function mouseUp(e) {
  const { target } = e;

  if (target.classList.contains('text-button') || target.classList.contains('service-button')) {
    target.onButtonUp();
  }
}
