// Service Worker minimal agar memenuhi kriteria instalasi PWA Chrome
self.addEventListener('fetch', (event) => {
  // Biarkan trafik berjalan normal ke internet (online mode)
  event.respondWith(fetch(event.request));
});
