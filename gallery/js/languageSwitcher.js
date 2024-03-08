// Файл: languageSwitcher.js
document.addEventListener("DOMContentLoaded", () => {
  const navigationButtons = document.querySelector(".navigationButtons");
  const enButton = document.querySelector(".enButton");
  const geButton = document.querySelector(".geButton");
  const circleIcon = document.querySelector(".circleIcon");

  const setActiveLanguage = (language) => {
    if (language === "en") {
      navigationButtons.style.setProperty("--circle-left", "0px");
      enButton.classList.add("active");
      geButton.classList.remove("active");
      geButton.classList.add("inactive");
      // TODO: Добавьте здесь логику смены языка на английский
    } else {
      navigationButtons.style.setProperty(
        "--circle-left",
        `${geButton.offsetLeft}px`
      );
      geButton.classList.add("active");
      enButton.classList.remove("active");
      enButton.classList.add("inactive");
      // TODO: Добавьте здесь логику смены языка на грузинский
    }
  };

  // Установите начальный язык
  setActiveLanguage("en"); // Или "ge" в зависимости от предпочтений

  enButton.addEventListener("click", () => setActiveLanguage("en"));
  geButton.addEventListener("click", () => setActiveLanguage("ge"));
});
