import '../styles/carousel.css';
import { button } from './components/button';
import { image } from './components/image';
import { paragraph } from './components/typography';
import { renderChildren } from './utils';

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

let current = 0, isAnimating = false;

const carousel = document.getElementById('carousel');
carousel.innerHTML = `
  <div class="carousel-item-wrapper" id="carousel-item-wrapper">
    ${renderChildren(images.map(individualImage => {
      return `
        <div class="carousel-item">
          ${image({ alt: individualImage.title, className: 'carousel-image', src: individualImage.src })}
          <div class="carousel-caption">
            ${paragraph({ className: 'carousel-title', text: individualImage.title })}
            ${paragraph({ className: 'carousel-subtitle', text: individualImage.subtitle })}
          </div>
        </div>
      `;
    }))}
  </div>
  ${button({
    className: 'carousel-button button-left',
    id: 'carousel-left-button',
    children: `
      <i class="arrow left"></i>
    `
  })}
  ${button({
    className: 'carousel-button button-right',
    id: 'carousel-right-button',
    children: `
      <i class="arrow right"></i>
    `
  })}
`;

const carouselItemWrapperNode = document.getElementById('carousel-item-wrapper').children;

const disableInteraction = () => {
  isAnimating = true;

  setTimeout(() => {
    isAnimating = false;
  }, 500);
}

const animateCarousel = () => {
  if (!isAnimating) {
    disableInteraction();

    let oldPrev = current - 2;
    let oldNext = current + 2;
    let newPrev = current - 1;
    let newNext = current + 1;

    if (carouselItemWrapperNode.length  > 3) {
      if (newPrev <= 0) {
        oldPrev = carouselItemWrapperNode.length - 1;
      } else if (newNext >= carouselItemWrapperNode.length - 1) {
        oldNext = 0;
      }
    }

    if (current === 0) {
      newPrev = carouselItemWrapperNode.length - 1;
      oldPrev = carouselItemWrapperNode.length - 2;
      oldNext = current + 1;
    } else if (current === carouselItemWrapperNode.length - 1) {
      newPrev = current - 1;
      newNext = 0;
      oldNext = 1;
    }

    carouselItemWrapperNode[oldPrev].className = 'carousel-item';
    carouselItemWrapperNode[oldNext].className = 'carousel-item';

    carouselItemWrapperNode[newPrev].className = 'carousel-item prev';
    carouselItemWrapperNode[current].className = 'carousel-item active';
    carouselItemWrapperNode[newNext].className = 'carousel-item next';
  }
}

const handleClickLeftButton = () => {
  if (!isAnimating) {
    if (current === 0) {
      current = carouselItemWrapperNode.length - 1;
    } else {
      current--;
    }

    animateCarousel(current);
  }
}

const handleClickRightButton = () => {
  if (!isAnimating) {
    if (current === carouselItemWrapperNode.length - 1) {
      current = 0;
    } else {
      current++;
    }
  }
  
  animateCarousel(current);
}

carouselItemWrapperNode[carouselItemWrapperNode.length - 1].classList.add('prev');
carouselItemWrapperNode[0].classList.add('active');
carouselItemWrapperNode[1].classList.add('next');

const carouselLeftButton = document.getElementById('carousel-left-button');
const carouselRightButton = document.getElementById('carousel-right-button');

carouselLeftButton.addEventListener('click', handleClickLeftButton);
carouselRightButton.addEventListener('click', handleClickRightButton);