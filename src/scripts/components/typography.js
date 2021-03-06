import '../../styles/components/typography.css';
import { property } from '../globals/utils';

export const H1 = (props) => {
  const { className, text } = props;

  return `
    <h1 ${property('class', className)}>
      <span>${text}</span>
    </h1>
  `;
};

export const Bold = (props) => {
  const { className, text } = props;

  return `
    <strong ${property('class', className)}>
      <span>${text}</span>
    </strong>
  `;
};

export const Paragraph = (props) => {
  const { className, text } = props;

  return `
    <p ${property('class', className)}>${text}</p>
  `;
};

export const Link = (props) => {
  const { children, className, href } = props;

  return `
    <a ${property('class', className)} ${property('href', href)}>
      ${children}
    </a>
  `;
};
