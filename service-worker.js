const s=location.pathname.split("/").slice(0,-1).join("/"),u=[s+"/_app/immutable/entry/app.DrW5vQsD.js",s+"/_app/immutable/nodes/0.DkQn3EkY.js",s+"/_app/immutable/assets/0.BbFoGy_Z.css",s+"/_app/immutable/nodes/1.ClRea0Ht.js",s+"/_app/immutable/nodes/2.Cj7-_6TS.js",s+"/_app/immutable/assets/2.DVnVNtEk.css",s+"/_app/immutable/nodes/3.CHLGkQY1.js",s+"/_app/immutable/assets/3.34NPCA-g.css",s+"/_app/immutable/nodes/4.yaZ2jcVd.js",s+"/_app/immutable/assets/4.O52RNku8.css",s+"/_app/immutable/assets/BottomBar.CfxA-3QU.css",s+"/_app/immutable/chunks/BottomBar.CLslfAJr.js",s+"/_app/immutable/chunks/appearance.PmRiRRxv.js",s+"/_app/immutable/chunks/class.7PBngDXZ.js",s+"/_app/immutable/chunks/disclose-version.BnyP3OB8.js",s+"/_app/immutable/chunks/entry.sDj-rgKs.js",s+"/_app/immutable/chunks/index-client.BhUYpw5D.js",s+"/_app/immutable/chunks/index.l0XiQgh3.js",s+"/_app/immutable/chunks/index.qhLCbthJ.js",s+"/_app/immutable/chunks/legacy.Vqdj_PMR.js",s+"/_app/immutable/chunks/props.edKkFTeU.js",s+"/_app/immutable/chunks/render.DlAr8I1h.js",s+"/_app/immutable/chunks/scores.BJ7-JvPj.js",s+"/_app/immutable/chunks/settings._mfimNkJ.js",s+"/_app/immutable/chunks/slot.DDARBGDQ.js",s+"/_app/immutable/chunks/store.BWdm8UL4.js",s+"/_app/immutable/chunks/this.CHCpDkWg.js",s+"/_app/immutable/chunks/utils.Dhw7Y63s.js",s+"/_app/immutable/entry/start.D5rdvSWt.js"],o=[s+"/favicon.png",s+"/manifest.json"],h="1735571727782",p=`cache-${h}`,l=new Set([...u,...o]),n=self;n.addEventListener("install",e=>{e.waitUntil(caches.open(p).then(a=>(console.log("Caching static assets..."),a.addAll([...l]))).then(()=>{n.skipWaiting()}))});n.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(a=>Promise.all(a.map(t=>{if(t!==p)return console.log(`Deleting old cache: ${t}`),caches.delete(t)}))).then(()=>{n.clients.claim()}))});n.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;const a=new URL(e.request.url),t=l.has(a.pathname);e.respondWith((async()=>{try{if(t){const m=await caches.match(e.request);if(m)return m}const c=await fetch(e.request);return(await caches.open(p)).put(e.request,c.clone()),c}catch(c){const i=await caches.match(e.request);if(i)return i;throw c}})())});