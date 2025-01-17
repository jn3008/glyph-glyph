import{h as Is,a as f,t as g}from"../chunks/disclose-version.CYEZbGRd.js";import{i as Ns}from"../chunks/legacy.Dizh_e1X.js";import{p as Cs,l as p,i as Es,t as m,a as Gs,j as v,$ as Js,k as s,f as hs,c as a,s as o,r as t,m as l}from"../chunks/utils.DXvTgAFw.js";import{s as c,e as $s}from"../chunks/render.BS6rv_sO.js";import{s as Ks,i as q,a as es}from"../chunks/store.DLGdLQ_h.js";import{B as ys,r as Ls,f as z,t as Os,e as Qs,g as Rs}from"../chunks/glyphs.DI0hEd2V.js";import{B as Us}from"../chunks/BottomBar.kOKUJFzP.js";import{H as Vs,q as K,t as Ws,i as Xs,g as Ys}from"../chunks/times.DNwZd9S2.js";import{o as Zs}from"../chunks/index-client.SJPFcUSQ.js";var se=g('<div class="time-text-container svelte-1dcs1ow">New best time!</div> <div class="time new-best-color svelte-1dcs1ow"> </div>',1),ee=g('<div class="column-container svelte-1dcs1ow"><div class="column-item time svelte-1dcs1ow"> </div> <div class="column-item muted-text svelte-1dcs1ow"> </div></div>'),te=g('<div class="time-text-container svelte-1dcs1ow">All correct!</div>'),ae=g('<span class="glyph-tooltip"> <span class="incorrect-color"> </span></span>'),oe=g('<div class="item-container svelte-1dcs1ow"><div class="glyph-container svelte-1dcs1ow" role="tooltip"><span class="glyph svelte-1dcs1ow"> </span> <!></div></div>'),re=g('<div class="incorrect-items-container"><div class="glyphs-container-title svelte-1dcs1ow">Incorrect answers:</div> <div class="glyphs-container"></div></div>'),ie=g('<div class="info-container svelte-1dcs1ow"><div class="info svelte-1dcs1ow"><div class="info-block info-border svelte-1dcs1ow"><div class="highlight-glyph svelte-1dcs1ow"> </div> <div class="column-container svelte-1dcs1ow"><span class="column-item muted-text svelte-1dcs1ow">Fastest</span> <span class="column-item stat-time svelte-1dcs1ow"> </span></div></div> <div class="info-block info-border svelte-1dcs1ow"><div class="column-container svelte-1dcs1ow"><span class="column-item muted-text svelte-1dcs1ow">Average</span> <span class="column-item stat-time svelte-1dcs1ow"> </span></div></div> <div class="info-block info-border svelte-1dcs1ow"><div class="highlight-glyph svelte-1dcs1ow"> </div> <div class="column-container svelte-1dcs1ow"><span class="column-item muted-text svelte-1dcs1ow">Slowest</span> <span class="column-item stat-time svelte-1dcs1ow"> </span></div></div></div></div>'),ve=g('<div class="stats-container svelte-1dcs1ow"><div class="info-container svelte-1dcs1ow"><div class="info svelte-1dcs1ow"><div class="info-block info-border svelte-1dcs1ow" data-label="Time"><!></div> <div class="info-block info-border svelte-1dcs1ow" data-label="Accuracy"><!> <div class="column-container svelte-1dcs1ow"><div class="column-item time svelte-1dcs1ow"> </div> <div class="column-item muted-text svelte-1dcs1ow"> </div></div></div></div></div> <!> <!></div>'),ne=g('<span class="button-content svelte-1dcs1ow"><span class="button-text svelte-1dcs1ow">Setup</span> <span class="material-symbols-rounded icon svelte-1dcs1ow">tune</span></span>'),le=g('<span class="button-content svelte-1dcs1ow"><span class="button-text svelte-1dcs1ow">Play Again</span> <span class="material-symbols-rounded icon svelte-1dcs1ow">refresh</span></span>'),ce=g("<!> <!>",1),de=g('<div class="contents svelte-1dcs1ow"><div class="top-bar svelte-1dcs1ow"><div><a href="/">glyph-glyph</a> <span class="config-id svelte-1dcs1ow"> </span></div></div> <div class="summary-contents svelte-1dcs1ow"><div class="header-container svelte-1dcs1ow"><div class="content-width"><h1>Summary</h1></div></div> <!></div> <!> <!></div>');function ye(xs,bs){Cs(bs,!1);const L=Ks(),O=()=>es(Rs,"$game_config",L),ts=()=>es(Ws,"$times_store",L),N=()=>es(K,"$quiz",L),Q=l(),H=l(),b=l(),r=l(),k=l(),C=l(),E=l(),as=l(),os=l(),G=l(),rs=l(),$=l(),is=l();let vs=l(!0),ns=l(!1),R=l(null);function ks(e){v(R,e)}Zs(()=>{const e=K.subscribe(()=>{v(vs,!1)});return()=>e()});const Ss="";p(()=>O(),()=>{v(Q,O().id)}),p(()=>(ts(),s(Q)),()=>{v(H,ts().best_times[s(Q)])}),p(()=>N(),()=>{v(b,N().elapsed_time)}),p(()=>N(),()=>{v(r,N().items)}),p(()=>s(r),()=>{v(k,s(r).every(e=>e==null?void 0:e.is_correct_answer))}),p(()=>s(r),()=>{v(C,s(r).filter(e=>!(e!=null&&e.is_correct_answer)))}),p(()=>(s(r),s(C)),()=>{v(E,s(r).length-s(C).length)}),p(()=>(s(E),s(r)),()=>{v(as,Ls(s(E)/s(r).length*100,2))}),p(()=>s(r),()=>{v(os,s(r).slice(1).every(e=>e!=null&&e.time_spent?(e==null?void 0:e.time_spent)>0:!1))}),p(()=>s(r),()=>{v(G,s(r).filter(e=>e==null?void 0:e.time_spent).map(e=>e.time_spent))}),p(()=>s(G),()=>{v(rs,s(G).reduce((e,u)=>e+u,0)/s(G).length)}),p(()=>s(r),()=>{v($,s(r).reduce((e,u)=>(u.time_spent&&(u.time_spent<(e.min.time_spent||0)&&(e.min=u),u.time_spent>(e.max.time_spent||0)&&(e.max=u)),e),{min:s(r)[1],max:s(r)[1]}))}),p(()=>(s(k),s(b),s(H)),()=>{v(is,s(k)&&s(b)>0&&s(H)>0&&s(b)<=s(H))}),Es(),Ns();var U=de();Is(e=>{Js.title="Summary · glyph-glyph"});var V=a(U),ls=a(V),cs=o(a(ls),2),As=a(cs,!0);t(cs),t(ls),t(V);var W=o(V,2),Bs=o(a(W),2);{var Ps=e=>{var u=ve(),S=a(u),T=a(S),j=a(T),M=a(j);{var X=i=>{var n=se(),d=o(hs(n),2),w=a(d);m(()=>c(w,`${z(s(b))??""}s`)),t(d),f(i,n)},D=i=>{var n=ee(),d=a(n),w=a(d);m(()=>c(w,`${z(s(b))??""}s`)),t(d);var _=o(d,2),y=a(_);m(()=>c(y,`Best: ${z(s(H))??""}s`)),t(_),t(n),m(()=>Os(d,"incorrect-color",!s(k))),f(i,n)};q(M,i=>{s(is)?i(X):i(D,!1)})}t(j);var _s=o(j,2),ps=a(_s);{var zs=i=>{var n=te();f(i,n)};q(ps,i=>{s(k)&&i(zs)})}var ms=o(ps,2),Y=a(ms),Hs=a(Y);t(Y);var us=o(Y,2),Ts=a(us);t(us),t(ms),t(_s),t(T),t(S);var fs=o(S,2);{var js=i=>{var n=re(),d=o(a(n),2);Qs(d,5,()=>s(C),w=>w.glyph,(w,_)=>{var y=oe(),x=a(y),A=a(x),Z=a(A,!0);t(A);var F=o(A,2);{var J=B=>{var h=ae(),I=a(h);m(()=>c(I,`${(Xs(s(_).glyph)?"Silent":Ys(s(_).glyph).join(" / "))??""} `));var P=o(I),ss=a(P,!0);t(P),t(h),m(()=>c(ss,s(_).answered)),f(B,h)};q(F,B=>{var h;((h=s(R))==null?void 0:h.glyph)==s(_).glyph&&B(J)})}t(x),t(y),m(()=>c(Z,s(_).glyph)),$s("mouseenter",x,()=>{ks(s(_))}),$s("mouseleave",x,()=>{v(R,null)}),f(w,y)}),t(d),t(n),f(i,n)};q(fs,i=>{!s(k)&&s(os)&&i(js)})}var Ms=o(fs,2);{var Ds=i=>{var n=ie(),d=a(n),w=a(d),_=a(w),y=a(_,!0);t(_);var x=o(_,2),A=o(a(x),2),Z=a(A);m(()=>c(Z,`${z(s($).min.time_spent)??""}s`)),t(A),t(x),t(w);var F=o(w,2),J=a(F),B=o(a(J),2),h=a(B);m(()=>c(h,`${z(s(rs))??""}s`)),t(B),t(J),t(F);var I=o(F,2),P=a(I),ss=a(P,!0);t(P);var gs=o(P,2),ws=o(a(gs),2),Fs=a(ws);m(()=>c(Fs,`${z(s($).max.time_spent)??""}s`)),t(ws),t(gs),t(I),t(d),t(n),m(()=>{c(y,s($).min.glyph),c(ss,s($).max.glyph)}),f(i,n)};q(Ms,i=>{s($).min.time_spent&&s($).max.time_spent&&i(Ds)})}t(u),m(()=>{c(Hs,`${s(E)??""} / ${s(r).length??""}`),c(Ts,`${s(as)??""}%`)}),f(e,u)};q(Bs,e=>{s(vs)||e(Ps)})}t(W);var ds=o(W,2);Vs(ds,{instructions:Ss,get is_open(){return s(ns)},set is_open(e){v(ns,e)},$$legacy:!0});var qs=o(ds,2);Us(qs,{children:(e,u)=>{var S=ce(),T=hs(S);ys(T,{href:"setup",selected:!0,title:"Setup",$$events:{click:()=>{K.reset()}},children:(M,X)=>{var D=ne();f(M,D)},$$slots:{default:!0}});var j=o(T,2);ys(j,{href:"play",selected:!0,title:"Play again",$$events:{click:()=>{K.reset()}},children:(M,X)=>{var D=le();f(M,D)},$$slots:{default:!0}}),f(e,S)},$$slots:{default:!0}}),t(U),m(()=>c(As,O().id)),f(xs,U),Gs()}export{ye as component};
