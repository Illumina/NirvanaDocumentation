"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[4005],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3496:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s=void 0,c={unversionedId:"data-sources/clingen-dosage-json",id:"version-3.16/data-sources/clingen-dosage-json",title:"clingen-dosage-json",description:"| Field                       | Type           | Notes                                                                                                                            |",source:"@site/versioned_docs/version-3.16/data-sources/clingen-dosage-json.md",sourceDirName:"data-sources",slug:"/data-sources/clingen-dosage-json",permalink:"/NirvanaDocumentation/3.16/data-sources/clingen-dosage-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.16/data-sources/clingen-dosage-json.md",tags:[],version:"3.16",frontMatter:{}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"clingenDosageSensitivityMap": [{\n    "chromosome": "15",\n    "begin": 30900686,\n    "end": 32153204,\n    "haploinsufficiency": "sufficient evidence suggesting dosage sensitivity is associated with clinical phenotype",\n    "triplosensitivity": "little evidence suggesting dosage sensitivity is associated with clinical phenotype",\n    "reciprocalOverlap": 0.00147,\n    "annotationOverlap": 0.33994\n},\n{\n    "chromosome": "15",\n    "begin": 31727418,\n    "end": 32153204,\n    "haploinsufficiency": "sufficient evidence suggesting dosage sensitivity is associated with clinical phenotype",\n    "triplosensitivity": "dosage sensitivity unlikely",\n    "reciprocalOverlap": 0.00147,\n    "annotationOverlap": 1\n}]\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clingenDosageSensitivityMap"),(0,i.kt)("td",{parentName:"tr",align:null},"object array"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"chromosome"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Ensembl-style chromosome names")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"begin"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"1-based position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"end"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"1-based position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"haploinsufficiency"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"see possible values below")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"triplosensitivity"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"(same as haploinsufficiency)\xa0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"reciprocalOverlap"),(0,i.kt)("td",{parentName:"tr",align:null},"floating point"),(0,i.kt)("td",{parentName:"tr",align:null},"Range: 0 - 1. E.g. 0.57 would indicate a 57% reciprocal overlap. Specified up to 5 decimal places (Not reported for Insertions).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"annotationOverlap"),(0,i.kt)("td",{parentName:"tr",align:null},"floating point"),(0,i.kt)("td",{parentName:"tr",align:null},"Range: 0 - 1. E.g. 0.57 would indicate a 57% reciprocal overlap. Specified up to 5 decimal places (Not reported for Insertions).")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"haploinsufficiency and triplosensitivity")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"no evidence to suggest that dosage sensitivity is associated with clinical phenotype"),(0,i.kt)("li",{parentName:"ul"},"little evidence suggesting dosage sensitivity is associated with clinical phenotype"),(0,i.kt)("li",{parentName:"ul"},"emerging evidence suggesting dosage sensitivity is associated with clinical phenotype"),(0,i.kt)("li",{parentName:"ul"},"sufficient evidence suggesting dosage sensitivity is associated with clinical phenotype"),(0,i.kt)("li",{parentName:"ul"},"gene associated with autosomal recessive phenotype"),(0,i.kt)("li",{parentName:"ul"},"dosage sensitivity unlikely")))}d.isMDXComponent=!0}}]);