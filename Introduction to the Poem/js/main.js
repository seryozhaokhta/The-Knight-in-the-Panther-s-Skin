// main.js

document.addEventListener("DOMContentLoaded", () => {
  const textContainer = document.getElementById("text-container");
  const tooltipManager = new TooltipManager();
  const dataManager = new DataManager(
    "data/introductory.json",
    textContainer,
    tooltipManager
  );

  dataManager.loadData();
});
<<<<<<< HEAD
=======

>>>>>>> master
