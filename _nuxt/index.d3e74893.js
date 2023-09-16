import{ac as _,r as E,a5 as P,aq as I,ae as j,N as W,ar as D,I as A,ak as F,o as L}from"./entry.5c1a6726.js";function M(e,n){let o,t,u;const i=E(!0),a=()=>{i.value=!0,u()};P(e,a,{flush:"sync"});const l=typeof n=="function"?n:n.get,c=typeof n=="function"?void 0:n.set,d=I((f,m)=>(t=f,u=m,{get(){return i.value&&(o=l(),i.value=!1),t(),o},set(r){c==null||c(r)}}));return Object.isExtensible(d)&&(d.trigger=a),d}function O(e){return _()?(j(e),!0):!1}function w(e){return typeof e=="function"?e():W(e)}const S=typeof window<"u"&&typeof document<"u",R=Object.prototype.toString,k=e=>R.call(e)==="[object Object]",b=()=>{},N=q();function q(){var e;return S&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function B(e,n){function o(...t){return new Promise((u,i)=>{Promise.resolve(e(()=>n.apply(this,t),{fn:n,thisArg:this,args:t})).then(u).catch(i)})}return o}function V(e,n={}){let o,t,u=b;const i=l=>{clearTimeout(l),u(),u=b};return l=>{const c=w(e),d=w(n.maxWait);return o&&i(o),c<=0||d!==void 0&&d<=0?(t&&(i(t),t=null),Promise.resolve(l())):new Promise((f,m)=>{u=n.rejectOnCancel?m:f,d&&!t&&(t=setTimeout(()=>{o&&i(o),t=null,f(l())},d)),o=setTimeout(()=>{t&&i(t),t=null,f(l())},c)})}}function Q(e,n=200,o={}){return B(V(n,o),e)}function $(e,n,o={}){const{immediate:t=!0}=o,u=E(!1);let i=null;function a(){i&&(clearTimeout(i),i=null)}function l(){u.value=!1,a()}function c(...d){a(),u.value=!0,i=setTimeout(()=>{u.value=!1,i=null,e(...d)},w(n))}return t&&(u.value=!0,S&&c()),O(l),{isPending:D(u),start:c,stop:l}}function y(e){var n;const o=w(e);return(n=o==null?void 0:o.$el)!=null?n:o}const T=S?window:void 0,z=S?window.navigator:void 0;function h(...e){let n,o,t,u;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,t,u]=e,n=T):[n,o,t,u]=e,!n)return b;Array.isArray(o)||(o=[o]),Array.isArray(t)||(t=[t]);const i=[],a=()=>{i.forEach(f=>f()),i.length=0},l=(f,m,r,s)=>(f.addEventListener(m,r,s),()=>f.removeEventListener(m,r,s)),c=P(()=>[y(n),w(u)],([f,m])=>{if(a(),!f)return;const r=k(m)?{...m}:m;i.push(...o.flatMap(s=>t.map(p=>l(f,s,p,r))))},{immediate:!0,flush:"post"}),d=()=>{c(),a()};return O(d),d}let x=!1;function U(e,n,o={}){const{window:t=T,ignore:u=[],capture:i=!0,detectIframe:a=!1}=o;if(!t)return;N&&!x&&(x=!0,Array.from(t.document.body.children).forEach(r=>r.addEventListener("click",b)),t.document.documentElement.addEventListener("click",b));let l=!0;const c=r=>u.some(s=>{if(typeof s=="string")return Array.from(t.document.querySelectorAll(s)).some(p=>p===r.target||r.composedPath().includes(p));{const p=y(s);return p&&(r.target===p||r.composedPath().includes(p))}}),f=[h(t,"click",r=>{const s=y(e);if(!(!s||s===r.target||r.composedPath().includes(s))){if(r.detail===0&&(l=!c(r)),!l){l=!0;return}n(r)}},{passive:!0,capture:i}),h(t,"pointerdown",r=>{const s=y(e);s&&(l=!r.composedPath().includes(s)&&!c(r))},{passive:!0}),a&&h(t,"blur",r=>{setTimeout(()=>{var s;const p=y(e);((s=t.document.activeElement)==null?void 0:s.tagName)==="IFRAME"&&!(p!=null&&p.contains(t.document.activeElement))&&n(r)},0)})].filter(Boolean);return()=>f.forEach(r=>r())}function G(e={}){var n;const{window:o=T,deep:t=!0}=e,u=(n=e.document)!=null?n:o==null?void 0:o.document,i=()=>{var l;let c=u==null?void 0:u.activeElement;if(t)for(;c!=null&&c.shadowRoot;)c=(l=c==null?void 0:c.shadowRoot)==null?void 0:l.activeElement;return c},a=M(()=>null,()=>i());return o&&(h(o,"blur",l=>{l.relatedTarget===null&&a.trigger()},!0),h(o,"focus",a.trigger,!0)),a}function H(){const e=E(!1);return F()&&L(()=>{e.value=!0}),e}function J(e){const n=H();return A(()=>(n.value,!!e()))}function X(e={}){const{navigator:n=z,read:o=!1,source:t,copiedDuring:u=1500,legacy:i=!1}=e,a=J(()=>n&&"clipboard"in n),l=A(()=>a.value||i),c=E(""),d=E(!1),f=$(()=>d.value=!1,u);function m(){a.value?n.clipboard.readText().then(v=>{c.value=v}):c.value=p()}l.value&&o&&h(["copy","cut"],m);async function r(v=w(t)){l.value&&v!=null&&(a.value?await n.clipboard.writeText(v):s(v),c.value=v,d.value=!0,f.start())}function s(v){const g=document.createElement("textarea");g.value=v??"",g.style.position="absolute",g.style.opacity="0",document.body.appendChild(g),g.select(),document.execCommand("copy"),g.remove()}function p(){var v,g,C;return(C=(g=(v=document==null?void 0:document.getSelection)==null?void 0:v.call(document))==null?void 0:g.toString())!=null?C:""}return{isSupported:l,text:c,copied:d,copy:r}}function Y(e,n={}){const o=G(n),t=A(()=>y(e));return{focused:A(()=>t.value&&o.value?t.value.contains(o.value):!1)}}export{Q as a,Y as b,X as c,U as o,O as t,y as u};
