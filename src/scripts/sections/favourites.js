import '../../styles/sections/favourites.css';
import { button } from '../components/button';

const Favourites = {
  async render(props = {}) {
    return `
      ${button({
        className: 'button-favourite',
        id: 'favourites-heart-button',
        children: `
          <i class="heart"></i>
        `
      })}
    `
  },
  async componentDidMount(callback) {
    const button = document.getElementById('favourites-heart-button');
    button.addEventListener('click', event => {
      callback();
    });
  }
}

export default Favourites;
