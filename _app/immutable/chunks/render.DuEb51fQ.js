import{a1 as W,a2 as w,Q as E,C as B,a3 as Y,Z as O,z as N,a4 as S,l as j,a5 as q,i as z,H as T,J as m,k as D,d as P,g as y,a6 as $,j as G,a7 as J,a8 as Q,a9 as U,aa as Z,ab as F,e as K,p as X,h as k,a as x,ac as ee}from"./runtime.Bchdziex.js";import{r as te,c as re}from"./disclose-version.CjEqvbVj.js";const V=new Set,A=new Set;function ce(e,t,a,u){function s(r){if(u.capture||v.call(t,r),!r.cancelBubble){var i=O,d=N;w(null),E(null);try{return a.call(this,r)}finally{w(i),E(d)}}}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Y(()=>{t.addEventListener(e,s,u)}):t.addEventListener(e,s,u),s}function de(e){for(var t=0;t<e.length;t++)V.add(e[t]);for(var a of A)a(e)}function v(e){var R;var t=this,a=t.ownerDocument,u=e.type,s=((R=e.composedPath)==null?void 0:R.call(e))||[],r=s[0]||e.target,i=0,d=e.__root;if(d){var f=s.indexOf(d);if(f!==-1&&(t===document||t===window)){e.__root=t;return}var _=s.indexOf(t);if(_===-1)return;f<=_&&(i=f)}if(r=s[i]||e.target,r!==t){W(e,"currentTarget",{configurable:!0,get(){return r||a}});var b=O,l=N;w(null),E(null);try{for(var o,n=[];r!==null;){var c=r.assignedSlot||r.parentNode||r.host||null;try{var h=r["__"+u];if(h!==void 0&&!r.disabled)if(B(h)){var[C,...H]=h;C.apply(r,[e,...H])}else h.call(r,e)}catch(g){o?n.push(g):o=g}if(e.cancelBubble||c===t||c===null)break;r=c}if(o){for(let g of n)queueMicrotask(()=>{throw g});throw o}}finally{e.__root=t,delete e.currentTarget,w(b),E(l)}}}function fe(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ae=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function _e(e){return ae.includes(e)}const oe={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function he(e){return e=e.toLowerCase(),oe[e]??e}const ne=["touchstart","touchmove"];function se(e){return ne.includes(e)}let I=!0;function pe(e,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function ie(e,t){return M(e,t)}function ye(e,t){S(),t.intro=t.intro??!1;const a=t.target,u=k,s=y;try{for(var r=j(a);r&&(r.nodeType!==8||r.data!==q);)r=z(r);if(!r)throw T;m(!0),D(r),P();const i=M(e,{...t,anchor:r});if(y===null||y.nodeType!==8||y.data!==$)throw G(),T;return m(!1),i}catch(i){if(i===T)return t.recover===!1&&J(),S(),Q(a),m(!1),ie(e,t);throw i}finally{m(u),D(s),te()}}const p=new Map;function M(e,{target:t,anchor:a,props:u={},events:s,context:r,intro:i=!0}){S();var d=new Set,f=l=>{for(var o=0;o<l.length;o++){var n=l[o];if(!d.has(n)){d.add(n);var c=se(n);t.addEventListener(n,v,{passive:c});var h=p.get(n);h===void 0?(document.addEventListener(n,v,{passive:c}),p.set(n,1)):p.set(n,h+1)}}};f(U(V)),A.add(f);var _=void 0,b=Z(()=>{var l=a??t.appendChild(F());return K(()=>{if(r){X({});var o=ee;o.c=r}s&&(u.$$events=s),k&&re(l,null),I=i,_=e(l,u)||{},I=!0,k&&(N.nodes_end=y),r&&x()}),()=>{var c;for(var o of d){t.removeEventListener(o,v);var n=p.get(o);--n===0?(document.removeEventListener(o,v),p.delete(o)):p.set(o,n)}A.delete(f),L.delete(_),l!==a&&((c=l.parentNode)==null||c.removeChild(l))}});return L.set(_,b),_}let L=new WeakMap;function ve(e){const t=L.get(e);t&&t()}export{_e as a,I as b,ce as c,de as d,ye as h,fe as i,ie as m,he as n,pe as s,ve as u};