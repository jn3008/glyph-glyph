import{d as V,a as v,c as _e,t as f,h as Ce}from"../chunks/disclose-version.DMb1MWqK.js";import{i as ae}from"../chunks/legacy.CAdgRAij.js";import{p as re,a9 as O,aa as oe,c as p,y as e,ax as me,t as H,r as o,s as k,f as ee,a as ne,ay as A,w as h,N as te,u as X,az as Ae}from"../chunks/utils.CzggQQeO.js";import{s as E,e as se}from"../chunks/render.CfWNEYHW.js";import{s as le,i as D,a as U,b as ge}from"../chunks/store.OBsKuDGv.js";import{m as J,B as N,u as he,n as K,q as ue,a as Y,s as we,f as ie,c as ke,g as xe,p as Le,r as Be,t as He,i as Te,o as fe,v as je}from"../chunks/dictionary.CHXekfix.js";import{B as qe}from"../chunks/BottomBar.BycfrjIu.js";import{g as $e,i as Pe,a as Me,h as ze,H as De,q as be,b as Ie}from"../chunks/scores.DOvvKxLZ.js";import{p as Ge}from"../chunks/props.BU03OgPP.js";import{g as Se}from"../chunks/index.B9HqKKT-.js";import{t as Oe,a as Fe,s as Z,b as Ne}from"../chunks/settings.DiEyKd8D.js";import{a as Ue}from"../chunks/appearance._Pf7IuiS.js";import{o as We}from"../chunks/index-client.ZNqWNHHH.js";var Ee=f('<div><div class="sub-selection svelte-cfhpm1"></div></div>'),Je=f('<div><div class="alphabet-selection-container svelte-cfhpm1"><div class="selection alphabet svelte-cfhpm1"></div></div> <div class="selections-container svelte-cfhpm1"></div></div>');function Ke(u,l){re(l,!1);const _=le(),a=()=>U(ie,"$game_config",_),i=A(),x=A();let $=A(10);function b(n){var s;let t=ue;for(const r of n)t=((s=t.find(d=>d.key===r))==null?void 0:s.modes)||[];return t}function L(n){let t=ue,s="";for(let r=0;r<n.length;r++){const d=t.find(P=>P.key===n[r]);r===n.length-1?s=(d==null?void 0:d.modes_label)||"":t=(d==null?void 0:d.modes)||[]}return s}async function j(n,t){await he(n,t);const s=b(e(i));if(s.length==1){const r=s[0];j(r.key,t+1)}}O(()=>a(),()=>{var n;h(i,(n=a())==null?void 0:n.path)}),O(()=>e(i),()=>{h(x,e(i)[0])}),O(()=>e(i),()=>{setTimeout(()=>{h($,e(i).length)},1)}),oe(),ae();var m=Je(),B=p(m),q=p(B);J(q,5,()=>ue,K,(n,t)=>{var s=te(()=>e(x)===e(t).key);N(n,{get selected(){return e(s)},get title(){return`Select ${e(t).label??""}`},$$events:{click:()=>he(e(t).key,0)},children:(r,d)=>{me();var P=V();H(()=>E(P,e(t).label)),v(r,P)},$$slots:{default:!0}})}),o(q),o(B);var M=k(B,2);J(M,5,()=>Array.from({length:e(i).length},(n,t)=>t+1),K,(n,t)=>{var s=_e(),r=ee(s);{var d=P=>{var S=Ee();H(()=>Y(S,"data-label",L(e(i).slice(0,e(t)))));var z=p(S);J(z,5,()=>b(e(i).slice(0,e(t))),K,(c,g)=>{var C=te(()=>e(i)[e(t)]===e(g).key);N(c,{get selected(){return e(C)},get title(){return`Select ${e(g).label??""}`},$$events:{click:()=>j(e(g).key,e(t))},children:(T,I)=>{me();var w=V();H(()=>E(w,e(g).label)),v(T,w)},$$slots:{default:!0}})}),o(z),o(S),H(()=>we(S,`sub-selection-container ${(e(t)<=e($)?"visible":"")??""} svelte-cfhpm1`)),v(P,S)};D(r,P=>{b(e(i).slice(0,e(t))).length>0&&P(d)})}v(n,s)}),o(M),o(m),v(u,m),ne()}function ye(u,l){if(!l)return"";if(Pe(u))return l.join(" ");const _=l.length/3;let a=[];for(let i=0;i<_;i++){const x=l[i*3],$=l[i*3+1],b=l[i*3+2];a.push(`<b>${$}</b> as in ${x}<b>${$}</b>${b}`)}return a.join(" ")}function Qe(u){var _;const l=(_=Se(ie))==null?void 0:_.path;switch(l[0]){case"greek":return ye(u.toLowerCase(),xe.pronunciations[u.toLowerCase()]);case"cyrillic":{const a=ke.pronunciations[l[1]];return ye(u.toLowerCase(),a[u.toLowerCase()])}default:return""}}function R(u){let l=[];for(let _=0;_<u.length;_++)l.push(`[${u[_]}]`);return l.join(" ")}function Re(u){var _;const l=(_=Se(ie))==null?void 0:_.path;switch(l[0]){case"kana":return R(Be.sounds[He(u)]);case"greek":return R(xe.sounds[u.toLowerCase()]);case"cyrillic":{const a=ke.sounds[l[1]];return R(a[u.toLowerCase()])}case"persoarabic":{const a=Le.sounds[l[1]];switch(l[1]){case"arabic":{const i=a[l[2]];return R(i[$e(u)])}default:return R(a[$e(u)])}}default:return""}}var Ve=f('<span class="glyph-info svelte-1ht9205"> <span class="ipa-style svelte-1ht9205"> </span></span>'),Xe=f('<div class="preview-item svelte-1ht9205"><div class="glyph-container svelte-1ht9205" role="tooltip"><span class="glyph svelte-1ht9205"> </span> <!></div></div>'),Ye=f('<div class="pronunciations-container svelte-1ht9205"><span class="pronunciations svelte-1ht9205"><!></span></div>'),Ze=f('<div class="preview-container svelte-1ht9205"><div class="preview-title svelte-1ht9205">Glyphs to test:</div> <div class="glyphs-container svelte-1ht9205"></div> <!></div>');function et(u,l){re(l,!1);const _=le(),a=()=>U(Te,"$dictionary",_),i=A(),x=A();let $=Ge(l,"show_pronunciations",8),b=A(null),L=A(null);function j(n){h(b,n),h(L,Qe(e(b)))}O(()=>a(),()=>{h(i,a())}),O(()=>e(L),()=>{h(x,e(L)!=null&&e(L).length>0)}),oe(),ae();var m=Ze(),B=k(p(m),2);J(B,5,()=>e(i),K,(n,t)=>{var s=Xe(),r=p(s),d=p(r),P=p(d,!0);o(d);var S=k(d,2);{var z=c=>{var g=Ve(),C=p(g);H(()=>E(C,`${(Pe(e(t))?"Silent":Me(e(t)).join(" / "))??""} `));var T=k(C),I=p(T,!0);H(()=>E(I,Re(e(t)))),o(T),o(g),v(c,g)};D(S,c=>{e(b)==e(t)&&c(z)})}o(r),o(s),H(()=>E(P,e(t))),se("mouseenter",r,()=>{j(e(t))}),se("mouseleave",r,()=>{h(b,h(L,null))}),v(n,s)}),o(B);var q=k(B,2);{var M=n=>{var t=Ye(),s=p(t),r=p(s);ze(r,()=>e(L)),o(s),o(t),H(()=>fe(s,"is-active",e(x))),v(n,t)};D(q,n=>{$()&&n(M)})}o(m),v(u,m),ne()}var tt=f('<div class="button-container svelte-g3lcde"><button type="button" class="color-button appearance svelte-g3lcde"><span class="material-symbols-rounded icon svelte-g3lcde"><!></span></button></div>'),st=f('<div class="button-container svelte-g3lcde"><button type="button"></button></div>'),at=f('<span class="material-symbols-rounded palette-icon svelte-g3lcde">palette</span>'),rt=f('<div class="palette-container svelte-g3lcde"><div class="palette-drawer-contents svelte-g3lcde"><div class="palette svelte-g3lcde"></div> <div class="palette colour svelte-g3lcde"></div></div> <!></div>');function ot(u,l){re(l,!1);const _=le(),a=()=>U(Z,"$settings",_),i=()=>U(Ue,"$appearance_store",_),x=A();let $=A(!1);const b=t=>{ge(Z,X(a).appearance=t,X(a))},L=t=>{ge(Z,X(a).colour=t,X(a))};O(()=>a(),()=>{h(x,a().colour)}),oe(),ae();var j=rt(),m=p(j),B=p(m);J(B,5,()=>Oe,K,(t,s)=>{var r=_e(),d=ee(r);{var P=S=>{var z=tt(),c=p(z),g=p(c),C=p(g);{var T=w=>{var W=V("brightness_auto");v(w,W)},I=w=>{var W=_e(),ce=ee(W);{var ve=F=>{var y=V("dark_mode");v(F,y)},de=F=>{var y=V("light_mode");v(F,y)};D(ce,F=>{e(s)==="dark"?F(ve):F(de,!1)},!0)}v(w,W)};D(C,w=>{e(s)==="auto"?w(T):w(I,!1)})}o(g),o(c),o(z),H(()=>Y(c,"aria-label",`Set theme appearance to ${e(s)}`)),se("click",c,()=>b(e(s))),v(S,z)};D(d,S=>{a().appearance!==e(s)&&S(P)})}v(t,r)}),o(B);var q=k(B,2);J(q,5,()=>Fe,K,(t,s)=>{var r=st(),d=p(r);o(r),H(()=>{we(d,`color-button ${i()??""}-theme-${e(s)??""} ${(e(s)===e(x)?"active":"")??""} svelte-g3lcde`),Y(d,"aria-label",`Set theme colour to ${e(s)}`),Y(d,"title",`Pick ${e(s)}`)}),se("click",d,()=>L(e(s))),v(t,r)}),o(q),o(m);var M=k(m,2),n=te(()=>`${(e($)?"Close":"Open")??""} palette`);N(M,{style:"small-icon",get title(){return e(n)},$$events:{click:()=>h($,!e($))},children:(t,s)=>{var r=at();v(t,r)},$$slots:{default:!0}}),o(j),H(()=>fe(m,"open",e($))),v(u,j),ne()}var nt=f('<span class="material-symbols-rounded small-icon svelte-ar05pm">help</span>'),lt=f('<div class="config-container svelte-ar05pm"><!> <!></div>'),it=f('<span class="button-content svelte-ar05pm"><span class="button-text svelte-ar05pm">Use Stopwatch</span> <span class="material-symbols-rounded icon svelte-ar05pm">timer</span></span>'),ct=f('<span class="high-score svelte-ar05pm"> </span>'),vt=f('<span class="button-content svelte-ar05pm"><span class="button-text svelte-ar05pm">Start</span> <span class="material-symbols-rounded icon svelte-ar05pm">arrow_forward</span></span>'),dt=f('<span class="button-content svelte-ar05pm"><span class="button-text svelte-ar05pm">Start</span> <span class="material-symbols-rounded icon svelte-ar05pm">arrow_forward</span></span>'),pt=f('<div class="stopwatch-section svelte-ar05pm"><!> <!></div> <!>',1),ut=f('<div class="contents svelte-ar05pm"><div class="top-bar svelte-ar05pm"><div class="title-container svelte-ar05pm"><a href="/" class="title svelte-ar05pm">glyph-glyph</a> <!></div> <span class="palette"><!></span></div> <!> <!> <!></div>');function Ct(u,l){re(l,!1);const _=le(),a=()=>U(ie,"$game_config",_),i=()=>U(Ie,"$high_scores",_),x=()=>U(Z,"$settings",_),$=A(),b=A(),L=A();let j=A(!0);We(()=>{const c=be.subscribe(()=>{h(j,!1)});return()=>c()});let m=A(!1);const B=`Learn an alphabet or test your knowledge by piacking your 
  game configuration.

Once a configuration is valid, a preview of the set of glyphs will appear;
   hover/tap on a glyph to see its answer (romanisation/name).

When you're ready press "Start".`;O(()=>a(),()=>{h($,a().id)}),O(()=>(i(),e($)),()=>{h(b,i()[e($)])}),O(()=>a(),()=>{var c;h(L,["greek","cyrillic"].includes((c=a())==null?void 0:c.path[0]))}),oe(),ae();var q=ut();Ce(c=>{Ae.title="Setup · glyph-glyph"});var M=p(q),n=p(M),t=k(p(n),2);N(t,{style:"small-icon",title:"Help",$$events:{click:()=>h(m,!e(m))},children:(c,g)=>{var C=nt();v(c,C)},$$slots:{default:!0}}),o(n);var s=k(n,2),r=p(s);ot(r,{}),o(s),o(M);var d=k(M,2);{var P=c=>{var g=lt(),C=p(g);Ke(C,{});var T=k(C,2);{var I=w=>{et(w,{get show_pronunciations(){return e(L)}})};D(T,w=>{a().is_valid&&w(I)})}o(g),v(c,g)};D(d,c=>{e(j)||c(P)})}var S=k(d,2);De(S,{instructions:B,get is_open(){return e(m)},set is_open(c){h(m,c)},$$legacy:!0});var z=k(S,2);qe(z,{children:(c,g)=>{var C=pt(),T=ee(C),I=p(T),w=te(()=>`Turn stopwatch ${(x().using_stopwatch?"off":"on")??""}`);N(I,{get selected(){return x().using_stopwatch},get title(){return e(w)},$$events:{click:()=>{Ne()}},children:(y,G)=>{var Q=it();v(y,Q)},$$slots:{default:!0}});var W=k(I,2);{var ce=y=>{var G=ct(),Q=p(G);H(()=>E(Q,`${je(e(b))??""}s`)),o(G),H(()=>fe(G,"not-set",e(b)<0)),v(y,G)};D(W,y=>{a().is_valid&&x().using_stopwatch&&y(ce)})}o(T);var ve=k(T,2);{var de=y=>{N(y,{href:"play",selected:!0,title:"Start game",$$events:{click:()=>{be.reset()}},children:(G,Q)=>{var pe=vt();v(G,pe)},$$slots:{default:!0}})},F=y=>{N(y,{active:!1,children:(G,Q)=>{var pe=dt();v(G,pe)},$$slots:{default:!0}})};D(ve,y=>{a().is_valid?y(de):y(F,!1)})}v(c,C)},$$slots:{default:!0}}),o(q),v(u,q),ne()}export{Ct as component};
