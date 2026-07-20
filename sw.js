// THE DOGHOUSE — service worker, Tier 1 core cache.
//
// No build step in this project, so there's no commit hash to embed
// automatically — bump CACHE_VERSION by hand any time a Tier 1 file's
// *content* changes (slide images, css, js, html), even if the path
// stays the same. Without a bump, a returning client keeps the old
// bytes at that path forever, since the fetch handler below is cache-first.
// New product/slide additions don't need a bump on their own — they're
// just new entries in PRECACHE_URLS, picked up on next deploy — but any
// edit to an *existing* file's content needs one.
const CACHE_VERSION = "2026-07-20.2";
const CACHE_NAME = `doghouse-tier1-${CACHE_VERSION}`;

// Tier 1 — everything needed to run both decks (customer + training,
// Sunesta + Eclipse) fully offline: app shell, both decks' images, the
// awning-extend and drop-screen frame sequences, the fabric book pages,
// and the price-conditioning photos. ~18MB total.
//
// Tier 2 (Photo Library + Docs, ~80MB, rep-reference-only) is NOT
// precached here — that's Round 3, background-cached after install
// when online rather than blocking this install step.
const PRECACHE_URLS = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "css/styles.css",
  "js/registry.js",
  "js/data-sunesta.js",
  "js/data-eclipse.js",
  "js/images-map.js",
  "js/library-data.js",
  "js/app.js",
  "images/app-icon.svg",
  "images/icon-120.png",
  "images/icon-152.png",
  "images/icon-167.png",
  "images/icon-180.png",
  "images/icon-192.png",
  "images/icon-512.png",
  "images/dealer-family.jpg",
  "images/training-photo.jpg",
  "images/training-cert.jpg",
  "images/ath-logo.jpg",
  "images/badge-45years.png",
  "images/icon-ruler.jpg",
  "images/american-built.png",
  "images/badge-miamidade.png",
  "images/badge-bbb.jpg",
  "images/badge-skincancer.jpg",
  "images/reasons-photo.jpg",
  "images/perfect-day.jpg",
  "images/smarttech-title.jpg",
  "images/sensors.jpg",
  "images/beach-before.jpg",
  "images/beach-after.jpg",
  "images/opt-fabric.jpg",
  "images/opt-arm.jpg",
  "images/opt-mount-wide.jpg",
  "images/opt-mount-close.jpg",
  "images/opt-dropscreen.jpg",
  "images/falllove-1.jpg",
  "images/falllove-2.jpg",
  "images/falllove-3.jpg",
  "images/falllove-4.jpg",
  "images/award.jpg",
  "images/sunesta-logo.jpg",
  "images/led-night.svg",
  "images/mylink-app.svg",
  "images/smarttech-illus.svg",
  "images/sensors-illus.svg",
  "images/fabric-swatches.svg",
  "images/service-badge.svg",
  "images/prod-gutter.svg",
  "images/prod-screen.svg",
  "images/prod-louver.svg",
  "images/prod-gutter-photo.jpg",
  "images/prod-screen-photo.jpg",
  "images/prod-louver-photo.jpg",
  "images/logo-gutterhelmet.jpg",
  "images/logo-eclipse.png",
  "images/tri-ath-family.jpg",
  "images/tri-sunesta-awning.jpg",
  "images/reason-thermometer.svg",
  "images/reason-rain.svg",
  "images/reason-uvwood.svg",
  "images/refmap-placeholder.svg",
  "images/proc-manager.svg",
  "images/proc-site.svg",
  "images/proc-install.svg",
  "images/proc-walkthrough.svg",
  "images/proc-warranty.svg",
  "images/proc-service.svg",
  "images/eclipse/byerly-1.jpg",
  "images/eclipse/byerly-2.jpg",
  "images/eclipse/byerly-night.jpg",
  "images/eclipse/monument-18ft-up.jpg",
  "images/eclipse/monument-18ft-down.jpg",
  "images/eclipse/monument-18ft-down-outside.jpg",
  "images/eclipse/garcia-inside.jpg",
  "images/eclipse/three-ezips-porch.jpg",
  "images/eclipse/ezip-with-awning.jpg",
  "images/eclipse/sunroom-drop-screen.jpg",
  "images/eclipse/part-way-up.jpg",
  "images/eclipse/waterlander-full.jpg",
  "images/eclipse/recessed-stone.jpg",
  "images/eclipse/ez-how-it-works.svg",
  "images/eclipse/logo-somfy.png",
  "images/eclipse/service-badge-ez.svg",
  "images/pricecond/tier1-shadesail.jpg",
  "images/pricecond/tier2-diy.jpg",
  "images/pricecond/tier3-lowgrade.jpg",
  "images/pricecond/tier4-midtier.jpg",
  "images/pricecond/tier5-highend.jpg",
  "images/pricecond/tier6-pergola.jpg",
  "images/awning-frames/frame-00.jpg",
  "images/awning-frames/frame-01.jpg",
  "images/awning-frames/frame-02.jpg",
  "images/awning-frames/frame-03.jpg",
  "images/awning-frames/frame-04.jpg",
  "images/awning-frames/frame-05.jpg",
  "images/awning-frames/frame-06.jpg",
  "images/awning-frames/frame-07.jpg",
  "images/awning-frames/frame-08.jpg",
  "images/awning-frames/frame-09.jpg",
  "images/awning-frames/frame-10.jpg",
  "images/awning-frames/frame-11.jpg",
  "images/awning-frames/frame-12.jpg",
  "images/awning-frames/frame-13.jpg",
  "images/awning-frames/frame-14.jpg",
  "images/awning-frames/frame-15.jpg",
  "images/awning-frames/frame-16.jpg",
  "images/awning-frames/frame-17.jpg",
  "images/awning-frames/frame-18.jpg",
  "images/awning-frames/frame-19.jpg",
  "images/awning-frames/frame-20.jpg",
  "images/awning-frames/frame-21.jpg",
  "images/awning-frames/frame-22.jpg",
  "images/awning-frames/frame-23.jpg",
  "images/awning-frames/frame-24.jpg",
  "images/awning-frames/frame-25.jpg",
  "images/awning-frames/frame-26.jpg",
  "images/awning-frames/frame-27.jpg",
  "images/awning-frames/frame-28.jpg",
  "images/awning-frames/frame-29.jpg",
  "images/awning-frames/frame-30.jpg",
  "images/awning-frames/frame-31.jpg",
  "images/dropscreen-frames/frame-00.jpg",
  "images/dropscreen-frames/frame-01.jpg",
  "images/dropscreen-frames/frame-02.jpg",
  "images/dropscreen-frames/frame-03.jpg",
  "images/dropscreen-frames/frame-04.jpg",
  "images/dropscreen-frames/frame-05.jpg",
  "images/dropscreen-frames/frame-06.jpg",
  "images/dropscreen-frames/frame-07.jpg",
  "images/dropscreen-frames/frame-08.jpg",
  "images/dropscreen-frames/frame-09.jpg",
  "images/dropscreen-frames/frame-10.jpg",
  "images/dropscreen-frames/frame-11.jpg",
  "images/dropscreen-frames/frame-12.jpg",
  "images/dropscreen-frames/frame-13.jpg",
  "images/dropscreen-frames/frame-14.jpg",
  "images/dropscreen-frames/frame-15.jpg",
  "images/dropscreen-frames/frame-16.jpg",
  "images/dropscreen-frames/frame-17.jpg",
  "images/dropscreen-frames/frame-18.jpg",
  "images/dropscreen-frames/frame-19.jpg",
  "images/dropscreen-frames/frame-20.jpg",
  "images/dropscreen-frames/frame-21.jpg",
  "images/dropscreen-frames/frame-22.jpg",
  "images/dropscreen-frames/frame-23.jpg",
  "images/dropscreen-frames/frame-24.jpg",
  "images/dropscreen-frames/frame-25.jpg",
  "images/dropscreen-frames/frame-26.jpg",
  "images/dropscreen-frames/frame-27.jpg",
  "images/fabric-pages/page-01.jpg",
  "images/fabric-pages/page-02.jpg",
  "images/fabric-pages/page-03.jpg",
  "images/fabric-pages/page-04.jpg",
  "images/fabric-pages/page-05.jpg",
  "images/fabric-pages/page-06.jpg",
  "images/fabric-pages/page-07.jpg",
  "images/fabric-pages/page-08.jpg",
  "images/fabric-pages/z-frame-colors.jpg",
  "images/fabric-pages/z-smartdrop-colors.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

// Cache-first for everything precached (Tier 1 is static per-version, no
// need to hit the network). ignoreSearch so a cache-busting or tracking
// query string on an otherwise-precached URL still hits the cache instead
// of falling through to the network. Anything not precached — Tier 2
// photo library, docs, the YouTube iframe — falls through to the network
// and is intentionally NOT cached here; that's Round 3.
//
// Navigation requests (app launch / reload) get an extra fallback to the
// cached shell if nothing matches even with ignoreSearch, so relaunching
// with an unfamiliar URL never hard-fails offline.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request, {ignoreSearch: true}).then((cached) => {
      if (cached) return cached;
      if (event.request.mode === "navigate") {
        return caches.match("index.html").then((shell) => shell || fetch(event.request));
      }
      return fetch(event.request);
    })
  );
});
