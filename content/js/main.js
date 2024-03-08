import { TableOfContents } from "./render.js";
import "./button.js";

document.addEventListener("DOMContentLoaded", () => {
  fetch("/content/json/briefContent.json")
    .then((response) => response.json())
    .then((data) => {
      const toc = new TableOfContents(
        "tableOfContents",
        "toggleToc",
        data.table_of_contents[0]
      );
      window.toc = toc;
    })
    .catch((error) => console.error("Ошибка загрузки данных:", error));
});