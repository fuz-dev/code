import{l as O,r as A,m as T,q as b,E as D,g as N,v as x,L as U,w as Y,f as o,e as k,u as w,x as p,y as z,z as C}from"./runtime.BDQFiU-h.js";import{h as S,d as F,k as M,l as $,i as B,m as q,b as G,P as H,n as V,o as Z,p as j}from"./disclose-version.uMq7BPSm.js";function Q(u,s,f,i=null,m=!1){S&&F();var r=u,t=null,a=null,n=null,l=m?D:0;O(()=>{if(n===(n=!!s()))return;let _=!1;if(S){const h=r.data===M;n===h&&(r=$(),B(r),q(!1),_=!0)}n?(t?A(t):t=T(()=>f(r)),a&&b(a,()=>{a=null})):(a?A(a):i&&(a=T(()=>i(r))),t&&b(t,()=>{t=null})),_&&q(!0)},l),S&&(r=G)}function W(u,s,f,i){var I;var m=(f&V)!==0,r=(f&Z)!==0,t=(f&j)!==0,a=u[s],n=(I=N(u,s))==null?void 0:I.set,l=i,_=!0,h=()=>(t&&_&&(_=!1,l=w(i)),l);a===void 0&&i!==void 0&&(n&&r&&x(),a=h(),n&&n(a));var v;if(r)v=()=>{var e=u[s];return e===void 0?h():(_=!0,e)};else{var R=(m?p:z)(()=>u[s]);R.f|=U,v=()=>{var e=o(R);return e!==void 0&&(l=void 0),e===void 0?l:e}}if(!(f&H))return v;if(n){var y=u.$$legacy;return function(e,d){return arguments.length>0?((!r||!d||y)&&n(d?v():e),e):v()}}var P=!1,E=C(a),c=p(()=>{var e=v(),d=o(E);return P?(P=!1,d):E.v=e});return m||(c.equals=Y),function(e,d){var L=o(c);if(arguments.length>0){const g=d?o(c):e;return c.equals(g)||(P=!0,k(E,g),o(c)),e}return L}}export{Q as i,W as p};
