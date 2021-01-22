(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{169:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,O=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return a?r.a.createElement(O,c(c({ref:t},l),{},{components:a})):r.a.createElement(O,c({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(169)),i={},c={unversionedId:"data-sources/omim-json",id:"data-sources/omim-json",isDocsHomePage:!1,title:"omim-json",description:"`json",source:"@site/docs/data-sources/omim-json.md",slug:"/data-sources/omim-json",permalink:"/NirvanaDocumentation/data-sources/omim-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/omim-json.md",version:"current"},b=[],l={toc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"omim":[ \n   { \n      "mimNumber":600678,\n      "geneName":"MutS, E. coli, homolog of, 6",\n      "description":"The transcription factor p53 responds to diverse cellular stresses to regulate target genes that induce cell cycle arrest, apoptosis, senescence, DNA repair, or changes in metabolism. In addition, p53 appears to induce apoptosis through nontranscriptional cytoplasmic processes. In unstressed cells, p53 is kept inactive essentially through the actions of the ubiquitin ligase MDM2, which inhibits p53 transcriptional activity and ubiquitinates p53 to promote its degradation. Numerous posttranslational modifications modulate p53 activity, most notably phosphorylation and acetylation. Several less abundant p53 isoforms also modulate p53 activity. Activity of p53 is ubiquitously lost in human cancer either by mutation of the p53 gene itself or by loss of cell signaling upstream or downstream of p53 (Toledo and Wahl, 2006; Bourdon, 2007; Vousden and Lane, 2007)",\n      "phenotypes":[ \n         { \n            "mimNumber":614350,\n            "phenotype":"Colorectal cancer, hereditary nonpolyposis, type 5",\n            "description":"Hereditary nonpolyposis colorectal cancer type 5 is a cancer predisposition syndrome ...",\n            "mapping":"molecular basis of the disorder is known",\n            "inheritances":[ \n               "Autosomal dominant"\n            ]\n         },\n         { \n            "mimNumber":608089,\n            "phenotype":"Endometrial cancer, familial",\n            "mapping":"molecular basis of the disorder is known"\n         },\n         { \n            "mimNumber":276300,\n            "phenotype":"Mismatch repair cancer syndrome",\n            "description":"Constitutional mismatch repair deficiency is a rare childhood cancer predisposition syndrome ...",\n            "mapping":"molecular basis of the disorder is known",\n            "inheritances":[ \n               "Autosomal recessive"\n            ],\n            "comments"     : [\n                "contribute to susceptibility to multifactorial disorders or to susceptibility to infection",\n                "unconfirmed or possibly spurious mapping"\n            ]\n         }\n      ]\n   }\n]\n')),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Field"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Notes"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"mimNumber"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"int"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OMIM ID for gene")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"geneName"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"gene name")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"description"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"phenotypes"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"object array"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"see ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"#phenotype"}),"Phenotype entry below"))))),Object(o.b)("h4",{id:"phenotype"},"Phenotype"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Field"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Notes"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"mimNumber"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"int"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"phenotype"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"description"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"mapping"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"see ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"#mapping"}),"possible values below"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"inheritance"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string array"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"see ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"#inheritance"}),"possible values below"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"comments"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string array"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"see ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"#comments"}),"possible values below"))))),Object(o.b)("h4",{id:"mapping"},"Mapping"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"disorder was positioned by mapping of the wild type gene"),Object(o.b)("li",{parentName:"ol"},"disease phenotype itself was mapped"),Object(o.b)("li",{parentName:"ol"},"molecular basis of the disorder is known"),Object(o.b)("li",{parentName:"ol"},"disorder is a chromosome deletion or duplication syndrome")),Object(o.b)("h4",{id:"inheritance"},"Inheritance"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"autosomal recessive"),Object(o.b)("li",{parentName:"ul"},"autosomal dominant")),Object(o.b)("h4",{id:"comments"},"Comments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"contributes to the susceptibility to multifactorial disorders"),Object(o.b)("li",{parentName:"ul"},"variations that lead to apparently abnormal laboratory test values"),Object(o.b)("li",{parentName:"ul"},"unconfirmed mapping")))}p.isMDXComponent=!0}}]);