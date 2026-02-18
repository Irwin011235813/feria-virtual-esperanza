// Este es un Service Worker mínimo para que el navegador permita la instalación
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Aquí podrías cachear archivos, por ahora solo dejamos que pase la petición
  event.respondWith(fetch(event.request));
});
