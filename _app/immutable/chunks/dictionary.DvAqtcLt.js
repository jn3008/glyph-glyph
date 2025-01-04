import{ap as Xe,W as Ze,h as A,_ as q,d as Qe,E as ea,an as Oe,Y as aa,Z as ue,$,a3 as L,az as D,a0 as Ee,a1 as Ne,a2 as ta,B as fe,aA as de,aB as na,am as ia,aC as sa,aD as ra,af as oa,aj as la,ac as ca,q as ua,aE as Z,aF as Q,V as fa,w as he,aG as Se,aH as da,aI as ha,ah as pa,aJ as ma,D as ga,aK as ba,aL as ya}from"./utils.BlbffUCT.js";import{a as ka}from"./render.C1RE0XEP.js";import{d as _a}from"./index.C7ygDqEZ.js";import{s as va}from"./persistent-stores.5fR2uNy4.js";function Kt(e,a){return a}function Aa(e,a,t,n){for(var i=[],s=a.length,r=0;r<s;r++)na(a[r].e,i,!0);var o=s>0&&i.length===0&&t!==null;if(o){var l=t.parentNode;ia(l),l.append(t),n.clear(),E(e,a[0].prev,a[s-1].next)}sa(i,()=>{for(var c=0;c<s;c++){var f=a[c];o||(n.delete(f.k),E(e,f.prev,f.next)),ra(f.e,!o)}})}function Rt(e,a,t,n,i,s=null){var r=e,o={flags:a,items:new Map,first:null},l=(a&Se)!==0;if(l){var c=e;r=A?q(oa(c)):c.appendChild(Xe())}A&&Qe();var f=null,m=!1;Ze(()=>{var y=t(),u=ea(y)?y:y==null?[]:Oe(y),h=u.length;if(m&&h===0)return;m=h===0;let g=!1;if(A){var N=r.data===aa;N!==(h===0)&&(r=ue(),q(r),$(!1),g=!0)}if(A){for(var b=null,k,_=0;_<h;_++){if(L.nodeType===8&&L.data===la){r=L,g=!0,$(!1);break}var j=u[_],d=n(j,_);k=ze(L,o,b,null,j,d,_,i,a),o.items.set(d,k),b=k}h>0&&q(ue())}if(!A){var p=ca;ja(u,o,r,i,a,(p.f&D)!==0,n)}s!==null&&(h===0?f?Ee(f):f=Ne(()=>s(r)):f!==null&&ta(f,()=>{f=null})),g&&$(!0),t()}),A&&(r=L)}function ja(e,a,t,n,i,s,r,o){var se,re,oe,le;var l=(i&da)!==0,c=(i&(Z|Q))!==0,f=e.length,m=a.items,y=a.first,u=y,h,g=null,N,b=[],k=[],_,j,d,p;if(l)for(p=0;p<f;p+=1)_=e[p],j=r(_,p),d=m.get(j),d!==void 0&&((se=d.a)==null||se.measure(),(N??(N=new Set)).add(d));for(p=0;p<f;p+=1){if(_=e[p],j=r(_,p),d=m.get(j),d===void 0){var Ve=u?u.e.nodes_start:t;g=ze(Ve,a,g,g===null?a.first:g.next,_,j,p,n,i),m.set(j,g),b=[],k=[],u=g.next;continue}if(c&&wa(d,_,p,i),d.e.f&D&&(Ee(d.e),l&&((re=d.a)==null||re.unfix(),(N??(N=new Set)).delete(d))),d!==u){if(h!==void 0&&h.has(d)){if(b.length<k.length){var I=k[0],w;g=I.prev;var ie=b[0],J=b[b.length-1];for(w=0;w<b.length;w+=1)pe(b[w],I,t);for(w=0;w<k.length;w+=1)h.delete(k[w]);E(a,ie.prev,J.next),E(a,g,ie),E(a,J,I),u=I,g=J,p-=1,b=[],k=[]}else h.delete(d),pe(d,u,t),E(a,d.prev,d.next),E(a,d,g===null?a.first:g.next),E(a,g,d),g=d;continue}for(b=[],k=[];u!==null&&u.k!==j;)(s||!(u.e.f&D))&&(h??(h=new Set)).add(u),k.push(u),u=u.next;if(u===null)continue;d=u}b.push(d),g=d,u=d.next}if(u!==null||h!==void 0){for(var M=h===void 0?[]:Oe(h);u!==null;)(s||!(u.e.f&D))&&M.push(u),u=u.next;var G=M.length;if(G>0){var We=i&Se&&f===0?t:null;if(l){for(p=0;p<G;p+=1)(oe=M[p].a)==null||oe.measure();for(p=0;p<G;p+=1)(le=M[p].a)==null||le.fix()}Aa(a,M,We,m)}}l&&ua(()=>{var ce;if(N!==void 0)for(d of N)(ce=d.a)==null||ce.apply()}),fe.first=a.first&&a.first.e,fe.last=g&&g.e}function wa(e,a,t,n){n&Z&&de(e.v,a),n&Q?de(e.i,t):e.i=t}function ze(e,a,t,n,i,s,r,o,l,c){var f=(l&Z)!==0,m=(l&ha)===0,y=f?m?fa(i):he(i):i,u=l&Q?he(r):r,h={i:u,v:y,k:s,a:null,e:null,prev:t,next:n};try{return h.e=Ne(()=>o(e,y,u),A),h.e.prev=t&&t.e,h.e.next=n&&n.e,t===null?a.first=h:(t.next=h,t.e.next=h.e),n!==null&&(n.prev=h,n.e.prev=h.e),h}finally{}}function pe(e,a,t){for(var n=e.next?e.next.e.nodes_start:t,i=a?a.e.nodes_start:t,s=e.e.nodes_start;s!==n;){var r=pa(s);i.before(s),s=r}}function E(e,a,t){a===null?e.first=t:(a.next=t,a.e.next=t&&t.e),t!==null&&(t.prev=a,t.e.prev=a&&a.e)}function Dt(e){if(A){var a=!1,t=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var n=e.value;me(e,"value",null),e.value=n}if(e.hasAttribute("checked")){var i=e.checked;me(e,"checked",null),e.checked=i}}};e.__on_r=t,ma(t),ka()}}function me(e,a,t,n){var i=e.__attributes??(e.__attributes={});A&&(i[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||i[a]!==(i[a]=t)&&(a==="style"&&"__styles"in e&&(e.__styles={}),a==="loading"&&(e[ba]=t),t==null?e.removeAttribute(a):typeof t!="string"&&Oa(e).includes(a)?e[a]=t:e.setAttribute(a,t))}var ge=new Map;function Oa(e){var a=ge.get(e.nodeName);if(a)return a;ge.set(e.nodeName,a=[]);for(var t,n=e,i=Element.prototype;i!==n;){t=ya(n);for(var s in t)t[s].set&&a.push(s);n=ga(n)}return a}function Ut(e,a,t){var n=e.__className,i=Ea(a);A&&e.className===i?e.__className=i:(n!==i||A&&e.className!==i)&&(a==null&&!t?e.removeAttribute("class"):e.className=i,e.__className=i)}function Ea(e,a){return(e??"")+""}function Ht(e,a,t){if(t){if(e.classList.contains(a))return;e.classList.add(a)}else{if(!e.classList.contains(a))return;e.classList.remove(a)}}function x(e){return e===null?"null":e!==Object(e)?typeof e:{}.toString.call(e).slice(8,-1).toLowerCase()}function v(e){return x(e)!=="string"?!0:!e.length}function T(e="",a,t){if(v(e))return!1;const n=e.charCodeAt(0);return a<=n&&n<=t}const be={HIRAGANA:"toHiragana",KATAKANA:"toKatakana"},xe={HEPBURN:"hepburn"},Na={useObsoleteKana:!1,passRomaji:!1,convertLongVowelMark:!0,upcaseKatakana:!1,IMEMode:!1,romanization:xe.HEPBURN},Sa=65,za=90,ee=12353,xa=12438,ae=12449,Ta=12540,Ma=19968,La=40879,Ca=12293,Ia=12540,Ka=12539,Ra=[0,127],Da=[[256,257],[274,275],[298,299],[332,333],[362,363]],Ua=[[8216,8217],[8220,8221]],Ha=[Ra,...Da],Pa=[[32,47],[58,63],[91,96],[123,126],...Ua];var ye=Number.isNaN||function(a){return typeof a=="number"&&a!==a};function Ba(e,a){return!!(e===a||ye(e)&&ye(a))}function Ja(e,a){if(e.length!==a.length)return!1;for(var t=0;t<e.length;t++)if(!Ba(e[t],a[t]))return!1;return!0}function Te(e,a){a===void 0&&(a=Ja);var t=null;function n(){for(var i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];if(t&&t.lastThis===this&&a(i,t.lastArgs))return t.lastResult;var r=e.apply(this,i);return t={lastResult:r,lastArgs:i,lastThis:this},r}return n.clear=function(){t=null},n}var ke=Object.prototype.hasOwnProperty;function _e(e,a,t){for(t of e.keys())if(z(t,a))return t}function z(e,a){var t,n,i;if(e===a)return!0;if(e&&a&&(t=e.constructor)===a.constructor){if(t===Date)return e.getTime()===a.getTime();if(t===RegExp)return e.toString()===a.toString();if(t===Array){if((n=e.length)===a.length)for(;n--&&z(e[n],a[n]););return n===-1}if(t===Set){if(e.size!==a.size)return!1;for(n of e)if(i=n,i&&typeof i=="object"&&(i=_e(a,i),!i)||!a.has(i))return!1;return!0}if(t===Map){if(e.size!==a.size)return!1;for(n of e)if(i=n[0],i&&typeof i=="object"&&(i=_e(a,i),!i)||!z(n[1],a.get(i)))return!1;return!0}if(t===ArrayBuffer)e=new Uint8Array(e),a=new Uint8Array(a);else if(t===DataView){if((n=e.byteLength)===a.byteLength)for(;n--&&e.getInt8(n)===a.getInt8(n););return n===-1}if(ArrayBuffer.isView(e)){if((n=e.byteLength)===a.byteLength)for(;n--&&e[n]===a[n];);return n===-1}if(!t||typeof e=="object"){n=0;for(t in e)if(ke.call(e,t)&&++n&&!ke.call(a,t)||!(t in a)||!z(e[t],a[t]))return!1;return Object.keys(a).length===n}}return e!==e&&a!==a}const B=(e={})=>Object.assign({},Na,e);function Me(e,a,t){const n=a;function i(o,l){if(o[l]!==void 0)return Object.assign({"":o[""]+l},o[l])}function s(o,l){const c=o.charAt(0);return r(Object.assign({"":c},n[c]),o.slice(1),l,l+1)}function r(o,l,c,f){if(!l)return t||Object.keys(o).length===1?o[""]?[[c,f,o[""]]]:[]:[[c,f,null]];if(Object.keys(o).length===1)return[[c,f,o[""]]].concat(s(l,f));const m=i(o,l.charAt(0));return m===void 0?[[c,f,o[""]]].concat(s(l,f)):r(m,l.slice(1),c,f+1)}return s(e,0)}function te(e){return Object.entries(e).reduce((a,[t,n])=>{const i=x(n)==="string";return a[t]=i?{"":n}:te(n),a},{})}function Le(e,a){return a.split("").reduce((t,n)=>(t[n]===void 0&&(t[n]={}),t[n]),e)}function Ce(e={}){const a={};return x(e)==="object"&&Object.entries(e).forEach(([t,n])=>{let i=a;t.split("").forEach(s=>{i[s]===void 0&&(i[s]={}),i=i[s]}),i[""]=n}),function(n){const i=JSON.parse(JSON.stringify(n));function s(r,o){return r===void 0||x(r)==="string"?o:Object.entries(o).reduce((l,[c,f])=>(l[c]=s(r[c],f),l),r)}return s(i,a)}}function Ie(e,a){return a?x(a)==="function"?a(e):Ce(a)(e):e}const Ga={a:"あ",i:"い",u:"う",e:"え",o:"お",k:{a:"か",i:"き",u:"く",e:"け",o:"こ"},s:{a:"さ",i:"し",u:"す",e:"せ",o:"そ"},t:{a:"た",i:"ち",u:"つ",e:"て",o:"と"},n:{a:"な",i:"に",u:"ぬ",e:"ね",o:"の"},h:{a:"は",i:"ひ",u:"ふ",e:"へ",o:"ほ"},m:{a:"ま",i:"み",u:"む",e:"め",o:"も"},y:{a:"や",u:"ゆ",o:"よ"},r:{a:"ら",i:"り",u:"る",e:"れ",o:"ろ"},w:{a:"わ",i:"ゐ",e:"ゑ",o:"を"},g:{a:"が",i:"ぎ",u:"ぐ",e:"げ",o:"ご"},z:{a:"ざ",i:"じ",u:"ず",e:"ぜ",o:"ぞ"},d:{a:"だ",i:"ぢ",u:"づ",e:"で",o:"ど"},b:{a:"ば",i:"び",u:"ぶ",e:"べ",o:"ぼ"},p:{a:"ぱ",i:"ぴ",u:"ぷ",e:"ぺ",o:"ぽ"},v:{a:"ゔぁ",i:"ゔぃ",u:"ゔ",e:"ゔぇ",o:"ゔぉ"}},qa={".":"。",",":"、",":":"：","/":"・","!":"！","?":"？","~":"〜","-":"ー","‘":"「","’":"」","“":"『","”":"』","[":"［","]":"］","(":"（",")":"）","{":"｛","}":"｝"},ve={k:"き",s:"し",t:"ち",n:"に",h:"ひ",m:"み",r:"り",g:"ぎ",z:"じ",d:"ぢ",b:"び",p:"ぴ",v:"ゔ",q:"く",f:"ふ"},Ke={ya:"ゃ",yi:"ぃ",yu:"ゅ",ye:"ぇ",yo:"ょ"},Re={a:"ぁ",i:"ぃ",u:"ぅ",e:"ぇ",o:"ぉ"},Ae={sh:"sy",ch:"ty",cy:"ty",chy:"ty",shy:"sy",j:"zy",jy:"zy",shi:"si",chi:"ti",tsu:"tu",ji:"zi",fu:"hu"},$a=Object.assign({tu:"っ",wa:"ゎ",ka:"ヵ",ke:"ヶ"},Re,Ke),Fa={yi:"い",wu:"う",ye:"いぇ",wi:"うぃ",we:"うぇ",kwa:"くぁ",whu:"う",tha:"てゃ",thu:"てゅ",tho:"てょ",dha:"でゃ",dhu:"でゅ",dho:"でょ"},Ya={wh:"う",kw:"く",qw:"く",q:"く",gw:"ぐ",sw:"す",ts:"つ",th:"て",tw:"と",dh:"で",dw:"ど",fw:"ふ",f:"ふ"};function Va(){const e=te(Ga),a=i=>Le(e,i);Object.entries(ve).forEach(([i,s])=>{Object.entries(Ke).forEach(([r,o])=>{a(i+r)[""]=s+o})}),Object.entries(qa).forEach(([i,s])=>{a(i)[""]=s}),Object.entries(Ya).forEach(([i,s])=>{Object.entries(Re).forEach(([r,o])=>{const l=a(i+r);l[""]=s+o})}),["n","n'","xn"].forEach(i=>{a(i)[""]="ん"}),e.c=JSON.parse(JSON.stringify(e.k)),Object.entries(Ae).forEach(([i,s])=>{const r=i.slice(0,i.length-1),o=i.charAt(i.length-1),l=a(r);l[o]=JSON.parse(JSON.stringify(a(s)))});function t(i){return[...Object.entries(Ae),["c","k"]].reduce((s,[r,o])=>i.startsWith(o)?s.concat(i.replace(o,r)):s,[])}Object.entries($a).forEach(([i,s])=>{const r=m=>m.charAt(m.length-1),o=m=>m.slice(0,m.length-1),l=`x${i}`,c=a(l);c[""]=s;const f=a(`l${o(i)}`);f[r(i)]=c,t(i).forEach(m=>{["l","x"].forEach(y=>{const u=a(y+o(m));u[r(m)]=a(y+i)})})}),Object.entries(Fa).forEach(([i,s])=>{a(i)[""]=s});function n(i){return Object.entries(i).reduce((s,[r,o])=>(r?s[r]=n(o):s[r]=`っ${o}`,s),{})}return[...Object.keys(ve),"c","y","w","j"].forEach(i=>{const s=e[i];s[i]=n(s)}),delete e.n.n,Object.freeze(JSON.parse(JSON.stringify(e)))}let F=null;function Wa(){return F==null&&(F=Va()),F}const Xa=Ce({wi:"ゐ",we:"ゑ"});function Za(e){const a=JSON.parse(JSON.stringify(e));return a.n.n={"":"ん"},a.n[" "]={"":"ん"},a}function Qa(e=""){return v(e)?!1:T(e,Sa,za)}function C(e=""){return v(e)?!1:e.charCodeAt(0)===Ia}function De(e=""){return v(e)?!1:e.charCodeAt(0)===Ka}function Ue(e=""){return v(e)?!1:C(e)?!0:T(e,ee,xa)}function U(e=""){const a=[];return e.split("").forEach(t=>{if(C(t)||De(t))a.push(t);else if(Ue(t)){const n=t.charCodeAt(0)+(ae-ee),i=String.fromCharCode(n);a.push(i)}else a.push(t)}),a.join("")}const He=Te((e,a,t)=>{let n=Wa();return n=e?Za(n):n,n=a?Xa(n):n,t&&(n=Ie(n,t)),n},z);function W(e="",a={},t){let n;return t?n=a:(n=B(a),t=He(n.IMEMode,n.useObsoleteKana,n.customKanaMapping)),et(e,n,t).map(i=>{const[s,r,o]=i;if(o===null)return e.slice(s);const l=n.IMEMode===be.HIRAGANA,c=n.IMEMode===be.KATAKANA||[...e.slice(s,r)].every(Qa);return l||!c?o:U(o)}).join("")}function et(e="",a={},t){const{IMEMode:n,useObsoleteKana:i,customKanaMapping:s}=a;return t||(t=He(n,i,s)),Me(e.toLowerCase(),t,!n)}function at(e=""){return v(e)?!1:Ha.some(([a,t])=>T(e,a,t))}function ne(e="",a){const t=x(a)==="regexp";return v(e)?!1:[...e].every(n=>{const i=at(n);return t?i||a.test(n):i})}function X(e=""){return T(e,ae,Ta)}function tt(e=""){return v(e)?!1:[...e].every(Ue)}function Pe(e=""){return v(e)?!1:[...e].every(X)}function nt(e=""){return v(e)?!1:e.charCodeAt(0)===Ca}function it(e=""){return T(e,Ma,La)||nt(e)}function st(e=""){return v(e)?!1:[...e].every(it)}function Be(e="",a={passKanji:!0}){const t=[...e];let n=!1;return a.passKanji||(n=t.some(st)),(t.some(tt)||t.some(Pe))&&t.some(ne)&&!n}const rt=(e,a)=>C(e)&&a<1,ot=(e,a)=>C(e)&&a>0,lt=e=>["ヶ","ヵ"].includes(e),ct={a:"あ",i:"い",u:"う",e:"え",o:"う"};function H(e="",a,{isDestinationRomaji:t,convertLongVowelMark:n}={}){let i="";return e.split("").reduce((s,r,o)=>{if(De(r)||rt(r,o)||lt(r))return s.concat(r);if(n&&i&&ot(r,o)){const l=a(i).slice(-1);return X(e[o-1])&&l==="o"&&t?s.concat("お"):s.concat(ct[l])}if(!C(r)&&X(r)){const l=r.charCodeAt(0)+(ee-ae),c=String.fromCharCode(l);return i=c,s.concat(c)}return i="",s.concat(r)},[]).join("")}let Y=null;const ut={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",や:"ya",ゆ:"yu",よ:"yo",わ:"wa",ゐ:"wi",ゑ:"we",を:"wo",ん:"n",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ゔぁ:"va",ゔぃ:"vi",ゔ:"vu",ゔぇ:"ve",ゔぉ:"vo"},ft={"。":".","、":",","：":":","・":"/","！":"!","？":"?","〜":"~",ー:"-","「":"‘","」":"’","『":"“","』":"”","［":"[","］":"]","（":"(","）":")","｛":"{","｝":"}","　":" "},dt=["あ","い","う","え","お","や","ゆ","よ"],V={ゃ:"ya",ゅ:"yu",ょ:"yo"},ht={ぃ:"yi",ぇ:"ye"},pt={ぁ:"a",ぃ:"i",ぅ:"u",ぇ:"e",ぉ:"o"},mt=["き","に","ひ","み","り","ぎ","び","ぴ","ゔ","く","ふ"],gt={し:"sh",ち:"ch",じ:"j",ぢ:"j"},bt={っ:"",ゃ:"ya",ゅ:"yu",ょ:"yo",ぁ:"a",ぃ:"i",ぅ:"u",ぇ:"e",ぉ:"o"},je={b:"b",c:"t",d:"d",f:"f",g:"g",h:"h",j:"j",k:"k",m:"m",p:"p",q:"q",r:"r",s:"s",t:"t",v:"v",w:"w",x:"x",z:"z"};function yt(){return Y==null&&(Y=_t()),Y}function kt(e){switch(e){case xe.HEPBURN:return yt();default:return{}}}function _t(){const e=te(ut),a=n=>Le(e,n),t=(n,i)=>{a(n)[""]=i};return Object.entries(ft).forEach(([n,i])=>{a(n)[""]=i}),[...Object.entries(V),...Object.entries(pt)].forEach(([n,i])=>{t(n,i)}),mt.forEach(n=>{const i=a(n)[""][0];Object.entries(V).forEach(([s,r])=>{t(n+s,i+r)}),Object.entries(ht).forEach(([s,r])=>{t(n+s,i+r)})}),Object.entries(gt).forEach(([n,i])=>{Object.entries(V).forEach(([s,r])=>{t(n+s,i+r[1])}),t(`${n}ぃ`,`${i}yi`),t(`${n}ぇ`,`${i}e`)}),e.っ=Je(e),Object.entries(bt).forEach(([n,i])=>{t(n,i)}),dt.forEach(n=>{t(`ん${n}`,`n'${a(n)[""]}`)}),Object.freeze(JSON.parse(JSON.stringify(e)))}function Je(e){return Object.entries(e).reduce((a,[t,n])=>{if(t)a[t]=Je(n);else{const i=n.charAt(0);a[t]=Object.keys(je).includes(i)?je[i]+n:n}return a},{})}const Ge=Te((e,a)=>{let t=kt(e);return a&&(t=Ie(t,a)),t},z);function P(e="",a={},t){const n=B(a);return t||(t=Ge(n.romanization,n.customRomajiMapping)),vt(e,n,t).map(i=>{const[s,r,o]=i;return n.upcaseKatakana&&Pe(e.slice(s,r))?o.toUpperCase():o}).join("")}function vt(e,a,t){t||(t=Ge(a.romanization,a.customRomajiMapping));const n=Object.assign({},{isDestinationRomaji:!0},a);return Me(H(e,P,n),t,!a.IMEMode)}function qe(e=""){return v(e)?!1:Pa.some(([a,t])=>T(e,a,t))}function Pt(e="",a={}){const t=B(a);if(t.passRomaji)return H(e,P,t);if(Be(e,{passKanji:!0})){const n=H(e,P,t);return W(n.toLowerCase(),t)}return ne(e)||qe(e)?W(e.toLowerCase(),t):H(e,P,t)}function At(e="",a={}){const t=B(a);if(t.passRomaji)return U(e);if(Be(e)||ne(e)||qe(e)){const n=W(e.toLowerCase(),t);return U(n)}return U(e)}const S=[{key:"isolated",label:"Isolated"},{key:"initial",label:"Initial"},{key:"medial",label:"Medial"},{key:"final",label:"Final"},{key:"all",label:"All"}],jt=[{key:"kana",label:"Kana",modes_label:"Kana Type",modes:[{key:"katakana",label:"Katakana",modes_label:"Characters to include",modes:[{key:"monographs",label:"Monographs"},{key:"diacritics",label:"+ Diacritics"},{key:"digraphs",label:"+ Digraphs"},{key:"all",label:"All"}]},{key:"hiragana",label:"Hiragana",modes_label:"Characters to include",modes:[{key:"monographs",label:"Monographs"},{key:"diacritics",label:"+ Diacritics"},{key:"digraphs",label:"+ Digraphs"},{key:"all",label:"All"}]}]},{key:"greek",label:"Greek",modes_label:"Mode",modes:[{key:"transcriptions",label:"Transcriptions",modes_label:"Characters to include",modes:[{key:"monographs",label:"Monographs",modes_label:"Case",modes:[{key:"upper",label:"Upper"},{key:"lower",label:"Lower"}]},{key:"digraphs",label:"+ Digraphs",modes_label:"Case",modes:[{key:"upper",label:"Upper"},{key:"lower",label:"Lower"}]}]},{key:"names",label:"Names",modes_label:"Case",modes:[{key:"upper",label:"Upper"},{key:"lower",label:"Lower"}]}]},{key:"cyrillic",label:"Cyrillic",modes_label:"Language",modes:[{key:"bulgarian",label:"Bulgarian",modes_label:"Case",modes:[{key:"upper",label:"Upper"},{key:"lower",label:"Lower"}]},{key:"russian",label:"Russian",modes_label:"Case",modes:[{key:"upper",label:"Upper"},{key:"lower",label:"Lower"}]},{key:"serbian",label:"Serbian",modes_label:"Case",modes:[{key:"upper",label:"Upper"},{key:"lower",label:"Lower"}]}]},{key:"persoarabic",label:"Perso-Arabic",modes_label:"Alphabet",modes:[{key:"arabic",label:"Arabic",modes_label:"Pronunciation",modes:[{key:"standard",label:"Standard",modes_label:"Form",modes:S},{key:"levantine",label:"Levantine",modes_label:"Form",modes:S},{key:"gulf",label:"Gulf",modes_label:"Form",modes:S},{key:"egyptian",label:"Egyptian",modes_label:"Form",modes:S}]},{key:"persian",label:"Farsi",modes_label:"Form",modes:S},{key:"urdu",label:"Urdu",modes_label:"Form",modes:S}]}];function $e(e,a=""){return e.map(t=>{const n=a?`${a}-${t.key}`:t.key,i={...t,full_key:n};return t.modes&&(i.modes=$e(t.modes,n)),i})}const wt=$e(jt);function Ot(e,a=[]){const t=[],n={};function i(s,r){s.forEach(o=>{const l=[...r,o];o.modes?i(o.modes,l):(t.push(o.full_key),n[o.full_key]=l.map(c=>c.key))})}return i(e,a),{keys:t,paths:n}}const{keys:Et,paths:Nt}=Ot(wt);console.log(Nt);function Fe(e){return e.split("-")}const Ye=va("game-config",{id:"",path:Fe(""),is_valid:!1});function Bt(e,a){Ye.update(t=>{const n=[...t.id.split("-").slice(0,a),e].join("-");return{id:n,path:Fe(n),is_valid:Et.includes(n)}})}const K={monographs:["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","ま","み","む","め","も","は","ひ","ふ","へ","ほ","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","ん"],diacritics:["が","ぎ","ぐ","げ","ご","ざ","じ","ず","ぜ","ぞ","だ","ぢ","づ","で","ど","ば","び","ぶ","べ","ぼ","ぱ","ぴ","ぷ","ぺ","ぽ"],digraphs:["きゃ","きゅ","きょ","しゃ","しゅ","しょ","ちゃ","ちゅ","ちょ","にゃ","にゅ","にょ","ひゃ","ひゅ","ひょ","みゃ","みゅ","みょ","りゃ","りゅ","りょ"],digraphs_diacritics:["ぎゃ","ぎゅ","ぎょ","じゃ","じゅ","じょ","びゃ","びゅ","びょ","ぴゃ","ぴゅ","ぴょ"],sounds:{あ:["a"],い:["i"],う:["ɯ"],え:["e"],お:["o"],か:["ka"],き:["ki"],く:["kɯ"],け:["ke"],こ:["ko"],さ:["sa"],し:["ɕi"],す:["sɯ"],せ:["se"],そ:["so"],た:["ta"],ち:["tɕi"],つ:["tsɯ"],て:["te"],と:["to"],な:["na"],に:["ɲi"],ぬ:["nɯ"],ね:["ne"],の:["no"],ま:["ma"],み:["mi"],む:["mɯ"],め:["me"],も:["mo"],は:["ha"],ひ:["çi"],ふ:["ɸɯ"],へ:["he"],ほ:["ho"],や:["ja"],ゆ:["jɯ"],よ:["jo"],ら:["ɾa"],り:["ɾi"],る:["ɾɯ"],れ:["ɾe"],ろ:["ɾo"],わ:["wa"],を:["o"],ん:["n"],が:["ɡa"],ぎ:["ɡi"],ぐ:["ɡɯ"],げ:["ɡe"],ご:["ɡo"],ざ:["(d)za"],じ:["(d)ʑi"],ず:["(d)zɯ"],ぜ:["(d)ze"],ぞ:["(d)zo"],だ:["da"],ぢ:["(d)ʑi"],づ:["(d)zɯ"],で:["de"],ど:["do"],ば:["ba"],び:["bi"],ぶ:["bɯ"],べ:["be"],ぼ:["bo"],ぱ:["pa"],ぴ:["pi"],ぷ:["pɯ"],ぺ:["pe"],ぽ:["po"],きゃ:["kʲa"],きゅ:["kʲɯ"],きょ:["kʲo"],しゃ:["ɕa"],しゅ:["ɕɯ"],しょ:["ɕo"],ちゃ:["tɕa"],ちゅ:["tɕɯ"],ちょ:["tɕo"],にゃ:["ɲa"],にゅ:["ɲɯ"],にょ:["ɲo"],ひゃ:["ça"],ひゅ:["çɯ"],ひょ:["ço"],みゃ:["mʲa"],みゅ:["mʲɯ"],みょ:["mʲo"],りゃ:["ɾʲa"],りゅ:["ɾʲɯ"],りょ:["ɾʲo"],ぎゃ:["ɡʲa"],ぎゅ:["ɡʲɯ"],ぎょ:["ɡʲo"],じゃ:["(d)ʑa"],じゅ:["(d)ʑɯ"],じょ:["(d)ʑo"],びゃ:["bʲa"],びゅ:["bʲɯ"],びょ:["bʲo"],ぴゃ:["pʲa"],ぴゅ:["pʲɯ"],ぴょ:["pʲo"]}},Jt=new Map([["し",["shi","si"]],["ち",["chi","ti"]],["つ",["tsu","tu"]],["ふ",["fu","hu"]],["じ",["ji","zi"]],["ぢ",["di","ji"]],["づ",["du","zu"]],["じゃ",["ja","jya"]],["じゅ",["ju","jyu"]],["じょ",["jo","jyo"]]]),O={lower_monographs:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ","ς","τ","υ","φ","χ","ψ","ω"],upper_monographs:["Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ","Ο","Π","Ρ","Σ","Τ","Υ","Φ","Χ","Ψ","Ω"],digraphs:["ου","αυ","ευ","ηυ","μπ","ντ","γκ","γγ","τζ","γχ","γξ","αι","υι","οι","ει"],names:{α:["alpha"],β:["beta"],γ:["gamma"],δ:["delta"],ε:["epsilon"],ζ:["zeta"],η:["eta"],θ:["theta"],ι:["iota"],κ:["kappa"],λ:["lambda","lamda"],μ:["mu"],ν:["nu"],ξ:["xi"],ο:["omicron","omikron"],π:["pi"],ρ:["rho"],σ:["sigma"],ς:["sigma"],τ:["tau"],υ:["upsilon"],φ:["phi"],χ:["chi"],ψ:["psi"],ω:["omega"]},transcriptions:{α:["a"],β:["v"],γ:["g"],δ:["d"],ε:["e"],ζ:["z"],η:["i"],θ:["th"],ι:["i"],κ:["k"],λ:["l"],μ:["m"],ν:["n"],ξ:["x","ks"],ο:["o"],π:["p"],ρ:["r","rh"],σ:["s"],ς:["s"],τ:["t"],υ:["y","u"],φ:["ph","f"],χ:["kh"],ψ:["ps"],ω:["o"],ου:["u"],αυ:["af","av"],ευ:["ef","ev"],ηυ:["if","iv"],μπ:["b","mb"],ντ:["d","nd"],γκ:["g","ng"],γγ:["g","ng","ngh"],τζ:["dz","tz"],ωυ:["oi"],γχ:["ngkh","nkh"],γξ:["nx","ngks"],αι:["e"],υι:["i"],οι:["i"],ει:["i"]},pronunciations:{α:["f","a","ther"],β:["","v","ote"],γ:["la","g","o (Spanish)"],δ:["","th","en"],ε:["overl","a","y"],ζ:["","z","oo"],η:["mach","i","ne (short)"],θ:["","th","in"],ι:["mach","i","ne (short)"],κ:["ma","k","e"],λ:["","l","antern"],μ:["","m","usic"],ν:["","n","et"],ξ:["fo","x",""],ο:["g","o","t"],π:["s","p","ot"],ρ:["ca","rr","o (Spanish)"],σ:["","s","oft"],ς:["","s","oft"],τ:["s","t","oke"],υ:["mach","i","ne (short)"],φ:["","f","ive"],χ:["lo","ch"," (Scottish)"],ψ:["la","ps","e"],ω:["l","aw",""],μπ:["","b","ee (beginning of words); otherwise","co","mb","at"],ντ:["","d","og (beginning of words); otherwise","la","nd",""],γκ:["","g","arage (beginning of words); otherwise","fi","ng","er"],γγ:["fu","ng","us"],τζ:["ro","ds",""],ωυ:["oi"],γχ:["ki","ng","(=γ, followed χ=kh)"],γξ:["ly","nx",""],αι:["p","e","t"],υι:["m","ee","t (short)"],οι:["m","ee","t (short)"],ει:["m","ee","t (short)"],ου:["b","oo","t"],αυ:["h","av","e (before voiced consonants); otherwise","","af","ter (before unvoiced consonants)"],ευ:["","ev","ery before voiced consonants or any vowel; otherwise","","ef","fort (before unvoiced consonants)"],ηυ:["","ev","ening (before voiced consonants or any vowel); otherwise","b","eef"," (before unvoiced consonants)"]},sounds:{α:["a"],β:["v"],γ:["ɣ"],δ:["ð"],ε:["e"],ζ:["z"],η:["i"],θ:["θ"],ι:["i","ç","ʝ","ɲ"],κ:["k","c"],λ:["l"],μ:["m"],ν:["n"],ξ:["ks"],ο:["o"],π:["p"],ρ:["r","ɾ"],σ:["s","z"],ς:["s"],τ:["t"],υ:["i"],φ:["f"],χ:["x","ç"],ψ:["ps"],ω:["o"],ου:["u"],αυ:["af","av"],ευ:["ef","ev"],ηυ:["if","iv"],μπ:["b","mb"],ντ:["d","nd"],γκ:["g","ŋg"],γγ:["g,","ŋg","ŋɣ"],τζ:["dz"],γχ:["nç","nx"],γξ:["ŋks"],αι:["e"],υι:["i"],οι:["i"],ει:["i"]}},St={alphabets:{bulgarian:["а","б","в","г","д","е","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ь","ю","я"],russian:["а","б","в","г","д","е","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"],serbian:["а","б","в","г","д","ђ","е","ж","з","и","ј","к","л","љ","м","н","њ","о","п","р","с","т","ћ","у","ф","х","ц","ч","џ","ш"]},transcriptions:{bulgarian:{а:["a"],б:["b"],в:["v"],г:["g"],д:["d"],е:["e"],ж:["zh"],з:["z"],и:["i"],й:["y","i"],к:["k"],л:["l"],м:["m"],н:["n"],о:["o"],п:["p"],р:["r"],с:["s"],т:["t"],у:["u"],ф:["f"],х:["kh"],ц:["ts","c"],ч:["ch"],ш:["sh"],щ:["sht"],ъ:["a","uh"],ь:["y","i"],ю:["yu","ju"],я:["ya","ja"]},russian:{а:["a"],б:["b"],в:["v"],г:["g"],д:["d"],е:["ye","e"],ё:["yo"],ж:["zh"],з:["z"],и:["i"],й:["y","i"],к:["k"],л:["l"],м:["m"],н:["n"],о:["o"],п:["p"],р:["r"],с:["s"],т:["t"],у:["u"],ф:["f"],х:["kh","h"],ц:["ts","c"],ч:["ch"],ш:["sh"],щ:["shch","sch"],ъ:["-",""],ы:["y"],ь:["-",""],э:["e"],ю:["yu","ju"],я:["ya","ja"]},serbian:{а:["a"],б:["b"],в:["v"],г:["g"],д:["d"],ђ:["dj"],е:["e"],ж:["zh"],з:["z"],и:["i"],ј:["y","i"],к:["k"],л:["l"],љ:["lj","ly"],м:["m"],н:["n"],њ:["nj","ny"],о:["o"],п:["p"],р:["r"],с:["s"],т:["t"],ћ:["tsh"],у:["u"],ф:["f"],х:["kh"],ц:["ts","c"],ч:["ch"],џ:["dzh"],ш:["sh"]}},pronunciations:{bulgarian:{а:["f","a","ther"],б:["","b","ug"],в:["","v","et"],г:["","g","ood"],д:["","d","og"],е:["b","e","st"],ж:["trea","s","ure"],з:["","z","oo"],и:["mach","i","ne"],й:["","y","es"],к:["","k","ick"],л:["ca","ll",""],м:["","m","an"],н:["","n","ormal"],о:["","o","rder"],п:["","p","et"],р:["pe","rr","o (rolled)"],с:["","s","ound"],т:["s","t","ick"],у:["b","oo","t"],ф:["","f","ood"],х:["lo","ch"," (Scottish)"],ц:["fi","ts",""],ч:["","ch","ip"],ш:["","sh","ot"],щ:["","sht","ick"],ъ:["t","u","rn"],ь:["can","y","on"],ю:["","you","th"],я:["","ya","k"]},russian:{а:["f","a","ther"],б:["","b","ed"],в:["","v","ine"],г:["","g","o"],д:["","d","o"],е:["","ye","s"],ё:["","yo","ur"],ж:["mea","s","ure"],з:["","z","ap"],и:["pol","i","ce"],й:["to","y",""],к:["","k","ept"],л:["fee","l",""],м:["","m","ap"],н:["","n","ot"],о:["m","o","re"],п:["","p","anic"],р:["pe","rr","o (rolled)"],с:["","s","et"],т:["","t","op"],у:["t","oo","l"],ф:["","f","ace"],х:["lo","ch"," (Scottish)"],ц:["si","ts",""],ч:["","ch","eck"],ш:["hu","sh",""],щ:["","sh","ips"],ъ:["silent, prevents palatalization of the preceding consonant","",""],ы:["ros","e","s"],ь:["silent, palatalizes the preceding consonant","",""],э:["m","e","t"],ю:["","u","se"],я:["","ya","rd"]},serbian:{а:["f","a","ther"],б:["","b","oy"],в:["","v","ictory"],г:["","g","o"],д:["","d","og"],ђ:["","dj","uke"],е:["p","e","t"],ж:["mea","s","ure"],з:["","z","oo"],и:["mach","i","ne"],ј:["","y","es"],к:["","k","ite"],л:["","l","amp"],љ:["mil","li","on"],м:["","m","oon"],н:["","n","o"],њ:["on","ni","on"],о:["f","o","r"],п:["","p","ot"],р:["pe","rr","o (rolled)"],с:["","s","un"],т:["","t","op"],ћ:["","t","une"],у:["r","u","ler"],ф:["","f","un"],х:["Ba","ch",", Johann Sebastian"],ц:["","ts","ar"],ч:["","ch","ess"],џ:["","j","ungle"],ш:["","sh","oe"]}},sounds:{bulgarian:{а:["a","ɐ","ə"],б:["b"],в:["v","f"],г:["ɡ"],д:["d"],е:["ɛ"],ж:["ʒ","ʃ"],з:["z","s"],и:["i"],й:["j"],к:["k","g"],л:["l","ʎ","ɫ"],м:["m"],н:["n"],о:["ɔ","o"],п:["p"],р:["r"],с:["s"],т:["t"],у:["u","ʊ"],ф:["f"],х:["x"],ц:["ts"],ч:["tʃ"],ш:["ʃ"],щ:["ʃt"],ъ:["ɤ","ɐ"],ь:["ʲ"],ю:["ju"],я:["ja"]},russian:{а:["a"],б:["b","bʲ"],в:["v","vʲ"],г:["ɡ","gʲ"],д:["d","dʲ"],е:["je","e"],ё:["jo","ʲɵ"],ж:["ʐ"],з:["z","zʲ"],и:["i","ɨ"],й:["j"],к:["k","kʲ"],л:["ɫ","lʲ"],м:["m","mʲ"],н:["n","nʲ"],о:["o"],п:["p","pʲ"],р:["r","rʲ"],с:["s","sʲ"],т:["t","tʲ"],у:["u"],ф:["f","fʲ"],х:["x","xʲ"],ц:["ts"],ч:["tɕ"],ш:["ʂ"],щ:["ɕː","ɕ"],ъ:["∅"],ы:["ɨ"],ь:["ʲ"],э:["ɛ","e"],ю:["ju"],я:["ja"]},serbian:{а:["ä"],б:["b"],в:["v"],г:["ɡ"],д:["d"],ђ:["dʑ"],е:["e̞"],ж:["ʐ"],з:["z"],и:["i"],ј:["j"],к:["k"],л:["l"],љ:["ʎ"],м:["m"],н:["n"],њ:["ɲ"],о:["ɔ̝"],п:["p"],р:["ɾ"],с:["s"],т:["t"],ћ:["tɕ"],у:["u"],ф:["f"],х:["x"],ц:["ts"],ч:["tʂ"],џ:["dʐ"],ш:["ʂ"]}}},zt={alphabets:{arabic:["ا","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي"],persian:["ا","ب","پ","ت","ث","ج","چ","ح","خ","د","ذ","ر","ز","ژ","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ک","گ","ل","م","ن","و","ه","ی"],urdu:["ا","ب","پ","ت","ٹ","ث","ج","چ","ح","خ","د","ڈ","ذ","ر","ڑ","ز","ژ","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ک","گ","ل","م","ن","ں","و","ہ","ھ","ی","ے","ء"]},transcriptions:{arabic:{standard:{ا:["a","aa"],ب:["b"],ت:["t"],ث:["th"],ج:["j"],ح:["h"],خ:["kh"],د:["d"],ذ:["dh"],ر:["r"],ز:["z"],س:["s"],ش:["sh"],ص:["s"],ض:["d"],ط:["t"],ظ:["z","dh"],ع:["'","aa"],غ:["gh"],ف:["f"],ق:["q"],ك:["k"],ل:["l"],م:["m"],ن:["n"],ه:["h"],و:["w","u"],ي:["y","i"]},egyptian:{ا:["a","aa"],ب:["b"],ت:["t"],ث:["th"],ج:["g"],ح:["h"],خ:["kh"],د:["d"],ذ:["dh"],ر:["r"],ز:["z"],س:["s"],ش:["sh"],ص:["s"],ض:["d"],ط:["t"],ظ:["z","dh"],ع:["'","aa"],غ:["gh"],ف:["f"],ق:["ʔ"],ك:["k","ch"],ل:["l"],م:["m"],ن:["n"],ه:["h"],و:["w","u"],ي:["y","i"]},levantine:{ا:["a","aa"],ب:["b"],ت:["t"],ث:["th"],ج:["zh"],ح:["h"],خ:["kh"],د:["d"],ذ:["dh"],ر:["r"],ز:["z"],س:["s"],ش:["sh"],ص:["s"],ض:["d"],ط:["t"],ظ:["z","dh"],ع:["'","aa"],غ:["gh"],ف:["f"],ق:["-"],ك:["k"],ل:["l"],م:["m"],ن:["n"],ه:["h"],و:["w","u"],ي:["y","i"]},gulf:{ا:["a","aa"],ب:["b"],ت:["t"],ث:["th"],ج:["y","j"],ح:["h"],خ:["kh"],د:["d"],ذ:["dh"],ر:["r"],ز:["z"],س:["s"],ش:["sh"],ص:["s"],ض:["dh"],ط:["t"],ظ:["z","dh"],ع:["'","aa"],غ:["gh","q"],ف:["f"],ق:["g","j"],ك:["k","ch"],ل:["l"],م:["m"],ن:["n"],ه:["h"],و:["w","u"],ي:["y","i"]}},persian:{ا:["a","aa"],ب:["b"],پ:["p"],ت:["t"],ث:["th"],ج:["j"],چ:["ch"],ح:["h"],خ:["kh"],د:["d"],ذ:["dh"],ر:["r"],ز:["z"],ژ:["zh"],س:["s"],ش:["sh"],ص:["s"],ض:["d"],ط:["t"],ظ:["z","dh"],ع:["'","aa"],غ:["gh"],ف:["f"],ق:["q"],ک:["k"],گ:["g"],ل:["l"],م:["m"],ن:["n"],و:["v","u","o"],ه:["h"],ی:["y","i","ee"]},urdu:{ا:["a","aa"],ب:["b"],پ:["p"],ت:["t"],ٹ:["ṭ"],ث:["th"],ج:["j"],چ:["ch"],ح:["h"],خ:["kh"],د:["d"],ڈ:["dd"],ذ:["dh"],ر:["r"],ڑ:["ṛ"],ز:["z"],ژ:["zh"],س:["s"],ش:["sh"],ص:["s"],ض:["d"],ط:["t"],ظ:["z","dh"],ع:["'","aa"],غ:["gh"],ف:["f"],ق:["q"],ک:["k"],گ:["g"],ل:["l"],م:["m"],ن:["n"],ں:["n"],و:["w","u","o"],ہ:["h"],ھ:["h"],ی:["y","i"],ے:["e"],ء:["-"]}},sounds:{arabic:{standard:{ا:["ʔ","aː"],ب:["b"],ت:["t"],ث:["θ"],ج:["dʒ"],ح:["ħ"],خ:["x"],د:["d"],ذ:["ð"],ر:["r"],ز:["z"],س:["s"],ش:["ʃ"],ص:["sˤ"],ض:["dˤ"],ط:["tˤ"],ظ:["ðˤ"],ع:["ʕ"],غ:["ɣ"],ف:["f"],ق:["q"],ك:["k"],ل:["l"],م:["m"],ن:["n"],ه:["h"],و:["w","uː"],ي:["j","iː"]},egyptian:{ا:["aː"],ب:["b"],ت:["t"],ث:["s"],ج:["ɡ"],ح:["ħ"],خ:["x"],د:["d"],ذ:["z"],ر:["r"],ز:["z"],س:["s"],ش:["ʃ"],ص:["sˤ"],ض:["dˤ"],ط:["tˤ"],ظ:["z"],ع:["ʕ"],غ:["ɣ"],ف:["f"],ق:["ʔ"],ك:["k"],ل:["l"],م:["m"],ن:["n"],ه:["h"],و:["w","u"],ي:["j","i"]},levantine:{ا:["aː"],ب:["b"],ت:["t"],ث:["t"],ج:["ʒ"],ح:["ħ"],خ:["x"],د:["d"],ذ:["d"],ر:["r"],ز:["z"],س:["s"],ش:["ʃ"],ص:["sˤ"],ض:["dˤ"],ط:["tˤ"],ظ:["ðˤ"],ع:["ʕ"],غ:["ɣ"],ف:["f"],ق:["ʔ"],ك:["k"],ل:["l"],م:["m"],ن:["n"],ه:["h"],و:["w","u"],ي:["j","i"]},gulf:{ا:["aː"],ب:["b"],ت:["t"],ث:["θ"],ج:["j","dʒ"],ح:["ħ"],خ:["x"],د:["d"],ذ:["ð"],ر:["r"],ز:["z"],س:["s"],ش:["ʃ"],ص:["sˤ"],ض:["ðˤ"],ط:["tˤ"],ظ:["ðˤ"],ع:["ʕ"],غ:["ɣ","q"],ف:["f"],ق:["ɡ","dʒ"],ك:["k","tʃ"],ل:["l"],م:["m"],ن:["n"],ه:["h"],و:["w","u"],ي:["j","i"]}},persian:{ا:["ɑː"],ب:["b"],پ:["p"],ت:["t"],ث:["s"],ج:["dʒ"],چ:["tʃ"],ح:["h"],خ:["x"],د:["d"],ذ:["z"],ر:["r"],ز:["z"],ژ:["ʒ"],س:["s"],ش:["ʃ"],ص:["s"],ض:["z"],ط:["t"],ظ:["z"],ع:["ʔ"],غ:["ɣ"],ف:["f"],ق:["ɣ"],ک:["k"],گ:["g"],ل:["l"],م:["m"],ن:["n"],و:["v","u","o"],ه:["h"],ی:["j","i"]},urdu:{ا:["ɑː"],ب:["b"],پ:["p"],ت:["t"],ٹ:["ʈ"],ث:["s"],ج:["dʒ"],چ:["tʃ"],ح:["h"],خ:["x"],د:["d"],ڈ:["ɖ"],ذ:["z"],ر:["r"],ڑ:["ɽ"],ز:["z"],ژ:["ʒ"],س:["s"],ش:["ʃ"],ص:["sˤ"],ض:["z"],ط:["t"],ظ:["z"],ع:["ʕ"],غ:["ɣ"],ف:["f"],ق:["q"],ک:["k"],گ:["ɡ"],ل:["l"],م:["m"],ن:["n"],ں:["n"],و:["ʋ","u"],ہ:["h"],ھ:["h"],ی:["j","i"],ے:["e"],ء:["ʔ"]}}};function Gt(e,a,t,n,i){return(e-a)*(i-n)/(t-a)+n}function xt(e,a,t){return Math.min(Math.max(e,a),t)}function qt(e){return xt(e,0,1)}function $t(e,a=1){return a=Math.max(a,.1),e<.5?Math.pow(2*e,a)/2:1-Math.pow(2*(1-e),a)/2}function Ft(e,a){const t=Math.pow(10,a);return Math.round(e*t)/t}function Yt(e){if(e==null||e<0)return"--:--.-";const[a,t]=e.toFixed(1).split("."),n=Math.floor(Number(a)/60).toString().padStart(2,"0"),i=(Number(a)%60).toString().padStart(2,"0");return`${n}:${i}.${t}`}function Vt(e){const a=[...e];for(let t=a.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[a[t],a[n]]=[a[n],a[t]]}return a}const R={ا:{isolated:"ا",initial:"ﺍ",medial:"ﺍ",final:"ﺎ"},ب:{isolated:"ب",initial:"ﺑ",medial:"ﺒ",final:"ﺐ"},ت:{isolated:"ت",initial:"ﺗ",medial:"ﺘ",final:"ﺖ"},ث:{isolated:"ث",initial:"ﺛ",medial:"ﺜ",final:"ﺚ"},ج:{isolated:"ج",initial:"ﺟ",medial:"ﺠ",final:"ﺞ"},ح:{isolated:"ح",initial:"ﺣ",medial:"ﺤ",final:"ﺢ"},خ:{isolated:"خ",initial:"ﺧ",medial:"ﺨ",final:"ﺦ"},د:{isolated:"د",initial:"ﺩ",medial:"ﺩ",final:"ﺪ"},ذ:{isolated:"ذ",initial:"ﺫ",medial:"ﺫ",final:"ﺬ"},ر:{isolated:"ر",initial:"ﺭ",medial:"ﺭ",final:"ﺮ"},ز:{isolated:"ز",initial:"ﺯ",medial:"ﺯ",final:"ﺰ"},س:{isolated:"س",initial:"ﺳ",medial:"ﺴ",final:"ﺲ"},ش:{isolated:"ش",initial:"ﺷ",medial:"ﺸ",final:"ﺶ"},ص:{isolated:"ص",initial:"ﺻ",medial:"ﺼ",final:"ﺺ"},ض:{isolated:"ض",initial:"ﺿ",medial:"ﻀ",final:"ﺾ"},ط:{isolated:"ط",initial:"ﻃ",medial:"ﻄ",final:"ﻂ"},ظ:{isolated:"ظ",initial:"ﻇ",medial:"ﻈ",final:"ﻆ"},ع:{isolated:"ع",initial:"ﻋ",medial:"ﻌ",final:"ﻊ"},غ:{isolated:"غ",initial:"ﻏ",medial:"ﻐ",final:"ﻎ"},ف:{isolated:"ف",initial:"ﻓ",medial:"ﻔ",final:"ﻒ"},ق:{isolated:"ق",initial:"ﻗ",medial:"ﻘ",final:"ﻖ"},ك:{isolated:"ك",initial:"ﻛ",medial:"ﻜ",final:"ﻚ"},ل:{isolated:"ل",initial:"ﻟ",medial:"ﻠ",final:"ﻞ"},م:{isolated:"م",initial:"ﻣ",medial:"ﻤ",final:"ﻢ"},ن:{isolated:"ن",initial:"ﻧ",medial:"ﻨ",final:"ﻦ"},ه:{isolated:"ه",initial:"ﻫ",medial:"ﻬ",final:"ﻪ"},و:{isolated:"و",initial:"ﻮ",medial:"ﻮ",final:"ﻮ"},ي:{isolated:"ي",initial:"ﻳ",medial:"ﻴ",final:"ﻲ"},پ:{isolated:"پ",initial:"ﭘ",medial:"ﭙ",final:"ﭗ"},چ:{isolated:"چ",initial:"ﭼ",medial:"ﭽ",final:"ﭻ"},ژ:{isolated:"ژ",initial:"ﮋ",medial:"ﮋ",final:"ﮋ"},گ:{isolated:"گ",initial:"ﮔ",medial:"ﮕ",final:"ﮓ"},ٹ:{isolated:"ٹ",initial:"ﭨ",medial:"ﭩ",final:"ﭧ"},ڈ:{isolated:"ڈ",initial:"ﭰ",medial:"ﭱ",final:"ﭯ"},ڑ:{isolated:"ڑ",initial:"ﭴ",medial:"ﭵ",final:"ﭳ"},ں:{isolated:"ں",initial:"ں",medial:"ں",final:"ں"},ھ:{isolated:"ھ",initial:"ﮬ",medial:"ﮭ",final:"ﮫ"},ہ:{isolated:"ہ",initial:"ﮨ",medial:"ﮩ",final:"ﮧ"},ے:{isolated:"ے",initial:"ﮯ",medial:"ﮮ",final:"ﮯ"},ی:{isolated:"ی",initial:"ﯾ",medial:"ﯿ",final:"ﯽ"},ک:{isolated:"ک",initial:"ﮐ",medial:"ﮑ",final:"ﮏ"},ء:{isolated:"ء",initial:"ء",medial:"ء",final:"ء"}};function we(e){return[...K.monographs,...["all","diacritics"].includes(e)?K.diacritics:[],...["all","digraphs"].includes(e)?K.digraphs:[],...e==="all"?K.digraphs_diacritics:[]]}function Tt(e){switch(e[0]){case"kana":switch(e[1]){case"hiragana":return we(e[2]);case"katakana":return we(e[2]).map(t=>At(t));default:return[]}case"greek":switch(e[1]){case"transcriptions":switch(e[2]){case"monographs":switch(e[3]){case"upper":return O.upper_monographs;case"lower":return O.lower_monographs;default:return[]}case"digraphs":switch(e[3]){case"upper":return[...O.upper_monographs,...O.digraphs].map(t=>t.toUpperCase());case"lower":return[...O.lower_monographs,...O.digraphs];default:return[]}default:return[]}case"names":switch(e[2]){case"upper":return O.upper_monographs;case"lower":return O.lower_monographs;default:return[]}default:return[]}case"cyrillic":{const t=St.alphabets[e[1]];switch(e[2]){case"upper":return t.map(n=>n.toUpperCase());case"lower":return t;default:return[]}}case"persoarabic":const a=zt.alphabets[e[1]];switch(e[1]){case"arabic":switch(e[3]){case"all":return a.flatMap(t=>{const n=R[t];return n?["isolated","initial","medial","final"].map(i=>n[i]):[]});default:return a.map(t=>R[t][e[3]])}default:switch(e[2]){case"all":return a.flatMap(t=>{const n=R[t];return n?["isolated","initial","medial","final"].map(i=>n[i]):[]});default:return a.map(t=>R[t][e[2]])}}default:return[]}}const Wt=_a(Ye,e=>e.is_valid?Tt(e.path):[]);export{P as a,R as b,St as c,Ye as d,Jt as e,Wt as f,O as g,Et as h,Ut as i,me as j,Ht as k,Tt as l,Rt as m,Kt as n,jt as o,zt as p,K as q,Yt as r,Vt as s,Pt as t,Bt as u,$t as v,qt as w,Gt as x,Dt as y,Ft as z};
