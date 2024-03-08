export class TableOfContents {
  constructor(containerId, toggleButtonId, data) {
    this.container = document.getElementById(containerId);
    this.toggleButton = document.getElementById(toggleButtonId);
    this.data = data;
    this.isOpen = false;
    this.isAnimating = false;

    this.toggleButton.addEventListener("click", () => this.toggle());
    this.render();
  }

  render() {
    if (this.data.url) {
      const titleLink = document.createElement("a");
      titleLink.href = this.data.url;
      titleLink.textContent = this.data.section;
      titleLink.className = "section__title";
      this.container.appendChild(titleLink);
    } else {
      const title = document.createElement("h2");
      title.className = "section__title";
      title.textContent = this.data.section;
      this.container.appendChild(title);
    }

    this.data.chapters.forEach((chapter) => {
      const chapterElement = document.createElement("div");
      chapterElement.className = "chapter";
      chapterElement.innerHTML = `<span class="number">${chapter.number}</span> <span class="title">${chapter.title}</span>`;
      this.container.appendChild(chapterElement);
    });
  }

  toggle() {
    if (this.isAnimating) return;

    this.isAnimating = true;
    this.isOpen = !this.isOpen;
    this.update();
  }

  update() {
    const chapters = Array.from(
      this.container.getElementsByClassName("chapter")
    );
    const title = this.container.querySelector(".section__title");

    if (this.isOpen) {
      this.container.classList.replace("hidden", "visible");
      title.style.opacity = "1";
      title.style.transform = "translateY(0)";
      chapters.forEach((chapter, index) => {
        setTimeout(() => {
          chapter.style.opacity = "1";
          chapter.style.transform = "translateY(0)";
          if (index === chapters.length - 1) {
            this.isAnimating = false;
          }
        }, index * 50);
      });
    } else {
      chapters
        .slice()
        .reverse()
        .forEach((chapter, index) => {
          setTimeout(() => {
            chapter.style.opacity = "0";
            chapter.style.transform = "translateY(30px)";
            if (index === chapters.length - 1) {
              title.style.opacity = "0";
              title.style.transform = "translateY(30px)";
              this.container.classList.replace("visible", "hidden");
              this.isAnimating = false;
            }
          }, index * 50);
        });
    }
  }
}
