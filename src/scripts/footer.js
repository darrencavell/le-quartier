import '../styles/footer.css';
import { image } from './components/image';
import { paragraph } from './components/typography';

const footerNode = document.getElementById('footer');

footerNode.innerHTML += `
  <div class="footer-headnote">
    ${image({ alt: 'le quartier logo', className: 'footer-logo', src: './images/lequartier.png' })}
  </div>
  ${paragraph({ className: 'footer-restaurant', text: '© 2020 LE QUARTIER' })}
  ${paragraph({ className: 'footer-place', text: 'Rukan BEZ, Jalan Kelapa Puan 228' })}
  ${paragraph({ className: 'footer-state', text: 'Tangerang, Indonesia 15810' })}
`;
