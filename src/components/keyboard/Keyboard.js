import './keyboard.scss';

import Button from './button/Button';
import BUTTON_MODELS from './button/button-config.models';
import BUTTON_CLASSES from './button/button-classes.models';
import KEYBOARD_CLASSES from './keyboard.models';

import textButtonDown from './button/listeners/text-buttons/textButtonDown';
import tabButtonDown from './button/listeners/tab/tabButtonDown';
import capsLockButtonDown from './button/listeners/caps-lock/capsLockButtonDown';
import shiftButtonDown from './button/listeners/shift/shiftButtonDown';
import shiftButtonUp from './button/listeners/shift/shiftButtonUp';
import backspaceButtonDown from './button/listeners/backspace/backspaceButtonDown';
import enterButtonDown from './button/listeners/enter/enterButtonDown';
import spaceButtonDown from './button/listeners/space/spaceButtonDown';
import deleteButtonDown from './button/listeners/delete/deleteButtonDown';

class Keyboard {
  constructor(state) {
    this.domElement = document.createElement('div');
    for (let i = 0; i < KEYBOARD_CLASSES.KEYBOARD.length; i += 1) {
      this.domElement.classList.add(KEYBOARD_CLASSES.KEYBOARD[i]);
    }

    this.state = state;
    this.createFirstRow();
    this.domElement.append(this.firstRow);

    this.createSecondRow();
    this.domElement.append(this.secondRow);

    this.createThirdRow();
    this.domElement.append(this.thirdRow);

    this.createFourthRow();
    this.domElement.append(this.fourthRow);

    this.createFifthRow();
    this.domElement.append(this.fifthRow);
  }

  createFirstRow() {
    this.firstRow = Keyboard.createRowDomElement();
    this.firstRow.classList.add('first-row');

    const TILDA = new Button({
      content: BUTTON_MODELS['~'],
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['Backquote'],
    });
    this.firstRow.append(TILDA.getButton());
    const ONE = new Button({
      content: BUTTON_MODELS['1'],
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['Digit1'],
    });
    this.firstRow.append(ONE.getButton());

    const TWO = new Button({
      content: BUTTON_MODELS['2'],
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['Digit2'],
    });
    this.firstRow.append(TWO.getButton());

    const THREE = new Button({
      content: BUTTON_MODELS['3'],
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['Digit3'],
    });
    this.firstRow.append(THREE.getButton());

    const FOUR = new Button({
      content: BUTTON_MODELS['4'],
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['Digit4'],
    });
    this.firstRow.append(FOUR.getButton());

    const FIVE = new Button({
      content: BUTTON_MODELS['5'],
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['Digit5'],
    });
    this.firstRow.append(FIVE.getButton());

    const SIX = new Button({
      content: BUTTON_MODELS['6'],
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['Digit6'],
    });
    this.firstRow.append(SIX.getButton());

    const SEVEN = new Button({
      content: BUTTON_MODELS['7'],
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['Digit7'],
    });
    this.firstRow.append(SEVEN.getButton());

    const EIGHT = new Button({
      content: BUTTON_MODELS['8'],
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['Digit8'],
    });
    this.firstRow.append(EIGHT.getButton());

    const NINE = new Button({
      content: BUTTON_MODELS['9'],
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['Digit9'],
    });
    this.firstRow.append(NINE.getButton());

    const ZERO = new Button({
      content: BUTTON_MODELS['0'],
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['Digit0'],
    });
    this.firstRow.append(ZERO.getButton());

    const MINUS = new Button({
      content: BUTTON_MODELS.MINUS,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['Minus'],
    });
    this.firstRow.append(MINUS.getButton());

    const PLUS = new Button({
      content: BUTTON_MODELS.PLUS,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['Equal'],
    });
    this.firstRow.append(PLUS.getButton());

    const BACKSPACE = new Button({
      content: BUTTON_MODELS.BACKSPACE,
      state: this.state,
      onButtonDown: backspaceButtonDown,
      styleClasses: [...BUTTON_CLASSES.SERVICE_BUTTON, 'Backspace'],
    });
    this.firstRow.append(BACKSPACE.getButton());
  }

