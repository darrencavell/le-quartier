import '../styles/story.css';
import data from '../DATA.json';

import { h1, paragraph } from './components/typography';
import { image } from './components/image';
import { renderChildren } from './utils';

const contentNode = document.getElementById('content');

contentNode.innerHTML = renderChildren(data.restaurants.map(d => {
  return `
    <div class="story">
      ${image({ alt: d.description, className: 'story-image', src: d.pictureId })}
      <div class="story-description">
        ${h1({ className: 'story-title', text: `${d.name}, ${d.city}` })}
        ${paragraph({ className: 'story-subtitle', text: `(Rating: ${d.rating}), ${d.description}` })}
      </div>
    </div>
  `
}));
