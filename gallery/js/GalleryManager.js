// GalleryManager.js

class GalleryManager {
  constructor() {
    this.images = [];
    this.currentView = "gallery";
    this.imageViewer = new ImageViewer(this);
  }

  async init() {
    this.images = await ImageLoader.loadImages();
    this.renderGallery();
    this.attachEventListeners();
  }

  renderGallery() {
    const galleryContainer = document.querySelector(".gallery");
    galleryContainer.innerHTML = "";
    this.images.forEach((image, index) => {
      const imgElement = document.createElement("img");
      imgElement.src = image.src;
      imgElement.alt = image.title;
      imgElement.classList.add("gallery-image");
      imgElement.addEventListener("click", () => this.switchToViewer(index));
      galleryContainer.appendChild(imgElement);
    });
  }

  switchToViewer(imageId) {
    this.currentView = "viewer";
    this.imageViewer.showImage(this.images[imageId]);
  }

  switchToGallery() {
    this.currentView = "gallery";
    this.imageViewer.hide();
    this.renderGallery();
  }

  attachEventListeners() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.currentView === "viewer") {
        this.switchToGallery();
      } else if (this.currentView === "viewer") {
        if (e.key === "ArrowUp") this.imageViewer.previousImage();
        if (e.key === "ArrowDown") this.imageViewer.nextImage();
      }
    });
  }
}
