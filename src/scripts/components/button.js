import '../../styles/components/button.css';
import { property } from '../globals/utils';

const Button = (props) => {
  const { children, className, id } = props;

  return `
    <button ${property('class', className)} ${property('id', id)}>
      ${children}
    </button>
  `;
};

export default Button;
