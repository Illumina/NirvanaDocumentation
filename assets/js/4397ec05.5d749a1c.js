"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[5360],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),c=p(n),u=r,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7997:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"data-sources/cosmic-gene-fusion-json",id:"data-sources/cosmic-gene-fusion-json",title:"cosmic-gene-fusion-json",description:"| Field       | Type         | Notes                     |",source:"@site/docs/data-sources/cosmic-gene-fusion-json.md",sourceDirName:"data-sources",slug:"/data-sources/cosmic-gene-fusion-json",permalink:"/NirvanaDocumentation/data-sources/cosmic-gene-fusion-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/cosmic-gene-fusion-json.md",tags:[],version:"current",frontMatter:{}},s=[],p={toc:s};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'   "cosmicGeneFusions":[\n      {\n         "id":"COSF881",\n         "numSamples":6,\n         "geneSymbols":[\n            "MYB",\n            "NFIB"\n         ],\n         "hgvsr":"ENST00000341911.5(MYB):r.1_2368::ENST00000397581.2(NFIB):r.2592_3318",\n         "histologies":[\n            {\n               "name":"adenoid cystic carcinoma",\n               "numSamples":6\n            }\n         ],\n         "sites":[\n            {\n               "name":"salivary gland (submandibular)",\n               "numSamples":1\n            },\n            {\n               "name":"salivary gland (parotid)",\n               "numSamples":1\n            },\n            {\n               "name":"salivary gland (nasal cavity)",\n               "numSamples":1\n            },\n            {\n               "name":"breast",\n               "numSamples":3\n            }\n         ],\n         "pubMedIds":[\n            19841262\n         ]\n      }\n   ]\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"COSMIC fusion ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"numSamples"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"geneSymbols"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5' gene & 3' gene")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hgvsr"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HGVS RNA translocation fusion notation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"histologies"),(0,r.kt)("td",{parentName:"tr",align:"center"},"count array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"phenotypic descriptions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sites"),(0,r.kt)("td",{parentName:"tr",align:"center"},"count array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"tissue types")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pubMedIds"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"PubMed IDs")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Count")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"numSamples"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0}}]);