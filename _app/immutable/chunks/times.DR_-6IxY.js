import{h as l,p as $,c as B,b as C,d as Q,i as Y,j as R,k as F,g as w,B as K,l as N,m as X,n as Z}from"./glyphs.HD24VDJ_.js";import{g as v}from"./index.DrMsbBsN.js";import{b as H,e as G,a as k,t as S,d as J}from"./disclose-version.CYEZbGRd.js";import{i as q}from"./legacy.Dizh_e1X.js";import{Z as U,X as x,Y as A,a5 as V,ay as W,a7 as j,aj as ee,am as te,ak as ae,a2 as se,ah as re,p as D,l as ne,i as ie,t as oe,a as O,c as h,r as g,s as z,az as ce,k as m,j as le,m as ue,ab as de}from"./utils.DXvTgAFw.js";import{p as _}from"./props.Ce0yfSwg.js";import{o as fe}from"./index-client.SJPFcUSQ.js";import{e as E,s as pe}from"./render.BS6rv_sO.js";import{s as _e,a as me,l as he}from"./persistent-stores.Cu6bZ0Mm.js";import{b as ge}from"./this.DCzmdEcR.js";function ve(e,t,a,s,r){var n=e,o="",c;U(()=>{if(o===(o=t()??"")){x&&A();return}c!==void 0&&(W(c),c=void 0),o!==""&&(c=V(()=>{if(x){j.data;for(var i=A(),u=i;i!==null&&(i.nodeType!==8||i.data!=="");)u=i,i=ee(i);if(i===null)throw te(),ae;H(j,u),n=se(i);return}var p=o+"",d=G(p);H(re(d),d.lastChild),n.before(d)}))})}function y(e){var a;const t=(a=v(w))==null?void 0:a.path_dict;switch(t.alphabet){case"kana":return Q.get(Y(e))??[R(e)];case"greek":switch(t.mode){case"transcriptions":return C.transcriptions[e.toLowerCase()];case"names":return C.names[e.toLowerCase()];default:return[]}case"cyrillic":return B.transcriptions[t.language][e.toLowerCase()];case"persoarabic":{const s=$.transcriptions[t.language];switch(t.language){case"arabic":return s[t.pronunciation][L(e)];default:return s[L(e)]}}case"hangul":switch(t.glyphs){case"vowels":return l.transcriptions.vowels[e];case"consonants":switch(t.position){case"choseong":return l.transcriptions.initial[e];case"batchim":return l.transcriptions.final[e];default:return[]}case"syllables":return be(e)}default:return[]}}function qe(e){return y(e)[0]==="-"}function L(e){for(const[t,a]of Object.entries(F))if(Object.values(a).includes(e))return a.isolated;return null}function be(e){if(e.length!==1||e.charCodeAt(0)<44032||e.charCodeAt(0)>55203)throw new Error("Invalid Hangul syllable input.");const t=e.charCodeAt(0)-44032,a=Math.floor(t/588),s=Math.floor(t%588/28),r=t%28,n=l.glyphs.initial_consonants[a],o=l.glyphs.vowels[s],c=r>0?l.glyphs.final_consonants[r-1]:"",i=l.transcriptions.initial[n][0],u=l.transcriptions.vowels[o][0],p=r>0?l.transcriptions.final[c][0]:"";return[(i=="-"?"":i)+u+p]}function De(e,t){var a;if(!((a=v(w))!=null&&a.is_valid))return!1;switch(v(w).path[0]){case"kana":return y(t).includes(R(e.toLowerCase()));default:return y(t).includes(e)}}var we=S('<div class="modal-backdrop" aria-hidden="true"><dialog class="svelte-1ah7e3x"><h2> </h2> <!> <!></dialog></div>');function ke(e,t){D(t,!1);let a=_(t,"open",12,!1),s=_(t,"title",8,"Dialog Title"),r=_(t,"closeCallback",8,()=>{}),n=ue();function o(){a(!1),r()&&r()()}ne(()=>(de(a()),m(n)),()=>{var f,b;a()?(f=m(n))==null||f.showModal():(b=m(n))==null||b.close()}),ie(),q();var c=we(),i=h(c),u=h(i),p=h(u,!0);g(u);var d=z(u,2);_e(d,t,"default",{});var P=z(d,2);K(P,{selected:!0,$$events:{click:o},children:(f,b)=>{ce();var T=J("Close");k(f,T)},$$slots:{default:!0}}),g(i),ge(i,f=>le(n,f),()=>m(n)),g(c),oe(()=>pe(p,s())),E("close",i,o),E("click",c,o),k(e,c),O()}var ye=S("<p><!></p>");function Oe(e,t){D(t,!1);let a=_(t,"instructions",8,"Default instructions"),s=_(t,"is_open",12,!1);function r(){s(!1)}fe(()=>{const n=o=>{o.key==="Escape"&&r()};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)}),q(),ke(e,{title:"Help",get open(){return s()},set open(n){s(n)},children:(n,o)=>{var c=ye(),i=h(c);ve(i,()=>a().replace(/\n/g,"<br>")),g(c),k(n,c)},$$slots:{default:!0},$$legacy:!0}),O()}function I(e){return{items:X(e).map((a,s)=>({id:`item-${s}`,glyph:a})),current_idx:0,elapsed_time:-1}}function Ce(){let e=[];N.subscribe(a=>{e=a});const t=me("quiz-session",I(e));return{subscribe:t.subscribe,reset(){t.set(I(e))},sync(a,s,r){t.update(()=>({items:a,current_idx:s,elapsed_time:r}))},updateIndex(a){t.update(({items:s,elapsed_time:r})=>({items:s,current_idx:a,elapsed_time:r}))},updateItem(a,s){t.update(({items:r,current_idx:n,elapsed_time:o})=>(r[a]=s(r[a]),{items:r,current_idx:n,elapsed_time:o}))},updateElapsedTime(a){t.update(({items:s,current_idx:r,elapsed_time:n})=>({items:s,current_idx:r,elapsed_time:a}))}}}const Pe=Ce(),He=Z.reduce((e,t)=>(e[t]=-1,e),{}),M=he("high-scores",{best_times:He});function Te(e,t){const a=v(M).best_times[e];return a<0||t<a?(M.update(s=>({...s,best_times:{...s.best_times,[e]:t}})),!0):!1}export{Oe as H,L as a,De as b,y as g,ve as h,qe as i,Pe as q,M as t,Te as u};
