class PageNotFound extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    set returnHome(event) {
       this._returnHome = event;
       this.render();
    }

    render(){
        this.innerHTML = `
         <div class="content">
            <h2 class="header">
               404
            </h2>
            <h4>
               Opps! Page not found
            </h4>
            <p style="text-align:center;">
               Sorry, the page you're looking for doesn't exist.
            </p>
            <div class="home">
               <button id="return-home" class="btn">Back to home</button>
            </div>
         </div>
        `
        this.querySelector("#return-home").addEventListener("click", this._returnHome)
    }
}
customElements.define("page-not-found-app", PageNotFound);