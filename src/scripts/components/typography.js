import '../../styles/components/typography.css';
import { property } from '../utils';

export const h1 = props => {
  const { className, text } = props;

  return `
    <h1 ${property('class', className)}>
      <span>${text}</span>
    </h1>
  `
};

export const paragraph = props => {
  const { className, text } = props;

  return `
    <p ${property('class', className)}>${text}</p>
  `
}

export const link = props => {
  const { children, className, href } = props;

  return `
    <a ${property('class', className)} ${property('href', href)}>
      ${children}
    </a>
  `
}