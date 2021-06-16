/* eslint-disable indent */
import '../../styles/sections/story.css';

import { Link, Paragraph } from '../components/typography';
import Image from '../components/image';
import API from '../globals/endpoint';
import IMAGE_SIZE from '../globals/constants';

const Story = {
  async render(props) {
    const {
      city, description, id, name, rating, pictureId,
    } = props;

    return `
      <div class="story">
        ${Image({
          alt: description,
          className: 'story-image',
          src: {
            small: API.IMAGE_RESTAURANT(IMAGE_SIZE.SMALL, pictureId),
            medium: API.IMAGE_RESTAURANT(IMAGE_SIZE.MEDIUM, pictureId),
            large: API.IMAGE_RESTAURANT(IMAGE_SIZE.LARGE, pictureId)
          }
        })}
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
