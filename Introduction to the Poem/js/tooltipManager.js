// tooltipManager.js

class TooltipManager {
  constructor() {
    this.tooltip = document.createElement("div");
    this.tooltip.className = "tooltip";
    document.body.appendChild(this.tooltip);
  }

  showTooltip(tooltip, element) {
    const { word, definition } = tooltip;
    this.tooltip.innerText = `${word}: ${definition}`;
    const rect = element.getBoundingClientRect();
    this.tooltip.style.left = `${rect.left + window.scrollX}px`;
    this.tooltip.style.top = `${rect.bottom + window.scrollY}px`;
    this.tooltip.style.display = "block";
  }

  hideTooltip() {
    this.tooltip.style.display = "none";
  }
}
