import{a as q,t as C,d as ye,h as Ve,c as He}from"../chunks/disclose-version.CYEZbGRd.js";import{i as X}from"../chunks/legacy.Dizh_e1X.js";import{aM as De,X as Be,u as Le,b as Ge,a8 as Ne,B as Re,p as j,l as I,i as pe,c as b,r as g,s as M,k as e,t as V,a as U,m as T,j as f,ab as Y,T as te,aw as ae,az as Fe,aN as L,$ as Ke,aO as Oe,f as be,aP as Qe}from"../chunks/utils.DXvTgAFw.js";import{l as We,s as Z,e as W}from"../chunks/render.BS6rv_sO.js";import{i as R,s as ke,a as Q}from"../chunks/store.DLGdLQ_h.js";import{s as se,t as P,e as Xe,a as _e,A as je,C as Ue,D as Je,E as Ye,B as me,F as we,r as Ze,G as et,g as tt,l as at}from"../chunks/glyphs.BZE3epMA.js";import{b as re}from"../chunks/this.DCzmdEcR.js";import{p as S}from"../chunks/props.Ce0yfSwg.js";import{o as ge}from"../chunks/index-client.SJPFcUSQ.js";import{g as ne,b as fe,H as st,q as O,u as nt,t as rt}from"../chunks/times.8riW38Ab.js";import{s as xe,c as it}from"../chunks/settings.kxs38m7w.js";import{g as ot}from"../chunks/entry.RhCFuVAf.js";function lt(s,a,i=a){var c=De();We(s,"input",l=>{var r=l?s.defaultValue:s.value;if(r=ve(s)?de(r):r,i(r),c&&r!==(r=a())){var h=s.selectionStart,u=s.selectionEnd;s.value=r??"",u!==null&&(s.selectionStart=h,s.selectionEnd=Math.min(u,s.value.length))}}),(Be&&s.defaultValue!==s.value||Le(a)==null&&s.value)&&i(ve(s)?de(s.value):s.value),Ge(()=>{var l=a();ve(s)&&l===de(s.value)||s.type==="date"&&!l&&!s.value||l!==s.value&&(s.value=l??"")})}function ve(s){var a=s.type;return a==="number"||a==="range"}function de(s){return s===""?null:+s}function J(s,a,i){var c=Re(s,a);c&&c.set&&(s[a]=i,Ne(()=>{s[a]=null}))}function ct(s){return function(...a){var i=a[0];return i.preventDefault(),s==null?void 0:s.apply(this,a)}}var ut=C("<div> </div>"),vt=C('<div class="quiz-item-wrapper svelte-2386oy"><div class="quiz-item svelte-2386oy"><div class="glyph svelte-2386oy"> </div> <!></div></div>');function dt(s,a){j(a,!1);const i=T(),c=T(),l=T();let r=S(a,"glyph",8),h=S(a,"answered",8,void 0),u=S(a,"is_correct_answer",8,void 0),y=S(a,"is_current",8,!1),m=S(a,"element",12,void 0);I(()=>Y(h()),()=>{f(i,h()!==void 0)}),I(()=>(e(i),Y(u())),()=>{f(c,e(i)?u():!1)}),I(()=>(e(i),Y(u())),()=>{f(l,e(i)?!u():!1)}),pe(),X();var v=vt(),w=b(v),d=b(w),p=b(d,!0);g(d);var o=M(d,2);{var k=_=>{var z=ut();const $=te(()=>`romanisation ${(ne(r())[0].length>3?"long":"")??""} svelte-2386oy`);var N=b(z,!0);V(()=>Z(N,ne(r())[0])),g(z),V(()=>se(z,e($))),q(_,z)};R(o,_=>{e(l)&&_(k)})}g(w),re(w,_=>m(_),()=>m()),g(v),V(()=>{P(w,"has-answer",e(i)),P(w,"is-correct",e(c)),P(w,"is-incorrect",e(l)),P(w,"is-current",y()),Z(p,r())}),q(s,v),U()}var _t=C("<div><!></div>"),mt=C('<section class="quiz-container svelte-vgkonl"><div></div></section>');function ft(s,a){j(a,!1);let i=S(a,"items",8),c=S(a,"current_idx",8),l=T(0),r=T(),h=T(!0);async function u(){var p,o;if(await ae(),!e(r))return;const d=e(r).querySelectorAll(".quiz-content > .quiz-glyph");f(l,0);for(let k=0;k<c();k++)f(l,e(l)+(((p=d[k])==null?void 0:p.getBoundingClientRect().width)||0));f(l,e(l)+(((o=d[c()])==null?void 0:o.offsetWidth)||0)/2)}async function y(){f(h,!0),await ae(),setTimeout(()=>{f(h,!1)},2)}ge(()=>{u(),y()});function m(d){let o=Math.abs(d-c());return o=je(Ue(Je(o,0,8,0,1)),2)*10,o}window.addEventListener("resize",()=>{y()}),I(()=>(Y(i()),Y(c())),()=>{(i()||c())&&u()}),pe(),X();var v=mt(),w=b(v);Xe(w,7,i,({id:d,glyph:p,answered:o,is_correct_answer:k})=>d,(d,p,o)=>{let k=()=>e(p).glyph,_=()=>e(p).answered,z=()=>e(p).is_correct_answer;var $=_t();const N=te(()=>`filter: blur(calc(${m(e(o))??""}px))`);var F=b($),x=te(()=>e(o)==c());dt(F,{get glyph(){return k()},get answered(){return _()},get is_correct_answer(){return z()},get is_current(){return e(x)}}),g($),V(()=>{se($,`quiz-glyph ${(e(o)===c()?"current":"")??""} svelte-vgkonl`),_e($,"style",e(N))}),q(d,$)}),g(w),g(v),re(v,d=>f(r,d),()=>e(r)),V(()=>{se(w,`quiz-content ${(e(h)?"no-transition":"")??""} svelte-vgkonl`),_e(w,"style",`transform: translateX(calc(50vw - ${e(l)??""}px));`)}),q(s,v),U()}var pt=C('<div class="input-container svelte-kap59t"><form class="answer-input content-width svelte-kap59t"><input type="text" class="text-field svelte-kap59t" placeholder="type here..." autocapitalize="none" autocomplete="off" autocorrect="off"></form></div>');function gt(s,a){j(a,!1);const i=ke(),c=()=>Q(xe,"$settings",i);let l=S(a,"onSubmit",8),r=S(a,"input",12,""),h=S(a,"current_glyph",8),u=S(a,"input_element",12);const y=/^\s+$/;let m=T(!1);function v(){fe(r(),h())||f(m,!0),l()(r()),r("")}function w(_){const z=["insertCompositionText","deleteCompositionText"];return _.isComposing||z.includes(_.inputType)}function d(_){const z=_;if(!w(z)&&h()&&z.data!==null){if(r(r().trim()),y.test(z.data)){v();return}fe(r(),h())&&c().auto_submit&&v()}}X();var p=pt(),o=b(p),k=b(o);Ye(k),_e(k,"spellcheck",!1),re(k,_=>u(_),()=>u()),g(o),g(p),V(()=>P(o,"shake-animation-playing",e(m))),lt(k,r),W("input",k,d),W("submit",o,ct(v)),W("animationend",o,()=>f(m,!1)),q(s,p),U()}var ht=C('<span class="tilt-animation-container svelte-pgyicl"><span class="material-symbols-rounded reset-animation-container menu-icon flipped svelte-pgyicl">refresh</span></span>'),yt=C('<span class="material-symbols-rounded menu-icon svelte-pgyicl">help</span>'),bt=C('<section class="menu svelte-pgyicl"><div class="button-container svelte-pgyicl"><a href="setup" class="button svelte-pgyicl" title="Go back"><span class="material-symbols-rounded menu-icon svelte-pgyicl">arrow_back</span></a></div> <div class="button-container svelte-pgyicl"><button type="button" class="button svelte-pgyicl" title="Toggle auto-submit"><span class="material-symbols-rounded reset-animation-container menu-icon svelte-pgyicl">keyboard_double_arrow_up</span></button></div> <div class="button-container tilt svelte-pgyicl"><!></div> <div class="button-container svelte-pgyicl"><!></div></section>');function wt(s,a){j(a,!1);let i=T(!1),c=S(a,"menu_event",8),l=S(a,"is_keyboard_open",8),r=S(a,"auto_submit",8),h=S(a,"show_help",12);X();var u=bt(),y=M(b(u),2),m=b(y);g(y);var v=M(y,2),w=b(v);me(w,{style:"menu-icon",title:"Restart game",$$events:{click:()=>{c()("restart"),f(i,!0)}},children:(o,k)=>{var _=ht(),z=b(_);g(_),W("animationend",z,()=>{f(i,!1)}),q(o,_)},$$slots:{default:!0}}),g(v);var d=M(v,2),p=b(d);me(p,{style:"menu-icon",title:"Help",$$events:{click:()=>h(!h())},children:(o,k)=>{var _=yt();q(o,_)},$$slots:{default:!0}}),g(d),g(u),V(()=>{P(u,"keyboard-open",l()),P(y,"activated",r()),P(v,"reset-animation-playing",e(i))}),W("click",m,()=>{c()("toggle-auto-submit")}),q(s,u),U()}var kt=C('<span class="best-time not-set svelte-1x0vul2">best: --:--.-s</span>'),xt=C('<span class="best-time svelte-1x0vul2">best: <span class="nowrap"> </span></span>'),zt=C('<div class="stopwatch svelte-1x0vul2"><span><!>s</span> <!></div>');function Tt(s,a){j(a,!1);let i=S(a,"elapsed_time",12,0),c=S(a,"is_inactive",8,!1),l=S(a,"best_time",24,()=>-1),r=S(a,"time_style",8,"normal"),h=null,u=null;ge(()=>()=>{v()});function y(){h=Date.now(),u=setInterval(()=>{m()},100)}function m(){if(h!==null){const x=Date.now();i(Ze((x-h)/1e3,2))}else console.log("start_time is null")}function v(){u&&(clearInterval(u),u=null)}function w(){v(),i(0),h=null}function d(){return h!==null}X();var p=zt(),o=b(p),k=b(o);{var _=x=>{var t=ye("--:--.-");q(x,t)},z=x=>{var t=ye();V(()=>Z(t,we(i()))),q(x,t)};R(k,x=>{c()?x(_):x(z,!1)})}Fe(),g(o);var $=M(o,2);{var N=x=>{var t=kt();q(x,t)},F=x=>{var t=xt(),K=M(b(t)),ie=b(K);V(()=>Z(ie,`${we(l())??""}s`)),g(K),g(t),q(x,t)};R($,x=>{l()<0?x(N):x(F,!1)})}return g(p),V(()=>{se(o,`time ${r()??""} nowrap svelte-1x0vul2`),P(o,"incorrect-color",r()=="incorrect"),P(o,"new-best-color",r()=="record-set")}),q(s,p),J(a,"startTimer",y),J(a,"updateTime",m),J(a,"stopTimer",v),J(a,"resetTimer",w),J(a,"hasStarted",d),U({startTimer:y,updateTime:m,stopTimer:v,resetTimer:w,hasStarted:d})}var St=C("<!> <!> <!>",1),qt=C('<span class="button-content svelte-szf12t"><span class="button-text">Summary</span> <span class="material-symbols-rounded icon svelte-szf12t">arrow_forward</span></span>'),Et=C('<div class="summary-button-container svelte-szf12t"><!></div>'),Ct=C('<div><div class="contents svelte-szf12t"><div class="top-bar svelte-szf12t"><div><a href="/">glyph-glyph</a> <span class="config-id svelte-szf12t"> </span></div> <!></div> <div class="play-contents svelte-szf12t"><!></div> <!></div> <!></div>');function Rt(s,a){j(a,!1);const i=ke(),c=()=>Q(O,"$quiz",i),l=()=>Q(tt,"$game_config",i),r=()=>Q(xe,"$settings",i),h=()=>Q(rt,"$times_store",i),u=()=>Q(at,"$glyphs_list",i),y=T(),m=T(),v=T(),w=T(),d=T(),p=T(),o=T();let k=T(!0),_=T(!1),z=T(!1);function $(){window.visualViewport&&f(_,window.visualViewport.height<window.innerHeight)}ge(()=>{window.visualViewport&&(window.visualViewport.addEventListener("resize",$),$());const n=O.subscribe(()=>{f(k,!1)});return L(t,e(t).is_inactive=e(m)>0),()=>{window.visualViewport&&window.visualViewport.removeEventListener("resize",$),n()}});const N=/^[a-z0-9]+$/i;let F=T(),x=T(),t=T({is_enabled:r().stopwatch_enabled}),K=0;function ie(n){var E;switch(n){case"restart":l().path.includes("hangul")&&l().path.includes("syllables")&&et(),O.reset(),e(t).is_enabled&&((E=e(t).component)==null||E.resetTimer(),L(t,e(t).is_inactive=!1),L(t,e(t).new_record_set=!1),K=0);break;case"toggle-auto-submit":it()}}async function ze(n){var D,B,A;if(!l().is_valid||!e(v))return;e(t).component&&e(t).is_enabled&&!e(t).component.hasStarted()&&e(t).component.startTimer();const E=fe(n,e(v).glyph);if(!E&&n==="")return;(D=e(t).component)==null||D.updateTime();let G=e(t).is_enabled&&e(t).component&&e(t).component.hasStarted()?(e(t).elapsed_time||0)-K:0;if(K=e(t).elapsed_time||0,O.updateItem(e(m),H=>({...H,answered:n,is_correct_answer:E,time_spent:G})),O.updateIndex(Qe(m)),await ae(),e(w)){!e(t).is_inactive&&e(t).is_enabled&&((B=e(t).component)!=null&&B.hasStarted())&&((A=e(t).component)==null||A.stopTimer(),e(d)&&L(t,e(t).new_record_set=nt(e(p),e(t).elapsed_time||0))),O.updateElapsedTime(e(t).elapsed_time||-1),ot("/summary",{state:{elapsed_time:Number(e(t).elapsed_time??0)}});return}await ae()}function Te(n){n.isComposing||document.activeElement!==e(x)&&n.key!==" "&&n.key.length===1&&N.test(n.key)&&e(x).focus()}I(()=>c(),()=>{f(y,c().items)}),I(()=>c(),()=>{f(m,c().current_idx)}),I(()=>(e(y),e(m)),()=>{f(v,e(y)&&e(y)[e(m)])}),I(()=>(e(m),e(y)),()=>{f(w,e(m)>=e(y).length)}),I(()=>(e(y),e(m)),()=>{f(d,e(y).slice(0,e(m)).every(n=>n==null?void 0:n.is_correct_answer))}),I(()=>l(),()=>{f(p,l().id)}),I(()=>r(),()=>{L(t,e(t).is_enabled=r().stopwatch_enabled)}),I(()=>(h(),e(p)),()=>{L(t,e(t).best_time=h().best_times[e(p)])}),I(()=>(e(t),e(d)),()=>{var n;L(t,e(t).time_style=e(t).is_inactive?"inactive":e(t).new_record_set?"record-set":e(d)?(n=e(t).component)!=null&&n.hasStarted()?"inactive":"normal":"incorrect")}),I(()=>(u(),ne),()=>{f(o,`Type the correct answer for the current (underlined) glyph in the
   queue.

For example for `+u()[0]+', type "'+ne(u()[0])[0]+`" 

There are buttons for restarting and for toggling the auto-submit mechanism 
   (automatically submits a correct answer)`)}),pe(),X();var oe=Ct();Ve(n=>{Ke.title="Play · glyph-glyph"}),W("keydown",Oe,Te);var le=b(oe),ce=b(le),ue=b(ce),he=M(b(ue),2),Se=b(he,!0);g(he),g(ue);var qe=M(ue,2);{var Ee=n=>{var E=He(),G=be(E);{var D=B=>{re(Tt(B,{get is_inactive(){return e(t).is_inactive},get best_time(){return e(t).best_time},get time_style(){return e(t).time_style},get elapsed_time(){return e(t).elapsed_time},set elapsed_time(A){L(t,e(t).elapsed_time=A)},$$legacy:!0}),A=>L(t,e(t).component=A),()=>{var A;return(A=e(t))==null?void 0:A.component})};R(G,B=>{e(t).is_enabled&&B(D)})}q(n,E)};R(qe,n=>{e(k)||n(Ee)})}g(ce);var ee=M(ce,2),Ce=b(ee);{var Ie=n=>{},$e=n=>{var E=St(),G=be(E);ft(G,{get items(){return e(y)},get current_idx(){return e(m)}});var D=M(G,2),B=te(()=>{var H;return(H=e(v))==null?void 0:H.glyph});gt(D,{onSubmit:ze,get current_glyph(){return e(B)},get input(){return e(F)},set input(H){f(F,H)},get input_element(){return e(x)},set input_element(H){f(x,H)},$$legacy:!0});var A=M(D,2);wt(A,{menu_event:ie,get is_keyboard_open(){return e(_)},get auto_submit(){return r().auto_submit},get show_help(){return e(z)},set show_help(H){f(z,H)},$$legacy:!0}),q(n,E)};R(Ce,n=>{e(k)?n(Ie):n($e,!1)})}g(ee);var Ae=M(ee,2);{var Me=n=>{var E=Et(),G=b(E);me(G,{href:"summary",selected:!0,title:"Summary",$$events:{click:()=>{}},children:(D,B)=>{var A=qt();q(D,A)},$$slots:{default:!0}}),g(E),q(n,E)};R(Ae,n=>{e(w)&&n(Me)})}g(le);var Pe=M(le,2);st(Pe,{get instructions(){return e(o)},get is_open(){return e(z)},set is_open(n){f(z,n)},$$legacy:!0}),g(oe),V(()=>{Z(Se,l().id),P(ee,"keyboard-open",e(_))}),q(s,oe),U()}export{Rt as component};
