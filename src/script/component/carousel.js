class CarouselElement extends HTMLElement {
  connectedCallback() {
    this.renderImage();
  }

  renderImage() {
    return new Promise((res, rej) => {
      const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
      fetch(url)
        .then(response => response.json())
        .then(data => {
          res()
          this.render(data)
        })
        .catch(error => rej(error))
    })
  }

  render(data) {
    const div = document.createElement("div");
    div.classList.add("carousel");

    const btnLeft = document.createElement("button");
    btnLeft.classList.add("carousel_btn", "carousel-left");
    btnLeft.innerHTML = `
        <img src="src/img/left-arrow.png" alt="">
    `

    const btnRight = document.createElement("button");
    btnRight.classList.add("carousel_btn", "carousel-right");
    btnRight.innerHTML = `
        <img src="src/img/right-arrow.png" alt="">
    `

    const divContainer = document.createElement('div');
    divContainer.classList.add("carousel-container");
    const ul = document.createElement("ul");
    ul.classList.add("carousel-slide");

    data.meals.forEach(item => {
      const li = document.createElement("li");
      li.classList.add("carousel-item");
      li.innerHTML = `
         <li class="carousel-item">
            <img class="carousel-image" src= "${item.strMealThumb}" alt="">
          </li>
      `
      ul.append(li);
    });

    divContainer.append(ul);
    div.append(btnRight, divContainer, btnLeft);
    this.appendChild(div)
  }
}

customElements.define('carousel-app', CarouselElement);

