import{n as f,g as _,i as m,j as q}from"./utils.BBSL6nIp.js";const a=[];function x(t,s){return{subscribe:z(t,s).subscribe}}function z(t,s=f){let n=null;const o=new Set;function i(r){if(q(t,r)&&(t=r,n)){const u=!a.length;for(const e of o)e[1](),a.push(e,t);if(u){for(let e=0;e<a.length;e+=2)a[e][0](a[e+1]);a.length=0}}}function l(r){i(r(t))}function b(r,u=f){const e=[r,u];return o.add(e),o.size===1&&(n=s(i,l)||f),r(t),()=>{o.delete(e),o.size===0&&n&&(n(),n=null)}}return{set:i,update:l,subscribe:b}}function j(t,s,n){const o=!Array.isArray(t),i=o?[t]:t;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=s.length<2;return x(n,(b,r)=>{let u=!1;const e=[];let p=0,d=f;const y=()=>{if(p)return;d();const c=s(o?e[0]:e,b,r);l?b(c):d=typeof c=="function"?c:f},h=i.map((c,g)=>_(c,w=>{e[g]=w,p&=~(1<<g),u&&y()},()=>{p|=1<<g}));return u=!0,y(),function(){m(h),d(),u=!1}})}function v(t){let s;return _(t,n=>s=n)(),s}export{j as d,v as g,z as w};
