document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleToc");
  const svgPaths = toggleButton.querySelectorAll("svg path");
  let isToggled = false;

  toggleButton.addEventListener("click", () => {
    // Проверка состояния анимации в TableOfContents
    if (window.toc && window.toc.isAnimating) return;

    if (isToggled) {
      svgPaths[0].setAttribute("d", "M2.10657 18.2635H34.6335");
      svgPaths[1].setAttribute("d", "M18.2635 2.10638V34.6333");
    } else {
      svgPaths[1].setAttribute("d", ""); // Удаление вертикальной линии для состояния "минус"
    }
    isToggled = !isToggled;
  });
});


