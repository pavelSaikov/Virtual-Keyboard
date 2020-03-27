import Button from './button/Button';
import BUTTON_MODELS from './button/button-config.models';
import BUTTON_CLASSES from './button/button-classes.models';
import KEYBOARD_CLASSES from './keyboard.models';

import textButtonDown from './button/listeners/text-buttons/textButtonDown';
import tabButtonDown from './button/listeners/tab/tabButtonDown';
import capsLockButtonDown from './button/listeners/caps-lock/capsLockButtonDown';
import capsLockButtonUp from './button/listeners/caps-lock/capsLockButtonUp';
import shiftButtonDown from './button/listeners/shift/shiftButtonDown';
import shiftButtonUp from './button/listeners/shift/shiftButtonUp';
import backspaceButtonDown from './button/listeners/backspace/backspaceButtonDown';
import enterButtonDown from './button/listeners/enter/enterButtonDown';
import spaceButtonDown from './button/listeners/space/spaceButtonDown';
import deleteButtonDown from './button/listeners/delete/deleteButtonDown';
import emptyButtonDown from './button/listeners/empty-buttons/emptyButtonDown';
import defaultButtonUp from './button/listeners/defaultButtonUp';

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

    const TILDA = new Button(
      BUTTON_MODELS['~'],
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'Backquote',
    );
    this.firstRow.append(TILDA.getButton());

    const ONE = new Button(
      BUTTON_MODELS['1'],
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'Digit1',
    );
    this.firstRow.append(ONE.getButton());

    const TWO = new Button(
      BUTTON_MODELS['2'],
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'Digit2',
    );
    this.firstRow.append(TWO.getButton());

    const THREE = new Button(
      BUTTON_MODELS['3'],
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'Digit3',
    );
    this.firstRow.append(THREE.getButton());

    const FOUR = new Button(
      BUTTON_MODELS['4'],
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'Digit4',
    );
    this.firstRow.append(FOUR.getButton());

    const FIVE = new Button(
      BUTTON_MODELS['5'],
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'Digit5',
    );
    this.firstRow.append(FIVE.getButton());

    const SIX = new Button(
      BUTTON_MODELS['6'],
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'Digit6',
    );
    this.firstRow.append(SIX.getButton());

    const SEVEN = new Button(
      BUTTON_MODELS['7'],
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'Digit7',
    );
    this.firstRow.append(SEVEN.getButton());

    const EIGHT = new Button(
      BUTTON_MODELS['8'],
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'Digit8',
    );
    this.firstRow.append(EIGHT.getButton());

    const NINE = new Button(
      BUTTON_MODELS['9'],
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'Digit9',
    );
    this.firstRow.append(NINE.getButton());

    const ZERO = new Button(
      BUTTON_MODELS['0'],
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'Digit0',
    );
    this.firstRow.append(ZERO.getButton());

    const MINUS = new Button(
      BUTTON_MODELS.MINUS,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'Minus',
    );
    this.firstRow.append(MINUS.getButton());

    const PLUS = new Button(
      BUTTON_MODELS.PLUS,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'Equal',
    );
    this.firstRow.append(PLUS.getButton());

    const BACKSPACE = new Button(
      BUTTON_MODELS.BACKSPACE,
      this.state,
      backspaceButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.SERVICE_BUTTON,
      'Backspace',
    );
    this.firstRow.append(BACKSPACE.getButton());
  }

  createSecondRow() {
    this.secondRow = Keyboard.createRowDomElement();
    this.secondRow.classList.add('second-row');

    const TAB = new Button(
      BUTTON_MODELS.TAB,
      this.state,
      tabButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.SERVICE_BUTTON,
      'Tab',
    );
    this.secondRow.append(TAB.getButton());

    const Q = new Button(
      BUTTON_MODELS.Q,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyQ',
    );
    this.secondRow.append(Q.getButton());

    const W = new Button(
      BUTTON_MODELS.W,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyW',
    );
    this.secondRow.append(W.getButton());

    const E = new Button(
      BUTTON_MODELS.E,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyE',
    );
    this.secondRow.append(E.getButton());

    const R = new Button(
      BUTTON_MODELS.R,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyR',
    );
    this.secondRow.append(R.getButton());

    const T = new Button(
      BUTTON_MODELS.T,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyT',
    );
    this.secondRow.append(T.getButton());

    const Y = new Button(
      BUTTON_MODELS.Y,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyY',
    );
    this.secondRow.append(Y.getButton());

    const U = new Button(
      BUTTON_MODELS.U,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyU',
    );
    this.secondRow.append(U.getButton());

    const I = new Button(
      BUTTON_MODELS.I,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyI',
    );
    this.secondRow.append(I.getButton());

    const O = new Button(
      BUTTON_MODELS.O,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyO',
    );
    this.secondRow.append(O.getButton());

    const P = new Button(
      BUTTON_MODELS.P,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyP',
    );
    this.secondRow.append(P.getButton());

    const BRACKET_LEFT = new Button(
      BUTTON_MODELS['['],
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'BracketLeft',
    );
    this.secondRow.append(BRACKET_LEFT.getButton());

    const BRACKET_RIGHT = new Button(
      BUTTON_MODELS[']'],
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'BracketRight',
    );
    this.secondRow.append(BRACKET_RIGHT.getButton());

    const BACKSLASH = new Button(
      BUTTON_MODELS['\\'],
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'Backslash',
    );
    this.secondRow.append(BACKSLASH.getButton());

    const DELETE = new Button(
      BUTTON_MODELS.DELETE,
      this.state,
      deleteButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.SERVICE_BUTTON,
      'Delete',
    );
    this.secondRow.append(DELETE.getButton());
  }

  createThirdRow() {
    this.thirdRow = Keyboard.createRowDomElement();
    this.thirdRow.classList.add('third-row');

    const CAPS_LOCK = new Button(
      BUTTON_MODELS.CAPSLOCK,
      this.state,
      capsLockButtonDown,
      capsLockButtonUp,
      ...BUTTON_CLASSES.SERVICE_BUTTON,
      'CapsLock',
    );
    this.thirdRow.append(CAPS_LOCK.getButton());

    const A = new Button(
      BUTTON_MODELS.A,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyA',
    );
    this.thirdRow.append(A.getButton());

    const S = new Button(
      BUTTON_MODELS.S,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyS',
    );
    this.thirdRow.append(S.getButton());

    const D = new Button(
      BUTTON_MODELS.D,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyD',
    );
    this.thirdRow.append(D.getButton());

    const F = new Button(
      BUTTON_MODELS.F,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyF',
    );
    this.thirdRow.append(F.getButton());

    const G = new Button(
      BUTTON_MODELS.G,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyG',
    );
    this.thirdRow.append(G.getButton());

    const H = new Button(
      BUTTON_MODELS.H,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyH',
    );
    this.thirdRow.append(H.getButton());

    const J = new Button(
      BUTTON_MODELS.J,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyJ',
    );
    this.thirdRow.append(J.getButton());

    const K = new Button(
      BUTTON_MODELS.K,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyK',
    );
    this.thirdRow.append(K.getButton());

    const L = new Button(
      BUTTON_MODELS.L,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyL',
    );
    this.thirdRow.append(L.getButton());

    const SEMICOLON = new Button(
      BUTTON_MODELS[';'],
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'Semicolon',
    );
    this.thirdRow.append(SEMICOLON.getButton());

    const QUOTE = new Button(
      BUTTON_MODELS["'"],
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'Quote',
    );
    this.thirdRow.append(QUOTE.getButton());

    const ENTER = new Button(
      BUTTON_MODELS.ENTER,
      this.state,
      enterButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.SERVICE_BUTTON,
      'Enter',
    );
    this.thirdRow.append(ENTER.getButton());
  }

  createFourthRow() {
    this.fourthRow = Keyboard.createRowDomElement();
    this.fourthRow.classList.add('fourth-row');
    const LEFT_SHIFT = new Button(
      BUTTON_MODELS.SHIFT,
      this.state,
      shiftButtonDown,
      shiftButtonUp,
      ...BUTTON_CLASSES.SERVICE_BUTTON,
      'ShiftLeft',
    );
    this.fourthRow.append(LEFT_SHIFT.getButton());

    const INTL_BACK_SLASH = new Button(
      BUTTON_MODELS['\\'],
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'IntlBackslash',
    );
    this.fourthRow.append(INTL_BACK_SLASH.getButton());

    const Z = new Button(
      BUTTON_MODELS.Z,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyZ',
    );
    this.fourthRow.append(Z.getButton());

    const X = new Button(
      BUTTON_MODELS.X,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyX',
    );
    this.fourthRow.append(X.getButton());

    const C = new Button(
      BUTTON_MODELS.C,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyC',
    );
    this.fourthRow.append(C.getButton());

    const V = new Button(
      BUTTON_MODELS.V,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyV',
    );
    this.fourthRow.append(V.getButton());

    const B = new Button(
      BUTTON_MODELS.B,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyB',
    );
    this.fourthRow.append(B.getButton());

    const N = new Button(
      BUTTON_MODELS.N,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyN',
    );
    this.fourthRow.append(N.getButton());

    const M = new Button(
      BUTTON_MODELS.M,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'KeyM',
    );
    this.fourthRow.append(M.getButton());

    const COMMA = new Button(
      BUTTON_MODELS['<'],
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'Comma',
    );
    this.fourthRow.append(COMMA.getButton());

    const PERIOD = new Button(
      BUTTON_MODELS['>'],
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'Period',
    );
    this.fourthRow.append(PERIOD.getButton());

    const SLASH = new Button(
      BUTTON_MODELS['/'],
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.TEXT_BUTTON,
      'Slash',
    );
    this.fourthRow.append(SLASH.getButton());

    const ARROW_UP = new Button(
      BUTTON_MODELS.ARROW_UP,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.SERVICE_BUTTON,
      'arrow',
      'ArrowUp',
    );
    this.fourthRow.append(ARROW_UP.getButton());

    const RIGHT_SHIFT = new Button(
      BUTTON_MODELS.SHIFT,
      this.state,
      shiftButtonDown,
      shiftButtonUp,
      ...BUTTON_CLASSES.SERVICE_BUTTON,
      'ShiftRight',
    );
    this.fourthRow.append(RIGHT_SHIFT.getButton());
  }

  createFifthRow() {
    this.fifthRow = Keyboard.createRowDomElement();
    this.fifthRow.classList.add('fifth-row');

    const LEFT_CTRL = new Button(
      BUTTON_MODELS.CTRL,
      this.state,
      emptyButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.SERVICE_BUTTON,
      'ControlLeft',
      'control',
    );
    this.fifthRow.append(LEFT_CTRL.getButton());

    const LEFT_META = new Button(
      BUTTON_MODELS.WIN,
      this.state,
      emptyButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.SERVICE_BUTTON,
      'MetaLeft',
      'meta',
    );
    this.fifthRow.append(LEFT_META.getButton());

    const LEFT_ALT = new Button(
      BUTTON_MODELS.ALT,
      this.state,
      emptyButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.SERVICE_BUTTON,
      'AltLeft',
      'alt',
    );
    this.fifthRow.append(LEFT_ALT.getButton());

    const SPACE = new Button(
      BUTTON_MODELS.SPACE,
      this.state,
      spaceButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.SERVICE_BUTTON,
      'Space',
    );
    this.fifthRow.append(SPACE.getButton());

    const RIGHT_ALT = new Button(
      BUTTON_MODELS.ALT,
      this.state,
      emptyButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.SERVICE_BUTTON,
      'AltRight',
      'alt',
    );
    this.fifthRow.append(RIGHT_ALT.getButton());

    const ARROW_LEFT = new Button(
      BUTTON_MODELS.ARROW_LEFT,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.SERVICE_BUTTON,
      'ArrowLeft',
      'arrow',
    );
    this.fifthRow.append(ARROW_LEFT.getButton());

    const ARROW_DOWN = new Button(
      BUTTON_MODELS.ARROW_DOWN,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.SERVICE_BUTTON,
      'ArrowDown',
      'arrow',
    );
    this.fifthRow.append(ARROW_DOWN.getButton());

    const ARROW_RIGHT = new Button(
      BUTTON_MODELS.ARROW_RIGHT,
      this.state,
      textButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.SERVICE_BUTTON,
      'ArrowRight',
      'arrow',
    );
    this.fifthRow.append(ARROW_RIGHT.getButton());

    const RIGHT_CTRL = new Button(
      BUTTON_MODELS.CTRL,
      this.state,
      emptyButtonDown,
      defaultButtonUp,
      ...BUTTON_CLASSES.SERVICE_BUTTON,
      'ControlRight',
      'control',
    );
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
