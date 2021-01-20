(window.webpackJsonp=window.webpackJsonp||[]).push([[11,67],{104:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),l=(a(0),a(168)),i=a(64),c={title:"dbSNP"},o={unversionedId:"data-sources/dbsnp",id:"data-sources/dbsnp",isDocsHomePage:!1,title:"dbSNP",description:"Overview",source:"@site/docs/data-sources/dbsnp.mdx",slug:"/data-sources/dbsnp",permalink:"/NirvanaDocumentation/data-sources/dbsnp",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/dbsnp.mdx",version:"current",sidebar:"docs",previous:{title:"ClinVar",permalink:"/NirvanaDocumentation/data-sources/clinvar"},next:{title:"gnomAD",permalink:"/NirvanaDocumentation/data-sources/gnomad"}},b=[{value:"Overview",id:"overview",children:[]},{value:"VCF File",id:"vcf-file",children:[{value:"Example",id:"example",children:[]},{value:"Parsing",id:"parsing",children:[]}]},{value:"Known Issues",id:"known-issues",children:[]},{value:"Download URL",id:"download-url",children:[]},{value:"JSON Output",id:"json-output",children:[]}],s={toc:b};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"overview"},"Overview"),Object(l.b)("p",null,"dbSNP contains human single nucleotide variations, microsatellites, and small-scale insertions and deletions along with publication, population frequency, molecular consequence, and genomic and RefSeq mapping information for both common variations and clinical mutations."),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Publication")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Sherry, S.T., Ward, M. and Sirotkin, K. (1999) dbSNP\u2014Database for Single Nucleotide Polymorphisms and Other Classes of Minor Genetic Variation. ",Object(l.b)("em",{parentName:"p"},"Genome Res."),", ",Object(l.b)("strong",{parentName:"p"},"9"),", 677\u2013679."))),Object(l.b)("h2",{id:"vcf-file"},"VCF File"),Object(l.b)("h3",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"#CHROM  POS ID  REF ALT QUAL    FILTER  INFO\n1   10177   rs367896724 A   AC  .   .   RS=367896724;RSPOS=10177;dbSNPBuildID=138; \\ \n      SSR=0;SAO=0;VP=0x050000020005130026000200;GENEINFO=DDX11L1:100287102;WGT=1; \\\n      VC=DIV;R5;ASP;G5A;G5;KGPhase3;CAF=0.5747,0.4253;COMMON=1; \\\n      TOPMED=0.76728147298674821,0.23271852701325178\n")),Object(l.b)("h3",{id:"parsing"},"Parsing"),Object(l.b)("p",null,"From the VCF file, we're mainly interested in the following:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"rsID")," from the ",Object(l.b)("inlineCode",{parentName:"li"},"ID")," field"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"CAF")," from the ",Object(l.b)("inlineCode",{parentName:"li"},"INFO")," field")),Object(l.b)("h4",{id:"global-allele-extraction"},"Global allele extraction"),Object(l.b)("p",null,"The global major and minor alleles are extracted based on the frequency of the alleles provided in the CAF field. The global minor allele frequency is the second highest value of the CAF comma delimited field (ignoring '.' values). "),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Tie Breaking: Global Major Allele")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"If there are two candidates for global major and the reference allele is one of them, we prefer the reference allele."))),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Tie Breaking: Global Minor Allele")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"If there are two candidates for global minor and the reference allele is one of them, we prefer the other allele. If the reference allele is not involved, they are chosen arbitrarily."))),Object(l.b)("h4",{id:"equal-allele-frequency-example-2-alleles"},"Equal Allele Frequency Example (2 alleles)"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"chr1    100 A   C   CAF=0.5,0.5\n")),Object(l.b)("p",null,"We will select A to be the global major allele and C to be the global minor allele."),Object(l.b)("h4",{id:"equal-allele-frequency-example-3-alleles"},"Equal Allele Frequency Example (3 alleles)"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"chr1    100 A   C,T CAF=0.33,0.33,0.33\n")),Object(l.b)("p",null,"We will select A to be the global major allele and either C or T is chosen (arbitrarily) to be the global minor allele."),Object(l.b)("h4",{id:"equal-allele-frequency-in-alternate-alleles"},"Equal Allele Frequency in Alternate Alleles"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"chr1    100 A   C,T CAF=0.2,0.4,0.4\n")),Object(l.b)("p",null,"We will select C or T to be arbitrarily assigned to be the global major or global minor allele."),Object(l.b)("h4",{id:"equal-allele-frequency-between-reference--alternate-allele"},"Equal Allele Frequency Between Reference & Alternate Allele"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"chr1    100 A   C,T CAF=0.2,0.2,0.6\n")),Object(l.b)("p",null,"We will select T to be the global major allele and C to be the global minor allele."),Object(l.b)("h2",{id:"known-issues"},"Known Issues"),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Known Issues")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"If there are multiple entries with different CAF values for the same allele, we use the first CAF value."))),Object(l.b)("h2",{id:"download-url"},"Download URL"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://ftp.ncbi.nih.gov/snp/organisms/"}),"https://ftp.ncbi.nih.gov/snp/organisms/")),Object(l.b)("h2",{id:"json-output"},"JSON Output"),Object(l.b)(i.default,{mdxType:"JSON"}))}d.isMDXComponent=!0},168:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,u=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return a?r.a.createElement(u,c(c({ref:t},b),{},{components:a})):r.a.createElement(u,c({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<l;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},64:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),l=(a(0),a(168)),i={},c={unversionedId:"data-sources/dbsnp-json",id:"data-sources/dbsnp-json",isDocsHomePage:!1,title:"dbsnp-json",description:"`json",source:"@site/docs/data-sources/dbsnp-json.md",slug:"/data-sources/dbsnp-json",permalink:"/NirvanaDocumentation/data-sources/dbsnp-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/dbsnp-json.md",version:"current"},o=[],b={toc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"dbsnp":[\n   "rs1042821"\n]\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Field"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dbsnp"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string array"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dbSNP rsIDs")))))}s.isMDXComponent=!0}}]);