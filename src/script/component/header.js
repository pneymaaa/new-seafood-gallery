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

    set error (evt) {
        this._error = evt;
        this.render();
    }

    set bar (evt) {
        this._bar = evt;
        this.render();
    }
    
    get displayBar() {
        return this.querySelector(".nav-links");
    }

    set closing (closed) {
        this._closing = closed
        // this.render();
    }

    render() {
        this.innerHTML = `
            <nav>
            <img src="src/img/seafood.png" alt="fish" class="logo">
                <div id="menu-dropdown">
                    <div class="home-bars">
                        <i class="fas fa-bars"></i>
                    </div>
                    <ul class="nav-links">
                        <li class="nav-item"><a>Home</a></li>
                        <li class="nav-item"><a href="index.html#menu">Menu</a></li>
                        <li class="nav-item"><a class="page-not-found">About</a></li>
                        <li class="nav-item"><a class="login-header">Log In</a></li>
                        <li class="nav-item"><a class="signup-header">Sign Up</a></li>
                    </ul>
                 </div>
            </nav>
        `
        window.addEventListener("click", this._closing);
        this.querySelector(".login-header").addEventListener('click', this._openLogin);
        this.querySelector(".signup-header").addEventListener('click', this._openSignUp);
        this.querySelector(".page-not-found").addEventListener('click', this._error);
        this.querySelector(".fa-bars").addEventListener('click', this._bar);
    }
}

customElements.define("header-app", Header);
