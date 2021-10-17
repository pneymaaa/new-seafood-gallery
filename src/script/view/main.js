/* eslint-disable linebreak-style */
import '../component/header.js';
import '../component/footer.js';
import '../component/contact.js';
import '../component/menu.js';
import '../component/modal.js';
import '../component/modal-login.js';
import '../component/search.js';
import '../component/jumbotron.js';
import '../component/404error.js';

const main = (e) => {
  e.preventDefault();

  /** * Menu - Search ***/
  const searchElement = document.querySelector('search-app');
  const menuElement = document.querySelector('menu-app');
  const headerElement = document.querySelector('header-app');
  const loginModal = document.querySelector('modal-app');
  const pageNotFound = document.querySelector('page-not-found-app');
  const main = document.querySelector('.main');
  const mainSide = document.querySelector('.main-side');

  const loginClicked = () => {
    loginModal.setAttribute('id', 'modal-app');
    loginModal.Login;
  };

  const signupClicked = () => {
    loginModal.setAttribute('id', 'modal-app');
    loginModal.Signup;
  };

  const onKeyupSearch = () => {
    const seafoodList = menuElement.meal;
    const filterFood = searchElement.value;

    seafoodList.forEach((seafoodItem) => {
      const txtValue = seafoodItem.getAttribute('title');
      if (txtValue.toUpperCase().includes(filterFood)) {
        seafoodItem.style.display = '';
      } else {
        seafoodItem.style.display = 'none';
      }
    });
  };

  const closedModal = () => {
    window.onclick = (e) => {
      if (e.target == loginModal) {
        loginModal.style.display = 'none';
        loginModal.removeAttribute('id');
      } else if (!e.target.matches('.fa-bars')) {
        headerElement.displayBar.style.display = '';
      }
    };
  };

  const SignInModal = () => {
    closedModal();
    loginClicked();
  };

  const SignUpModal = () => {
    closedModal();
    signupClicked();
  };

  const errorPage = () => {
    main.style.display = 'none';
    mainSide.style.display = 'block';
  };

  const BackToHome = () => {
    main.style.display = 'block';
    mainSide.style.display = 'none';
  };

  const OpenBar = () => {
    const status = headerElement.displayBar.style.display;
    if (status == '') {
      headerElement.displayBar.style.display = 'flex';
    } else {
      headerElement.displayBar.style.display = '';
    }
  };

  searchElement.search = onKeyupSearch;
  headerElement.openLogin = loginClicked;
  headerElement.openSignUp = signupClicked;
  headerElement.error = errorPage;
  loginModal.closed = closedModal;
  loginModal.signin = SignInModal;
  loginModal.signup = SignUpModal;
  pageNotFound.returnHome = BackToHome;
  headerElement.bar = OpenBar;
  headerElement.closing = closedModal;
};

export default main;
