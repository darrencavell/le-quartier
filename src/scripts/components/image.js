import '../../styles/components/image.css';
import { property } from '../globals/utils';

const Image = (props) => {
  const { alt, className = '', src } = props;

  return `
    <picture>
      <source media="(max-width: 767px)" ${property('srcset', src.small)}>
      <source media="(min-width: 768px)" ${property('srcset', src.large)}>
      <img ${property('class', `lazyload ${className}`)} ${property('data-src', src.medium)} ${property('alt', alt)} />
    </picture>
  `;
};

export default Image;
