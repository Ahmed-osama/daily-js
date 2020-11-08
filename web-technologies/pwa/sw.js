const preCacheList = [
  "/",
  "/assets",
  "/assets/1_oOcY2Gn-LVt1h-e9xOv5oA.jpeg",
  "/assets/main.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("appShell-v1.0.0").then((cache) => {
      cache.addAll(preCacheList);
    })
  );
});
