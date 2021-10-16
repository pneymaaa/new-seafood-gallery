class Contact extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
    <div class="contact-container">
        <h3>ABOUT US</h3>
        <p class="contact-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, ea aspernatur reprehenderit et natus odio placeat cupiditate ab, maiores accusantium nihil eveniet eum numquam laborum?</p>
    </div>
    <div class="contact-container">
        <h3>OPENING HOURS</h3>
        <ul class="contact-info">
            <p>Weekday: 10am - 10pm</p>
            <p>Weekend: 5pm - 10pm</p>
        </ul>
    </div>
    <div class="contact-container">
        <h3>CONTACT INFORMATION</h3>
        <ul class="contact-info">
            <p>Bandung, West Java, Indonesia</p>
            <p>089123456789</p>
            <p>infoSeafood@admin.com</p>
        </ul>
    </div>
        `
    }
}

customElements.define('contact-app', Contact);
