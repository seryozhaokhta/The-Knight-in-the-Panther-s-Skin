// tooltips.js

document.addEventListener("DOMContentLoaded", () => {
  const tooltipsData = {
    vepkhi: {
      title: "Vepkhi",
      description: "This term historically refers to a variety of large wild cats, including panthers, tigers, or leopards. In modern interpretations, it is often associated with the tiger. In the context of Rustaveli's poem, «vepkhi» symbolizes the protagonist's fierce and majestic qualities, highlighting their strength, nobility, and the symbolic power of their appearance.",
      link: "https://example.com/vepkhi",
    },
    istqao: {
      title: "Istqao",
      description: "Meaning «skin» or «hide» in English, this word points to the very essence of the protagonist's defining feature — wearing the skin of a «vepkhi». It emphasizes the theme of identity and distinction, setting the protagonist apart from others not just by their actions but also by their unique attire that holds both literal and symbolic significance.",
      link: "https://example.com/istqao",
    },
    sani: {
      title: "Sani",
      description: "This suffix translates to «one who wears» or «characterized by». When attached to «istqao», it forms «istqaosani», meaning «one who wears the skin» or «one characterized by the skin». It reinforces the connection between the protagonist and their iconic attire, underlining their role as a figure of valor and distinctiveness among peers.",
      link: "https://example.com/sani",
    },
    // Указываем путь к иконке для всех тултипов
    icon: "/gallery/icons/linkToIcon.svg",
  };

  Object.keys(tooltipsData).forEach((key) => {
    const element = document.getElementById(key);
    element.addEventListener("mouseenter", (e) => {
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.innerHTML = `
      <h4 class="tooltip-header">${tooltipsData[key].title}</h4>
      <p>${tooltipsData[key].description}</p>
      <a class="tooltip-link" href="${tooltipsData[key].link}" target="_blank">Go to Glossary Page <img src="${tooltipsData.icon}" alt="Иконка" style="width: 12px; height: 12px;</a>">
      `;
      document.body.appendChild(tooltip);

      const elementRect = element.getBoundingClientRect();
      tooltip.style.left = `${elementRect.left}px`;
      tooltip.style.top = `${elementRect.bottom + window.scrollY + 10}px`;

      tooltip.classList.add("tooltip-visible");

      // Добавляем обработчики событий для тултипа
      tooltip.addEventListener("mouseenter", () => {
        tooltip.classList.add("tooltip-visible"); // Удерживаем тултип открытым
      });

      tooltip.addEventListener("mouseleave", () => {
        tooltip.remove(); // Удаляем тултип при уходе курсора
      });
    });

    element.addEventListener("mouseleave", () => {
      setTimeout(() => {
        // Даем небольшую задержку, чтобы проверить, не находится ли курсор над тултипом
        if (!document.querySelector(".tooltip:hover")) {
          const tooltip = document.querySelector(".tooltip-visible");
          if (tooltip) {
            tooltip.remove();
          }
        }
      }, 100); // Задержка в 100 мс
    });
  });
});

