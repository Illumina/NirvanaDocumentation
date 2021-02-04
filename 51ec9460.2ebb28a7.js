(window.webpackJsonp=window.webpackJsonp||[]).push([[32,91],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(167)),i=n(65),c={title:"TOPMed"},l={unversionedId:"data-sources/topmed",id:"data-sources/topmed",isDocsHomePage:!1,title:"TOPMed",description:"Overview",source:"@site/docs/data-sources/topmed.mdx",slug:"/data-sources/topmed",permalink:"/NirvanaDocumentation/data-sources/topmed",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/topmed.mdx",version:"current",sidebar:"docs",previous:{title:"Splice AI",permalink:"/NirvanaDocumentation/data-sources/splice-ai"},next:{title:"Nirvana JSON File Format",permalink:"/NirvanaDocumentation/file-formats/nirvana-json-file-format"}},s=[{value:"Overview",id:"overview",children:[]},{value:"VCF extraction",id:"vcf-extraction",children:[]},{value:"GRCh37 liftover",id:"grch37-liftover",children:[]},{value:"Download URL",id:"download-url",children:[]},{value:"JSON output",id:"json-output",children:[]}],b={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.nhlbi.nih.gov/science/trans-omics-precision-medicine-topmed-program"}),"Trans-Omics for Precision Medicine")," (TOPMed) program, sponsored by the National Institutes of Health (NIH) National Heart, Lung and Blood Institute (NHLBI), is part of a broader Precision Medicine Initiative, which aims to provide disease treatments tailored to an individual\u2019s unique genes and environment. TOPMed contributes to this Initiative through the integration of whole-genome sequencing (WGS) and other omics (e.g., metabolic profiles, epigenomics, protein and RNA expression patterns) data with molecular, behavioral, imaging, environmental, and clinical data."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Publication")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Kowalski, M.H., Qian, H., Hou, Z., Rosen, J.D., Tapia, A.L., Shan, Y., Jain, D., Argos, M., Arnett, D.K., Avery, C. and Barnes, K.C., 2019. Use of> 100,000 NHLBI Trans-Omics for Precision Medicine (TOPMed) Consortium whole genome sequences improves imputation quality and detection of rare variant associations in admixed African and Hispanic/Latino populations. ",Object(o.b)("em",{parentName:"p"},"PLoS genetics"),", ",Object(o.b)("strong",{parentName:"p"},"15(12)"),", p.e1008500."))),Object(o.b)("h2",{id:"vcf-extraction"},"VCF extraction"),Object(o.b)("p",null,"We currently extract the following fields from TOPMed VCF file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),'##INFO=<ID=AN,Number=1,Type=Integer,Description="Number of Alleles in Samples with Coverage">\n##INFO=<ID=AC,Number=A,Type=Integer,Description="Alternate Allele Counts in Samples with Coverage">\n##INFO=<ID=AF,Number=A,Type=Float,Description="Alternate Allele Frequencies">\n##INFO=<ID=Het,Number=A,Type=Integer,Description="Number of samples with heterozygous genotype calls">\n##INFO=<ID=Hom,Number=A,Type=Integer,Description="Number of samples with homozygous alternate genotype calls">\n')),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),"chr1    10132   TOPMed_freeze_5?chr1:10,132     T       C       255     SVM     VRT=1;NS=62784;AN=125568;AC=32;AF=0.000254842;Het=32;Hom=0      NA:FRQ  125568:0.000254842\n")),Object(o.b)("h2",{id:"grch37-liftover"},"GRCh37 liftover"),Object(o.b)("p",null,"The data is not available for GRCh37 on TOPMed website. We performed a liftover from GRCh38 to GRCh37 using dbSNP ids."),Object(o.b)("h2",{id:"download-url"},"Download URL"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://bravo.sph.umich.edu/freeze5/hg38/download"}),"https://bravo.sph.umich.edu/freeze5/hg38/download")),Object(o.b)("h2",{id:"json-output"},"JSON output"),Object(o.b)(i.default,{mdxType:"JSON"}))}d.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(167)),i={},c={unversionedId:"data-sources/topmed-json",id:"data-sources/topmed-json",isDocsHomePage:!1,title:"topmed-json",description:"`json",source:"@site/docs/data-sources/topmed-json.md",slug:"/data-sources/topmed-json",permalink:"/NirvanaDocumentation/data-sources/topmed-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/topmed-json.md",version:"current"},l=[],s={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"topmed":{ \n   "allAc":20,\n   "allAn":125568,\n   "allAf":0.000159,\n   "allHc":0,\n   "failedFilter":true\n}\n')),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Field"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Notes"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"allAc"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"int"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TOPMed allele count")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"allAn"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"int"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TOPMed allele number. Non-zero integer.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"allAf"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"float"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TOPMed allele frequency (computed by Nirvana)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"allHc"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"int"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TOPMed homozygous count")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"failedFilter"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"True if this variant failed any filters")))))}b.isMDXComponent=!0}}]);