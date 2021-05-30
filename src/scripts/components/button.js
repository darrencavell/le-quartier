import '../../styles/components/button.css';
import { property } from '../globals/utils';

export const button = props => {
  const { children, className, id } = props;

  return `
    <button ${property('class', className)} ${property('id', id)}>
      ${children}
    </button>
  `;
}