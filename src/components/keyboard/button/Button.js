export default class Button {
  constructor(properties, state, onButtonDown, onButtonUp, ...classes) {
    this.properties = properties;

    this.domElement = document.createElement('div');
    for (let i = 0; i < classes.length; i += 1) {
      this.domElement.classList.add(classes[i]);
    }

    this.domElement.innerHTML = this.properties.RU.SHIFT_OFF;
    this.domElement.onButtonDown = onButtonDown;
    this.domElement.onButtonUp = onButtonUp;
    this.domElement.state = state;

    state.subscribe(({ lang, shiftMode }) => {
      this.domElement.innerHTML = this.properties[lang][shiftMode];
    });
  }

  getButton() {
    return this.domElement;
  }
}
