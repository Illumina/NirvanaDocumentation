"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[4592],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(o,".").concat(u)]||d[u]||c[u]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9487:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={},i=void 0,p={unversionedId:"data-sources/clinvar-json",id:"version-3.17/data-sources/clinvar-json",title:"clinvar-json",description:"| Field            | Type         | Notes                     |",source:"@site/versioned_docs/version-3.17/data-sources/clinvar-json.md",sourceDirName:"data-sources",slug:"/data-sources/clinvar-json",permalink:"/NirvanaDocumentation/3.17/data-sources/clinvar-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.17/data-sources/clinvar-json.md",tags:[],version:"3.17",frontMatter:{}},o=[],s={toc:o};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"clinvar":[\n   {\n      "id":"VCV000036581.3",\n      "reviewStatus":"reviewed by expert panel",\n      "significance":[\n         "benign"\n      ],\n      "refAllele":"G",\n      "altAllele":"A",\n      "lastUpdatedDate":"2020-03-01",\n      "isAlleleSpecific":true\n   },\n   {\n      "id":"RCV000030258.4",\n      "variationId":"VCV000036581.3",\n      "reviewStatus":"reviewed by expert panel",\n      "alleleOrigins":[\n         "germline"\n      ],\n      "refAllele":"G",\n      "altAllele":"A",\n      "phenotypes":[\n         "Lynch syndrome"\n      ],\n      "medGenIds":[\n         "C1333990"\n      ],\n      "omimIds":[\n         "120435"\n      ],\n      "significance":[\n         "benign"\n      ],\n      "lastUpdatedDate":"2017-05-01",\n      "isAlleleSpecific":true\n   }\n]\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ClinVar ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"variationId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ClinVar VCV ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"reviewStatus"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"see possible values below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"alleleOrigins"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"see possible values below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"refAllele"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"altAllele"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"phenotypes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"medGenIds"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MedGen IDs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"omimIds"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"OMIM IDs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"orphanetIds"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Orphanet IDs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"significance"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"see possible values below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"lastUpdatedDate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yyyy-MM-dd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pubMedIds"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"PubMed IDs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"isAlleleSpecific"),(0,r.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true when the current variant alternate allele matches the ClinVar alternate allele")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"reviewStatus:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"no assertion provided"),(0,r.kt)("li",{parentName:"ul"},"no assertion criteria provided"),(0,r.kt)("li",{parentName:"ul"},"criteria provided, single submitter"),(0,r.kt)("li",{parentName:"ul"},"practice guideline"),(0,r.kt)("li",{parentName:"ul"},"classified by multiple submitters"),(0,r.kt)("li",{parentName:"ul"},"criteria provided, conflicting interpretations"),(0,r.kt)("li",{parentName:"ul"},"criteria provided, multiple submitters, no conflicts"),(0,r.kt)("li",{parentName:"ul"},"no interpretation for the single variant")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"alleleOrigins:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"unknown"),(0,r.kt)("li",{parentName:"ul"},"other"),(0,r.kt)("li",{parentName:"ul"},"germline"),(0,r.kt)("li",{parentName:"ul"},"somatic"),(0,r.kt)("li",{parentName:"ul"},"inherited"),(0,r.kt)("li",{parentName:"ul"},"paternal"),(0,r.kt)("li",{parentName:"ul"},"maternal"),(0,r.kt)("li",{parentName:"ul"},"de-novo"),(0,r.kt)("li",{parentName:"ul"},"biparental"),(0,r.kt)("li",{parentName:"ul"},"uniparental"),(0,r.kt)("li",{parentName:"ul"},"not-tested"),(0,r.kt)("li",{parentName:"ul"},"tested-inconclusive")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"significance:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"uncertain significance"),(0,r.kt)("li",{parentName:"ul"},"not provided"),(0,r.kt)("li",{parentName:"ul"},"benign"),(0,r.kt)("li",{parentName:"ul"},"likely benign"),(0,r.kt)("li",{parentName:"ul"},"likely pathogenic"),(0,r.kt)("li",{parentName:"ul"},"pathogenic"),(0,r.kt)("li",{parentName:"ul"},"drug response"),(0,r.kt)("li",{parentName:"ul"},"histocompatibility"),(0,r.kt)("li",{parentName:"ul"},"association"),(0,r.kt)("li",{parentName:"ul"},"risk factor"),(0,r.kt)("li",{parentName:"ul"},"protective"),(0,r.kt)("li",{parentName:"ul"},"affects"),(0,r.kt)("li",{parentName:"ul"},"conflicting data from submitters"),(0,r.kt)("li",{parentName:"ul"},"other"),(0,r.kt)("li",{parentName:"ul"},"no interpretation for the single variant"),(0,r.kt)("li",{parentName:"ul"},"conflicting interpretations of pathogenicity")))}m.isMDXComponent=!0}}]);