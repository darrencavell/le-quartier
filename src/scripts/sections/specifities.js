import { renderChildren } from '../globals/utils';
import { previewer } from '../components/previewer';

import '../../styles/sections/specifities.css';

const Specifities = {
  async render(props = {}) {
    const { specifities } = props;
    
    return `
      <div class="specifities">
        ${renderChildren(specifities.map(specifity => {
          const { key, value } = specifity;

          return `
            <div class="specifity">
              ${previewer({ key, value })}
            </div>
          `
        }))}
      </div>
    `;
  }
}

export default Specifities;
