class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <footer>
                <p class="footer-name"> All Rights Reserved. © 2021 Seafood Gallery </p>
            </footer>
        `
    }
}

customElements.define("footer-app", Footer);
