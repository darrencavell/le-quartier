import '../../styles/components/alert.css';
import { property } from '../globals/utils';

const Alert = (props) => {
  const { text, className, id } = props;

  return `
    <div ${property('class', `alert ${className}`)} ${property('id', id)}>
      ${text}
    </div>
  `;
};

export default Alert;
