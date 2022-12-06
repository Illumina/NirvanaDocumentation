"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[1959,1063],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=m(a),N=r,g=s["".concat(p,".").concat(N)]||s[N]||c[N]||l;return a?n.createElement(g,i(i({ref:e},d),{},{components:a})):n.createElement(g,i({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},6015:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},i=void 0,o={unversionedId:"data-sources/fusioncatcher-json",id:"version-3.17/data-sources/fusioncatcher-json",title:"fusioncatcher-json",description:"| Field            | Type         | Notes                                  |",source:"@site/versioned_docs/version-3.17/data-sources/fusioncatcher-json.md",sourceDirName:"data-sources",slug:"/data-sources/fusioncatcher-json",permalink:"/NirvanaDocumentation/3.17/data-sources/fusioncatcher-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.17/data-sources/fusioncatcher-json.md",tags:[],version:"3.17",frontMatter:{}},p=[{value:"genes",id:"genes",children:[],level:4},{value:"gene",id:"gene",children:[],level:4}],m={toc:p};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'   "fusionCatcher":[\n      {\n         "genes":{\n            "first":{\n               "hgnc":"ETV6",\n               "isOncogene":true\n            },\n            "second":{\n               "hgnc":"RUNX1"\n            },\n            "isParalogPair":true,\n            "isPseudogenePair":true,\n            "isReadthrough":true\n         },\n         "germlineSources":[\n            "1000 Genomes Project"\n         ],\n         "somaticSources":[\n            "COSMIC",\n            "TCGA oesophageal carcinomas"\n         ]\n      }\n   ]\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"genes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"genes object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5' gene & 3' gene")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"germlineSources"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"matches in known germline data sources")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"somaticSources"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"matches in known somatic data sources")))),(0,r.kt)("h4",{id:"genes"},"genes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"first"),(0,r.kt)("td",{parentName:"tr",align:"center"},"gene object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5' gene")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"second"),(0,r.kt)("td",{parentName:"tr",align:"center"},"gene object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3' gene")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"isParalogPair"),(0,r.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true when both genes are paralogs for each other")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"isPseudogenePair"),(0,r.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true when both genes are pseudogenes for each other")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"isReadthrough"),(0,r.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true when this fusion gene is a readthrough event (both are on the same strand and there are no genes between them)")))),(0,r.kt)("h4",{id:"gene"},"gene"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hgnc"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"gene symbol. e.g. MSH6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"isOncogene"),(0,r.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true when this gene is an oncogene")))))}d.isMDXComponent=!0},1842:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),l=a(6015);const i={title:"FusionCatcher"},o=void 0,p={unversionedId:"data-sources/fusioncatcher",id:"version-3.17/data-sources/fusioncatcher",title:"FusionCatcher",description:"Overview",source:"@site/versioned_docs/version-3.17/data-sources/fusioncatcher.mdx",sourceDirName:"data-sources",slug:"/data-sources/fusioncatcher",permalink:"/NirvanaDocumentation/3.17/data-sources/fusioncatcher",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.17/data-sources/fusioncatcher.mdx",tags:[],version:"3.17",frontMatter:{title:"FusionCatcher"},sidebar:"version-3.17/docs",previous:{title:"dbSNP",permalink:"/NirvanaDocumentation/3.17/data-sources/dbsnp"},next:{title:"gnomAD",permalink:"/NirvanaDocumentation/3.17/data-sources/gnomad"}},m=[{value:"Overview",id:"overview",children:[],level:2},{value:"Supported Data Sources",id:"supported-data-sources",children:[{value:"Oncogenes",id:"oncogenes",children:[],level:3},{value:"Germline",id:"germline",children:[],level:3},{value:"Somatic",id:"somatic",children:[],level:3}],level:2},{value:"Gene Pair TSV File",id:"gene-pair-tsv-file",children:[{value:"Example",id:"example",children:[],level:3},{value:"Parsing",id:"parsing",children:[],level:3}],level:2},{value:"Gene TSV File",id:"gene-tsv-file",children:[{value:"Example",id:"example-1",children:[],level:3},{value:"Parsing",id:"parsing-1",children:[],level:3}],level:2},{value:"Known Issues",id:"known-issues",children:[],level:2},{value:"Download URL",id:"download-url",children:[],level:2},{value:"JSON Output",id:"json-output",children:[],level:2}],d={toc:m};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ndaniel/fusioncatcher"},"FusionCatcher")," is a well-known tool that searches for somatic novel/known fusion genes, translocations, and/or chimeras in RNA-seq data. While FusionCatcher itself is not part of Nirvana, we have included a subset of their genomic databases in Nirvana."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Daniel Nicorici, Mihaela \u015eatalan, Henrik Edgren, Sara Kangaspeska, Astrid Murum\xe4gi, Olli Kallioniemi, Sami Virtanen, Olavi Kilkku. (2014) ",(0,r.kt)("a",{parentName:"p",href:"https://www.biorxiv.org/content/10.1101/011650v1"},"FusionCatcher \u2013 a tool for finding somatic fusion genes in paired-end RNA-sequencing data"),". ",(0,r.kt)("em",{parentName:"p"},"bioRxiv")," 011650"))),(0,r.kt)("h2",{id:"supported-data-sources"},"Supported Data Sources"),(0,r.kt)("h3",{id:"oncogenes"},"Oncogenes"),(0,r.kt)("p",null,"The following data sources are aggregated and used to populate the ",(0,r.kt)("inlineCode",{parentName:"p"},"isOncogene")," field in the gene JSON object:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Reference"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Data"),(0,r.kt)("th",{parentName:"tr",align:"left"},"FusionCatcher filename"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Bushman"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://www.bushmanlab.org/links/genelists"},"bushmanlab.org")),(0,r.kt)("td",{parentName:"tr",align:"left"},"cancer_genes.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ONGENE"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.sciencedirect.com/science/article/pii/S1673852716302053"},"JGG")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://ongene.bioinfo-minzhao.org"},"bioinfo-minzhao.org")),(0,r.kt)("td",{parentName:"tr",align:"left"},"oncogenes_more.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"UniProt tumor genes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/49/D1/D480/6006196"},"NAR")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.uniprot.org/downloads"},"uniprot.org")),(0,r.kt)("td",{parentName:"tr",align:"left"},"tumor_genes.txt")))),(0,r.kt)("h3",{id:"germline"},"Germline"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nirvana label"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Reference"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Data"),(0,r.kt)("th",{parentName:"tr",align:"left"},"FusionCatcher filename"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1000 Genomes Project"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0104567"},"PLOS ONE")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"1000genomes.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Healthy (strong support)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"banned.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Illumina Body Map 2.0"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.ebi.ac.uk/arrayexpress/experiments/E-MTAB-513"},"EBI")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bodymap2.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CACG"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.sciencedirect.com/science/article/pii/S0888754312000821"},"Genomics")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"cacg.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ConjoinG"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0013284"},"PLOS ONE")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"conjoing.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Healthy prefrontal cortex"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://bmcmedgenomics.biomedcentral.com/articles/10.1186/s12920-016-0164-y"},"BMC Medical Genomics")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE68719"},"NCBI GEO")),(0,r.kt)("td",{parentName:"tr",align:"left"},"cortex.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Duplicated Genes Database"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0050653"},"PLOS ONE")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://dgd.genouest.org/"},"genouest.org")),(0,r.kt)("td",{parentName:"tr",align:"left"},"dgd.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GTEx healthy tissues"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://gtexportal.org/home/"},"gtexportal.org")),(0,r.kt)("td",{parentName:"tr",align:"left"},"gtex.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Healthy"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"healthy.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Human Protein Atlas"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.mcponline.org/article/S1535-9476(20)34633-8/fulltext"},"MCP")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.ebi.ac.uk/arrayexpress/experiments/E-MTAB-1733/"},"EBI")),(0,r.kt)("td",{parentName:"tr",align:"left"},"hpa.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Babiceanu non-cancer tissues"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/44/6/2859/2499453"},"NAR")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/44/6/2859/2499453#supplementary-data"},"NAR")),(0,r.kt)("td",{parentName:"tr",align:"left"},"non-cancer_tissues.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"non-tumor cell lines"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"non-tumor_cells.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TumorFusions normal"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/46/D1/D1144/4584571"},"NAR")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/46/D1/D1144/4584571#supplementary-data"},"NAR")),(0,r.kt)("td",{parentName:"tr",align:"left"},"tcga-normal.txt")))),(0,r.kt)("h3",{id:"somatic"},"Somatic"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nirvana label"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Reference"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Data"),(0,r.kt)("th",{parentName:"tr",align:"left"},"FusionCatcher filename"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Alaei-Mahabadi 18 cancers"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.pnas.org/content/113/48/13768.long"},"PNAS")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"18cancers.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DepMap CCLE"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://depmap.org/portal/download/"},"depmap.org")),(0,r.kt)("td",{parentName:"tr",align:"left"},"ccle.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CCLE Klijn"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.nature.com/articles/nbt.3080"},"Nature Biotechnology")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.nature.com/articles/nbt.3080#Sec27"},"Nature Biotechnology")),(0,r.kt)("td",{parentName:"tr",align:"left"},"ccle2.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CCLE Vellichirammal"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.cell.com/molecular-therapy-family/nucleic-acids/fulltext/S2162-2531(20)30058-5"},"Molecular Therapy Nucleic Acids")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"ccle3.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Cancer Genome Project"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://cancer.sanger.ac.uk/cosmic/download"},"COSMIC")),(0,r.kt)("td",{parentName:"tr",align:"left"},"cgp.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ChimerKB 4.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/48/D1/D817/5611671"},"NAR")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.kobic.re.kr/chimerdb_mirror/download"},"kobic.re.kr")),(0,r.kt)("td",{parentName:"tr",align:"left"},"chimerdb4kb.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ChimerPub 4.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/48/D1/D817/5611671"},"NAR")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.kobic.re.kr/chimerdb_mirror/download"},"kobic.re.kr")),(0,r.kt)("td",{parentName:"tr",align:"left"},"chimerdb4pub.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ChimerSeq 4.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/48/D1/D817/5611671"},"NAR")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.kobic.re.kr/chimerdb_mirror/download"},"kobic.re.kr")),(0,r.kt)("td",{parentName:"tr",align:"left"},"chimerdb4seq.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"COSMIC"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/47/D1/D941/5146192"},"NAR")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://cancer.sanger.ac.uk/cosmic/download"},"COSMIC")),(0,r.kt)("td",{parentName:"tr",align:"left"},"cosmic.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Bao gliomas"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://genome.cshlp.org/content/24/11/1765"},"Genome Research")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"gliomas.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Known"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"known.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Mitelman DB"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://mitelmandatabase.isb-cgc.org"},"ISB-CGC")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://storage.cloud.google.com/mitelman-data-files/prod/mitelman_db.zip"},"Google Cloud")),(0,r.kt)("td",{parentName:"tr",align:"left"},"mitelman.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCGA oesophageal carcinomas"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.nature.com/articles/nature20805"},"Nature")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"oesophagus.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Bailey pancreatic cancers"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.nature.com/articles/nature16965"},"Nature")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.nature.com/articles/nature16965#Sec44"},"Nature")),(0,r.kt)("td",{parentName:"tr",align:"left"},"pancreases.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PCAWG"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://doi.org/10.1016/j.cell.2018.03.042"},"Cell")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://dcc.icgc.org/releases/PCAWG/transcriptome/fusion"},"ICGC")),(0,r.kt)("td",{parentName:"tr",align:"left"},"pcawg.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Robinson prostate cancers"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://doi.org/10.1016/j.cell.2015.05.001"},"Cell")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.cell.com/cell/fulltext/S0092-8674(15)00548-6?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS0092867415005486%3Fshowall%3Dtrue#supplementaryMaterial"},"Cell")),(0,r.kt)("td",{parentName:"tr",align:"left"},"prostate_cancer.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCGA"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga"},"cancer.gov")),(0,r.kt)("td",{parentName:"tr",align:"left"},"tcga.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TumorFusions tumor"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/46/D1/D1144/4584571"},"NAR")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/46/D1/D1144/4584571#supplementary-data"},"NAR")),(0,r.kt)("td",{parentName:"tr",align:"left"},"tcga-cancer.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCGA Gao"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://doi.org/10.1016/j.celrep.2018.03.050"},"Cell")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.cell.com/cell-reports/fulltext/S2211-1247(18)30395-4?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS2211124718303954%3Fshowall%3Dtrue#supplementaryMaterial"},"Cell")),(0,r.kt)("td",{parentName:"tr",align:"left"},"tcga2.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCGA Vellichirammal"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.cell.com/molecular-therapy-family/nucleic-acids/fulltext/S2162-2531(20)30058-5"},"Molecular Therapy Nucleic Acids")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"tcga3.txt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TICdb"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-8-33"},"BMC Genomics")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://genetica.unav.edu/TICdb/allseqs_TICdb.txt"},"unav.edu")),(0,r.kt)("td",{parentName:"tr",align:"left"},"ticdb.txt")))),(0,r.kt)("h2",{id:"gene-pair-tsv-file"},"Gene Pair TSV File"),(0,r.kt)("p",null,"Most of the data files in FusionCatcher are two-column TSV files containing the Ensembl gene IDs that are paired together."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Here are the first few lines of the 1000genomes.txt file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ENSG00000006210 ENSG00000102962\nENSG00000006652 ENSG00000181016\nENSG00000014138 ENSG00000149798\nENSG00000026297 ENSG00000071242\nENSG00000035499 ENSG00000155959\nENSG00000055211 ENSG00000131013\nENSG00000055332 ENSG00000179915\nENSG00000062485 ENSG00000257727\nENSG00000065978 ENSG00000166501\nENSG00000066044 ENSG00000104980\n")),(0,r.kt)("h3",{id:"parsing"},"Parsing"),(0,r.kt)("p",null,"In Nirvana, we will only import a gene pair if both Ensembl gene IDs are recognized from either our GRCh37 or GRCh38 cache files."),(0,r.kt)("h2",{id:"gene-tsv-file"},"Gene TSV File"),(0,r.kt)("p",null,"Some of the data files are single-column files containing Ensembl gene IDs. This is commonly used in the data files representing oncogene data sources."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("p",null,"Here are the first few lines of the oncogenes_more.txt file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ENSG00000000938\nENSG00000003402\nENSG00000005469\nENSG00000005884\nENSG00000006128\nENSG00000006453\nENSG00000006468\nENSG00000007350\nENSG00000008294\nENSG00000008952\n")),(0,r.kt)("h3",{id:"parsing-1"},"Parsing"),(0,r.kt)("h2",{id:"known-issues"},"Known Issues"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Known Issues")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"FusionCatcher also uses creates custom Ensembl genes (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"ENSG09000000002"),") to handle missing Ensembl genes. Nirvana will ignore these entries since we only include the gene IDs that are currently recognized by Nirvana."),(0,r.kt)("p",{parentName:"div"},"I suspect that these were originally RefSeq genes and if so, we can support those directly in Nirvana in the future."))),(0,r.kt)("h2",{id:"download-url"},"Download URL"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/fusioncatcher/files/data"},"https://sourceforge.net/projects/fusioncatcher/files/data")),(0,r.kt)("h2",{id:"json-output"},"JSON Output"),(0,r.kt)(l.default,{mdxType:"JSON"}))}s.isMDXComponent=!0}}]);