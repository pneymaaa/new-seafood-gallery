class Search extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set search (name) {
        this._search = name;
        this.render();
    }

    get value () {
        return this.querySelector("#searchSeafood").value.toUpperCase();
    }

    render() {
        this.innerHTML = `
        <h3 class="title-menu">OUR GALERY</h3>
        <p class="desc-menu">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        <div id="searchMeal" class="container-search">
            <input id="searchSeafood" type="text" class="search-seafood" placeholder="Search seafood name..." autocomplete="off">
        </div>
        `
        // const titleMenu = document.createElement("h3");
        // titleMenu.classList.add("title-menu");
        // titleMenu.innerHTML = "OUR GALLERY";

        // const descMenu = document.createElement("p");
        // descMenu.classList.add("desc-menu");
        // descMenu.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting";

        // const searchMeal = document.createElement('div');
        // searchMeal.setAttribute("id", "searchMeal");
        // searchMeal.classList.add("container-search");
        // searchMeal.innerHTML = `
        // <input id="searchSeafood" type="text" class="search-seafood" placeholder="Search seafood name..." autocomplete="off">
        // `
        // this.append(titleMenu, descMenu, searchMeal);

        this.querySelector("#searchSeafood").addEventListener('keyup', this._search);
    }
}

customElements.define("search-app", Search)