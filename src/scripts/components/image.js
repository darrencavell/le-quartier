import '../../styles/components/image.css';
import { property } from '../utils';

export const image = props => {
  const { alt, className = '', src } = props;

  return `
    <img ${property('class', className)} ${property('src', src)} ${property('alt', alt)} />
  `
}