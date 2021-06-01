import 'regenerator-runtime';
import '../styles/main.css';

import { Workbox } from 'workbox-window';
import WebSocket from './globals/websocket';
import CONFIG from './globals/config';

import App from './app';

window.addEventListener('hashchange', () => {
  App.render();
});

window.addEventListener('load', () => {
  App.render();

  if ('serviceWorker' in navigator) {
    const workbox = new Workbox('/sw.js');
    workbox.register().then((registration) => {
      // eslint-disable-next-line no-console
      console.log('[Service Worker] registered: ', registration);
    }).catch((registrationError) => {
      // eslint-disable-next-line no-console
      console.log('[Service Worker] registration failed: ', registrationError);
    });
  }

  WebSocket.initialize(CONFIG.WEB_SOCKET_SERVER);
});
