class Header extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set openLogin (open) {
        this._openLogin = open;
        this.render();
    }

    set openSignUp (open) {
        this._openSignUp = open;
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav>
            <img src="src/img/FishBash.png" alt="fish" class="logo">
            </a>
                 <ul class="nav-links">
                     <li class="nav-item"><a href="index.html">Home</a></li>
                     <li class="nav-item"><a href="index.html#menu-app">Menu</a></li>
                     <li class="nav-item"><a href="about.html">About</a></li>
                     <li class="nav-item"><a class="login-header">Log In</a></li>
                     <li class="nav-item"><a class="signup-header">Sign Up</a></li>
                 </ul>
            </nav>
        `
        this.querySelector(".login-header").addEventListener('click', this._openLogin);
        this.querySelector(".signup-header").addEventListener('click', this._openSignUp);

    }
}

customElements.define("header-app", Header);
