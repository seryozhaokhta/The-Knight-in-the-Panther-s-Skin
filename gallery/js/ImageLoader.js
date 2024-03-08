class ImageLoader {
  static async loadImages() {
    return fetch("/gallery/images.json")
      .then((response) => response.json())
      .then((data) => data);
  }
}
