import{a as _,t as M,c as D,h as F,d as J}from"../chunks/disclose-version.CYEZbGRd.js";import{i as x}from"../chunks/legacy.Dizh_e1X.js";import{p as b,t as T,a as $,s as y,c as r,r as t,j,m as q,f as K,k as m,T as N,$ as Q,az as R}from"../chunks/utils.DXvTgAFw.js";import{p as A}from"../chunks/props.Ce0yfSwg.js";import{s as E}from"../chunks/render.BS6rv_sO.js";import{o as z,e as B,q as P,a as U,t as X,B as Y}from"../chunks/glyphs.BZE3epMA.js";import{B as Z}from"../chunks/BottomBar.boK70mLU.js";const ee=async({fetch:h})=>{const o=await h("https://api.github.com/repos/jn3008/glyph-glyph"),{stargazers_count:v}=await o.json();return{stargazers:v}},ge=Object.freeze(Object.defineProperty({__proto__:null,load:ee},Symbol.toStringTag,{value:"Module"})),te="1.4.4";var ae=M('<section class="header content-padding svelte-1suh1f3"><div class="content-width center"><div class="title svelte-1suh1f3"><h1 class="svelte-1suh1f3">glyph-glyph</h1> </div> <ul class="svelte-1suh1f3"><li class="svelte-1suh1f3"><a href="https://github.com/jn3008/glyph-glyph" target="_blank" rel="nofollow" class="menu-link svelte-1suh1f3" aria-label="Author">by jn3008 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96" style="height: 1em; width: auto;"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="var(--text-color)"></path></svg> <span class="stargazers-container svelte-1suh1f3"><span class="material-symbols-rounded">star</span> <span class="stargazers svelte-1suh1f3"> </span></span></a></li></ul></div></section>');function se(h,o){b(o,!1);let v=A(o,"stargazers",8);x();var a=ae(),e=r(a),s=r(e),n=y(r(s));n.nodeValue=` v${te}`,t(s);var p=y(s,2),u=r(p),i=r(u),d=y(r(i),3),g=y(r(d),2),f=r(g,!0);T(()=>E(f,v().toLocaleString("en"))),t(g),t(d),t(i),t(u),t(p),t(e),t(a),_(h,a),$()}var re=M('<div class="grid-cell svelte-q9k1se"> </div>'),oe=M('<div class="splash-container svelte-q9k1se" lang="en"><div class="grid-container svelte-q9k1se"></div></div>');function le(h,o){b(o,!1);const v=[...z(["kana","hiragana","diacritics"]),...z(["kana","katakana","diacritics"]),...z(["greek","transcriptions","monographs","lower"]),...z(["cyrillic","bulgarian","lower"]),...z(["persoarabic","urdu","transcriptions","isolated"])];let a=0,e=0,s=0,n=q([]),p;function u(){if(typeof window>"u")return;document.querySelector(".splash-container");const c=window.innerWidth,l=window.innerHeight;c>l?(a=Math.min(20,Math.floor(c/Math.ceil(l/20))),s=c/a,e=Math.floor(l/s)):(e=Math.min(20,Math.floor(l/Math.ceil(c/20))),s=l/e,a=Math.floor(c/s)),document.documentElement.style.setProperty("--grid-rows",e.toString()),document.documentElement.style.setProperty("--grid-cols",a.toString()),document.documentElement.style.setProperty("--cell-size",s.toString())}typeof window<"u"&&window.addEventListener("resize",()=>{clearTimeout(p),p=window.setTimeout(()=>{u(),i()},300)});function i(){u(),j(n,Array.from({length:e},()=>Array.from({length:a},()=>({glyph:v[Math.floor(Math.random()*v.length)],z_index:Math.floor(Math.random()*6)}))))}i();let d=q([]);setInterval(()=>{j(d,Array.from({length:5},()=>[Math.floor(Math.random()*e),Math.floor(Math.random()*a)]))},2e3),x();var g=oe(),f=r(g);B(f,5,()=>m(n),P,(c,l,G)=>{var k=D(),C=K(k);B(C,1,()=>m(l),P,(H,S,L)=>{var w=re();const O=N(()=>m(d).some(([V,W])=>V===G&&W===L));var I=r(w,!0);t(w),T(()=>{U(w,"style",`z-index: ${m(S).z_index??""};`),X(w,"highlighted",m(O)),E(I,m(S).glyph)}),_(H,w)}),_(c,k)}),t(f),t(g),_(h,g),$()}var ne=M('<div class="content svelte-1rkxr75"><!> <section class="content-padding"><p>a game to help you learn different writing systems.</p></section> <div class="bottom-bar-container svelte-1rkxr75"><!></div> <!></div>');function fe(h,o){var i;b(o,!1);let a=((i=A(o,"data",8)())==null?void 0:i.stargazers)??0;x();var e=ne();F(d=>{Q.title="glyph-glyph"});var s=r(e);se(s,{stargazers:a});var n=y(s,4),p=r(n);Z(p,{justify_content:"center",style:"glass",children:(d,g)=>{Y(d,{href:"setup",selected:!0,title:"Set-up",children:(f,c)=>{R();var l=J("Set-up");_(f,l)},$$slots:{default:!0}})},$$slots:{default:!0}}),t(n);var u=y(n,2);le(u,{}),t(e),_(h,e),$()}export{fe as component,ge as universal};
