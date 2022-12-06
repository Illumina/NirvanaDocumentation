"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[7370,5146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>D});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,D=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(D,o(o({ref:t},c),{},{components:n})):a.createElement(D,o({ref:t},c))}));function D(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2629:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o=void 0,l={unversionedId:"data-sources/splice-ai-json",id:"version-3.17/data-sources/splice-ai-json",title:"splice-ai-json",description:"| Field                | Type   | Notes                                            |",source:"@site/versioned_docs/version-3.17/data-sources/splice-ai-json.md",sourceDirName:"data-sources",slug:"/data-sources/splice-ai-json",permalink:"/NirvanaDocumentation/3.17/data-sources/splice-ai-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.17/data-sources/splice-ai-json.md",tags:[],version:"3.17",frontMatter:{}},p=[],s={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"spliceAI":[ \n   {\n      "hgnc":"BLCAP",\n      "acceptorGainDistance":-3,\n      "acceptorGainScore":0.3,\n      "donorLossDistance":7,\n      "donorLossScore":0.9\n   },\n   { \n      "hgnc":"NNAT",\n      "acceptorGainDistance":-1,\n      "acceptorGainScore":0.2,\n      "donorGainDistance":-2,\n      "donorGainScore":0.3\n   }\n]\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hgnc"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HGNC gene symbol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"acceptorGainDistance"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xb1 bp from current position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"acceptorGainScore"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"left"},"range: 0 - 1.0. 1 decimal place")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"acceptorLossDistance"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xb1 bp from current position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"acceptorLossScore"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"left"},"range: 0 - 1.0. 1 decimal place")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"donorGainDistance"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xb1 bp from current position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"donorGainScore"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"left"},"range: 0 - 1.0. 1 decimal place")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"donorLossDistance"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xb1 bp from current position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"donorLossScore"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"left"},"range: 0 - 1.0. 1 decimal place")))))}c.isMDXComponent=!0},6831:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905)),i=n(2629);const o={title:"Splice AI"},l=void 0,p={unversionedId:"data-sources/splice-ai",id:"version-3.17/data-sources/splice-ai",title:"Splice AI",description:"Overview",source:"@site/versioned_docs/version-3.17/data-sources/splice-ai.mdx",sourceDirName:"data-sources",slug:"/data-sources/splice-ai",permalink:"/NirvanaDocumentation/3.17/data-sources/splice-ai",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.17/data-sources/splice-ai.mdx",tags:[],version:"3.17",frontMatter:{title:"Splice AI"},sidebar:"version-3.17/docs",previous:{title:"REVEL",permalink:"/NirvanaDocumentation/3.17/data-sources/revel"},next:{title:"TOPMed",permalink:"/NirvanaDocumentation/3.17/data-sources/topmed"}},s=[{value:"Overview",id:"overview",children:[],level:2},{value:"VCF File",id:"vcf-file",children:[{value:"Example",id:"example",children:[],level:3},{value:"Parsing",id:"parsing",children:[],level:3}],level:2},{value:"Pre-processing",id:"pre-processing",children:[{value:"Filtering",id:"filtering",children:[],level:3}],level:2},{value:"Download URL",id:"download-url",children:[],level:2},{value:"JSON Output",id:"json-output",children:[],level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"SpliceAI, a 32-layer deep neural network, predicts splicing from a pre-mRNA sequence."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"K. Jaganathan, et al. Predicting splicing from primary sequence with deep learning. ",(0,r.kt)("em",{parentName:"p"},"Cell"),", ",(0,r.kt)("strong",{parentName:"p"},"176")," (3) (2019), pp. 535-548 e24"))),(0,r.kt)("h2",{id:"vcf-file"},"VCF File"),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},'##fileformat=VCFv4.0\n##assembly=GRCh37/hg19\n##INFO=<ID=SYMBOL,Number=1,Type=String,Description="HGNC gene symbol">\n##INFO=<ID=STRAND,Number=1,Type=String,Description="+ or - depending on whether the gene lies in the positive or negative strand">\n##INFO=<ID=TYPE,Number=1,Type=String,Description="E or I depending on whether the variant position is exonic or intronic (GENCODE V24lift37 canonical annotation)">\n##INFO=<ID=DIST,Number=1,Type=Integer,Description="Distance between the variant position and the closest splice site (GENCODE V24lift37 canonical annotation)">\n##INFO=<ID=DS_AG,Number=1,Type=Float,Description="Delta score (acceptor gain)">\n##INFO=<ID=DS_AL,Number=1,Type=Float,Description="Delta score (acceptor loss)">\n##INFO=<ID=DS_DG,Number=1,Type=Float,Description="Delta score (donor gain)">\n##INFO=<ID=DS_DL,Number=1,Type=Float,Description="Delta score (donor loss)">\n##INFO=<ID=DP_AG,Number=1,Type=Integer,Description="Delta position (acceptor gain) relative to the variant position">\n##INFO=<ID=DP_AL,Number=1,Type=Integer,Description="Delta position (acceptor loss) relative to the variant position">\n##INFO=<ID=DP_DG,Number=1,Type=Integer,Description="Delta position (donor gain) relative to the variant position">\n##INFO=<ID=DP_DL,Number=1,Type=Integer,Description="Delta position (donor loss) relative to the variant position">\n#CHROM  POS ID  REF ALT QUAL    FILTER  INFO\n10  92946   .   C   T   .   .   SYMBOL=TUBB8;STRAND=-;TYPE=E;DIST=-53;DS_AG=0.0000;DS_AL=0.0000;DS_DG=0.0000;DS_DL=0.0000;DP_AG=-26;DP_AL=-10;DP_DG=3;DP_DL=35\n10  92946   .   C   G   .   .   SYMBOL=TUBB8;STRAND=-;TYPE=E;DIST=-53;DS_AG=0.0008;DS_AL=0.0000;DS_DG=0.0003;DS_DL=0.0000;DP_AG=34;DP_AL=-27;DP_DG=35;DP_DL=1\n10  92946   .   C   A   .   .   SYMBOL=TUBB8;STRAND=-;TYPE=E;DIST=-53;DS_AG=0.0004;DS_AL=0.0000;DS_DG=0.0001;DS_DL=0.0000;DP_AG=-10;DP_AL=-48;DP_DG=35;DP_DL=-21\n10  92947   .   A   C   .   .   SYMBOL=TUBB8;STRAND=-;TYPE=E;DIST=-54;DS_AG=0.0002;DS_AL=0.0000;DS_DG=0.0000;DS_DL=0.0000;DP_AG=-49;DP_AL=-11;DP_DG=0;DP_DL=34\n10  92947   .   A   T   .   .   SYMBOL=TUBB8;STRAND=-;TYPE=E;DIST=-54;DS_AG=0.0002;DS_AL=0.0000;DS_DG=0.0000;DS_DL=0.0000;DP_AG=33;DP_AL=-11;DP_DG=-22;DP_DL=34\n10  92947   .   A   G   .   .   SYMBOL=TUBB8;STRAND=-;TYPE=E;DIST=-54;DS_AG=0.0006;DS_AL=0.0000;DS_DG=0.0001;DS_DL=0.0000;DP_AG=33;DP_AL=-11;DP_DG=34;DP_DL=32\n')),(0,r.kt)("h3",{id:"parsing"},"Parsing"),(0,r.kt)("p",null,"From the VCF file, we're mainly interested in the following columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DS_AG")," - \u0394 score (acceptor gain)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DS_AL")," - \u0394 score (acceptor loss)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DS_DG")," - \u0394 score (donor gain)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DS_DL")," - \u0394 score (donor loss)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DP_AG")," - \u0394 position (acceptor gain) relative to the variant position"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DP_AL")," - \u0394 position (acceptor loss) relative to the variant position"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DP_DG")," - \u0394 position (donor gain) relative to the variant position"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DP_DL")," - \u0394 position (donor loss) relative to the variant position")),(0,r.kt)("p",null,"The Splice AI team suggests the following interpretation for the scores:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Range"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Confidence"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pathogenicity"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"0 \u2264 x < 0.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"low"),(0,r.kt)("td",{parentName:"tr",align:"left"},"likely benign")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"0.1 \u2264 x \u2264 0.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"medium"),(0,r.kt)("td",{parentName:"tr",align:"left"},"likely pathogenic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"x > 0.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"high"),(0,r.kt)("td",{parentName:"tr",align:"left"},"pathogenic")))),(0,r.kt)("h2",{id:"pre-processing"},"Pre-processing"),(0,r.kt)("h3",{id:"filtering"},"Filtering"),(0,r.kt)("p",null,"Splice AI provides a comprehensive list of entries throughout the genome. However, many of the entries have little value. I.e. observing low splice scores in intergenic regions. Not only do these extra entries require more storage, but the unused content has a negative impact on annotation speed."),(0,r.kt)("p",null,"As a result, Nirvana filters out all the values in the low confidence tier except for regions within 15 bp of nascent splice sites. For those regions, we found it useful to see if Splice AI predicted an interruption of the splicing mechanism."),(0,r.kt)("h2",{id:"download-url"},"Download URL"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://basespace.illumina.com/s/5u6ThOblecrh"},"https://basespace.illumina.com/s/5u6ThOblecrh")),(0,r.kt)("h2",{id:"json-output"},"JSON Output"),(0,r.kt)(i.default,{mdxType:"JSON"}))}d.isMDXComponent=!0}}]);