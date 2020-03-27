export default function shiftButtonUp() {
  this.state.shiftReleased();
  this.classList.remove('down');
}
