import '../../styles/sections/story.css';

import { link, paragraph } from '../components/typography';
import { image } from '../components/image';

const Story = {
  async render(props) {
    const { city, description, id, name, rating, pictureSrc } = props;

    return `
      <div class="story">
        ${image({ alt: description, className: 'story-image', src: pictureSrc })}
        <div class="story-description">
          ${link({
            className: 'story-title',
            href: `/#/detail/${id}`,
            children: `
              <span>${name}, ${city}</span>
            `
          })}
          ${paragraph({ className: 'story-subtitle', text: `(Rating: ${rating}), ${description}` })}
        </div>
      </div>
    `;
  }
}

export default Story;
