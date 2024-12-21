/// <reference lib="webworker" />
import { build, files, version } from '$service-worker';

// Cache name version
const CACHE_NAME = `cache-${version}`;

// Pre-cache static assets
const STATIC_ASSETS = new Set([...build, ...files]);

// Service Worker global reference
const worker = self as unknown as ServiceWorkerGlobalScope;

// Install event: Cache static assets
worker.addEventListener('install', (event) => {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then((cache) => {
				console.log('Caching static assets...');
				return cache.addAll([...STATIC_ASSETS]);
			})
			.then(() => {
				worker.skipWaiting();
			})
	);
});

// Activate event: Clean up old caches
worker.addEventListener('activate', (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((keys) =>
				Promise.all(
					keys.map((key) => {
						if (key !== CACHE_NAME) {
							console.log(`Deleting old cache: ${key}`);
							return caches.delete(key);
						}
					})
				)
			)
			.then(() => {
				worker.clients.claim();
			})
	);
});

// Fetch event: Serve cached assets, dynamically cache others
worker.addEventListener('fetch', (event) => {
	if (event.request.method !== 'GET') return;

	const url = new URL(event.request.url);
	const isStaticAsset = STATIC_ASSETS.has(url.pathname);

	event.respondWith(
		(async () => {
			try {
				// Serve static assets from cache
				if (isStaticAsset) {
					const cachedResponse = await caches.match(event.request);
					if (cachedResponse) return cachedResponse; // Handle undefined
				}

				// Network-first strategy with caching
				const networkResponse = await fetch(event.request);
				const cache = await caches.open(CACHE_NAME);
				cache.put(event.request, networkResponse.clone());
				return networkResponse;
			} catch (err) {
				// Offline fallback
				const cachedResponse = await caches.match(event.request);
				if (cachedResponse) return cachedResponse;

				throw err; // Rethrow error if no cache is available
			}
		})()
	);
});
