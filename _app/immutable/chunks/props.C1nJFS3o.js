import{S as N,x as G,y as K,z as P,A as j,B as g,C as D,U as l,D as b,E as L,F as z,v as H,G as V,H as Z,I as $,J,R as Q,K as F,l as W,P as X,M as k,N as p,u as M,O as U,Q as ee,T as re,V as ne,W as te,X as ae,Y as ie}from"./utils.BBSL6nIp.js";import{c as fe}from"./store.AdV-Kzmu.js";function E(a,v=null,y){if(typeof a!="object"||a===null||N in a)return a;const o=H(a);if(o!==G&&o!==K)return a;var f=new Map,c=V(a),m=P(0);c&&f.set("length",P(a.length));var I;return new Proxy(a,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&j();var t=f.get(e);return t===void 0?(t=P(r.value),f.set(e,t)):g(t,E(r.value,I)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,P(l));else{if(c&&typeof e=="string"){var t=f.get("length"),n=Number(e);Number.isInteger(n)&&n<t.v&&g(t,n)}g(r,l),Y(m)}return!0},get(i,e,r){var _;if(e===N)return a;var t=f.get(e),n=e in i;if(t===void 0&&(!n||(_=D(i,e))!=null&&_.writable)&&(t=P(E(n?i[e]:l,I)),f.set(e,t)),t!==void 0){var u=b(t);return u===l?void 0:u}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var t=f.get(e);t&&(r.value=b(t))}else if(r===void 0){var n=f.get(e),u=n==null?void 0:n.v;if(n!==void 0&&u!==l)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return r},has(i,e){var u;if(e===N)return!0;var r=f.get(e),t=r!==void 0&&r.v!==l||Reflect.has(i,e);if(r!==void 0||L!==null&&(!t||(u=D(i,e))!=null&&u.writable)){r===void 0&&(r=P(t?E(i[e],I):l),f.set(e,r));var n=b(r);if(n===l)return!1}return t},set(i,e,r,t){var R;var n=f.get(e),u=e in i;if(c&&e==="length")for(var _=r;_<n.v;_+=1){var w=f.get(_+"");w!==void 0?g(w,l):_ in i&&(w=P(l),f.set(_+"",w))}n===void 0?(!u||(R=D(i,e))!=null&&R.writable)&&(n=P(void 0),g(n,E(r,I)),f.set(e,n)):(u=n.v!==l,g(n,E(r,I)));var d=Reflect.getOwnPropertyDescriptor(i,e);if(d!=null&&d.set&&d.set.call(t,r),!u){if(c&&typeof e=="string"){var O=f.get("length"),S=Number(e);Number.isInteger(S)&&S>=O.v&&g(O,S+1)}Y(m)}return!0},ownKeys(i){b(m);var e=Reflect.ownKeys(i).filter(n=>{var u=f.get(n);return u===void 0||u.v!==l});for(var[r,t]of f)t.v!==l&&!(r in i)&&e.push(r);return e},setPrototypeOf(){z()}})}function Y(a,v=1){g(a,a.v+v)}function q(a){for(var v=L,y=L;v!==null&&!(v.f&(J|Q));)v=v.parent;try{return F(v),a()}finally{F(y)}}function ve(a,v,y,o){var C;var f=(y&te)!==0,c=!W||(y&X)!==0,m=(y&k)!==0,I=(y&ae)!==0,i=!1,e;m?[e,i]=fe(()=>a[v]):e=a[v];var r=N in a||p in a,t=((C=D(a,v))==null?void 0:C.set)??(r&&m&&v in a?s=>a[v]=s:void 0),n=o,u=!0,_=!1,w=()=>(_=!0,u&&(u=!1,I?n=M(o):n=o),n);e===void 0&&o!==void 0&&(t&&c&&Z(),e=w(),t&&t(e));var d;if(c)d=()=>{var s=a[v];return s===void 0?w():(u=!0,_=!1,s)};else{var O=q(()=>(f?U:ee)(()=>a[v]));O.f|=$,d=()=>{var s=b(O);return s!==void 0&&(n=void 0),s===void 0?n:s}}if(!(y&re))return d;if(t){var S=a.$$legacy;return function(s,h){return arguments.length>0?((!c||!h||S||i)&&t(h?d():s),s):d()}}var R=!1,B=!1,T=ie(e),A=q(()=>U(()=>{var s=d(),h=b(T);return R?(R=!1,B=!0,h):(B=!1,T.v=s)}));return f||(A.equals=ne),function(s,h){if(arguments.length>0){const x=h?b(A):c&&m?E(s):s;return A.equals(x)||(R=!0,g(T,x),_&&n!==void 0&&(n=x),M(()=>b(A))),s}return b(A)}}export{E as a,ve as p};
