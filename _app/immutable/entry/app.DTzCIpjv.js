const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.DuzzYqfn.js","../chunks/disclose-version.BnyP3OB8.js","../chunks/utils.Dhw7Y63s.js","../chunks/legacy.Vqdj_PMR.js","../chunks/store.BWdm8UL4.js","../chunks/slot.DDARBGDQ.js","../chunks/appearance.PmRiRRxv.js","../chunks/index.qhLCbthJ.js","../chunks/settings._mfimNkJ.js","../chunks/index.BbO-qMqt.js","../chunks/entry.CeLvLCeC.js","../chunks/index-client.BhUYpw5D.js","../assets/0.BbFoGy_Z.css","../nodes/1.5ezouKd5.js","../chunks/render.DlAr8I1h.js","../nodes/2.Cj7-_6TS.js","../chunks/props.edKkFTeU.js","../chunks/BottomBar.CLslfAJr.js","../chunks/class.7PBngDXZ.js","../assets/BottomBar.CfxA-3QU.css","../assets/2.DVnVNtEk.css","../nodes/3.CHLGkQY1.js","../chunks/this.CHCpDkWg.js","../chunks/scores.BJ7-JvPj.js","../assets/3.34NPCA-g.css","../nodes/4.yaZ2jcVd.js","../assets/4.O52RNku8.css"])))=>i.map(i=>d[i]);
var U=r=>{throw TypeError(r)};var Y=(r,t,s)=>t.has(r)||U("Cannot "+s);var l=(r,t,s)=>(Y(r,t,"read from private field"),s?s.call(r):t.get(r)),T=(r,t,s)=>t.has(r)?U("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,s),p=(r,t,s,n)=>(Y(r,t,"write to private field"),n?n.call(r,s):t.set(r,s),s);import{h as z,d as K,Z as Q,_ as X,a4 as M,a6 as $,a5 as tt,D as v,N as et,B as L,ay as rt,ai as st,Y as at,p as nt,a8 as ot,m as it,az as ct,f as A,a as lt,aA as C,s as ut,c as ft,r as dt,t as mt,O as D}from"../chunks/utils.Dhw7Y63s.js";import{h as ht,m as _t,u as vt,s as gt}from"../chunks/render.DlAr8I1h.js";import{a as R,t as W,c as j,b as yt}from"../chunks/disclose-version.BnyP3OB8.js";import{i as I}from"../chunks/store.BWdm8UL4.js";import{p as V,a as Et}from"../chunks/props.edKkFTeU.js";import{b as B}from"../chunks/this.CHCpDkWg.js";import{o as bt}from"../chunks/index-client.BhUYpw5D.js";function q(r,t,s){z&&K();var n=r,o,c;Q(()=>{o!==(o=t())&&(c&&(tt(c),c=null),o&&(c=M(()=>s(n,o))))},X),z&&(n=$)}function Pt(r){return class extends Rt{constructor(t){super({component:r,...t})}}}var g,f;class Rt{constructor(t){T(this,g);T(this,f);var c;var s=new Map,n=(a,e)=>{var d=at(e);return s.set(a,d),d};const o=new Proxy({...t.props||{},$$events:{}},{get(a,e){return v(s.get(e)??n(e,Reflect.get(a,e)))},has(a,e){return e===et?!0:(v(s.get(e)??n(e,Reflect.get(a,e))),Reflect.has(a,e))},set(a,e,d){return L(s.get(e)??n(e,d),d),Reflect.set(a,e,d)}});p(this,f,(t.hydrate?ht:_t)(t.component,{target:t.target,anchor:t.anchor,props:o,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((c=t==null?void 0:t.props)!=null&&c.$$host)||t.sync===!1)&&rt(),p(this,g,o.$$events);for(const a of Object.keys(l(this,f)))a==="$set"||a==="$destroy"||a==="$on"||st(this,a,{get(){return l(this,f)[a]},set(e){l(this,f)[a]=e},enumerable:!0});l(this,f).$set=a=>{Object.assign(o,a)},l(this,f).$destroy=()=>{vt(l(this,f))}}$set(t){l(this,f).$set(t)}$on(t,s){l(this,g)[t]=l(this,g)[t]||[];const n=(...o)=>s.call(this,...o);return l(this,g)[t].push(n),()=>{l(this,g)[t]=l(this,g)[t].filter(o=>o!==n)}}$destroy(){l(this,f).$destroy()}}g=new WeakMap,f=new WeakMap;const wt="modulepreload",kt=function(r,t){return new URL(r,t).href},G={},x=function(t,s,n){let o=Promise.resolve();if(s&&s.length>0){const a=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),d=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));o=Promise.allSettled(s.map(u=>{if(u=kt(u,n),u in G)return;G[u]=!0;const y=u.endsWith(".css"),S=y?'[rel="stylesheet"]':"";if(!!n)for(let E=a.length-1;E>=0;E--){const i=a[E];if(i.href===u&&(!y||i.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${S}`))return;const h=document.createElement("link");if(h.rel=y?"stylesheet":wt,y||(h.as="script"),h.crossOrigin="",h.href=u,d&&h.setAttribute("nonce",d),document.head.appendChild(h),y)return new Promise((E,i)=>{h.addEventListener("load",E),h.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${u}`)))})}))}function c(a){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=a,window.dispatchEvent(e),!e.defaultPrevented)throw a}return o.then(a=>{for(const e of a||[])e.status==="rejected"&&c(e.reason);return t().catch(c)})},Ft={};var xt=W('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Ot=W("<!> <!>",1);function At(r,t){nt(t,!0);let s=V(t,"components",23,()=>[]),n=V(t,"data_0",3,null),o=V(t,"data_1",3,null);ot(()=>t.stores.page.set(t.page)),it(()=>{t.stores,t.page,t.constructors,s(),t.form,n(),o(),t.stores.page.notify()});let c=C(!1),a=C(!1),e=C(null);bt(()=>{const i=t.stores.page.subscribe(()=>{v(c)&&(L(a,!0),ct().then(()=>{L(e,Et(document.title||"untitled page"))}))});return L(c,!0),i});const d=D(()=>t.constructors[1]);var u=Ot(),y=A(u);{var S=i=>{var _=j();const w=D(()=>t.constructors[0]);var k=A(_);q(k,()=>v(w),(b,P)=>{B(P(b,{get data(){return n()},get form(){return t.form},children:(m,Tt)=>{var N=j(),Z=A(N);q(Z,()=>v(d),(H,J)=>{B(J(H,{get data(){return o()},get form(){return t.form}}),O=>s()[1]=O,()=>{var O;return(O=s())==null?void 0:O[1]})}),R(m,N)},$$slots:{default:!0}}),m=>s()[0]=m,()=>{var m;return(m=s())==null?void 0:m[0]})}),R(i,_)},F=i=>{var _=j();const w=D(()=>t.constructors[0]);var k=A(_);q(k,()=>v(w),(b,P)=>{B(P(b,{get data(){return n()},get form(){return t.form}}),m=>s()[0]=m,()=>{var m;return(m=s())==null?void 0:m[0]})}),R(i,_)};I(y,i=>{t.constructors[1]?i(S):i(F,!1)})}var h=ut(y,2);{var E=i=>{var _=xt(),w=ft(_);{var k=b=>{var P=yt();mt(()=>gt(P,v(e))),R(b,P)};I(w,b=>{v(a)&&b(k)})}dt(_),R(i,_)};I(h,i=>{v(c)&&i(E)})}R(r,u),lt()}const Nt=Pt(At),Ut=[()=>x(()=>import("../nodes/0.DuzzYqfn.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url),()=>x(()=>import("../nodes/1.5ezouKd5.js"),__vite__mapDeps([13,1,2,3,14,9,10,7,11]),import.meta.url),()=>x(()=>import("../nodes/2.Cj7-_6TS.js"),__vite__mapDeps([15,1,2,3,16,4,14,17,5,18,19,20]),import.meta.url),()=>x(()=>import("../nodes/3.CHLGkQY1.js"),__vite__mapDeps([21,1,2,3,14,4,22,23,7,8,18,16,11,24]),import.meta.url),()=>x(()=>import("../nodes/4.yaZ2jcVd.js"),__vite__mapDeps([25,1,2,3,14,4,18,17,5,16,19,23,7,8,6,11,26]),import.meta.url)],Yt=[],zt={"/":[2],"/play":[3],"/setup":[4]},Lt={handleError:({error:r})=>{console.error(r)},reroute:()=>{},transport:{}},St=Object.fromEntries(Object.entries(Lt.transport).map(([r,t])=>[r,t.decode])),Gt=!1,Wt=(r,t)=>St[r](t);export{Wt as decode,St as decoders,zt as dictionary,Gt as hash,Lt as hooks,Ft as matchers,Ut as nodes,Nt as root,Yt as server_loads};
