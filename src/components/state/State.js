class State {
  constructor() {
    this.subscribers = [];
    // this.languageMod = { RU: 'RU', EN: 'EN' };
    this.currentLanguageMode = 'RU';
    // this.shiftMod = { SHIFT_OFF: 'SHIFT_OFF', SHIFT_ON: 'SHIFT_ON' };
    this.currentShiftMode = 'SHIFT_OFF';
  }

  changeLanguage() {
    if (this.currentLanguageMode === 'RU') this.currentLanguageMode = 'EN';
    else this.currentLanguageMode = 'RU';

    this.notifySubscribes();
  }

  changeShiftMode() {
    if (this.currentShiftMode === 'SHIFT_OFF') this.currentShiftMode = 'SHIFT_ON';
    else this.currentShiftMode = 'SHIFT_OFF';

    this.notifySubscribes();
  }

  shiftPressed() {
    let inverseShiftMode = '';
    if (this.currentShiftMode === 'SHIFT_OFF') inverseShiftMode = 'SHIFT_ON';
    else inverseShiftMode = 'SHIFT_OFF';

    for (let i = 0; i < this.subscribers.length; i += 1) {
      this.subscribers[i]({ lang: this.currentLanguageMode, shiftMode: inverseShiftMode });
    }
  }

  shiftReleased() {
    this.notifySubscribes();
  }

  notifySubscribes() {
    for (let i = 0; i < this.subscribers.length; i += 1) {
      this.subscribers[i]({ lang: this.currentLanguageMode, shiftMode: this.currentShiftMode });
    }
  }

  subscribe(func) {
    this.subscribers.push(func);
  }
}

export default State;
