import{h as Pt,a as f,t as h}from"../chunks/disclose-version.CYEZbGRd.js";import{i as qt}from"../chunks/legacy.Dizh_e1X.js";import{p as At,l as g,i as zt,t as _,a as Ht,j as n,$ as jt,k as t,f as pt,c as a,s as r,r as e,m as l}from"../chunks/utils.DXvTgAFw.js";import{s as u,e as _t}from"../chunks/render.BS6rv_sO.js";import{s as Mt,i as I,a as Y}from"../chunks/store.DLGdLQ_h.js";import{B as ut,f as q,t as Tt,e as Ft,g as It}from"../chunks/glyphs.Cou4yDk0.js";import{B as Nt}from"../chunks/BottomBar.DNGS4DRZ.js";import{H as Ct,q as G,t as Dt,i as Et,g as Gt}from"../chunks/times.Dj0CMPb8.js";import{o as Jt}from"../chunks/index-client.SJPFcUSQ.js";var Kt=h('<div class="time-text-container svelte-1ntc1ru">New best time!</div> <div class="time new-best-color svelte-1ntc1ru"> </div>',1),Lt=h('<div class="column-container svelte-1ntc1ru"><div class="column-item time svelte-1ntc1ru"> </div> <div class="column-item muted-text svelte-1ntc1ru"> </div></div>'),Ot=h('<span class="glyph-tooltip"> <span class="incorrect-color"> </span></span>'),Qt=h('<div class="item-container svelte-1ntc1ru"><div class="glyph-container svelte-1ntc1ru" role="tooltip"><span class="glyph svelte-1ntc1ru"> </span> <!></div></div>'),Rt=h('<div class="incorrect-items-container"><div class="glyphs-container-title svelte-1ntc1ru">Incorrect answers:</div> <div class="glyphs-container"></div></div>'),Ut=h('<div class="info-container svelte-1ntc1ru"><div class="info svelte-1ntc1ru"><div class="info-block info-border svelte-1ntc1ru"><div class="highlight-glyph svelte-1ntc1ru"> </div> <div class="column-container svelte-1ntc1ru"><span class="column-item muted-text svelte-1ntc1ru">Fastest</span> <span class="column-item stat-time svelte-1ntc1ru"> </span></div></div> <div class="info-block info-border svelte-1ntc1ru"><div class="column-container svelte-1ntc1ru"><span class="column-item muted-text svelte-1ntc1ru">Average</span> <span class="column-item stat-time svelte-1ntc1ru"> </span></div></div> <div class="info-block info-border svelte-1ntc1ru"><div class="highlight-glyph svelte-1ntc1ru"> </div> <div class="column-container svelte-1ntc1ru"><span class="column-item muted-text svelte-1ntc1ru">Slowest</span> <span class="column-item stat-time svelte-1ntc1ru"> </span></div></div></div></div>'),Vt=h('<div class="stats-container svelte-1ntc1ru"><div class="info-container svelte-1ntc1ru"><div class="info svelte-1ntc1ru"><div class="info-block info-border svelte-1ntc1ru" data-label="Time"><!></div></div></div> <!> <!></div>'),Wt=h('<span class="button-content svelte-1ntc1ru"><span class="button-text svelte-1ntc1ru">Setup</span> <span class="material-symbols-rounded icon svelte-1ntc1ru">tune</span></span>'),Xt=h('<span class="button-content svelte-1ntc1ru"><span class="button-text svelte-1ntc1ru">Play Again</span> <span class="material-symbols-rounded icon svelte-1ntc1ru">refresh</span></span>'),Yt=h("<!> <!>",1),Zt=h('<div class="contents svelte-1ntc1ru"><div class="top-bar svelte-1ntc1ru"><div><a href="/">glyph-glyph</a> <span class="config-id svelte-1ntc1ru"> </span></div></div> <div class="summary-contents svelte-1ntc1ru"><div class="header-container svelte-1ntc1ru"><div class="content-width"><h1>Summary</h1></div></div> <!></div> <!> <!></div>');function os(mt,ft){At(ft,!1);const J=Mt(),K=()=>Y(It,"$game_config",J),Z=()=>Y(Dt,"$times_store",J),N=()=>Y(G,"$quiz",J),L=l(),A=l(),w=l(),o=l(),z=l(),tt=l(),st=l(),C=l(),et=l(),y=l(),at=l();let rt=l(!0),nt=l(!1),O=l(null);function gt(s){n(O,s)}Jt(()=>{const s=G.subscribe(()=>{n(rt,!1)});return()=>s()});const ht="";g(()=>K(),()=>{n(L,K().id)}),g(()=>(Z(),t(L)),()=>{n(A,Z().best_times[t(L)])}),g(()=>N(),()=>{n(w,N().elapsed_time)}),g(()=>N(),()=>{n(o,N().items)}),g(()=>t(o),()=>{n(z,t(o).every(s=>s==null?void 0:s.is_correct_answer))}),g(()=>t(o),()=>{n(tt,t(o).filter(s=>!(s!=null&&s.is_correct_answer)))}),g(()=>t(o),()=>{n(st,t(o).slice(1).every(s=>s!=null&&s.time_spent?(s==null?void 0:s.time_spent)>0:!1))}),g(()=>t(o),()=>{n(C,t(o).filter(s=>s==null?void 0:s.time_spent).map(s=>s.time_spent))}),g(()=>t(C),()=>{n(et,t(C).reduce((s,p)=>s+p,0)/t(C).length)}),g(()=>t(o),()=>{n(y,t(o).reduce((s,p)=>(p.time_spent&&(p.time_spent<(s.min.time_spent||0)&&(s.min=p),p.time_spent>(s.max.time_spent||0)&&(s.max=p)),s),{min:t(o)[1],max:t(o)[1]}))}),g(()=>(t(z),t(w),t(A)),()=>{n(at,t(z)&&t(w)>0&&t(A)>0&&t(w)<=t(A))}),zt(),qt();var Q=Zt();Pt(s=>{jt.title="Summary · glyph-glyph"});var R=a(Q),it=a(R),vt=r(a(it),2),$t=a(vt,!0);e(vt),e(it),e(R);var U=r(R,2),yt=r(a(U),2);{var bt=s=>{var p=Vt(),k=a(p),H=a(k),D=a(H),j=a(D);{var V=i=>{var v=Kt(),c=r(pt(v),2),m=a(c);_(()=>u(m,`${q(t(w))??""}s`)),e(c),f(i,v)},M=i=>{var v=Lt(),c=a(v),m=a(c);_(()=>u(m,`${q(t(w))??""}s`)),e(c);var d=r(c,2),b=a(d);_(()=>u(b,`Best: ${q(t(A))??""}s`)),e(d),e(v),_(()=>Tt(c,"incorrect-color",!t(z))),f(i,v)};I(j,i=>{t(at)?i(V):i(M,!1)})}e(D),e(H),e(k);var ot=r(k,2);{var wt=i=>{var v=Rt(),c=r(a(v),2);Ft(c,5,()=>t(tt),m=>m.glyph,(m,d)=>{var b=Qt(),x=a(b),S=a(x),W=a(S,!0);e(S);var T=r(S,2);{var E=B=>{var $=Ot(),F=a($);_(()=>u(F,`${(Et(t(d).glyph)?"Silent":Gt(t(d).glyph).join(" / "))??""} `));var P=r(F),X=a(P,!0);e(P),e($),_(()=>u(X,t(d).answered)),f(B,$)};I(T,B=>{var $;(($=t(O))==null?void 0:$.glyph)==t(d).glyph&&B(E)})}e(x),e(b),_(()=>u(W,t(d).glyph)),_t("mouseenter",x,()=>{gt(t(d))}),_t("mouseleave",x,()=>{n(O,null)}),f(m,b)}),e(c),e(v),f(i,v)};I(ot,i=>{!t(z)&&t(st)&&i(wt)})}var kt=r(ot,2);{var St=i=>{var v=Ut(),c=a(v),m=a(c),d=a(m),b=a(d,!0);e(d);var x=r(d,2),S=r(a(x),2),W=a(S);_(()=>u(W,`${q(t(y).min.time_spent)??""}s`)),e(S),e(x),e(m);var T=r(m,2),E=a(T),B=r(a(E),2),$=a(B);_(()=>u($,`${q(t(et))??""}s`)),e(B),e(E),e(T);var F=r(T,2),P=a(F),X=a(P,!0);e(P);var ct=r(P,2),dt=r(a(ct),2),Bt=a(dt);_(()=>u(Bt,`${q(t(y).max.time_spent)??""}s`)),e(dt),e(ct),e(F),e(c),e(v),_(()=>{u(b,t(y).min.glyph),u(X,t(y).max.glyph)}),f(i,v)};I(kt,i=>{t(y).min.time_spent&&t(y).max.time_spent&&i(St)})}e(p),f(s,p)};I(yt,s=>{t(rt)||s(bt)})}e(U);var lt=r(U,2);Ct(lt,{instructions:ht,get is_open(){return t(nt)},set is_open(s){n(nt,s)},$$legacy:!0});var xt=r(lt,2);Nt(xt,{children:(s,p)=>{var k=Yt(),H=pt(k);ut(H,{href:"setup",selected:!0,title:"Setup",$$events:{click:()=>{G.reset()}},children:(j,V)=>{var M=Wt();f(j,M)},$$slots:{default:!0}});var D=r(H,2);ut(D,{href:"play",selected:!0,title:"Play again",$$events:{click:()=>{G.reset()}},children:(j,V)=>{var M=Xt();f(j,M)},$$slots:{default:!0}}),f(s,k)},$$slots:{default:!0}}),e(Q),_(()=>u($t,K().id)),f(mt,Q),Ht()}export{os as component};
