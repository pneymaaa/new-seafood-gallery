/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
/* eslint-disable-next-line require-jsdoc */

class Search extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set search(name) {
    this._search = name;
    this.render();
  }

  get value() {
    return this.querySelector('#searchSeafood').value.toUpperCase();
  }

  render() {
    this.innerHTML = `
        <h3 class="title-menu">OUR GALERY</h3>
        <p class="desc-menu">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        <div id="searchMeal" class="container-search">
            <input id="searchSeafood" type="text" class="search-seafood" placeholder="Search seafood name..." autocomplete="off">
        </div>
        `;
    this.querySelector('#searchSeafood').addEventListener('keyup', this._search);
  }
}

customElements.define('search-app', Search);
