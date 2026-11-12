const CACHE_NAME = 'flag-media-cache-v5.6';
const ASSETS_TO_CACHE = [
  './',
  'index.html',
  'styles.css?v=5.6',
  'app.js?v=5.6',
  'logo.png',
  'icon-192.png',
  'icon-512.png',
  'manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Only handle http/https GET requests
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) {
    return;
  }
  // Bypass cache for Firebase Realtime Database & WebSocket endpoints
  if (event.request.url.includes('firebaseio.com') || event.request.url.includes('firebasedatabase.app')) {
    return;
  }

  // Network first with cache fallback
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => caches.match(event.request))
  );
});

