export default function capsLockButtonDown() {
  if (!this.classList.contains('down')) this.classList.add('down');
  else this.classList.remove('down');

  this.state.changeShiftMode();
}
