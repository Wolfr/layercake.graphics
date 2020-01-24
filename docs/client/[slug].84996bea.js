import{S as e,a as t,s,e as n,B as r,b as l,d as i,C as a,f as o,g as h,M as c,L as p,j as u,w as g,n as d,D as f,x as m,y as b,G as k,H as x,X as w,I as _,o as $,V as y,t as v,J as S,F as z,$ as A,U as R}from"./index.f58dd5f4.js";import{c as j,e as L}from"./_examples.963e9131.js";import{h as D,a as E}from"./hljsDefineSvelte.1dfa86b6.js";var C=j((function(e){function t(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1},getDefaults:t,changeDefaults:function(t){e.exports.defaults=t}}}));C.defaults,C.getDefaults,C.changeDefaults;const Z=/[&<>"']/,q=/[&<>"']/g,I=/[<>"']|&(?!#?\w+;)/,O=/[<>"']|&(?!#?\w+;)/g,T={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},U=e=>T[e];const B=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function P(e){return e.replace(B,(e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")}const M=/(^|[^\[])\^/g;const V=/[^\w:]/g,H=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;const N={},F=/^[^:]+:\/*[^/]*$/,J=/^([^:]+:)[\s\S]*$/,X=/^([^:]+:\/*[^/]*)[\s\S]*$/;function G(e,t){N[" "+e]||(F.test(e)?N[" "+e]=e+"/":N[" "+e]=K(e,"/",!0));const s=-1===(e=N[" "+e]).indexOf(":");return"//"===t.substring(0,2)?s?t:e.replace(J,"$1")+t:"/"===t.charAt(0)?s?t:e.replace(X,"$1")+t:e+t}function K(e,t,s){const n=e.length;if(0===n)return"";let r=0;for(;r<n;){const l=e.charAt(n-r-1);if(l!==t||s){if(l===t||!s)break;r++}else r++}return e.substr(0,n-r)}var W={escape:function(e,t){if(t){if(Z.test(e))return e.replace(q,U)}else if(I.test(e))return e.replace(O,U);return e},unescape:P,edit:function(e,t){e=e.source||e,t=t||"";const s={replace:(t,n)=>(n=(n=n.source||n).replace(M,"$1"),e=e.replace(t,n),s),getRegex:()=>new RegExp(e,t)};return s},cleanUrl:function(e,t,s){if(e){let e;try{e=decodeURIComponent(P(s)).replace(V,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!H.test(s)&&(s=G(t,s));try{s=encodeURI(s).replace(/%25/g,"%")}catch(e){return null}return s},resolveUrl:G,noopTest:{exec:function(){}},merge:function(e){let t,s,n=1;for(;n<arguments.length;n++)for(s in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},splitCells:function(e,t){const s=e.replace(/\|/g,(e,t,s)=>{let n=!1,r=t;for(;--r>=0&&"\\"===s[r];)n=!n;return n?"|":" |"}).split(/ \|/);let n=0;if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;n<s.length;n++)s[n]=s[n].trim().replace(/\\\|/g,"|");return s},rtrim:K,findClosingBracket:function(e,t){if(-1===e.indexOf(t[1]))return-1;const s=e.length;let n=0,r=0;for(;r<s;r++)if("\\"===e[r])r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return-1},checkSanitizeDeprecation:function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}};const{noopTest:Q,edit:Y,merge:ee}=W,te={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:Q,table:Q,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};te.def=Y(te.def).replace("label",te._label).replace("title",te._title).getRegex(),te.bullet=/(?:[*+-]|\d{1,9}\.)/,te.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,te.item=Y(te.item,"gm").replace(/bull/g,te.bullet).getRegex(),te.list=Y(te.list).replace(/bull/g,te.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+te.def.source+")").getRegex(),te._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",te._comment=/<!--(?!-?>)[\s\S]*?-->/,te.html=Y(te.html,"i").replace("comment",te._comment).replace("tag",te._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),te.paragraph=Y(te._paragraph).replace("hr",te.hr).replace("heading"," {0,3}#{1,6} +").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",te._tag).getRegex(),te.blockquote=Y(te.blockquote).replace("paragraph",te.paragraph).getRegex(),te.normal=ee({},te),te.gfm=ee({},te.normal,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),te.pedantic=ee({},te.normal,{html:Y("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",te._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:Q,paragraph:Y(te.normal._paragraph).replace("hr",te.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",te.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const se={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Q,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Q,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"};se.em=Y(se.em).replace(/punctuation/g,se._punctuation).getRegex(),se._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,se._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,se._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,se.autolink=Y(se.autolink).replace("scheme",se._scheme).replace("email",se._email).getRegex(),se._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,se.tag=Y(se.tag).replace("comment",te._comment).replace("attribute",se._attribute).getRegex(),se._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,se._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,se._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,se.link=Y(se.link).replace("label",se._label).replace("href",se._href).replace("title",se._title).getRegex(),se.reflink=Y(se.reflink).replace("label",se._label).getRegex(),se.normal=ee({},se),se.pedantic=ee({},se.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:Y(/^!?\[(label)\]\((.*?)\)/).replace("label",se._label).getRegex(),reflink:Y(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",se._label).getRegex()}),se.gfm=ee({},se.normal,{escape:Y(se.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),se.gfm.url=Y(se.gfm.url,"i").replace("email",se.gfm._extended_email).getRegex(),se.breaks=ee({},se.gfm,{br:Y(se.br).replace("{2,}","*").getRegex(),text:Y(se.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var ne={block:te,inline:se};const{defaults:re}=C,{block:le}=ne,{rtrim:ie,splitCells:ae,escape:oe}=W;var he=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||re,this.rules=le.normal,this.options.pedantic?this.rules=le.pedantic:this.options.gfm&&(this.rules=le.gfm)}static get rules(){return le}static lex(t,s){return new e(s).lex(t)}lex(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.token(e,!0)}token(e,t){let s,n,r,l,i,a,o,h,c,p,u,g,d,f,m,b;for(e=e.replace(/^ +$/gm,"");e;)if((r=this.rules.newline.exec(e))&&(e=e.substring(r[0].length),r[0].length>1&&this.tokens.push({type:"space"})),r=this.rules.code.exec(e)){const t=this.tokens[this.tokens.length-1];e=e.substring(r[0].length),t&&"paragraph"===t.type?t.text+="\n"+r[0].trimRight():(r=r[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?r:ie(r,"\n")}))}else if(r=this.rules.fences.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"code",lang:r[2]?r[2].trim():r[2],text:r[3]||""});else if(r=this.rules.heading.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"heading",depth:r[1].length,text:r[2]});else if((r=this.rules.nptable.exec(e))&&(a={type:"table",header:ae(r[1].replace(/^ *| *\| *$/g,"")),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:r[3]?r[3].replace(/\n$/,"").split("\n"):[]},a.header.length===a.align.length)){for(e=e.substring(r[0].length),u=0;u<a.align.length;u++)/^ *-+: *$/.test(a.align[u])?a.align[u]="right":/^ *:-+: *$/.test(a.align[u])?a.align[u]="center":/^ *:-+ *$/.test(a.align[u])?a.align[u]="left":a.align[u]=null;for(u=0;u<a.cells.length;u++)a.cells[u]=ae(a.cells[u],a.header.length);this.tokens.push(a)}else if(r=this.rules.hr.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"hr"});else if(r=this.rules.blockquote.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"blockquote_start"}),r=r[0].replace(/^ *> ?/gm,""),this.token(r,t),this.tokens.push({type:"blockquote_end"});else if(r=this.rules.list.exec(e)){for(e=e.substring(r[0].length),l=r[2],f=l.length>1,o={type:"list_start",ordered:f,start:f?+l:"",loose:!1},this.tokens.push(o),r=r[0].match(this.rules.item),h=[],s=!1,d=r.length,u=0;u<d;u++)a=r[u],p=a.length,a=a.replace(/^ *([*+-]|\d+\.) */,""),~a.indexOf("\n ")&&(p-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+p+"}","gm"),"")),u!==d-1&&(i=le.bullet.exec(r[u+1])[0],(l.length>1?1===i.length:i.length>1||this.options.smartLists&&i!==l)&&(e=r.slice(u+1).join("\n")+e,u=d-1)),n=s||/\n\n(?!\s*$)/.test(a),u!==d-1&&(s="\n"===a.charAt(a.length-1),n||(n=s)),n&&(o.loose=!0),m=/^\[[ xX]\] /.test(a),b=void 0,m&&(b=" "!==a[1],a=a.replace(/^\[[ xX]\] +/,"")),c={type:"list_item_start",task:m,checked:b,loose:n},h.push(c),this.tokens.push(c),this.token(a,!1),this.tokens.push({type:"list_item_end"});if(o.loose)for(d=h.length,u=0;u<d;u++)h[u].loose=!0;this.tokens.push({type:"list_end"})}else if(r=this.rules.html.exec(e))e=e.substring(r[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===r[1]||"script"===r[1]||"style"===r[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):oe(r[0]):r[0]});else if(t&&(r=this.rules.def.exec(e)))e=e.substring(r[0].length),r[3]&&(r[3]=r[3].substring(1,r[3].length-1)),g=r[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[g]||(this.tokens.links[g]={href:r[2],title:r[3]});else if((r=this.rules.table.exec(e))&&(a={type:"table",header:ae(r[1].replace(/^ *| *\| *$/g,"")),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:r[3]?r[3].replace(/\n$/,"").split("\n"):[]},a.header.length===a.align.length)){for(e=e.substring(r[0].length),u=0;u<a.align.length;u++)/^ *-+: *$/.test(a.align[u])?a.align[u]="right":/^ *:-+: *$/.test(a.align[u])?a.align[u]="center":/^ *:-+ *$/.test(a.align[u])?a.align[u]="left":a.align[u]=null;for(u=0;u<a.cells.length;u++)a.cells[u]=ae(a.cells[u].replace(/^ *\| *| *\| *$/g,""),a.header.length);this.tokens.push(a)}else if(r=this.rules.lheading.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"heading",depth:"="===r[2].charAt(0)?1:2,text:r[1]});else if(t&&(r=this.rules.paragraph.exec(e)))e=e.substring(r[0].length),this.tokens.push({type:"paragraph",text:"\n"===r[1].charAt(r[1].length-1)?r[1].slice(0,-1):r[1]});else if(r=this.rules.text.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"text",text:r[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens}};const{defaults:ce}=C,{cleanUrl:pe,escape:ue}=W;var ge=class{constructor(e){this.options=e||ce}code(e,t,s){const n=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,n);null!=t&&t!==e&&(s=!0,e=t)}return n?'<pre><code class="'+this.options.langPrefix+ue(n,!0)+'">'+(s?e:ue(e,!0))+"</code></pre>\n":"<pre><code>"+(s?e:ue(e,!0))+"</code></pre>"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,s,n){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+n.slug(s)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,s){const n=t?"ol":"ul";return"<"+n+(t&&1!==s?' start="'+s+'"':"")+">\n"+e+"</"+n+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const s=t.header?"th":"td";return(t.align?"<"+s+' align="'+t.align+'">':"<"+s+">")+e+"</"+s+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,s){if(null===(e=pe(this.options.sanitize,this.options.baseUrl,e)))return s;let n='<a href="'+ue(e)+'"';return t&&(n+=' title="'+t+'"'),n+=">"+s+"</a>",n}image(e,t,s){if(null===(e=pe(this.options.sanitize,this.options.baseUrl,e)))return s;let n='<img src="'+e+'" alt="'+s+'"';return t&&(n+=' title="'+t+'"'),n+=this.options.xhtml?"/>":">",n}text(e){return e}},de=class{constructor(){this.seen={}}slug(e){let t=e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){const e=t;do{this.seen[e]++,t=e+"-"+this.seen[e]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t}};const{defaults:fe}=C,{inline:me}=ne,{findClosingBracket:be,escape:ke}=W;var xe=class e{constructor(e,t){if(this.options=t||fe,this.links=e,this.rules=me.normal,this.options.renderer=this.options.renderer||new ge,this.renderer=this.options.renderer,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=me.pedantic:this.options.gfm&&(this.options.breaks?this.rules=me.breaks:this.rules=me.gfm)}static get rules(){return me}static output(t,s,n){return new e(s,n).output(t)}output(t){let s,n,r,l,i,a,o="";for(;t;)if(i=this.rules.escape.exec(t))t=t.substring(i[0].length),o+=ke(i[1]);else if(i=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0])&&(this.inRawBlock=!1),t=t.substring(i[0].length),o+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):ke(i[0]):i[0];else if(i=this.rules.link.exec(t)){const n=be(i[2],"()");if(n>-1){const e=(0===i[0].indexOf("!")?5:4)+i[1].length+n;i[2]=i[2].substring(0,n),i[0]=i[0].substring(0,e).trim(),i[3]=""}t=t.substring(i[0].length),this.inLink=!0,r=i[2],this.options.pedantic?(s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r),s?(r=s[1],l=s[3]):l=""):l=i[3]?i[3].slice(1,-1):"",r=r.trim().replace(/^<([\s\S]*)>$/,"$1"),o+=this.outputLink(i,{href:e.escapes(r),title:e.escapes(l)}),this.inLink=!1}else if((i=this.rules.reflink.exec(t))||(i=this.rules.nolink.exec(t))){if(t=t.substring(i[0].length),s=(i[2]||i[1]).replace(/\s+/g," "),s=this.links[s.toLowerCase()],!s||!s.href){o+=i[0].charAt(0),t=i[0].substring(1)+t;continue}this.inLink=!0,o+=this.outputLink(i,s),this.inLink=!1}else if(i=this.rules.strong.exec(t))t=t.substring(i[0].length),o+=this.renderer.strong(this.output(i[4]||i[3]||i[2]||i[1]));else if(i=this.rules.em.exec(t))t=t.substring(i[0].length),o+=this.renderer.em(this.output(i[6]||i[5]||i[4]||i[3]||i[2]||i[1]));else if(i=this.rules.code.exec(t))t=t.substring(i[0].length),o+=this.renderer.codespan(ke(i[2].trim(),!0));else if(i=this.rules.br.exec(t))t=t.substring(i[0].length),o+=this.renderer.br();else if(i=this.rules.del.exec(t))t=t.substring(i[0].length),o+=this.renderer.del(this.output(i[1]));else if(i=this.rules.autolink.exec(t))t=t.substring(i[0].length),"@"===i[2]?(n=ke(this.mangle(i[1])),r="mailto:"+n):(n=ke(i[1]),r=n),o+=this.renderer.link(r,null,n);else if(this.inLink||!(i=this.rules.url.exec(t))){if(i=this.rules.text.exec(t))t=t.substring(i[0].length),this.inRawBlock?o+=this.renderer.text(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):ke(i[0]):i[0]):o+=this.renderer.text(ke(this.smartypants(i[0])));else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}else{if("@"===i[2])n=ke(i[0]),r="mailto:"+n;else{do{a=i[0],i[0]=this.rules._backpedal.exec(i[0])[0]}while(a!==i[0]);n=ke(i[0]),r="www."===i[1]?"http://"+n:n}t=t.substring(i[0].length),o+=this.renderer.link(r,null,n)}return o}static escapes(t){return t?t.replace(e.rules._escapes,"$1"):t}outputLink(e,t){const s=t.href,n=t.title?ke(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(s,n,this.output(e[1])):this.renderer.image(s,n,ke(e[1]))}smartypants(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e}mangle(e){if(!this.options.mangle)return e;const t=e.length;let s,n="",r=0;for(;r<t;r++)s=e.charCodeAt(r),Math.random()>.5&&(s="x"+s.toString(16)),n+="&#"+s+";";return n}},we=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}text(e){return e}link(e,t,s){return""+s}image(e,t,s){return""+s}br(){return""}};const{defaults:_e}=C,{merge:$e,unescape:ye}=W;var ve=class e{constructor(e){this.tokens=[],this.token=null,this.options=e||_e,this.options.renderer=this.options.renderer||new ge,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new de}static parse(t,s){return new e(s).parse(t)}parse(e){this.inline=new xe(e.links,this.options),this.inlineText=new xe(e.links,$e({},this.options,{renderer:new we})),this.tokens=e.reverse();let t="";for(;this.next();)t+=this.tok();return t}next(){return this.token=this.tokens.pop(),this.token}peek(){return this.tokens[this.tokens.length-1]||0}parseText(){let e=this.token.text;for(;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)}tok(){let e="";switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,ye(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":{let t,s,n,r,l="";for(n="",t=0;t<this.token.header.length;t++)n+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{header:!0,align:this.token.align[t]});for(l+=this.renderer.tablerow(n),t=0;t<this.token.cells.length;t++){for(s=this.token.cells[t],n="",r=0;r<s.length;r++)n+=this.renderer.tablecell(this.inline.output(s[r]),{header:!1,align:this.token.align[r]});e+=this.renderer.tablerow(n)}return this.renderer.table(l,e)}case"blockquote_start":for(e="";"blockquote_end"!==this.next().type;)e+=this.tok();return this.renderer.blockquote(e);case"list_start":{e="";const t=this.token.ordered,s=this.token.start;for(;"list_end"!==this.next().type;)e+=this.tok();return this.renderer.list(e,t,s)}case"list_item_start":{e="";const t=this.token.loose,s=this.token.checked,n=this.token.task;if(this.token.task)if(t)if("text"===this.peek().type){const e=this.peek();e.text=this.renderer.checkbox(s)+" "+e.text}else this.tokens.push({type:"text",text:this.renderer.checkbox(s)});else e+=this.renderer.checkbox(s);for(;"list_item_end"!==this.next().type;)e+=t||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(e,n,s)}case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:{const e='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(e);console.log(e)}}}};const{merge:Se,checkSanitizeDeprecation:ze,escape:Ae}=W,{getDefaults:Re,changeDefaults:je,defaults:Le}=C;function De(e,t,s){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(s||"function"==typeof t){s||(s=t,t=null),t=Se({},De.defaults,t||{}),ze(t);const n=t.highlight;let r,l,i=0;try{r=he.lex(e,t)}catch(e){return s(e)}l=r.length;const a=function(e){if(e)return t.highlight=n,s(e);let l;try{l=ve.parse(r,t)}catch(t){e=t}return t.highlight=n,e?s(e):s(null,l)};if(!n||n.length<3)return a();if(delete t.highlight,!l)return a();for(;i<r.length;i++)!function(e){"code"!==e.type?--l||a():n(e.text,e.lang,(function(t,s){return t?a(t):null==s||s===e.text?--l||a():(e.text=s,e.escaped=!0,void(--l||a()))}))}(r[i])}else try{return t=Se({},De.defaults,t||{}),ze(t),ve.parse(he.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||De.defaults).silent)return"<p>An error occurred:</p><pre>"+Ae(e.message+"",!0)+"</pre>";throw e}}De.options=De.setOptions=function(e){return Se(De.defaults,e),je(De.defaults),De},De.getDefaults=Re,De.defaults=Le,De.Parser=ve,De.parser=ve.parse,De.Renderer=ge,De.TextRenderer=we,De.Lexer=he,De.lexer=he.lex,De.InlineLexer=xe,De.inlineLexer=xe.output,De.Slugger=de,De.parse=De;var Ee=De;const Ce=[];for(let e=0;e<256;e++){let t=e;for(let e=0;e<8;e++)t=1&t?3988292384^t>>>1:t>>>1;Ce[e]=t}var Ze=e=>{let t=-1;for(const s of e)t=t>>>8^Ce[255&(t^s)];return-1^t};const qe=(e,t)=>{const s=[];for(;t--;)s.push(255&e),e>>>=8;return s},Ie=e=>"string"==typeof e?[...e].map(e=>e.charCodeAt(0)):e;var Oe=e=>{let t=[];const s=[];for(const{path:n,data:r}of e){const e=Ie(r),l=Ie(n),i=[10,0,0,0,0,0,0,0,0,0,...qe(Ze(e),4),...qe(e.length,4),...qe(e.length,4),...qe(l.length,2),0,0];s.push(80,75,1,2,20,0,...i,0,0,0,0,0,0,0,0,0,0,...qe(t.length,4),...l),t=[...t,80,75,3,4,...i,...l,...e]}return[...t,...s,80,75,5,6,0,0,0,0,...qe(e.length,2),...qe(e.length,2),...qe(s.length,4),...qe(t.length,4),0,0]},Te=e=>new Blob([Uint8Array.from(Oe(e))],{type:"application/zip"}),Ue=e=>Buffer.from(Oe(e)),Be=e=>("undefined"==typeof Blob?Ue:Te)(e);function Pe(e){let t,s,f;return{c(){t=n("button"),s=r("Download      "),this.h()},l(e){t=l(e,"BUTTON",{disabled:!0,title:!0,class:!0,style:!0});var n=i(t);s=a(n,"Download      "),n.forEach(o),this.h()},h(){t.disabled=e[0],h(t,"title","download zip file"),h(t,"class","icon svelte-oy8tk5"),c(t,"background-image","url(/icons/download.svg)"),f=p(t,"click",e[1])},m(e,n){u(e,t,n),g(t,s)},p(e,[s]){1&s&&(t.disabled=e[0])},i:d,o:d,d(e){e&&o(t),f()}}}function Me(e,t,s){let{data:n}=t,{slug:r}=t,l=!1;const i=[n.main,...n.components].reduce((e,t)=>e.concat(function(e=""){return(e.match(/from\s'(.+)'?/gm)||[]).map(e=>e.replace(/(from |'|"|;)/g,"")).filter(e=>!e.startsWith("."))}(t.contents)),[]).reduce((e,t)=>e.includes(t)?e:(e.push(t),e),[]);return e.$set=e=>{"data"in e&&s(2,n=e.data),"slug"in e&&s(3,r=e.slug)},[l,async function(){s(0,l=!0);const e=(new Date).getTime(),t=await(await window.fetch(`/svelte-app.json?${e}`)).json(),a=await(await window.fetch(`/deps.json?${e}`)).json();if(i.length>0){const e=t.findIndex(({path:e})=>"package.json"===e),s=JSON.parse(t[e].data),n={},r={};i.forEach(e=>{if("layercake"===e)r[e]=a[e];else{if("svelte"===e)return;n[e]=a[e]}a[e]||window.alert(`Missing dependency, add "${e}" to layercake.graphic's package.json`)}),Object.assign(s.dependencies,n),Object.assign(s.devDependencies,r),t[e].data=JSON.stringify(s,null,"  ")}t.push(...n.components.map(e=>({path:`src/${e.title.replace("./","")}`,data:e.contents}))),t.push(...n.modules.map(e=>({path:`src/${e.title.replace("./","")}`,data:e.contents}))),t.push(...n.componentModules.map(e=>({path:`src/${e.title.replace("../","")}`,data:e.contents}))),t.push(...n.csvs.map(e=>({path:`src/${e.title.replace("../","")}`,data:e.contents}))),t.push({path:"src/App.svelte",data:n.main.contents}),((e,t)=>{const s=URL.createObjectURL(e),n=document.createElement("a");n.href=s,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),URL.revokeObjectURL(s),n.remove()})(Be(t.filter(Boolean)),`layercake-${r}.zip`),s(0,l=!1)},n,r]}class Ve extends e{constructor(e){super(),t(this,e,Me,Pe,s,{data:2,slug:3})}}const{document:He}=A;function Ne(e,t,s){const n=e.slice();return n[10]=t[s],n}function Fe(e,t,s){const n=e.slice();return n[10]=t[s],n}function Je(e){let t,s=e[5](e[1].dek)+"";return{c(){t=n("div"),this.h()},l(e){t=l(e,"DIV",{class:!0}),i(t).forEach(o),this.h()},h(){h(t,"class","dek svelte-4jwb7e")},m(e,n){u(e,t,n),t.innerHTML=s},p(e,n){2&n&&s!==(s=e[5](e[1].dek)+"")&&(t.innerHTML=s)},d(e){e&&o(t)}}}function Xe(e){let t,s,c,d,m=e[10].title+"";function b(...t){return e[9](e[10],...t)}return{c(){t=n("li"),s=r(m),this.h()},l(e){t=l(e,"LI",{class:!0});var n=i(t);s=a(n,m),n.forEach(o),this.h()},h(){h(t,"class",c="tab "+(e[2]===Ye(e[10].title)?"active":"")+" svelte-4jwb7e"),d=p(t,"click",b)},m(e,n){u(e,t,n),g(t,s)},p(n,r){e=n,8&r&&m!==(m=e[10].title+"")&&f(s,m),12&r&&c!==(c="tab "+(e[2]===Ye(e[10].title)?"active":"")+" svelte-4jwb7e")&&h(t,"class",c)},d(e){e&&o(t),d()}}}function Ge(e){let t,s,r,a=Qe(e[10].contents,e[10].title)+"";return{c(){t=n("div"),s=n("pre"),r=m(),this.h()},l(e){t=l(e,"DIV",{class:!0,style:!0});var n=i(t);s=l(n,"PRE",{class:!0}),i(s).forEach(o),r=b(n),n.forEach(o),this.h()},h(){h(s,"class","svelte-4jwb7e"),h(t,"class","contents"),c(t,"display",e[2]===Ye(e[10].title)?"block":"none")},m(e,n){u(e,t,n),g(t,s),s.innerHTML=a,g(t,r)},p(e,n){8&n&&a!==(a=Qe(e[10].contents,e[10].title)+"")&&(s.innerHTML=a),12&n&&c(t,"display",e[2]===Ye(e[10].title)?"block":"none")},d(e){e&&o(t)}}}function Ke(e){let t,s,c,d,A,j,L,D,E,C,Z,q,I,O,T,U,B,P,M,V,H,N,F,J,X=e[4].title+"";He.title=t=e[4].title;var G=e[4].component;if(G)var K=new G({});const W=new Ve({props:{data:e[1],slug:e[0]}});let Q=e[1].dek&&Je(e),Y=e[3],ee=[];for(let t=0;t<Y.length;t+=1)ee[t]=Xe(Fe(e,Y,t));let te=e[3],se=[];for(let t=0;t<te.length;t+=1)se[t]=Ge(Ne(e,te,t));return{c(){s=n("link"),c=m(),d=n("div"),A=n("h1"),j=r(X),L=n("a"),D=r("Edit"),C=m(),Z=n("div"),K&&k(K.$$.fragment),q=m(),I=n("div"),k(W.$$.fragment),O=m(),Q&&Q.c(),T=m(),U=n("div"),B=n("ul");for(let e=0;e<ee.length;e+=1)ee[e].c();P=m(),M=n("div"),V=n("div"),H=m();for(let e=0;e<se.length;e+=1)se[e].c();this.h()},l(e){s=l(e,"LINK",{rel:!0,href:!0}),c=b(e),d=l(e,"DIV",{class:!0});var t=i(d);A=l(t,"H1",{});var n=i(A);j=a(n,X),L=l(n,"A",{class:!0,href:!0,target:!0,rel:!0});var r=i(L);D=a(r,"Edit"),r.forEach(o),n.forEach(o),C=b(t),Z=l(t,"DIV",{class:!0});var h=i(Z);K&&x(K.$$.fragment,h),h.forEach(o),q=b(t),I=l(t,"DIV",{class:!0});var p=i(I);x(W.$$.fragment,p),p.forEach(o),O=b(t),Q&&Q.l(t),T=b(t),U=l(t,"DIV",{id:!0,class:!0});var u=i(U);B=l(u,"UL",{id:!0,class:!0});var g=i(B);for(let e=0;e<ee.length;e+=1)ee[e].l(g);g.forEach(o),P=b(u),M=l(u,"DIV",{id:!0,class:!0});var f=i(M);V=l(f,"DIV",{class:!0}),i(V).forEach(o),H=b(f);for(let e=0;e<se.length;e+=1)se[e].l(f);f.forEach(o),u.forEach(o),t.forEach(o),this.h()},h(){h(s,"rel","stylesheet"),h(s,"href","hljs.css"),h(L,"class","edit-repl svelte-4jwb7e"),h(L,"href",E="https://svelte.dev/repl/"+e[4].replPath),h(L,"target","_blank"),h(L,"rel","nofollow"),h(Z,"class","chart-hero svelte-4jwb7e"),h(I,"class","download svelte-4jwb7e"),h(B,"id","page-nav"),h(B,"class","svelte-4jwb7e"),h(V,"class","copy svelte-4jwb7e"),h(M,"id","contents-container"),h(M,"class","svelte-4jwb7e"),h(U,"id","pages"),h(U,"class",N=w(e[1].dek?"has-dek":"")+" svelte-4jwb7e"),h(d,"class","main svelte-4jwb7e"),J=p(V,"click",e[6])},m(e,t){g(He.head,s),u(e,c,t),u(e,d,t),g(d,A),g(A,j),g(A,L),g(L,D),g(d,C),g(d,Z),K&&_(K,Z,null),g(d,q),g(d,I),_(W,I,null),g(d,O),Q&&Q.m(d,null),g(d,T),g(d,U),g(U,B);for(let e=0;e<ee.length;e+=1)ee[e].m(B,null);g(U,P),g(U,M),g(M,V),g(M,H);for(let e=0;e<se.length;e+=1)se[e].m(M,null);F=!0},p(e,[s]){if((!F||16&s)&&t!==(t=e[4].title)&&(He.title=t),(!F||16&s)&&X!==(X=e[4].title+"")&&f(j,X),(!F||16&s&&E!==(E="https://svelte.dev/repl/"+e[4].replPath))&&h(L,"href",E),G!==(G=e[4].component)){if(K){R();const e=K;$(e.$$.fragment,1,0,()=>{S(e,1)}),y()}G?(K=new G({}),k(K.$$.fragment),v(K.$$.fragment,1),_(K,Z,null)):K=null}const n={};if(2&s&&(n.data=e[1]),1&s&&(n.slug=e[0]),W.$set(n),e[1].dek?Q?Q.p(e,s):(Q=Je(e),Q.c(),Q.m(d,T)):Q&&(Q.d(1),Q=null),12&s){let t;for(Y=e[3],t=0;t<Y.length;t+=1){const n=Fe(e,Y,t);ee[t]?ee[t].p(n,s):(ee[t]=Xe(n),ee[t].c(),ee[t].m(B,null))}for(;t<ee.length;t+=1)ee[t].d(1);ee.length=Y.length}if(12&s){let t;for(te=e[3],t=0;t<te.length;t+=1){const n=Ne(e,te,t);se[t]?se[t].p(n,s):(se[t]=Ge(n),se[t].c(),se[t].m(M,null))}for(;t<se.length;t+=1)se[t].d(1);se.length=te.length}(!F||2&s&&N!==(N=w(e[1].dek?"has-dek":"")+" svelte-4jwb7e"))&&h(U,"class",N)},i(e){F||(K&&v(K.$$.fragment,e),v(W.$$.fragment,e),F=!0)},o(e){K&&$(K.$$.fragment,e),$(W.$$.fragment,e),F=!1},d(e){o(s),e&&o(c),e&&o(d),K&&S(K),S(W),Q&&Q.d(),z(ee,e),z(se,e),J()}}}async function We({params:e,query:t}){const s=await this.fetch(`example/${e.slug}.json`),n=await s.json();if(200===s.status)return{slug:e.slug,data:n};this.error(s.status,n.message)}function Qe(e,t){const s=t.split(".");let n=s[s.length-1];return"csv"===n&&(n="diff"),D.highlight(n,e).value}function Ye(e){const t=e.split("/");return t[t.length-1].split(".")[0].toLowerCase()}function et(e,t,s){D.registerLanguage("svelte",E),E(D);let{slug:n}=t,{data:r}=t,l="index";const i=new Ee.Renderer;const a=new Map;L.forEach(e=>{a.set(e.slug,e)});let o,h;return e.$set=e=>{"slug"in e&&s(0,n=e.slug),"data"in e&&s(1,r=e.data)},e.$$.update=()=>{2&e.$$.dirty&&s(3,o=[r.main].concat(r.components).concat(r.modules).concat(r.componentModules).concat(r.csvs)),1&e.$$.dirty&&s(4,h=a.get(n))},[n,r,l,o,h,function(e){return Ee(e,{renderer:i})},function(){const e=o.filter(e=>Ye(e.title)===l)[0].contents;if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",e);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){const t=document.createElement("textarea");t.textContent=e,t.style.position="fixed",document.body.appendChild(t),t.select();try{return document.execCommand("copy")}catch(e){return console.warn("Copy to clipboard failed.",e),!1}finally{document.body.removeChild(t)}}},i,a,e=>s(2,l=Ye(e.title))]}export default class extends e{constructor(e){super(),t(this,e,et,Ke,s,{slug:0,data:1})}}export{We as preload};