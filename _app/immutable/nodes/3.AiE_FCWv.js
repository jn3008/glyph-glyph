import{a as q,t as V,d as ge,h as Ce,c as Me}from"../chunks/disclose-version.B8nYLgL4.js";import{i as O}from"../chunks/legacy.CgpFKzs7.js";import{aM as Ve,h as Ae,u as je,b as He,a4 as Le,z as Pe,p as Q,a9 as I,aa as de,c as w,r as p,s as j,A as e,t as M,a as W,aw as d,a7 as X,y as i,M as $,au as ue,ay as De,ax as Re,aN as Be,f as we,aO as Ke}from"../chunks/utils.BlbffUCT.js";import{l as Ne,s as F,e as K}from"../chunks/render.C1RE0XEP.js";import{i as N,s as Oe,a as Z}from"../chunks/store.CbB5JJSv.js";import{i as ee,k as H,m as Qe,j as ve,r as We,v as Ge,w as Ue,x as Xe,q as he,y as Fe,d as Je}from"../chunks/dictionary.oij6mhXY.js";import{b as te}from"../chunks/this.-2yZ0d7J.js";import{p as b}from"../chunks/props.BQz8PEny.js";import{o as fe}from"../chunks/index-client.DXjkudc0.js";import{g as ye,a as _e,q as U,u as Ye,h as Ze}from"../chunks/scores.igYzvDiL.js";import{s as $e}from"../chunks/settings.BbKrtD84.js";function et(t,a,s=a){var r=Ve();Ne(t,"input",l=>{var o=l?t.defaultValue:t.value;if(o=le(t)?oe(o):o,s(o),r&&o!==(o=a())){var g=t.selectionStart,n=t.selectionEnd;t.value=o??"",n!==null&&(t.selectionStart=g,t.selectionEnd=Math.min(n,t.value.length))}}),(Ae&&t.defaultValue!==t.value||je(a)==null&&t.value)&&s(le(t)?oe(t.value):t.value),He(()=>{var l=a();le(t)&&l===oe(t.value)||t.type==="date"&&!l&&!t.value||l!==t.value&&(t.value=l??"")})}function le(t){var a=t.type;return a==="number"||a==="range"}function oe(t){return t===""?null:+t}function ce(t,a,s){var r=Pe(t,a);r&&r.set&&(t[a]=s,Le(()=>{t[a]=null}))}function tt(t){return function(...a){var s=a[0];return s.preventDefault(),t==null?void 0:t.apply(this,a)}}var at=V("<div> </div>"),st=V('<div class="quiz-item-wrapper svelte-1izkrrf"><div class="quiz-item svelte-1izkrrf"><div class="glyph svelte-1izkrrf"> </div> <!></div></div>');function rt(t,a){Q(a,!1);const s=d(),r=d(),l=d();let o=b(a,"glyph",8),g=b(a,"answered",8,void 0),n=b(a,"is_correct_answer",8,void 0),f=b(a,"is_current",8,!1),x=b(a,"element",12,void 0);I(()=>X(g()),()=>{i(s,g()!==void 0)}),I(()=>(e(s),X(n())),()=>{i(r,e(s)?n():!1)}),I(()=>(e(s),X(n())),()=>{i(l,e(s)?!n():!1)}),de(),O();var y=st(),c=w(y),u=w(c),_=w(u,!0);p(u);var m=j(u,2);{var T=z=>{var E=at();const S=$(()=>`romanisation ${(ye(o())[0].length>3?"long":"")??""} svelte-1izkrrf`);var h=w(E,!0);M(()=>F(h,ye(o())[0])),p(E),M(()=>ee(E,e(S))),q(z,E)};N(m,z=>{e(l)&&z(T)})}p(c),te(c,z=>x(z),()=>x()),p(y),M(()=>{H(c,"has-answer",e(s)),H(c,"is-correct",e(r)),H(c,"is-incorrect",e(l)),H(c,"is-current",f()),F(_,o())}),q(t,y),W()}var nt=V("<div><!></div>"),it=V('<section class="quiz-container svelte-11xyc1x"><div></div></section>');function lt(t,a){Q(a,!1);let s=b(a,"items",8),r=b(a,"current_idx",8),l=d(0),o=d(),g=d(!0);async function n(){var _,m;if(await ue(),!e(o))return;const u=e(o).querySelectorAll(".quiz-content > .quiz-glyph");i(l,0);for(let T=0;T<r();T++)i(l,e(l)+(((_=u[T])==null?void 0:_.getBoundingClientRect().width)||0));i(l,e(l)+(((m=u[r()])==null?void 0:m.offsetWidth)||0)/2)}async function f(){i(g,!0),await ue(),setTimeout(()=>{i(g,!1)},2)}fe(()=>{n(),f()});function x(u){let m=Math.abs(u-r());return m=We(Ge(Ue(m,0,8,0,1)),2)*10,m}window.addEventListener("resize",()=>{f()}),I(()=>(X(s()),X(r())),()=>{(s()||r())&&n()}),de(),O();var y=it(),c=w(y);Qe(c,7,s,({id:u,glyph:_,answered:m,is_correct_answer:T})=>u,(u,_,m)=>{let T=()=>e(_).glyph,z=()=>e(_).answered,E=()=>e(_).is_correct_answer;var S=nt();const h=$(()=>`filter: blur(calc(${x(e(m))??""}px))`);var k=w(S),A=$(()=>e(m)==r());rt(k,{get glyph(){return T()},get answered(){return z()},get is_correct_answer(){return E()},get is_current(){return e(A)}}),p(S),M(()=>{ee(S,`quiz-glyph ${(e(m)===r()?"current":"")??""} svelte-11xyc1x`),ve(S,"style",e(h))}),q(u,S)}),p(c),p(y),te(y,u=>i(o,u),()=>e(o)),M(()=>{ee(c,`quiz-content ${(e(g)?"no-transition":"")??""} svelte-11xyc1x`),ve(c,"style",`transform: translateX(calc(50vw - ${e(l)??""}px));`)}),q(t,y),W()}var ot=V('<form class="answer-input content-width svelte-i9oslv"><input type="text" class="text-field svelte-i9oslv" placeholder="type here..." autocapitalize="none" autocomplete="off" autocorrect="off"></form>');function ct(t,a){Q(a,!1);let s=b(a,"onSubmit",8),r=b(a,"input",12,""),l=b(a,"current_glyph",8),o=b(a,"input_element",12);const g=/^\s+$/;let n=d(!1);function f(){_e(r(),l())||i(n,!0),s()(r()),r("")}function x(_){const m=["insertCompositionText","deleteCompositionText"];return _.isComposing||m.includes(_.inputType)}function y(_){const m=_;if(!x(m)&&l()!==null&&m.data!==null){if(r(r().trim()),g.test(m.data)){f();return}_e(r(),l())&&f()}}O();var c=ot(),u=w(c);Xe(u),ve(u,"spellcheck",!1),te(u,_=>o(_),()=>o()),p(c),M(()=>H(c,"shake-animation-playing",e(n))),et(u,r),K("input",u,y),K("submit",c,tt(f)),K("animationend",c,()=>i(n,!1)),q(t,c),W()}var ut=V('<section class="menu svelte-vpz0se"><a href="setup" class="button svelte-vpz0se" title="Go back"><span class="material-symbols-rounded menu-icon svelte-vpz0se">arrow_back</span></a> <button type="button" class="button tilt svelte-vpz0se" title="Restart game"><span class="tilt-animation-container svelte-vpz0se"><span class="material-symbols-rounded reset-animation-container menu-icon svelte-vpz0se">refresh</span></span></button></section>');function vt(t,a){Q(a,!1);let s=d(!1),r=b(a,"menu_event",8),l=b(a,"is_keyboard_open",8);O();var o=ut(),g=j(w(o),2),n=w(g),f=w(n);p(n),p(g),p(o),M(()=>{H(o,"keyboard-open",l()),H(g,"reset-animation-playing",e(s))}),K("animationend",f,()=>{i(s,!1)}),K("click",g,()=>{r()("restart"),i(s,!0)}),q(t,o),W()}var _t=V('<span class="best-time not-set svelte-13j0w94">best: --:--.-s</span>'),dt=V('<span class="best-time svelte-13j0w94">best: <span class="nowrap svelte-13j0w94"> </span></span>'),ft=V('<div class="stopwatch svelte-13j0w94"><span><!>s</span> <!></div>');function mt(t,a){Q(a,!1);let s=b(a,"elapsed_time",12,0),r=b(a,"is_paused",12,!0),l=b(a,"is_disabled",8,!1),o=b(a,"best_time",24,()=>-1),g=b(a,"time_style",8,"normal"),n=null;fe(()=>()=>{x()});function f(){r(!1),n||(n=setInterval(()=>{s(s()+.1),s(Fe(s(),2))},100))}function x(){r(!0),n&&(clearInterval(n),n=null)}function y(){x(),s(0)}O();var c=ft(),u=w(c),_=w(u);{var m=h=>{var k=ge("--:--.-");q(h,k)},T=h=>{var k=ge();M(()=>F(k,he(s()))),q(h,k)};N(_,h=>{l()?h(m):h(T,!1)})}De(),p(u);var z=j(u,2);{var E=h=>{var k=_t();q(h,k)},S=h=>{var k=dt(),A=j(w(k)),L=w(A);M(()=>F(L,`${he(o())??""}s`)),p(A),p(k),q(h,k)};N(z,h=>{o()<0?h(E):h(S,!1)})}return p(c),M(()=>ee(u,`time ${g()??""} nowrap svelte-13j0w94`)),q(t,c),ce(a,"startTimer",f),ce(a,"stopTimer",x),ce(a,"resetTimer",y),W({startTimer:f,stopTimer:x,resetTimer:y})}var pt=V("<!> <!> <!>",1),gt=V('<div><div class="contents svelte-ebb7wt"><div class="top-bar svelte-ebb7wt"><div><a href="/">glyph-glyph</a> <span class="config-id svelte-ebb7wt"> </span></div> <!></div> <div class="play-contents svelte-ebb7wt"><!></div></div></div>');function It(t,a){Q(a,!1);const s=Oe(),r=()=>Z(U,"$quiz",s),l=()=>Z(Je,"$game_config",s),o=()=>Z(Ze,"$high_scores",s),g=()=>Z($e,"$settings",s),n=d(),f=d(),x=d(),y=d(),c=d(),u=d(),_=d(),m=d();let T=d(!0),z=d(!1),E=d(!1);function S(){window.visualViewport&&i(E,window.visualViewport.height<window.innerHeight)}fe(()=>{window.visualViewport&&(window.visualViewport.addEventListener("resize",S),S());const v=U.subscribe(()=>{i(T,!1)});return i(z,e(f)>0),()=>{window.visualViewport&&window.visualViewport.removeEventListener("resize",S),v()}});const h=/^[a-z0-9]+$/i;let k=d(),A=d(),L=d(),ae=d(0),D=d(),J=d(!1);function be(v){var C;switch(v){case"restart":U.reset(),e(_)&&((C=e(L))==null||C.resetTimer(),i(z,!1),i(J,!1));break}}async function xe(v){if(!l().is_valid||!e(x))return;e(_)&&e(D)&&e(L).startTimer();const C=_e(v,e(x).glyph);!C&&v===""||(U.updateItem(e(f),R=>({...R,answered:v,is_correct_answer:C})),U.updateIndex(Ke(f)),!e(z)&&e(f)==e(n).length&&e(_)&&!e(D)&&(e(L).stopTimer(),e(y)&&i(J,Ye(e(c),e(ae)))),await ue())}function ze(v){v.isComposing||document.activeElement!==e(A)&&v.key!==" "&&v.key.length===1&&h.test(v.key)&&e(A).focus()}I(()=>r(),()=>{i(n,r().items)}),I(()=>r(),()=>{i(f,r().current_idx)}),I(()=>(e(n),e(f)),()=>{i(x,e(n)&&e(n)[e(f)])}),I(()=>(e(n),e(f)),()=>{i(y,e(n).slice(0,e(f)).every(v=>v==null?void 0:v.is_correct_answer))}),I(()=>l(),()=>{i(c,l().id)}),I(()=>(o(),e(c)),()=>{i(u,o()[e(c)])}),I(()=>g(),()=>{i(_,g().using_stopwatch)}),I(()=>(e(z),e(J),e(y),e(D)),()=>{i(m,e(z)?"inactive":e(J)?"record-set":e(y)?e(D)?"inactive":"normal":"incorrect")}),de(),O();var se=gt();Ce(v=>{Re.title="Play · glyph-glyph"}),K("keydown",Be,ze);var me=w(se),re=w(me),ne=w(re),pe=j(w(ne),2),ke=w(pe,!0);p(pe),p(ne);var Te=j(ne,2);{var qe=v=>{var C=Me(),R=we(C);{var Y=G=>{te(mt(G,{get is_disabled(){return e(z)},get best_time(){return e(u)},get time_style(){return e(m)},get elapsed_time(){return e(ae)},set elapsed_time(P){i(ae,P)},get is_paused(){return e(D)},set is_paused(P){i(D,P)},$$legacy:!0}),P=>i(L,P),()=>e(L))};N(R,G=>{e(_)&&G(Y)})}q(v,C)};N(Te,v=>{e(T)||v(qe)})}p(re);var ie=j(re,2),Se=w(ie);{var Ee=v=>{},Ie=v=>{var C=pt(),R=we(C);lt(R,{get items(){return e(n)},get current_idx(){return e(f)}});var Y=j(R,2),G=$(()=>{var B;return(B=e(x))==null?void 0:B.glyph});ct(Y,{onSubmit:xe,get current_glyph(){return e(G)},get input(){return e(k)},set input(B){i(k,B)},get input_element(){return e(A)},set input_element(B){i(A,B)},$$legacy:!0});var P=j(Y,2);vt(P,{menu_event:be,get is_keyboard_open(){return e(E)}}),q(v,C)};N(Se,v=>{e(T)?v(Ee):v(Ie,!1)})}p(ie),p(me),p(se),M(()=>{F(ke,l().id),H(ie,"keyboard-open",e(E))}),q(t,se),W()}export{It as component};
