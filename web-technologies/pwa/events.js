self.addEventListener("install", () => {
  console.log("sw installed");
});

self.addEventListener("activate", () => {
  console.log("sw activated");
});
