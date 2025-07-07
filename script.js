
const translations = {
  ru: {
    mainTitle: "Добро пожаловать на Step by Step: English",
    mainDesc: "Выберите уровень, чтобы начать изучение:"
  },
  en: {
    mainTitle: "Welcome to Step by Step: English",
    mainDesc: "Choose your level to start learning:"
  }
};
function setLanguage(lang) {
  document.getElementById("main-title").innerText = translations[lang].mainTitle;
  document.getElementById("main-desc").innerText = translations[lang].mainDesc;
}
setLanguage("ru");
