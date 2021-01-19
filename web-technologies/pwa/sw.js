const preCacheList = [
  "/",
  "/assets/1_oOcY2Gn-LVt1h-e9xOv5oA.jpeg",
  "/assets/main.js",
  "/assets/style.css",
  "https://api.github.com/users?per_page=100&page=1",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("appShell-v1.0.0").then((cache) => {
      cache.addAll(preCacheList);
    })
  );
});

addEventListener("fetch", (event) => {
  // Prevent the default, and handle the request ourselves.
  try {
    event.respondWith(
      (async function () {
        // Try to get the response from a cache.
        const cachedResponse = await caches.match(event.request);
        // Return it if we found one.
        if (cachedResponse) return cachedResponse;
        // If we didn't find a match in the cache, use the network.
        return fetch(event.request);
      })()
    );
  } catch (err) {
    return fetch(event.request);
  }
});
