class ModalLogin extends HTMLElement {
    get open () {
        return this.render();
    };

    render() {
        this.innerHTML = ''
        const container = document.createElement("div");
        container.classList.add("modal-container");
        container.innerHTML = `
            <form>
                    <div class="title-modal">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required>
                
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required>
                
                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"> Remember me
                    </label>
                    </div>
                
                    <div class="modal-footer" style="background-color:#f1f1f1">
                    <button type="button" class="cancelbtn">Cancel</button>
                    <span class="psw">Forgot <a href="#">password?</a></span>
                    </div>
            </form> 
                    `
        this.appendChild(container);
    }

}

customElements.define("modal-login-app", ModalLogin);
