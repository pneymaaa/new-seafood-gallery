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
        <ul>
            <p class="contact-info">Weekday: 10am - 10pm</p>
            <p class="contact-info">Weekend: 5pm - 10pm</p>
        </ul>
    </div>
    <div class="contact-container">
        <h3>CONTACT INFORMATION</h3>
        <ul class="contact-info">
            <p class="contact-info"><i class="fas fa-location-arrow"></i> Bandung, West Java, Indonesia</p>
            <p class="contact-info"><i class="fab fa-whatsapp"></i> 089123456789</p>
            <p class="contact-info"><i class="far fa-envelope"></i> infoSeafood@admin.com</p>
            <p class="contact-socmed"><i class="fab fa-facebook-f"></i> SeafoodGaleryResto </p>
            <p class="contact-socmed"><i class="fab fa-instagram"></i> SeafoodGaleryResto </p>
            </ul>
    </div>
        `
    }
}

customElements.define('contact-app', Contact);
