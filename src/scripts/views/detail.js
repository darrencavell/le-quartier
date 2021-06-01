import Header from '../sections/header';
import Story from '../sections/story';
import Footer from '../sections/footer';
import Specifities from '../sections/specifities';
import Carousel from '../sections/carousel';
import Favourites from '../sections/favourites';

import { bold, paragraph } from '../components/typography';

import { renderChildren, urlSlicing, urlSplitting } from '../globals/utils';
import { IMAGE_SIZE } from '../globals/constants';
import API from '../globals/endpoint';

import '../../styles/views/detail.css';

const Detail = {
  async render() {
    return `
      <header class="header" id="header"></header>
      <div class="content content-detail" id="content"></div>
      <div class="carousel carousel-detail" id="carousel"></div>
      <div class="favourites" id="favourites"></div>
      <footer class="footer" id="footer"></footer>
    `
  },

  async componentDidMount() {
    const header = document.getElementById('header');
    header.innerHTML = await Header.render({ isBlackTheme: true });
    await Header.componentDidMount();

    const slicedHashUrl = urlSlicing(window.location.hash);
    const { resourceId } = urlSplitting(slicedHashUrl);

    const detailRestaurantResult = await API.DETAIL_RESTAURANT(resourceId);
    const { restaurant } = detailRestaurantResult;
    const { address, categories, city, customerReviews, id, menus, pictureId } = restaurant;
    const { drinks, foods } = menus;
    const pictureSrc = API.IMAGE_RESTAURANT(IMAGE_SIZE.SMALL, pictureId);
    const content = document.getElementById('content');
    content.innerHTML += await Story.render({ ...restaurant, pictureSrc });

    content.innerHTML += await Specifities.render({
      specifities: [
        { key: 'Address', value: address },
        { key: 'City', value: city },
        { key: 'Categories', value: categories.map(category => category.name).join(', ') },
        { key: 'Foods', value: foods.map(food => food.name).join(', ') },
        { key: 'Drinks', value: drinks.map(drink => drink.name).join(', ') },
      ]
    });
    
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = await Carousel.render({
      children: renderChildren(customerReviews.map(review => {
        return `
          <div class="carousel-item">
            ${bold({ className: '', text: review.date })}
            ${paragraph({ className: '', text: review.name })}
            ${paragraph({ className: '', text: review.review })}
          </div>
        `;
      })),
      isBlackTheme: true
    });
    await Carousel.componentDidMount();
    
    const favourites = document.getElementById('favourites');
    favourites.innerHTML = await Favourites.render({ id });
    await Favourites.componentDidMount({ id, restaurant });

    const footer = document.getElementById('footer');
    footer.innerHTML = await Footer.render();
  }
}

export default Detail;
