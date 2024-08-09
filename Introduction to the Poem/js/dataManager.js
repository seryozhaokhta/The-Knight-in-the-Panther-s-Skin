class DataManager {
  constructor(url, textContainer, tooltipManager) {
    this.url = url;
    this.textContainer = textContainer;
    this.tooltipManager = tooltipManager;
  }

  loadData() {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        data.contents.forEach((content) => {
          this.createContentHeader(content);
        });
        data.stanzas.forEach((stanza) => {
          this.createStanza(stanza);
        });
      })
      .catch((error) => console.error("Error loading data:", error));
  }

  createContentHeader(content) {
    const headerDiv = document.createElement("div");
    headerDiv.className = "content-header";
    const titleEnDiv = document.createElement("div");
    titleEnDiv.className = "title-en";
    titleEnDiv.innerText = content.title_en;
    const titleGeDiv = document.createElement("div");
    titleGeDiv.className = "title-ge";
    titleGeDiv.innerText = content.title_ge;

    headerDiv.appendChild(titleEnDiv);
    headerDiv.appendChild(titleGeDiv);
    this.textContainer.appendChild(headerDiv);
  }

  createStanza(stanza) {
    const stanzaDiv = document.createElement("div");
    stanzaDiv.className = "stanza";
    stanza.lines.forEach((line) => {
      const lineDiv = document.createElement("div");
      lineDiv.className = "line";
      this.createLine(lineDiv, line, "english", "tooltip_en");
      this.createLine(lineDiv, line, "georgian", "tooltip_ge");
      stanzaDiv.appendChild(lineDiv);
    });
    this.textContainer.appendChild(stanzaDiv);
  }

  createLine(lineDiv, line, languageClass, tooltipKey) {
    const textDiv = document.createElement("div");
    textDiv.className = languageClass;
    textDiv.innerHTML = line[languageClass];
    this.setupTooltips(textDiv, line[tooltipKey]);
    lineDiv.appendChild(textDiv);
  }

  setupTooltips(element, tooltips) {
    if (tooltips) {
      element.querySelectorAll(".tooltip-trigger").forEach((trigger, index) => {
        trigger.onmouseover = () => {
          this.tooltipManager.showTooltip(tooltips[index], trigger);
        };
        trigger.onmouseout = () => this.tooltipManager.hideTooltip();
      });
    }
  }
}
