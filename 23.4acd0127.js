(window.webpackJsonp=window.webpackJsonp||[]).push([[23,26],{103:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(91);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},137:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch(c){}return n.remove(),l&&(r.removeAllRanges(),r.addRange(l)),a&&a.focus(),o};e.exports=a,e.exports.default=a},138:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],r=t[3];if(n&&r){var l=[],o=(n=parseInt(n))<(r=parseInt(r))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(r+=o);for(var c=n;c!=r;c+=o)l.push(c);return l}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(82),o=n(83),c=n(23),s=n(91),i=n(2),u=n(84),p=n(85),m=n(113),d=n(104),y=n(110),h=n(111),b=n(112),f=n(109),g=n(87),v=n(93),k=n(60),j=n.n(k);const O=(e,t)=>"link"===e.type?Object(m.a)(e.href,t):"category"===e.type&&e.items.some((e=>O(e,t)));function E({item:e,onItemClick:t,collapsible:n,activePath:l,...o}){const{items:c,label:s}=e,p=O(e,l),m=function(e){const t=Object(a.useRef)(e);return Object(a.useEffect)((()=>{t.current=e}),[e]),t.current}(p),[d,y]=Object(a.useState)((()=>!!n&&(!p&&e.collapsed)));Object(a.useEffect)((()=>{p&&!m&&d&&y(!1)}),[p,m,d]);const h=Object(a.useCallback)((e=>{e.preventDefault(),y((e=>!e))}),[y]);return 0===c.length?null:r.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":d}),key:s},r.a.createElement("a",Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--sublist":n,"menu__link--active":n&&p,[j.a.menuLinkText]:!n}),onClick:n?h:void 0,href:n?"#!":void 0},o),s),r.a.createElement("ul",{className:"menu__list"},c.map((e=>r.a.createElement(w,{tabIndex:d?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:n,activePath:l})))))}function N({item:e,onItemClick:t,activePath:n,collapsible:a,...l}){const{href:o,label:c}=e,s=O(e,n);return r.a.createElement("li",{className:"menu__list-item",key:c},r.a.createElement(g.a,Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--active":s}),to:o},Object(v.a)(o)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},l),c))}function w(e){switch(e.item.type){case"category":return r.a.createElement(E,e);case"link":default:return r.a.createElement(N,e)}}var x=function({path:e,sidebar:t,sidebarCollapsible:n=!0}){const[l,c]=Object(a.useState)(!1),{navbar:{title:s,hideOnScroll:m}}=Object(p.a)(),{isClient:v}=Object(o.a)(),{logoLink:k,logoLinkProps:O,logoImageUrl:E,logoAlt:N}=Object(b.a)(),{isAnnouncementBarClosed:x}=Object(d.a)(),{scrollY:C}=Object(f.a)();Object(y.a)(l);const P=Object(h.a)();return Object(a.useEffect)((()=>{P===h.b.desktop&&c(!1)}),[P]),r.a.createElement("div",{className:Object(u.a)(j.a.sidebar,{[j.a.sidebarWithHideableNavbar]:m})},m&&r.a.createElement(g.a,Object(i.a)({tabIndex:-1,className:j.a.sidebarLogo,to:k},O),null!=E&&r.a.createElement("img",{key:v,src:E,alt:N}),null!=s&&r.a.createElement("strong",null,s)),r.a.createElement("div",{className:Object(u.a)("menu","menu--responsive",j.a.menu,{"menu--show":l,[j.a.menuWithAnnouncementBar]:!x&&0===C})},r.a.createElement("button",{"aria-label":l?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{c(!l)}},l?r.a.createElement("span",{className:Object(u.a)(j.a.sidebarMenuIcon,j.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:j.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},t.map((t=>r.a.createElement(w,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),c(!1)},collapsible:n,activePath:e}))))))},C={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},P={Prism:n(20).a,theme:C};function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var S=/\r\n|\r|\n/,D=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},I=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},L=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=T({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=T({},n,{backgroundColor:null}),r};function M(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var B=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),_(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?L(e.theme,e.language):void 0;return t.themeDict=n})),_(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,l=T({},M(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?T({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),_(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return l[n[0]];var o=a?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(c))}})),_(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,l=e.token,o=T({},M(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?T({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],l=0,o=0,c=[],s=[c];o>-1;){for(;(l=a[o]++)<r[o];){var i=void 0,u=t[o],p=n[o][l];if("string"==typeof p?(u=o>0?u:["plain"],i=p):(u=I(u,p.type),p.alias&&(u=I(u,p.alias)),i=p.content),"string"==typeof i){var m=i.split(S),d=m.length;c.push({types:u,content:m[0]});for(var y=1;y<d;y++)D(c),s.push(c=[]),c.push({types:u,content:m[y]})}else o++,t.push(u),n.push(i),a.push(0),r.push(i.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return D(c),s}(void 0!==o?t.tokenize(a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),A=n(137),$=n.n(A),R=n(138),F=n.n(R),W={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},z=n(98);var J=()=>{const{prism:e}=Object(p.a)(),{isDarkTheme:t}=Object(z.a)(),n=e.theme||W,a=e.darkTheme||n;return t?a:n},U=n(61),H=n.n(U);const X=/{([\d,-]+)}/,Y=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${a})\\s*$`)},q=/title=".*"/;var G=({children:e,className:t,metastring:n})=>{const{prism:l}=Object(p.a)(),[o,c]=Object(a.useState)(!1),[s,m]=Object(a.useState)(!1);Object(a.useEffect)((()=>{m(!0)}),[]);const d=Object(a.useRef)(null);let y=[],h="";const b=J();if(n&&X.test(n)){const e=n.match(X)[1];y=F.a.parse(e).filter((e=>e>0))}n&&q.test(n)&&(h=n.match(q)[0].split("title=")[1].replace(/"+/g,""));let f=t&&t.replace(/language-/,"");!f&&l.defaultLanguage&&(f=l.defaultLanguage);let g=e.replace(/\n$/,"");if(0===y.length&&void 0!==f){let t="";const n=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return Y(["js","jsBlock"]);case"jsx":case"tsx":return Y(["js","jsBlock","jsx"]);case"html":return Y(["js","jsBlock","html"]);case"python":case"py":return Y(["python"]);default:return Y()}})(f),a=e.replace(/\n$/,"").split("\n");let r;for(let e=0;e<a.length;){const l=e+1,o=a[e].match(n);if(null!==o){switch(o.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":t+=l+",";break;case"highlight-start":r=l;break;case"highlight-end":t+=`${r}-${l-1},`}a.splice(e,1)}else e+=1}y=F.a.parse(t),g=a.join("\n")}const v=()=>{$()(g),c(!0),setTimeout((()=>c(!1)),2e3)};return r.a.createElement(B,Object(i.a)({},P,{key:String(s),theme:b,code:g,language:f}),(({className:e,style:t,tokens:n,getLineProps:a,getTokenProps:l})=>r.a.createElement(r.a.Fragment,null,h&&r.a.createElement("div",{style:t,className:H.a.codeBlockTitle},h),r.a.createElement("div",{className:H.a.codeBlockContent},r.a.createElement("button",{tabIndex:0,ref:d,type:"button","aria-label":"Copy code to clipboard",className:Object(u.a)(H.a.copyButton,{[H.a.copyButtonWithTitle]:h}),onClick:v},o?"Copied":"Copy"),r.a.createElement("div",{className:Object(u.a)(e,H.a.codeBlock,{[H.a.codeBlockWithTitle]:h})},r.a.createElement("div",{className:H.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=a({line:e,key:t});return y.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(i.a)({key:t},n),e.map(((e,t)=>r.a.createElement("span",Object(i.a)({key:t},l({token:e,key:t}))))))}))))))))},K=(n(62),n(63)),Q=n.n(K);var V=e=>function({id:t,...n}){const{navbar:{hideOnScroll:a}}=Object(p.a)();return t?r.a.createElement(e,n,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(u.a)("anchor",{[Q.a.enhancedAnchor]:!a}),id:t}),n.children,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+t,title:"Direct link to heading"},"#")):r.a.createElement(e,n)},Z=n(64),ee=n.n(Z);var te={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?r.a.createElement(G,e):r.a.createElement("code",e):t},a:e=>r.a.createElement(g.a,e),pre:e=>r.a.createElement("div",Object(i.a)({className:ee.a.mdxCodeBlock},e)),h1:V("h1"),h2:V("h2"),h3:V("h3"),h4:V("h4"),h5:V("h5"),h6:V("h6")},ne=n(103),ae=n(89),re=n(65),le=n.n(re),oe=n(97);function ce({currentDocRoute:e,versionMetadata:t,children:n}){var a,c;const{siteConfig:i,isClient:u}=Object(o.a)(),{pluginId:p,permalinkToSidebar:m,docsSidebars:d,version:y}=t,h=m[e.path],b=d[h];return r.a.createElement(s.a,{key:u,searchMetadatas:{version:y,tag:Object(oe.b)(p,y)}},r.a.createElement("div",{className:le.a.docPage},b&&r.a.createElement("div",{className:le.a.docSidebarContainer,role:"complementary"},r.a.createElement(x,{key:h,sidebar:b,path:e.path,sidebarCollapsible:null===(a=null===(c=i.themeConfig)||void 0===c?void 0:c.sidebarCollapsible)||void 0===a||a})),r.a.createElement("main",{className:le.a.docMainContainer},r.a.createElement(l.a,{components:te},n))))}t.default=function(e){const{route:{routes:t},versionMetadata:n,location:a}=e,l=t.find((e=>Object(ae.matchPath)(a.pathname,e)));return l?r.a.createElement(ce,{currentDocRoute:l,versionMetadata:n},Object(c.a)(t)):r.a.createElement(ne.default,e)}},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,y=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return n?r.a.createElement(y,c(c({ref:t},i),{},{components:n})):r.a.createElement(y,c({ref:t},i))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);