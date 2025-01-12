import{d as X,a as l,c as _e,t as f,h as Se}from"../chunks/disclose-version.CYEZbGRd.js";import{i as re}from"../chunks/legacy.Dizh_e1X.js";import{p as oe,l as D,i as ne,c,k as e,az as fe,t as S,r as s,s as y,f as te,a as le,m as k,j as m,T as se,u as Y,$ as Ce}from"../chunks/utils.DXvTgAFw.js";import{s as J,e as ae}from"../chunks/render.BS6rv_sO.js";import{s as ie,i as I,a as E,b as ge}from"../chunks/store.DLGdLQ_h.js";import{e as K,B as W,u as qe,q as N,r as Ae,v as $e,a as Z,w as Le,x as Te,s as ye,g as ce,c as ke,b as xe,p as je,y as Be,i as He,l as Me,t as me,z as De}from"../chunks/glyphs.HD24VDJ_.js";import{B as Ie}from"../chunks/BottomBar.3pZXi1NM.js";import{a as he,i as ze,g as Ge,h as Oe,H as Fe,q as be,t as Ue}from"../chunks/times.DR_-6IxY.js";import{p as We}from"../chunks/props.Ce0yfSwg.js";import{g as Pe}from"../chunks/index.DrMsbBsN.js";import{t as Ee,a as Je,s as ee,b as Ke}from"../chunks/settings.kxs38m7w.js";import{a as Ne}from"../chunks/appearance.C7d5e623.js";import{o as Qe}from"../chunks/index-client.SJPFcUSQ.js";var Re=f('<div><div class="sub-selection svelte-qzrbya"></div></div>'),Ve=f('<div><div class="alphabet-selection-container svelte-qzrbya"><div class="selection alphabet svelte-qzrbya"></div></div> <div class="selections-container svelte-qzrbya"></div></div>');function Xe(v,r){oe(r,!1);const d=ie(),n=()=>E(ce,"$game_config",d),t=k(),z=k();let g=k(10);D(()=>n(),()=>{var u;m(t,(u=n())==null?void 0:u.path)}),D(()=>e(t),()=>{m(z,e(t)[0])}),D(()=>e(t),()=>{setTimeout(()=>{m(g,e(t).length)},1)}),ne(),re();var h=Ve(),b=c(h),j=c(b);K(j,5,()=>Ae,N,(u,_)=>{var C=se(()=>e(z)===e(_).key);W(u,{get selected(){return e(C)},get title(){return`Select ${e(_).label??""}`},$$events:{click:()=>qe(e(_).key,0)},children:($,o)=>{fe();var a=X();S(()=>J(a,e(_).label)),l($,a)},$$slots:{default:!0}})}),s(j),s(b);var x=y(b,2);K(x,5,()=>Array.from({length:e(t).length},(u,_)=>_+1),N,(u,_)=>{var C=_e(),$=te(C);{var o=a=>{var i=Re();S(()=>Z(i,"data-label",Le(e(t).slice(0,e(_)))));var w=c(i);K(w,5,()=>$e(e(t).slice(0,e(_))),N,(F,q)=>{var H=se(()=>e(t)[e(_)]===e(q).key);W(F,{get selected(){return e(H)},get title(){return`Select ${e(q).label??""}`},$$events:{click:()=>Te(e(q).key,e(_))},children:(A,p)=>{fe();var P=X();S(()=>J(P,e(q).label)),l(A,P)},$$slots:{default:!0}})}),s(w),s(i),S(()=>ye(i,`sub-selection-container ${(e(_)<=e(g)?"visible":"")??""} svelte-qzrbya`)),l(a,i)};I($,a=>{$e(e(t).slice(0,e(_))).length>0&&a(o)})}l(u,C)}),s(x),s(h),l(v,h),le()}function we(v,r){if(!r)return"";if(ze(v))return r.join(" ");const d=r.length/3;let n=[];for(let t=0;t<d;t++){const z=r[t*3],g=r[t*3+1],h=r[t*3+2];n.push(`<b>${g}</b> as in ${z}<b>${g}</b>${h}`)}return n.join(" ")}function Ye(v){var d;const r=(d=Pe(ce))==null?void 0:d.path;switch(r[0]){case"greek":return we(v.toLowerCase(),xe.pronunciations[v.toLowerCase()]);case"cyrillic":{const n=ke.pronunciations[r[1]];return we(v.toLowerCase(),n[v.toLowerCase()])}default:return""}}function V(v){let r=[];for(let d=0;d<v.length;d++)r.push(`[${v[d]}]`);return r.join(" ")}function Ze(v){var d;const r=(d=Pe(ce))==null?void 0:d.path_dict;switch(r.alphabet){case"kana":return V(Be.sounds[He(v)]);case"greek":return V(xe.sounds[v.toLowerCase()]);case"cyrillic":{const n=ke.sounds[r.language];return V(n[v.toLowerCase()])}case"persoarabic":{const n=je.sounds[r.language];switch(r.language){case"arabic":{const t=n[r.pronunciation];return V(t[he(v)])}default:return V(n[he(v)])}}default:return""}}var et=f('<span class="glyph-tooltip"> <span class="ipa-style svelte-pziw49"> </span></span>'),tt=f('<div class="preview-item svelte-pziw49"><div class="glyph-container svelte-pziw49" role="tooltip"><span class="glyph svelte-pziw49"> </span> <!></div></div>'),st=f('<div class="pronunciations-container svelte-pziw49"><span class="pronunciations svelte-pziw49"><!></span></div>'),at=f('<div class="preview-container svelte-pziw49"><div class="preview-title svelte-pziw49">Glyphs to test:</div> <div class="glyphs-container"></div> <!></div>');function rt(v,r){oe(r,!1);const d=ie(),n=()=>E(Me,"$glyphs_list",d),t=k(),z=k();let g=We(r,"show_pronunciations",8),h=k(null),b=k(null);function j($){m(h,$),m(b,Ye(e(h)))}D(()=>n(),()=>{m(t,n())}),D(()=>e(b),()=>{m(z,e(b)!=null&&e(b).length>0)}),ne(),re();var x=at(),u=y(c(x),2);K(u,5,()=>e(t),N,($,o)=>{var a=tt(),i=c(a),w=c(i),F=c(w,!0);s(w);var q=y(w,2);{var H=A=>{var p=et(),P=c(p);S(()=>J(P,`${(ze(e(o))?"Silent":Ge(e(o)).join(" / "))??""} `));var L=y(P),G=c(L,!0);S(()=>J(G,Ze(e(o)))),s(L),s(p),l(A,p)};I(q,A=>{e(h)==e(o)&&A(H)})}s(i),s(a),S(()=>J(F,e(o))),ae("mouseenter",i,()=>{j(e(o))}),ae("mouseleave",i,()=>{m(h,m(b,null))}),l($,a)}),s(u);var _=y(u,2);{var C=$=>{var o=st(),a=c(o),i=c(a);Oe(i,()=>e(b)),s(a),s(o),S(()=>me(a,"is-active",e(z))),l($,o)};I(_,$=>{g()&&$(C)})}s(x),l(v,x),le()}var ot=f('<div class="button-container svelte-g3lcde"><button type="button" class="color-button appearance svelte-g3lcde"><span class="material-symbols-rounded icon svelte-g3lcde"><!></span></button></div>'),nt=f('<div class="button-container svelte-g3lcde"><button type="button"></button></div>'),lt=f('<span class="material-symbols-rounded palette-icon svelte-g3lcde">palette</span>'),it=f('<div class="palette-container svelte-g3lcde"><div class="palette-drawer-contents svelte-g3lcde"><div class="palette svelte-g3lcde"></div> <div class="palette colour svelte-g3lcde"></div></div> <!></div>');function ct(v,r){oe(r,!1);const d=ie(),n=()=>E(ee,"$settings",d),t=()=>E(Ne,"$appearance_store",d),z=k();let g=k(!1);const h=o=>{ge(ee,Y(n).appearance=o,Y(n))},b=o=>{ge(ee,Y(n).colour=o,Y(n))};D(()=>n(),()=>{m(z,n().colour)}),ne(),re();var j=it(),x=c(j),u=c(x);K(u,5,()=>Ee,N,(o,a)=>{var i=_e(),w=te(i);{var F=q=>{var H=ot(),A=c(H),p=c(A),P=c(p);{var L=B=>{var M=X("brightness_auto");l(B,M)},G=B=>{var M=_e(),ve=te(M);{var pe=U=>{var Q=X("dark_mode");l(U,Q)},de=U=>{var Q=X("light_mode");l(U,Q)};I(ve,U=>{e(a)==="dark"?U(pe):U(de,!1)},!0)}l(B,M)};I(P,B=>{e(a)==="auto"?B(L):B(G,!1)})}s(p),s(A),s(H),S(()=>Z(A,"aria-label",`Set theme appearance to ${e(a)}`)),ae("click",A,()=>h(e(a))),l(q,H)};I(w,q=>{n().appearance!==e(a)&&q(F)})}l(o,i)}),s(u);var _=y(u,2);K(_,5,()=>Je,N,(o,a)=>{var i=nt(),w=c(i);s(i),S(()=>{ye(w,`color-button ${t()??""}-theme-${e(a)??""} ${(e(a)===e(z)?"active":"")??""} svelte-g3lcde`),Z(w,"aria-label",`Set theme colour to ${e(a)}`),Z(w,"title",`Pick ${e(a)}`)}),ae("click",w,()=>b(e(a))),l(o,i)}),s(_),s(x);var C=y(x,2),$=se(()=>`${(e(g)?"Close":"Open")??""} palette`);W(C,{style:"small-icon",get title(){return e($)},$$events:{click:()=>m(g,!e(g))},children:(o,a)=>{var i=lt();l(o,i)},$$slots:{default:!0}}),s(j),S(()=>me(x,"open",e(g))),l(v,j),le()}var vt=f('<span class="material-symbols-rounded small-icon svelte-ar05pm">help</span>'),pt=f('<div class="config-container svelte-ar05pm"><!> <!></div>'),dt=f('<span class="button-content svelte-ar05pm"><span class="button-text svelte-ar05pm">Use Stopwatch</span> <span class="material-symbols-rounded icon svelte-ar05pm">timer</span></span>'),ut=f('<span class="high-score svelte-ar05pm"> </span>'),_t=f('<span class="button-content svelte-ar05pm"><span class="button-text svelte-ar05pm">Start</span> <span class="material-symbols-rounded icon svelte-ar05pm">arrow_forward</span></span>'),mt=f('<span class="button-content svelte-ar05pm"><span class="button-text svelte-ar05pm">Start</span> <span class="material-symbols-rounded icon svelte-ar05pm">arrow_forward</span></span>'),ft=f('<div class="stopwatch-section svelte-ar05pm"><!> <!></div> <!>',1),gt=f('<div class="contents svelte-ar05pm"><div class="top-bar svelte-ar05pm"><div class="title-container svelte-ar05pm"><a href="/" class="title svelte-ar05pm">glyph-glyph</a> <!></div> <span class="palette"><!></span></div> <!> <!> <!></div>');function Lt(v,r){oe(r,!1);const d=ie(),n=()=>E(ee,"$settings",d),t=()=>E(ce,"$game_config",d),z=()=>E(Ue,"$times_store",d),g=k(),h=k(),b=k(),j=k();let x=k(!0),u=k(!1);Qe(()=>{const p=be.subscribe(()=>{m(x,!1)});return()=>p()});const _=`Learn an alphabet or test your knowledge by piacking your 
  game configuration.

Once a configuration is valid, a preview of the set of glyphs will appear;
   hover/tap on a glyph to see its answer (romanisation/name).

When you're ready press "Start".`;D(()=>n(),()=>{m(g,n().stopwatch_enabled)}),D(()=>t(),()=>{m(h,t().id)}),D(()=>(z(),e(h)),()=>{m(b,z().best_times[e(h)])}),D(()=>t(),()=>{var p;m(j,["greek","cyrillic"].includes((p=t())==null?void 0:p.path[0]))}),ne(),re();var C=gt();Se(p=>{Ce.title="Setup · glyph-glyph"});var $=c(C),o=c($),a=y(c(o),2);W(a,{style:"small-icon",title:"Help",$$events:{click:()=>m(u,!e(u))},children:(p,P)=>{var L=vt();l(p,L)},$$slots:{default:!0}}),s(o);var i=y(o,2),w=c(i);ct(w,{}),s(i),s($);var F=y($,2);{var q=p=>{var P=pt(),L=c(P);Xe(L,{});var G=y(L,2);{var B=M=>{rt(M,{get show_pronunciations(){return e(j)}})};I(G,M=>{t().is_valid&&M(B)})}s(P),l(p,P)};I(F,p=>{e(x)||p(q)})}var H=y(F,2);Fe(H,{instructions:_,get is_open(){return e(u)},set is_open(p){m(u,p)},$$legacy:!0});var A=y(H,2);Ie(A,{children:(p,P)=>{var L=ft(),G=te(L),B=c(G),M=se(()=>`Turn stopwatch ${(e(g)?"off":"on")??""}`);W(B,{get selected(){return e(g)},get title(){return e(M)},$$events:{click:()=>{Ke()}},children:(T,O)=>{var R=dt();l(T,R)},$$slots:{default:!0}});var ve=y(B,2);{var pe=T=>{var O=ut(),R=c(O);S(()=>J(R,`${De(e(b))??""}s`)),s(O),S(()=>me(O,"not-set",e(b)<0)),l(T,O)};I(ve,T=>{t().is_valid&&e(g)&&T(pe)})}s(G);var de=y(G,2);{var U=T=>{W(T,{href:"play",selected:!0,title:"Start game",$$events:{click:()=>{be.reset()}},children:(O,R)=>{var ue=_t();l(O,ue)},$$slots:{default:!0}})},Q=T=>{W(T,{active:!1,children:(O,R)=>{var ue=mt();l(O,ue)},$$slots:{default:!0}})};I(de,T=>{t().is_valid?T(U):T(Q,!1)})}l(p,L)},$$slots:{default:!0}}),s(C),l(v,C),le()}export{Lt as component};
