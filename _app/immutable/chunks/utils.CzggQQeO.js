var Mn=Array.isArray,Hn=Array.from,Yn=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,nn=Object.getOwnPropertyDescriptors,jn=Object.prototype,Bn=Array.prototype,rn=Object.getPrototypeOf;const en=()=>{};function Un(t){return t()}function wt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,Tt=4,B=8,ut=16,A=32,W=64,nt=128,D=256,K=512,h=1024,k=2048,q=4096,N=8192,P=16384,sn=32768,mt=65536,Vn=1<<17,ln=1<<19,At=1<<20,ht=Symbol("$state"),Gn=Symbol("legacy props"),Kn=Symbol("");function gt(t){return t===this.v}function an(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function kt(t){return!an(t,this.v)}function un(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function on(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function fn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function _n(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function $n(){throw new Error("https://svelte.dev/e/hydration_failed")}function Zn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function zn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Jn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function vn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let X=!1;function Wn(){X=!0}const Xn=1,Qn=2,tr=4,nr=8,rr=16,er=1,sr=2,lr=4,ar=8,ur=16,or=1,ir=2,pn="[",hn="[!",dn="]",xt={},fr=Symbol();function ot(t,n){var r={f:0,v:t,reactions:null,equals:gt,version:0};return r}function _r(t){return It(ot(t))}function En(t,n=!1){var e;const r=ot(t);return n||(r.equals=kt),X&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function cr(t,n=!1){return It(En(t,n))}function It(t){return o!==null&&o.f&y&&(m===null?On([t]):m.push(t)),t}function Rt(t,n){return o!==null&&ct()&&o.f&(y|ut)&&(m===null||!m.includes(t))&&vn(),yn(t,n)}function yn(t,n){return t.equals(n)||(t.v=n,t.version=$t(),St(t,k),ct()&&u!==null&&u.f&h&&!(u.f&A)&&(v!==null&&v.includes(t)?(T(u,k),tt(u)):g===null?bn([t]):g.push(t))),n}function St(t,n){var r=t.reactions;if(r!==null)for(var e=ct(),s=r.length,l=0;l<s;l++){var a=r[l],f=a.f;f&k||!e&&a===u||(T(a,n),f&(h|D)&&(f&y?St(a,q):tt(a)))}}function Dt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let R=!1;function vr(t){R=t}let w;function M(t){if(t===null)throw Dt(),xt;return w=t}function pr(){return M(O(w))}function hr(t){if(R){if(O(w)!==null)throw Dt(),xt;w=t}}function dr(t=1){if(R){for(var n=t,r=w;n--;)r=O(r);w=r}}function Er(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===dn){if(t===0)return n;t-=1}else(r===pn||r===hn)&&(t+=1)}var e=O(n);n.remove(),n=e}}var dt,wn,Ot,bt;function yr(){if(dt===void 0){dt=window,wn=document;var t=Element.prototype,n=Node.prototype;Ot=pt(n,"firstChild").get,bt=pt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return Ot.call(t)}function O(t){return bt.call(t)}function wr(t,n){if(!R)return et(t);var r=et(w);if(r===null)r=w.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),M(e),e}return M(r),r}function Tr(t,n){if(!R){var r=et(t);return r instanceof Comment&&r.data===""?O(r):r}return w}function mr(t,n=1,r=!1){let e=R?w:t;for(var s;n--;)s=e,e=O(e);if(!R)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=rt();return e===null?s==null||s.after(a):e.before(a),M(a),a}return M(e),e}function Ar(t){t.textContent=""}function Tn(t){var n=y|k;u===null?n|=D:u.f|=At;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:i,deps:null,equals:gt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function gr(t){const n=Tn(t);return n.equals=kt,n}function Ct(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?it(e):S(e)}}}function mn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Nt(t){var n,r=u;J(mn(t));try{Ct(t),n=Zt(t)}finally{J(r)}return n}function qt(t){var n=Nt(t),r=(I||t.f&D)&&t.deps!==null?q:h;T(t,r),t.equals(n)||(t.v=n,t.version=$t())}function it(t){Ct(t),j(t,0),T(t,P),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Pt(t){u===null&&o===null&&fn(),o!==null&&o.f&D&&on(),_t&&un()}function An(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var s=(t&W)!==0,l=u,a={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var f=b;try{Et(!0),U(a),a.f|=sn}catch(_){throw S(a),_}finally{Et(f)}}else n!==null&&tt(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&At)===0;if(!p&&!s&&e&&(l!==null&&An(a,l),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(a)}return a}function kr(t){const n=F(B,null,!1);return T(n,h),n.teardown=t,n}function xr(t){Pt();var n=u!==null&&(u.f&A)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Ft(t);return e}}function Ir(t){return Pt(),ft(t)}function Rr(t){const n=F(W,t,!0);return(r={})=>new Promise(e=>{r.outro?xn(n,()=>{S(n),e(void 0)}):(S(n),e(void 0))})}function Ft(t){return F(Tt,t,!1)}function Sr(t,n){var r=i,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ft(()=>{t(),!e.ran&&(e.ran=!0,Rt(r.l.r2,!0),tn(n))})}function Dr(){var t=i;ft(()=>{if(Qt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&h&&T(r,q),L(r)&&U(r),n.ran=!1}t.l.r2.v=!1}})}function ft(t){return F(B,t,!0)}function Or(t){return gn(t)}function gn(t,n=0){return F(B|ut|n,t,!0)}function br(t,n=!0){return F(B|A,t,!0,n)}function Lt(t){var n=t.teardown;if(n!==null){const r=_t,e=o;yt(!0),z(null);try{n.call(null)}finally{yt(r),z(e)}}}function Mt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)it(n[r])}}function Ht(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;S(r,n),r=e}}function kn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&A||S(n),n=r}}function S(t,n=!0){var r=!1;if((n||t.f&ln)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:O(e);e.remove(),e=l}r=!0}Ht(t,n&&!r),Mt(t),j(t,0),T(t,P);var a=t.transitions;if(a!==null)for(const p of a)p.stop();Lt(t);var f=t.parent;f!==null&&f.first!==null&&Yt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Yt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function xn(t,n){var r=[];jt(t,r,!0),In(r,()=>{S(t),n&&n()})}function In(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function jt(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&mt)!==0||(e.f&A)!==0;jt(e,n,l?r:!1),e=s}}}function Cr(t){Bt(t,!0)}function Bt(t,n){if(t.f&N){L(t)&&U(t),t.f^=N;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&mt)!==0||(r.f&A)!==0;Bt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const Rn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let $=!1,Z=!1,st=[],lt=[];function Ut(){$=!1;const t=st.slice();st=[],wt(t)}function Vt(){Z=!1;const t=lt.slice();lt=[],wt(t)}function Nr(t){$||($=!0,queueMicrotask(Ut)),st.push(t)}function qr(t){Z||(Z=!0,Rn(Vt)),lt.push(t)}function Sn(){$&&Ut(),Z&&Vt()}const Gt=0,Dn=1;let V=!1,G=Gt,H=!1,Y=null,b=!1,_t=!1;function Et(t){b=t}function yt(t){_t=t}let x=[],C=0;let o=null;function z(t){o=t}let u=null;function J(t){u=t}let m=null;function On(t){m=t}let v=null,E=0,g=null;function bn(t){g=t}let Kt=1,I=!1,i=null;function $t(){return++Kt}function ct(){return!X||i!==null&&i.l===null}function L(t){var a,f;var n=t.f;if(n&k)return!0;if(n&q){var r=t.deps,e=(n&D)!==0;if(r!==null){var s;if(n&K){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=K}for(s=0;s<r.length;s++){var l=r[s];if(L(l)&&qt(l),e&&u!==null&&!I&&!((f=l==null?void 0:l.reactions)!=null&&f.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}(!e||u!==null&&!I)&&T(t,h)}return!1}function Cn(t,n){for(var r=n;r!==null;){if(r.f&nt)try{r.fn(t);return}catch{r.f^=nt}r=r.parent}throw V=!1,t}function Nn(t){return(t.f&P)===0&&(t.parent===null||(t.parent.f&nt)===0)}function Q(t,n,r,e){if(V){if(r===null&&(V=!1),Nn(n))throw t;return}r!==null&&(V=!0);{Cn(t,n);return}}function Zt(t){var vt;var n=v,r=E,e=g,s=o,l=I,a=m,f=i,p=t.f;v=null,E=0,g=null,o=p&(A|W)?null:t,I=!b&&(p&D)!==0,m=null,i=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(j(t,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else t.deps=_=v;if(!I)for(c=E;c<_.length;c++)((vt=_[c]).reactions??(vt.reactions=[])).push(t)}else _!==null&&E<_.length&&(j(t,E),_.length=E);return d}finally{v=n,E=r,g=e,o=s,I=l,m=a,i=f}}function qn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(T(n,q),n.f&(D|K)||(n.f^=K),j(n,0))}function j(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)qn(t,r[e])}function U(t){var n=t.f;if(!(n&P)){T(t,h);var r=u,e=i;u=t;try{n&ut?kn(t):Ht(t),Mt(t),Lt(t);var s=Zt(t);t.teardown=typeof s=="function"?s:null,t.version=Kt}catch(l){Q(l,t,r,e||t.ctx)}finally{u=r}}}function zt(){if(C>1e3){C=0;try{_n()}catch(t){if(Y!==null)Q(t,Y,null);else throw t}}C++}function Jt(t){var n=t.length;if(n!==0){zt();var r=b;b=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var l=[];Wt(s,l),Pn(l)}}finally{b=r}}}function Pn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(P|N)))try{L(e)&&(U(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Yt(e):e.fn=null))}catch(s){Q(s,e,null,e.ctx)}}}function Fn(){if(H=!1,C>1001)return;const t=x;x=[],Jt(t),H||(C=0,Y=null)}function tt(t){G===Gt&&(H||(H=!0,queueMicrotask(Fn))),Y=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(W|A)){if(!(r&h))return;n.f^=h}}x.push(n)}function Wt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&A)!==0,a=l&&(s&h)!==0,f=r.next;if(!a&&!(s&N))if(s&B){if(l)r.f^=h;else try{L(r)&&U(r)}catch(c){Q(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&Tt&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],n.push(p),Wt(p,n)}function Xt(t){var n=G,r=x;try{zt();const s=[];G=Dn,x=s,H=!1,Jt(r);var e=t==null?void 0:t();return Sn(),(x.length>0||s.length>0)&&Xt(),C=0,Y=null,e}finally{G=n,x=r}}async function Pr(){await Promise.resolve(),Xt()}function Qt(t){var _;var n=t.f,r=(n&y)!==0;if(r&&n&P){var e=Nt(t);return it(t),e}if(o!==null){m!==null&&m.includes(t)&&cn();var s=o.deps;v===null&&s!==null&&s[E]===t?E++:v===null?v=[t]:v.push(t),g!==null&&u!==null&&u.f&h&&!(u.f&A)&&g.includes(t)&&(T(u,k),tt(u))}else if(r&&t.deps===null)for(var l=t,a=l.parent,f=l;a!==null;)if(a.f&y){var p=a;f=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(l=t,L(l)&&qt(l)),t.v}function tn(t){const n=o;try{return o=null,t()}finally{o=n}}const Ln=~(k|q|h);function T(t,n){t.f=t.f&Ln|n}function Fr(t,n=1){var r=Qt(t);return Rt(t,n===1?++r:--r)}function Lr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},X&&!n&&(i.l={s:null,u:null,r1:[],r2:ot(!1)})}function Mr(t){const n=i;if(n!==null){t!==void 0&&(n.x=t);const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];J(l.effect),z(l.reaction),Ft(l.fn)}}finally{J(r),z(e)}}i=n.p,n.m=!0}return t||{}}function Hr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ht in t)at(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ht in r&&at(r)}}}function at(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{at(t[e],n)}catch{}const r=rn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=nn(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}function Yr(t,n,r){if(t==null)return n(void 0),r&&r(void 0),en;const e=tn(()=>t.subscribe(n,r));return e.unsubscribe?()=>e.unsubscribe():e}export{vr as $,Jn as A,rn as B,Mn as C,Zn as D,kt as E,A as F,J as G,er as H,sr as I,ar as J,Gn as K,Vn as L,Tn as M,gr as N,ur as O,lr as P,En as Q,W as R,ht as S,R as T,fr as U,pr as V,gn as W,mt as X,hn as Y,Er as Z,M as _,Mr as a,Cr as a0,br as a1,xn as a2,w as a3,kr as a4,Ir as a5,Un as a6,Hr as a7,Wn as a8,Sr as a9,N as aA,yn as aB,jt as aC,In as aD,Xn as aE,Qn as aF,tr as aG,nr as aH,rr as aI,qr as aJ,Kn as aK,nn as aL,ct as aM,dt as aN,Fr as aO,Dr as aa,z as ab,o as ac,Yn as ad,yr as ae,et as af,pn as ag,O as ah,xt as ai,dn as aj,Dt as ak,$n as al,Ar as am,Hn as an,Rr as ao,rt as ap,ln as aq,or as ar,ir as as,Xt as at,Pr as au,_r as av,S as aw,dr as ax,cr as ay,wn as az,ft as b,wr as c,Yr as d,Ft as e,Tr as f,wt as g,an as h,i,xr as j,Bn as k,X as l,ot as m,en as n,jn as o,Lr as p,Nr as q,hr as r,mr as s,Or as t,tn as u,zn as v,Rt as w,pt as x,Qt as y,u as z};
