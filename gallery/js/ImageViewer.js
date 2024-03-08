class ImageViewer {
  constructor(galleryManager) {
    this.galleryManager = galleryManager;
    this.currentImage = null;
    this.overlay = document.querySelector(".overlay"); // Ссылка на слой затенения
    this.initializeUIElements();
  }

  initializeUIElements() {
    // Сохраняем ссылки на DOM элементы для быстрого доступа
    this.viewerContainer = document.querySelector(".image-viewer");
    this.closeButton = document.querySelector(".closeButton");
    this.upButton = document.querySelector(".upButton");
    this.downButton = document.querySelector(".downButton");
    this.upDownButtons = document.querySelector(".up-down-buttons"); // Добавляем контейнер кнопок вверх/вниз

    // Назначаем обработчики событий
    this.closeButton.addEventListener("click", () => this.hide());
    this.upButton.addEventListener("click", () => this.previousImage());
    this.downButton.addEventListener("click", () => this.nextImage());
  }

  showImage(image) {
    this.currentImage = image;
    this.viewerContainer.innerHTML = `<img src="${image.src}" alt="${image.title}">`;
    this.viewerContainer.classList.add("image-viewer-active");
    this.overlay.style.display = "block"; // Показываем оверлей
    setTimeout(() => {
      this.overlay.style.opacity = "1";
    }, 10); // Плавно увеличиваем прозрачность

    this.upDownButtons.style.display = "block";
    this.closeButton.style.display = "block";
    this.viewerContainer.style.display = "flex"; // Используем flex для отображения
  }

  hide() {
    this.viewerContainer.classList.add("image-viewer-hidden");
    this.overlay.style.opacity = "0"; // Плавно уменьшаем прозрачность оверлея

    setTimeout(() => {
      this.viewerContainer.style.display = "none";
      this.overlay.style.display = "none"; // Скрываем оверлей после исчезновения
      this.viewerContainer.classList.remove(
        "image-viewer-active",
        "image-viewer-hidden"
      );
      this.upDownButtons.style.display = "none";
      this.closeButton.style.display = "none";
    }, 500); // Задержка должна совпадать с продолжительностью анимации
  }

  nextImage() {
    // Находим индекс текущего изображения
    let currentIndex = this.galleryManager.images.indexOf(this.currentImage);
    // Вычисляем индекс следующего изображения
    let nextIndex = (currentIndex + 1) % this.galleryManager.images.length;
    // Показываем следующее изображение
    this.showImage(this.galleryManager.images[nextIndex]);
  }

  previousImage() {
    // Находим индекс текущего изображения
    let currentIndex = this.galleryManager.images.indexOf(this.currentImage);
    // Вычисляем индекс предыдущего изображения
    let prevIndex =
      (currentIndex - 1 + this.galleryManager.images.length) %
      this.galleryManager.images.length;
    // Показываем предыдущее изображение
    this.showImage(this.galleryManager.images[prevIndex]);
  }
}
