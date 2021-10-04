"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[137,8808,2520,4005],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3496:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={},s=void 0,c={unversionedId:"data-sources/clingen-dosage-json",id:"version-3.16/data-sources/clingen-dosage-json",isDocsHomePage:!1,title:"clingen-dosage-json",description:"`json",source:"@site/versioned_docs/version-3.16/data-sources/clingen-dosage-json.md",sourceDirName:"data-sources",slug:"/data-sources/clingen-dosage-json",permalink:"/NirvanaDocumentation/3.16/data-sources/clingen-dosage-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.16/data-sources/clingen-dosage-json.md",tags:[],version:"3.16",frontMatter:{}},p=[],d={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"clingenDosageSensitivityMap": [{\n    "chromosome": "15",\n    "begin": 30900686,\n    "end": 32153204,\n    "haploinsufficiency": "sufficient evidence suggesting dosage sensitivity is associated with clinical phenotype",\n    "triplosensitivity": "little evidence suggesting dosage sensitivity is associated with clinical phenotype",\n    "reciprocalOverlap": 0.00147,\n    "annotationOverlap": 0.33994\n},\n{\n    "chromosome": "15",\n    "begin": 31727418,\n    "end": 32153204,\n    "haploinsufficiency": "sufficient evidence suggesting dosage sensitivity is associated with clinical phenotype",\n    "triplosensitivity": "dosage sensitivity unlikely",\n    "reciprocalOverlap": 0.00147,\n    "annotationOverlap": 1\n}]\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clingenDosageSensitivityMap"),(0,r.kt)("td",{parentName:"tr",align:null},"object array"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chromosome"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Ensembl-style chromosome names")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"begin"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1-based position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1-based position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"haploinsufficiency"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"see possible values below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"triplosensitivity"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"(same as haploinsufficiency)\xa0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reciprocalOverlap"),(0,r.kt)("td",{parentName:"tr",align:null},"floating point"),(0,r.kt)("td",{parentName:"tr",align:null},"Range: 0 - 1. E.g. 0.57 would indicate a 57% reciprocal overlap. Specified up to 5 decimal places (Not reported for Insertions).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"annotationOverlap"),(0,r.kt)("td",{parentName:"tr",align:null},"floating point"),(0,r.kt)("td",{parentName:"tr",align:null},"Range: 0 - 1. E.g. 0.57 would indicate a 57% reciprocal overlap. Specified up to 5 decimal places (Not reported for Insertions).")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"haploinsufficiency and triplosensitivity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"no evidence to suggest that dosage sensitivity is associated with clinical phenotype"),(0,r.kt)("li",{parentName:"ul"},"little evidence suggesting dosage sensitivity is associated with clinical phenotype"),(0,r.kt)("li",{parentName:"ul"},"emerging evidence suggesting dosage sensitivity is associated with clinical phenotype"),(0,r.kt)("li",{parentName:"ul"},"sufficient evidence suggesting dosage sensitivity is associated with clinical phenotype"),(0,r.kt)("li",{parentName:"ul"},"gene associated with autosomal recessive phenotype"),(0,r.kt)("li",{parentName:"ul"},"dosage sensitivity unlikely")))}u.isMDXComponent=!0},3379:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={},s=void 0,c={unversionedId:"data-sources/clingen-gene-validity-json",id:"version-3.16/data-sources/clingen-gene-validity-json",isDocsHomePage:!1,title:"clingen-gene-validity-json",description:"`json",source:"@site/versioned_docs/version-3.16/data-sources/clingen-gene-validity-json.md",sourceDirName:"data-sources",slug:"/data-sources/clingen-gene-validity-json",permalink:"/NirvanaDocumentation/3.16/data-sources/clingen-gene-validity-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.16/data-sources/clingen-gene-validity-json.md",tags:[],version:"3.16",frontMatter:{}},p=[],d={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"clingenGeneValidity":[\n   {\n      "diseaseId":"MONDO_0007893",\n      "disease":"Noonan syndrome with multiple lentigines",\n      "classification":"no reported evidence",\n      "classificationDate":"2018-06-07"\n   },\n   {\n      "diseaseId":"MONDO_0015280",\n      "disease":"cardiofaciocutaneous syndrome",\n      "classification":"no reported evidence",\n      "classificationDate":"2018-06-07"\n   }\n]\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clingenGeneValidity"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"diseaseId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Monarch Disease Ontology ID (MONDO)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disease"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"disease label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"classification"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"see below for possible values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"classificationDate"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yyyy-MM-dd")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"classification")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"no reported evidence"),(0,r.kt)("li",{parentName:"ul"},"disputed"),(0,r.kt)("li",{parentName:"ul"},"limited"),(0,r.kt)("li",{parentName:"ul"},"moderate"),(0,r.kt)("li",{parentName:"ul"},"definitive"),(0,r.kt)("li",{parentName:"ul"},"strong"),(0,r.kt)("li",{parentName:"ul"},"refuted")))}u.isMDXComponent=!0},6806:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={},s=void 0,c={unversionedId:"data-sources/clingen-json",id:"version-3.16/data-sources/clingen-json",isDocsHomePage:!1,title:"clingen-json",description:"`json",source:"@site/versioned_docs/version-3.16/data-sources/clingen-json.md",sourceDirName:"data-sources",slug:"/data-sources/clingen-json",permalink:"/NirvanaDocumentation/3.16/data-sources/clingen-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.16/data-sources/clingen-json.md",tags:[],version:"3.16",frontMatter:{}},p=[],d={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"clingen":[\n   {\n      "chromosome":"17",\n      "begin":525,\n      "end":14667519,\n      "variantType":"copy_number_gain",\n      "id":"nsv996083",\n      "clinicalInterpretation":"pathogenic",\n      "observedGains":1,\n      "validated":true,\n      "phenotypes":[\n         "Intrauterine growth retardation"\n      ],\n      "phenotypeIds":[\n         "HP:0001511",\n         "MedGen:C1853481"\n      ],\n      "reciprocalOverlap":0.00131\n   },\n   {\n      "chromosome":"17",\n      "begin":45835,\n      "end":7600330,\n      "variantType":"copy_number_loss",\n      "id":"nsv869419",\n      "clinicalInterpretation":"pathogenic",\n      "observedLosses":1,\n      "validated":true,\n      "phenotypes":[\n         "Developmental delay AND/OR other significant developmental or morphological phenotypes"\n      ],\n      "reciprocalOverlap":0.00254\n   }\n]\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clingen"),(0,r.kt)("td",{parentName:"tr",align:null},"object array"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chromosome"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Ensembl-style chromosome names")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"begin"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1-based position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1-based position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variantType"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Any of the\xa0sequence alterations defined here.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifier from the data source. Alternatively a VID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clinicalInterpretation"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"see possible values below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"observedGains"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Range: 0 - (2",(0,r.kt)("sup",null,"31"),"\xa0- 1). Only used if copy_number_variation, copy_number_loss, or copy_number_gain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"observedLosses"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Range: 0 - (2",(0,r.kt)("sup",null,"31"),"\xa0- 1). Only used if copy_number_variation, copy_number_loss, or copy_number_gain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"validated"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phenotypes"),(0,r.kt)("td",{parentName:"tr",align:null},"string array"),(0,r.kt)("td",{parentName:"tr",align:null},"Description of the phenotype.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phenotypeIds"),(0,r.kt)("td",{parentName:"tr",align:null},"string array"),(0,r.kt)("td",{parentName:"tr",align:null},"Description of the phenotype IDs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reciprocalOverlap"),(0,r.kt)("td",{parentName:"tr",align:null},"floating point"),(0,r.kt)("td",{parentName:"tr",align:null},"Range: 0 - 1. E.g. 0.57 would indicate a 57% reciprocal overlap. Specified up to 5 decimal places (Not reported for Insertions).")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"clinicalInterpretation")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"benign"),(0,r.kt)("li",{parentName:"ul"},"curated benign"),(0,r.kt)("li",{parentName:"ul"},"curated pathogenic"),(0,r.kt)("li",{parentName:"ul"},"likely benign"),(0,r.kt)("li",{parentName:"ul"},"likely pathogenic"),(0,r.kt)("li",{parentName:"ul"},"path gain"),(0,r.kt)("li",{parentName:"ul"},"path loss"),(0,r.kt)("li",{parentName:"ul"},"pathogenic"),(0,r.kt)("li",{parentName:"ul"},"uncertain")))}u.isMDXComponent=!0},3906:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return m},default:function(){return h}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=n(6806),o=n(3496),s=n(3379),c=["components"],p={title:"ClinGen"},d=void 0,u={unversionedId:"data-sources/clingen",id:"version-3.16/data-sources/clingen",isDocsHomePage:!1,title:"ClinGen",description:"Overview",source:"@site/versioned_docs/version-3.16/data-sources/clingen.mdx",sourceDirName:"data-sources",slug:"/data-sources/clingen",permalink:"/NirvanaDocumentation/3.16/data-sources/clingen",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.16/data-sources/clingen.mdx",tags:[],version:"3.16",frontMatter:{title:"ClinGen"},sidebar:"version-3.16/docs",previous:{title:"Amino Acid Conservation",permalink:"/NirvanaDocumentation/3.16/data-sources/amino-acid-conservation"},next:{title:"ClinVar",permalink:"/NirvanaDocumentation/3.16/data-sources/clinvar"}},m=[{value:"Overview",id:"overview",children:[]},{value:"ISCA Regions",id:"isca-regions",children:[{value:"TSV Extraction",id:"tsv-extraction",children:[]}]},{value:"Conflict Resolution",id:"conflict-resolution",children:[{value:"Clinical significance priority",id:"clinical-significance-priority",children:[]},{value:"Validation Priority",id:"validation-priority",children:[]},{value:"Download URL",id:"download-url",children:[]},{value:"JSON Output",id:"json-output",children:[]}]},{value:"Dosage Sensitivity Map",id:"dosage-sensitivity-map",children:[{value:"TSV Source files",id:"tsv-source-files",children:[]},{value:"Dosage Rating System",id:"dosage-rating-system",children:[]},{value:"Download URL",id:"download-url-1",children:[]},{value:"JSON Output",id:"json-output-1",children:[]}]},{value:"Gene-Disease Validity",id:"gene-disease-validity",children:[{value:"Source TSV",id:"source-tsv",children:[]},{value:"Download URL",id:"download-url-2",children:[]},{value:"Conflict Resolution",id:"conflict-resolution-1",children:[]},{value:"JSON Output",id:"json-output-2",children:[]}]}],g={toc:m};function h(e){var t=e.components,n=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"ClinGen is a National Institutes of Health (NIH)-funded resource dedicated to building a central resource that defines the clinical relevance of genes and variants for use in precision medicine and research."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Heidi L. Rehm, Ph.D., Jonathan S. Berg, M.D., Ph.D., Lisa D. Brooks, Ph.D., Carlos D. Bustamante, Ph.D., James P. Evans, M.D., Ph.D., Melissa J. Landrum, Ph.D., David H. Ledbetter, Ph.D., Donna R. Maglott, Ph.D., Christa Lese Martin, Ph.D., Robert L. Nussbaum, M.D., Sharon E. Plon, M.D., Ph.D., Erin M. Ramos, Ph.D., Stephen T. Sherry, Ph.D., and Michael S. Watson, Ph.D., for ClinGen. ",(0,r.kt)("strong",{parentName:"p"},"ClinGen The Clinical Genome Resource.")," ",(0,r.kt)("em",{parentName:"p"},"N Engl J Med 2015; 372:2235-2242 June 4, 2015 DOI: 10.1056/NEJMsr1406261.")))),(0,r.kt)("h2",{id:"isca-regions"},"ISCA Regions"),(0,r.kt)("h3",{id:"tsv-extraction"},"TSV Extraction"),(0,r.kt)("p",null,"ClinGen contains only copy number variation variants, since the coordinates in ClinGen original file follow the same rule as BED format, the coordinates had to be adjusted to ","[BEGIN+1, END]","."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"#bin    chrom   chromStart      chromEnd        name    score   strand  thickStart      thickEnd        attrCount       attrTags        attrVals\nnsv530705       1       564405  8597804 0       1       copy_number_loss        pathogenic      False   Developmental delay AND/OR other significant developmental or morphological phenotypes\nnsv530706       1       564424  3262790 0       1       copy_number_loss        pathogenic      False   Abnormal facial shape,Abnormality of cardiac morphology,Global developmental delay,Muscular hypotonia   HP:0001252,HP:0001263,HP:0001627,HP:0001999,MedGen:CN001147,MedGen:CN001157,MedGen:CN001482,MedGen:CN001810\nnsv530707       1       564424  7068738 0       1       copy_number_loss        pathogenic      False   Abnormality of cardiac morphology,Cleft upper lip,Failure to thrive,Global developmental delay,Intrauterine growth retardation,Microcephaly,Short stature       HP:0000204,HP:0000252,HP:0001263,HP:0001508,HP:0001511,HP:0001627,HP:0004322,MedGen:C0349588,MedGen:C1845868,MedGen:C1853481,MedGen:C2364119,MedGen:CN000197,MedGen:CN001157,MedGen:CN001482\nnsv533512       1       564435  649748  0       1       copy_number_loss        benign  False   Developmental delay AND/OR other significant developmental or morphological phenotypes\nnsv931338       1       714078  4958499 0       1       copy_number_loss        pathogenic      False   Developmental delay AND/OR other significant developmental or morphological phenotypes\nnsv530300       1       728138  5066371 1       0       copy_number_gain        pathogenic      False   Abnormality of cardiac morphology,Cleft palate,Global developmental delay       HP:0000175,HP:0001263,HP:0001627,MedGen:C2240378,MedGen:CN001157,MedGen:CN001482\n")),(0,r.kt)("h4",{id:"status-levels"},"Status levels"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"benign"),(0,r.kt)("li",{parentName:"ul"},"curated benign"),(0,r.kt)("li",{parentName:"ul"},"curated pathogenic"),(0,r.kt)("li",{parentName:"ul"},"likely benign"),(0,r.kt)("li",{parentName:"ul"},"likely pathogenic"),(0,r.kt)("li",{parentName:"ul"},"path gain"),(0,r.kt)("li",{parentName:"ul"},"path loss"),(0,r.kt)("li",{parentName:"ul"},"pathogenic"),(0,r.kt)("li",{parentName:"ul"},"uncertain")),(0,r.kt)("h4",{id:"parsing"},"Parsing"),(0,r.kt)("p",null,"We parse the ClinGen tsv file and extract the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"chrom"),(0,r.kt)("li",{parentName:"ul"},"chromStart (note this a 0-based coordinate)"),(0,r.kt)("li",{parentName:"ul"},"chromEnd"),(0,r.kt)("li",{parentName:"ul"},"attrTags"),(0,r.kt)("li",{parentName:"ul"},"attrVals")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"attrTags")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"attrVals")," are comma separated lists. ",(0,r.kt)("inlineCode",{parentName:"p"},"attrTags")," contains the field keys and ",(0,r.kt)("inlineCode",{parentName:"p"},"attrVals")," contains the field values. We will parse the following keys from the two fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parent (this will be used as the ID in our JSON output)"),(0,r.kt)("li",{parentName:"ul"},"clinical_int"),(0,r.kt)("li",{parentName:"ul"},"validated"),(0,r.kt)("li",{parentName:"ul"},"phenotype (this should be a string array)"),(0,r.kt)("li",{parentName:"ul"},"phenotype_id (this should be a string array)")),(0,r.kt)("p",null,"Observed losses and observed gains will be calculated from entries that share a common parent ID."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"variants with a common parent ID and same coordinates are grouped",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"calculated observed losses, observed gains for each group"),(0,r.kt)("li",{parentName:"ul"},"Clinical significance and validation status are collapsed using the priority strategy described below"))),(0,r.kt)("li",{parentName:"ul"},"Variants with the same parent ID can have different coordinates (mapped to hg38)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"nsv491508 : chr14:105583663-106881350 and chr14:105605043-106766076 (only one example)"),(0,r.kt)("li",{parentName:"ul"},"we kept both variants")))),(0,r.kt)("h2",{id:"conflict-resolution"},"Conflict Resolution"),(0,r.kt)("h3",{id:"clinical-significance-priority"},"Clinical significance priority"),(0,r.kt)("p",null,"When there are a mixture of variants belonging to the same parent ID, we will choose the most pathogenic clinical significance from the available values. i.e. if 3 samples were deemed pathogenic and 2 samples were likely pathogenic, we would list the variant as pathogenic."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Priority")," (high to low)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Priority"),(0,r.kt)("li",{parentName:"ul"},"Pathogenic"),(0,r.kt)("li",{parentName:"ul"},"Likely pathogenic"),(0,r.kt)("li",{parentName:"ul"},"Benign"),(0,r.kt)("li",{parentName:"ul"},"Likely benign"),(0,r.kt)("li",{parentName:"ul"},"Uncertain significance")),(0,r.kt)("h3",{id:"validation-priority"},"Validation Priority"),(0,r.kt)("p",null,"When there are a mixture of variants belonging to same parent ID, we will set the validation status to true if any of the variants were validated."),(0,r.kt)("h3",{id:"download-url"},"Download URL"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cirm.ucsc.edu/cgi-bin/hgTrackUi?db=hg19&g=iscaComposite"},"https://cirm.ucsc.edu/cgi-bin/hgTrackUi?db=hg19&g=iscaComposite")),(0,r.kt)("h3",{id:"json-output"},"JSON Output"),(0,r.kt)(l.default,{mdxType:"CLINGENJSON"}),(0,r.kt)("h2",{id:"dosage-sensitivity-map"},"Dosage Sensitivity Map"),(0,r.kt)("p",null,"The Clinical Genome Resource (ClinGen) consortium is curating genes and regions of the genome to assess whether there is evidence to support that these genes/regions are dosage sensitive and should be targeted on a cytogenomic array. Nirvana reports these annotations for overlapping SVs."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Riggs ER, Nelson T, Merz A, Ackley T, Bunke B, Collins CD, Collinson MN, Fan YS, Goodenberger ML, Golden DM, Haglund-Hazy L, Krgovic D, Lamb AN, Lewis Z, Li G, Liu Y, Meck J, Neufeld-Kaiser W, Runke CK, Sanmann JN, Stavropoulos DJ, Strong E, Su M, Tayeh MK, Kokalj Vokac N, Thorland EC, Andersen E, Martin CL. ",(0,r.kt)("strong",{parentName:"p"},"Copy number variant discrepancy resolution using the ClinGen dosage sensitivity map results in updated clinical interpretations in ClinVar.")," ",(0,r.kt)("em",{parentName:"p"},"Hum Mutat. 2018 Nov;39(11):1650-1659. doi: 10.1002/humu.23610. PMID: 30095202; PMCID: PMC7374944.")))),(0,r.kt)("h3",{id:"tsv-source-files"},"TSV Source files"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Regions")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"#ClinGen Region Curation Results\n#07 May,2019\n#Genomic Locations are reported on GRCh38 (hg38): GCF_000001405.36\n#https://www.ncbi.nlm.nih.gov/projects/dbvar/clingen\n#to create link: https://www.ncbi.nlm.nih.gov/projects/dbvar/clingen/clingen_region.cgi?id=key\n#ISCA ID    ISCA Region Name    cytoBand    Genomic Location    Haploinsufficiency Score    Haploinsufficiency Description  Haploinsufficiency PMID1    Haploinsufficiency PMID2    Haploinsufficiency PMID3    Triplosensitivity Score Triplosensitivity Description   Triplosensitivity PMID1 Triplosensitivity PMID2 Triplosensitivity PMID3 Date Last Evaluated Loss phenotype OMIM ID  Triplosensitive phenotype OMIM ID\nISCA-46299  Xp11.22 region (includes HUWE1) Xp11.22 tbd 0   No evidence available               3   Sufficient evidence for dosage pathogenicity    22840365    20655035    26692240    2018-11-19\nISCA-46295  15q13.3 recurrent region (D-CHRNA7 to BP5) (includes CHRNA7 and OTUD7A) 15q13.3 chr15:31727418-32153204 3   Sufficient evidence for dosage pathogenicity    19898479    20236110    22775350    40  Dosage sensitivity unlikely 26968334    22420048        2018-05-10\nISCA-46291  7q11.23 recurrent distal region (includes HIP1, YWHAG)  7q11.23 chr7:75528718-76433859  2   Some evidence for dosage pathogenicity  21109226    16971481        1   Little evidence for dosage pathogenicity    21109226    27867344        2018-12-31\nISCA-46290  Xp11.22p11.23 recurrent region (includes SHROOM4)   Xp11.22-p11.23  chrX: 48447780-52444264 0   No evidence available               3   Sufficient evidence for dosage pathogenicity    19716111    21418194    25425167    2017-12-14      300801\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Genes")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"#ClinGen Gene Curation Results\n#24 May,2019\n#Genomic Locations are reported on GRCh37 (hg19): GCF_000001405.13\n#https://www.ncbi.nlm.nih.gov/projects/dbvar/clingen\n#to create link: https://www.ncbi.nlm.nih.gov/projects/dbvar/clingen/clingen_gene.cgi?sym=Gene Symbol\n#Gene Symbol    Gene ID cytoBand    Genomic Location    Haploinsufficiency Score    Haploinsufficiency Description  Haploinsufficiency PMID1    Haploinsufficiency PMID2    Haploinsufficiency PMID3    Triplosensitivity Score Triplosensitivity Description   Triplosensitivity PMID1 Triplosensitivity PMID2 Triplosensitivity PMID3 Date Last Evaluated Loss phenotype OMIM ID  Triplosensitive phenotype OMIM ID\nA4GALT  53947   22q13.2 chr22:43088121-43117307 30  Gene associated with autosomal recessive phenotype              0   No evidence available               2014-12-11  111400\nAAGAB   79719   15q23   chr15:67493013-67547536 3   Sufficient evidence for dosage pathogenicity    23064416    23000146        0   No evidence available               2013-02-28  148600\n")),(0,r.kt)("h3",{id:"dosage-rating-system"},"Dosage Rating System"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rating"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Clinical Interpretation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"No evidence to suggest that dosage sensitivity is associated with clinical phenotype")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Little evidence suggesting dosage sensitivity is associated with clinical phenotype")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Emerging evidence suggesting dosage sensitivity is associated with clinical phenotype")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Sufficient evidence suggesting dosage sensitivity is associated with clinical phenotype")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"30"),(0,r.kt)("td",{parentName:"tr",align:null},"Gene associated with autosomal recessive phenotype")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40"),(0,r.kt)("td",{parentName:"tr",align:null},"Dosage sensitivity unlikely")))),(0,r.kt)("p",null,"Reference: ",(0,r.kt)("a",{parentName:"p",href:"https://www.ncbi.nlm.nih.gov/projects/dbvar/clingen/help.shtml"},"https://www.ncbi.nlm.nih.gov/projects/dbvar/clingen/help.shtml")),(0,r.kt)("h3",{id:"download-url-1"},"Download URL"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"ftp://ftp.clinicalgenome.org/"},"ftp://ftp.clinicalgenome.org/")),(0,r.kt)("h3",{id:"json-output-1"},"JSON Output"),(0,r.kt)(o.default,{mdxType:"ClinGenDosageJson"}),(0,r.kt)("h2",{id:"gene-disease-validity"},"Gene-Disease Validity"),(0,r.kt)("p",null,"The ClinGen Gene-Disease Clinical Validity curation process involves evaluating the strength of evidence supporting or refuting a claim that variation in a particular gene causes a particular disease. Nirvana reports these annotations for genes in the genes section of the JSON."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Strande NT, Riggs ER, Buchanan AH, et al. ",(0,r.kt)("strong",{parentName:"p"},"Evaluating the Clinical Validity of Gene-Disease Associations: An Evidence-Based Framework Developed by the Clinical Genome Resource.")," ",(0,r.kt)("em",{parentName:"p"},"Am J Hum Genet. 2017;100(6):895-906. doi:10.1016/j.ajhg.2017.04.015")))),(0,r.kt)("h3",{id:"source-tsv"},"Source TSV"),(0,r.kt)("p",null,"The source data comes in a CSV file that we convert to a TSV as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"CLINGEN GENE VALIDITY CURATIONS\nFILE CREATED: 2019-05-28\nWEBPAGE: https://search.clinicalgenome.org/kb/gene-validity\n+++++++++++,++++++++++++++,+++++++++++++,++++++++++++++++++,+++++++++,++++++++++++++,+++++++++++++,+++++++++++++++++++\nGENE SYMBOL,GENE ID (HGNC),DISEASE LABEL,DISEASE ID (MONDO),SOP,CLASSIFICATION,ONLINE REPORT,CLASSIFICATION DATE\n+++++++++++,++++++++++++++,+++++++++++++,++++++++++++++++++,+++++++++,++++++++++++++,+++++++++++++,+++++++++++++++++++\nA2ML1,HGNC:23336,Noonan syndrome with multiple lentigines,MONDO_0007893,SOP5,No Reported Evidence,https://search.clinicalgenome.org/kb/gene-validity/59b87033-dd91-4f1e-aec1-c9b1f5124b16--2018-06-07T14:37:47,2018-06-07T14:37:47.175Z\nA2ML1,HGNC:23336,cardiofaciocutaneous syndrome,MONDO_0015280,SOP5,No Reported Evidence,https://search.clinicalgenome.org/kb/gene-validity/fc3c41d8-8497-489b-a350-c9e30016bc6a--2018-06-07T14:31:03,2018-06-07T14:31:03.696Z\nA2ML1,HGNC:23336,Costello syndrome,MONDO_0009026,SOP5,No Reported Evidence,https://search.clinicalgenome.org/kb/gene-validity/ea72ba8d-cf62-44bc-86be-da64e3848eba--2018-06-07T14:34:05,2018-06-07T14:34:05.324Z\n")),(0,r.kt)("h3",{id:"download-url-2"},"Download URL"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://search.clinicalgenome.org/kb/gene-validity.csv"},"https://search.clinicalgenome.org/kb/gene-validity.csv")),(0,r.kt)("h3",{id:"conflict-resolution-1"},"Conflict Resolution"),(0,r.kt)("h4",{id:"multiple-classifications"},"Multiple Classifications"),(0,r.kt)("p",null,"Here is an example of multiple classifications."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"$ grep MONDO_0010192 ClinGen-Gene-Disease-Summary-2019-12-02.csv  | grep EDNRB\nEDNRB,HGNC:3180,Waardenburg syndrome type 4A,MONDO_0010192,SOP6,Moderate,https://search.clinicalgenome.org/kb/gene-validity/d7abbd45-7915-437b-849b-dea876bfc2f5--2018-05-08T04:00:00,2018-05-08T04:00:00.000Z\nEDNRB,HGNC:3180,Waardenburg syndrome type 4A,MONDO_0010192,SOP6,Limited,https://search.clinicalgenome.org/kb/gene-validity/73ee9727-60c1-40fd-830f-08c2b513d2ee--2018-05-08T04:00:00,2018-05-08T04:00:00.000Z\n")),(0,r.kt)("p",null,"In such cases, we select the more severe classification."),(0,r.kt)("h4",{id:"multiple-dates"},"Multiple Dates"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"$ grep MONDO_0016419 ClinGen-Gene-Disease-Summary-2019-12-02.csv  | grep MUTYH\nMUTYH,HGNC:7527,hereditary breast carcinoma,MONDO_0016419,SOP4,No Reported Evidence,https://search.clinicalgenome.org/kb/gene-validity/9904,2017-05-24T00:00:00\nMUTYH,HGNC:7527,hereditary breast carcinoma,MONDO_0016419,SOP4,No Reported Evidence,https://search.clinicalgenome.org/kb/gene-validity/9902,2017-05-25T00:00:00\n")),(0,r.kt)("p",null,"If the classifications are the same, we should select the latest classification date."),(0,r.kt)("h3",{id:"json-output-2"},"JSON Output"),(0,r.kt)(s.default,{mdxType:"ClinGenGeneValidity"}))}h.isMDXComponent=!0}}]);