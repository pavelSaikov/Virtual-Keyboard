export default class Button {
  constructor(properties, classes, state, onButtonDown, onButtonUp) {
    this.state = state;
    this.properties = properties;

    this.domElement = document.createElement('div');
    for (let i = 0; i < classes.length; i += 1) {
      this.domElement.classList.add(classes[i]);
    }
    this.domElement.innerText = this.properties.RU.SHIFT;
    this.domElement.onButtonDown = onButtonDown;
    this.domElement.onButtonUp = onButtonUp;

    // this.state.subscribe((lang, shiftMode) => {
    //   this.domElement.innerText = this.properties[lang][shiftMode];
    // });
  }

  getButton() {
    return this.domElement;
  }
}
