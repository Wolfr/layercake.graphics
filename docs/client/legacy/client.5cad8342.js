import{_ as e,a as t,b as n,c as r,i as a,s,d as o,S as c,e as i,t as u,f as l,g as f,h as p,j as h,k as v,l as m,m as d,n as g,o as $,p as b,q as y,r as E,u as x,v as k,w as S,x as w,y as _,z as L,A,B as P,C as R,D as C,E as U,F as I,G as N,H as O,I as j,J as q,K as G,L as T,M as D,N as V,O as H,P as J,Q as B,R as K,T as M,U as W,V as X,W as Y,X as z,Y as F}from"./_examples.64d30181.js";import{_ as Q}from"./asyncToGenerator.5229e80b.js";var Z={};function ee(e,t,n){var r=e.slice();return r[8]=t[n],r}function te(e,t,n){var r=e.slice();return r[5]=t[n],r}function ne(e){var t,n,r,a,s=e[8].title+"";return{c:function(){t=i("a"),n=u(s),this.h()},l:function(e){t=f(e,"A",{class:!0,href:!0});var r=p(t);n=h(r,s),r.forEach(v),this.h()},h:function(){d(t,"class",r="subsection "+(e[8].slug===e[0]?"active":"")+" svelte-1ukrscy"),d(t,"href","/guide#"+e[8].slug)},m:function(r,s){g(r,t,s),$(t,n),a=b(t,"click",e[2])},p:function(e,n){1&n&&r!==(r="subsection "+(e[8].slug===e[0]?"active":"")+" svelte-1ukrscy")&&d(t,"class",r)},d:function(e){e&&v(t),a()}}}function re(e){for(var t,n,r,a,s,o,c,E=e[5].metadata.title+"",x=e[5].subsections,k=[],S=0;S<x.length;S+=1)k[S]=ne(ee(e,x,S));return{c:function(){t=i("li"),n=i("a"),r=u(E),s=l();for(var e=0;e<k.length;e+=1)k[e].c();o=l(),this.h()},l:function(e){t=f(e,"LI",{class:!0});var a=p(t);n=f(a,"A",{class:!0,href:!0});var c=p(n);r=h(c,E),c.forEach(v),s=m(a);for(var i=0;i<k.length;i+=1)k[i].l(a);o=m(a),a.forEach(v),this.h()},h:function(){d(n,"class",a="section "+(e[5].slug===e[0]?"active":"")+" svelte-1ukrscy"),d(n,"href","/guide#"+e[5].slug),d(t,"class","svelte-1ukrscy")},m:function(a,i){g(a,t,i),$(t,n),$(n,r),$(t,s);for(var u=0;u<k.length;u+=1)k[u].m(t,null);$(t,o),c=b(n,"click",e[2])},p:function(e,r){if(1&r&&a!==(a="section "+(e[5].slug===e[0]?"active":"")+" svelte-1ukrscy")&&d(n,"class",a),7&r){var s;for(x=e[5].subsections,s=0;s<x.length;s+=1){var c=ee(e,x,s);k[s]?k[s].p(c,r):(k[s]=ne(c),k[s].c(),k[s].m(t,o))}for(;s<k.length;s+=1)k[s].d(1);k.length=x.length}},d:function(e){e&&v(t),y(k,e),c()}}}function ae(e){for(var t,n=e[1],r=[],a=0;a<n.length;a+=1)r[a]=re(te(e,n,a));return{c:function(){t=i("ul");for(var e=0;e<r.length;e+=1)r[e].c();this.h()},l:function(e){t=f(e,"UL",{class:!0});for(var n=p(t),a=0;a<r.length;a+=1)r[a].l(n);n.forEach(v),this.h()},h:function(){d(t,"class","guide-toc svelte-1ukrscy")},m:function(e,n){g(e,t,n);for(var a=0;a<r.length;a+=1)r[a].m(t,null)},p:function(e,a){var s=E(a,1)[0];if(7&s){var o;for(n=e[1],o=0;o<n.length;o+=1){var c=te(e,n,o);r[o]?r[o].p(c,s):(r[o]=re(c),r[o].c(),r[o].m(t,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},i:x,o:x,d:function(e){e&&v(t),y(r,e)}}}function se(e,t,n){var r=t.open,a=t.activeGuideSection,s=t.sections,o=void 0===s?[]:s,c=o.map((function(e){return{metadata:e.metadata,subsections:e.subsections,slug:e.slug}}));return e.$set=function(e){"open"in e&&n(3,r=e.open),"activeGuideSection"in e&&n(0,a=e.activeGuideSection),"sections"in e&&n(4,o=e.sections)},[a,c,function(){n(3,r=!1)},r,o]}var oe=function(i){function u(e){var c;return t(this,u),c=n(this,r(u).call(this)),a(o(c),e,se,ae,s,{open:3,activeGuideSection:0,sections:4}),c}return e(u,c),u}();function ce(e,t,n){var r=e.slice();return r[15]=t[n],r}function ie(e){var t,n,r,a=e[7](e[15].title)+"";return{c:function(){t=i("option"),n=u(a),this.h()},l:function(e){t=f(e,"OPTION",{value:!0,selected:!0});var r=p(t);n=h(r,a),r.forEach(v),this.h()},h:function(){t.__value="example/"+e[15].slug,t.value=t.__value,t.selected=r=e[2]===e[15].slug},m:function(e,r){g(e,t,r),$(t,n)},p:function(e,n){4&n&&r!==(r=e[2]===e[15].slug)&&(t.selected=r)},d:function(e){e&&v(t)}}}function ue(e){for(var t,n,r,a,s,o,c,x,j,q,G,T,D,V,H,J,B,K,M,W,X,Y,z,F,Q,Z,ee,te,ne,re,ae,se,ue,le,fe,pe=e[3]?"Close":"Menu",he=R,ve=[],me=0;me<he.length;me+=1)ve[me]=ie(ce(e,he,me));function de(t){e[13].call(null,t)}var ge={sections:e[1]};void 0!==e[3]&&(ge.open=e[3]);var $e=new oe({props:ge});return k.push((function(){return S($e,"open",de)})),{c:function(){t=i("div"),r=l(),a=i("div"),s=i("span"),o=u(pe),x=l(),j=i("a"),q=u("Layer Cake"),G=l(),T=i("ul"),D=i("li"),V=i("select"),H=i("option"),J=u("All");for(var e=0;e<ve.length;e+=1)ve[e].c();M=l(),W=i("nav"),X=i("ul"),Y=i("li"),z=i("a"),F=u("Guide"),Z=l(),ee=i("li"),te=i("a"),ne=u("GitHub"),re=l(),ae=i("div"),w($e.$$.fragment),this.h()},l:function(e){t=f(e,"DIV",{class:!0}),p(t).forEach(v),r=m(e),a=f(e,"DIV",{class:!0});var n=p(a);s=f(n,"SPAN",{class:!0});var c=p(s);o=h(c,pe),c.forEach(v),x=m(n),j=f(n,"A",{href:!0,rel:!0,class:!0});var i=p(j);q=h(i,"Layer Cake"),i.forEach(v),n.forEach(v),G=m(e),T=f(e,"UL",{class:!0});var u=p(T);D=f(u,"LI",{class:!0});var l=p(D);V=f(l,"SELECT",{value:!0,class:!0});var d=p(V);H=f(d,"OPTION",{selected:!0,value:!0});var g=p(H);J=h(g,"All"),g.forEach(v);for(var $=0;$<ve.length;$+=1)ve[$].l(d);d.forEach(v),l.forEach(v),u.forEach(v),M=m(e),W=f(e,"NAV",{class:!0});var b=p(W);X=f(b,"UL",{class:!0});var y=p(X);Y=f(y,"LI",{class:!0});var E=p(Y);z=f(E,"A",{rel:!0,class:!0,href:!0});var k=p(z);F=h(k,"Guide"),k.forEach(v),E.forEach(v),Z=m(y),ee=f(y,"LI",{class:!0});var S=p(ee);te=f(S,"A",{href:!0,class:!0});var w=p(te);ne=h(w,"GitHub"),w.forEach(v),S.forEach(v),y.forEach(v),re=m(b),ae=f(b,"DIV",{class:!0});var L=p(ae);_($e.$$.fragment,L),L.forEach(v),b.forEach(v),this.h()},h:function(){d(t,"class",n=(e[3]?"open":"closed")+" mousecatcher svelte-a7ao2m"),d(s,"class",c="menu-link "+(e[3]?"menu-open":"menu-closed")+" svelte-a7ao2m"),d(j,"href","."),d(j,"rel","prefetch"),d(j,"class","logo svelte-a7ao2m"),d(a,"class","container svelte-a7ao2m"),H.selected=B=""===e[2],H.__value="",H.value=H.__value,d(V,"class","svelte-a7ao2m"),d(D,"class","svelte-a7ao2m"),d(T,"class","dropdown svelte-a7ao2m"),d(z,"rel","prefetch"),d(z,"class",Q=L("guide"===e[0]?"active":"")+" svelte-a7ao2m"),d(z,"href","guide"),d(Y,"class","svelte-a7ao2m"),d(te,"href","https://github.com/mhkeller/layercake"),d(te,"class","svelte-a7ao2m"),d(ee,"class","svelte-a7ao2m"),d(X,"class","primary svelte-a7ao2m"),d(ae,"class","secondary svelte-a7ao2m"),d(W,"class",ue=L(e[3]?"open":"closed")+" svelte-a7ao2m")},m:function(n,c){g(n,t,c),g(n,r,c),g(n,a,c),$(a,s),$(s,o),$(a,x),$(a,j),$(j,q),g(n,G,c),g(n,T,c),$(T,D),$(D,V),$(V,H),$(H,J);for(var i=0;i<ve.length;i+=1)ve[i].m(V,null);K=e[5].path;for(var u=0;u<V.options.length;u+=1){var l=V.options[u];if(l.__value===K){l.selected=!0;break}}g(n,M,c),g(n,W,c),$(W,X),$(X,Y),$(Y,z),$(z,F),$(X,Z),$(X,ee),$(ee,te),$(te,ne),$(W,re),$(W,ae),A($e,ae,null),e[14](W),le=!0,fe=[b(t,"click",e[11]),b(s,"click",e[9]),b(V,"change",e[8]),b(z,"click",e[12])]},p:function(e,r){var a=E(r,1)[0];if((!le||8&a&&n!==(n=(e[3]?"open":"closed")+" mousecatcher svelte-a7ao2m"))&&d(t,"class",n),(!le||8&a)&&pe!==(pe=e[3]?"Close":"Menu")&&P(o,pe),(!le||8&a&&c!==(c="menu-link "+(e[3]?"menu-open":"menu-closed")+" svelte-a7ao2m"))&&d(s,"class",c),(!le||4&a&&B!==(B=""===e[2]))&&(H.selected=B),132&a){var i;for(he=R,i=0;i<he.length;i+=1){var u=ce(e,he,i);ve[i]?ve[i].p(u,a):(ve[i]=ie(u),ve[i].c(),ve[i].m(V,null))}for(;i<ve.length;i+=1)ve[i].d(1);ve.length=he.length}if(!le||32&a&&K!==(K=e[5].path))for(var l=0;l<V.options.length;l+=1){var f=V.options[l];if(f.__value===K){f.selected=!0;break}}(!le||1&a&&Q!==(Q=L("guide"===e[0]?"active":"")+" svelte-a7ao2m"))&&d(z,"class",Q);var p={};2&a&&(p.sections=e[1]),!se&&8&a&&(se=!0,p.open=e[3],C((function(){return se=!1}))),$e.$set(p),(!le||8&a&&ue!==(ue=L(e[3]?"open":"closed")+" svelte-a7ao2m"))&&d(W,"class",ue)},i:function(e){le||(U($e.$$.fragment,e),le=!0)},o:function(e){I($e.$$.fragment,e),le=!1},d:function(n){n&&v(t),n&&v(r),n&&v(a),n&&v(G),n&&v(T),y(ve,n),n&&v(M),n&&v(W),N($e),e[14](null),O(fe)}}}function le(e,t,n){var r,a=t.segment,s=t.sections,o="",c=mt().page;j(e,c,(function(e){return n(5,r=e)}));var i,u=!1;var l;return e.$set=function(e){"segment"in e&&n(0,a=e.segment),"sections"in e&&n(1,s=e.sections)},e.$$.update=function(){32&e.$$.dirty&&n(10,l=r.path),1024&e.$$.dirty&&n(2,o=l.split("/").pop())},[a,s,o,u,i,r,c,function(e){return e.split(" (")[0]},function(){n(3,u=!1),Ce(this.value||"/")},function(){u?setTimeout((function(){u||n(4,i.scrollTop=0,i)}),350):n(4,i.scrollTop=0,i),n(3,u=!u)},l,function(){return n(3,u=!1)},function(){return n(3,u=!1)},function(e){n(3,u=e)},function(e){k[e?"unshift":"push"]((function(){n(4,i=e)}))}]}var fe=function(i){function u(e){var c;return t(this,u),c=n(this,r(u).call(this)),a(o(c),e,le,ue,s,{segment:0,sections:1}),c}return e(u,c),u}();function pe(e){var t,n,r,a=new fe({props:{segment:e[0],sections:e[1],slug:e[2]}}),s=e[5].default,o=G(s,e,e[4],null);return{c:function(){w(a.$$.fragment),t=l(),n=i("main"),o&&o.c()},l:function(e){_(a.$$.fragment,e),t=m(e),n=f(e,"MAIN",{});var r=p(n);o&&o.l(r),r.forEach(v)},m:function(e,s){A(a,e,s),g(e,t,s),g(e,n,s),o&&o.m(n,null),r=!0},p:function(e,t){var n=E(t,1)[0],r={};1&n&&(r.segment=e[0]),2&n&&(r.sections=e[1]),4&n&&(r.slug=e[2]),a.$set(r),o&&o.p&&16&n&&o.p(T(s,e,e[4],null),D(s,e[4],n,null))},i:function(e){r||(U(a.$$.fragment,e),U(o,e),r=!0)},o:function(e){I(a.$$.fragment,e),I(o,e),r=!1},d:function(e){N(a,e),e&&v(t),e&&v(n),o&&o.d(e)}}}function he(e){return ve.apply(this,arguments)}function ve(){return(ve=Q(q.mark((function e(t){var n;return q.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.page,t.session,e.abrupt("return",this.fetch("api/guide").then((function(e){return e.json()})).then((function(e){return{sections:e,page:n}})));case 2:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}function me(e,t,n){var r,a=t.page,s=void 0===a?{}:a,o=t.segment,c=t.sections;s.params&&(r=s.params.slug);var i=t.$$slots,u=void 0===i?{}:i,l=t.$$scope;return e.$set=function(e){"page"in e&&n(3,s=e.page),"segment"in e&&n(0,o=e.segment),"sections"in e&&n(1,c=e.sections),"$$scope"in e&&n(4,l=e.$$scope)},[o,c,r,s,l,u]}var de=function(i){function u(e){var c;return t(this,u),c=n(this,r(u).call(this)),a(o(c),e,me,pe,s,{page:3,segment:0,sections:1}),c}return e(u,c),u}();function ge(e){var t,n,r=e[1].stack+"";return{c:function(){t=i("pre"),n=u(r)},l:function(e){t=f(e,"PRE",{});var a=p(t);n=h(a,r),a.forEach(v)},m:function(e,r){g(e,t,r),$(t,n)},p:function(e,t){2&t&&r!==(r=e[1].stack+"")&&P(n,r)},d:function(e){e&&v(t)}}}function $e(e){var t,n,r,a,s,o,c,b,y,k=e[1].message+"";document.title=t=e[0];var S=e[2]&&e[1].stack&&ge(e);return{c:function(){n=l(),r=i("h1"),a=u(e[0]),s=l(),o=i("p"),c=u(k),b=l(),S&&S.c(),y=V(),this.h()},l:function(t){H('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(v),n=m(t),r=f(t,"H1",{class:!0});var i=p(r);a=h(i,e[0]),i.forEach(v),s=m(t),o=f(t,"P",{class:!0});var u=p(o);c=h(u,k),u.forEach(v),b=m(t),S&&S.l(t),y=V(),this.h()},h:function(){d(r,"class","svelte-8od9u6"),d(o,"class","svelte-8od9u6")},m:function(e,t){g(e,n,t),g(e,r,t),$(r,a),g(e,s,t),g(e,o,t),$(o,c),g(e,b,t),S&&S.m(e,t),g(e,y,t)},p:function(e,n){var r=E(n,1)[0];1&r&&t!==(t=e[0])&&(document.title=t),1&r&&P(a,e[0]),2&r&&k!==(k=e[1].message+"")&&P(c,k),e[2]&&e[1].stack?S?S.p(e,r):((S=ge(e)).c(),S.m(y.parentNode,y)):S&&(S.d(1),S=null)},i:x,o:x,d:function(e){e&&v(n),e&&v(r),e&&v(s),e&&v(o),e&&v(b),S&&S.d(e),e&&v(y)}}}function be(e,t,n){var r=t.status,a=t.error;return e.$set=function(e){"status"in e&&n(0,r=e.status),"error"in e&&n(1,a=e.error)},[r,a,!1]}var ye=function(i){function u(e){var c;return t(this,u),c=n(this,r(u).call(this)),a(o(c),e,be,$e,s,{status:0,error:1}),c}return e(u,c),u}();function Ee(e){var t,n,r=[e[4].props],a=e[4].component;function s(e){for(var t={},n=0;n<r.length;n+=1)t=J(t,r[n]);return{props:t}}if(a)var o=new a(s());return{c:function(){o&&w(o.$$.fragment),t=V()},l:function(e){o&&_(o.$$.fragment,e),t=V()},m:function(e,r){o&&A(o,e,r),g(e,t,r),n=!0},p:function(e,n){var c=16&n?B(r,[K(e[4].props)]):{};if(a!==(a=e[4].component)){if(o){W();var i=o;I(i.$$.fragment,1,0,(function(){N(i,1)})),X()}a?(o=new a(s()),w(o.$$.fragment),U(o.$$.fragment,1),A(o,t.parentNode,t)):o=null}else a&&o.$set(c)},i:function(e){n||(o&&U(o.$$.fragment,e),n=!0)},o:function(e){o&&I(o.$$.fragment,e),n=!1},d:function(e){e&&v(t),o&&N(o,e)}}}function xe(e){var t,n=new ye({props:{error:e[0],status:e[1]}});return{c:function(){w(n.$$.fragment)},l:function(e){_(n.$$.fragment,e)},m:function(e,r){A(n,e,r),t=!0},p:function(e,t){var r={};1&t&&(r.error=e[0]),2&t&&(r.status=e[1]),n.$set(r)},i:function(e){t||(U(n.$$.fragment,e),t=!0)},o:function(e){I(n.$$.fragment,e),t=!1},d:function(e){N(n,e)}}}function ke(e){var t,n,r,a,s=[xe,Ee],o=[];function c(e,t){return e[0]?0:1}return t=c(e),n=o[t]=s[t](e),{c:function(){n.c(),r=V()},l:function(e){n.l(e),r=V()},m:function(e,n){o[t].m(e,n),g(e,r,n),a=!0},p:function(e,a){var i=t;(t=c(e))===i?o[t].p(e,a):(W(),I(o[i],1,1,(function(){o[i]=null})),X(),(n=o[t])||(n=o[t]=s[t](e)).c(),U(n,1),n.m(r.parentNode,r))},i:function(e){a||(U(n),a=!0)},o:function(e){I(n),a=!1},d:function(e){o[t].d(e),e&&v(r)}}}function Se(e){for(var t,n=[{segment:e[2][0]},e[3].props],r={$$slots:{default:[ke]},$$scope:{ctx:e}},a=0;a<n.length;a+=1)r=J(r,n[a]);var s=new de({props:r});return{c:function(){w(s.$$.fragment)},l:function(e){_(s.$$.fragment,e)},m:function(e,n){A(s,e,n),t=!0},p:function(e,t){var r=E(t,1)[0],a=12&r?B(n,[4&r&&{segment:e[2][0]},8&r&&K(e[3].props)]):{};83&r&&(a.$$scope={dirty:r,ctx:e}),s.$set(a)},i:function(e){t||(U(s.$$.fragment,e),t=!0)},o:function(e){I(s.$$.fragment,e),t=!1},d:function(e){N(s,e)}}}function we(e,t,n){var r=t.stores,a=t.error,s=t.status,o=t.segments,c=t.level0,i=t.level1,u=void 0===i?null:i;return M(Z,r),e.$set=function(e){"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,a=e.error),"status"in e&&n(1,s=e.status),"segments"in e&&n(2,o=e.segments),"level0"in e&&n(3,c=e.level0),"level1"in e&&n(4,u=e.level1)},[a,s,o,c,u,r]}var _e,Le=function(i){function u(e){var c;return t(this,u),c=n(this,r(u).call(this)),a(o(c),e,we,Se,s,{stores:5,error:0,status:1,segments:2,level0:3,level1:4}),c}return e(u,c),u}(),Ae=[/^\/example\/([^\/]+?).json$/,/^\/api\/guide\/?$/,/^\/api\/guide\/contents\/?$/],Pe=[{js:function(){return import("./index.99612361.js")},css:["legacy/index.99612361.css","legacy/_examples.64d30181.css"]},{js:function(){return import("./[slug].45046842.js")},css:["legacy/[slug].45046842.css","legacy/_examples.64d30181.css"]}],Re=(_e=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/example\/([^\/]+?)\/?$/,parts:[null,{i:1,params:function(e){return{slug:_e(e[1])}}}]}]);function Ce(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},n=ze(new URL(e,document.baseURI));return n?(We[t.replaceState?"replaceState":"pushState"]({id:Be},"",e),Qe(n,null).then((function(){}))):(location.href=e,new Promise((function(e){})))}var Ue,Ie,Ne,Oe,je,qe="undefined"!=typeof __SAPPER__&&__SAPPER__,Ge=!1,Te=[],De="{}",Ve={page:Y({}),preloading:Y(null),session:Y(qe&&qe.session)};Ve.session.subscribe(function(){var e=Q(q.mark((function e(t){var n,r,a,s,o,c;return q.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Oe=t,Ge){e.next=3;break}return e.abrupt("return");case 3:return je=!0,n=ze(new URL(location.href)),r=Ie={},e.next=8,rt(n);case 8:if(a=e.sent,s=a.redirect,o=a.props,c=a.branch,r===Ie){e.next=14;break}return e.abrupt("return");case 14:return e.next=16,et(s,c,o,n.page);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var He,Je=null;var Be,Ke=1;var Me,We="undefined"!=typeof history?history:{pushState:function(e,t,n){},replaceState:function(e,t,n){},scrollRestoration:""},Xe={};function Ye(e){var t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var n=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),r=E(n,3),a=r[1],s=r[2],o=void 0===s?"":s;"string"==typeof t[a]&&(t[a]=[t[a]]),"object"===z(t[a])?t[a].push(o):t[a]=o})),t}function ze(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(qe.baseUrl))return null;var t=e.pathname.slice(qe.baseUrl.length);if(""===t&&(t="/"),!Ae.some((function(e){return e.test(t)})))for(var n=0;n<Re.length;n+=1){var r=Re[n],a=r.pattern.exec(t);if(a){var s=Ye(e.search),o=r.parts[r.parts.length-1],c=o.params?o.params(a):{},i={host:location.host,path:t,query:s,params:c};return{href:e.href,route:r,match:a,page:i}}}}function Fe(){return{x:pageXOffset,y:pageYOffset}}function Qe(e,t,n,r){return Ze.apply(this,arguments)}function Ze(){return(Ze=Q(q.mark((function e(t,n,r,a){var s,o,c,i,u,l,f,p,h;return q.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n?Be=n:(s=Fe(),Xe[Be]=s,n=Be=++Ke,Xe[Be]=r?s:{x:0,y:0}),Be=n,Ue&&Ve.preloading.set(!0),o=Je&&Je.href===t.href?Je.promise:rt(t),Je=null,c=Ie={},e.next=8,o;case 8:if(i=e.sent,u=i.redirect,l=i.props,f=i.branch,c===Ie){e.next=14;break}return e.abrupt("return");case 14:return e.next=16,et(u,f,l,t.page);case 16:document.activeElement&&document.activeElement.blur(),r||(p=Xe[n],a&&(h=document.getElementById(a.slice(1)))&&(p={x:0,y:h.getBoundingClientRect().top}),Xe[Be]=p,p&&scrollTo(p.x,p.y));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function et(e,t,n,r){return tt.apply(this,arguments)}function tt(){return(tt=Q(q.mark((function e(t,n,r,a){var s,o;return q.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",Ce(t.location,{replaceState:!0}));case 2:if(Ve.page.set(a),Ve.preloading.set(!1),!Ue){e.next=8;break}Ue.$set(r),e.next=17;break;case 8:return r.stores={page:{subscribe:Ve.page.subscribe},preloading:{subscribe:Ve.preloading.subscribe},session:Ve.session},e.next=11,Ne;case 11:if(e.t0=e.sent,r.level0={props:e.t0},s=document.querySelector("#sapper-head-start"),o=document.querySelector("#sapper-head-end"),s&&o){for(;s.nextSibling!==o;)ct(s.nextSibling);ct(s),ct(o)}Ue=new Le({target:He,props:r,hydrate:!0});case 17:Te=n,De=JSON.stringify(a.query),Ge=!0,je=!1;case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function nt(e,t,n,r){if(r!==De)return!0;var a=Te[e];return!!a&&(t!==a.segment||(!(!a.match||JSON.stringify(a.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0))}function rt(e){return at.apply(this,arguments)}function at(){return(at=Q(q.mark((function e(t){var n,r,a,s,o,c,i,u,l,f,p;return q.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,r=t.page,a=r.path.split("/").filter(Boolean),s=null,o={error:null,status:200,segments:[a[0]]},c={fetch:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t){return fetch(e,t)})),redirect:function(e,t){if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:function(e,t){o.error="string"==typeof t?new Error(t):t,o.status=e}},Ne||(Ne=qe.preloaded[0]||he.call(c,{host:r.host,path:r.path,query:r.query,params:{}},Oe)),u=1,e.prev=7,l=JSON.stringify(r.query),f=n.pattern.exec(r.path),p=!1,e.next=13,Promise.all(n.parts.map(function(){var e=Q(q.mark((function e(n,s){var i,h,v,m,d,g;return q.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=a[s],nt(s,i,f,l)&&(p=!0),o.segments[u]=a[s+1],n){e.next=5;break}return e.abrupt("return",{segment:i});case 5:if(h=u++,je||p||!Te[s]||Te[s].part!==n.i){e.next=8;break}return e.abrupt("return",Te[s]);case 8:return p=!1,e.next=11,ot(Pe[n.i]);case 11:if(v=e.sent,m=v.default,d=v.preload,!Ge&&qe.preloaded[s+1]){e.next=25;break}if(!d){e.next=21;break}return e.next=18,d.call(c,{host:r.host,path:r.path,query:r.query,params:n.params?n.params(t.match):{}},Oe);case 18:e.t0=e.sent,e.next=22;break;case 21:e.t0={};case 22:g=e.t0,e.next=26;break;case 25:g=qe.preloaded[s+1];case 26:return e.abrupt("return",o["level".concat(h)]={component:m,props:g,segment:i,match:f,part:n.i});case 27:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 13:i=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),o.error=e.t0,o.status=500,i=[];case 21:return e.abrupt("return",{redirect:s,props:o,branch:i});case 22:case"end":return e.stop()}}),e,null,[[7,16]])})))).apply(this,arguments)}function st(e){var t="client/".concat(e);if(!document.querySelector('link[href="'.concat(t,'"]')))return new Promise((function(e,n){var r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=function(){return e()},r.onerror=n,document.head.appendChild(r)}))}function ot(e){var t="string"==typeof e.css?[]:e.css.map(st);return t.unshift(e.js()),Promise.all(t).then((function(e){return e[0]}))}function ct(e){e.parentNode.removeChild(e)}function it(e){var t=ze(new URL(e,document.baseURI));if(t)return Je&&e===Je.href||function(e,t){Je={href:e,promise:t}}(e,rt(t)),Je.promise}function ut(e){clearTimeout(Me),Me=setTimeout((function(){lt(e)}),20)}function lt(e){var t=pt(e.target);t&&"prefetch"===t.rel&&it(t.href)}function ft(e){if(1===function(e){return null===e.which?e.button:e.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var t=pt(e.target);if(t&&t.href){var n="object"===z(t.href)&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r!==location.href){if(!t.hasAttribute("download")&&"external"!==t.getAttribute("rel")&&(n?!t.target.baseVal:!t.target)){var a=new URL(r);if(a.pathname!==location.pathname||a.search!==location.search){var s=ze(a);if(s)Qe(s,null,t.hasAttribute("sapper-noscroll"),a.hash),e.preventDefault(),We.pushState({id:Be},"",a.href)}}}else location.hash||e.preventDefault()}}}function pt(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function ht(e){if(Xe[Be]=Fe(),e.state){var t=ze(new URL(location.href));t?Qe(t,e.state.id):location.href=location.href}else(function(e){Be=e})(Ke=Ke+1),We.replaceState({id:Be},"",location.href)}var vt,mt=function(){return F(Z)};vt={target:document.querySelector("#sapper")},"scrollRestoration"in We&&(We.scrollRestoration="manual"),function(e){He=e}(vt.target),addEventListener("click",ft),addEventListener("popstate",ht),addEventListener("touchstart",lt),addEventListener("mousemove",ut),Promise.resolve().then((function(){var e=location,t=e.hash,n=e.href;We.replaceState({id:Ke},"",n);var r,a,s,o,c,i,u,l,f=new URL(location.href);if(qe.error)return r=location,a=r.host,s=r.pathname,o=r.search,c=qe.session,i=qe.preloaded,u=qe.status,l=qe.error,Ne||(Ne=i&&i[0]),void et(null,[],{error:l,status:u,session:c,level0:{props:Ne},level1:{props:{status:u,error:l},component:ye},segments:i},{host:a,path:s,query:Ye(o),params:{}});var p=ze(f);return p?Qe(p,Ke,!0,t):void 0}));