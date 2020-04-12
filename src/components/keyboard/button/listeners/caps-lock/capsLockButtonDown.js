import state from '../../../../state/State';

export default function capsLockButtonDown() {
  state.changeShiftMode();
}
