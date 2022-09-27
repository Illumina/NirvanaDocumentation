"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[3957,5360,6458],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=m(a),u=i,N=p["".concat(s,".").concat(u)]||p[u]||d[u]||r;return a?n.createElement(N,l(l({ref:t},c),{},{components:a})):n.createElement(N,l({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7997:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={},l=void 0,o={unversionedId:"data-sources/cosmic-gene-fusion-json",id:"data-sources/cosmic-gene-fusion-json",title:"cosmic-gene-fusion-json",description:"| Field       | Type         | Notes                     |",source:"@site/docs/data-sources/cosmic-gene-fusion-json.md",sourceDirName:"data-sources",slug:"/data-sources/cosmic-gene-fusion-json",permalink:"/NirvanaDocumentation/data-sources/cosmic-gene-fusion-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/cosmic-gene-fusion-json.md",tags:[],version:"current",frontMatter:{}},s=[],m={toc:s};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'   "cosmicGeneFusions":[\n      {\n         "id":"COSF881",\n         "numSamples":6,\n         "geneSymbols":[\n            "MYB",\n            "NFIB"\n         ],\n         "hgvsr":"ENST00000341911.5(MYB):r.1_2368::ENST00000397581.2(NFIB):r.2592_3318",\n         "histologies":[\n            {\n               "name":"adenoid cystic carcinoma",\n               "numSamples":6\n            }\n         ],\n         "sites":[\n            {\n               "name":"salivary gland (submandibular)",\n               "numSamples":1\n            },\n            {\n               "name":"salivary gland (parotid)",\n               "numSamples":1\n            },\n            {\n               "name":"salivary gland (nasal cavity)",\n               "numSamples":1\n            },\n            {\n               "name":"breast",\n               "numSamples":3\n            }\n         ],\n         "pubMedIds":[\n            19841262\n         ]\n      }\n   ]\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"id"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"COSMIC fusion ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"numSamples"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"geneSymbols"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"5' gene & 3' gene")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"hgvsr"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"HGVS RNA translocation fusion notation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"histologies"),(0,i.kt)("td",{parentName:"tr",align:"center"},"count array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"phenotypic descriptions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"sites"),(0,i.kt)("td",{parentName:"tr",align:"center"},"count array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"tissue types")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"pubMedIds"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"PubMed IDs")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Count")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"description")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"numSamples"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"})))))}c.isMDXComponent=!0},525:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={},l=void 0,o={unversionedId:"data-sources/cosmic-json",id:"data-sources/cosmic-json",title:"cosmic-json",description:"| Field            | Type        | Notes                      |",source:"@site/docs/data-sources/cosmic-json.md",sourceDirName:"data-sources",slug:"/data-sources/cosmic-json",permalink:"/NirvanaDocumentation/data-sources/cosmic-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/cosmic-json.md",tags:[],version:"current",frontMatter:{}},s=[],m={toc:s};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "id":"COSV58272668",\n   "numSamples":8,\n   "refAllele":"-",\n   "altAllele":"CCT",\n   "histologies":[\n      {\n         "name":"carcinoma (serous carcinoma)",\n         "numSamples":2\n      },\n      {\n         "name":"meningioma (fibroblastic)",\n         "numSamples":1\n      },\n      {\n         "name":"carcinoma",\n         "numSamples":1\n      },\n      {\n         "name":"carcinoma (squamous cell carcinoma)",\n         "numSamples":1\n      },\n      {\n         "name":"meningioma (transitional)",\n         "numSamples":1\n      },\n      {\n         "name":"carcinoma (adenocarcinoma)",\n         "numSamples":1\n      },\n      {\n         "name":"other (neoplasm)",\n         "numSamples":1\n      }\n   ],\n   "sites":[\n      {\n         "name":"ovary",\n         "numSamples":2\n      },\n      {\n         "name":"meninges",\n         "numSamples":2\n      },\n      {\n         "name":"thyroid",\n         "numSamples":2\n      },\n      {\n         "name":"cervix",\n         "numSamples":1\n      },\n      {\n         "name":"large intestine (colon)",\n         "numSamples":1\n      }\n   ],\n   "pubMedIds":[\n      25738363,\n      27548314\n   ],\n   "confirmedSomatic":true,\n   "drugResistance":true, /* not in this particular COSMIC variant */\n   "isAlleleSpecific":true\n}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"id"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"COSMIC Genomic Mutation ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"numSamples"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"refAllele"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"altAllele"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"histologies"),(0,i.kt)("td",{parentName:"tr",align:"center"},"count array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"phenotypic descriptions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"sites"),(0,i.kt)("td",{parentName:"tr",align:"center"},"count array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"tissue types")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"pubMedIds"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"PubMed IDs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"confirmedSomatic"),(0,i.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,i.kt)("td",{parentName:"tr",align:"left"},"true when the variant is a confirmed somatic variant")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"drugResistance"),(0,i.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,i.kt)("td",{parentName:"tr",align:"left"},"true when the variant has been associated with drug resistance")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Count")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"description")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"numSamples"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"})))))}c.isMDXComponent=!0},1335:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>m,toc:()=>c});var n=a(7462),i=(a(7294),a(3905)),r=a(525),l=a(7997);const o={title:"COSMIC"},s=void 0,m={unversionedId:"data-sources/cosmic",id:"data-sources/cosmic",title:"COSMIC",description:"Overview",source:"@site/docs/data-sources/cosmic.mdx",sourceDirName:"data-sources",slug:"/data-sources/cosmic",permalink:"/NirvanaDocumentation/data-sources/cosmic",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/cosmic.mdx",tags:[],version:"current",frontMatter:{title:"COSMIC"},sidebar:"docs",previous:{title:"ClinVar",permalink:"/NirvanaDocumentation/data-sources/clinvar"},next:{title:"DANN",permalink:"/NirvanaDocumentation/data-sources/dann"}},c=[{value:"Overview",id:"overview",children:[],level:2},{value:"Small Variants",id:"small-variants",children:[{value:"VCF extraction",id:"vcf-extraction",children:[{value:"Example",id:"example",children:[],level:4},{value:"Parsing",id:"parsing",children:[],level:4}],level:3},{value:"TSV extraction",id:"tsv-extraction",children:[{value:"Example",id:"example-1",children:[],level:4},{value:"Parsing",id:"parsing-1",children:[],level:4},{value:"Parsing",id:"parsing-2",children:[],level:4},{value:"Aggregating Histologies &amp; Sites",id:"aggregating-histologies--sites",children:[],level:4}],level:3},{value:"Download URL",id:"download-url",children:[{value:"GRCh37",id:"grch37",children:[],level:4},{value:"GRCh38",id:"grch38",children:[],level:4}],level:3},{value:"JSON Output",id:"json-output",children:[],level:3}],level:2},{value:"Gene Fusions",id:"gene-fusions",children:[{value:"TSV extraction",id:"tsv-extraction-1",children:[{value:"Example",id:"example-2",children:[],level:4},{value:"Parsing",id:"parsing-3",children:[],level:4},{value:"Parsing",id:"parsing-4",children:[],level:4},{value:"Aggregating Histologies &amp; Sites",id:"aggregating-histologies--sites-1",children:[],level:4}],level:3},{value:"Known Issues",id:"known-issues",children:[],level:3},{value:"Download URL",id:"download-url-1",children:[{value:"GRCh37",id:"grch37-1",children:[],level:4},{value:"GRCh38",id:"grch38-1",children:[],level:4}],level:3},{value:"JSON Output",id:"json-output-1",children:[],level:3}],level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"COSMIC, the Catalogue of Somatic Mutations in Cancer, is the world's largest source of expert manually curated somatic mutation information relating to human\ncancers."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"John G Tate, Sally Bamford, Harry C Jubb, Zbyslaw Sondka, David M Beare, Nidhi Bindal, Harry Boutselakis, Charlotte G Cole, Celestino Creatore, Elisabeth Dawson,\nPeter Fish, Bhavana Harsha, Charlie Hathaway, Steve C Jupe, Chai Yin Kok, Kate Noble, Laura Ponting, Christopher C Ramshaw, Claire E Rye, Helen E Speedy, Ray\nStefancsik, Sam L Thompson, Shicai Wang, Sari Ward, Peter J Campbell, Simon A Forbes. (2019) ",(0,i.kt)("a",{parentName:"p",href:"https://academic.oup.com/nar/article/47/D1/D941/5146192"},"COSMIC: the Catalogue Of Somatic Mutations In\nCancer"),", ",(0,i.kt)("em",{parentName:"p"},"Nucleic Acids Research"),", Volume 47, Issue D1"))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Licensed Content")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Commercial companies are required to ",(0,i.kt)("a",{parentName:"p",href:"https://cancer.sanger.ac.uk/cosmic/license"},"acquire a license from COSMIC"),". At the moment, this means that our COSMIC\ncontent is only available in Illumina's products and services, not in the open source distribution."),(0,i.kt)("p",{parentName:"div"},"Since many of you are academic users, we will enable a COSMIC login in our downloader later this year that will allow academic and commercial organizations (with\na license) access our COSMIC data sources."))),(0,i.kt)("h2",{id:"small-variants"},"Small Variants"),(0,i.kt)("p",null,"Our main COSMIC deliverable provides annotations for both coding and non-coding variants throughout the genome. As of COSMIC v96, this includes 28.7M variants\nspanning the human genome. Nirvana currently parses four files to extract the relevant content:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CosmicCodingMuts.vcf.gz"),(0,i.kt)("li",{parentName:"ul"},"CosmicNonCodingVariants.vcf.gz"),(0,i.kt)("li",{parentName:"ul"},"CosmicMutantExport.tsv.gz"),(0,i.kt)("li",{parentName:"ul"},"CosmicNCV.tsv.gz")),(0,i.kt)("h3",{id:"vcf-extraction"},"VCF extraction"),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"#CHROM  POS ID  REF ALT QUAL  FILTER  INFO\n1 65797 COSV58737189  T C . . GENE=OR4F5_ENST00000641515;STRAND=+;LEGACY_ID=COSN23957695;CDS=c.9+224T>C;AA=p.?;HGVSC=ENST00000641515.2:c.9+224T>C;HGVSG=1:g.65797T>C;CNT=1\n")),(0,i.kt)("h4",{id:"parsing"},"Parsing"),(0,i.kt)("p",null,"From the VCF files, we're mainly interested in the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CHROM")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REF")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ALT"))),(0,i.kt)("h3",{id:"tsv-extraction"},"TSV extraction"),(0,i.kt)("h4",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"Gene name Accession Number  Gene CDS length HGNC ID Sample name ID_sample ID_tumour Primary site  Site subtype 1  Site subtype 2  Site subtype 3  Primary histology Histology subtype 1 Histology subtype 2 Histology subtype 3 Genome-wide screen  GENOMIC_MUTATION_ID LEGACY_MUTATION_ID  MUTATION_ID Mutation CDS  Mutation AA Mutation Description  Mutation zygosity LOH GRCh  Mutation genome position  Mutation strand Resistance Mutation Mutation somatic status Pubmed_PMID ID_STUDY  Sample Type Tumour origin Age HGVSP HGVSC HGVSG\nMCF2L_ENST00000375604 ENST00000375604.6 3372  14576 RK091_C01 1918867 1806188 liver NS  NS  NS  carcinoma NS  NS  NS  y COSV65049364  COSN1601909 113108365 c.73+3096A>G  p.? Unknown het   38  13:113005079-113005079  + - Variant of unknown origin   322 fresh/frozen - NOS  primary     ENST00000375604.6:c.73+3096A>G  13:g.113005079A>G\n")),(0,i.kt)("h4",{id:"parsing-1"},"Parsing"),(0,i.kt)("p",null,"From the TSV file, we're mainly interested in the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GENOMIC_MUTATION_ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ID_sample")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Primary site")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Site subtype 1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Primary histology")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Histology subtype 1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Pubmed_PMID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Resistance Mutation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Mutation somatic status"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For all the histologies and sites, we replace all the underlines with spaces. ",(0,i.kt)("inlineCode",{parentName:"p"},"salivary_gland")," would become ",(0,i.kt)("inlineCode",{parentName:"p"},"salivary gland"),"."))),(0,i.kt)("h4",{id:"parsing-2"},"Parsing"),(0,i.kt)("p",null,"To aggregate the data in Nirvana, we perform the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Parse the coding and non-coding TSV files to retrieve the histologies, sites, PubMed IDs, somatic status, and resistance mutation status. Histologies and sites\nare tracked with respect to sample IDs."),(0,i.kt)("li",{parentName:"ul"},"Parse the coding and non-coding VCF files to retrieve the genomic variant for each entry")),(0,i.kt)("h4",{id:"aggregating-histologies--sites"},"Aggregating Histologies & Sites"),(0,i.kt)("p",null,"For sites and histologies, we observe that the subtype provides additional description but is still dependent on the primary site value. For example, the primary\nsite might be ",(0,i.kt)("inlineCode",{parentName:"p"},"skin"),", but the subtype is ",(0,i.kt)("inlineCode",{parentName:"p"},"foot"),". Therefore, we will combine the values in the following manner: ",(0,i.kt)("inlineCode",{parentName:"p"},"skin (foot)"),". "),(0,i.kt)("p",null,"COSMIC uses ",(0,i.kt)("inlineCode",{parentName:"p"},"NS")," to show that a value is empty. If the subtype is ",(0,i.kt)("inlineCode",{parentName:"p"},"NS"),", we will use the primary histology instead."),(0,i.kt)("h3",{id:"download-url"},"Download URL"),(0,i.kt)("h4",{id:"grch37"},"GRCh37"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cancer.sanger.ac.uk/cosmic/file_download/GRCh37/cosmic/v96/VCF/CosmicCodingMuts.vcf.gz"},"CosmicCodingMuts.vcf.gz")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cancer.sanger.ac.uk/cosmic/file_download/GRCh37/cosmic/v96/VCF/CosmicNonCodingVariants.vcf.gz"},"CosmicNonCodingVariants.vcf.gz")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cancer.sanger.ac.uk/cosmic/file_download/GRCh37/cosmic/v96/CosmicMutantExport.tsv.gz"},"CosmicMutantExport.tsv.gz")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cancer.sanger.ac.uk/cosmic/file_download/GRCh37/cosmic/v96/CosmicNCV.tsv.gz"},"CosmicNCV.tsv.gz"))),(0,i.kt)("h4",{id:"grch38"},"GRCh38"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cancer.sanger.ac.uk/cosmic/file_download/GRCh38/cosmic/v96/VCF/CosmicCodingMuts.vcf.gz"},"CosmicCodingMuts.vcf.gz")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cancer.sanger.ac.uk/cosmic/file_download/GRCh38/cosmic/v96/VCF/CosmicNonCodingVariants.vcf.gz"},"CosmicNonCodingVariants.vcf.gz")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cancer.sanger.ac.uk/cosmic/file_download/GRCh38/cosmic/v96/CosmicMutantExport.tsv.gz"},"CosmicMutantExport.tsv.gz")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cancer.sanger.ac.uk/cosmic/file_download/GRCh38/cosmic/v96/CosmicNCV.tsv.gz"},"CosmicNCV.tsv.gz"))),(0,i.kt)("h3",{id:"json-output"},"JSON Output"),(0,i.kt)(r.default,{mdxType:"SmallVariantJSON"}),(0,i.kt)("h2",{id:"gene-fusions"},"Gene Fusions"),(0,i.kt)("p",null,"Gene fusions are manually curated from peer reviewed publications by expert COSMIC curators. A comprehensive literature curation is completed for each fusion\npair when it is released in the database. Currently COSMIC includes information on fusions involved in solid tumours and leukaemias."),(0,i.kt)("h3",{id:"tsv-extraction-1"},"TSV extraction"),(0,i.kt)("h4",{id:"example-2"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"SAMPLE_ID SAMPLE_NAME PRIMARY_SITE  SITE_SUBTYPE_1  SITE_SUBTYPE_2  SITE_SUBTYPE_3  PRIMARY_HISTOLOGY HISTOLOGY_SUBTYPE_1 HISTOLOGY_SUBTYPE_2 HISTOLOGY_SUBTYPE_3 FUSION_ID TRANSLOCATION_NAME  5'_CHROMOSOME 5'_STRAND 5'_GENE_ID  5'_GENE_NAME  5'_LAST_OBSERVED_EXON 5'_GENOME_START_FROM  5'_GENOME_START_TO  5'_GENOME_STOP_FROM 5'_GENOME_STOP_TO 3'_CHROMOSOME 3'_STRAND 3'_GENE_ID  3'_GENE_NAME  3'_FIRST_OBSERVED_EXON  3'_GENOME_START_FROM  3'_GENOME_START_TO  3'_GENOME_STOP_FROM 3'_GENOME_STOP_TO FUSION_TYPE PUBMED_PMID\n749711  HCC1187 breast  NS  NS  NS  carcinoma ductal_carcinoma  NS  NS  665 ENST00000360863.10(RGS22):r.1_3555::ENST00000369518.1(SYCP1):r.2100_3452  8 - 197199  RGS22 22  99981937  99981937  100106116 100106116 1 + 212470  SYCP1_ENST00000369518 24  114944339 114944339 114995367 114995367 Inferred Breakpoint 20033038\n")),(0,i.kt)("h4",{id:"parsing-3"},"Parsing"),(0,i.kt)("p",null,"From the TSV file, we're mainly interested in the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SAMPLE_ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PRIMARY_SITE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PRIMARY_HISTOLOGY")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HISTOLOGY_SUBTYPE_1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FUSION_ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TRANSLOCATION_NAME")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PUBMED_PMID"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For all the histologies and sites, we replace all the underlines with spaces. ",(0,i.kt)("inlineCode",{parentName:"p"},"salivary_gland")," would become ",(0,i.kt)("inlineCode",{parentName:"p"},"salivary gland"),"."))),(0,i.kt)("h4",{id:"parsing-4"},"Parsing"),(0,i.kt)("p",null,"To create the gene fusion entries in Nirvana, we perform the following on each row in the TSV file:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Group all entries by FUSION_ID"),(0,i.kt)("li",{parentName:"ul"},"Using all the entries related to this FUSION_ID:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Collect all the PubMed IDs"),(0,i.kt)("li",{parentName:"ul"},"Tally the number of observed sample IDs"),(0,i.kt)("li",{parentName:"ul"},"Grab the HGVS r. notation (should not change throughout the FUSION_ID)"),(0,i.kt)("li",{parentName:"ul"},"Tally the number of samples observed for each histology"),(0,i.kt)("li",{parentName:"ul"},"Tally the number of samples observed for each site"))),(0,i.kt)("li",{parentName:"ul"},"Extract the transcript IDs from the HGVS notation and lookup the associated gene symbols")),(0,i.kt)("h4",{id:"aggregating-histologies--sites-1"},"Aggregating Histologies & Sites"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#aggregating-histologies--sites"},"Aggregating Histologies & Sites")," was previously described in the small variants section."),(0,i.kt)("h3",{id:"known-issues"},"Known Issues"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Known Issues")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There are some issues with the HGVS RNA notation:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"For coding transcripts, HGVS numbering should use CDS coordinates. Right now COSMIC is using cDNA coordinates for all their fusions.")))),(0,i.kt)("h3",{id:"download-url-1"},"Download URL"),(0,i.kt)("h4",{id:"grch37-1"},"GRCh37"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cancer.sanger.ac.uk/cosmic/file_download/GRCh37/cosmic/v96/CosmicFusionExport.tsv.gz"},"CosmicFusionExport.tsv.gz"))),(0,i.kt)("h4",{id:"grch38-1"},"GRCh38"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cancer.sanger.ac.uk/cosmic/file_download/GRCh38/cosmic/v96/CosmicFusionExport.tsv.gz"},"CosmicFusionExport.tsv.gz"))),(0,i.kt)("h3",{id:"json-output-1"},"JSON Output"),(0,i.kt)(l.default,{mdxType:"GeneFusionJSON"}))}p.isMDXComponent=!0}}]);