/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
/* eslint-disable-next-line require-jsdoc */
class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set loginName(name) {
    this._loginName = name;
    this.render();
  }

  get name() {
    return this.querySelector('#name-login');
  }

  render() {
    this.innerHTML = `
        <div class="jumbotron">
        <img src="src/img/shrimpfriedrice.jpg" class="jumbotron-img">
        <div class="jumbotron-center">    
            <h1>Welcome To 
                <br>
                Seafood Gallery and Resto
                <br>
                <span id="name-login"><strong>${this._loginName == undefined ? '' : `${this._loginName.toUpperCase()}`}</strong></span>
                </h1>
                <p>See how your users experience your website in realtime or view
                <br>
                trends to see any changes in performance over time.</p>
            </div>
        </div>
        `;
  }
}

customElements.define('jumbotron-app', Jumbotron);
