/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
/* eslint-disable-next-line require-jsdoc */

import './modal.js';

class Menu extends HTMLElement {
  connectedCallback() {
    this.renderMenu();
  }

  get meal() {
    return this.querySelectorAll('.container-menu-item');
  }

  set zeroMeal(zero) {
    this._zeroMeal = zero ? '' : zero;
    this.renderMenu();
  }

  renderMenu() {
    return new Promise((res, rej) => {
      const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
      fetch(url)
          .then((response) => response.json())
          .then((data) => {
            res();
            this.render(data);
          })
          .catch((error) => rej(error));
    });
  }

  render(data) {
    this.innerHTML = '';

    const listMenu = document.createElement('div');
    listMenu.setAttribute('id', 'menu');
    listMenu.classList.add('container-menu');

    const listMeal = document.createElement('div');
    listMeal.classList.add('container-meal');

    data.meals.forEach((item) => {
      const {idMeal, strMeal, strMealThumb} = item;
      const modal = document.querySelector('modal-app');
      const menu = document.createElement('div');
      menu.classList.add('container-menu-item');
      menu.setAttribute('title', `${strMeal}`);

      const meal = document.createElement('div');
      meal.classList.add('container-meal-item');
      meal.setAttribute('id', `${idMeal}`);
      meal.setAttribute('title', `${strMeal}`);
      meal.innerHTML = `
                        <img src="${strMealThumb}" class="meal-img" alt="${strMealThumb}">
                        <div class="meal-div">
                            <h5 class="meal-title">${strMeal.toUpperCase()}</h5>
                        </div> 
                        `;
      menu.append(meal);
      listMeal.append(menu);
      meal.addEventListener('click', (e) => {
        modal.idMeal = e.currentTarget.id;
      });
    });
    listMenu.append(listMeal);
    this.appendChild(listMenu);
  }
}

customElements.define('menu-app', Menu);
