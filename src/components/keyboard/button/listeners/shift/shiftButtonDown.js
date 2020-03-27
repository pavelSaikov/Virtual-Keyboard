export default function shiftButtonDown() {
  if (!this.classList.contains('down')) this.classList.add('down');
  this.classList.add('down');

  this.state.shiftPressed();
}
