import{h as re,d as st,k as lt,l as Ae,i as ye,m as He,b as oe,w as it,F as Ee,G as vt,I as je,y as ot,u as dt,J as Re,K as ut,T as ct,c as u,s as t,a as w,t as j,A as P,f as F,r as o,B as _t,E as me,D as pe}from"../chunks/disclose-version.CskHuEF7.js";import{b as ht,g as ft,r as Be,c as Oe,n as gt,U as mt,l as xe,h as Le,y as pt,s as Se,V as wt,W as bt,d as yt,B as Ve,z as ge,E as Ht,X as kt,Y as xt,H as Vt,u as zt,Z as qt,I as Et,A as jt,p as ne,t as L,a as se,k as _,w as C}from"../chunks/runtime.BGYFKMfJ.js";import{b as Tt,s as U}from"../chunks/render.umJ7Gyvh.js";import{p as Q,i as S}from"../chunks/props.Bt1hxiws.js";import{s as Y}from"../chunks/snippet.CF4W2iEl.js";import{b as R,f as Mt,s as W,t as G,a as I,e as Ce,g as Fe,h as At,i as Ie,p as Lt,L as St,c as Ct,d as Ft}from"../chunks/package.DoEqyiin.js";import{s as Pe,a as Ue,p as We}from"../chunks/stores.DwyebkbY.js";import{b as It}from"../chunks/entry.DniGtl1A.js";let ke=null;function Ge(n,e){return e}function Nt(n,e,a,v){for(var r=[],s=e.length,i=0;i<s;i++)wt(e[i].e,r,!0);var m=s>0&&r.length===0&&a!==null;if(m){var h=a.parentNode;ot(h),h.append(a),v.clear(),ae(n,e[0].prev,e[s-1].next)}bt(r,()=>{for(var l=0;l<s;l++){var f=e[l];m||(v.delete(f.k),ae(n,f.prev,f.next)),yt(f.e,!m)}})}function ze(n,e,a,v,r,s=null){var i=n,m={flags:e,items:new Map,first:null},h=(e&Re)!==0;if(h){var l=n;i=re?ye(l.firstChild):l.appendChild(dt())}re&&st();var f=null;ht(()=>{var d=a(),k=ft(d)?d:d==null?[]:Array.from(d),c=k.length;let g=!1;if(re){var z=i.data===lt;z!==(c===0)&&(i=Ae(),ye(i),He(!1),g=!0)}if(re){for(var M=null,x,q=0;q<c;q++){if(oe.nodeType===8&&oe.data===it){i=oe,g=!0,He(!1);break}var b=k[q],H=v(b,q);x=Ye(oe,m,M,null,b,H,q,r,e),m.items.set(H,x),M=x}c>0&&ye(Ae())}re||Zt(k,m,i,r,e,v),s!==null&&(c===0?f?Be(f):f=Oe(()=>s(i)):f!==null&&gt(f,()=>{f=null})),g&&He(!0)}),re&&(i=oe)}function Zt(n,e,a,v,r,s){var de,ie,ve,ue;var i=(r&ut)!==0,m=(r&(Ee|je))!==0,h=n.length,l=e.items,f=e.first,d=f,k=new Set,c=null,g=new Set,z=[],M=[],x,q,b,H;if(i)for(H=0;H<h;H+=1)x=n[H],q=s(x,H),b=l.get(q),b!==void 0&&((de=b.a)==null||de.measure(),g.add(b));for(H=0;H<h;H+=1){if(x=n[H],q=s(x,H),b=l.get(q),b===void 0){var N=d?d.e.nodes.start:a;c=Ye(N,e,c,c===null?e.first:c.next,x,q,H,v,r),l.set(q,c),z=[],M=[],d=c.next;continue}if(m&&Dt(b,x,H,r),b.e.f&mt&&(Be(b.e),i&&((ie=b.a)==null||ie.unfix(),g.delete(b))),b!==d){if(k.has(b)){if(z.length<M.length){var Z=M[0],D;c=Z.prev;var K=z[0],B=z[z.length-1];for(D=0;D<z.length;D+=1)Ne(z[D],Z,a);for(D=0;D<M.length;D+=1)k.delete(M[D]);ae(e,K.prev,B.next),ae(e,c,K),ae(e,B,Z),d=Z,c=B,H-=1,z=[],M=[]}else k.delete(b),Ne(b,d,a),ae(e,b.prev,b.next),ae(e,b,c===null?e.first:c.next),ae(e,c,b),c=b;continue}for(z=[],M=[];d!==null&&d.k!==q;)k.add(d),M.push(d),d=d.next;if(d===null)continue;b=d}z.push(b),c=b,d=b.next}const O=Array.from(k);for(;d!==null;)O.push(d),d=d.next;var $=O.length;if($>0){var we=r&Re&&h===0?a:null;if(i){for(H=0;H<$;H+=1)(ve=O[H].a)==null||ve.measure();for(H=0;H<$;H+=1)(ue=O[H].a)==null||ue.fix()}Nt(e,O,we,l)}i&&Ve(()=>{var T;for(b of g)(T=b.a)==null||T.apply()}),xe.first=e.first&&e.first.e,xe.last=c&&c.e}function Dt(n,e,a,v){v&Ee&&Le(n.v,e),v&je?Le(n.i,a):n.i=a}function Ye(n,e,a,v,r,s,i,m,h){var l=ke;try{var f=(h&Ee)!==0,d=(h&vt)===0,k=f?d?pt(r):Se(r):r,c=h&je?Se(i):i,g={i:c,v:k,k:s,a:null,e:null,prev:a,next:v};return ke=g,g.e=Oe(()=>m(n,k,c),re),g.e.prev=a&&a.e,g.e.next=v&&v.e,a===null?e.first=g:(a.next=g,a.e.next=g.e),v!==null&&(v.prev=g,v.e.prev=g.e),g}finally{ke=l}}function Ne(n,e,a){for(var v=n.next?n.next.e.nodes.start:a,r=e?e.e.nodes.start:a,s=n.e.nodes.start;s!==v;){var i=s.nextSibling;r.before(s),s=i}}function ae(n,e,a){e===null?n.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}const Ke=typeof window<"u",Rt=Ke?requestAnimationFrame:ge,Bt=Ke?()=>performance.now():()=>Date.now(),te={tick:n=>Rt(n),now:()=>Bt(),tasks:new Set};function Xe(n){te.tasks.forEach(e=>{e.c(n)||(te.tasks.delete(e),e.f())}),te.tasks.size!==0&&te.tick(Xe)}function Ot(n){let e;return te.tasks.size===0&&te.tick(Xe),{promise:new Promise(a=>{te.tasks.add(e={c:n,f:a})}),abort(){te.tasks.delete(e)}}}function fe(n,e){n.dispatchEvent(new CustomEvent(e))}function Pt(n){const e=n.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(a=>a[0].toUpperCase()+a.slice(1)).join("")}function Ze(n){const e={},a=n.split(";");for(const v of a){const[r,s]=v.split(":");if(!r||s===void 0)break;const i=Pt(r.trim());e[i]=s.trim()}return e}const Ut=n=>n;function Wt(n,e,a,v){var r=(n&ct)!==0,s="both",i,m=e.inert,h,l;function f(){return i??(i=a()(e,v==null?void 0:v(),{direction:s}))}var d={is_global:r,in(){e.inert=m,l==null||l.abort(),h==null||h.abort(),fe(e,"introstart"),h=qe(e,f(),l,1,()=>{fe(e,"introend"),h==null||h.abort(),h=i=void 0},void 0)},out(g){l==null||l.abort(),e.inert=!0,fe(e,"outrostart"),l=qe(e,f(),h,0,()=>{fe(e,"outroend"),l==null||l.abort(),l=i=void 0,g==null||g()},void 0),l.reset},stop:()=>{h==null||h.abort(),l==null||l.abort()}},k=xe;if((k.transitions??(k.transitions=[])).push(d),Tt){let g=r;if(!g){for(var c=k.parent;c&&c.f&Ht;)for(;(c=c.parent)&&!(c.f&kt););g=!c||(c.f&xt)!==0}g&&Vt(()=>{zt(()=>d.in())})}}function qe(n,e,a,v,r,s){var i=v===1;if(qt(e)){var m,h=!1;return Ve(()=>{if(!h){var H=e({direction:i?"in":"out"});m=qe(n,H,a,v,r,s)}}),{abort:()=>{h=!0,m==null||m.abort()},deactivate:()=>m.deactivate(),reset:()=>m.reset(),t:H=>m.t(H)}}if(a==null||a.deactivate(),!(e!=null&&e.duration))return r==null||r(),{abort:ge,deactivate:ge,reset:ge,t:()=>v};const{delay:l=0,css:f,tick:d,easing:k=Ut}=e;var c=te.now()+l,g=(a==null?void 0:a.t(c))??1-v,z=v-g,M=e.duration*Math.abs(z),x=c+M,q,b;return f?Ve(()=>{var H=[],N=Math.ceil(M/16.666666666666668);if(i&&l>0){let B=Math.ceil(l/16.666666666666668),O=Ze(f(0,1));for(let $=0;$<B;$+=1)H.push(O)}for(var Z=0;Z<=N;Z+=1){var D=g+z*k(Z/N),K=f(D,1-D);H.push(Ze(K))}q=n.animate(H,{delay:i?0:l,duration:M+(i?l:0),easing:"linear",fill:"forwards"}),q.finished.then(()=>{r==null||r(),v===1&&q.cancel()}).catch(B=>{if(q.startTime!==null&&q.currentTime!==null)throw B})}):(g===0&&(d==null||d(0,1)),b=Ot(H=>{if(H>=x)return d==null||d(v,1-v),r==null||r(),!1;if(H>=c){var N=g+z*k((H-c)/M);d==null||d(N,1-N)}return!0})),{abort:()=>{q&&(q.cancel(),q.effect=null),b==null||b.abort(),s==null||s(),r=void 0,s=void 0},deactivate:()=>{r=void 0,s=void 0},reset:()=>{v===0&&(d==null||d(1,0))},t:H=>{var N=g+z*k((H-c)/M);return Math.min(1,Math.max(0,N))}}}function Gt(n,e,a,v,r){var s=()=>{v(a[n])};a.addEventListener(e,s),r?Et(()=>{a[n]=r()}):s(),(a===document.body||a===window||a===document)&&jt(()=>{a.removeEventListener(e,s)})}function Yt(n){const e=n-1;return e*e*e+1}function Kt(n,{delay:e=0,duration:a=400,easing:v=Yt,axis:r="y"}={}){const s=getComputedStyle(n),i=+s.opacity,m=r==="y"?"height":"width",h=parseFloat(s[m]),l=r==="y"?["top","bottom"]:["left","right"],f=l.map(x=>`${x[0].toUpperCase()}${x.slice(1)}`),d=parseFloat(s[`padding${f[0]}`]),k=parseFloat(s[`padding${f[1]}`]),c=parseFloat(s[`margin${f[0]}`]),g=parseFloat(s[`margin${f[1]}`]),z=parseFloat(s[`border${f[0]}Width`]),M=parseFloat(s[`border${f[1]}Width`]);return{delay:e,duration:a,easing:v,css:x=>`overflow: hidden;opacity: ${Math.min(x*20,1)*i};${m}: ${x*h}px;padding-${l[0]}: ${x*d}px;padding-${l[1]}: ${x*k}px;margin-${l[0]}: ${x*c}px;margin-${l[1]}: ${x*g}px;border-${l[0]}-width: ${x*z}px;border-${l[1]}-width: ${x*M}px;`}}var Xt=j("<div><!></div>"),Jt=j("<details><summary><!></summary> <!></details>");function Qt(n,e){ne(e,!0);let a=Q(e,"open",15);var v=Jt();let r;var s=u(v);let i;var m=u(s);Y(m,()=>e.summary),o(s);var h=t(t(s,!0));S(h,()=>e.eager,l=>{var f=P(),d=F(f);Y(d,()=>e.children),w(l,f)},l=>{var f=P(),d=F(f);S(d,a,k=>{var c=Xt(),g=u(c);Y(g,()=>e.children),o(c),Wt(3,c,()=>Kt),w(k,c)},null,!0),w(l,f)}),o(v),L(()=>{r=R(v,r,{...e.attrs}),i=R(s,i,{...e.summary_attrs})}),Gt("open","toggle",v,l=>a(l),a),w(n,v),se()}var $t=j('<div class="repo_name svelte-w7xguq"> <!></div>'),ea=j('<div class="description svelte-w7xguq"> </div>'),ta=j('<div class="motto svelte-w7xguq"> </div>'),aa=j('<blockquote class="npm_url svelte-w7xguq"> </blockquote>'),ra=j('<span class="title svelte-w7xguq">homepage</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq"><img> </a></div>',1),na=j('<span class="title svelte-w7xguq">repo</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="repo"> </a></div>',1),sa=j('<span class="title svelte-w7xguq">npm</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="npm"> </a></div>',1),la=j('<span class="title svelte-w7xguq">version</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="version"> </a></div>',1),ia=j('<span class="title svelte-w7xguq">license</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="license"> </a></div>',1),va=j('<span class="title svelte-w7xguq">data</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="data">package.json</a> <a class="chip svelte-w7xguq" title="data">src.json</a></div>',1),oa=j('<div class="logo svelte-w7xguq"><img></div>'),da=j("<li> </li>"),ua=j('<ul class="declarations unstyled svelte-w7xguq"></ul>'),ca=j('<li class="module svelte-w7xguq"><div class="module_content svelte-w7xguq"><a class="chip"> </a> <!></div></li>'),_a=j('<section class="svelte-w7xguq"><menu class="unstyled"></menu></section>'),ha=j("raw data for <code>pkg: Package_Meta</code>",1),fa=j("<pre><code> </code></pre>"),ga=j('<div class="package_detail svelte-w7xguq"><div class="info svelte-w7xguq"><div class="flex flex_1"><div><header class="svelte-w7xguq"><!></header> <!> <!> <!> <!> <section class="properties svelte-w7xguq"><!> <!> <!> <!> <!> <!></section></div></div> <!></div> <!> <section class="svelte-w7xguq"><!></section></div>');function ma(n,e){ne(e,!0);const a=Pe(),v=()=>Ue(We,"$page",a),r=C(()=>e.pkg.package_json),s=C(()=>e.pkg.src_json),i=C(()=>_(s).modules),m=C(()=>_(r).repository?Fe(Ie(Ie(typeof _(r).repository=="string"?_(r).repository:_(r).repository.url,".git"),"/"),"git+"):null),h=C(()=>_(r).license&&_(m)?_(m)+"/blob/main/LICENSE":null),l=(T,y)=>T+"/blob/main/src/lib/"+(y.endsWith(".js")?y.slice(0,-3)+".ts":y),f=C(()=>_(r).exports&&Object.keys(_(r).exports)),d=C(()=>_(r).exports?Object.keys(_(r).exports).map(T=>{const y=Fe(T,"./");return y==="."?"index.js":y}):null);var k=ga(),c=u(k),g=u(c),z=u(g),M=u(z),x=u(M);S(x,()=>e.repo_name,T=>{var y=P(),E=F(y);Y(E,()=>e.repo_name,()=>e.pkg.repo_name),w(T,y)},T=>{var y=$t(),E=u(y),V=t(E);S(V,()=>_(r).glyph,p=>{var A=_t();L(()=>U(A,` ${_(r).glyph??""}`)),w(p,A)}),o(y),L(()=>U(E,e.pkg.repo_name)),w(T,y)}),o(M);var q=t(t(M,!0));S(q,()=>e.children,T=>{var y=P(),E=F(y);Y(E,()=>e.children,()=>e.pkg),w(T,y)});var b=t(t(q,!0));S(b,()=>_(r).description,T=>{var y=P(),E=F(y);S(E,()=>e.description,V=>{var p=P(),A=F(p);Y(A,()=>e.description,()=>_(r).description),w(V,p)},V=>{var p=ea(),A=u(p);o(p),L(()=>U(A,_(r).description)),w(V,p)}),w(T,y)});var H=t(t(b,!0));S(H,()=>_(r).motto,T=>{var y=P(),E=F(y);S(E,()=>e.motto,V=>{var p=P(),A=F(p);Y(A,()=>e.motto,()=>_(r).motto),w(V,p)},V=>{var p=ta(),A=u(p);o(p),L(()=>U(A,_(r).motto)),w(V,p)}),w(T,y)});var N=t(t(H,!0));S(N,()=>e.pkg.npm_url,T=>{var y=P(),E=F(y);S(E,()=>e.npm_url,V=>{var p=P(),A=F(p);Y(A,()=>e.npm_url,()=>e.pkg.npm_url),w(V,p)},V=>{var p=aa(),A=u(p);o(p),L(()=>U(A,`npm i -D ${_(r).name??""}`)),w(V,p)}),w(T,y)});var Z=t(t(N,!0)),D=u(Z);S(D,()=>e.pkg.homepage_url,T=>{var y=P(),E=F(y);S(E,()=>e.homepage_url,V=>{var p=P(),A=F(p);Y(A,()=>e.homepage_url,()=>e.pkg.homepage_url),w(V,p)},V=>{var p=ra(),A=F(p),X=t(t(A,!0)),le=u(X),ee=u(le),ce=t(ee,!0);L(()=>U(ce,` ${Mt(e.pkg.homepage_url)??""}`)),o(le),o(X),L(()=>{W(le,"href",e.pkg.homepage_url),G(le,"selected",e.pkg.homepage_url===v().url.href),W(ee,"src",e.pkg.logo_url),W(ee,"alt",e.pkg.logo_alt),I(ee,"width","16px"),I(ee,"height","16px"),I(ee,"margin-right","var(--space_xs)")}),w(V,p)}),w(T,y)});var K=t(t(D,!0));S(K,()=>e.pkg.repo_url,T=>{var y=na(),E=F(y),V=t(t(E,!0)),p=u(V),A=u(p);o(p),o(V),L(()=>{W(p,"href",e.pkg.repo_url),U(A,`${e.pkg.owner_name??""}/${e.pkg.repo_name??""}`)}),w(T,y)});var B=t(t(K,!0));S(B,()=>e.pkg.npm_url,T=>{var y=sa(),E=F(y),V=t(t(E,!0)),p=u(V),A=u(p);o(p),o(V),L(()=>{W(p,"href",e.pkg.npm_url),U(A,_(r).name)}),w(T,y)});var O=t(t(B,!0));S(O,()=>e.pkg.changelog_url,T=>{var y=la(),E=F(y),V=t(t(E,!0)),p=u(V),A=u(p);o(p),o(V),L(()=>{W(p,"href",e.pkg.changelog_url),U(A,_(r).version)}),w(T,y)});var $=t(t(O,!0));S($,()=>_(h),T=>{var y=ia(),E=F(y),V=t(t(E,!0)),p=u(V),A=u(p);o(p),o(V),L(()=>{W(p,"href",_(h)),U(A,_(r).license)}),w(T,y)});var we=t(t($,!0));S(we,()=>e.pkg.homepage_url,T=>{var y=va(),E=F(y),V=t(t(E,!0)),p=u(V);L(()=>W(p,"href",`${Ce(e.pkg.homepage_url,"/")??""}.well-known/package.json`));var A=t(t(p,!0));L(()=>W(A,"href",`${Ce(e.pkg.homepage_url,"/")??""}.well-known/src.json`)),o(V),w(T,y)}),o(Z),o(z),o(g);var de=t(t(g,!0));S(de,()=>e.pkg.logo_url,T=>{var y=oa(),E=u(y);o(y),L(()=>{W(E,"src",e.pkg.logo_url),W(E,"alt",e.pkg.logo_alt),I(E,"width","var(--size, var(--icon_size_xl2))"),I(E,"height","var(--size, var(--icon_size_xl2))")}),w(T,y)}),o(c);var ie=t(t(c,!0));S(ie,()=>_(d)&&e.pkg.repo_url,T=>{var y=_a(),E=u(y);ze(E,22,()=>_(d),(V,p)=>V,(V,p,A)=>{var X=ca();const le=C(()=>l(e.pkg.repo_url,p)),ee=C(()=>{var J;return(J=_(f))==null?void 0:J[_(A)]}),ce=C(()=>{var J;return _(ee)&&((J=_(i))==null?void 0:J[_(ee)])});L(()=>G(X,"ts",p.endsWith(".js"))),L(()=>G(X,"svelte",p.endsWith(".svelte"))),L(()=>G(X,"css",p.endsWith(".css"))),L(()=>G(X,"json",p.endsWith(".json")));var Te=u(X),_e=u(Te),$e=u(_e);o(_e);var et=t(t(_e,!0));S(et,()=>{var J;return(J=_(ce))==null?void 0:J.declarations.length},J=>{var be=ua();ze(be,21,()=>_(ce).declarations,Ge,(tt,Me,Xa)=>{let at=()=>_(Me).name,rt=()=>_(Me).kind;var he=da(),nt=u(he);o(he),L(()=>{At(he,`declaration chip ${rt()??""}_declaration svelte-w7xguq`),U(nt,at())}),w(tt,he)}),o(be),w(J,be)}),o(Te),o(X),L(()=>{W(_e,"href",_(le)),U($e,p)}),w(V,X)}),o(E),o(y),w(T,y)});var ve=t(t(ie,!0)),ue=u(ve);Qt(ue,{summary:y=>{me();var E=ha();t(F(E,!0)),w(y,E)},children:(y,E)=>{var V=fa(),p=u(V),A=u(p);o(p),o(V),L(()=>U(A,JSON.stringify(e.pkg,null,"	"))),w(y,V)},$$slots:{default:!0}}),o(ve),o(k),w(n,k),se()}var pa=j(", you are here",1),wa=j(", you are here",1),ba=j(", you are here",1),ya=j(`<ul><li>join <a rel="me" href="https://discord.gg/YU5tyeK72X">the Discord</a> community</li> <li><a rel="me" href="https://www.webdevladder.net/">webdevladder.net</a> - realworld webdev with TypeScript and Svelte, YouTube channels <a rel="me" href="https://youtube.com/@webdevladder">@webdevladder</a> and <a rel="me" href="https://youtube.com/@webdevladder_vods">@webdevladder_vods</a><!></li> <li><a rel="me" href="https://www.spiderspace.org/">spiderspace.org</a> - nontechnical design videos where we'll make a social website together with <a href="https://zzz.ryanatkn.com/">Zzz</a> when it's ready, YouTube channel <a rel="me" href="https://youtube.com/@spiderspace_8000">@spiderspace_8000</a><!></li> <li><a rel="me" href="https://www.ryanatkn.com/">ryanatkn.com</a> - my homepage<!></li> <li>GitHub - <a rel="me" href="https://github.com/ryanatkn">@ryanatkn</a> and <a rel="me" href="https://github.com/spiderspace">@spiderspace</a></li> <li>Mastodon as <a rel="me" href="https://mastodon.social/@webdevladder">@webdevladder@mastodon.social</a> and <a rel="me" href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a></li> <li>@webdevladder on <a rel="me" href="https://twitter.com/webdevladder">Twitter</a>, <a rel="me" href="https://www.reddit.com/user/webdevladder/">Reddit</a>, and <a href="https://news.ycombinator.com/user?id=webdevladder">Hacker News</a></li> <li>support me at <a href="https://www.ryanatkn.com/funding">ryanatkn.com/funding</a></li></ul>`);function Ha(n,e){var a=ya(),v=u(a);t(u(v)),me(),o(v);var r=t(t(v,!0)),s=u(r),i=t(t(s,!0)),m=t(t(i,!0)),h=t(m);S(h,()=>e.selected==="webdevladder.net",B=>{var O=pa();w(B,O)}),o(r);var l=t(t(r,!0)),f=u(l),d=t(t(f,!0)),k=t(t(d,!0)),c=t(k);S(c,()=>e.selected==="spiderspace.org",B=>{var O=wa();w(B,O)}),o(l);var g=t(t(l,!0)),z=u(g),M=t(t(z,!0));S(M,()=>e.selected==="ryanatkn.com",B=>{var O=ba();w(B,O)}),o(g);var x=t(t(g,!0)),q=t(u(x));t(t(q,!0)),o(x);var b=t(t(x,!0)),H=t(u(b));t(t(H,!0)),o(b);var N=t(t(b,!0)),Z=t(u(N)),D=t(t(Z,!0));t(t(D,!0)),o(N);var K=t(t(N,!0));t(u(K)),o(K),o(a),L(()=>{G(s,"selected",e.selected==="webdevladder.net"),G(f,"selected",e.selected==="spiderspace.org"),G(z,"selected",e.selected==="ryanatkn.com")}),w(n,a)}var ka=pe("<svg><g><path></path></g><g><path></path><path></path></g></svg>");function xa(n,e){const a=Q(e,"fill",3,"var(--color_g_5)"),v=Q(e,"label",3,"three sleepy z's"),r=C(()=>e.width??e.size),s=C(()=>e.height??e.size);var i=ka();let m;var h=u(i),l=u(h);let f;o(h);var d=t(h),k=u(d);let c;var g=t(k);let z;o(d),o(i),L(()=>{m=R(i,m,{viewBox:"0 0 100 100",...e.attrs,"aria-label":v(),class:e.classes},"svelte-16ciom8",!0),G(i,"inline",e.inline),I(i,"width",_(r),void 0,!0),I(i,"height",_(s),void 0,!0),f=R(l,f,{...e.path_attrs,d:"m 75.29285,61.962268 1.752156,1.914421 14.843359,1.811307 L 74.065203,86.193332 99.966781,85.408255 98.719988,83.648246 85.143565,82.136577 98.430963,62.887945"},"svelte-16ciom8",!0),I(l,"fill",a(),void 0,!0),c=R(k,c,{...e.path_attrs,d:"m 47.636533,44.203704 2.295155,2.48945 25.618425,0.406407 L 45.93783,91.082857 89.425317,93.78003 87.862334,91.36274 61.57861,83.03068 86.244719,42.177019"},"svelte-16ciom8",!0),I(k,"fill",a(),void 0,!0),z=R(g,z,{...e.path_attrs,d:"M 0.62464489,0.27405496 3.9721704,4.0993769 50.515703,10.089712 0.04581262,99.957542 68.009395,98.901532 65.391343,95.487941 24.119119,88.067804 66.301842,2.2896897"},"svelte-16ciom8",!0),I(g,"fill",a(),void 0,!0)}),w(n,i)}var Va=pe("<svg><path></path></svg>");function Je(n,e){const a=Q(e,"fill",3,"var(--text_color, #000)"),v=Q(e,"label",3,"a friendly spider facing you"),r=C(()=>e.width??e.size),s=C(()=>e.height??e.size);var i=Va();let m;var h=u(i);let l;o(i),L(()=>{m=R(i,m,{viewBox:"0 0 100 100",...e.attrs,"aria-label":v(),class:e.classes},"svelte-16ciom8",!0),G(i,"inline",e.inline),I(i,"width",_(r),void 0,!0),I(i,"height",_(s),void 0,!0),l=R(h,l,{...e.path_attrs,d:"M 26.253917,88.532336 29.904106,71.394855 40.667193,53.342811 40.258534,49.99234 38.417407,49.000991 22.876908,50.369035 9.4865496,53.880193 2.3019024,57.978424 0.42708056,57.27994 7.2642726,51.086985 20.811326,45.373351 37.960128,42.356792 39.354818,40.107008 38.229925,38.149883 26.030989,27.105568 14.46539,21.861786 8.0479986,18.615387 l -0.41428,-1.710463 8.2789464,1.499862 13.012873,5.003724 13.447448,10.696856 1.680801,-0.729547 0.222439,-1.343157 -3.983998,-12.128053 -5.730215,-9.573597 -0.823624,-5.1744052 1.16944,-1.165102 2.604334,6.3355162 6.612025,7.08777 4.874534,11.55989 2.800804,0.515574 4.48815,-1.359246 1.521623,-8.687062 5.685014,-8.620764 2.75965,-6.8316782 1.094578,1.128569 -1.293029,5.4222362 -4.084776,11.06803 -0.484994,8.377408 0.194311,1.192896 1.42954,1.700726 11.563936,-10.644623 9.878262,-8.331535 8.732915,-3.390708 -0.387305,1.402757 -5.294686,3.023816 -10.445054,10.705792 -9.561599,13.627899 -0.438945,1.602755 1.001398,1.666754 17.376932,3.986302 9.537375,6.940531 4.325785,4.636405 0.211208,1.557106 -6.15842,-4.279925 -10.413771,-5.155697 -15.838715,-1.696223 -0.83461,1.144484 0.774499,2.593247 9.737644,16.194355 3.925704,17.214082 0.07146,10.277289 -1.706242,1.13628 -2.009721,-9.21637 -5.894265,-16.88027 -12.292087,-17.295813 -4.177778,-0.585888 -7.294671,2.935716 -11.138052,16.645915 -6.462422,17.752509 -1.634756,7.206641 -2.070766,-1.52923 z",fill:a()},"svelte-16ciom8",!0)}),w(n,i)}function za(n,e){ne(e,!0);const a=Q(e,"fill",3,"var(--color_b_5)"),v=Q(e,"label",3,"a fuzzy tuft of green moss"),r="transform: scaleX(-1) rotate(180deg)",s=C(()=>{var m;return(m=e.attrs)!=null&&m.style?r+"; "+e.attrs.style:r});var i=C(()=>({...e.attrs,style:_(s)}));Je(n,{get fill(){return a()},get size(){return e.size},get width(){return e.width},get height(){return e.height},get label(){return v()},get inline(){return e.inline},get classes(){return e.classes},get path_attrs(){return e.path_attrs},get attrs(){return _(i)}}),se()}class Qe extends Error{constructor(e,a=`Unreachable case: ${e}`){super(a)}}const qa=n=>{switch(n){case"fuz":return"#6a3e1b";case"fuz_code":return"#e03e81";case"fuz_blog":return"#b19a25";case"fuz_mastodon":return"#6a40bf";case"fuz_gitops":return"#397fc6";default:throw new Qe(n)}},Ea=n=>{switch(n){case"fuz":return"blue";case"fuz_code":return"pink";case"fuz_blog":return"yellow";case"fuz_mastodon":return"purple";case"fuz_gitops":return"blue";default:throw new Qe(n)}};function ja(n,e){ne(e,!0);const a=C(()=>e.project?qa(e.project):e.fill??"var(--color_f_5)"),v=C(()=>e.label??(e.project?`a friendly ${Ea(e.project)} spider facing you`:e.fill?"a friendly spider facing you":"a friendly brown spider facing you"));Je(n,{get fill(){return _(a)},get size(){return e.size},get width(){return e.width},get height(){return e.height},get label(){return _(v)},get inline(){return e.inline},get classes(){return e.classes},get path_attrs(){return e.path_attrs},get attrs(){return e.attrs}}),se()}var Ta=pe("<svg><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>");function Ma(n,e){const a=Q(e,"label",3,"a pixelated green oak acorn with a glint of sun"),v=C(()=>e.width??e.size),r=C(()=>e.height??e.size);var s=Ta();let i;var m=u(s);let h;var l=t(m);let f;var d=t(l);let k;var c=t(d);let g;var z=t(c);let M;var x=t(z);let q;var b=t(x);let H;o(s),L(()=>{i=R(s,i,{viewBox:"0 0 100 100",...e.attrs,"aria-label":a(),class:e.classes},"svelte-16ciom8",!0),G(s,"inline",e.inline),I(s,"width",_(v),void 0,!0),I(s,"height",_(r),void 0,!0),h=R(m,h,{...e.path_attrs,d:"m 24.035592,57.306905 v -14.5 h 16.329497 v 14.25 z"},"svelte-16ciom8",!0),I(m,"fill","#6f974c",void 0,!0),f=R(l,f,{...e.path_attrs,d:"M 43.75,93.75 H 37.5 V 87.5 H 31.25 V 81.25 H 25 V 75 H 18.75 V 62.5 H 12.5 V 50 H 6.25 V 43.75 H 4 v -21 L 22.75,16.5 h 40.5 l 0.5,61.5 -5,-0.75 -0.25,16.5 h -2.25 l -4,2.25 -2.24617,4 H 43.75 Z M 37.5,50 H 31.25 V 43.75 H 25 v 12.5 h 12.5 z"},"svelte-16ciom8",!0),I(l,"fill","#5e853f",void 0,!0),k=R(d,k,{...e.path_attrs,d:"m 50,93.75 h 6.25 V 75 H 62.5 V 50 H 56.25 V 37.5 H 50 V 31.25 H 43.75 V 25 H 31.25 V 18.75 H 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 v -25 H 6.25 V 12.5 h 12.5 V 6.25 H 37.5 V 0 h 25 v 6.25 h 18.75 v 6.25 h 12.5 v 6.25 H 100 v 25 H 93.75 V 50 H 87.5 V 62.5 H 81.25 V 75 H 75 v 6.25 H 68.75 V 87.5 H 62.5 v 6.25 H 56.25 V 100 H 50 Z"},"svelte-16ciom8",!0),I(d,"fill","#6f492b",void 0,!0),g=R(c,g,{...e.path_attrs,d:"m 50,93.75 h 6.25 V 75 H 62.5 V 50 H 56.25 V 37.5 H 50 V 31.25 H 43.75 V 25 H 31.25 V 18.75 H 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 V 25 H 12.5 V 18.75 H 25 V 12.5 H 43.75 V 6.25 h 12.5 V 12.5 H 75 v 6.25 H 87.5 V 25 H 100 V 43.75 H 93.75 V 50 H 87.5 V 62.5 H 81.25 V 75 H 75 v 6.25 H 68.75 V 87.5 H 62.5 v 6.25 H 56.25 V 100 H 50 Z"},"svelte-16ciom8",!0),I(c,"fill","#3b730f",void 0,!0),M=R(z,M,{...e.path_attrs,d:"M 87.5,37.5 H 81.25 V 31.25 H 68.75 V 25 H 62.5 V 18.75 H 43.75 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 V 25 H 12.5 V 18.75 H 25 V 12.5 H 43.75 V 6.25 h 12.5 V 12.5 H 75 v 6.25 H 87.5 V 25 H 100 V 43.75 H 93.75 V 50 H 87.5 Z"},"svelte-16ciom8",!0),I(z,"fill","#473323",void 0,!0),q=R(x,q,{...e.path_attrs,d:"M 87.5,37.5 H 81.25 V 31.25 H 68.75 V 25 H 62.5 v -6.25 h -25 V 12.5 H 50 V 6.25 h 6.25 v 6.25 h 12.5 v 6.25 h 12.5 V 25 h 12.5 v 6.25 H 100 v 12.5 H 93.75 V 50 H 87.5 Z"},"svelte-16ciom8",!0),I(x,"fill","#2e6006",void 0,!0),H=R(b,H,{...e.path_attrs,d:"M 93.75,31.25 H 87.5 V 25 h 6.25 v 6.25 H 100 v 12.5 H 93.75 Z M 75,18.75 h 6.25 V 25 H 75 Z M 37.5,12.5 H 50 V 6.25 h 6.25 v 6.25 h 12.5 v 6.25 H 53.125 37.5 Z"},"svelte-16ciom8",!0),I(b,"fill","#34251a",void 0,!0)}),w(n,s)}var Aa=pe("<svg><g><path></path></g></svg>");function La(n,e){const a=Q(e,"fill",3,"#f67c4c"),v=Q(e,"label",3,"a friendly pixelated spider facing you"),r=C(()=>e.width??e.size),s=C(()=>e.height??e.size);var i=Aa();let m;var h=u(i),l=u(h);let f;o(h),o(i),L(()=>{m=R(i,m,{viewBox:"0 0 100 100",...e.attrs,"aria-label":v(),class:e.classes},void 0,!0),I(i,"width",_(r),void 0,!0),I(i,"height",_(s),void 0,!0),f=R(l,f,{...e.path_attrs,d:"m 25,81.200002 h 6.2 v -12.5 h 6.3 v -18.7 h -6.3 v 6.2 H 12.5 v 6.3 H 0 v -6.3 h 6.2 v -6.2 H 25 v -6.3 h 12.5 v -6.2 h -6.3 v -6.3 H 18.7 v -6.2 H 6.2 v -6.3 H 25 v 6.3 h 12.5 v -6.3 H 31.2 V 6.2 h 6.3 v 6.300002 h 6.2 V 31.200001 H 56.2 V 12.500002 h 6.3 V 6.2 h 6.2 v 12.500001 h -6.2 v 18.800001 h 6.2 v -12.5 h 12.5 v -12.5 h 12.5 v 6.2 h -6.2 v 12.5 H 75 v 12.5 h 6.2 v 6.3 h 12.5 v 6.2 h 6.299997 v 6.3 H 87.5 v -6.3 H 75 v -6.2 h -6.3 v 12.5 H 75 v 12.5 h 6.2 V 99.99999 H 75 V 81.200002 h -6.3 v -12.5 h -6.2 v -12.5 H 43.7 v 18.8 h -6.2 v 12.5 H 31.2 V 99.99999 H 25 Z"},void 0,!0),I(l,"fill",a(),void 0,!0)}),w(n,i)}var Sa=j('<a class="project_link svelte-1bpnvy9" title="Zzz - social web app framework" href="https://zzz.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Zzz</span></a> <a class="project_link svelte-1bpnvy9" title="Moss - CSS framework" href="https://moss.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Moss</span></a> <a class="project_link svelte-1bpnvy9" title="Fuz - Svelte UI library" href="https://www.fuz.dev/"><!><span class="name svelte-1bpnvy9">Fuz</span></a> <a class="project_link svelte-1bpnvy9" title="Gro - task runner and toolkit extending SvelteKit" href="https://gro.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Gro</span></a> <a class="project_link svelte-1bpnvy9" title="fuz_template - a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro" href="https://template.fuz.dev/"><!><span class="name svelte-1bpnvy9">fuz_template</span></a>',1);function Ca(n){const e="var(--icon_size_lg)";var a=Sa(),v=F(a),r=u(v);xa(r,{size:e}),t(r),o(v);var s=t(t(v,!0)),i=u(s);za(i,{size:e}),t(i),o(s);var m=t(t(s,!0)),h=u(m);ja(h,{size:e}),t(h),o(m);var l=t(t(m,!0)),f=u(l);Ma(f,{size:e}),t(f),o(l);var d=t(t(l,!0)),k=u(d);La(k,{size:e}),t(k),o(d),w(n,a)}var Fa=j('<h2 class="mt_0 mb_lg">Links</h2>'),Ia=j('<section class="panel p_lg"><!> <!> <div class="box row"><!></div></section>');function Na(n,e){ne(e,!0);var a=Ia(),v=u(a);S(v,()=>e.children,m=>{var h=P(),l=F(h);Y(l,()=>e.children),w(m,h)},m=>{var h=Fa();w(m,h)});var r=t(t(v,!0));Ha(r,{});var s=t(t(r,!0)),i=u(s);Ca(i),o(s),o(a),w(n,a),se()}const Za=n=>n.split("/").filter(e=>e&&e!=="."&&e!==".."),Da=n=>{const e=[],a=Za(n);a.length&&e.push({type:"separator",path:"/"});let v="";for(let r=0;r<a.length;r++){const s=a[r];v+="/"+s,e.push({type:"piece",name:s,path:v}),r!==a.length-1&&e.push({type:"separator",path:v})}return e};var Ra=j("•",1),Ba=j('<a class="svelte-44vg7j"> </a>'),Oa=j("/",1),Pa=j('<span class="separator svelte-44vg7j"><!></span>'),Ua=j('<div class="breadcrumb svelte-44vg7j"><a class="svelte-44vg7j"><!></a><!></div>');function De(n,e){ne(e,!0);const a=Pe(),v=()=>Ue(We,"$page",a),r=C(()=>e.path??v().url.pathname),s=C(()=>e.selected_path===null?null:e.selected_path??_(r)),i=C(()=>e.base_path??It),m=C(()=>Da(_(r))),h=C(()=>_(i)||"/");var l=Ua(),f=u(l),d=u(f);S(d,()=>e.children,c=>{var g=P(),z=F(g);Y(z,()=>e.children),w(c,g)},c=>{var g=Ra();w(c,g)}),o(f);var k=t(f);ze(k,17,()=>_(m),Ge,(c,g,z)=>{var M=P(),x=F(M);S(x,()=>_(g).type==="piece",q=>{var b=Ba(),H=u(b);o(b),L(()=>{W(b,"href",_(i)+_(g).path),G(b,"selected",_(g).path===_(s)),U(H,_(g).name)}),w(q,b)},q=>{var b=Pa(),H=u(b);S(H,()=>e.separator,N=>{var Z=P(),D=F(Z);Y(D,()=>e.separator),w(N,Z)},N=>{var Z=Oa();w(N,Z)}),o(b),w(q,b)}),w(c,M)}),o(l),L(()=>{W(f,"href",_(h)),G(f,"selected",_(h)===_(s))}),w(n,l),se()}var Wa=j("🎨",1),Ga=j("🎨",1),Ya=j('<div class="mb_lg"><!></div>'),Ka=j('<main class="width_md svelte-1pyh03k"><section class="box svelte-1pyh03k"><header><h1 class="mt_xl5 svelte-1pyh03k"> </h1></header> <!></section> <!> <section class="box w_100 mb_lg svelte-1pyh03k"><div class="panel p_md width_md"><!></div></section> <section class="box svelte-1pyh03k"><!></section></main>');function sr(n,e){ne(e,!0);const a=Lt(Ft,Ct);var v=Ka(),r=u(v),s=u(r),i=u(s),m=u(i);o(i),o(s);var h=t(t(s,!0));De(h,{children:(z,M)=>{me();var x=Wa();w(z,x)},$$slots:{default:!0}}),o(r);var l=t(t(r,!0));Na(l,{});var f=t(t(l,!0)),d=u(f),k=u(d);ma(k,{pkg:a}),o(d),o(f);var c=t(t(f,!0)),g=u(c);St(g,{pkg:a,children:(z,M)=>{var x=Ya(),q=u(x);De(q,{children:(b,H)=>{me();var N=Ga();w(b,N)},$$slots:{default:!0}}),o(x),w(z,x)},$$slots:{default:!0}}),o(c),o(v),L(()=>U(m,a.repo_name)),w(n,v),se()}export{sr as component};