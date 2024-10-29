import{a as i,t as y,f as M,s as Fe,g as V,b as Se}from"../chunks/disclose-version.CjEqvbVj.js";import{E as Ke,aE as Ue,aF as Ze,ah as Je,N as Qe,z as ke,aG as Ve,a3 as Xe,n as X,aH as Ye,a2 as be,Q as ye,Z as $e,ai as ea,ag as aa,p as ee,t as j,a as ae,f as C,c as n,r as s,s as m,y as r,as as H,X as N}from"../chunks/runtime.Bchdziex.js";import{b as ta,s as W}from"../chunks/render.DuEb51fQ.js";import{p as ra,i as F}from"../chunks/props.BVi8seop.js";import{b as xe,e as le,f as sa,s as O,t as K,a as Y,g as ve,i as Ee,h as na,j as de,k as qe,S as $,z as oa,m as ia,l as la,n as va,o as da,p as ca,L as _a,c as ua,d as ga}from"../chunks/package.CC4XJUY4.js";import{s as R}from"../chunks/snippet.D2DNn779.js";import{p as Ce}from"../chunks/stores.7redom96.js";import{b as pa}from"../chunks/entry.e8LbUTjw.js";const ma=requestAnimationFrame,fa=()=>performance.now(),Z={tick:v=>ma(v),now:()=>fa(),tasks:new Set};function Le(v){Z.tasks.forEach(e=>{e.c(v)||(Z.tasks.delete(e),e.f())}),Z.tasks.size!==0&&Z.tick(Le)}function ha(v){let e;return Z.tasks.size===0&&Z.tick(Le),{promise:new Promise(t=>{Z.tasks.add(e={c:v,f:t})}),abort(){Z.tasks.delete(e)}}}function oe(v,e){v.dispatchEvent(new CustomEvent(e))}function wa(v){if(v==="float")return"cssFloat";if(v==="offset")return"cssOffset";if(v.startsWith("--"))return v;const e=v.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function ze(v){const e={},t=v.split(";");for(const l of t){const[a,c]=l.split(":");if(!a||c===void 0)break;const f=wa(a.trim());e[f]=c.trim()}return e}const ka=v=>v;function ba(v,e,t,l){var a=(v&Ye)!==0,c="both",f,x=e.inert,h,g;function _(){var b=$e,P=ke;be(null),ye(null);try{return f??(f=t()(e,(l==null?void 0:l())??{},{direction:c}))}finally{be(b),ye(P)}}var E={is_global:a,in(){e.inert=x,oe(e,"introstart"),h=ce(e,_(),g,1,()=>{oe(e,"introend"),h==null||h.abort(),h=f=void 0})},out(b){e.inert=!0,oe(e,"outrostart"),g=ce(e,_(),h,0,()=>{oe(e,"outroend"),b==null||b()})},stop:()=>{h==null||h.abort(),g==null||g.abort()}},L=ke;if((L.transitions??(L.transitions=[])).push(E),ta){var z=a;if(!z){for(var w=L.parent;w&&w.f&Ke;)for(;(w=w.parent)&&!(w.f&Ue););z=!w||(w.f&Ze)!==0}z&&Je(()=>{Qe(()=>E.in())})}}function ce(v,e,t,l,a){var c=l===1;if(Ve(e)){var f,x=!1;return Xe(()=>{if(!x){var P=e({direction:c?"in":"out"});f=ce(v,P,t,l,a)}}),{abort:()=>{x=!0,f==null||f.abort()},deactivate:()=>f.deactivate(),reset:()=>f.reset(),t:()=>f.t()}}if(t==null||t.deactivate(),!(e!=null&&e.duration))return a(),{abort:X,deactivate:X,reset:X,t:()=>l};const{delay:h=0,css:g,tick:_,easing:E=ka}=e;var L=[];if(c&&t===void 0&&(_&&_(0,1),g)){var z=ze(g(0,1));L.push(z,z)}var w=()=>1-l,b=v.animate(L,{duration:h});return b.onfinish=()=>{var P=(t==null?void 0:t.t())??1-l;t==null||t.abort();var q=l-P,T=e.duration*Math.abs(q),I=[];if(T>0){if(g)for(var B=Math.ceil(T/16.666666666666668),A=0;A<=B;A+=1){var J=P+q*E(A/B),te=g(J,1-J);I.push(ze(te))}w=()=>{var Q=b.currentTime;return P+q*E(Q/T)},_&&ha(()=>{if(b.playState!=="running")return!1;var Q=w();return _(Q,1-Q),!0})}b=v.animate(I,{duration:T,fill:"forwards"}),b.onfinish=()=>{w=()=>l,_==null||_(l,1-l),a()}},{abort:()=>{b&&(b.cancel(),b.effect=null,b.onfinish=X)},deactivate:()=>{a=X},reset:()=>{l===0&&(_==null||_(1,0))},t:()=>w()}}function ya(v,e,t,l,a){var c=()=>{l(t[v])};t.addEventListener(e,c),a?ea(()=>{t[v]=a()}):c(),(t===document.body||t===window||t===document)&&aa(()=>{t.removeEventListener(e,c)})}function xa(v){const e=v-1;return e*e*e+1}function qa(v,{delay:e=0,duration:t=400,easing:l=xa,axis:a="y"}={}){const c=getComputedStyle(v),f=+c.opacity,x=a==="y"?"height":"width",h=parseFloat(c[x]),g=a==="y"?["top","bottom"]:["left","right"],_=g.map(q=>`${q[0].toUpperCase()}${q.slice(1)}`),E=parseFloat(c[`padding${_[0]}`]),L=parseFloat(c[`padding${_[1]}`]),z=parseFloat(c[`margin${_[0]}`]),w=parseFloat(c[`margin${_[1]}`]),b=parseFloat(c[`border${_[0]}Width`]),P=parseFloat(c[`border${_[1]}Width`]);return{delay:e,duration:t,easing:l,css:q=>`overflow: hidden;opacity: ${Math.min(q*20,1)*f};${x}: ${q*h}px;padding-${g[0]}: ${q*E}px;padding-${g[1]}: ${q*L}px;margin-${g[0]}: ${q*z}px;margin-${g[1]}: ${q*w}px;border-${g[0]}-width: ${q*b}px;border-${g[1]}-width: ${q*P}px;`}}var za=y("<div><!></div>"),ja=y("<details><summary><!></summary> <!></details>");function Fa(v,e){ee(e,!0);let t=ra(e,"open",15);var l=ja();let a;var c=n(l);let f;var x=n(c);R(x,()=>e.summary),s(c);var h=m(c,2);F(h,()=>e.eager,g=>{var _=M(),E=C(_);R(E,()=>e.children),i(g,_)},g=>{var _=M(),E=C(_);F(E,t,L=>{var z=za(),w=n(z);R(w,()=>e.children),s(z),ba(3,z,()=>qa),i(L,z)},null,!0),i(g,_)}),s(l),j(()=>{a=xe(l,a,{...e.attrs}),f=xe(c,f,{...e.summary_attrs})}),ya("open","toggle",l,t,t),i(v,l),ae()}var Sa=y('<div class="repo_name svelte-w7xguq"> <!></div>'),Ea=y('<div class="description svelte-w7xguq"> </div>'),Ca=y('<div class="motto svelte-w7xguq"> </div>'),La=y('<blockquote class="npm_url svelte-w7xguq"> </blockquote>'),Ta=y('<span class="title svelte-w7xguq">homepage</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq"><img> </a></div>',1),Na=y('<span class="title svelte-w7xguq">repo</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="repo"> </a></div>',1),Pa=y('<span class="title svelte-w7xguq">npm</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="npm"> </a></div>',1),Wa=y('<span class="title svelte-w7xguq">version</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="version"> </a></div>',1),Ma=y('<span class="title svelte-w7xguq">license</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="license"> </a></div>',1),Oa=y('<span class="title svelte-w7xguq">data</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="data">package.json</a> <a class="chip svelte-w7xguq" title="data">src.json</a></div>',1),Aa=y('<div class="logo svelte-w7xguq"><img></div>'),Ga=y("<li> </li>"),Ra=y('<ul class="declarations unstyled svelte-w7xguq"></ul>'),Ia=y('<li class="module svelte-w7xguq"><div class="module_content svelte-w7xguq"><a class="chip"> </a> <!></div></li>'),Ba=y('<section class="svelte-w7xguq"><menu class="unstyled"></menu></section>'),Da=y("raw data for <code>pkg: Package_Meta</code>",1),Ha=y("<pre><code> </code></pre>"),Ka=y('<div class="package_detail svelte-w7xguq"><div class="info svelte-w7xguq"><div class="flex flex_1"><div><header class="svelte-w7xguq"><!></header> <!> <!> <!> <!> <section class="properties svelte-w7xguq"><!> <!> <!> <!> <!> <!></section></div></div> <!></div> <!> <section class="svelte-w7xguq"><!></section></div>');function Ua(v,e){ee(e,!0);const t=Fe(),l=()=>Se(Ce,"$page",t),a=N(()=>e.pkg.package_json),c=N(()=>e.pkg.src_json),f=N(()=>r(c).modules),x=N(()=>r(a).repository?de(qe(qe(typeof r(a).repository=="string"?r(a).repository:r(a).repository.url,".git"),"/"),"git+"):null),h=N(()=>r(a).license&&r(x)?r(x)+"/blob/main/LICENSE":null),g=(k,o)=>k+"/blob/main/src/lib/"+(o.endsWith(".js")?o.slice(0,-3)+".ts":o),_=N(()=>r(a).exports&&Object.keys(r(a).exports)),E=N(()=>r(a).exports?Object.keys(r(a).exports).map(k=>{const o=de(k,"./");return o==="."?"index.js":o}):null);var L=Ka(),z=n(L),w=n(z),b=n(w),P=n(b),q=n(P);F(q,()=>e.repo_name,k=>{var o=M(),p=C(o);R(p,()=>e.repo_name,()=>e.pkg.repo_name),i(k,o)},k=>{var o=Sa(),p=n(o,!0),u=m(p);F(u,()=>r(a).glyph,d=>{var S=V();j(()=>W(S,` ${r(a).glyph??""}`)),i(d,S)}),s(o),j(()=>W(p,e.pkg.repo_name)),i(k,o)}),s(P);var T=m(P,2);R(T,()=>e.children??X,()=>e.pkg);var I=m(T,2);F(I,()=>r(a).description,k=>{var o=M(),p=C(o);F(p,()=>e.description,u=>{var d=M(),S=C(d);R(S,()=>e.description,()=>r(a).description),i(u,d)},u=>{var d=Ea(),S=n(d,!0);s(d),j(()=>W(S,r(a).description)),i(u,d)}),i(k,o)});var B=m(I,2);F(B,()=>r(a).motto,k=>{var o=M(),p=C(o);F(p,()=>e.motto,u=>{var d=M(),S=C(d);R(S,()=>e.motto,()=>r(a).motto),i(u,d)},u=>{var d=Ca(),S=n(d,!0);s(d),j(()=>W(S,r(a).motto)),i(u,d)}),i(k,o)});var A=m(B,2);F(A,()=>e.pkg.npm_url,k=>{var o=M(),p=C(o);F(p,()=>e.npm_url,u=>{var d=M(),S=C(d);R(S,()=>e.npm_url,()=>e.pkg.npm_url),i(u,d)},u=>{var d=La(),S=n(d);s(d),j(()=>W(S,`npm i -D ${r(a).name??""}`)),i(u,d)}),i(k,o)});var J=m(A,2),te=n(J);F(te,()=>e.pkg.homepage_url,k=>{var o=M(),p=C(o);F(p,()=>e.homepage_url,u=>{var d=M(),S=C(d);R(S,()=>e.homepage_url,()=>e.pkg.homepage_url),i(u,d)},u=>{var d=Ta(),S=m(C(d),2),G=n(S),U=n(G),re=m(U);j(()=>W(re,` ${sa(e.pkg.homepage_url)??""}`)),s(G),s(S),j(()=>{O(G,"href",e.pkg.homepage_url),K(G,"selected",e.pkg.homepage_url===l().url.href),O(U,"src",e.pkg.logo_url),O(U,"alt",e.pkg.logo_alt),Y(U,"width","16px"),Y(U,"height","16px"),Y(U,"margin-right","var(--space_xs)")}),i(u,d)}),i(k,o)});var Q=m(te,2);F(Q,()=>e.pkg.repo_url,k=>{var o=Na(),p=m(C(o),2),u=n(p),d=n(u);s(u),s(p),j(()=>{O(u,"href",e.pkg.repo_url),W(d,`${e.pkg.owner_name??""}/${e.pkg.repo_name??""}`)}),i(k,o)});var _e=m(Q,2);F(_e,()=>e.pkg.npm_url,k=>{var o=Pa(),p=m(C(o),2),u=n(p),d=n(u,!0);s(u),s(p),j(()=>{O(u,"href",e.pkg.npm_url),W(d,r(a).name)}),i(k,o)});var ue=m(_e,2);F(ue,()=>e.pkg.changelog_url,k=>{var o=Wa(),p=m(C(o),2),u=n(p),d=n(u,!0);s(u),s(p),j(()=>{O(u,"href",e.pkg.changelog_url),W(d,r(a).version)}),i(k,o)});var ge=m(ue,2);F(ge,()=>r(h),k=>{var o=Ma(),p=m(C(o),2),u=n(p),d=n(u,!0);s(u),s(p),j(()=>{O(u,"href",r(h)),W(d,r(a).license)}),i(k,o)});var Te=m(ge,2);F(Te,()=>e.pkg.homepage_url,k=>{var o=Oa(),p=m(C(o),2),u=n(p);j(()=>O(u,"href",`${ve(e.pkg.homepage_url,"/")??""}.well-known/package.json`));var d=m(u,2);j(()=>O(d,"href",`${ve(e.pkg.homepage_url,"/")??""}.well-known/src.json`)),s(p),i(k,o)}),s(J),s(b),s(w);var Ne=m(w,2);F(Ne,()=>e.pkg.logo_url,k=>{var o=Aa(),p=n(o);s(o),j(()=>{O(p,"src",e.pkg.logo_url),O(p,"alt",e.pkg.logo_alt),Y(p,"width","var(--size, var(--icon_size_xl2))"),Y(p,"height","var(--size, var(--icon_size_xl2))")}),i(k,o)}),s(z);var pe=m(z,2);F(pe,()=>r(E)&&e.pkg.repo_url,k=>{var o=Ba(),p=n(o);le(p,22,()=>r(E),u=>u,(u,d,S)=>{var G=Ia();const U=N(()=>g(e.pkg.repo_url,d)),re=N(()=>{var D;return(D=r(_))==null?void 0:D[r(S)]}),fe=N(()=>{var D;return r(re)?(D=r(f))==null?void 0:D[r(re)]:void 0}),We=N(()=>d.endsWith(".js"));j(()=>K(G,"ts",r(We)));const Me=N(()=>d.endsWith(".svelte"));j(()=>K(G,"svelte",r(Me)));const Oe=N(()=>d.endsWith(".css"));j(()=>K(G,"css",r(Oe)));const Ae=N(()=>d.endsWith(".json"));j(()=>K(G,"json",r(Ae)));var he=n(G),se=n(he),Ge=n(se,!0);s(se);var Re=m(se,2);F(Re,()=>{var D;return(D=r(fe))==null?void 0:D.declarations.length},D=>{var ie=Ra();le(ie,21,()=>r(fe).declarations,Ee,(Ie,we)=>{let Be=()=>r(we).name,De=()=>r(we).kind;var ne=Ga(),He=n(ne,!0);s(ne),j(()=>{na(ne,`declaration chip ${De()??""}_declaration svelte-w7xguq`),W(He,Be())}),i(Ie,ne)}),s(ie),i(D,ie)}),s(he),s(G),j(()=>{O(se,"href",r(U)),W(Ge,d)}),i(u,G)}),s(p),s(o),i(k,o)});var me=m(pe,2),Pe=n(me);Fa(Pe,{summary:o=>{H();var p=Da();H(),i(o,p)},children:(o,p)=>{var u=Ha(),d=n(u),S=n(d,!0);j(()=>W(S,JSON.stringify(e.pkg,null,"	"))),s(d),s(u),i(o,u)},$$slots:{summary:!0,default:!0}}),s(me),s(L),i(v,L),ae()}var Za=y('<ul><li><a rel="me" href="https://www.webdevladder.net/">webdevladder.net</a> - realworld webdev with TypeScript and Svelte, blog and YouTube channels <a rel="me" href="https://youtube.com/@webdevladder">@webdevladder</a> and <a rel="me" href="https://youtube.com/@webdevladder_vods">@webdevladder_vods</a><!></li> <li><a rel="me" href="https://www.ryanatkn.com/">ryanatkn.com</a> - my homepage<!></li> <li>GitHub - <a rel="me" href="https://github.com/ryanatkn">@ryanatkn</a> and <a rel="me" href="https://github.com/spiderspace">@spiderspace</a></li> <li>Mastodon as <a rel="me" href="https://fosstodon.org/@webdevladder">@webdevladder@fosstodon.org</a> and <a rel="me" href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a></li> <li>@webdevladder on <a rel="me" href="https://x.com/webdevladder">Twitter</a>, <a rel="me" href="https://www.reddit.com/user/webdevladder/">Reddit</a>, and <a href="https://news.ycombinator.com/user?id=webdevladder">Hacker News</a></li> <li>support me at <a href="https://www.ryanatkn.com/funding">ryanatkn.com/funding</a></li></ul>');function Ja(v,e){var t=Za(),l=n(t),a=n(l),c=m(a,5);F(c,()=>e.selected==="webdevladder.net",g=>{var _=V(", you are here");i(g,_)}),s(l);var f=m(l,2),x=n(f),h=m(x,2);F(h,()=>e.selected==="ryanatkn.com",g=>{var _=V(", you are here");i(g,_)}),s(f),H(8),s(t),j(()=>{K(a,"selected",e.selected==="webdevladder.net"),K(x,"selected",e.selected==="ryanatkn.com")}),i(v,t)}var Qa=y('<a class="project_link svelte-1bpnvy9" title="Zzz - bot control hq" href="https://www.zzzbot.dev/"><!><span class="name svelte-1bpnvy9">Zzz</span></a> <a class="project_link svelte-1bpnvy9" title="Moss - CSS framework" href="https://moss.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Moss</span></a> <a class="project_link svelte-1bpnvy9" title="Fuz - Svelte UI library" href="https://www.fuz.dev/"><!><span class="name svelte-1bpnvy9">Fuz</span></a> <a class="project_link svelte-1bpnvy9" title="Gro - task runner and toolkit extending SvelteKit" href="https://gro.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Gro</span></a> <a class="project_link svelte-1bpnvy9" title="fuz_template - a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro" href="https://template.fuz.dev/"><!><span class="name svelte-1bpnvy9">fuz_template</span></a>',1);function Va(v){const e="var(--icon_size_lg)";var t=Qa(),l=C(t),a=n(l);$(a,{data:oa,size:e}),H(),s(l);var c=m(l,2),f=n(c);$(f,{data:ia,size:e}),H(),s(c);var x=m(c,2),h=n(x);$(h,{data:la,size:e}),H(),s(x);var g=m(x,2),_=n(g);$(_,{data:va,size:e}),H(),s(g);var E=m(g,2),L=n(E);$(L,{data:da,size:e}),H(),s(E),i(v,t)}var Xa=y('<h2 class="mt_0 mb_lg">Links</h2>'),Ya=y('<section class="panel p_lg"><!> <!> <div class="box row"><!></div></section>');function $a(v,e){ee(e,!0);var t=Ya(),l=n(t);F(l,()=>e.children,x=>{var h=M(),g=C(h);R(g,()=>e.children),i(x,h)},x=>{var h=Xa();i(x,h)});var a=m(l,2);Ja(a,{});var c=m(a,2),f=n(c);Va(f),s(c),s(t),i(v,t),ae()}const et=v=>v.split("/").filter(e=>e&&e!=="."&&e!==".."),at=v=>{const e=[],t=et(v);t.length&&e.push({type:"separator",path:"/"});let l="";for(let a=0;a<t.length;a++){const c=t[a];l+="/"+c,e.push({type:"piece",name:c,path:l}),a!==t.length-1&&e.push({type:"separator",path:l})}return e};var tt=y('<a class="svelte-c9k2g"> </a>'),rt=y('<span class="separator svelte-c9k2g"><!></span>'),st=y('<div class="breadcrumb svelte-c9k2g"><a class="svelte-c9k2g"><!></a><!></div>');function je(v,e){ee(e,!0);const t=Fe(),l=()=>Se(Ce,"$page",t),a=N(()=>e.base_path??pa),c=N(()=>e.path??de(l().url.pathname,r(a))),f=N(()=>e.selected_path===null?null:e.selected_path??r(c)),x=N(()=>at(r(c))),h=N(()=>ve(r(a),"/"));var g=st(),_=n(g),E=n(_);F(E,()=>e.children,z=>{var w=M(),b=C(w);R(b,()=>e.children),i(z,w)},z=>{var w=V("•");i(z,w)}),s(_);var L=m(_);le(L,17,()=>r(x),Ee,(z,w)=>{var b=M(),P=C(b);F(P,()=>r(w).type==="piece",q=>{var T=tt(),I=n(T,!0);s(T),j(()=>{O(T,"href",r(a)+r(w).path),K(T,"selected",r(w).path===r(f)),W(I,r(w).name)}),i(q,T)},q=>{var T=rt(),I=n(T);F(I,()=>e.separator,B=>{var A=M(),J=C(A);R(J,()=>e.separator),i(B,A)},B=>{var A=V("/");i(B,A)}),s(T),i(q,T)}),i(z,b)}),s(g),j(()=>{O(_,"href",r(h)),K(_,"selected",r(h)===r(a)+r(f))}),i(v,g),ae()}var nt=y('<div class="mb_lg"><!></div>'),ot=y('<main class="width_md svelte-1pyh03k"><section class="box svelte-1pyh03k"><header><h1 class="mt_xl5 svelte-1pyh03k"> </h1></header> <!></section> <!> <section class="box w_100 mb_lg svelte-1pyh03k"><div class="panel p_md width_md"><!></div></section> <section class="box svelte-1pyh03k"><!></section></main>');function pt(v,e){ee(e,!0);const t=ca(ga,ua);var l=ot(),a=n(l),c=n(a),f=n(c),x=n(f,!0);s(f),s(c);var h=m(c,2);je(h,{children:(b,P)=>{H();var q=V("🎨");i(b,q)},$$slots:{default:!0}}),s(a);var g=m(a,2);$a(g,{});var _=m(g,2),E=n(_),L=n(E);Ua(L,{pkg:t}),s(E),s(_);var z=m(_,2),w=n(z);_a(w,{pkg:t,children:(b,P)=>{var q=nt(),T=n(q);je(T,{children:(I,B)=>{H();var A=V("🎨");i(I,A)},$$slots:{default:!0}}),s(q),i(b,q)},$$slots:{default:!0}}),s(z),s(l),j(()=>W(x,t.repo_name)),i(v,l),ae()}export{pt as component};