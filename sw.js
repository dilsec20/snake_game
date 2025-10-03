self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("snake-cache").then(cache => {
            return cache.addAll(["snake.html", "manifest.json"]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(resp => resp || fetch(e.request))
    );
});
