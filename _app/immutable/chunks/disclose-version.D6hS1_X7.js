import{a6 as c,b as y,a8 as E,h as i,a0 as w,i as m,G as p,k as h,g as r,l as _,z as g,a9 as N,aa as b,d as A}from"./runtime.9Ro2tVlX.js";let n;function M(){n=void 0}function R(a){let t=null,e=i;var u;if(i){for(t=r,n===void 0&&(n=_(document.head));n!==null&&(n.nodeType!==8||n.data!==w);)n=m(n);n===null?p(!1):n=h(m(n))}i||(u=document.head.appendChild(c()));try{y(()=>a(u),E)}finally{e&&(p(!0),n=r,h(t))}}function T(a){var t=document.createElement("template");return t.innerHTML=a,t.content}function d(a,t){var e=g;e.nodes_start===null&&(e.nodes_start=a,e.nodes_end=t)}function D(a,t){var e=(t&N)!==0,u=(t&b)!==0,s,f=!a.startsWith("<!>");return()=>{if(i)return d(r,null),r;s===void 0&&(s=T(f?a:"<!>"+a),e||(s=_(s)));var o=u?document.importNode(s,!0):s.cloneNode(!0);if(e){var v=_(o),l=o.lastChild;d(v,l)}else d(o,o);return o}}function F(a,t,e="svg"){var u=!a.startsWith("<!>"),s=`<${e}>${u?a:"<!>"+a}</${e}>`,f;return()=>{if(i)return d(r,null),r;if(!f){var o=T(s),v=_(o);f=_(v)}var l=f.cloneNode(!0);return d(l,l),l}}function I(a=""){if(!i){var t=c(a+"");return d(t,t),t}var e=r;return e.nodeType!==3&&(e.before(e=c()),h(e)),d(e,e),e}function L(){if(i)return d(r,null),r;var a=document.createDocumentFragment(),t=document.createComment(""),e=c();return a.append(t,e),d(t,e),a}function O(a,t){if(i){g.nodes_end=r,A();return}a!==null&&a.before(t)}const x="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(x);export{O as a,d as b,T as c,L as d,I as e,R as h,F as n,M as r,D as t};
