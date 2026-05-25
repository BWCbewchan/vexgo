/* PWA service worker — installability + light shell cache */
var CACHE = 'vexgo-pwa-v2';
var SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './vexgo-platform.js',
  './mobile-enable.js',
  './vexgo-mobile-fit.js',
  './vexgo-mobile.css',
  './install-app.js',
  './pwa/icon-192.png',
  './pwa/icon-512.png',
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(SHELL).catch(function () {});
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (k) {
            return k !== CACHE;
          })
          .map(function (k) {
            return caches.delete(k);
          })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  var url = new URL(event.request.url);
  if (url.origin !== self.location.origin) {
    event.respondWith(fetch(event.request));
    return;
  }
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      var network = fetch(event.request)
        .then(function (res) {
          if (res && res.status === 200 && url.pathname.indexOf('dist/') === -1) {
            var copy = res.clone();
            caches.open(CACHE).then(function (c) {
              c.put(event.request, copy);
            });
          }
          return res;
        })
        .catch(function () {
          return cached;
        });
      return cached || network;
    })
  );
});
