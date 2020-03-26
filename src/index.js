import createWrapper from './components/wrapper/createWrapper';
import createTextArea from './components/textarea/createTextArea';
import Keyboard from './components/keyboard/Keyboard';
import './index.scss';

const textArea = createTextArea();
const keyboard = new Keyboard({});

const wrapper = createWrapper();
wrapper.append(textArea);
wrapper.append(keyboard.getKeyboard());

document.body.append(wrapper);
