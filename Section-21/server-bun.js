import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("Hello its ice tea", { status: 200 });
    } else if (url.pathname === "/ice-tea") {
         return new Response("Ice tea is the best option in Summer", { status: 200 });
    } else {
        new Response("404 : Not found bro", { status: 404 });
    }
    },
    port: 3000,
    hostname: '127.0.0.1',
});

// $ bun server-bun.js
