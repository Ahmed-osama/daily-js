console.log("hello from SW");
try {
  importScripts("events.js"); // this sync api, you can pas multiple files downloads in parallel and executes in order
} catch (err) {}

self.addEventListener("fetch", (event) => {
  const parseedUrl = new URL(event.request.url);
  switch (parseedUrl.pathname) {
    case "/":
      return;
  }
  const response = new Response(
    `
    <html>
    <head>service worker response</head>
    <body>
    <h1>URL : ${event.request.url}</h1>
    <table>

        <tr>
            <th>cache</th>
            <td>${event.request.cache}</td>
        </tr>
        <tr>
            <th>credential</th>
            <td>${event.request.credential}</td>
        </tr>
        <tr>
            <th>destination</th>
            <td>${event.request.destination}</td>
        </tr>
        <tr>
            <th>method</th>
            <td>${event.request.method}</td>
        </tr>
        <tr>
            <th>referrer</th>
            <td>${event.request.referrer}</td>
        </tr>
    </table>
    
    </body>
    </html>
  `,
    {
      headers: {
        status: 200,
        statusText: "OK",
        "Content-type": "text/html",
      },
    }
  );
  event.respondWith(response);
});
