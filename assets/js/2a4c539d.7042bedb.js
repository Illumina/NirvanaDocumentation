"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[1559,1946],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>v});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(a),u=l,v=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return a?n.createElement(v,i(i({ref:t},c),{},{components:a})):n.createElement(v,i({ref:t},c))}));function v(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6916:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));const r={},i=void 0,o={unversionedId:"data-sources/dbsnp-json",id:"version-3.14/data-sources/dbsnp-json",title:"dbsnp-json",description:"| Field            | Type         | Notes                     |",source:"@site/versioned_docs/version-3.14/data-sources/dbsnp-json.md",sourceDirName:"data-sources",slug:"/data-sources/dbsnp-json",permalink:"/NirvanaDocumentation/3.14/data-sources/dbsnp-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.14/data-sources/dbsnp-json.md",tags:[],version:"3.14",frontMatter:{}},s=[],d={toc:s};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"dbsnp":[\n   "rs1042821"\n]\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"dbsnp"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"dbSNP rsIDs")))))}c.isMDXComponent=!0},6793:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(7462),l=(a(7294),a(3905)),r=a(6916);const i={title:"dbSNP"},o=void 0,s={unversionedId:"data-sources/dbsnp",id:"version-3.14/data-sources/dbsnp",title:"dbSNP",description:"Overview",source:"@site/versioned_docs/version-3.14/data-sources/dbsnp.mdx",sourceDirName:"data-sources",slug:"/data-sources/dbsnp",permalink:"/NirvanaDocumentation/3.14/data-sources/dbsnp",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.14/data-sources/dbsnp.mdx",tags:[],version:"3.14",frontMatter:{title:"dbSNP"},sidebar:"version-3.14/docs",previous:{title:"ClinVar",permalink:"/NirvanaDocumentation/3.14/data-sources/clinvar"},next:{title:"gnomAD",permalink:"/NirvanaDocumentation/3.14/data-sources/gnomad"}},d=[{value:"Overview",id:"overview",children:[],level:2},{value:"VCF File",id:"vcf-file",children:[{value:"Example",id:"example",children:[],level:3},{value:"Parsing",id:"parsing",children:[{value:"Global allele extraction",id:"global-allele-extraction",children:[],level:4},{value:"Equal Allele Frequency Example (2 alleles)",id:"equal-allele-frequency-example-2-alleles",children:[],level:4},{value:"Equal Allele Frequency Example (3 alleles)",id:"equal-allele-frequency-example-3-alleles",children:[],level:4},{value:"Equal Allele Frequency in Alternate Alleles",id:"equal-allele-frequency-in-alternate-alleles",children:[],level:4},{value:"Equal Allele Frequency Between Reference &amp; Alternate Allele",id:"equal-allele-frequency-between-reference--alternate-allele",children:[],level:4}],level:3}],level:2},{value:"Known Issues",id:"known-issues",children:[],level:2},{value:"Download URL",id:"download-url",children:[],level:2},{value:"JSON Output",id:"json-output",children:[],level:2}],c={toc:d};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"dbSNP contains human single nucleotide variations, microsatellites, and small-scale insertions and deletions along with publication, population frequency, molecular consequence, and genomic and RefSeq mapping information for both common variations and clinical mutations."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Sherry, S.T., Ward, M. and Sirotkin, K. (1999) dbSNP\u2014Database for Single Nucleotide Polymorphisms and Other Classes of Minor Genetic Variation. ",(0,l.kt)("em",{parentName:"p"},"Genome Res."),", ",(0,l.kt)("strong",{parentName:"p"},"9"),", 677\u2013679."))),(0,l.kt)("h2",{id:"vcf-file"},"VCF File"),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"#CHROM  POS ID  REF ALT QUAL    FILTER  INFO\n1   10177   rs367896724 A   AC  .   .   RS=367896724;RSPOS=10177;dbSNPBuildID=138; \\ \n      SSR=0;SAO=0;VP=0x050000020005130026000200;GENEINFO=DDX11L1:100287102;WGT=1; \\\n      VC=DIV;R5;ASP;G5A;G5;KGPhase3;CAF=0.5747,0.4253;COMMON=1; \\\n      TOPMED=0.76728147298674821,0.23271852701325178\n")),(0,l.kt)("h3",{id:"parsing"},"Parsing"),(0,l.kt)("p",null,"From the VCF file, we're mainly interested in the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rsID")," from the ",(0,l.kt)("inlineCode",{parentName:"li"},"ID")," field"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CAF")," from the ",(0,l.kt)("inlineCode",{parentName:"li"},"INFO")," field")),(0,l.kt)("h4",{id:"global-allele-extraction"},"Global allele extraction"),(0,l.kt)("p",null,"The global major and minor alleles are extracted based on the frequency of the alleles provided in the CAF field. The global minor allele frequency is the second highest value of the CAF comma delimited field (ignoring '.' values). "),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tie Breaking: Global Major Allele")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If there are two candidates for global major and the reference allele is one of them, we prefer the reference allele."))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tie Breaking: Global Minor Allele")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If there are two candidates for global minor and the reference allele is one of them, we prefer the other allele. If the reference allele is not involved, they are chosen arbitrarily."))),(0,l.kt)("h4",{id:"equal-allele-frequency-example-2-alleles"},"Equal Allele Frequency Example (2 alleles)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    100 A   C   CAF=0.5,0.5\n")),(0,l.kt)("p",null,"We will select A to be the global major allele and C to be the global minor allele."),(0,l.kt)("h4",{id:"equal-allele-frequency-example-3-alleles"},"Equal Allele Frequency Example (3 alleles)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    100 A   C,T CAF=0.33,0.33,0.33\n")),(0,l.kt)("p",null,"We will select A to be the global major allele and either C or T is chosen (arbitrarily) to be the global minor allele."),(0,l.kt)("h4",{id:"equal-allele-frequency-in-alternate-alleles"},"Equal Allele Frequency in Alternate Alleles"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    100 A   C,T CAF=0.2,0.4,0.4\n")),(0,l.kt)("p",null,"We will select C or T to be arbitrarily assigned to be the global major or global minor allele."),(0,l.kt)("h4",{id:"equal-allele-frequency-between-reference--alternate-allele"},"Equal Allele Frequency Between Reference & Alternate Allele"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    100 A   C,T CAF=0.2,0.2,0.6\n")),(0,l.kt)("p",null,"We will select T to be the global major allele and C to be the global minor allele."),(0,l.kt)("h2",{id:"known-issues"},"Known Issues"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Known Issues")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If there are multiple entries with different CAF values for the same allele, we use the first CAF value."))),(0,l.kt)("h2",{id:"download-url"},"Download URL"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://ftp.ncbi.nih.gov/snp/organisms/"},"https://ftp.ncbi.nih.gov/snp/organisms/")),(0,l.kt)("h2",{id:"json-output"},"JSON Output"),(0,l.kt)(r.default,{mdxType:"JSON"}))}m.isMDXComponent=!0}}]);