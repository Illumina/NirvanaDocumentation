"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[6458],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||s[d]||o;return n?r.createElement(f,i(i({ref:e},m),{},{components:n})):r.createElement(f,i({ref:e},m))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9463:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},c=void 0,p={unversionedId:"data-sources/cosmic-json",id:"data-sources/cosmic-json",isDocsHomePage:!1,title:"cosmic-json",description:"`json",source:"@site/docs/data-sources/cosmic-json.md",sourceDirName:"data-sources",slug:"/data-sources/cosmic-json",permalink:"/NirvanaDocumentation/data-sources/cosmic-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/cosmic-json.md",version:"current",frontMatter:{}},m=[],s={toc:m};function u(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'   "cosmicGeneFusions":[\n      {\n         "id":"COSF881",\n         "numSamples":6,\n         "geneSymbols":[\n            "MYB",\n            "NFIB"\n         ],\n         "hgvsr":"ENST00000341911.5(MYB):r.1_2368::ENST00000397581.2(NFIB):r.2592_3318",\n         "histologies":[\n            {\n               "name":"adenoid cystic carcinoma",\n               "numSamples":6\n            }\n         ],\n         "sites":[\n            {\n               "name":"salivary gland (submandibular)",\n               "numSamples":1\n            },\n            {\n               "name":"salivary gland (parotid)",\n               "numSamples":1\n            },\n            {\n               "name":"salivary gland (nasal cavity)",\n               "numSamples":1\n            },\n            {\n               "name":"breast",\n               "numSamples":3\n            }\n         ],\n         "pubMedIds":[\n            19841262\n         ]\n      }\n   ]\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"id"),(0,o.kt)("td",{parentName:"tr",align:"center"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"COSMIC fusion ID")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"numSamples"),(0,o.kt)("td",{parentName:"tr",align:"center"},"int"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"geneSymbols"),(0,o.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,o.kt)("td",{parentName:"tr",align:"left"},"5' gene & 3' gene")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"hgvsr"),(0,o.kt)("td",{parentName:"tr",align:"center"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"HGVS RNA translocation fusion notation")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"histologies"),(0,o.kt)("td",{parentName:"tr",align:"center"},"count array"),(0,o.kt)("td",{parentName:"tr",align:"left"},"phenotypic descriptions")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"sites"),(0,o.kt)("td",{parentName:"tr",align:"center"},"count array"),(0,o.kt)("td",{parentName:"tr",align:"left"},"tissue types")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"pubMedIds"),(0,o.kt)("td",{parentName:"tr",align:"center"},"int array"),(0,o.kt)("td",{parentName:"tr",align:"left"},"PubMed IDs")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Count")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"name"),(0,o.kt)("td",{parentName:"tr",align:"center"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"description")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"numSamples"),(0,o.kt)("td",{parentName:"tr",align:"center"},"int"),(0,o.kt)("td",{parentName:"tr",align:"left"})))))}u.isMDXComponent=!0}}]);