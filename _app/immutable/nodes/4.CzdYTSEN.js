import{d as pe,e as ze,b as G,a as d,c as de,t as x,h as Ce}from"../chunks/disclose-version.D9MbeClJ.js";import{i as se}from"../chunks/legacy.CYPYTLD4.js";import{Z as Se,h as fe,d as he,a4 as xe,a6 as me,am as Pe,ap as Le,an as Ae,a1 as Te,ak as Be,aB as De,p as re,ac as H,ad as oe,c as f,D as e,af as ee,t as A,r as i,s as j,f as N,a as ne,aC as S,Q as ue,B as w,u as V,ae as je}from"../chunks/utils.BBSL6nIp.js";import{s as te,e as F}from"../chunks/render.DbwWhMdO.js";import{s as ie,i as O,a as I,b as ge}from"../chunks/store.AdV-Kzmu.js";import{a as J,s as ye,t as _e}from"../chunks/class.BJT6LBsk.js";import{a as K,B as Re}from"../chunks/BottomBar.B4OBnRsj.js";import{e as Q,u as be,i as U,c as ce,g as ae,a as ve,b as qe,d as ke,f as Me,h as Oe,q as $e,j as He,k as Ee}from"../chunks/scores.CJAld1A1.js";import{p as Ge}from"../chunks/props.C1nJFS3o.js";import{g as we}from"../chunks/index.D_PKFVvz.js";import{t as Ie,a as Ne,s as X,b as Qe}from"../chunks/settings.t6vk2JNQ.js";import{a as Ue}from"../chunks/appearance.Dld82XYh.js";import{o as Ye}from"../chunks/index-client.C2B59STt.js";function Ze(u,_,z,l,n){var g=u,c="",p;Se(()=>{if(c===(c=_()??"")){fe&&he();return}p!==void 0&&(De(p),p=void 0),c!==""&&(p=xe(()=>{if(fe){me.data;for(var v=he(),y=v;v!==null&&(v.nodeType!==8||v.data!=="");)y=v,v=Pe(v);if(v===null)throw Le(),Ae;pe(me,y),g=Te(v);return}var b=c+"",h=ze(b);pe(Be(h),h.lastChild),g.before(h)}))})}var Fe=x('<div><div class="sub-selection svelte-13no1hr"></div></div>'),Je=x('<div><div class="alphabet-selection-container svelte-13no1hr"><div class="selection alphabet svelte-13no1hr"></div></div> <div class="selections-container svelte-13no1hr"></div></div>');function Ke(u,_){re(_,!1);const z=ie(),l=()=>I(ae,"$game_config",z),n=S(),g=S();let c=S(10);function p(a){var s;let t=ce;for(const r of a)t=((s=t.find(o=>o.key===r))==null?void 0:s.modes)||[];return t}function v(a){let t=ce,s="";for(let r=0;r<a.length;r++){const o=t.find(m=>m.key===a[r]);r===a.length-1?s=(o==null?void 0:o.modes_label)||"":t=(o==null?void 0:o.modes)||[]}return s}async function y(a,t){await be(a,t);const s=p(e(n));if(s.length==1){const r=s[0];y(r.key,t+1)}}H(()=>l(),()=>{var a;w(n,(a=l())==null?void 0:a.path)}),H(()=>e(n),()=>{w(g,e(n)[0])}),H(()=>e(n),()=>{setTimeout(()=>{w(c,e(n).length)},1)}),oe(),se();var b=Je(),h=f(b),T=f(h);Q(T,5,()=>ce,U,(a,t)=>{var s=ue(()=>e(g)===e(t).key);K(a,{get selected(){return e(s)},get title(){return`Select ${e(t).label??""}`},$$events:{click:()=>be(e(t).key,0)},children:(r,o)=>{ee();var m=G();A(()=>te(m,e(t).label)),d(r,m)},$$slots:{default:!0}})}),i(T),i(h);var D=j(h,2);Q(D,5,()=>Array.from({length:e(n).length},(a,t)=>t+1),U,(a,t)=>{var s=de(),r=N(s);{var o=m=>{var $=Fe();A(()=>J($,"data-label",v(e(n).slice(0,e(t)))));var C=f($);Q(C,5,()=>p(e(n).slice(0,e(t))),U,(R,P)=>{var Y=ue(()=>e(n)[e(t)]===e(P).key);K(R,{get selected(){return e(Y)},get title(){return`Select ${e(P).label??""}`},$$events:{click:()=>y(e(P).key,e(t))},children:(Z,q)=>{ee();var M=G();A(()=>te(M,e(P).label)),d(Z,M)},$$slots:{default:!0}})}),i(C),i($),A(()=>ye($,`sub-selection-container ${(e(t)<=e(c)?"visible":"")??""} svelte-13no1hr`)),d(m,$)};O(r,m=>{p(e(n).slice(0,e(t))).length>0&&m(o)})}d(a,s)}),i(D),i(b),d(u,b),ne()}function W(u,_){if(!_)return"";if(ke(u))return _.join(" ");const z=_.length/3;let l=[];for(let n=0;n<z;n++){const g=_[n*3],c=_[n*3+1],p=_[n*3+2];l.push(`<b>${c}</b> as in ${g}<b>${c}</b>${p}`)}return l.join(" ")}function Ve(u){var _;switch((_=we(ae))==null?void 0:_.path[0]){case"greek":return W(u.toLowerCase(),qe.pronunciations[u.toLowerCase()]);case"cyrillic":switch(we(ae).path[1]){case"bulgarian":return W(u.toLowerCase(),ve.bg_pronunciations[u.toLowerCase()]);case"russian":return W(u.toLowerCase(),ve.ru_pronunciations[u.toLowerCase()]);case"serbian":return W(u.toLowerCase(),ve.sr_pronunciations[u.toLowerCase()]);default:return""}default:return""}}var We=x('<div class="preview-item svelte-ibbha1"><div class="glyph-container svelte-ibbha1" role="tooltip"><span class="glyph svelte-ibbha1"> </span></div></div>'),Xe=x('<div class="pronunciations-container svelte-ibbha1"><span class="pronunciations svelte-ibbha1"><!></span></div>'),et=x('<div class="preview-container svelte-ibbha1"><div class="glyphs-container svelte-ibbha1"></div> <!></div>');function tt(u,_){re(_,!1);const z=ie(),l=()=>I(Oe,"$dictionary",z),n=S(),g=S();let c=Ge(_,"show_pronunciations",8),p=S(null),v=S(null);function y(a){w(p,a),w(v,Ve(e(p)))}H(()=>l(),()=>{w(n,l())}),H(()=>e(v),()=>{w(g,e(v)!=null&&e(v).length>0)}),oe(),se();var b=et(),h=f(b);Q(h,5,()=>e(n),U,(a,t)=>{var s=We(),r=f(s);A(()=>J(r,"data-answer",ke(e(t))?"Silent":Me(e(t)).join(" / ")));var o=f(r),m=f(o,!0);i(o),i(r),i(s),A(()=>te(m,e(t))),F("mouseenter",r,()=>{c()&&y(e(t))}),F("mouseleave",r,()=>{c()&&w(p,w(v,null))}),d(a,s)}),i(h);var T=j(h,2);{var D=a=>{var t=Xe(),s=f(t),r=f(s);Ze(r,()=>e(v)),i(s),i(t),A(()=>_e(s,"is-active",e(g))),d(a,t)};O(T,a=>{c()&&a(D)})}i(b),d(u,b),ne()}var at=x('<div class="button-container svelte-w29ypt"><button type="button" class="color-button appearance svelte-w29ypt"><span class="material-symbols-rounded icon svelte-w29ypt"><!></span></button></div>'),st=x('<div class="button-container svelte-w29ypt"><button type="button" style="background-color: linear-gradient(to bottom right, black 47%, white 53%);"></button></div>'),rt=x('<div class="palette-container svelte-w29ypt"><div class="palette-drawer-contents svelte-w29ypt"><div class="palette svelte-w29ypt"></div> <div class="palette colour svelte-w29ypt"></div></div> <button class="palette-drawer-handle svelte-w29ypt"><span class="material-symbols-rounded icon svelte-w29ypt">palette</span></button></div>');function ot(u,_){re(_,!1);const z=ie(),l=()=>I(X,"$settings",z),n=()=>I(Ue,"$appearance_store",z),g=S();let c=S(!1);const p=a=>{ge(X,V(l).appearance=a,V(l))},v=a=>{ge(X,V(l).colour=a,V(l))};H(()=>l(),()=>{w(g,l().colour)}),oe(),se();var y=rt(),b=f(y),h=f(b);Q(h,5,()=>Ie,U,(a,t)=>{var s=de(),r=N(s);{var o=m=>{var $=at(),C=f($),R=f(C),P=f(R);{var Y=q=>{var M=G("brightness_auto");d(q,M)},Z=q=>{var M=de(),le=N(M);{var k=L=>{var E=G("dark_mode");d(L,E)},B=L=>{var E=G("light_mode");d(L,E)};O(le,L=>{e(t)==="dark"?L(k):L(B,!1)},!0)}d(q,M)};O(P,q=>{e(t)==="auto"?q(Y):q(Z,!1)})}i(R),i(C),i($),A(()=>J(C,"aria-label",`Set theme appearance to ${e(t)}`)),F("click",C,()=>p(e(t))),d(m,$)};O(r,m=>{l().appearance!==e(t)&&m(o)})}d(a,s)}),i(h);var T=j(h,2);Q(T,5,()=>Ne,U,(a,t)=>{var s=st(),r=f(s);i(s),A(()=>{ye(r,`color-button ${n()??""}-theme-${e(t)??""} ${(e(t)===e(g)?"active":"")??""} svelte-w29ypt`),J(r,"aria-label",`Set theme colour to ${e(t)}`)}),F("click",r,()=>v(e(t))),d(a,s)}),i(T),i(b);var D=j(b,2);i(y),A(()=>{_e(b,"open",e(c)),J(D,"title",`${(e(c)?"Close":"Open")??""} palette`)}),F("click",D,()=>w(c,!e(c))),d(u,y),ne()}var nt=x("<!> <!>",1),it=x('<span class="stopwatch-button-content svelte-duz4z3">Use Stopwatch <span class="material-symbols-rounded icon svelte-duz4z3">timer</span></span>'),lt=x('<span class="high-score svelte-duz4z3"> </span>'),ct=x('<div class="stopwatch-section svelte-duz4z3"><!> <!></div> <!>',1),vt=x('<div class="wrapper svelte-duz4z3"><div class="top-bar svelte-duz4z3"><a href="/" class="title svelte-duz4z3">glyph-glyph</a> <span class="palette"><!></span></div> <!></div> <!>',1);function zt(u,_){re(_,!1);const z=ie(),l=()=>I(ae,"$game_config",z),n=()=>I(Ee,"$high_scores",z),g=()=>I(X,"$settings",z),c=S(),p=S(),v=S();let y=S(!0);Ye(()=>{const o=$e.subscribe(()=>{w(y,!1)});return()=>o()}),H(()=>l(),()=>{w(c,l().id)}),H(()=>(n(),e(c)),()=>{w(p,n()[e(c)])}),H(()=>l(),()=>{var o;w(v,["greek","cyrillic"].includes((o=l())==null?void 0:o.path[0]))}),oe(),se();var b=vt();Ce(o=>{je.title="Setup · glyph-glyph"});var h=N(b),T=f(h),D=j(f(T),2),a=f(D);ot(a,{}),i(D),i(T);var t=j(T,2);{var s=o=>{var m=nt(),$=N(m);Ke($,{});var C=j($,2);{var R=P=>{tt(P,{get show_pronunciations(){return e(v)}})};O(C,P=>{l().is_valid&&P(R)})}d(o,m)};O(t,o=>{e(y)||o(s)})}i(h);var r=j(h,2);Re(r,{children:(o,m)=>{var $=ct(),C=N($),R=f(C),P=ue(()=>`Turn stopwatch ${(g().using_stopwatch?"off":"on")??""}`);K(R,{get selected(){return g().using_stopwatch},get title(){return e(P)},$$events:{click:()=>{Qe()}},children:(k,B)=>{var L=it();d(k,L)},$$slots:{default:!0}});var Y=j(R,2);{var Z=k=>{var B=lt(),L=f(B);A(()=>te(L,`${He(e(p))??""}s`)),i(B),A(()=>_e(B,"not-set",e(p)<0)),d(k,B)};O(Y,k=>{l().is_valid&&g().using_stopwatch&&k(Z)})}i(C);var q=j(C,2);{var M=k=>{K(k,{href:"play",selected:!0,title:"Start game",$$events:{click:()=>{$e.reset()}},children:(B,L)=>{ee();var E=G("Start");d(B,E)},$$slots:{default:!0}})},le=k=>{K(k,{style:"disactivated",children:(B,L)=>{ee();var E=G("Start");d(B,E)},$$slots:{default:!0}})};O(q,k=>{l().is_valid?k(M):k(le,!1)})}d(o,$)},$$slots:{default:!0}}),d(u,b),ne()}export{zt as component};
