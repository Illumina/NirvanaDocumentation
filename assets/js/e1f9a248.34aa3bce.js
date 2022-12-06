"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[1063],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,u=d["".concat(c,".").concat(g)]||d[g]||m[g]||o;return n?r.createElement(u,i(i({ref:t},p),{},{components:n})):r.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6015:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"data-sources/fusioncatcher-json",id:"version-3.17/data-sources/fusioncatcher-json",title:"fusioncatcher-json",description:"| Field            | Type         | Notes                                  |",source:"@site/versioned_docs/version-3.17/data-sources/fusioncatcher-json.md",sourceDirName:"data-sources",slug:"/data-sources/fusioncatcher-json",permalink:"/NirvanaDocumentation/3.17/data-sources/fusioncatcher-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.17/data-sources/fusioncatcher-json.md",tags:[],version:"3.17",frontMatter:{}},c=[{value:"genes",id:"genes",children:[],level:4},{value:"gene",id:"gene",children:[],level:4}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'   "fusionCatcher":[\n      {\n         "genes":{\n            "first":{\n               "hgnc":"ETV6",\n               "isOncogene":true\n            },\n            "second":{\n               "hgnc":"RUNX1"\n            },\n            "isParalogPair":true,\n            "isPseudogenePair":true,\n            "isReadthrough":true\n         },\n         "germlineSources":[\n            "1000 Genomes Project"\n         ],\n         "somaticSources":[\n            "COSMIC",\n            "TCGA oesophageal carcinomas"\n         ]\n      }\n   ]\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"genes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"genes object"),(0,a.kt)("td",{parentName:"tr",align:"left"},"5' gene & 3' gene")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"germlineSources"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,a.kt)("td",{parentName:"tr",align:"left"},"matches in known germline data sources")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"somaticSources"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,a.kt)("td",{parentName:"tr",align:"left"},"matches in known somatic data sources")))),(0,a.kt)("h4",{id:"genes"},"genes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"first"),(0,a.kt)("td",{parentName:"tr",align:"center"},"gene object"),(0,a.kt)("td",{parentName:"tr",align:"left"},"5' gene")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"second"),(0,a.kt)("td",{parentName:"tr",align:"center"},"gene object"),(0,a.kt)("td",{parentName:"tr",align:"left"},"3' gene")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"isParalogPair"),(0,a.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,a.kt)("td",{parentName:"tr",align:"left"},"true when both genes are paralogs for each other")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"isPseudogenePair"),(0,a.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,a.kt)("td",{parentName:"tr",align:"left"},"true when both genes are pseudogenes for each other")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"isReadthrough"),(0,a.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,a.kt)("td",{parentName:"tr",align:"left"},"true when this fusion gene is a readthrough event (both are on the same strand and there are no genes between them)")))),(0,a.kt)("h4",{id:"gene"},"gene"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hgnc"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"gene symbol. e.g. MSH6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"isOncogene"),(0,a.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,a.kt)("td",{parentName:"tr",align:"left"},"true when this gene is an oncogene")))))}p.isMDXComponent=!0}}]);