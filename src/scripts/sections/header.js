/* eslint-disable indent */
import '../../styles/sections/header.css';
import Button from '../components/button';
import Image from '../components/image';
import { Link, Paragraph } from '../components/typography';
import { renderChildren } from '../globals/utils';

const Header = {
  async render(props = {}) {
    const contents = [
      [
        { close: true },
        { logo: true, url: './images/lequartier.png', alt: 'le quartier logo' },
        { link: true, title: 'Home', href: '/#/restaurants' },
        { link: true, title: 'Favorite', href: '/#/favourites' },
        { link: true, title: 'About Us', href: 'https://id.linkedin.com/in/darrencavell' },
      ],
      [
        { link: true, title: 'Story' },
        { link: true, title: 'Restaurants' },
        { link: true, title: 'Le Quartier\'s Blog' },
      ],
    ];

    const { isBlackTheme = false } = props;

    return `
      <div class="header-wrapper" id="header-wrapper">
        ${Image({
          className: 'header-logo',
          src: isBlackTheme ? './images/lequartier-black.png' : './images/lequartier.png',
          alt: 'le quartier logo',
        })}
        ${Button({
          className: 'navigation',
          id: 'navigation-hamburger-icon',
          children: `
            <span class="icon-line ${isBlackTheme ? 'black' : ''} line-1"></span>
            <span class="icon-line ${isBlackTheme ? 'black' : ''} line-2"></span>
            <span class="icon-line ${isBlackTheme ? 'black' : ''} line-3"></span>
          `,
        })}
      </div>
      <div class="sidebar" id="sidebar">
        ${renderChildren(contents.map((pages) => `
          <div class="sidebar-menu-wrapper">
            ${renderChildren(pages.map((menu) => {
              if (Object.keys(menu).includes('menu')) {
                return `
                  ${Paragraph({ className: 'sidebar-menu', text: menu.title })}
                `;
              }

              if (Object.keys(menu).includes('logo')) {
                return `
                  ${Image({ alt: menu.alt, className: 'sidebar-logo', src: menu.url })}
                `;
              }

              if (Object.keys(menu).includes('link')) {
                return `
                  ${Link({
                    className: 'sidebar-link',
                    href: menu.href,
                    children: `
                      <span>${menu.title}</span>
                    `,
                  })}
                `;
              }

              return `
                  ${Button({
                    className: 'navigation active',
                    id: 'navigation-close-icon',
                    ariaLabel: 'hamburger-navigation',
                    children: `
                      <span class="icon-line line-1"></span>
                      <span class="icon-line line-2"></span>
                      <span class="icon-line line-3"></span>
                    `,
                  })}
                `;
            }))}
          </div>
        `))}
      </div>
    `;
  },
  async componentDidMount() {
    const sidebarNode = document.getElementById('sidebar');
    const navigationHamburgerNode = document.getElementById('navigation-hamburger-icon');

    const showNavigationBar = () => {
      if (sidebarNode.classList.contains('active')) {
        sidebarNode.classList.remove('active');
      } else {
        sidebarNode.classList.add('active');
      }
    };

    navigationHamburgerNode.addEventListener('click', showNavigationBar);
    const navigationCloseNode = document.getElementById('navigation-close-icon');
    navigationCloseNode.addEventListener('click', showNavigationBar);
  },
};

export default Header;
