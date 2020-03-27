// import { DEFAULT_STATE, LANGUAGE, SHIFT_MODE } from './state.models';
const LANGUAGE = { RU: 'RU', EN: 'EN' };
const SHIFT_MODE = { SHIFT_OFF: 'SHIFT_OFF', SHIFT_ON: 'SHIFT_ON' };

const DEFAULT_STATE = { lang: LANGUAGE.EN, shiftMode: SHIFT_MODE.SHIFT_OFF };

class State {
  constructor() {
    this.subscribers = [];
    // this.state = DEFAULT_STATE;
    if (localStorage.getItem('lang') !== null && localStorage.getItem('shiftMode') !== null) {
      this.state = {
        lang: localStorage.getItem('lang'),
        shiftMode: localStorage.getItem('shiftMode'),
      };
    } else {
      this.state = DEFAULT_STATE;
    }
    //   localStorage.getItem('DEFAULT_STATE') === null
    //     ? DEFAULT_STATE
    //     : localStorage.getItem('DEFAULT_STATE');
  }

  changeLanguage() {
    this.state = {
      ...this.state,
      lang: this.state.lang === LANGUAGE.EN ? LANGUAGE.RU : LANGUAGE.EN,
    };
    this.notifySubscribes();
  }

  changeShiftMode() {
    this.state = {
      ...this.state,
      shiftMode:
        this.state.shiftMode === SHIFT_MODE.SHIFT_ON ? SHIFT_MODE.SHIFT_OFF : SHIFT_MODE.SHIFT_ON,
    };
    this.notifySubscribes();
  }

  notifySubscribes() {
    this.subscribers.forEach((subscriber) => subscriber(this.state));
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
    subscriber(this.state);
  }

  getCurrentState() {
    return this.state;
  }
}

const state = new State();

export default state;
