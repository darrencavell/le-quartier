import '../styles/story.css';
import data from '../DATA.json';

import { link, paragraph } from './components/typography';
import { image } from './components/image';
import { renderChildren } from './utils';

const contentNode = document.getElementById('content');

contentNode.innerHTML = renderChildren(data.restaurants.map(d => {
  return `
    <div class="story">
      ${image({ alt: d.description, className: 'story-image', src: d.pictureId })}
      <div class="story-description">
        ${link({
          className: 'story-title',
          href: d.href,
          children: `
            <span>${d.name}, ${d.city}</span>
          `
        })}
        ${paragraph({ className: 'story-subtitle', text: `(Rating: ${d.rating}), ${d.description}` })}
      </div>
    </div>
  `
}));
