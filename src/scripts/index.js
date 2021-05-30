import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

import App from './app';
import { Workbox } from 'workbox-window';

// import './routes/header';
// import './components/carousel';
// import './routes/story';
// import './routes/footer';

const workbox = new Workbox('/sw.js');

const app = new App();

window.addEventListener('hashchange', () => {
  app.render();
});

if ('serviceWorker' in navigator) {  
  window.addEventListener('load', () => {
    app.render();
    workbox.register().then(registration => {
      console.log('[Service Worker] registered: ', registration);
    }).catch(registrationError => {
      console.log('[Service Worker] registration failed: ', registrationError);
    });
  });
}