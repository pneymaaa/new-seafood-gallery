/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
/* eslint-disable-next-line require-jsdoc */

import './jumbotron.js';

class Modal extends HTMLElement {
  get Login() {
    return this.renderLogin();
  };

  get Signup() {
    return this.renderSignup();
  };

  get username() {
    return this.querySelector('#username');
  };

  get email() {
    return this.querySelector('#email');
  };

  get password() {
    return this.querySelector('#password');
  };

  set idMeal(id) {
    this._idMeal = id;
    this.renderMeal();
  }

  set closed(closed) {
    this._closed = closed;
  }

  set signin(signin) {
    this._sigin = signin;
  }

  set signup(signup) {
    this._signup = signup;
  }

  renderMeal() {
    return new Promise((res, rej) => {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this._idMeal}`;
      fetch(url)
          .then((response) => response.json())
          .then((data) => {
            res();
            this.render(data);
          })
          .catch((error) => rej(error));
    });
  }

  render(data) {
    this.style.display = 'block';
    this.setAttribute('id', 'modal-app');
    this.innerHTML = '';
    const container = document.createElement('div');
    container.classList.add('modal-container');
    data.meals.forEach((item) => {
      const {strMeal, strInstructions, strMealThumb} = item;
      container.innerHTML = `
                        <h5 class="title-modal">${strMeal.toUpperCase()}</h5>
                        <div class="modal-content">
                            <img src="${strMealThumb}" alt="${strMealThumb}" class="modal-img">
                            <p>How to Cook: </p>
                            <p class="modal-p">${strInstructions}</p>
                        </div>
                        <div class="modal-footer">
                            <button id="po" class="btn po">Pre Order</button>
                        </div>
                `;
    });
    this.appendChild(container);
    window.addEventListener('click', this._closed);
    this.querySelector('#po').addEventListener('click', () => this.onClickDetail());
  }

  renderLogin() {
    this.style.display = 'block';
    this.innerHTML = '';
    const container = document.createElement('div');
    container.classList.add('modal-container');
    container.innerHTML = `
            <form id="modal-open">
                <div class="modal-body">
                <h2>Log In</h2>
                <span class="close" title="Close Modal">&times;</span>
                    <div class="modal-body-item">
                        <label for="uname"><b>Username</b></label>
                        <input id="username" class="edit-input" type="text" placeholder="Username" name="uname" required>
                    </div>
                    
                    <div class="modal-body-item">
                        <label for="psw"><b>Password</b></label>
                        <input id="password" class="edit-input" type="password" placeholder="Password" name="psw" required>
                    </div>
                    <button id="sign-up-btn" type="submit" class="btn submit">Login</button>
                    <button type="button" class="btn cancel">Cancel</button>
                    <div class="modal-body-item">
                        <span class="psw">Forgot <a style="color:blue">Password?</a></span>          
                    </div>
                    <p >Don't have an account yet? <a class="sign-up" style="color:blue">Sign Up</a> <p>
                </div>
            </form> 
                        `;
    this.appendChild(container);
    window.addEventListener('click', this._closed);
    this.querySelector('.close').addEventListener('click', () => this.style.display = 'none');
    this.querySelector('.cancel').addEventListener('click', () => this.style.display = 'none');
    this.querySelector('.sign-up').addEventListener('click', this._signup);
    this.querySelector('#modal-open').addEventListener('submit', (e) => {
      e.preventDefault();
      this.onLogin();
    });
  }

  renderSignup() {
    this.style.display = 'block';
    this.innerHTML = '';
    const container = document.createElement('div');
    container.classList.add('modal-container');
    container.innerHTML = `
            <form id="modal-open" >
                <div class="modal-body">
                <h2>Sign Up</h2>
                <span class="close" title="Close Modal">&times;</span>
                    <div class="modal-body-item">
                        <label for="uname"><b>Username</b></label>
                        <input id="username" class="edit-input" type="text" placeholder="Username" name="uname" required>
                    </div>
                    <div class="modal-body-item">
                        <label for="email"><b>Email</b></label>
                        <input id="email" class="edit-input" type="email" placeholder="Email" name="email" required>
                    </div>
                    <div class="modal-body-item">
                        <label for="psw"><b>Password</b></label>
                        <input id="password" class="edit-input" type="password" placeholder="Password" name="psw" required>
                    </div>
                    <button id="signup-btn" class="btn submit">Sign Up</button>
                    <button type="button" class="btn cancel">Cancel</button>
                    <div class="modal-body-item">
                        <span>Forgot <a style="color:blue">Password?</a></span>          
                    </div>
                    <p >Already have an account? <a class="sign-in" style="color:blue">Sign in</a> <p>
                </div>
            </form> 
            `;
    this.appendChild(container);
    window.addEventListener('click', this._closed);
    this.querySelector('.close').addEventListener('click', () => this.style.display = 'none');
    this.querySelector('.cancel').addEventListener('click', () => this.style.display = 'none');
    this.querySelector('.sign-in').addEventListener('click', this._sigin);
    this.querySelector('#modal-open').addEventListener('submit', (e) => {
      e.preventDefault();
      this.onFormSubmit();
    });
  }

  onFormSubmit() {
    // signupClicked();
    const items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
    const formData = {};
    formData['username'] = this.username.value;
    formData['email'] = this.email.value;
    formData['password'] = this.password.value;
    formData['id'] = +new Date();
    items.push(formData);
    localStorage.setItem('items', JSON.stringify(items));
    alert('Thank you, please continue to sign in!');
    this.style.display = 'none';
  }

  onLogin() {
    const items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
    const avail = items.find((item) => {
      return item.username == this.username.value && item.password == this.password.value;
    });
    if (avail == null) {
      alert('register please');
    } else {
      alert(`thank you, welcome ${avail.username}`);
      const name = document.querySelector('jumbotron-app');
      name.loginName = avail.username;
      this.style.display = 'none';
    }
  }

  onClickDetail() {
    const nameLogin = document.querySelector('jumbotron-app');
    if (nameLogin.name.innerText != '') {
      alert(`Thank you, ${nameLogin.name.innerText}! Your order have been delivered to your email`);
    } else {
      alert('Please login to process your order');
    }
  }
}

customElements.define('modal-app', Modal);
