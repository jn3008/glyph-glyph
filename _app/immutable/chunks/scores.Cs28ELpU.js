import{p as m,c as _,g as o,e as b,t as g,a as l,b as h,d as i,f as w,s as k,h as x}from"./dictionary.DvAqtcLt.js";import{g as n}from"./index.C7ygDqEZ.js";import{s as z,l as C}from"./persistent-stores.5fR2uNy4.js";function c(t){var e;const r=(e=n(i))==null?void 0:e.path;switch(r[0]){case"kana":return b.get(g(t))??[l(t)];case"greek":switch(r[1]){case"transcriptions":return o.transcriptions[t.toLowerCase()];case"names":return o.names[t.toLowerCase()];default:return[]}case"cyrillic":return _.transcriptions[r[1]][t.toLowerCase()];case"persoarabic":{const s=m.transcriptions[r[1]];switch(r[1]){case"arabic":return s[r[2]][u(t)];default:return s[u(t)]}}default:return[]}}function I(t){return c(t)[0]==="-"}function u(t){for(const[r,e]of Object.entries(h))if(Object.values(e).includes(t))return e.isolated;return null}function v(t,r){var e;if(!((e=n(i))!=null&&e.is_valid))return!1;switch(n(i).path[0]){case"kana":return c(r).includes(l(t.toLowerCase()));default:return c(r).includes(t)}}function d(t){return{items:k(t).map((e,s)=>({id:`item-${s}`,glyph:e})),current_idx:0}}function S(){let t=[];w.subscribe(e=>{t=e});const r=z("quiz-session",d(t));return{subscribe:r.subscribe,reset(){r.set(d(t))},sync(e,s,a){r.update(()=>({items:e,current_idx:s,is_timing:a}))},updateIndex(e){r.update(({items:s})=>({items:s,current_idx:e}))},updateItem(e,s){r.update(({items:a,current_idx:p})=>(a[e]=s(a[e]),{items:a,current_idx:p}))},updateTiming(e){r.update(({items:s,current_idx:a})=>({items:s,current_idx:a,is_timing:e}))}}}const y=S(),q=x.reduce((t,r)=>(t[r]=-1,t),{}),f=C("high-scores",q);function H(t,r){const e=n(f)[t];return e<0||r<e?(f.update(s=>({...s,[t]:r})),!0):!1}export{c as a,v as b,u as g,f as h,I as i,y as q,H as u};
