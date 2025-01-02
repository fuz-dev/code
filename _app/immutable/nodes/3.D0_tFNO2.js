import{b as v,t as F,e as O,d as $}from"../chunks/disclose-version.Bjnog2dZ.js";import{E as aa,aD as ta,aE as ra,ai as sa,a as ia,C as xe,aF as na,G as oa,n as Z,aG as va,z as be,A as qe,B as la,aj as da,a3 as ca,t as S,p as oe,o as ve,q as n,r as s,v as p,m as N,x as d,w as U,y as W}from"../chunks/runtime.DDLLKe4V.js";import{f as _a,s as A}from"../chunks/render.Apy9DF0D.js";import{p as ua,i as E,s as fa,a as ga}from"../chunks/props.B5wJezyX.js";import{d as je,e as Fe,s as G,t as J,a as ze,i as ma,f as pa,b as Se,p as ha,c as Ee}from"../chunks/string.qdsbXVjl.js";import{s as B}from"../chunks/snippet.BCA9wPTx.js";import{f as wa,s as ee,S as ie,g as ka,m as ya,c as xa,d as ba,p as qa,L as ja,a as Fa,b as za}from"../chunks/package.Bj1RfXNx.js";import{B as Ce}from"../chunks/Breadcrumb.CMtz_gkP.js";const Sa=()=>performance.now(),D={tick:l=>requestAnimationFrame(l),now:()=>Sa(),tasks:new Set};function Te(){const l=D.now();D.tasks.forEach(e=>{e.c(l)||(D.tasks.delete(e),e.f())}),D.tasks.size!==0&&D.tick(Te)}function Ea(l){let e;return D.tasks.size===0&&D.tick(Te),{promise:new Promise(i=>{D.tasks.add(e={c:l,f:i})}),abort(){D.tasks.delete(e)}}}function ne(l,e){l.dispatchEvent(new CustomEvent(e))}function Ca(l){if(l==="float")return"cssFloat";if(l==="offset")return"cssOffset";if(l.startsWith("--"))return l;const e=l.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(i=>i[0].toUpperCase()+i.slice(1)).join("")}function Le(l){const e={},i=l.split(";");for(const o of i){const[t,c]=o.split(":");if(!t||c===void 0)break;const k=Ca(t.trim());e[k]=c.trim()}return e}const La=l=>l;function Ta(l,e,i,o){var t=(l&va)!==0,c="both",k,z=e.inert,b,u;function f(){var x=la,L=xe;be(null),qe(null);try{return k??(k=i()(e,(o==null?void 0:o())??{},{direction:c}))}finally{be(x),qe(L)}}var w={is_global:t,in(){e.inert=z,ne(e,"introstart"),b=de(e,f(),u,1,()=>{ne(e,"introend"),b==null||b.abort(),b=k=void 0})},out(x){e.inert=!0,ne(e,"outrostart"),u=de(e,f(),b,0,()=>{ne(e,"outroend"),x==null||x()})},stop:()=>{b==null||b.abort(),u==null||u.abort()}},q=xe;if((q.transitions??(q.transitions=[])).push(w),_a){var T=t;if(!T){for(var C=q.parent;C&&C.f&aa;)for(;(C=C.parent)&&!(C.f&ta););T=!C||(C.f&ra)!==0}T&&sa(()=>{ia(()=>w.in())})}}function de(l,e,i,o,t){var c=o===1;if(na(e)){var k,z=!1;return oa(()=>{if(!z){var L=e({direction:c?"in":"out"});k=de(l,L,i,o,t)}}),{abort:()=>{z=!0,k==null||k.abort()},deactivate:()=>k.deactivate(),reset:()=>k.reset(),t:()=>k.t()}}if(i==null||i.deactivate(),!(e!=null&&e.duration))return t(),{abort:Z,deactivate:Z,reset:Z,t:()=>o};const{delay:b=0,css:u,tick:f,easing:w=La}=e;var q=[];if(c&&i===void 0&&(f&&f(0,1),u)){var T=Le(u(0,1));q.push(T,T)}var C=()=>1-o,x=l.animate(q,{duration:b});return x.onfinish=()=>{var L=(i==null?void 0:i.t())??1-o;i==null||i.abort();var j=o-L,I=e.duration*Math.abs(j),V=[];if(I>0){if(u)for(var Y=Math.ceil(I/16.666666666666668),K=0;K<=Y;K+=1){var ae=L+j*w(K/Y),te=u(ae,1-ae);V.push(Le(te))}C=()=>{var Q=x.currentTime;return L+j*w(Q/I)},f&&Ea(()=>{if(x.playState!=="running")return!1;var Q=C();return f(Q,1-Q),!0})}x=l.animate(V,{duration:I,fill:"forwards"}),x.onfinish=()=>{C=()=>o,f==null||f(o,1-o),t()}},{abort:()=>{x&&(x.cancel(),x.effect=null,x.onfinish=Z)},deactivate:()=>{t=Z},reset:()=>{o===0&&(f==null||f(1,0))},t:()=>C()}}function Na(l,e,i,o,t){var c=()=>{o(i[l])};i.addEventListener(e,c),t?da(()=>{i[l]=t()}):c(),(i===document.body||i===window||i===document)&&ca(()=>{i.removeEventListener(e,c)})}function Pa(l){const e=l-1;return e*e*e+1}function Wa(l,{delay:e=0,duration:i=400,easing:o=Pa,axis:t="y"}={}){const c=getComputedStyle(l),k=+c.opacity,z=t==="y"?"height":"width",b=parseFloat(c[z]),u=t==="y"?["top","bottom"]:["left","right"],f=u.map(j=>`${j[0].toUpperCase()}${j.slice(1)}`),w=parseFloat(c[`padding${f[0]}`]),q=parseFloat(c[`padding${f[1]}`]),T=parseFloat(c[`margin${f[0]}`]),C=parseFloat(c[`margin${f[1]}`]),x=parseFloat(c[`border${f[0]}Width`]),L=parseFloat(c[`border${f[1]}Width`]);return{delay:e,duration:i,easing:o,css:j=>`overflow: hidden;opacity: ${Math.min(j*20,1)*k};${z}: ${j*b}px;padding-${u[0]}: ${j*w}px;padding-${u[1]}: ${j*q}px;margin-${u[0]}: ${j*T}px;margin-${u[1]}: ${j*C}px;border-${u[0]}-width: ${j*x}px;border-${u[1]}-width: ${j*L}px;`}}var Aa=F("<div><!></div>"),Ga=F("<details><summary><!></summary> <!></details>");function Oa(l,e){ve(e,!0);let i=ua(e,"open",15);var o=Ga();let t;var c=n(o);let k;var z=n(c);B(z,()=>e.summary),s(c);var b=p(c,2);{var u=w=>{var q=O(),T=N(q);B(T,()=>e.children),v(w,q)},f=w=>{var q=O(),T=N(q);{var C=x=>{var L=Aa(),j=n(L);B(j,()=>e.children),s(L),Ta(3,L,()=>Wa),v(x,L)};E(T,x=>{i()&&x(C)},!0)}v(w,q)};E(b,w=>{e.eager?w(u):w(f,!1)})}s(o),S(()=>{t=je(o,t,{...e.attrs}),k=je(c,k,{...e.summary_attrs})}),Na("open","toggle",o,i,i),v(l,o),oe()}var Ba=F('<div class="repo_name svelte-w7xguq"> <!></div>'),Ma=F('<div class="description svelte-w7xguq"> </div>'),Ra=F('<div class="motto svelte-w7xguq"> </div>'),Da=F('<blockquote class="npm_url svelte-w7xguq"> </blockquote>'),Ia=F('<span class="title svelte-w7xguq">homepage</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq"><img> </a></div>',1),Ka=F('<span class="title svelte-w7xguq">repo</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="repo"> </a></div>',1),Ua=F('<span class="title svelte-w7xguq">npm</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="npm"> </a></div>',1),Ha=F('<span class="title svelte-w7xguq">version</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="version"> </a></div>',1),Ja=F('<span class="title svelte-w7xguq">license</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="license"> </a></div>',1),Va=F('<span class="title svelte-w7xguq">data</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="data">package.json</a> <a class="chip svelte-w7xguq" title="data">src.json</a></div>',1),Ya=F('<div class="logo svelte-w7xguq"><img></div>'),Qa=F("<li> </li>"),Xa=F('<ul class="declarations unstyled svelte-w7xguq"></ul>'),Za=F('<li class="module svelte-w7xguq"><div class="module_content svelte-w7xguq"><a class="chip"> </a> <!></div></li>'),$a=F('<section class="svelte-w7xguq"><menu class="unstyled"></menu></section>'),et=F("<pre><code> </code></pre>"),at=F('<div class="package_detail svelte-w7xguq"><div class="info svelte-w7xguq"><div class="flex flex_1"><div><header class="svelte-w7xguq"><!></header> <!> <!> <!> <!> <section class="properties svelte-w7xguq"><!> <!> <!> <!> <!> <!></section></div></div> <!></div> <!> <section class="svelte-w7xguq"><!></section></div>');function tt(l,e){ve(e,!0);const i=fa(),o=()=>ga(ha,"$page",i),t=W(()=>e.pkg.package_json),c=W(()=>e.pkg.src_json),k=W(()=>d(c).modules),z=W(()=>d(t).repository?Se(Ee(Ee(typeof d(t).repository=="string"?d(t).repository:d(t).repository.url,".git"),"/"),"git+"):null),b=W(()=>d(t).license&&d(z)?d(z)+"/blob/main/LICENSE":null),u=(a,r)=>a+"/blob/main/src/lib/"+(r.endsWith(".js")?r.slice(0,-3)+".ts":r),f=W(()=>d(t).exports&&Object.keys(d(t).exports)),w=W(()=>d(t).exports?Object.keys(d(t).exports).map(a=>{const r=Se(a,"./");return r==="."?"index.js":r}):null);var q=at(),T=n(q),C=n(T),x=n(C),L=n(x),j=n(L);{var I=a=>{var r=O(),_=N(r);B(_,()=>e.repo_name,()=>e.pkg.repo_name),v(a,r)},V=a=>{var r=Ba(),_=n(r,!0),m=p(_);{var y=h=>{var g=$();S(()=>A(g,` ${d(t).glyph??""}`)),v(h,g)};E(m,h=>{d(t).glyph&&h(y)})}s(r),S(()=>A(_,e.pkg.repo_name)),v(a,r)};E(j,a=>{e.repo_name?a(I):a(V,!1)})}s(L);var Y=p(L,2);B(Y,()=>e.children??Z,()=>e.pkg);var K=p(Y,2);{var ae=a=>{var r=O(),_=N(r);{var m=h=>{var g=O(),P=N(g);B(P,()=>e.description,()=>d(t).description),v(h,g)},y=h=>{var g=Ma(),P=n(g,!0);s(g),S(()=>A(P,d(t).description)),v(h,g)};E(_,h=>{e.description?h(m):h(y,!1)})}v(a,r)};E(K,a=>{d(t).description&&a(ae)})}var te=p(K,2);{var Q=a=>{var r=O(),_=N(r);{var m=h=>{var g=O(),P=N(g);B(P,()=>e.motto,()=>d(t).motto),v(h,g)},y=h=>{var g=Ra(),P=n(g,!0);s(g),S(()=>A(P,d(t).motto)),v(h,g)};E(_,h=>{e.motto?h(m):h(y,!1)})}v(a,r)};E(te,a=>{d(t).motto&&a(Q)})}var ce=p(te,2);{var Ne=a=>{var r=O(),_=N(r);{var m=h=>{var g=O(),P=N(g);B(P,()=>e.npm_url,()=>e.pkg.npm_url),v(h,g)},y=h=>{var g=Da(),P=n(g);s(g),S(()=>A(P,`npm i -D ${d(t).name??""}`)),v(h,g)};E(_,h=>{e.npm_url?h(m):h(y,!1)})}v(a,r)};E(ce,a=>{e.pkg.npm_url&&a(Ne)})}var _e=p(ce,2),ue=n(_e);{var Pe=a=>{var r=O(),_=N(r);{var m=h=>{var g=O(),P=N(g);B(P,()=>e.homepage_url,()=>e.pkg.homepage_url),v(h,g)},y=h=>{var g=Ia(),P=p(N(g),2),H=n(P),M=n(H),le=p(M);S(()=>A(le,` ${wa(e.pkg.homepage_url)??""}`)),s(H),s(P),S(()=>{G(H,"href",e.pkg.homepage_url),J(H,"selected",e.pkg.homepage_url===o().url.href),G(M,"src",e.pkg.logo_url),G(M,"alt",e.pkg.logo_alt),ee(M,"width","16px"),ee(M,"height","16px"),ee(M,"margin-right","var(--space_xs)")}),v(h,g)};E(_,h=>{e.homepage_url?h(m):h(y,!1)})}v(a,r)};E(ue,a=>{e.pkg.homepage_url&&a(Pe)})}var fe=p(ue,2);{var We=a=>{var r=Ka(),_=p(N(r),2),m=n(_),y=n(m);s(m),s(_),S(()=>{G(m,"href",e.pkg.repo_url),A(y,`${e.pkg.owner_name??""}/${e.pkg.repo_name??""}`)}),v(a,r)};E(fe,a=>{e.pkg.repo_url&&a(We)})}var ge=p(fe,2);{var Ae=a=>{var r=Ua(),_=p(N(r),2),m=n(_),y=n(m,!0);s(m),s(_),S(()=>{G(m,"href",e.pkg.npm_url),A(y,d(t).name)}),v(a,r)};E(ge,a=>{e.pkg.npm_url&&a(Ae)})}var me=p(ge,2);{var Ge=a=>{var r=Ha(),_=p(N(r),2),m=n(_),y=n(m,!0);s(m),s(_),S(()=>{G(m,"href",e.pkg.changelog_url),A(y,d(t).version)}),v(a,r)};E(me,a=>{e.pkg.changelog_url&&a(Ge)})}var pe=p(me,2);{var Oe=a=>{var r=Ja(),_=p(N(r),2),m=n(_),y=n(m,!0);s(m),s(_),S(()=>{G(m,"href",d(b)),A(y,d(t).license)}),v(a,r)};E(pe,a=>{d(b)&&a(Oe)})}var Be=p(pe,2);{var Me=a=>{var r=Va(),_=p(N(r),2),m=n(_);S(()=>G(m,"href",`${ze(e.pkg.homepage_url,"/")??""}.well-known/package.json`));var y=p(m,2);S(()=>G(y,"href",`${ze(e.pkg.homepage_url,"/")??""}.well-known/src.json`)),s(_),v(a,r)};E(Be,a=>{e.pkg.homepage_url&&a(Me)})}s(_e),s(x),s(C);var Re=p(C,2);{var De=a=>{var r=Ya(),_=n(r);s(r),S(()=>{G(_,"src",e.pkg.logo_url),G(_,"alt",e.pkg.logo_alt),ee(_,"width","var(--size, var(--icon_size_xl2))"),ee(_,"height","var(--size, var(--icon_size_xl2))")}),v(a,r)};E(Re,a=>{e.pkg.logo_url&&a(De)})}s(T);var he=p(T,2);{var Ie=a=>{var r=$a(),_=n(r);Fe(_,22,()=>d(w),m=>m,(m,y,h)=>{var g=Za();const P=W(()=>u(e.pkg.repo_url,y)),H=W(()=>{var R;return(R=d(f))==null?void 0:R[d(h)]}),M=W(()=>{var R;return d(H)?(R=d(k))==null?void 0:R[d(H)]:void 0}),le=W(()=>y.endsWith(".js"));S(()=>J(g,"ts",d(le)));const Ue=W(()=>y.endsWith(".svelte"));S(()=>J(g,"svelte",d(Ue)));const He=W(()=>y.endsWith(".css"));S(()=>J(g,"css",d(He)));const Je=W(()=>y.endsWith(".json"));S(()=>J(g,"json",d(Je)));var ke=n(g),re=n(ke),Ve=n(re,!0);s(re);var Ye=p(re,2);{var Qe=R=>{var X=Xa();Fe(X,21,()=>d(M).declarations,ma,(Xe,ye)=>{let Ze=()=>d(ye).name,$e=()=>d(ye).kind;var se=Qa(),ea=n(se,!0);s(se),S(()=>{pa(se,`declaration chip ${$e()??""}_declaration svelte-w7xguq`),A(ea,Ze())}),v(Xe,se)}),s(X),v(R,X)};E(Ye,R=>{var X;(X=d(M))!=null&&X.declarations.length&&R(Qe)})}s(ke),s(g),S(()=>{G(re,"href",d(P)),A(Ve,y)}),v(m,g)}),s(_),s(r),v(a,r)};E(he,a=>{d(w)&&e.pkg.repo_url&&a(Ie)})}var we=p(he,2),Ke=n(we);Oa(Ke,{summary:r=>{U();var _=$("raw package metadata");v(r,_)},children:(r,_)=>{var m=et(),y=n(m),h=n(y,!0);S(()=>A(h,JSON.stringify(e.pkg,null,"	"))),s(y),s(m),v(r,m)},$$slots:{summary:!0,default:!0}}),s(we),s(q),v(l,q),oe()}var rt=F('<ul><li><a rel="me" href="https://www.webdevladder.net/">webdevladder.net</a> - realworld webdev with TypeScript and Svelte, <a href="https://www.webdevladder.net/blog">blog</a> and YouTube channels <a rel="me" href="https://youtube.com/@webdevladder">@webdevladder</a> and <a rel="me" href="https://youtube.com/@webdevladder_vods">@webdevladder_vods</a><!></li> <li><a rel="me" href="https://www.ryanatkn.com/">ryanatkn.com</a> - my homepage<!></li> <li>GitHub as <a rel="me" href="https://github.com/ryanatkn">@ryanatkn</a> and Bluesky as <a href="https://bsky.app/profile/ryanatkn.com">@ryanatkn.com</a></li> <li>Mastodon as <a rel="me" href="https://fosstodon.org/@ryanatkn">@ryanatkn@fosstodon.org</a>, <a rel="me" href="https://fosstodon.org/@webdevladder">@webdevladder@fosstodon.org</a> and <a rel="me" href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a></li> <li>@webdevladder on <a rel="me" href="https://www.reddit.com/user/webdevladder/">Reddit</a> and <a href="https://news.ycombinator.com/user?id=webdevladder">Hacker News</a></li></ul>');function st(l,e){var i=rt(),o=n(i),t=n(o),c=p(t,7);{var k=w=>{var q=$(", you are here");v(w,q)};E(c,w=>{e.selected==="webdevladder.net"&&w(k)})}s(o);var z=p(o,2),b=n(z),u=p(b,2);{var f=w=>{var q=$(", you are here");v(w,q)};E(u,w=>{e.selected==="ryanatkn.com"&&w(f)})}s(z),U(6),s(i),S(()=>{J(t,"selected",e.selected==="webdevladder.net"),J(b,"selected",e.selected==="ryanatkn.com")}),v(l,i)}var it=F('<a class="project_link svelte-1bpnvy9" title="Gro - task runner and toolkit extending SvelteKit" href="https://gro.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Gro</span></a> <a class="project_link svelte-1bpnvy9" title="Moss - CSS framework" href="https://moss.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Moss</span></a> <a class="project_link svelte-1bpnvy9" title="Fuz - Svelte UI library" href="https://www.fuz.dev/"><!><span class="name svelte-1bpnvy9">Fuz</span></a> <a class="project_link svelte-1bpnvy9" title="fuz_template - a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro" href="https://template.fuz.dev/"><!><span class="name svelte-1bpnvy9">fuz_template</span></a>',1);function nt(l){const e="var(--icon_size_lg)";var i=it(),o=N(i),t=n(o);ie(t,{data:ka,size:e}),U(),s(o);var c=p(o,2),k=n(c);ie(k,{data:ya,size:e}),U(),s(c);var z=p(c,2),b=n(z);ie(b,{data:xa,size:e}),U(),s(z);var u=p(z,2),f=n(u);ie(f,{data:ba,size:e}),U(),s(u),v(l,i)}var ot=F('<h2 class="mt_0 mb_lg">Links</h2>'),vt=F('<section class="panel p_lg"><!> <!> <div class="box row"><!></div></section>');function lt(l,e){ve(e,!0);var i=vt(),o=n(i);{var t=u=>{var f=O(),w=N(f);B(w,()=>e.children),v(u,f)},c=u=>{var f=ot();v(u,f)};E(o,u=>{e.children?u(t):u(c,!1)})}var k=p(o,2);st(k,{});var z=p(k,2),b=n(z);nt(b),s(z),s(i),v(l,i),oe()}var dt=F('<div class="mb_lg"><!></div>'),ct=F('<main class="width_md svelte-1pyh03k"><section class="box svelte-1pyh03k"><header><h1 class="mt_xl5 svelte-1pyh03k"> </h1></header> <!></section> <!> <section class="box w_100 mb_lg svelte-1pyh03k"><div class="panel p_md width_md"><!></div></section> <section class="box svelte-1pyh03k"><!></section></main>');function kt(l,e){ve(e,!0);const i=qa(za,Fa);var o=ct(),t=n(o),c=n(t),k=n(c),z=n(k,!0);s(k),s(c);var b=p(c,2);Ce(b,{children:(x,L)=>{U();var j=$("🎨");v(x,j)},$$slots:{default:!0}}),s(t);var u=p(t,2);lt(u,{});var f=p(u,2),w=n(f),q=n(w);tt(q,{pkg:i}),s(w),s(f);var T=p(f,2),C=n(T);ja(C,{pkg:i,children:(x,L)=>{var j=dt(),I=n(j);Ce(I,{children:(V,Y)=>{U();var K=$("🎨");v(V,K)},$$slots:{default:!0}}),s(j),v(x,j)},$$slots:{default:!0}}),s(T),s(o),S(()=>A(z,i.repo_name)),v(l,o),oe()}export{kt as component};