/* eslint-disable indent */
import '../../styles/sections/favourites.css';
import Button from '../components/button';

import FavouriteRestaurantIdb from '../globals/favouriteIdb';

const {
  deleteRestaurant,
  getRestaurant,
  putRestaurant,
} = FavouriteRestaurantIdb;

const Favourites = {
  async render(props = {}) {
    const { id } = props;

    return `
      ${Button({
        className: 'button-favourite',
        id: 'favourites-heart-button',
        children: await getRestaurant(id) ? `
          <i class="fa fa-heart" aria-hidden="true"></i>
        ` : `
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        `,
      })}
    `;
  },
  async componentDidMount(props = {}) {
    const { id, restaurant } = props;

    const heartButton = document.getElementById('favourites-heart-button');
    heartButton.addEventListener('click', async (event) => {
      if (await getRestaurant(id)) {
        await deleteRestaurant(id);
        heartButton.innerHTML = `
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        `;
      } else {
        await putRestaurant(restaurant);
        heartButton.innerHTML = `
          <i class="fa fa-heart" aria-hidden="true"></i>
        `;
      }

      if (event.detail) {
        event.detail(heartButton.innerHTML.trim());
      }
    }, false);
  },
};

export default Favourites;
