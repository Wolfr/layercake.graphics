!function(){"use strict";const e=["client/index.65a269a0.js","client/GuideContents.d9fe16e4.js","client/client.da965f5c.js","client/index.3b8ad4ef.js","client/[slug].e266a3c4.js","client/index.e0b22755.js","client/index.1407ed7e.js","client/[slug].ed6b6ed5.js","client/_examples.7a56f2d0.js","client/hljsDefineSvelte.f7bcdc8e.js"].concat(["service-worker-index.html",".DS_Store",".nojekyll","CNAME","copy.svg","deps.json","favicon.png","global.css","hljs.css","icons/download.svg","icons/link.svg","layercake-logo-100.png","layercake-logo-1200.png","layercake-logo-128.png","layercake-logo-192.png","layercake-logo-500x400.png","layercake-logo-512.png","manifest.json","svelte-app.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1579580400232").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1579580400232"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1579580400232").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
