import{d as n}from"./index.DrMsbBsN.js";import{s as o}from"./settings.BEngTEVy.js";function s(){const r=new Set;let a="light";function c(e){a=e.matches?"dark":"light",r.forEach(t=>{t(a)})}{const e=matchMedia("(prefers-color-scheme: dark)");a=e.matches?"dark":"light",e.addEventListener("change",c)}return{subscribe(e){return r.add(e),e(a),function(){r.delete(e)}}}}const d=s(),m=n([d,o],([r,a])=>a.appearance==="auto"?r:a.appearance);export{m as a};
