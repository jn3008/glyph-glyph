/// <reference lib="webworker" />
import { build, files, version } from "$service-worker";
import { fetchAppResource, isAppNavigation } from "./lib/service-worker-cache";

const CACHE_NAME = `cache-${version}`;
// Precache a shell so a direct /setup refresh also works offline.
const STATIC_ASSETS = new Set(["/", ...build, ...files]);
const worker = self as unknown as ServiceWorkerGlobalScope;

worker.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll([...STATIC_ASSETS]))
      .then(() => worker.skipWaiting()),
  );
});

worker.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith("cache-") && key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => worker.clients.claim()),
  );
});

worker.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== worker.location.origin) return;
  if (!STATIC_ASSETS.has(url.pathname) && !isAppNavigation(event.request))
    return;

  event.respondWith(
    caches
      .open(CACHE_NAME)
      .then((cache) => fetchAppResource(event.request, cache))
      .catch(() => fetch(event.request)),
  );
});
