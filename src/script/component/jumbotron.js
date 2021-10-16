class Jumbotron extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="jumbotron">
            <h1>SEAFOOD GALLERY AND RESTO</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam omnis assumenda, obcaecati quod ea dignissimos mollitia enim asperiores fugiat laboriosam. Necessitatibus rem error vel architecto!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        `
    }
}

customElements.define("jumbotron-app", Jumbotron);
