console.log("hello from SW");
try {
  importScripts("events.js"); // this sync api, you can pas multiple files downloads in parallel and executes in order
} catch (err) {}

self.addEventListener("fetch", (event) => {});
