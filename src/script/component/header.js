class Header extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav>
            <a href="https://freecodecamp.org" class="logo">
            </a>
                 <ul class="nav-links">
                     <li class="nav-item"><a href="index.html">Home</a></li>
                     <li class="nav-item"><a href="menu.html">Menu</a></li>
                     <li class="nav-item"><a href="about.html">About</a></li>
                     <li class="nav-item"><a href="about.html">Log In</a></li>
                     <li class="nav-item"><a href="about.html">Sign Up</a></li>
                     <li class="nav-item"><a href="contact.html">Contact</a></li>
                 </ul>
            </nav>
        `
    }
}

customElements.define("header-app", Header);
