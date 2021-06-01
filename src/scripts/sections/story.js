/* eslint-disable indent */
import '../../styles/sections/story.css';

import { Link, Paragraph } from '../components/typography';
import Image from '../components/image';

const Story = {
  async render(props) {
    const {
      city, description, id, name, rating, pictureSrc,
    } = props;

    return `
      <div class="story">
        ${Image({ alt: description, className: 'story-image', src: pictureSrc })}
        <div class="story-description">
          ${Link({
            className: 'story-title',
            href: `/#/detail/${id}`,
            children: `
              <span>${name}, ${city}</span>
            `,
          })}
          ${Paragraph({ className: 'story-subtitle', text: `(Rating: ${rating}), ${description}` })}
        </div>
      </div>
    `;
  },
};

export default Story;
