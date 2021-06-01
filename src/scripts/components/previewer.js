import '../../styles/components/image.css';
import { Bold } from './typography';
import { property } from '../globals/utils';

const Previewer = (props) => {
  const { className, key, value } = props;

  return `
    <div ${property('class', className)}>
      ${Bold({ text: `${key}:` })}
      <span>${value}</span>
      <br />
    </div>
  `;
};

export default Previewer;
