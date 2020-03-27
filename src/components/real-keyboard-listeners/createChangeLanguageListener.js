export default function createChangeLanguageListener(state) {
  return (e) => {
    if (e.ctrlKey && e.altKey && e.code !== 'ControlRight' && e.code !== 'AltRight') {
      state.changeLanguage();
    }
  };
}
