const s=location.pathname.split("/").slice(0,-1).join("/"),l=[s+"/_app/immutable/entry/app.ABaC9oPR.js",s+"/_app/immutable/nodes/0.WBa6N81x.js",s+"/_app/immutable/assets/0.C_L9wZLT.css",s+"/_app/immutable/nodes/1.DDQJI7y2.js",s+"/_app/immutable/nodes/2.DJgu6Oxe.js",s+"/_app/immutable/assets/2.DFckzZQ0.css",s+"/_app/immutable/nodes/3.CFxeUs-m.js",s+"/_app/immutable/assets/3.CFiPsxWy.css",s+"/_app/immutable/nodes/4.CfHzDKUi.js",s+"/_app/immutable/assets/4.C4hRS8a0.css",s+"/_app/immutable/assets/BottomBar.DshL-FHb.css",s+"/_app/immutable/chunks/BottomBar.C2vrBYrQ.js",s+"/_app/immutable/chunks/appearance.BTygaRe9.js",s+"/_app/immutable/chunks/dictionary.DLYViutE.js",s+"/_app/immutable/chunks/disclose-version.B8nYLgL4.js",s+"/_app/immutable/chunks/entry.Dbrki0J7.js",s+"/_app/immutable/chunks/index-client.DXjkudc0.js",s+"/_app/immutable/chunks/index.C7ygDqEZ.js",s+"/_app/immutable/chunks/index.KC8y9J4u.js",s+"/_app/immutable/chunks/legacy.CgpFKzs7.js",s+"/_app/immutable/chunks/persistent-stores.5fR2uNy4.js",s+"/_app/immutable/chunks/props.BQz8PEny.js",s+"/_app/immutable/chunks/render.C1RE0XEP.js",s+"/_app/immutable/chunks/scores.vSP_HOGX.js",s+"/_app/immutable/chunks/settings.BbKrtD84.js",s+"/_app/immutable/chunks/slot.CC3aKrs_.js",s+"/_app/immutable/chunks/store.CbB5JJSv.js",s+"/_app/immutable/chunks/this.-2yZ0d7J.js",s+"/_app/immutable/chunks/utils.BlbffUCT.js",s+"/_app/immutable/entry/start.MELzhfQ7.js"],o=[s+"/favicon.png",s+"/manifest.json",s+"/screenshots/play.png",s+"/screenshots/setup.png"],r="1736461789886",p=`cache-${r}`,u=new Set([...l,...o]),n=self;n.addEventListener("install",e=>{e.waitUntil(caches.open(p).then(a=>(console.log("Caching static assets..."),a.addAll([...u]))).then(()=>{n.skipWaiting()}))});n.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(a=>Promise.all(a.map(t=>{if(t!==p)return console.log(`Deleting old cache: ${t}`),caches.delete(t)}))).then(()=>{n.clients.claim()}))});n.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;const a=new URL(e.request.url),t=u.has(a.pathname);e.respondWith((async()=>{try{if(t){const m=await caches.match(e.request);if(m)return m}const c=await fetch(e.request);return(await caches.open(p)).put(e.request,c.clone()),c}catch(c){const i=await caches.match(e.request);if(i)return i;throw c}})())});
