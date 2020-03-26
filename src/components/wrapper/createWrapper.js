import wrapperClasses from './wrapper.models';

export default function createWrapper() {
  const wrapper = document.createElement('div');

  for (let i = 0; i < wrapperClasses.length; i += 1) {
    wrapper.classList.add(wrapperClasses[i]);
  }

  return wrapper;
}
