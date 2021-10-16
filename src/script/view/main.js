import "../component/header.js";
import "../component/footer.js";
import "../component/carousel.js";
import "../component/contact.js";
import "../component/menu.js";
import "../component/modal.js";
import "../component/modal-login.js";
import "../component/search.js";
import "../component/jumbotron.js";
//import DataSource from '../data/data-sources.js';

const main = (e) => {
    e.preventDefault();
    // const carouselElement = document.querySelector("carousel-app");

    /*** Menu - Search ***/
    const searchElement = document.querySelector("search-app");
    const menuElement = document.querySelector("menu-app");
    const headerElement = document.querySelector("header-app");
    const loginModal = document.querySelector("modal-app");

    const loginClicked = () => {
      loginModal.setAttribute("id", "modal-app")
      loginModal.Login;
    };

    const signupClicked = () => {
      loginModal.setAttribute("id", "modal-app")
      loginModal.Signup;
    };

    const onKeyupSearch = () => {
        const seafoodList = menuElement.meal;
        const filterFood = searchElement.value;

        seafoodList.forEach((seafoodItem) => {
            const txtValue = seafoodItem.getAttribute('title')
            if (txtValue.toUpperCase().includes(filterFood)) {
              seafoodItem.style.display = ''
            } else {
              seafoodItem.style.display = 'none'
            }
          });
        
        // const zero = [...seafoodList].filter(i => i.style.display == "")        

        // if (zero.length == 0) {
        //     const p = `${filterFood}`;
        //     return menuElement.zeroMeal = p;
        // }
        

        //   for (let i = 0; i < seafoodList.length; i++) {
        //     const txtValue = seafoodList[i].getAttribute('title')
        //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
        //       seafoodList[i].style.display = ''
        //     } else {
        //       seafoodList[i].style.display = 'none'
        //     }
        //   }
      }

      const closedModal = () => {
        window.onclick = (e) => {
          if (e.target == loginModal) { 
            loginModal.style.display = "none";
            loginModal.removeAttribute("id");
          }
        }}

      const SignInModal = () => {
        closedModal();
        loginClicked();
      }

      const SignUpModal = () => {
        closedModal();
        signupClicked();
      }
      
      searchElement.search = onKeyupSearch;
      headerElement.openLogin = loginClicked;
      headerElement.openSignUp = signupClicked;
      loginModal.closed = closedModal;
      loginModal.signin = SignInModal;
      loginModal.signup = SignUpModal;
      //loginModal.submitRegister = onFormSubmit;

    // const onLoadImages = () => {
    //     console.log('success');
    //     DataSource.getCarouselImages()
    //     .then(renderImages)
    //     .catch(fallbackError)
    // };

    // const renderImages = results => {
    //     carouselElement.images = results;
    //     console.log('success');
    // };

    // carouselElement.loadImage = onLoadImages;
}

export default main;