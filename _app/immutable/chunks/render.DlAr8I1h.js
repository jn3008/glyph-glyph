import{ag as E,K as m,ah as P,E as R,a7 as M,q as W,ai as Y,G as j,aj as L,ak as B,al as C,am as $,an as T,a2 as w,a1 as O,d as G,a6 as p,ao as K,ap as z,aq as F,ar as J,as as Q,at as U,au as X,a4 as Z,p as x,h as S,a as ee,k as re}from"./utils.Dhw7Y63s.js";import{r as te,d as ae}from"./disclose-version.BnyP3OB8.js";const ne=["touchstart","touchmove"];function se(e){return ne.includes(e)}let A=!1;function ie(){A||(A=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const a of e.target.elements)(r=a.__on_r)==null||r.call(a)})},{capture:!0}))}function q(e){var r=P,a=R;E(null),m(null);try{return e()}finally{E(r),m(a)}}function ce(e,r,a,i=a){e.addEventListener(r,()=>q(a));const n=e.__on_r;n?e.__on_r=()=>{n(),i(!0)}:e.__on_r=()=>i(!0),ie()}const oe=new Set,D=new Set;function ue(e,r,a,i){function n(t){if(i.capture||y.call(r,t),!t.cancelBubble)return q(()=>a.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?W(()=>{r.addEventListener(e,n,i)}):r.addEventListener(e,n,i),n}function _e(e,r,a,i,n){var t={capture:i,passive:n},u=ue(e,r,a,t);(r===document.body||r===window||r===document)&&M(()=>{r.removeEventListener(e,u,t)})}function y(e){var k;var r=this,a=r.ownerDocument,i=e.type,n=((k=e.composedPath)==null?void 0:k.call(e))||[],t=n[0]||e.target,u=0,_=e.__root;if(_){var d=n.indexOf(_);if(d!==-1&&(r===document||r===window)){e.__root=r;return}var h=n.indexOf(r);if(h===-1)return;d<=h&&(u=d)}if(t=n[u]||e.target,t!==r){Y(e,"currentTarget",{configurable:!0,get(){return t||a}});var b=P,f=R;E(null),m(null);try{for(var s,o=[];t!==null;){var l=t.assignedSlot||t.parentNode||t.host||null;try{var c=t["__"+i];if(c!==void 0&&!t.disabled)if(j(c)){var[V,...H]=c;V.apply(t,[e,...H])}else c.call(t,e)}catch(g){s?o.push(g):s=g}if(e.cancelBubble||l===r||l===null)break;t=l}if(s){for(let g of o)queueMicrotask(()=>{throw g});throw s}}finally{e.__root=r,delete e.currentTarget,E(b),m(f)}}}function he(e,r){var a=r==null?"":typeof r=="object"?r+"":r;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function fe(e,r){return I(e,r)}function ve(e,r){L(),r.intro=r.intro??!1;const a=r.target,i=S,n=p;try{for(var t=B(a);t&&(t.nodeType!==8||t.data!==C);)t=$(t);if(!t)throw T;w(!0),O(t),G();const u=I(e,{...r,anchor:t});if(p===null||p.nodeType!==8||p.data!==K)throw z(),T;return w(!1),u}catch(u){if(u===T)return r.recover===!1&&F(),L(),J(a),w(!1),fe(e,r);throw u}finally{w(i),O(n),te()}}const v=new Map;function I(e,{target:r,anchor:a,props:i={},events:n,context:t,intro:u=!0}){L();var _=new Set,d=f=>{for(var s=0;s<f.length;s++){var o=f[s];if(!_.has(o)){_.add(o);var l=se(o);r.addEventListener(o,y,{passive:l});var c=v.get(o);c===void 0?(document.addEventListener(o,y,{passive:l}),v.set(o,1)):v.set(o,c+1)}}};d(Q(oe)),D.add(d);var h=void 0,b=U(()=>{var f=a??r.appendChild(X());return Z(()=>{if(t){x({});var s=re;s.c=t}n&&(i.$$events=n),S&&ae(f,null),h=e(f,i)||{},S&&(R.nodes_end=p),t&&ee()}),()=>{var l;for(var s of _){r.removeEventListener(s,y);var o=v.get(s);--o===0?(document.removeEventListener(s,y),v.delete(s)):v.set(s,o)}D.delete(d),f!==a&&((l=f.parentNode)==null||l.removeChild(f))}});return N.set(h,b),h}let N=new WeakMap;function pe(e,r){const a=N.get(e);return a?(N.delete(e),a(r)):Promise.resolve()}export{ie as a,_e as e,ve as h,ce as l,fe as m,he as s,pe as u};
