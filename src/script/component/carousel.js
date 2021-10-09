class CarouselElement extends HTMLElement {
  // connectedCallback() {
  //   this.render();
  // }

  set loadImage(event) {
    this._loadImage = event;
    this.render();
  }

  set images(image) {
    this._images = image;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="carousel">
        <button class="carousel_btn carousel-left">
            <img src="src/img/seafoodpic.jpg" alt="">
        </button>
        <div class="carousel-container">
            <ul class="carousel-slide">
                <li class="carousel-item">
                <img src="src/img/seafoodpic.jpg" alt="">
                </li>
            </ul>
        </div>
        <button class="carousel_btn carousel-right">
            <img src="" alt="">
        </button>
    </div>
        `
  }
}

customElements.define('carousel-app', CarouselElement);

