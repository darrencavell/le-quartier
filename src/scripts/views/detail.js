import Header from '../sections/header';
import Story from '../sections/story';
import Footer from '../sections/footer';
import Specifities from '../sections/specifities';
import Carousel from '../sections/carousel';
import Favourites from '../sections/favourites';
import AddReview from '../sections/addReview';

import { Bold, Paragraph } from '../components/typography';

import {
  escapeHtml,
  renderChildren,
  urlSlicing,
  urlSplitting,
} from '../globals/utils';
import CONSTANTS from '../globals/constants';
import API from '../globals/endpoint';

import '../../styles/views/detail.css';

const Detail = {
  async render() {
    return `
      <header class="header" id="header"></header>
      <div class="content content-detail" id="content"></div>
      <div class="carousel carousel-detail" id="carousel"></div>
      <div class="add-review" id="add-review"></div>
      <div class="favourites" id="favourites"></div>
      <footer class="footer" id="footer"></footer>
    `;
  },

  async componentDidMount() {
    const header = document.getElementById('header');
    header.innerHTML = await Header.render({ isBlackTheme: true });
    await Header.componentDidMount();

    const slicedHashUrl = urlSlicing(window.location.hash);
    const { resourceId } = urlSplitting(slicedHashUrl);

    const detailRestaurantResult = await API.DETAIL_RESTAURANT(resourceId);
    const { restaurant } = detailRestaurantResult;
    const {
      address, categories, city, customerReviews, id, menus, pictureId,
    } = restaurant;
    const { drinks, foods } = menus;
    const pictureSrc = API.IMAGE_RESTAURANT(CONSTANTS.SMALL, pictureId);
    const content = document.getElementById('content');
    content.innerHTML += await Story.render({ ...restaurant, pictureSrc });

    content.innerHTML += await Specifities.render({
      specifities: [
        { key: 'Address', value: address },
        { key: 'City', value: city },
        { key: 'Categories', value: categories.map((category) => category.name).join(', ') },
        { key: 'Foods', value: foods.map((food) => food.name).join(', ') },
        { key: 'Drinks', value: drinks.map((drink) => drink.name).join(', ') },
      ],
    });

    const carousel = document.getElementById('carousel');
    carousel.innerHTML = await Carousel.render({
      children: renderChildren(customerReviews.map((review) => `
        <div class="carousel-item">
          ${Bold({ className: '', text: review.date })}
          ${Paragraph({ className: 'detail-review-name', text: review.name })}
          ${Paragraph({ className: 'detail-review-data', text: escapeHtml(review.review) })}
        </div>
      `)),
      isBlackTheme: true,
    });
    await Carousel.componentDidMount();

    const addReview = document.getElementById('add-review');
    addReview.innerHTML = await AddReview.render();
    await AddReview.componentDidMount({ id });

    const favourites = document.getElementById('favourites');
    favourites.innerHTML = await Favourites.render({ id });
    await Favourites.componentDidMount({ id, restaurant });

    const footer = document.getElementById('footer');
    footer.innerHTML = await Footer.render();
  },
};

export default Detail;
