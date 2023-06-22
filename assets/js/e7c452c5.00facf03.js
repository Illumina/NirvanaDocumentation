"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[4005],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||r;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3496:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={},l=void 0,o={unversionedId:"data-sources/clingen-dosage-json",id:"version-3.16/data-sources/clingen-dosage-json",title:"clingen-dosage-json",description:"| Field                       | Type           | Notes                                                                                                                            |",source:"@site/versioned_docs/version-3.16/data-sources/clingen-dosage-json.md",sourceDirName:"data-sources",slug:"/data-sources/clingen-dosage-json",permalink:"/NirvanaDocumentation/3.16/data-sources/clingen-dosage-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.16/data-sources/clingen-dosage-json.md",tags:[],version:"3.16",frontMatter:{}},s=[],p={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"clingenDosageSensitivityMap": [{\n    "chromosome": "15",\n    "begin": 30900686,\n    "end": 32153204,\n    "haploinsufficiency": "sufficient evidence suggesting dosage sensitivity is associated with clinical phenotype",\n    "triplosensitivity": "little evidence suggesting dosage sensitivity is associated with clinical phenotype",\n    "reciprocalOverlap": 0.00147,\n    "annotationOverlap": 0.33994\n},\n{\n    "chromosome": "15",\n    "begin": 31727418,\n    "end": 32153204,\n    "haploinsufficiency": "sufficient evidence suggesting dosage sensitivity is associated with clinical phenotype",\n    "triplosensitivity": "dosage sensitivity unlikely",\n    "reciprocalOverlap": 0.00147,\n    "annotationOverlap": 1\n}]\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clingenDosageSensitivityMap"),(0,i.kt)("td",{parentName:"tr",align:null},"object array"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"chromosome"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Ensembl-style chromosome names")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"begin"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"1-based position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"end"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"1-based position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"haploinsufficiency"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"see possible values below")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"triplosensitivity"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"(same as haploinsufficiency)\xa0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"reciprocalOverlap"),(0,i.kt)("td",{parentName:"tr",align:null},"floating point"),(0,i.kt)("td",{parentName:"tr",align:null},"Range: 0 - 1. E.g. 0.57 would indicate a 57% reciprocal overlap. Specified up to 5 decimal places (Not reported for Insertions).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"annotationOverlap"),(0,i.kt)("td",{parentName:"tr",align:null},"floating point"),(0,i.kt)("td",{parentName:"tr",align:null},"Range: 0 - 1. E.g. 0.57 would indicate a 57% reciprocal overlap. Specified up to 5 decimal places (Not reported for Insertions).")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"haploinsufficiency and triplosensitivity")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"no evidence to suggest that dosage sensitivity is associated with clinical phenotype"),(0,i.kt)("li",{parentName:"ul"},"little evidence suggesting dosage sensitivity is associated with clinical phenotype"),(0,i.kt)("li",{parentName:"ul"},"emerging evidence suggesting dosage sensitivity is associated with clinical phenotype"),(0,i.kt)("li",{parentName:"ul"},"sufficient evidence suggesting dosage sensitivity is associated with clinical phenotype"),(0,i.kt)("li",{parentName:"ul"},"gene associated with autosomal recessive phenotype"),(0,i.kt)("li",{parentName:"ul"},"dosage sensitivity unlikely")))}d.isMDXComponent=!0}}]);