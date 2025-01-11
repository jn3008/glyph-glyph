import{h as l,p as $,c as B,g as C,e as Q,t as F,b as S,d as K,f as b,B as N,i as V,j as W,k as Y}from"./dictionary.D-f1v8xe.js";import{g as v}from"./index.B9HqKKT-.js";import{b as x,e as G,a as k,t as T,d as J}from"./disclose-version.DMb1MWqK.js";import{i as j}from"./legacy.CAdgRAij.js";import{W as U,T as H,V as A,a1 as X,aw as Z,a3 as L,ah as ee,ak as te,ai as ae,_ as se,af as re,p as q,a9 as ne,aa as ie,t as oe,a as D,c as m,r as g,s as z,ax as ce,y as h,w as le,ay as ue,a7 as de}from"./utils.CzggQQeO.js";import{p as _}from"./props.BU03OgPP.js";import{o as fe}from"./index-client.ZNqWNHHH.js";import{e as E,s as pe}from"./render.CfWNEYHW.js";import{s as _e,a as he,l as me}from"./persistent-stores.BI_I_XZi.js";import{b as ge}from"./this.BB9oy7Yh.js";function ve(e,t,a,s,i){var r=e,c="",o;U(()=>{if(c===(c=t()??"")){H&&A();return}o!==void 0&&(Z(o),o=void 0),c!==""&&(o=X(()=>{if(H){L.data;for(var n=A(),u=n;n!==null&&(n.nodeType!==8||n.data!=="");)u=n,n=ee(n);if(n===null)throw te(),ae;x(L,u),r=se(n);return}var p=c+"",d=G(p);x(re(d),d.lastChild),r.before(d)}))})}function y(e){var a;const t=(a=v(b))==null?void 0:a.path_dict;switch(t.alphabet){case"kana":return Q.get(F(e))??[S(e)];case"greek":switch(t.mode){case"transcriptions":return C.transcriptions[e.toLowerCase()];case"names":return C.names[e.toLowerCase()];default:return[]}case"cyrillic":return B.transcriptions[t.language][e.toLowerCase()];case"persoarabic":{const s=$.transcriptions[t.language];switch(t.language){case"arabic":return s[t.pronunciation][I(e)];default:return s[I(e)]}}case"hangul":switch(t.glyphs){case"vowels":return l.transcriptions.vowels[e];case"consonants":switch(t.position){case"choseong":return l.transcriptions.initial[e];case"batchim":return l.transcriptions.final[e];default:return[]}case"syllables":return we(e)}default:return[]}}function je(e){return y(e)[0]==="-"}function I(e){for(const[t,a]of Object.entries(K))if(Object.values(a).includes(e))return a.isolated;return null}function we(e){if(e.length!==1||e.charCodeAt(0)<44032||e.charCodeAt(0)>55203)throw new Error("Invalid Hangul syllable input.");const t=e.charCodeAt(0)-44032,a=Math.floor(t/588),s=Math.floor(t%588/28),i=t%28,r=l.glyphs.initial_consonants[a],c=l.glyphs.vowels[s],o=i>0?l.glyphs.final_consonants[i-1]:"",n=l.transcriptions.initial[r][0],u=l.transcriptions.vowels[c][0],p=i>0?l.transcriptions.final[o][0]:"";return[(n=="-"?"":n)+u+p]}function qe(e,t){var a;if(!((a=v(b))!=null&&a.is_valid))return!1;switch(v(b).path[0]){case"kana":return y(t).includes(S(e.toLowerCase()));default:return y(t).includes(e)}}var be=T('<div class="modal-backdrop" aria-hidden="true"><dialog class="svelte-1ah7e3x"><h2> </h2> <!> <!></dialog></div>');function ke(e,t){q(t,!1);let a=_(t,"open",12,!1),s=_(t,"title",8,"Dialog Title"),i=_(t,"closeCallback",8,()=>{}),r=ue();function c(){a(!1),i()&&i()()}ne(()=>(de(a()),h(r)),()=>{var f,w;a()?(f=h(r))==null||f.showModal():(w=h(r))==null||w.close()}),ie(),j();var o=be(),n=m(o),u=m(n),p=m(u,!0);g(u);var d=z(u,2);_e(d,t,"default",{});var O=z(d,2);N(O,{selected:!0,$$events:{click:c},children:(f,w)=>{ce();var P=J("Close");k(f,P)},$$slots:{default:!0}}),g(n),ge(n,f=>le(r,f),()=>h(r)),g(o),oe(()=>pe(p,s())),E("close",n,c),E("click",o,c),k(e,o),D()}var ye=T("<p><!></p>");function De(e,t){q(t,!1);let a=_(t,"instructions",8,"Default instructions"),s=_(t,"is_open",12,!1);function i(){s(!1)}fe(()=>{const r=c=>{c.key==="Escape"&&i()};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)}),j(),ke(e,{title:"Help",get open(){return s()},set open(r){s(r)},children:(r,c)=>{var o=ye(),n=m(o);ve(n,()=>a().replace(/\n/g,"<br>")),g(o),k(r,o)},$$slots:{default:!0},$$legacy:!0}),D()}function M(e){return{items:W(e).map((a,s)=>({id:`item-${s}`,glyph:a})),current_idx:0}}function Ce(){let e=[];V.subscribe(a=>{e=a});const t=he("quiz-session",M(e));return{subscribe:t.subscribe,reset(){t.set(M(e))},sync(a,s,i){t.update(()=>({items:a,current_idx:s,is_timing:i}))},updateIndex(a){t.update(({items:s})=>({items:s,current_idx:a}))},updateItem(a,s){t.update(({items:i,current_idx:r})=>(i[a]=s(i[a]),{items:i,current_idx:r}))},updateTiming(a){t.update(({items:s,current_idx:i})=>({items:s,current_idx:i,is_timing:a}))}}}const Oe=Ce(),xe=Y.reduce((e,t)=>(e[t]=-1,e),{}),R=me("high-scores",xe);function Pe(e,t){const a=v(R)[e];return a<0||t<a?(R.update(s=>({...s,[e]:t})),!0):!1}export{De as H,y as a,R as b,qe as c,I as g,ve as h,je as i,Oe as q,Pe as u};
