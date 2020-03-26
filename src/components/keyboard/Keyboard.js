import Button from './button/Button';
import BUTTON_MODELS from './button/button-config.models';
import BUTTON_CLASSES from './button/button-classes.models';
import KEYBOARD_CLASSES from './keyboard.models';

function buttonDown() {
  console.log('button-down');
}

function buttonUp() {
  console.log('button-up');
}

class Keyboard {
  constructor(status) {
    this.domElement = document.createElement('div');
    for (let i = 0; i < KEYBOARD_CLASSES.KEYBOARD.length; i += 1) {
      this.domElement.classList.add(KEYBOARD_CLASSES.KEYBOARD[i]);
    }

    this.status = status;
    this.createFirstRow();
    this.domElement.append(this.firstRow);

    // this.createSecondRow();
    // this.domElement.append(this.secondRow);

    // createThirdRow();
    // createFourthRow();
    // createFifthRow();
  }

  createFirstRow() {
    this.firstRow = Keyboard.createRowDomElement();
    for (let i = 0; i < KEYBOARD_CLASSES.ROW.length; i += 1) {
      this.firstRow.classList.add(KEYBOARD_CLASSES.ROW[i]);
    }

    const TILDA = new Button(BUTTON_MODELS['~'], BUTTON_CLASSES.TEXT_BUTTON, buttonDown, buttonUp);
    this.firstRow.append(TILDA.getButton());

    const ONE = new Button(BUTTON_MODELS['1'], BUTTON_CLASSES.TEXT_BUTTON, buttonDown, buttonUp);
    this.firstRow.append(ONE.getButton());

    // return firstRow;
  }

  static createRowDomElement() {
    const row = document.createElement('div');
    for (let i = 0; i < KEYBOARD_CLASSES.ROW.length; i += 1) {
      row.classList.add(KEYBOARD_CLASSES.ROW[i]);
    }
    return row;
  }

  getKeyboard() {
    return this.domElement;
  }
}

export default Keyboard;
