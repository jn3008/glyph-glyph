import{h as c,o,v as l,L as n,w as v}from"./utils.BBSL6nIp.js";import{a as h}from"./render.DbwWhMdO.js";function p(s){if(c){var r=!1,a=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var _=s.value;t(s,"value",null),s.value=_}if(s.hasAttribute("checked")){var e=s.checked;t(s,"checked",null),s.checked=e}}};s.__on_r=a,o(a),h()}}function t(s,r,a,_){var e=s.__attributes??(s.__attributes={});c&&(e[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||e[r]!==(e[r]=a)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[n]=a),a==null?s.removeAttribute(r):typeof a!="string"&&u(s).includes(r)?s[r]=a:s.setAttribute(r,a))}var f=new Map;function u(s){var r=f.get(s.nodeName);if(r)return r;f.set(s.nodeName,r=[]);for(var a,_=s,e=Element.prototype;e!==_;){a=v(_);for(var i in a)a[i].set&&r.push(i);_=l(_)}return r}function A(s,r,a){var _=s.__className,e=d(r);c&&s.className===e?s.__className=e:(_!==e||c&&s.className!==e)&&(r==null&&!a?s.removeAttribute("class"):s.className=e,s.__className=e)}function d(s,r){return(s??"")+""}function L(s,r,a){if(a){if(s.classList.contains(r))return;s.classList.add(r)}else{if(!s.classList.contains(r))return;s.classList.remove(r)}}export{t as a,p as r,A as s,L as t};