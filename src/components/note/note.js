import './note.scss';

export default function createNote() {
  const noteContainer = document.createElement('div');
  noteContainer.classList.add('note-container');

  const headerContainer = document.createElement('div');
  headerContainer.classList.add('note-header-container');

  const header = document.createElement('h2');
  header.classList.add('note-header-container__header');
  header.innerText = 'Программные аспекты';
  headerContainer.append(header);

  const aspectsContainer = document.createElement('div');
  aspectsContainer.classList.add('aspects-container');

  const listOfAspects = document.createElement('ul');
  listOfAspects.classList.add('aspects-list');

  const firstAspect = document.createElement('li');
  firstAspect.classList.add('aspects-list__aspect');
  firstAspect.innerText = 'Переключения языка происходит по нажатии клавиш Ctrl + Alt.';

  const secondAspect = document.createElement('li');
  secondAspect.classList.add('aspects-list__aspect');
  secondAspect.innerText = 'Клавиатура создавалась в операционной системе Windows';

  listOfAspects.append(firstAspect);
  listOfAspects.append(secondAspect);

  aspectsContainer.append(listOfAspects);

  noteContainer.append(headerContainer);
  noteContainer.append(aspectsContainer);

  return noteContainer;
}
