import{w as i}from"./index.CoOIDogu.js";function g(t,o){const s=i(o,()=>{if(typeof sessionStorage<"u"){const e=sessionStorage.getItem(t);e&&s.set(JSON.parse(e))}return()=>{}});return s.subscribe(e=>{typeof sessionStorage<"u"&&sessionStorage.setItem(t,JSON.stringify(e))}),s}function u(t,o){const s=i(o,()=>{if(typeof localStorage<"u"){const e=localStorage.getItem(t);if(e){const n=JSON.parse(e),r={...o};for(const a in n)n[a]!==null&&(r[a]=n[a]);s.set(r)}}return()=>{}});return s.subscribe(e=>{typeof localStorage<"u"&&localStorage.setItem(t,JSON.stringify(e))}),s}const p=["light","auto","dark"],d=["red","yellow","lime","teal","blue","indigo","purple"],c={appearance:"auto",colour:"purple",using_stopwatch:!0},l=u("game-settings",c);function S(){l.update(t=>({...t,using_stopwatch:!t.using_stopwatch}))}export{d as a,S as b,g as c,u as l,l as s,p as t};
