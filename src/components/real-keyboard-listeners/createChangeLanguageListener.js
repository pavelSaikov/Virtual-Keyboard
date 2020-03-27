export default function createChangeLanguageListener(state) {
  return e => {
    if (e.ctrlKey && e.altKey) {
      state.changeLanguage();
    }
  };
}
