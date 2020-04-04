
const LANGUAGE = { RU: 'RU', EN: 'EN' };
const SHIFT_MODE = { SHIFT_OFF: 'SHIFT_OFF', SHIFT_ON: 'SHIFT_ON' };

const DEFAULT_STATE = { lang: LANGUAGE.EN, shiftMode: SHIFT_MODE.SHIFT_OFF };

class State {
  constructor() {
    this.subscribers = [];
    const storedLang = localStorage.getItem('lang');
    this.state = storedLang
      ? { ...DEFAULT_STATE, lang: storedLang }
      : DEFAULT_STATE;
  }

  changeLanguage() {
    this.state = {
      ...this.state,
      lang: this.state.lang === LANGUAGE.EN ? LANGUAGE.RU : LANGUAGE.EN,
    };
    this.notifySubscribes();
    localStorage.setItem('lang', this.state.lang);
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
