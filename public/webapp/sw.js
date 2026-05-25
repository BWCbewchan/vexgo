/* Minimal service worker — enables PWA install (laptop / Android / iPad home screen). */
var CACHE = 'vexgo-pwa-v1';

self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  event.respondWith(fetch(event.request));
});