  createSecondRow() {
    this.secondRow = Keyboard.createRowDomElement();
    this.secondRow.classList.add('second-row');

    const TAB = new Button({
      content: BUTTON_MODELS.TAB,
      state: this.state,
      onButtonDown: tabButtonDown,
      styleClasses: [...BUTTON_CLASSES.SERVICE_BUTTON, 'Tab'],
    });
    this.secondRow.append(TAB.getButton());

    const Q = new Button({
      content: BUTTON_MODELS.Q,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyQ'],
    });
    this.secondRow.append(Q.getButton());

    const W = new Button({
      content: BUTTON_MODELS.W,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyW'],
    });
    this.secondRow.append(W.getButton());

    const E = new Button({
      content: BUTTON_MODELS.E,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyE'],
    });
    this.secondRow.append(E.getButton());

    const R = new Button({
      content: BUTTON_MODELS.R,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyR'],
    });
    this.secondRow.append(R.getButton());

    const T = new Button({
      content: BUTTON_MODELS.T,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyT'],
    });
    this.secondRow.append(T.getButton());

    const Y = new Button({
      content: BUTTON_MODELS.Y,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyY'],
    });
    this.secondRow.append(Y.getButton());

    const U = new Button({
      content: BUTTON_MODELS.U,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyU'],
    });
    this.secondRow.append(U.getButton());

    const I = new Button({
      content: BUTTON_MODELS.I,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyI'],
    });
    this.secondRow.append(I.getButton());

    const O = new Button({
      content: BUTTON_MODELS.O,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyO'],
    });
    this.secondRow.append(O.getButton());

    const P = new Button({
      content: BUTTON_MODELS.P,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyP'],
    });
    this.secondRow.append(P.getButton());

    const BRACKET_LEFT = new Button({
      content: BUTTON_MODELS['['],
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['BracketLeft'],
    });
    this.secondRow.append(BRACKET_LEFT.getButton());

    const BRACKET_RIGHT = new Button({
      content: BUTTON_MODELS[']'],
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['BracketRight'],
    });
    this.secondRow.append(BRACKET_RIGHT.getButton());

    const BACKSLASH = new Button({
      content: BUTTON_MODELS['\\'],
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['Backslash'],
    });
    this.secondRow.append(BACKSLASH.getButton());

    const DELETE = new Button({
      content: BUTTON_MODELS.DELETE,
      state: this.state,
      onButtonDown: deleteButtonDown,
      styleClasses: [...BUTTON_CLASSES.SERVICE_BUTTON, 'Delete'],
    });
    this.secondRow.append(DELETE.getButton());
  }

  createThirdRow() {
    this.thirdRow = Keyboard.createRowDomElement();
    this.thirdRow.classList.add('third-row');

    const CAPS_LOCK = new Button({
      content: BUTTON_MODELS.CAPSLOCK,
      state: this.state,
      onButtonDown: capsLockButtonDown,
      styleClasses: [...BUTTON_CLASSES.SERVICE_BUTTON, 'CapsLock'],
    });
    this.thirdRow.append(CAPS_LOCK.getButton());

    const A = new Button({
      content: BUTTON_MODELS.A,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyA'],
    });
    this.thirdRow.append(A.getButton());

    const S = new Button({
      content: BUTTON_MODELS.S,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyS'],
    });
    this.thirdRow.append(S.getButton());

    const D = new Button({
      content: BUTTON_MODELS.D,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyD'],
    });
    this.thirdRow.append(D.getButton());

    const F = new Button({
      content: BUTTON_MODELS.F,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyF'],
    });
    this.thirdRow.append(F.getButton());

    const G = new Button({
      content: BUTTON_MODELS.G,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyG'],
    });
    this.thirdRow.append(G.getButton());

    const H = new Button({
      content: BUTTON_MODELS.H,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyH'],
    });
    this.thirdRow.append(H.getButton());

    const J = new Button({
      content: BUTTON_MODELS.J,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyJ'],
    });
    this.thirdRow.append(J.getButton());

    const K = new Button({
      content: BUTTON_MODELS.K,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyK'],
    });
    this.thirdRow.append(K.getButton());

    const L = new Button({
      content: BUTTON_MODELS.L,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyL'],
    });
    this.thirdRow.append(L.getButton());

    const SEMICOLON = new Button({
      content: BUTTON_MODELS[';'],
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['Semicolon'],
    });
    this.thirdRow.append(SEMICOLON.getButton());

    const QUOTE = new Button({
      content: BUTTON_MODELS.QUOTE,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['Quote'],
    });
    this.thirdRow.append(QUOTE.getButton());

    const ENTER = new Button({
      content: BUTTON_MODELS.ENTER,
      state: this.state,
      onButtonDown: enterButtonDown,
      styleClasses: [...BUTTON_CLASSES.SERVICE_BUTTON, 'Enter'],
    });
    this.thirdRow.append(ENTER.getButton());
  }

