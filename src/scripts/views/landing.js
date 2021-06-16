import Carousel from '../sections/carousel';
import Header from '../sections/header';
import Story from '../sections/story';
import Footer from '../sections/footer';
import Image from '../components/image';
import { Paragraph } from '../components/typography';

import { renderChildren } from '../globals/utils';
import CONSTANTS from '../globals/constants';
import API from '../globals/endpoint';

const Landing = {
  async render() {
    return `
      <a href="#content" class="skip-to-content">Skip to Content</a>
      <header class="header" id="header"></header>
      <div class="carousel" id="carousel"></div>
      <div class="content content-restaurants" id="content"></div>
      <footer class="footer" id="footer"></footer>
    `;
  },

  async componentDidMount() {
    const images = [
      {
        src: {
          small: './images/heros/hero-image_1-small.jpg',
          medium: './images/heros/hero-image_1.jpg',
          large: './images/heros/hero-image_1-large.jpg'
        },
        title: 'Chef Plating Food',
        subtitle: 'Chef Fungus is plating and handing the food to the customer',
      },
      {
        src: {
          small: './images/heros/hero-image_2-small.jpg',
          medium: './images/heros/hero-image_2.jpg',
          large: './images/heros/hero-image_2-large.jpg'
        },
        title: 'Upside Food On Table',
        subtitle: 'Wonderful moments by sharing and caring about food',
      },
      {
        src: {
          small: './images/heros/hero-image_3-small.jpg',
          medium: './images/heros/hero-image_3.jpg',
          large: './images/heros/hero-image_3-large.jpg'
        },
        title: 'Night Street Lamp',
        subtitle: 'Chef Fungus is plating and handing the food to the customer',
      },
      {
        src: {
          small: './images/heros/hero-image_4-small.jpg',
          medium: './images/heros/hero-image_4.jpg',
          large: './images/heros/hero-image_4-large.jpg'
        },
        title: 'Biscuit Flower Beauty Shot',
        subtitle: 'Chef Fungus is plating and handing the food to the customer',
      },
    ];

    const header = document.getElementById('header');
    header.innerHTML = await Header.render();
    await Header.componentDidMount();

    const carousel = document.getElementById('carousel');
    carousel.innerHTML = await Carousel.render({
      children: renderChildren(images.map((individualImage) => `
        <div class="carousel-item">
          ${Image({
            alt: individualImage.title,
            className: 'carousel-image',
            src: {
              small: individualImage.src.small,
              medium: individualImage.src.medium,
              large: individualImage.src.large
            }
          })}
          <div class="carousel-caption">
            ${Paragraph({ className: 'carousel-title', text: individualImage.title })}
            ${Paragraph({ className: 'carousel-subtitle', text: individualImage.subtitle })}
          </div>
        </div>
      `)),
    });
    await Carousel.componentDidMount();

    const listRestaurantResult = await API.LIST_RESTAURANT();
    const { restaurants } = listRestaurantResult;
    const story = document.getElementById('content');
    const restaurantsHTML = await Promise.all(restaurants.map(async (restaurant) => {
      const { pictureId } = restaurant;
      const pictureSrc = API.IMAGE_RESTAURANT(CONSTANTS.SMALL, pictureId);
      return Story.render({ ...restaurant, pictureSrc });
    }));
    story.innerHTML = renderChildren(restaurantsHTML);

    const footer = document.getElementById('footer');
    footer.innerHTML = await Footer.render();
  },
};

export default Landing;
