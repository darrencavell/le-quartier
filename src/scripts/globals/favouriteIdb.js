import { openDB } from 'idb';
import CONFIG from './config';

const {
  DATABASE_NAME,
  DATABASE_VERSION,
  OBJECT_STORE_NAME,
} = CONFIG;

const idb = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavouriteRestaurantIdb = {
  async getRestaurants() {
    return (await idb).getAll(OBJECT_STORE_NAME);
  },
  async getRestaurant(id) {
    return (await idb).get(OBJECT_STORE_NAME, id);
  },
  async putRestaurant(restaurant) {
    return (await idb).put(OBJECT_STORE_NAME, restaurant);
  },
  async deleteRestaurant(id) {
    return (await idb).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavouriteRestaurantIdb;
