import{a as z,n as he,f as Y,t as pe}from"./disclose-version.CjEqvbVj.js";import{b as Ee,h as m,d as Ae,C as Ne,a9 as ge,G as xe,I as ie,k as G,J as W,g as x,D as He,e as ye,F as Te,at as F,z as le,au as ne,av as J,aw as Me,a0 as Le,u as oe,ax as Q,ay as Ie,a8 as Se,az as De,m as Ze,l as Oe,ab as Re,a6 as Be,a3 as U,aA as Ve,aB as Ge,i as We,B as fe,aC as Fe,aD as Pe,p as be,t as M,a as me,c as E,f as q,s as T,r as A,y as S,X as D,n as P}from"./runtime.Bchdziex.js";import{i as Xe,c as ve,d as Ye,n as qe,a as Ke,s as je}from"./render.DuEb51fQ.js";import{i as O,p as Je}from"./props.BVi8seop.js";import{h as Qe,s as Z}from"./snippet.D2DNn779.js";let X=null;function Hs(s,e){return e}function Ue(s,e,t,r){for(var l=[],v=e.length,o=0;o<v;o++)Ie(e[o].e,l,!0);var u=v>0&&l.length===0&&t!==null;if(u){var y=t.parentNode;Se(y),y.append(t),r.clear(),w(s,e[0].prev,e[v-1].next)}De(l,()=>{for(var g=0;g<v;g++){var p=e[g];u||(r.delete(p.k),w(s,p.prev,p.next)),Ze(p.e,!u)}})}function $e(s,e,t,r,l,v=null){var o=s,u={flags:e,items:new Map,first:null},y=(e&Ve)!==0;if(y){var g=s;o=m?G(Oe(g)):g.appendChild(Re())}m&&Ae();var p=null,a=!1;Ee(()=>{var f=t(),i=Ne(f)?f:f==null?[]:ge(f),_=i.length;if(a&&_===0)return;a=_===0;let V=!1;if(m){var H=o.data===xe;H!==(_===0)&&(o=ie(),G(o),W(!1),V=!0)}if(m){for(var c=null,d,n=0;n<_;n++){if(x.nodeType===8&&x.data===Be){o=x,V=!0,W(!1);break}var h=i[n],b=r(h,n);d=Ce(x,u,c,null,h,b,n,l,e),u.items.set(b,d),c=d}_>0&&G(ie())}m||es(i,u,o,l,e,r),v!==null&&(_===0?p?He(p):p=ye(()=>v(o)):p!==null&&Te(p,()=>{p=null})),V&&W(!0),t()}),m&&(o=x)}function es(s,e,t,r,l,v){var ee,se,te,ae;var o=(l&Ge)!==0,u=(l&(J|Q))!==0,y=s.length,g=e.items,p=e.first,a=p,f,i=null,_,V=[],H=[],c,d,n,h;if(o)for(h=0;h<y;h+=1)c=s[h],d=v(c,h),n=g.get(d),n!==void 0&&((ee=n.a)==null||ee.measure(),(_??(_=new Set)).add(n));for(h=0;h<y;h+=1){if(c=s[h],d=v(c,h),n=g.get(d),n===void 0){var b=a?a.e.nodes_start:t;i=Ce(b,e,i,i===null?e.first:i.next,c,d,h,r,l),g.set(d,i),V=[],H=[],a=i.next;continue}if(u&&ss(n,c,h,l),n.e.f&F&&(He(n.e),o&&((se=n.a)==null||se.unfix(),(_??(_=new Set)).delete(n))),n!==a){if(f!==void 0&&f.has(n)){if(V.length<H.length){var k=H[0],C;i=k.prev;var $=V[0],R=V[V.length-1];for(C=0;C<V.length;C+=1)ue(V[C],k,t);for(C=0;C<H.length;C+=1)f.delete(H[C]);w(e,$.prev,R.next),w(e,i,$),w(e,R,k),a=k,i=R,h-=1,V=[],H=[]}else f.delete(n),ue(n,a,t),w(e,n.prev,n.next),w(e,n,i===null?e.first:i.next),w(e,i,n),i=n;continue}for(V=[],H=[];a!==null&&a.k!==d;)a.e.f&F||(f??(f=new Set)).add(a),H.push(a),a=a.next;if(a===null)continue;n=a}V.push(n),i=n,a=n.next}if(a!==null||f!==void 0){for(var N=f===void 0?[]:ge(f);a!==null;)a.e.f&F||N.push(a),a=a.next;var B=N.length;if(B>0){var ze=l&Ve&&y===0?t:null;if(o){for(h=0;h<B;h+=1)(te=N[h].a)==null||te.measure();for(h=0;h<B;h+=1)(ae=N[h].a)==null||ae.fix()}Ue(e,N,ze,g)}}o&&U(()=>{var re;if(_!==void 0)for(n of _)(re=n.a)==null||re.apply()}),le.first=e.first&&e.first.e,le.last=i&&i.e}function ss(s,e,t,r){r&J&&ne(s.v,e),r&Q?ne(s.i,t):s.i=t}function Ce(s,e,t,r,l,v,o,u,y){var g=X;try{var p=(y&J)!==0,a=(y&Me)===0,f=p?a?Le(l):oe(l):l,i=y&Q?oe(o):o,_={i,v:f,k:v,a:null,e:null,prev:t,next:r};return X=_,_.e=ye(()=>u(s,f,i),m),_.e.prev=t&&t.e,_.e.next=r&&r.e,t===null?e.first=_:(t.next=_,t.e.next=_.e),r!==null&&(r.prev=_,r.e.prev=_.e),_}finally{X=g}}function ue(s,e,t){for(var r=s.next?s.next.e.nodes_start:t,l=e?e.e.nodes_start:t,v=s.e.nodes_start;v!==r;){var o=We(v);l.before(v),v=o}}function w(s,e,t){e===null?s.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function ts(s,e){if(e){const t=document.body;s.autofocus=!0,U(()=>{document.activeElement===t&&s.focus()})}}function K(s,e,t,r){var l=s.__attributes??(s.__attributes={});m&&(l[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||l[e]!==(l[e]=t)&&(e==="style"&&"__styles"in s&&(s.__styles={}),e==="loading"&&(s[Pe]=t),t==null?s.removeAttribute(e):typeof t!="string"&&we(s).includes(e)?s[e]=t:s.setAttribute(e,t))}function ce(s,e,t,r,l=!1,v=!1,o=!1){var u=e||{},y=s.tagName==="OPTION";for(var g in e)g in t||(t[g]=null);r!==void 0&&(t.class=t.class?t.class+" "+r:r);var p=we(s),a=s.__attributes??(s.__attributes={}),f=[];for(const c in t){let d=t[c];if(y&&c==="value"&&d==null){s.value=s.__value="",u[c]=d;continue}var i=u[c];if(d!==i){u[c]=d;var _=c[0]+c[1];if(_!=="$$"){if(_==="on"){const n={},h="$$"+c;let b=c.slice(2);var V=Ke(b);if(Xe(b)&&(b=b.slice(0,-7),n.capture=!0),!V&&i){if(d!=null)continue;s.removeEventListener(b,u[h],n),u[h]=null}if(d!=null)if(V)s[`__${b}`]=d,Ye([b]);else{let k=function(C){u[c].call(this,C)};e?u[h]=ve(b,s,k,n):f.push([c,d,()=>u[h]=ve(b,s,k,n)])}}else if(c==="style"&&d!=null)s.style.cssText=d+"";else if(c==="autofocus")ts(s,!!d);else if(c==="__value"||c==="value"&&d!=null)s.value=s[c]=s.__value=d;else{var H=c;l||(H=qe(H)),d==null&&!v?(a[c]=null,s.removeAttribute(c)):p.includes(H)&&(v||typeof d!="string")?s[H]=d:typeof d!="function"&&(m&&(H==="src"||H==="href"||H==="srcset")||K(s,H,d))}c==="style"&&"__styles"in s&&(s.__styles={})}}}return e||U(()=>{if(s.isConnected)for(const[c,d,n]of f)u[c]===d&&n()}),u}var de=new Map;function we(s){var e=de.get(s.nodeName);if(e)return e;de.set(s.nodeName,e=[]);for(var t,r=fe(s),l=Element.prototype;l!==r;){t=Fe(r);for(var v in t)t[v].set&&e.push(v);r=fe(r)}return e}function ys(s,e){var t=s.__className,r=as(e);m&&s.className===r?s.__className=r:(t!==r||m&&s.className!==r)&&(e==null?s.removeAttribute("class"):s.className=r,s.__className=r)}function as(s){return s??""}function rs(s,e,t){if(t){if(s.classList.contains(e))return;s.classList.add(e)}else{if(!s.classList.contains(e))return;s.classList.remove(e)}}function _e(s,e,t,r){var l=s.__styles??(s.__styles={});l[e]!==t&&(l[e]=t,t==null?s.style.removeProperty(e):s.style.setProperty(e,t,""))}const L=(s,e)=>!e||!s.startsWith(e)?s:s.substring(e.length),j=(s,e)=>!e||!s.endsWith(e)?s:s.substring(0,s.length-e.length),ke=(s,e)=>s.endsWith(e)?s:s+e,is=s=>j(L(L(s,"https://"),"www."),"/");var ls=he("<path></path>"),ns=he("<svg><!><!></svg>");function os(s,e){be(e,!0);const t=D(()=>e.fill??e.data.fill??"var(--text_color, #000)"),r=D(()=>e.width??e.size),l=D(()=>e.height??e.size),v=D(()=>{var p,a,f,i;return(p=e.data.attrs)!=null&&p.style&&((a=e.attrs)!=null&&a.style)?ke(e.data.attrs.style,";")+" "+e.attrs.style:((f=e.data.attrs)==null?void 0:f.style)??((i=e.attrs)==null?void 0:i.style)});var o=ns();let u;var y=E(o);O(y,()=>e.data.raw,p=>{var a=Y(),f=q(a);Qe(f,()=>e.data.raw,!0,!1),z(p,a)});var g=T(y);O(g,()=>e.data.paths,p=>{var a=Y(),f=q(a);$e(f,16,()=>e.data.paths,i=>i,(i,_)=>{var V=ls();let H;M(()=>H=ce(V,H,{fill:S(t),..._},"svelte-16ciom8",!0)),z(i,V)}),z(p,a)}),A(o),M(()=>{u=ce(o,u,{viewBox:e.data.viewBox??"0 0 100 100",...e.data.attrs,...e.attrs,"aria-label":e.label??e.data.label,style:S(v),class:e.classes},"svelte-16ciom8",!0),rs(o,"inline",e.inline),_e(o,"width",S(r)),_e(o,"height",S(l))}),z(s,o),me()}const Vs={label:"three sleepy z's",fill:"#e55d95",paths:[{d:"m 75.29285,61.962268 1.752156,1.914421 14.843359,1.811307 L 74.065203,86.193332 99.966781,85.408255 98.719988,83.648246 85.143565,82.136577 98.430963,62.887945"},{d:"m 47.636533,44.203704 2.295155,2.48945 25.618425,0.406407 L 45.93783,91.082857 89.425317,93.78003 87.862334,91.36274 61.57861,83.03068 86.244719,42.177019"},{d:"M 0.62464489,0.27405496 3.9721704,4.0993769 50.515703,10.089712 0.04581262,99.957542 68.009395,98.901532 65.391343,95.487941 24.119119,88.067804 66.301842,2.2896897"}]},bs={label:"a pixelated green oak acorn with a glint of sun",paths:[{fill:"#6f974c",d:"m 24.035592,57.306905 v -14.5 h 16.329497 v 14.25 z"},{fill:"#5e853f",d:"M 43.75,93.75 H 37.5 V 87.5 H 31.25 V 81.25 H 25 V 75 H 18.75 V 62.5 H 12.5 V 50 H 6.25 V 43.75 H 4 v -21 L 22.75,16.5 h 40.5 l 0.5,61.5 -5,-0.75 -0.25,16.5 h -2.25 l -4,2.25 -2.24617,4 H 43.75 Z M 37.5,50 H 31.25 V 43.75 H 25 v 12.5 h 12.5 z"},{fill:"#6f492b",d:"m 50,93.75 h 6.25 V 75 H 62.5 V 50 H 56.25 V 37.5 H 50 V 31.25 H 43.75 V 25 H 31.25 V 18.75 H 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 v -25 H 6.25 V 12.5 h 12.5 V 6.25 H 37.5 V 0 h 25 v 6.25 h 18.75 v 6.25 h 12.5 v 6.25 H 100 v 25 H 93.75 V 50 H 87.5 V 62.5 H 81.25 V 75 H 75 v 6.25 H 68.75 V 87.5 H 62.5 v 6.25 H 56.25 V 100 H 50 Z"},{fill:"#3b730f",d:"m 50,93.75 h 6.25 V 75 H 62.5 V 50 H 56.25 V 37.5 H 50 V 31.25 H 43.75 V 25 H 31.25 V 18.75 H 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 V 25 H 12.5 V 18.75 H 25 V 12.5 H 43.75 V 6.25 h 12.5 V 12.5 H 75 v 6.25 H 87.5 V 25 H 100 V 43.75 H 93.75 V 50 H 87.5 V 62.5 H 81.25 V 75 H 75 v 6.25 H 68.75 V 87.5 H 62.5 v 6.25 H 56.25 V 100 H 50 Z"},{fill:"#473323",d:"M 87.5,37.5 H 81.25 V 31.25 H 68.75 V 25 H 62.5 V 18.75 H 43.75 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 V 25 H 12.5 V 18.75 H 25 V 12.5 H 43.75 V 6.25 h 12.5 V 12.5 H 75 v 6.25 H 87.5 V 25 H 100 V 43.75 H 93.75 V 50 H 87.5 Z"},{fill:"#2e6006",d:"M 87.5,37.5 H 81.25 V 31.25 H 68.75 V 25 H 62.5 v -6.25 h -25 V 12.5 H 50 V 6.25 h 6.25 v 6.25 h 12.5 v 6.25 h 12.5 V 25 h 12.5 v 6.25 H 100 v 12.5 H 93.75 V 50 H 87.5 Z"},{fill:"#34251a",d:"M 93.75,31.25 H 87.5 V 25 h 6.25 v 6.25 H 100 v 12.5 H 93.75 Z M 75,18.75 h 6.25 V 25 H 75 Z M 37.5,12.5 H 50 V 6.25 h 6.25 v 6.25 h 12.5 v 6.25 H 53.125 37.5 Z"}]},I={label:"a friendly brown spider facing you",fill:"#84522a",paths:[{d:"M 26.253917,88.532336 29.904106,71.394855 40.667193,53.342811 40.258534,49.99234 38.417407,49.000991 22.876908,50.369035 9.4865496,53.880193 2.3019024,57.978424 0.42708056,57.27994 7.2642726,51.086985 20.811326,45.373351 37.960128,42.356792 39.354818,40.107008 38.229925,38.149883 26.030989,27.105568 14.46539,21.861786 8.0479986,18.615387 l -0.41428,-1.710463 8.2789464,1.499862 13.012873,5.003724 13.447448,10.696856 1.680801,-0.729547 0.222439,-1.343157 -3.983998,-12.128053 -5.730215,-9.573597 -0.823624,-5.1744052 1.16944,-1.165102 2.604334,6.3355162 6.612025,7.08777 4.874534,11.55989 2.800804,0.515574 4.48815,-1.359246 1.521623,-8.687062 5.685014,-8.620764 2.75965,-6.8316782 1.094578,1.128569 -1.293029,5.4222362 -4.084776,11.06803 -0.484994,8.377408 0.194311,1.192896 1.42954,1.700726 11.563936,-10.644623 9.878262,-8.331535 8.732915,-3.390708 -0.387305,1.402757 -5.294686,3.023816 -10.445054,10.705792 -9.561599,13.627899 -0.438945,1.602755 1.001398,1.666754 17.376932,3.986302 9.537375,6.940531 4.325785,4.636405 0.211208,1.557106 -6.15842,-4.279925 -10.413771,-5.155697 -15.838715,-1.696223 -0.83461,1.144484 0.774499,2.593247 9.737644,16.194355 3.925704,17.214082 0.07146,10.277289 -1.706242,1.13628 -2.009721,-9.21637 -5.894265,-16.88027 -12.292087,-17.295813 -4.177778,-0.585888 -7.294671,2.935716 -11.138052,16.645915 -6.462422,17.752509 -1.634756,7.206641 -2.070766,-1.52923 z"}]},ms={label:"a fuzzy tuft of green moss",fill:"#3db33d",paths:I.paths,attrs:{style:"transform: scaleX(-1) rotate(180deg)"}};I.paths;I.paths;I.paths;I.paths;const Cs={label:"a friendly orange pixelated spider facing you",fill:"#f4672f",paths:[{d:"m 25,81.200002 h 6.2 v -12.5 h 6.3 v -18.7 h -6.3 v 6.2 H 12.5 v 6.3 H 0 v -6.3 h 6.2 v -6.2 H 25 v -6.3 h 12.5 v -6.2 h -6.3 v -6.3 H 18.7 v -6.2 H 6.2 v -6.3 H 25 v 6.3 h 12.5 v -6.3 H 31.2 V 6.2 h 6.3 v 6.300002 h 6.2 V 31.200001 H 56.2 V 12.500002 h 6.3 V 6.2 h 6.2 v 12.500001 h -6.2 v 18.800001 h 6.2 v -12.5 h 12.5 v -12.5 h 12.5 v 6.2 h -6.2 v 12.5 H 75 v 12.5 h 6.2 v 6.3 h 12.5 v 6.2 h 6.299997 v 6.3 H 87.5 v -6.3 H 75 v -6.2 h -6.3 v 12.5 H 75 v 12.5 h 6.2 V 99.99999 H 75 V 81.200002 h -6.3 v -12.5 h -6.2 v -12.5 H 43.7 v 18.8 h -6.2 v 12.5 H 31.2 V 99.99999 H 25 Z"}]},fs={label:"the GitHub logo, an octocat silhouette",paths:[{d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z","fill-rule":"evenodd","clip-rule":"evenodd",transform:"scale(64)"}],viewBox:"0 0 1024 1024"};var vs=pe('<div class="root_url svelte-cs8o0f"><a> </a></div>'),us=pe('<footer class="box"><!> <div class="logo box panel p_lg shadow_inset_xs svelte-cs8o0f"><!> <a rel="me" title="source code on GitHub" class="svelte-cs8o0f"><!></a> <!></div> <!></footer>');function ws(s,e){be(e,!0);const t=Je(e,"root_url",3,null);var r=us(),l=E(r);Z(l,()=>e.children??P);var v=T(l,2),o=E(v);Z(o,()=>e.logo_header??P);var u=T(o,2),y=E(u);O(y,()=>e.logo,a=>{var f=Y(),i=q(f);Z(i,()=>e.logo),z(a,f)},a=>{os(a,{data:fs,size:"var(--icon_size_lg)"})}),A(u);var g=T(u,2);Z(g,()=>e.logo_footer??P),A(v);var p=T(v,2);O(p,t,a=>{var f=vs(),i=E(f),_=E(i,!0);M(()=>je(_,is(t()))),A(i),A(f),M(()=>K(i,"href",t())),z(a,f)}),A(r),M(()=>K(u,"href",e.pkg.repo_url)),z(s,r),me()}const ks=(s,e)=>{const{name:t}=s,l=(i=>i?j(L(j(i,".git"),"git+"),"/"):null)(s.repository?typeof s.repository=="string"?s.repository:s.repository.url:null);if(!l)throw new Error("failed to parse package_meta - `repo_url` is required in package_json");const v=s.homepage??null,o=!s.private&&!!s.exports&&s.version!=="0.0.1",u=o?"https://www.npmjs.com/package/"+s.name:null,y=o&&l?l+"/blob/main/CHANGELOG.md":null,g=cs(t),p=l?L(l,"https://github.com/").split("/")[0]:null,a=v?ke(v,"/")+(s.logo?L(s.logo,"/"):"favicon.png"):null,f=s.logo_alt??`logo for ${g}`;return{package_json:s,src_json:e,name:t,repo_name:g,repo_url:l,owner_name:p,homepage_url:v,logo_url:a,logo_alt:f,npm_url:u,changelog_url:y,published:o}},cs=s=>s[0]==="@"?s.split("/")[1]:s,zs={name:"@ryanatkn/fuz_code",version:"0.20.0",description:"syntax highlighting using prismjs for Svelte, SvelteKit, TypeScript, and Fuz",glyph:"🎨",logo:"logo.svg",logo_alt:"a friendly pink spider facing you",public:!0,license:"MIT",homepage:"https://code.fuz.dev/",repository:"https://github.com/ryanatkn/fuz_code",author:{name:"Ryan Atkinson",email:"mail@ryanatkn.com",url:"https://www.ryanatkn.com/"},bugs:"https://github.com/ryanatkn/fuz_code/issues",funding:"https://www.ryanatkn.com/funding",scripts:{start:"gro dev",dev:"gro dev",build:"gro build",check:"gro check",test:"gro test",preview:"vite preview",deploy:"gro deploy"},type:"module",engines:{node:">=20.17"},peerDependencies:{"@ryanatkn/moss":"*","prism-svelte":"^0.5",prismjs:"^1",svelte:"^5"},devDependencies:{"@changesets/changelog-git":"^0.2.0","@ryanatkn/belt":"^0.25.3","@ryanatkn/eslint-config":"^0.5.5","@ryanatkn/fuz":"^0.130.2","@ryanatkn/gro":"^0.143.3","@ryanatkn/moss":"^0.18.2","@sveltejs/adapter-static":"^3.0.6","@sveltejs/kit":"^2.7.3","@sveltejs/package":"^2.3.7","@sveltejs/vite-plugin-svelte":"^4.0.0","@types/prismjs":"^1.26.5",eslint:"^9.13.0","eslint-plugin-svelte":"^2.46.0",prettier:"^3.3.3","prettier-plugin-svelte":"^3.2.7","prism-svelte":"^0.5.0",prismjs:"^1.29.0",svelte:"^5.1.4","svelte-check":"^4.0.5",tslib:"^2.8.0",typescript:"^5.6.3","typescript-eslint":"^8.12.1",uvu:"^0.5.6"},prettier:{plugins:["prettier-plugin-svelte"],useTabs:!0,printWidth:100,singleQuote:!0,bracketSpacing:!1,overrides:[{files:"package.json",options:{useTabs:!1}}]},sideEffects:["**/*.css"],files:["dist","src/lib/**/*.ts","!src/lib/**/*.test.*","!dist/**/*.test.*"],exports:{"./package.json":"./package.json","./Code.svelte":{types:"./dist/Code.svelte.d.ts",svelte:"./dist/Code.svelte",default:"./dist/Code.svelte"},"./prism.css":{default:"./dist/prism.css"},"./remove_prism_css_vite_plugin.js":{types:"./dist/remove_prism_css_vite_plugin.d.ts",default:"./dist/remove_prism_css_vite_plugin.js"}}},Es={name:"@ryanatkn/fuz_code",version:"0.20.0",modules:{"./package.json":{path:"package.json",declarations:[]},"./Code.svelte":{path:"Code.svelte",declarations:[]},"./prism.css":{path:"prism.css",declarations:[]},"./remove_prism_css_vite_plugin.js":{path:"remove_prism_css_vite_plugin.ts",declarations:[{name:"remove_prism_css",kind:"function"}]}}};export{ws as L,os as S,_e as a,ce as b,Es as c,zs as d,$e as e,is as f,ke as g,ys as h,Hs as i,L as j,j as k,I as l,ms as m,bs as n,Cs as o,ks as p,K as s,rs as t,Vs as z};