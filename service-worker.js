// Bei jeder inhaltlichen Änderung an index.html/app.js/styles.css: CACHE_NAME hochzählen
// und die Versions-Query-Strings unten an die in index.html verwendeten anpassen.
const CACHE_NAME = "qrism-shell-v5";

const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css?v=7",
  "./app.js?v=6",
  "./manifest.json",
  "./logo.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/icon-180.png",
];

const CDN_FILES = ["https://unpkg.com/qr-code-styling@1.6.0-rc.1/lib/qr-code-styling.js"];

self.addEventListener("install", (event) => {
  // cache.addAll() is all-or-nothing: one failed URL (e.g. a transient hiccup
  // fetching the CDN library) would abort the entire install and leave the
  // app stuck without an active service worker. Cache each file independently
  // instead, so a single failure can't block the rest.
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) =>
        Promise.all(
          [...APP_SHELL, ...CDN_FILES].map((url) =>
            cache.add(url).catch((err) => console.warn("SW: caching failed for", url, err))
          )
        )
      )
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          if (response.ok && event.request.url.startsWith(self.location.origin)) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match("./index.html"));
    })
  );
});
