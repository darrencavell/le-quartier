import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

import CONFIG from './globals/config';

precacheAndRoute(self.__WB_MANIFEST || []);

registerRoute(
  new RegExp('^https://dicoding-restaurant-api.el.r.appspot.com/(.*)'),
  new StaleWhileRevalidate({
    cacheName: `${CONFIG.CACHE_NAME}-DATA-RESPONSE`,
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 100 * 60
      })
    ]
  })
);

registerRoute(
  new RegExp('^https://restaurant-api.dicoding.dev/images/(.*)'),
  new StaleWhileRevalidate({
    cacheName: `${CONFIG.CACHE_NAME}-IMAGE-RESPONSE`,
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 100 * 60
      })
    ]
  })
);

registerRoute(
  new RegExp('^https://use.fontawesome.com/(.*)'),
  new StaleWhileRevalidate({
    cacheName: `${CONFIG.CACHE_NAME}-FONT-RESPONSE`,
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 100 * 60
      })
    ]
  })
);

