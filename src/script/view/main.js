import "../component/header.js";
import "../component/footer.js";
import "../component/carousel.js";
import DataSource from '../data/data-sources.js';

const main = () => {
    const carouselElement = document.querySelector("carousel-app");

    const onLoadImages = () => {
        console.log('success');
        DataSource.GetCarouselImages()
        .then(renderImages)
        // .catch(fallbackError)
    };

    const renderImages = results => {
        carouselElement.images = results;
        console.log('success');
    };

    carouselElement.loadImage = onLoadImages;

}

export default main;