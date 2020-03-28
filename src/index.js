import createWrapper from './components/wrapper/createWrapper';
import createTextArea from './components/textarea/createTextArea';
import Keyboard from './components/keyboard/Keyboard';
import State from './components/state/State';
import mouseDown from './components/real-mouse-listeners/mouseDown';
import mouseUp from './components/real-mouse-listeners/mouseUp';
import keyDown from './components/real-keyboard-listeners/keyDown';
import keyUp from './components/real-keyboard-listeners/keyUp';
import createChangeLanguageListener from './components/real-keyboard-listeners/createChangeLanguageListener';

import './index.scss';

const textArea = createTextArea();

const keyboard = new Keyboard(State);
keyboard.getKeyboard().addEventListener('mousedown', mouseDown);
keyboard.getKeyboard().addEventListener('mouseup', mouseUp);

const wrapper = createWrapper();
wrapper.append(textArea);
wrapper.append(keyboard.getKeyboard());

document.body.append(wrapper);
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
document.addEventListener('keydown', createChangeLanguageListener(State));
