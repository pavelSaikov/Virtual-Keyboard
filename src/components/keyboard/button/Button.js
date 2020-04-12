import './buttons.scss';


export default class Button {
  constructor({
    content,
    state,
    onButtonDown = (b) => b,
    onButtonUp = (b) => b,
    styleClasses,
  }) {
    this.domElement = document.createElement('div');
    this.domElement.classList.add('text-button');

    if (styleClasses) {
      this.domElement.classList.add(...styleClasses);
    }

    this.domElement.onButtonDown = () => onButtonDown(this.domElement);
    this.domElement.onButtonUp = () => onButtonUp(this.domElement);

    state.subscribe(({ lang, shiftMode }) => {
      this.domElement.innerHTML = content[lang][shiftMode];
    });
  }

  getButton() {
    return this.domElement;
  }
}
