const cacheName="ffbd436c38879b6a505312dffa0c0049";self.addEventListener("install",(e=>{e.waitUntil(caches.open(cacheName).then((e=>e.add("."))))})),self.addEventListener("activate",(e=>e.waitUntil(caches.keys().then((e=>Promise.all(e.filter((e=>e!==cacheName)).map((e=>caches.delete(e))))))))),self.addEventListener("fetch",(e=>e.respondWith(caches.match(e.request).then((a=>a||fetch(e.request)))))),self.addEventListener("message",(e=>{"skipWaiting"===e.data.action&&self.skipWaiting()}));
