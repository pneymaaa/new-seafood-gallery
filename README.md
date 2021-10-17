# Seafood Gallery and Resto Website

This is a solution to the "Developing and Publishing a Multi page Animated Website" on [Progate Indonesia](https://progate.com/).

## Table of contents
- [Overview](#overview)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview
A simple website that has several features/interactions such as login, signup, and item details. In addition, the web storage used is local storage. You can see it in the following link:
- Site URL: [Seeafood Galery and Resto Website](https://pneymaaa.github.io/new-seafood-gallery/)

## My process

### Built with
- HTML5
- CSS
- Vanilla JavaScript
- Web Component

### What I learned

This time, I am learning to develop a website using a web component so that the code I design can be maintained easily and reusable. However, this is a new task for me so there are certainly still many shortcomings. There's a piece of code I want to highlight, see below:

```js
import "./modal.js";

class Menu extends HTMLElement {
    connectedCallback() {
        this.renderMenu();
    }

    get meal () {
        return this.querySelectorAll(".container-menu-item");
    }

    set zeroMeal (zero) {
        this._zeroMeal = zero ? "" : zero;
        this.renderMenu();
    }

    renderMenu() {
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
        this.innerHTML = '';

        const listMenu = document.createElement('div');
        listMenu.setAttribute("id", "menu");
        listMenu.classList.add("container-menu");

        const listMeal = document.createElement("div");
        listMeal.classList.add("container-meal");

            data.meals.forEach(item => {
                const { idMeal, strMeal, strMealThumb } = item
                const modal = document.querySelector("modal-app");
                const menu = document.createElement("div");
                menu.classList.add("container-menu-item");
                menu.setAttribute("title", `${strMeal}`);
    
                const meal = document.createElement("div");
                meal.classList.add("container-meal-item");
                meal.setAttribute("id", `${idMeal}`);
                meal.setAttribute("title", `${strMeal}`);
                meal.innerHTML = `
            <img src="${strMealThumb}" class="meal-img" alt="${strMealThumb}">
                <div class="meal-div">
                    <h5 class="meal-title">${strMeal.toUpperCase()}</h5>
                </div> 
            `
                menu.append(meal);
                listMeal.append(menu);
                meal.addEventListener('click', (e) => {
                    modal.idMeal = e.currentTarget.id
                });
            })
        listMenu.append(listMeal);
        this.appendChild(listMenu);
    }
}

customElements.define("menu-app", Menu);
```
I think this section can actually be separated between logic and DOM HTML so that this code can be maintained more easily. But I still put it together in one js file because this is easier even though it is not reusable.

### Continued development

This web component technique is very exciting because it is the principle of component-based perception that is usually used in frontend frameworks such as React. I want more to learn in developing the router and web component to make it cleaner and reusable.

### Useful resources

- [Freecodecamp](https://www.freecodecamp.org/) - This helped me for better understanding about web component
- [W3Schools](https://www.w3schools.com/) - It assisted me in designing CSS and HTML.
- [Stackoverflow](https://stackoverflow.com/) - When you are stuck in developing an algorithm, it aids to find a way out.

## Author

- Linkedin - [Kamila Khalishah](https://www.linkedin.com/in/kamila-khalishah-a12863154/)
- Instagram - [@kha_kamila](https://www.instagram.com/kha_kamila/)


