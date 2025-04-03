// service-worker.js

const CACHE_NAME = "pwa-cache-v1"; // Nombre del caché
const urlsToCache = [
  "/", // Página principal
  "/index.html", // HTML
  "/style.css", // CSS
  "/app.js", // JS
  "/icon-192x192.png", // Icono de la aplicación
  "/icon-512x512.png", // Icono de la aplicación
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
