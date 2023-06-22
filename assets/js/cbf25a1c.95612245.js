"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[3460],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5074:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},o=void 0,l={unversionedId:"data-sources/omim-json",id:"version-3.17/data-sources/omim-json",title:"omim-json",description:"| Field       | Type         | Notes                                   |",source:"@site/versioned_docs/version-3.17/data-sources/omim-json.md",sourceDirName:"data-sources",slug:"/data-sources/omim-json",permalink:"/NirvanaDocumentation/3.17/data-sources/omim-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.17/data-sources/omim-json.md",tags:[],version:"3.17",frontMatter:{}},s=[{value:"Phenotype",id:"phenotype",children:[],level:4},{value:"Mapping",id:"mapping",children:[],level:4},{value:"Inheritance",id:"inheritance",children:[],level:4},{value:"Comments",id:"comments",children:[],level:4}],p={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"omim":[ \n   { \n      "mimNumber":600678,\n      "geneName":"MutS, E. coli, homolog of, 6",\n      "description":"The transcription factor p53 responds to diverse cellular stresses to regulate target genes that induce cell cycle arrest, apoptosis, senescence, DNA repair, or changes in metabolism. In addition, p53 appears to induce apoptosis through nontranscriptional cytoplasmic processes. In unstressed cells, p53 is kept inactive essentially through the actions of the ubiquitin ligase MDM2, which inhibits p53 transcriptional activity and ubiquitinates p53 to promote its degradation. Numerous posttranslational modifications modulate p53 activity, most notably phosphorylation and acetylation. Several less abundant p53 isoforms also modulate p53 activity. Activity of p53 is ubiquitously lost in human cancer either by mutation of the p53 gene itself or by loss of cell signaling upstream or downstream of p53 (Toledo and Wahl, 2006; Bourdon, 2007; Vousden and Lane, 2007)",\n      "phenotypes":[ \n         { \n            "mimNumber":614350,\n            "phenotype":"Colorectal cancer, hereditary nonpolyposis, type 5",\n            "description":"Hereditary nonpolyposis colorectal cancer type 5 is a cancer predisposition syndrome ...",\n            "mapping":"molecular basis of the disorder is known",\n            "inheritances":[ \n               "Autosomal dominant"\n            ]\n         },\n         { \n            "mimNumber":608089,\n            "phenotype":"Endometrial cancer, familial",\n            "mapping":"molecular basis of the disorder is known"\n         },\n         { \n            "mimNumber":276300,\n            "phenotype":"Mismatch repair cancer syndrome",\n            "description":"Constitutional mismatch repair deficiency is a rare childhood cancer predisposition syndrome ...",\n            "mapping":"molecular basis of the disorder is known",\n            "inheritances":[ \n               "Autosomal recessive"\n            ],\n            "comments"     : [\n                "contribute to susceptibility to multifactorial disorders or to susceptibility to infection",\n                "unconfirmed or possibly spurious mapping"\n            ]\n         }\n      ]\n   }\n]\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"mimNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"OMIM ID for gene")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"geneName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"gene name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"description"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"phenotypes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"see ",(0,r.kt)("a",{parentName:"td",href:"#phenotype"},"Phenotype entry below"))))),(0,r.kt)("h4",{id:"phenotype"},"Phenotype"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"mimNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"phenotype"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"description"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"mapping"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"see ",(0,r.kt)("a",{parentName:"td",href:"#mapping"},"possible values below"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"inheritance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"see ",(0,r.kt)("a",{parentName:"td",href:"#inheritance"},"possible values below"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"comments"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"see ",(0,r.kt)("a",{parentName:"td",href:"#comments"},"possible values below"))))),(0,r.kt)("h4",{id:"mapping"},"Mapping"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"disorder was positioned by mapping of the wild type gene"),(0,r.kt)("li",{parentName:"ol"},"disease phenotype itself was mapped"),(0,r.kt)("li",{parentName:"ol"},"molecular basis of the disorder is known"),(0,r.kt)("li",{parentName:"ol"},"disorder is a chromosome deletion or duplication syndrome")),(0,r.kt)("h4",{id:"inheritance"},"Inheritance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"autosomal recessive"),(0,r.kt)("li",{parentName:"ul"},"autosomal dominant")),(0,r.kt)("h4",{id:"comments"},"Comments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"contributes to the susceptibility to multifactorial disorders"),(0,r.kt)("li",{parentName:"ul"},"variations that lead to apparently abnormal laboratory test values"),(0,r.kt)("li",{parentName:"ul"},"unconfirmed mapping")))}c.isMDXComponent=!0}}]);