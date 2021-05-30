import '../../styles/components/image.css';
import { property } from '../globals/utils';
import { bold } from './typography';

export const previewer = props => {
  const { className, key, value } = props;

  return `
    <div ${property('class', className)}>
      ${bold({ text: `${key}:` })}
      <span>${value}</span>
      <br />
    </div>
  `
}