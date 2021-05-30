import Carousel from '../sections/carousel';
import Header from '../sections/header';
import Story from '../sections/story';
import Footer from '../sections/footer';
import { image } from '../components/image';
import { paragraph } from '../components/typography';

import { renderChildren } from '../globals/utils';
import { IMAGE_SIZE } from '../globals/constants';
import FavouriteRestaurantIdb from '../globals/favouriteIdb';
import API from '../globals/endpoint';

import '../../styles/views/favourites.css';

const {
  getRestaurants
} = FavouriteRestaurantIdb;

const Favourite = {
  async render() {
    return `
      <header class="header" id="header"></header>
      <div class="content content-favourites" id="content"></div>
	    <footer class="footer" id="footer"></footer>
    `;
  },

  async componentDidMount() {
    const header = document.getElementById('header');
    header.innerHTML = await Header.render({ isBlackTheme: true });
    await Header.componentDidMount();
    
    const restaurants = await getRestaurants();
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

export default Favourite;
