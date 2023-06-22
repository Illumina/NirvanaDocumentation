"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[472,6192],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,v=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},540:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"data-sources/dann-json",id:"data-sources/dann-json",title:"dann-json",description:"| Field     | Type  | Notes          |",source:"@site/docs/data-sources/dann-json.md",sourceDirName:"data-sources",slug:"/data-sources/dann-json",permalink:"/NirvanaDocumentation/data-sources/dann-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/dann-json.md",tags:[],version:"current",frontMatter:{}},s=[],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"dannScore": 0.27\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dannScore"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Range: 0 - 1.0")))))}u.isMDXComponent=!0},5771:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(540);const i={title:"DANN"},l=void 0,s={unversionedId:"data-sources/dann",id:"data-sources/dann",title:"DANN",description:"Overview",source:"@site/docs/data-sources/dann.mdx",sourceDirName:"data-sources",slug:"/data-sources/dann",permalink:"/NirvanaDocumentation/data-sources/dann",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/dann.mdx",tags:[],version:"current",frontMatter:{title:"DANN"},sidebar:"docs",previous:{title:"COSMIC",permalink:"/NirvanaDocumentation/data-sources/cosmic"},next:{title:"dbSNP",permalink:"/NirvanaDocumentation/data-sources/dbsnp"}},d=[{value:"Overview",id:"overview",children:[],level:2},{value:"TSV File",id:"tsv-file",children:[{value:"Example",id:"example",children:[],level:3},{value:"Parsing",id:"parsing",children:[],level:3}],level:2},{value:"GRCh38 liftover",id:"grch38-liftover",children:[],level:2},{value:"Known Issues",id:"known-issues",children:[],level:2},{value:"Download URL",id:"download-url",children:[],level:2},{value:"JSON Output",id:"json-output",children:[],level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"DANN uses the same feature set and training data as CADD (Combined Annotation-Dependent Depletion) to train a deep neural network (DNN).\nCADD is an algorithm designed to annotate both coding and non-coding variants, and has been shown to outperform other annotation algorithms.\nDANN improves on CADD (which uses Support Vector Machines (SVMs)) by capturing non-linear relationships by using a deep neural network instead of SVMs.\nDANN achieves about a 19% relative reduction in the error rate and about a 14% relative increase in the area under the curve (AUC) metric over CADD\u2019s SVM methodology."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Quang, Daniel, Yifei Chen, and Xiaohui Xie. DANN: a deep learning approach for annotating the pathogenicity of genetic variants. ",(0,r.kt)("em",{parentName:"p"},"Bioinformatics")," ",(0,r.kt)("strong",{parentName:"p"},"31.5")," 761-763 (2015). ",(0,r.kt)("a",{parentName:"p",href:"https://doi.org/10.1093/bioinformatics/btu703"},"https://doi.org/10.1093/bioinformatics/btu703")))),(0,r.kt)("h2",{id:"tsv-file"},"TSV File"),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsv"},"chr     grch37_pos  ref     alt     DANN\n1       10001       T       A       0.16461391399220135\n1       10001       T       C       0.4396994049749739\n1       10001       T       G       0.38108629377072734\n1       10002       A       C       0.36182020272810128\n1       10002       A       G       0.44413258111779291\n1       10002       A       T       0.16812846819989813\n")),(0,r.kt)("h3",{id:"parsing"},"Parsing"),(0,r.kt)("p",null,"From the CSV file, we are interested in all columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chr")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"grch37_pos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ref")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alt")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DANN"))),(0,r.kt)("h2",{id:"grch38-liftover"},"GRCh38 liftover"),(0,r.kt)("p",null,"The data is not available for GRCh38 on DANN website. We performed a liftover from GRCh37 to GRCh38 using crossmap."),(0,r.kt)("h2",{id:"known-issues"},"Known Issues"),(0,r.kt)("p",null,"None"),(0,r.kt)("h2",{id:"download-url"},"Download URL"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cbcl.ics.uci.edu/public_data/DANN/"},"https://cbcl.ics.uci.edu/public_data/DANN/")),(0,r.kt)("h2",{id:"json-output"},"JSON Output"),(0,r.kt)(o.default,{mdxType:"JSON"}))}p.isMDXComponent=!0}}]);