import{a as h,t as d,h as w,b as $}from"../chunks/disclose-version.BUA5OMwm.js";import{i as u}from"../chunks/legacy.Dj62uwCN.js";import{p as v,t as x,a as f,c as o,s as g,ae as m,r as n,f as z,af as j}from"../chunks/utils.Orrw684n.js";import{p as y}from"../chunks/props.GRKGSCY3.js";import{s as B}from"../chunks/render.BzhloWRq.js";import{B as S,a as P}from"../chunks/BottomBar.D3-QzMje.js";const k=async({fetch:e})=>{const t=await e("https://api.github.com/repos/jn3008/glyph-glyph"),{stargazers_count:i}=await t.json();return{stargazers:i}},G=Object.freeze(Object.defineProperty({__proto__:null,load:k},Symbol.toStringTag,{value:"Module"}));var C=d('<section class="header content-padding svelte-g9bhye"><div class="content-width center"><h1 class="svelte-g9bhye">glyph-glyph</h1> <ul class="svelte-g9bhye"><li class="svelte-g9bhye"><a href="https://github.com/jn3008/glyph-glyph" target="_blank" rel="nofollow" class="menu-link svelte-g9bhye" aria-label="Author">by jn3008 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96" style="height: 1em; width: auto;"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="var(--text-color)"></path></svg> <span class="material-symbols-rounded">star</span></a></li></ul></div></section>');function M(e,t){v(t,!1);let i=y(t,"stargazers",8);u();var a=C(),s=o(a),r=g(o(s),2),p=o(r),l=o(p),c=g(o(l),2);x(()=>B(c,` ${i().toLocaleString("en")??""} `)),m(),n(l),n(p),n(r),n(s),n(a),h(e,a),f()}var O=d('<!> <section class="content-padding container svelte-1s51vep"><p>a game to help you learn different writing systems.</p></section> <!>',1);function I(e,t){var l;v(t,!1);let a=((l=y(t,"data",8)())==null?void 0:l.stargazers)??0;u();var s=O();w(c=>{j.title="glyph-glyph"});var r=z(s);M(r,{stargazers:a});var p=g(r,4);S(p,{justify_content:"center",children:(c,A)=>{P(c,{href:"setup",selected:!0,title:"Set-up",children:(b,H)=>{m();var _=$("Set-up");h(b,_)},$$slots:{default:!0}})},$$slots:{default:!0}}),h(e,s),f()}export{I as component,G as universal};