  createFourthRow() {
    this.fourthRow = Keyboard.createRowDomElement();
    this.fourthRow.classList.add('fourth-row');

    const LEFT_SHIFT = new Button({
      content: BUTTON_MODELS.SHIFT,
      state: this.state,
      onButtonDown: shiftButtonDown,
      onButtonUp: shiftButtonUp,
      styleClasses: [...BUTTON_CLASSES.SERVICE_BUTTON, 'ShiftLeft'],
    });
    this.fourthRow.append(LEFT_SHIFT.getButton());

    const INTL_BACK_SLASH = new Button({
      content: BUTTON_MODELS['\\'],
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['IntlBackslash'],
    });
    this.fourthRow.append(INTL_BACK_SLASH.getButton());

    const Z = new Button({
      content: BUTTON_MODELS.Z,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyZ'],
    });
    this.fourthRow.append(Z.getButton());

    const X = new Button({
      content: BUTTON_MODELS.X,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyX'],
    });
    this.fourthRow.append(X.getButton());

    const C = new Button({
      content: BUTTON_MODELS.C,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyC'],
    });
    this.fourthRow.append(C.getButton());

    const V = new Button({
      content: BUTTON_MODELS.V,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyV'],
    });
    this.fourthRow.append(V.getButton());

    const B = new Button({
      content: BUTTON_MODELS.B,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyB'],
    });
    this.fourthRow.append(B.getButton());

    const N = new Button({
      content: BUTTON_MODELS.N,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyN'],
    });
    this.fourthRow.append(N.getButton());

    const M = new Button({
      content: BUTTON_MODELS.M,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['KeyM'],
    });
    this.fourthRow.append(M.getButton());

    const COMMA = new Button({
      content: BUTTON_MODELS['<'],
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['Comma'],
    });
    this.fourthRow.append(COMMA.getButton());

    const PERIOD = new Button({
      content: BUTTON_MODELS['>'],
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['Period'],
    });
    this.fourthRow.append(PERIOD.getButton());

    const SLASH = new Button({
      content: BUTTON_MODELS['/'],
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: ['Slash'],
    });
    this.fourthRow.append(SLASH.getButton());

    const ARROW_UP = new Button({
      content: BUTTON_MODELS.ARROW_UP,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: [...BUTTON_CLASSES.SERVICE_BUTTON, 'arrow', 'ArrowUp'],
    });
    this.fourthRow.append(ARROW_UP.getButton());

    const RIGHT_SHIFT = new Button({
      content: BUTTON_MODELS.SHIFT,
      state: this.state,
      onButtonDown: shiftButtonDown,
      onButtonUp: shiftButtonUp,
      styleClasses: [...BUTTON_CLASSES.SERVICE_BUTTON, 'ShiftRight'],
    });
    this.fourthRow.append(RIGHT_SHIFT.getButton());
  }

  createFifthRow() {
    this.fifthRow = Keyboard.createRowDomElement();
    this.fifthRow.classList.add('fifth-row');

    const LEFT_CTRL = new Button({
      content: BUTTON_MODELS.CTRL,
      state: this.state,
      styleClasses: [...BUTTON_CLASSES.SERVICE_BUTTON, 'ControlLeft', 'control'],
    });
    this.fifthRow.append(LEFT_CTRL.getButton());

    const LEFT_META = new Button({
      content: BUTTON_MODELS.WIN,
      state: this.state,
      styleClasses: [...BUTTON_CLASSES.SERVICE_BUTTON, 'MetaLeft', 'meta'],
    });
    this.fifthRow.append(LEFT_META.getButton());

    const LEFT_ALT = new Button({
      content: BUTTON_MODELS.ALT,
      state: this.state,
      styleClasses: [...BUTTON_CLASSES.SERVICE_BUTTON, 'AltLeft', 'alt'],
    });
    this.fifthRow.append(LEFT_ALT.getButton());

    const SPACE = new Button({
      content: BUTTON_MODELS.SPACE,
      onButtonDown: spaceButtonDown,
      state: this.state,
      styleClasses: [...BUTTON_CLASSES.SERVICE_BUTTON, 'Space'],
    });
    this.fifthRow.append(SPACE.getButton());

    const RIGHT_ALT = new Button({
      content: BUTTON_MODELS.ALT,
      state: this.state,
      styleClasses: [...BUTTON_CLASSES.SERVICE_BUTTON, 'AltRight', 'alt'],
    });
    this.fifthRow.append(RIGHT_ALT.getButton());

    const ARROW_LEFT = new Button({
      content: BUTTON_MODELS.ARROW_LEFT,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: [...BUTTON_CLASSES.SERVICE_BUTTON, 'ArrowLeft', 'arrow'],
    });
    this.fifthRow.append(ARROW_LEFT.getButton());

    const ARROW_DOWN = new Button({
      content: BUTTON_MODELS.ARROW_DOWN,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: [...BUTTON_CLASSES.SERVICE_BUTTON, 'ArrowDown', 'arrow'],
    });
    this.fifthRow.append(ARROW_DOWN.getButton());

    const ARROW_RIGHT = new Button({
      content: BUTTON_MODELS.ARROW_RIGHT,
      state: this.state,
      onButtonDown: textButtonDown,
      styleClasses: [...BUTTON_CLASSES.SERVICE_BUTTON, 'ArrowRight', 'arrow'],
    });
    this.fifthRow.append(ARROW_RIGHT.getButton());

    const RIGHT_CTRL = new Button({
      content: BUTTON_MODELS.CTRL,
      state: this.state,
      styleClasses: [...BUTTON_CLASSES.SERVICE_BUTTON, 'ControlRight', 'control'],
    });
    this.fifthRow.append(RIGHT_CTRL.getButton());
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
