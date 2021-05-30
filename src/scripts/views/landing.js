import Carousel from '../sections/carousel';
import Header from '../sections/header';
import Story from '../sections/story';
import Footer from '../sections/footer';
import { image } from '../components/image';
import { paragraph } from '../components/typography';

import { renderChildren } from '../globals/utils';
import { IMAGE_SIZE } from '../globals/constants';
import API from '../globals/endpoint';

const Landing = {
  async render() {
    return `
      <header class="header" id="header"></header>
      <div class="carousel" id="carousel"></div>
      <div class="content content-restaurants" id="content"></div>
	    <footer class="footer" id="footer"></footer>
    `;
  },

  async componentDidMount() {
    const images = [
      {
        src: './images/heros/hero-image_1.jpg',
        title: 'Chef Plating Food',
        subtitle: 'Chef Fungus is plating and handing the food to the customer'
      },
      {
        src: './images/heros/hero-image_2.jpg',
        title: 'Upside Food On Table',
        subtitle: 'Wonderful moments by sharing and caring about food'
      },
      {
        src: './images/heros/hero-image_3.jpg',
        title: 'Night Street Lamp',
        subtitle: 'Chef Fungus is plating and handing the food to the customer'
      },
      {
        src: './images/heros/hero-image_4.jpg',
        title: 'Biscuit Flower Beauty Shot',
        subtitle: 'Chef Fungus is plating and handing the food to the customer'
      }
    ];

    const header = document.getElementById('header');
    header.innerHTML = await Header.render();
    await Header.componentDidMount();

    const carousel = document.getElementById('carousel');
    carousel.innerHTML = await Carousel.render({
      children: renderChildren(images.map(individualImage => {
        return `
          <div class="carousel-item">
            ${image({ alt: individualImage.title, className: 'carousel-image', src: individualImage.src })}
            <div class="carousel-caption">
              ${paragraph({ className: 'carousel-title', text: individualImage.title })}
              ${paragraph({ className: 'carousel-subtitle', text: individualImage.subtitle })}
            </div>
          </div>
        `;
      }))
    });
    await Carousel.componentDidMount();
    
    const listRestaurantResult = await API.LIST_RESTAURANT();
    const { restaurants } = listRestaurantResult;
    const story = document.getElementById('content');
    const restaurantsHTML = await Promise.all(restaurants.map(async restaurant => {
      const { pictureId } = restaurant;
      const pictureSrc = API.IMAGE_RESTAURANT(IMAGE_SIZE.SMALL, pictureId);
      return await Story.render({ ...restaurant, pictureSrc });
    }))
    story.innerHTML = renderChildren(restaurantsHTML);

    const footer = document.getElementById('footer');
    footer.innerHTML = await Footer.render();
  }
}

export default Landing;
