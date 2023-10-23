"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[1266],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58202:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={},c=void 0,s={unversionedId:"data-sources/fusioncatcher-json",id:"data-sources/fusioncatcher-json",title:"fusioncatcher-json",description:"| Field            | Type         | Notes                                  |",source:"@site/docs/data-sources/fusioncatcher-json.md",sourceDirName:"data-sources",slug:"/data-sources/fusioncatcher-json",permalink:"/IlluminaAnnotatorDocumentation/data-sources/fusioncatcher-json",editUrl:"https://github.com/Illumina/IlluminaAnnotatorDocumentation/edit/master/docs/data-sources/fusioncatcher-json.md",tags:[],version:"current",frontMatter:{}},p=[{value:"genes",id:"genes",children:[],level:4},{value:"gene",id:"gene",children:[],level:4}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'   "fusionCatcher":[\n      {\n         "genes":{\n            "first":{\n               "hgnc":"ETV6",\n               "isOncogene":true\n            },\n            "second":{\n               "hgnc":"RUNX1"\n            },\n            "isParalogPair":true,\n            "isPseudogenePair":true,\n            "isReadthrough":true\n         },\n         "germlineSources":[\n            "1000 Genomes Project"\n         ],\n         "somaticSources":[\n            "COSMIC",\n            "TCGA oesophageal carcinomas"\n         ]\n      }\n   ]\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"genes"),(0,o.kt)("td",{parentName:"tr",align:"center"},"genes object"),(0,o.kt)("td",{parentName:"tr",align:"left"},"5' gene & 3' gene")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"germlineSources"),(0,o.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,o.kt)("td",{parentName:"tr",align:"left"},"matches in known germline data sources")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"somaticSources"),(0,o.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,o.kt)("td",{parentName:"tr",align:"left"},"matches in known somatic data sources")))),(0,o.kt)("h4",{id:"genes"},"genes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"first"),(0,o.kt)("td",{parentName:"tr",align:"center"},"gene object"),(0,o.kt)("td",{parentName:"tr",align:"left"},"5' gene")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"second"),(0,o.kt)("td",{parentName:"tr",align:"center"},"gene object"),(0,o.kt)("td",{parentName:"tr",align:"left"},"3' gene")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"isParalogPair"),(0,o.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,o.kt)("td",{parentName:"tr",align:"left"},"true when both genes are paralogs for each other")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"isPseudogenePair"),(0,o.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,o.kt)("td",{parentName:"tr",align:"left"},"true when both genes are pseudogenes for each other")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"isReadthrough"),(0,o.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,o.kt)("td",{parentName:"tr",align:"left"},"true when this fusion gene is a readthrough event (both are on the same strand and there are no genes between them)")))),(0,o.kt)("h4",{id:"gene"},"gene"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"hgnc"),(0,o.kt)("td",{parentName:"tr",align:"center"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"gene symbol. e.g. MSH6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"isOncogene"),(0,o.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,o.kt)("td",{parentName:"tr",align:"left"},"true when this gene is an oncogene")))))}m.isMDXComponent=!0}}]);