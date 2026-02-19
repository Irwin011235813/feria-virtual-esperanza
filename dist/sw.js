// public/sw.js
const CACHE_NAME = 'feria-esperanza-v1';

self.addEventListener('install', (event) => {
  // Activa el SW inmediatamente sin esperar a que se cierre la pestaña anterior
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Toma control de todas las pestañas abiertas de inmediato
  event.waitUntil(clients.claim());
});

// Estrategia: Network First — sirve desde red, cae a caché si hay error
self.addEventListener('fetch', (event) => {
  // Solo intercepta peticiones GET y del mismo origen
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Guarda una copia en caché
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});