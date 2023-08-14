"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[2616],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(o,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(k,l(l({ref:e},m),{},{components:n})):a.createElement(k,l({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95697:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],p={},o=void 0,s={unversionedId:"data-sources/clinvar-json",id:"version-3.21/data-sources/clinvar-json",title:"clinvar-json",description:"small variants:",source:"@site/versioned_docs/version-3.21/data-sources/clinvar-json.md",sourceDirName:"data-sources",slug:"/data-sources/clinvar-json",permalink:"/NirvanaDocumentation/3.21/data-sources/clinvar-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.21/data-sources/clinvar-json.md",tags:[],version:"3.21",frontMatter:{}},m=[],c={toc:m};function d(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"small variants:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"clinvar":[\n   {\n      "id":"VCV000036581.3",\n      "reviewStatus":"reviewed by expert panel",\n      "significance":[\n         "benign"\n      ],\n      "refAllele":"G",\n      "altAllele":"A",\n      "lastUpdatedDate":"2020-03-01",\n      "isAlleleSpecific":true\n   },\n   {\n      "id":"RCV000030258.4",\n      "variationId":"VCV000036581.3",\n      "reviewStatus":"reviewed by expert panel",\n      "alleleOrigins":[\n         "germline"\n      ],\n      "refAllele":"G",\n      "altAllele":"A",\n      "phenotypes":[\n         "Lynch syndrome"\n      ],\n      "medGenIds":[\n         "C1333990"\n      ],\n      "omimIds":[\n         "120435"\n      ],\n      "significance":[\n         "benign"\n      ],\n      "lastUpdatedDate":"2017-05-01",\n      "isAlleleSpecific":true\n   }\n]\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"large variants:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"clinvar":[\n   {\n      "chromosome":"1", \n      "begin":629025, \n      "end":8537745, \n      "variantType":"copy_number_loss", \n      "id":"RCV000051993.4", \n      "variationId":"VCV000058242.1", \n      "reviewStatus":"criteria provided, single submitter", \n      "alleleOrigins":[\n         "not provided"\n      ], \n      "phenotypes":[\n         "See cases"\n      ], \n      "significance":[\n         "pathogenic"\n      ], \n      "lastUpdatedDate":"2022-04-21", \n      "pubMedIds":[\n         "21844811"\n      ]\n   },\n   {\n      "id":"VCV000058242.1",\n      "reviewStatus":"criteria provided, single submitter",\n      "significance":[\n         "pathogenic"\n      ],\n      "lastUpdatedDate":"2022-04-21"\n   },\n        ......\n]\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"id"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ClinVar ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"variationId"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ClinVar VCV ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"variantType"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"variant type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"reviewStatus"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"see possible values below")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"alleleOrigins"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"see possible values below")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"refAllele"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"altAllele"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"phenotypes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"medGenIds"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"MedGen IDs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"omimIds"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"OMIM IDs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"orphanetIds"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Orphanet IDs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"significance"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"see possible values below")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"lastUpdatedDate"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yyyy-MM-dd")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"pubMedIds"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"PubMed IDs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"isAlleleSpecific"),(0,i.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,i.kt)("td",{parentName:"tr",align:"left"},"true when the current variant alternate allele matches the ClinVar alternate allele")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"reviewStatus:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"no assertion provided"),(0,i.kt)("li",{parentName:"ul"},"no assertion criteria provided"),(0,i.kt)("li",{parentName:"ul"},"criteria provided, single submitter"),(0,i.kt)("li",{parentName:"ul"},"practice guideline"),(0,i.kt)("li",{parentName:"ul"},"classified by multiple submitters"),(0,i.kt)("li",{parentName:"ul"},"criteria provided, conflicting interpretations"),(0,i.kt)("li",{parentName:"ul"},"criteria provided, multiple submitters, no conflicts"),(0,i.kt)("li",{parentName:"ul"},"no interpretation for the single variant")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"alleleOrigins:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"unknown"),(0,i.kt)("li",{parentName:"ul"},"other"),(0,i.kt)("li",{parentName:"ul"},"germline"),(0,i.kt)("li",{parentName:"ul"},"somatic"),(0,i.kt)("li",{parentName:"ul"},"inherited"),(0,i.kt)("li",{parentName:"ul"},"paternal"),(0,i.kt)("li",{parentName:"ul"},"maternal"),(0,i.kt)("li",{parentName:"ul"},"de-novo"),(0,i.kt)("li",{parentName:"ul"},"biparental"),(0,i.kt)("li",{parentName:"ul"},"uniparental"),(0,i.kt)("li",{parentName:"ul"},"not-tested"),(0,i.kt)("li",{parentName:"ul"},"tested-inconclusive")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"significance:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"uncertain significance"),(0,i.kt)("li",{parentName:"ul"},"not provided"),(0,i.kt)("li",{parentName:"ul"},"benign"),(0,i.kt)("li",{parentName:"ul"},"likely benign"),(0,i.kt)("li",{parentName:"ul"},"likely pathogenic"),(0,i.kt)("li",{parentName:"ul"},"pathogenic"),(0,i.kt)("li",{parentName:"ul"},"drug response"),(0,i.kt)("li",{parentName:"ul"},"histocompatibility"),(0,i.kt)("li",{parentName:"ul"},"association"),(0,i.kt)("li",{parentName:"ul"},"risk factor"),(0,i.kt)("li",{parentName:"ul"},"protective"),(0,i.kt)("li",{parentName:"ul"},"affects"),(0,i.kt)("li",{parentName:"ul"},"conflicting data from submitters"),(0,i.kt)("li",{parentName:"ul"},"other"),(0,i.kt)("li",{parentName:"ul"},"no interpretation for the single variant"),(0,i.kt)("li",{parentName:"ul"},"conflicting interpretations of pathogenicity")))}d.isMDXComponent=!0}}]);