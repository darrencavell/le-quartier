import '../../styles/components/input.css';
import { property } from '../globals/utils';

const Input = (props) => {
  const { className = '', id, placeholder } = props;

  return `
    <input type="text" ${property('class', className)} ${property('id', id)} ${property('placeholder', placeholder)} />
  `;
};

export default Input;
