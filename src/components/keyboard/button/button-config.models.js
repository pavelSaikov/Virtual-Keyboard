const BUTTONS_CONFIG = {
  '~': { RU: { SHIFT_OFF: 'ё', SHIFT_ON: 'Ё' }, EN: { SHIFT_OFF: '`', SHIFT_ON: '~' } },
  1: { RU: { SHIFT_OFF: '1', SHIFT_ON: '!' }, EN: { SHIFT_OFF: '1', SHIFT_ON: '!' } },
  2: { RU: { SHIFT_OFF: '2', SHIFT_ON: '"' }, EN: { SHIFT_OFF: '2', SHIFT_ON: '@' } },
  3: { RU: { SHIFT_OFF: '3', SHIFT_ON: '№' }, EN: { SHIFT_OFF: '3', SHIFT_ON: '#' } },
  4: { RU: { SHIFT_OFF: '4', SHIFT_ON: ';' }, EN: { SHIFT_OFF: '4', SHIFT_ON: '$' } },
  5: { RU: { SHIFT_OFF: '5', SHIFT_ON: '%' }, EN: { SHIFT_OFF: '5', SHIFT_ON: '%' } },
  6: { RU: { SHIFT_OFF: '6', SHIFT_ON: ':' }, EN: { SHIFT_OFF: '6', SHIFT_ON: '^' } },
  7: { RU: { SHIFT_OFF: '7', SHIFT_ON: '?' }, EN: { SHIFT_OFF: '7', SHIFT_ON: '&' } },
  8: { RU: { SHIFT_OFF: '8', SHIFT_ON: '*' }, EN: { SHIFT_OFF: '8', SHIFT_ON: '*' } },
  9: { RU: { SHIFT_OFF: '9', SHIFT_ON: '(' }, EN: { SHIFT_OFF: '9', SHIFT_ON: '(' } },
  0: { RU: { SHIFT_OFF: '0', SHIFT_ON: ')' }, EN: { SHIFT_OFF: '0', SHIFT_ON: ')' } },
  MINUS: { RU: { SHIFT_OFF: '-', SHIFT_ON: '_' }, EN: { SHIFT_OFF: '-', SHIFT_ON: '_' } },
  PLUS: { RU: { SHIFT_OFF: '=', SHIFT_ON: '+' }, EN: { SHIFT_OFF: '=', SHIFT_ON: '+' } },
  BACKSPACE: {
    RU: { SHIFT_OFF: 'Backspace', SHIFT_ON: 'Backspace' },
    EN: { SHIFT_OFF: 'Backspace', SHIFT_ON: 'Backspace' },
  },
  TAB: { RU: { SHIFT_OFF: 'Tab', SHIFT_ON: 'Tab' }, EN: { SHIFT_OFF: 'Tab', SHIFT_ON: 'Tab' } },
  Q: { RU: { SHIFT_OFF: 'й', SHIFT_ON: 'Й' }, EN: { SHIFT_OFF: 'q', SHIFT_ON: 'Q' } },
  W: { RU: { SHIFT_OFF: 'ц', SHIFT_ON: 'Ц' }, EN: { SHIFT_OFF: 'e', SHIFT_ON: 'W' } },
  E: { RU: { SHIFT_OFF: 'у', SHIFT_ON: 'У' }, EN: { SHIFT_OFF: 'e', SHIFT_ON: 'E' } },
  R: { RU: { SHIFT_OFF: 'к', SHIFT_ON: 'К' }, EN: { SHIFT_OFF: 'r', SHIFT_ON: 'R' } },
  T: { RU: { SHIFT_OFF: 'е', SHIFT_ON: 'Е' }, EN: { SHIFT_OFF: 't', SHIFT_ON: 'T' } },
  Y: { RU: { SHIFT_OFF: 'н', SHIFT_ON: 'Н' }, EN: { SHIFT_OFF: 'y', SHIFT_ON: 'Y' } },
  U: { RU: { SHIFT_OFF: 'г', SHIFT_ON: 'Г' }, EN: { SHIFT_OFF: 'u', SHIFT_ON: 'U' } },
  I: { RU: { SHIFT_OFF: 'ш', SHIFT_ON: 'Ш' }, EN: { SHIFT_OFF: 'i', SHIFT_ON: 'I' } },
  O: { RU: { SHIFT_OFF: 'щ', SHIFT_ON: 'Щ' }, EN: { SHIFT_OFF: 'o', SHIFT_ON: 'O' } },
  P: { RU: { SHIFT_OFF: 'з', SHIFT_ON: 'З' }, EN: { SHIFT_OFF: 'p', SHIFT_ON: 'P' } },
  '[': { RU: { SHIFT_OFF: 'х', SHIFT_ON: 'Х' }, EN: { SHIFT_OFF: '[', SHIFT_ON: '{' } },
  ']': { RU: { SHIFT_OFF: 'ъ', SHIFT_ON: 'Ъ' }, EN: { SHIFT_OFF: ']', SHIFT_ON: '}' } },
  DELETE: { RU: { SHIFT_OFF: 'Del', SHIFT_ON: 'Del' }, EN: { SHIFT_OFF: 'Del', SHIFT_ON: 'Del' } },
  CAPSLOCK: {
    RU: { SHIFT_OFF: 'Caps Lock', SHIFT_ON: 'Caps Lock' },
    EN: { SHIFT_OFF: 'Caps Lock', SHIFT_ON: 'Caps Lock' },
  },
  A: { RU: { SHIFT_OFF: 'ф', SHIFT_ON: 'Ф' }, EN: { SHIFT_OFF: 'a', SHIFT_ON: 'A' } },
  S: { RU: { SHIFT_OFF: 'ы', SHIFT_ON: 'Ы' }, EN: { SHIFT_OFF: 's', SHIFT_ON: 'S' } },
  D: { RU: { SHIFT_OFF: 'в', SHIFT_ON: 'В' }, EN: { SHIFT_OFF: 'd', SHIFT_ON: 'D' } },
  F: { RU: { SHIFT_OFF: 'а', SHIFT_ON: 'А' }, EN: { SHIFT_OFF: 'f', SHIFT_ON: 'F' } },
  G: { RU: { SHIFT_OFF: 'п', SHIFT_ON: 'П' }, EN: { SHIFT_OFF: 'g', SHIFT_ON: 'G' } },
  H: { RU: { SHIFT_OFF: 'р', SHIFT_ON: 'Р' }, EN: { SHIFT_OFF: 'h', SHIFT_ON: 'H' } },
  J: { RU: { SHIFT_OFF: 'о', SHIFT_ON: 'О' }, EN: { SHIFT_OFF: 'j', SHIFT_ON: 'J' } },
  K: { RU: { SHIFT_OFF: 'л', SHIFT_ON: 'Л' }, EN: { SHIFT_OFF: 'k', SHIFT_ON: 'K' } },
  L: { RU: { SHIFT_OFF: 'д', SHIFT_ON: 'Д' }, EN: { SHIFT_OFF: 'l', SHIFT_ON: 'L' } },
  ';': { RU: { SHIFT_OFF: 'ж', SHIFT_ON: 'Ж' }, EN: { SHIFT_OFF: ';', SHIFT_ON: ':' } },
  "'": { RU: { SHIFT_OFF: 'э', SHIFT_ON: 'Э' }, EN: { SHIFT_OFF: "'", SHIFT_ON: '"' } },
  '\\': { RU: { SHIFT_OFF: '\\', SHIFT_ON: '/' }, EN: { SHIFT_OFF: '\\', SHIFT_ON: '|' } },
  ENTER: { RU: { SHIFT_OFF: 'Enter', SHIFT_ON: 'Enter' }, EN: { SHIFT_OFF: 'Enter', SHIFT_ON: 'Enter' } },
  SHIFT: { RU: { SHIFT_OFF: 'Shift', SHIFT_ON: 'Shift' }, EN: { SHIFT_OFF: 'Shift', SHIFT_ON: 'Shift' } },
  Z: { RU: { SHIFT_OFF: 'я', SHIFT_ON: 'Я' }, EN: { SHIFT_OFF: 'z', SHIFT_ON: 'Z' } },
  X: { RU: { SHIFT_OFF: 'ч', SHIFT_ON: 'Ч' }, EN: { SHIFT_OFF: 'x', SHIFT_ON: 'X' } },
  C: { RU: { SHIFT_OFF: 'с', SHIFT_ON: 'С' }, EN: { SHIFT_OFF: 'c', SHIFT_ON: 'C' } },
  V: { RU: { SHIFT_OFF: 'м', SHIFT_ON: 'М' }, EN: { SHIFT_OFF: 'v', SHIFT_ON: 'V' } },
  B: { RU: { SHIFT_OFF: 'и', SHIFT_ON: 'И' }, EN: { SHIFT_OFF: 'b', SHIFT_ON: 'B' } },
  N: { RU: { SHIFT_OFF: 'т', SHIFT_ON: 'Т' }, EN: { SHIFT_OFF: 'n', SHIFT_ON: 'N' } },
  M: { RU: { SHIFT_OFF: 'ь', SHIFT_ON: 'Ь' }, EN: { SHIFT_OFF: 'm', SHIFT_ON: 'M' } },
  '<': { RU: { SHIFT_OFF: 'б', SHIFT_ON: 'Б' }, EN: { SHIFT_OFF: ',', SHIFT_ON: '<' } },
  '>': { RU: { SHIFT_OFF: 'ю', SHIFT_ON: 'Ю' }, EN: { SHIFT_OFF: '.', SHIFT_ON: '>' } },
  '/': { RU: { SHIFT_OFF: '.', SHIFT_ON: ',' }, EN: { SHIFT_OFF: '/', SHIFT_ON: '?' } },
  CTRL: { RU: { SHIFT_OFF: 'Ctrl', SHIFT_ON: 'Ctrl' }, EN: { SHIFT_OFF: 'Ctrl', SHIFT_ON: 'Ctrl' } },
  ALT: { RU: { SHIFT_OFF: 'Alt', SHIFT_ON: 'Alt' }, EN: { SHIFT_OFF: 'Alt', SHIFT_ON: 'Alt' } },
  ARROW_UP: { RU: { SHIFT_OFF: '&#9650', SHIFT_ON: '&#9650' }, EN: { SHIFT_OFF: '&#9650', SHIFT_ON: '&#9650' } },
  ARROW_DOWN: { RU: { SHIFT_OFF: '&#9660;', SHIFT_ON: '&#9660;' }, EN: { SHIFT_OFF: '&#9660;', SHIFT_ON: '&#9660;' } },
  ARROW_LEFT: { RU: { SHIFT_OFF: '&#9668;', SHIFT_ON: '&#9668;' }, EN: { SHIFT_OFF: '&#9668;', SHIFT_ON: '&#9668;' } },
  ARROW_RIGHT: { RU: { SHIFT_OFF: '&#9658;', SHIFT_ON: '&#9658;' }, EN: { SHIFT_OFF: '&#9658;', SHIFT_ON: '&#9658;' } },
  WIN: { RU: { SHIFT_OFF: 'WIN', SHIFT_ON: 'WIN' }, EN: { SHIFT_OFF: 'WIN', SHIFT_ON: 'WIN' } },
  SPACE: { RU: { SHIFT_OFF: ' ', SHIFT_ON: ' ' }, EN: { SHIFT_OFF: ' ', SHIFT_ON: ' ' } },
};

export default BUTTONS_CONFIG;
