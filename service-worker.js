const s=location.pathname.split("/").slice(0,-1).join("/"),l=[s+"/_app/immutable/entry/app.CHT5hbc5.js",s+"/_app/immutable/nodes/0.Duua-tA7.js",s+"/_app/immutable/assets/0.DfpFBQU-.css",s+"/_app/immutable/nodes/1.DiMBygGC.js",s+"/_app/immutable/nodes/2.CBX3PDTP.js",s+"/_app/immutable/assets/2.C1-5mNuN.css",s+"/_app/immutable/nodes/3.DdY_TYXH.js",s+"/_app/immutable/assets/3.CFiPsxWy.css",s+"/_app/immutable/nodes/4.Nej4Odvi.js",s+"/_app/immutable/assets/4.C4hRS8a0.css",s+"/_app/immutable/assets/BottomBar.DshL-FHb.css",s+"/_app/immutable/chunks/BottomBar.Cgco7nSJ.js",s+"/_app/immutable/chunks/appearance.BTygaRe9.js",s+"/_app/immutable/chunks/dictionary.CuEeG7nS.js",s+"/_app/immutable/chunks/disclose-version.B8nYLgL4.js",s+"/_app/immutable/chunks/entry.BNjf9OOO.js",s+"/_app/immutable/chunks/index-client.DXjkudc0.js",s+"/_app/immutable/chunks/index.7srdrqau.js",s+"/_app/immutable/chunks/index.C7ygDqEZ.js",s+"/_app/immutable/chunks/legacy.CgpFKzs7.js",s+"/_app/immutable/chunks/persistent-stores.5fR2uNy4.js",s+"/_app/immutable/chunks/props.BQz8PEny.js",s+"/_app/immutable/chunks/render.C1RE0XEP.js",s+"/_app/immutable/chunks/scores.Ba7OLvPm.js",s+"/_app/immutable/chunks/settings.BbKrtD84.js",s+"/_app/immutable/chunks/slot.CC3aKrs_.js",s+"/_app/immutable/chunks/store.CbB5JJSv.js",s+"/_app/immutable/chunks/this.-2yZ0d7J.js",s+"/_app/immutable/chunks/utils.BlbffUCT.js",s+"/_app/immutable/entry/start.CGg2MlOF.js"],o=[s+"/favicon.png",s+"/manifest.json",s+"/screenshots/play.png",s+"/screenshots/setup.png"],r="1736369877871",i=`cache-${r}`,u=new Set([...l,...o]),n=self;n.addEventListener("install",e=>{e.waitUntil(caches.open(i).then(a=>(console.log("Caching static assets..."),a.addAll([...u]))).then(()=>{n.skipWaiting()}))});n.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(a=>Promise.all(a.map(t=>{if(t!==i)return console.log(`Deleting old cache: ${t}`),caches.delete(t)}))).then(()=>{n.clients.claim()}))});n.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;const a=new URL(e.request.url),t=u.has(a.pathname);e.respondWith((async()=>{try{if(t){const m=await caches.match(e.request);if(m)return m}const c=await fetch(e.request);return(await caches.open(i)).put(e.request,c.clone()),c}catch(c){const p=await caches.match(e.request);if(p)return p;throw c}})())});
