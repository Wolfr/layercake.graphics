import{c as e,d as t,e as n,f as r,g as a,s,h as o,S as c,k as i,I as u,l,m as f,J as p,o as h,t as v,D as m,H as d,a7 as g,E as $,N as b,F as y,O as x,p as E,a8 as _,P as S,V as k,_ as w,K as L,a9 as P,x as R,y as A,M as C,Q as j,r as N,B as U,U as I,j as O,v as q,w as T,L as D,aa as G,n as V,a1 as H,ab as J,ac as B,z as K,a5 as M,a6 as z,b as F,A as Q}from"./index.ac40091a.js";import{_ as W}from"./asyncToGenerator.5229e80b.js";import{e as X,w as Y}from"./_examples.a4f0b793.js";import{G as Z}from"./GuideContents.5544427c.js";var ee={};function te(e,t,n){var r=e.slice();return r[15]=t[n],r}function ne(e){var t,n,r,a=e[7](e[15].title)+"";return{c:function(){t=i("option"),n=u(a),this.h()},l:function(e){t=l(e,"OPTION",{value:!0,selected:!0});var r=f(t);n=p(r,a),r.forEach(h),this.h()},h:function(){t.__value="example/"+e[15].slug,t.value=t.__value,t.selected=r=e[2]===e[15].slug},m:function(e,r){v(e,t,r),m(t,n)},p:function(e,n){4&n&&r!==(r=e[2]===e[15].slug)&&(t.selected=r)},d:function(e){e&&h(t)}}}function re(e){for(var t,n,r,a,s,o,c,U,I,O,q,T,D,G,V,H,J,B,K,M,z,F,Q,W,Y,ee,re,ae,se,oe,ce,ie,ue,le,fe,pe=e[3]?"Close":"Menu",he=X,ve=[],me=0;me<he.length;me+=1)ve[me]=ne(te(e,he,me));function de(t){e[13].call(null,t)}var ge={sections:e[1]};void 0!==e[3]&&(ge.open=e[3]);var $e=new Z({props:ge});return d.push((function(){return g($e,"open",de)})),{c:function(){t=i("div"),r=$(),a=i("div"),s=i("span"),o=u(pe),U=$(),I=i("a"),O=u("Layer Cake"),q=$(),T=i("ul"),D=i("li"),G=i("select"),V=i("option"),H=u("All");for(var e=0;e<ve.length;e+=1)ve[e].c();K=$(),M=i("nav"),z=i("ul"),F=i("li"),Q=i("a"),W=u("Guide"),ee=$(),re=i("li"),ae=i("a"),se=u("GitHub"),oe=$(),ce=i("div"),b($e.$$.fragment),this.h()},l:function(e){t=l(e,"DIV",{class:!0}),f(t).forEach(h),r=y(e),a=l(e,"DIV",{class:!0});var n=f(a);s=l(n,"SPAN",{class:!0});var c=f(s);o=p(c,pe),c.forEach(h),U=y(n),I=l(n,"A",{href:!0,rel:!0,class:!0});var i=f(I);O=p(i,"Layer Cake"),i.forEach(h),n.forEach(h),q=y(e),T=l(e,"UL",{class:!0});var u=f(T);D=l(u,"LI",{class:!0});var v=f(D);G=l(v,"SELECT",{value:!0,class:!0});var m=f(G);V=l(m,"OPTION",{selected:!0,value:!0});var d=f(V);H=p(d,"All"),d.forEach(h);for(var g=0;g<ve.length;g+=1)ve[g].l(m);m.forEach(h),v.forEach(h),u.forEach(h),K=y(e),M=l(e,"NAV",{class:!0});var $=f(M);z=l($,"UL",{class:!0});var b=f(z);F=l(b,"LI",{class:!0});var E=f(F);Q=l(E,"A",{rel:!0,class:!0,href:!0});var _=f(Q);W=p(_,"Guide"),_.forEach(h),E.forEach(h),ee=y(b),re=l(b,"LI",{class:!0});var S=f(re);ae=l(S,"A",{href:!0,class:!0});var k=f(ae);se=p(k,"GitHub"),k.forEach(h),S.forEach(h),b.forEach(h),oe=y($),ce=l($,"DIV",{class:!0});var w=f(ce);x($e.$$.fragment,w),w.forEach(h),$.forEach(h),this.h()},h:function(){E(t,"class",n=(e[3]?"open":"closed")+" mousecatcher svelte-a7ao2m"),E(s,"class",c="menu-link "+(e[3]?"menu-open":"menu-closed")+" svelte-a7ao2m"),E(I,"href","."),E(I,"rel","prefetch"),E(I,"class","logo svelte-a7ao2m"),E(a,"class","container svelte-a7ao2m"),V.selected=J=""===e[2],V.__value="",V.value=V.__value,E(G,"class","svelte-a7ao2m"),E(D,"class","svelte-a7ao2m"),E(T,"class","dropdown svelte-a7ao2m"),E(Q,"rel","prefetch"),E(Q,"class",Y=_("guide"===e[0]?"active":"")+" svelte-a7ao2m"),E(Q,"href","guide"),E(F,"class","svelte-a7ao2m"),E(ae,"href","https://github.com/mhkeller/layercake"),E(ae,"class","svelte-a7ao2m"),E(re,"class","svelte-a7ao2m"),E(z,"class","primary svelte-a7ao2m"),E(ce,"class","secondary svelte-a7ao2m"),E(M,"class",ue=_(e[3]?"open":"closed")+" svelte-a7ao2m")},m:function(n,c){v(n,t,c),v(n,r,c),v(n,a,c),m(a,s),m(s,o),m(a,U),m(a,I),m(I,O),v(n,q,c),v(n,T,c),m(T,D),m(D,G),m(G,V),m(V,H);for(var i=0;i<ve.length;i+=1)ve[i].m(G,null);B=e[5].path;for(var u=0;u<G.options.length;u+=1){var l=G.options[u];if(l.__value===B){l.selected=!0;break}}v(n,K,c),v(n,M,c),m(M,z),m(z,F),m(F,Q),m(Q,W),m(z,ee),m(z,re),m(re,ae),m(ae,se),m(M,oe),m(M,ce),S($e,ce,null),e[14](M),le=!0,fe=[k(t,"click",e[11]),k(s,"click",e[9]),k(G,"change",e[8]),k(Q,"click",e[12])]},p:function(e,r){var a=w(r,1)[0];if((!le||8&a&&n!==(n=(e[3]?"open":"closed")+" mousecatcher svelte-a7ao2m"))&&E(t,"class",n),(!le||8&a)&&pe!==(pe=e[3]?"Close":"Menu")&&L(o,pe),(!le||8&a&&c!==(c="menu-link "+(e[3]?"menu-open":"menu-closed")+" svelte-a7ao2m"))&&E(s,"class",c),(!le||4&a&&J!==(J=""===e[2]))&&(V.selected=J),132&a){var i;for(he=X,i=0;i<he.length;i+=1){var u=te(e,he,i);ve[i]?ve[i].p(u,a):(ve[i]=ne(u),ve[i].c(),ve[i].m(G,null))}for(;i<ve.length;i+=1)ve[i].d(1);ve.length=he.length}if(!le||32&a&&B!==(B=e[5].path))for(var l=0;l<G.options.length;l+=1){var f=G.options[l];if(f.__value===B){f.selected=!0;break}}(!le||1&a&&Y!==(Y=_("guide"===e[0]?"active":"")+" svelte-a7ao2m"))&&E(Q,"class",Y);var p={};2&a&&(p.sections=e[1]),!ie&&8&a&&(ie=!0,p.open=e[3],P((function(){return ie=!1}))),$e.$set(p),(!le||8&a&&ue!==(ue=_(e[3]?"open":"closed")+" svelte-a7ao2m"))&&E(M,"class",ue)},i:function(e){le||(R($e.$$.fragment,e),le=!0)},o:function(e){A($e.$$.fragment,e),le=!1},d:function(n){n&&h(t),n&&h(r),n&&h(a),n&&h(q),n&&h(T),C(ve,n),n&&h(K),n&&h(M),j($e),e[14](null),N(fe)}}}function ae(e,t,n){var r,a=t.segment,s=t.sections,o="",c=ut().page;U(e,c,(function(e){return n(5,r=e)}));var i,u=!1;var l;return e.$set=function(e){"segment"in e&&n(0,a=e.segment),"sections"in e&&n(1,s=e.sections)},e.$$.update=function(){32&e.$$.dirty&&n(10,l=r.path),1024&e.$$.dirty&&n(2,o=l.replace(/\/$/,"").split("/").pop())},[a,s,o,u,i,r,c,function(e){return e.split(" (")[0]},function(){n(3,u=!1),ke(this.value||"/")},function(){u?setTimeout((function(){u||n(4,i.scrollTop=0,i)}),350):n(4,i.scrollTop=0,i),n(3,u=!u)},l,function(){return n(3,u=!1)},function(){return n(3,u=!1)},function(e){n(3,u=e)},function(e){d[e?"unshift":"push"]((function(){n(4,i=e)}))}]}var se=function(i){function u(e){var c;return t(this,u),c=n(this,r(u).call(this)),a(o(c),e,ae,re,s,{segment:0,sections:1}),c}return e(u,c),u}();function oe(e){var t,n,r,a=new se({props:{segment:e[0],sections:e[1],slug:e[2]}}),s=e[5].default,o=O(s,e,e[4],null);return{c:function(){b(a.$$.fragment),t=$(),n=i("main"),o&&o.c()},l:function(e){x(a.$$.fragment,e),t=y(e),n=l(e,"MAIN",{});var r=f(n);o&&o.l(r),r.forEach(h)},m:function(e,s){S(a,e,s),v(e,t,s),v(e,n,s),o&&o.m(n,null),r=!0},p:function(e,t){var n=w(t,1)[0],r={};1&n&&(r.segment=e[0]),2&n&&(r.sections=e[1]),4&n&&(r.slug=e[2]),a.$set(r),o&&o.p&&16&n&&o.p(q(s,e,e[4],null),T(s,e[4],n,null))},i:function(e){r||(R(a.$$.fragment,e),R(o,e),r=!0)},o:function(e){A(a.$$.fragment,e),A(o,e),r=!1},d:function(e){j(a,e),e&&h(t),e&&h(n),o&&o.d(e)}}}function ce(e){return ie.apply(this,arguments)}function ie(){return(ie=W(I.mark((function e(t){var n;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.page,t.session,e.abrupt("return",this.fetch("api/guide").then((function(e){return e.json()})).then((function(e){return{sections:e,page:n}})));case 2:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}function ue(e,t,n){var r,a=t.page,s=void 0===a?{}:a,o=t.segment,c=t.sections;s.params&&(r=s.params.slug);var i=t.$$slots,u=void 0===i?{}:i,l=t.$$scope;return e.$set=function(e){"page"in e&&n(3,s=e.page),"segment"in e&&n(0,o=e.segment),"sections"in e&&n(1,c=e.sections),"$$scope"in e&&n(4,l=e.$$scope)},[o,c,r,s,l,u]}var le=function(i){function u(e){var c;return t(this,u),c=n(this,r(u).call(this)),a(o(c),e,ue,oe,s,{page:3,segment:0,sections:1}),c}return e(u,c),u}();function fe(e){var t,n,r=e[1].stack+"";return{c:function(){t=i("pre"),n=u(r)},l:function(e){t=l(e,"PRE",{});var a=f(t);n=p(a,r),a.forEach(h)},m:function(e,r){v(e,t,r),m(t,n)},p:function(e,t){2&t&&r!==(r=e[1].stack+"")&&L(n,r)},d:function(e){e&&h(t)}}}function pe(e){var t,n,r,a,s,o,c,d,g,b=e[1].message+"";document.title=t=e[0];var x=e[2]&&e[1].stack&&fe(e);return{c:function(){n=$(),r=i("h1"),a=u(e[0]),s=$(),o=i("p"),c=u(b),d=$(),x&&x.c(),g=D(),this.h()},l:function(t){G('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(h),n=y(t),r=l(t,"H1",{class:!0});var i=f(r);a=p(i,e[0]),i.forEach(h),s=y(t),o=l(t,"P",{class:!0});var u=f(o);c=p(u,b),u.forEach(h),d=y(t),x&&x.l(t),g=D(),this.h()},h:function(){E(r,"class","svelte-8od9u6"),E(o,"class","svelte-8od9u6")},m:function(e,t){v(e,n,t),v(e,r,t),m(r,a),v(e,s,t),v(e,o,t),m(o,c),v(e,d,t),x&&x.m(e,t),v(e,g,t)},p:function(e,n){var r=w(n,1)[0];1&r&&t!==(t=e[0])&&(document.title=t),1&r&&L(a,e[0]),2&r&&b!==(b=e[1].message+"")&&L(c,b),e[2]&&e[1].stack?x?x.p(e,r):((x=fe(e)).c(),x.m(g.parentNode,g)):x&&(x.d(1),x=null)},i:V,o:V,d:function(e){e&&h(n),e&&h(r),e&&h(s),e&&h(o),e&&h(d),x&&x.d(e),e&&h(g)}}}function he(e,t,n){var r=t.status,a=t.error;return e.$set=function(e){"status"in e&&n(0,r=e.status),"error"in e&&n(1,a=e.error)},[r,a,!1]}var ve=function(i){function u(e){var c;return t(this,u),c=n(this,r(u).call(this)),a(o(c),e,he,pe,s,{status:0,error:1}),c}return e(u,c),u}();function me(e){var t,n,r=[e[4].props],a=e[4].component;function s(e){for(var t={},n=0;n<r.length;n+=1)t=H(t,r[n]);return{props:t}}if(a)var o=new a(s());return{c:function(){o&&b(o.$$.fragment),t=D()},l:function(e){o&&x(o.$$.fragment,e),t=D()},m:function(e,r){o&&S(o,e,r),v(e,t,r),n=!0},p:function(e,n){var c=16&n?J(r,[B(e[4].props)]):{};if(a!==(a=e[4].component)){if(o){M();var i=o;A(i.$$.fragment,1,0,(function(){j(i,1)})),z()}a?(o=new a(s()),b(o.$$.fragment),R(o.$$.fragment,1),S(o,t.parentNode,t)):o=null}else a&&o.$set(c)},i:function(e){n||(o&&R(o.$$.fragment,e),n=!0)},o:function(e){o&&A(o.$$.fragment,e),n=!1},d:function(e){e&&h(t),o&&j(o,e)}}}function de(e){var t,n=new ve({props:{error:e[0],status:e[1]}});return{c:function(){b(n.$$.fragment)},l:function(e){x(n.$$.fragment,e)},m:function(e,r){S(n,e,r),t=!0},p:function(e,t){var r={};1&t&&(r.error=e[0]),2&t&&(r.status=e[1]),n.$set(r)},i:function(e){t||(R(n.$$.fragment,e),t=!0)},o:function(e){A(n.$$.fragment,e),t=!1},d:function(e){j(n,e)}}}function ge(e){var t,n,r,a,s=[de,me],o=[];function c(e,t){return e[0]?0:1}return t=c(e),n=o[t]=s[t](e),{c:function(){n.c(),r=D()},l:function(e){n.l(e),r=D()},m:function(e,n){o[t].m(e,n),v(e,r,n),a=!0},p:function(e,a){var i=t;(t=c(e))===i?o[t].p(e,a):(M(),A(o[i],1,1,(function(){o[i]=null})),z(),(n=o[t])||(n=o[t]=s[t](e)).c(),R(n,1),n.m(r.parentNode,r))},i:function(e){a||(R(n),a=!0)},o:function(e){A(n),a=!1},d:function(e){o[t].d(e),e&&h(r)}}}function $e(e){for(var t,n=[{segment:e[2][0]},e[3].props],r={$$slots:{default:[ge]},$$scope:{ctx:e}},a=0;a<n.length;a+=1)r=H(r,n[a]);var s=new le({props:r});return{c:function(){b(s.$$.fragment)},l:function(e){x(s.$$.fragment,e)},m:function(e,n){S(s,e,n),t=!0},p:function(e,t){var r=w(t,1)[0],a=12&r?J(n,[4&r&&{segment:e[2][0]},8&r&&B(e[3].props)]):{};83&r&&(a.$$scope={dirty:r,ctx:e}),s.$set(a)},i:function(e){t||(R(s.$$.fragment,e),t=!0)},o:function(e){A(s.$$.fragment,e),t=!1},d:function(e){j(s,e)}}}function be(e,t,n){var r=t.stores,a=t.error,s=t.status,o=t.segments,c=t.level0,i=t.level1,u=void 0===i?null:i;return K(ee,r),e.$set=function(e){"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,a=e.error),"status"in e&&n(1,s=e.status),"segments"in e&&n(2,o=e.segments),"level0"in e&&n(3,c=e.level0),"level1"in e&&n(4,u=e.level1)},[a,s,o,c,u,r]}var ye,xe=function(i){function u(e){var c;return t(this,u),c=n(this,r(u).call(this)),a(o(c),e,be,$e,s,{stores:5,error:0,status:1,segments:2,level0:3,level1:4}),c}return e(u,c),u}(),Ee=[/^\/example\/([^\/]+?).json$/,/^\/api\/guide\/?$/,/^\/api\/guide\/contents\/?$/],_e=[{js:function(){return import("./index.2b6ffc94.js")},css:["legacy/index.2b6ffc94.css","legacy/_examples.a4f0b793.css"]},{js:function(){return import("./[slug].26bb5de1.js")},css:["legacy/[slug].26bb5de1.css","legacy/_examples.a4f0b793.css"]},{js:function(){return import("./index.ab1d0c5a.js")},css:["legacy/index.ab1d0c5a.css","legacy/GuideContents.5544427c.css"]}],Se=(ye=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/example\/([^\/]+?)\/?$/,parts:[null,{i:1,params:function(e){return{slug:ye(e[1])}}}]},{pattern:/^\/guide\/?$/,parts:[{i:2}]}]);function ke(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},n=Be(new URL(e,document.baseURI));return n?(Ve[t.replaceState?"replaceState":"pushState"]({id:Te},"",e),Me(n,null).then((function(){}))):(location.href=e,new Promise((function(e){})))}var we,Le,Pe,Re,Ae,Ce="undefined"!=typeof __SAPPER__&&__SAPPER__,je=!1,Ne=[],Ue="{}",Ie={page:Y({}),preloading:Y(null),session:Y(Ce&&Ce.session)};Ie.session.subscribe(function(){var e=W(I.mark((function e(t){var n,r,a,s,o,c;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Re=t,je){e.next=3;break}return e.abrupt("return");case 3:return Ae=!0,n=Be(new URL(location.href)),r=Le={},e.next=8,Xe(n);case 8:if(a=e.sent,s=a.redirect,o=a.props,c=a.branch,r===Le){e.next=14;break}return e.abrupt("return");case 14:return e.next=16,Fe(s,c,o,n.page);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var Oe,qe=null;var Te,De=1;var Ge,Ve="undefined"!=typeof history?history:{pushState:function(e,t,n){},replaceState:function(e,t,n){},scrollRestoration:""},He={};function Je(e){var t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var n=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),r=w(n,3),a=r[1],s=r[2],o=void 0===s?"":s;"string"==typeof t[a]&&(t[a]=[t[a]]),"object"===F(t[a])?t[a].push(o):t[a]=o})),t}function Be(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Ce.baseUrl))return null;var t=e.pathname.slice(Ce.baseUrl.length);if(""===t&&(t="/"),!Ee.some((function(e){return e.test(t)})))for(var n=0;n<Se.length;n+=1){var r=Se[n],a=r.pattern.exec(t);if(a){var s=Je(e.search),o=r.parts[r.parts.length-1],c=o.params?o.params(a):{},i={host:location.host,path:t,query:s,params:c};return{href:e.href,route:r,match:a,page:i}}}}function Ke(){return{x:pageXOffset,y:pageYOffset}}function Me(e,t,n,r){return ze.apply(this,arguments)}function ze(){return(ze=W(I.mark((function e(t,n,r,a){var s,o,c,i,u,l,f,p,h;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n?Te=n:(s=Ke(),He[Te]=s,n=Te=++De,He[Te]=r?s:{x:0,y:0}),Te=n,we&&Ie.preloading.set(!0),o=qe&&qe.href===t.href?qe.promise:Xe(t),qe=null,c=Le={},e.next=8,o;case 8:if(i=e.sent,u=i.redirect,l=i.props,f=i.branch,c===Le){e.next=14;break}return e.abrupt("return");case 14:return e.next=16,Fe(u,f,l,t.page);case 16:document.activeElement&&document.activeElement.blur(),r||(p=He[n],a&&(h=document.getElementById(a.slice(1)))&&(p={x:0,y:h.getBoundingClientRect().top}),He[Te]=p,p&&scrollTo(p.x,p.y));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Fe(e,t,n,r){return Qe.apply(this,arguments)}function Qe(){return(Qe=W(I.mark((function e(t,n,r,a){var s,o;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",ke(t.location,{replaceState:!0}));case 2:if(Ie.page.set(a),Ie.preloading.set(!1),!we){e.next=8;break}we.$set(r),e.next=17;break;case 8:return r.stores={page:{subscribe:Ie.page.subscribe},preloading:{subscribe:Ie.preloading.subscribe},session:Ie.session},e.next=11,Pe;case 11:if(e.t0=e.sent,r.level0={props:e.t0},s=document.querySelector("#sapper-head-start"),o=document.querySelector("#sapper-head-end"),s&&o){for(;s.nextSibling!==o;)tt(s.nextSibling);tt(s),tt(o)}we=new xe({target:Oe,props:r,hydrate:!0});case 17:Ne=n,Ue=JSON.stringify(a.query),je=!0,Ae=!1;case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function We(e,t,n,r){if(r!==Ue)return!0;var a=Ne[e];return!!a&&(t!==a.segment||(!(!a.match||JSON.stringify(a.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0))}function Xe(e){return Ye.apply(this,arguments)}function Ye(){return(Ye=W(I.mark((function e(t){var n,r,a,s,o,c,i,u,l,f,p;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,r=t.page,a=r.path.split("/").filter(Boolean),s=null,o={error:null,status:200,segments:[a[0]]},c={fetch:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t){return fetch(e,t)})),redirect:function(e,t){if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:function(e,t){o.error="string"==typeof t?new Error(t):t,o.status=e}},Pe||(Pe=Ce.preloaded[0]||ce.call(c,{host:r.host,path:r.path,query:r.query,params:{}},Re)),u=1,e.prev=7,l=JSON.stringify(r.query),f=n.pattern.exec(r.path),p=!1,e.next=13,Promise.all(n.parts.map(function(){var e=W(I.mark((function e(n,s){var i,h,v,m,d,g;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=a[s],We(s,i,f,l)&&(p=!0),o.segments[u]=a[s+1],n){e.next=5;break}return e.abrupt("return",{segment:i});case 5:if(h=u++,Ae||p||!Ne[s]||Ne[s].part!==n.i){e.next=8;break}return e.abrupt("return",Ne[s]);case 8:return p=!1,e.next=11,et(_e[n.i]);case 11:if(v=e.sent,m=v.default,d=v.preload,!je&&Ce.preloaded[s+1]){e.next=25;break}if(!d){e.next=21;break}return e.next=18,d.call(c,{host:r.host,path:r.path,query:r.query,params:n.params?n.params(t.match):{}},Re);case 18:e.t0=e.sent,e.next=22;break;case 21:e.t0={};case 22:g=e.t0,e.next=26;break;case 25:g=Ce.preloaded[s+1];case 26:return e.abrupt("return",o["level".concat(h)]={component:m,props:g,segment:i,match:f,part:n.i});case 27:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 13:i=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),o.error=e.t0,o.status=500,i=[];case 21:return e.abrupt("return",{redirect:s,props:o,branch:i});case 22:case"end":return e.stop()}}),e,null,[[7,16]])})))).apply(this,arguments)}function Ze(e){var t="client/".concat(e);if(!document.querySelector('link[href="'.concat(t,'"]')))return new Promise((function(e,n){var r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=function(){return e()},r.onerror=n,document.head.appendChild(r)}))}function et(e){var t="string"==typeof e.css?[]:e.css.map(Ze);return t.unshift(e.js()),Promise.all(t).then((function(e){return e[0]}))}function tt(e){e.parentNode.removeChild(e)}function nt(e){var t=Be(new URL(e,document.baseURI));if(t)return qe&&e===qe.href||function(e,t){qe={href:e,promise:t}}(e,Xe(t)),qe.promise}function rt(e){clearTimeout(Ge),Ge=setTimeout((function(){at(e)}),20)}function at(e){var t=ot(e.target);t&&"prefetch"===t.rel&&nt(t.href)}function st(e){if(1===function(e){return null===e.which?e.button:e.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var t=ot(e.target);if(t&&t.href){var n="object"===F(t.href)&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r!==location.href){if(!t.hasAttribute("download")&&"external"!==t.getAttribute("rel")&&(n?!t.target.baseVal:!t.target)){var a=new URL(r);if(a.pathname!==location.pathname||a.search!==location.search){var s=Be(a);if(s)Me(s,null,t.hasAttribute("sapper-noscroll"),a.hash),e.preventDefault(),Ve.pushState({id:Te},"",a.href)}}}else location.hash||e.preventDefault()}}}function ot(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function ct(e){if(He[Te]=Ke(),e.state){var t=Be(new URL(location.href));t?Me(t,e.state.id):location.href=location.href}else(function(e){Te=e})(De=De+1),Ve.replaceState({id:Te},"",location.href)}var it,ut=function(){return Q(ee)};it={target:document.querySelector("#sapper")},"scrollRestoration"in Ve&&(Ve.scrollRestoration="manual"),function(e){Oe=e}(it.target),addEventListener("click",st),addEventListener("popstate",ct),addEventListener("touchstart",at),addEventListener("mousemove",rt),Promise.resolve().then((function(){var e=location,t=e.hash,n=e.href;Ve.replaceState({id:De},"",n);var r,a,s,o,c,i,u,l,f=new URL(location.href);if(Ce.error)return r=location,a=r.host,s=r.pathname,o=r.search,c=Ce.session,i=Ce.preloaded,u=Ce.status,l=Ce.error,Pe||(Pe=i&&i[0]),void Fe(null,[],{error:l,status:u,session:c,level0:{props:Pe},level1:{props:{status:u,error:l},component:ve},segments:i},{host:a,path:s,query:Je(o),params:{}});var p=Be(f);return p?Me(p,De,!0,t):void 0}));
