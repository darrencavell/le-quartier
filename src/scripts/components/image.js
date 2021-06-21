import '../../styles/components/image.css';
import { property } from '../globals/utils';

const Image = (props) => {
  const { alt, className = '', src } = props;

  return `
    <picture>
      <source
        media="(max-width: 767px)"
        ${property('data-srcset', src.small)}
        ${property('class', `lazyload ${className}`)}
      >
      <source
        media="(min-width: 768px)"
        ${property('data-srcset', src.large)}
        ${property('class', `lazyload ${className}`)}
      >
      <img
        ${property('data-src', src.medium)}
        ${property('class', `lazyload ${className}`)}
        ${property('alt', alt)}
      />
    </picture>
  `;
};

export default Image;
