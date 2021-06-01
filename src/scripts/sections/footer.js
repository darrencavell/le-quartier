import '../../styles/sections/footer.css';
import Image from '../components/image';
import { Paragraph } from '../components/typography';

const Footer = {
  async render() {
    return `
      <div class="footer-headnote">
        ${Image({ alt: 'le quartier logo', className: 'footer-logo', src: './images/lequartier.png' })}
      </div>
      ${Paragraph({ className: 'footer-restaurant', text: '© 2020 LE QUARTIER' })}
      ${Paragraph({ className: 'footer-place', text: 'Rukan BEZ, Jalan Kelapa Puan 228' })}
      ${Paragraph({ className: 'footer-state', text: 'Tangerang, Indonesia 15810' })}
    `;
  },
};

export default Footer;
