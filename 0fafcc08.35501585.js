(window.webpackJsonp=window.webpackJsonp||[]).push([[6,91],{169:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),O=a,m=s["".concat(o,".").concat(O)]||s[O]||d[O]||i;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=O;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(169)),o={},c={unversionedId:"data-sources/splice-ai-json",id:"version-3.13/data-sources/splice-ai-json",isDocsHomePage:!1,title:"splice-ai-json",description:"`json",source:"@site/versioned_docs/version-3.13/data-sources/splice-ai-json.md",slug:"/data-sources/splice-ai-json",permalink:"/NirvanaDocumentation/3.13/data-sources/splice-ai-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.13/data-sources/splice-ai-json.md",version:"3.13"},l=[],b={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"spliceAI":[ \n   {\n      "hgnc":"BLCAP",\n      "acceptorGainDistance":-3,\n      "acceptorGainScore":0.3,\n      "donorLossDistance":7,\n      "donorLossScore":0.9\n   },\n   { \n      "hgnc":"NNAT",\n      "acceptorGainDistance":-1,\n      "acceptorGainScore":0.2,\n      "donorGainDistance":-2,\n      "donorGainScore":0.3\n   }\n]\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Field"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Notes"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"hgnc"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"HGNC gene symbol")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"acceptorGainDistance"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"int"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Can be negative (backward) or positive (forward)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"acceptorGainScore"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"float"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Range: 0 - 1.0 (one decimal place precision)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"acceptorLossDistance"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"int"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Can be negative (backward) or positive (forward)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"acceptorLossScore"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"float"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Range: 0 - 1.0 (one decimal place precision)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"donorGainDistance"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"int"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Can be negative (backward) or positive (forward)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"donorGainScore"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"float"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Range: 0 - 1.0 (one decimal place precision)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"donorLossDistance"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"int"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Can be negative (backward) or positive (forward)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"donorLossScore"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"float"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Range: 0 - 1.0 (one decimal place precision)")))))}p.isMDXComponent=!0},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(169)),o=n(59),c={title:"Splice AI"},l={unversionedId:"data-sources/splice-ai",id:"version-3.13/data-sources/splice-ai",isDocsHomePage:!1,title:"Splice AI",description:"Overview",source:"@site/versioned_docs/version-3.13/data-sources/splice-ai.mdx",slug:"/data-sources/splice-ai",permalink:"/NirvanaDocumentation/3.13/data-sources/splice-ai",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.13/data-sources/splice-ai.mdx",version:"3.13",sidebar:"version-3.13/docs",previous:{title:"Mitochondrial Heteroplasmy",permalink:"/NirvanaDocumentation/3.13/data-sources/mito-heteroplasmy"},next:{title:"Primate AI",permalink:"/NirvanaDocumentation/3.13/data-sources/primate-ai"}},b=[{value:"Overview",id:"overview",children:[]},{value:"VCF File",id:"vcf-file",children:[{value:"Example",id:"example",children:[]},{value:"Parsing",id:"parsing",children:[]}]},{value:"Pre-processing",id:"pre-processing",children:[{value:"Filtering",id:"filtering",children:[]}]},{value:"Download URL",id:"download-url",children:[]},{value:"JSON Output",id:"json-output",children:[]}],p={toc:b};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"SpliceAI, a 32-layer deep neural network, predicts splicing from a pre-mRNA sequence."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Publication")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"K. Jaganathan, et al. Predicting splicing from primary sequence with deep learning. ",Object(i.b)("em",{parentName:"p"},"Cell"),", ",Object(i.b)("strong",{parentName:"p"},"176")," (3) (2019), pp. 535-548 e24"))),Object(i.b)("h2",{id:"vcf-file"},"VCF File"),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),'##fileformat=VCFv4.0\n##assembly=GRCh37/hg19\n##INFO=<ID=SYMBOL,Number=1,Type=String,Description="HGNC gene symbol">\n##INFO=<ID=STRAND,Number=1,Type=String,Description="+ or - depending on whether the gene lies in the positive or negative strand">\n##INFO=<ID=TYPE,Number=1,Type=String,Description="E or I depending on whether the variant position is exonic or intronic (GENCODE V24lift37 canonical annotation)">\n##INFO=<ID=DIST,Number=1,Type=Integer,Description="Distance between the variant position and the closest splice site (GENCODE V24lift37 canonical annotation)">\n##INFO=<ID=DS_AG,Number=1,Type=Float,Description="Delta score (acceptor gain)">\n##INFO=<ID=DS_AL,Number=1,Type=Float,Description="Delta score (acceptor loss)">\n##INFO=<ID=DS_DG,Number=1,Type=Float,Description="Delta score (donor gain)">\n##INFO=<ID=DS_DL,Number=1,Type=Float,Description="Delta score (donor loss)">\n##INFO=<ID=DP_AG,Number=1,Type=Integer,Description="Delta position (acceptor gain) relative to the variant position">\n##INFO=<ID=DP_AL,Number=1,Type=Integer,Description="Delta position (acceptor loss) relative to the variant position">\n##INFO=<ID=DP_DG,Number=1,Type=Integer,Description="Delta position (donor gain) relative to the variant position">\n##INFO=<ID=DP_DL,Number=1,Type=Integer,Description="Delta position (donor loss) relative to the variant position">\n#CHROM  POS ID  REF ALT QUAL    FILTER  INFO\n10  92946   .   C   T   .   .   SYMBOL=TUBB8;STRAND=-;TYPE=E;DIST=-53;DS_AG=0.0000;DS_AL=0.0000;DS_DG=0.0000;DS_DL=0.0000;DP_AG=-26;DP_AL=-10;DP_DG=3;DP_DL=35\n10  92946   .   C   G   .   .   SYMBOL=TUBB8;STRAND=-;TYPE=E;DIST=-53;DS_AG=0.0008;DS_AL=0.0000;DS_DG=0.0003;DS_DL=0.0000;DP_AG=34;DP_AL=-27;DP_DG=35;DP_DL=1\n10  92946   .   C   A   .   .   SYMBOL=TUBB8;STRAND=-;TYPE=E;DIST=-53;DS_AG=0.0004;DS_AL=0.0000;DS_DG=0.0001;DS_DL=0.0000;DP_AG=-10;DP_AL=-48;DP_DG=35;DP_DL=-21\n10  92947   .   A   C   .   .   SYMBOL=TUBB8;STRAND=-;TYPE=E;DIST=-54;DS_AG=0.0002;DS_AL=0.0000;DS_DG=0.0000;DS_DL=0.0000;DP_AG=-49;DP_AL=-11;DP_DG=0;DP_DL=34\n10  92947   .   A   T   .   .   SYMBOL=TUBB8;STRAND=-;TYPE=E;DIST=-54;DS_AG=0.0002;DS_AL=0.0000;DS_DG=0.0000;DS_DL=0.0000;DP_AG=33;DP_AL=-11;DP_DG=-22;DP_DL=34\n10  92947   .   A   G   .   .   SYMBOL=TUBB8;STRAND=-;TYPE=E;DIST=-54;DS_AG=0.0006;DS_AL=0.0000;DS_DG=0.0001;DS_DL=0.0000;DP_AG=33;DP_AL=-11;DP_DG=34;DP_DL=32\n')),Object(i.b)("h3",{id:"parsing"},"Parsing"),Object(i.b)("p",null,"From the VCF file, we're mainly interested in the following columns:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DS_AG")," - \u0394 score (acceptor gain)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DS_AL")," - \u0394 score (acceptor loss)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DS_DG")," - \u0394 score (donor gain)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DS_DL")," - \u0394 score (donor loss)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DP_AG")," - \u0394 position (acceptor gain) relative to the variant position"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DP_AL")," - \u0394 position (acceptor loss) relative to the variant position"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DP_DG")," - \u0394 position (donor gain) relative to the variant position"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DP_DL")," - \u0394 position (donor loss) relative to the variant position")),Object(i.b)("p",null,"The Splice AI team suggests the following interpretation for the scores:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Range"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Confidence"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Pathogenicity"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0 \u2264 x < 0.1"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"low"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"likely benign")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0.1 \u2264 x \u2264 0.5"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"medium"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"likely pathogenic")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"x > 0.5"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"high"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"pathogenic")))),Object(i.b)("h2",{id:"pre-processing"},"Pre-processing"),Object(i.b)("h3",{id:"filtering"},"Filtering"),Object(i.b)("p",null,"Splice AI provides a comprehensive list of entries throughout the genome. However, many of the entries have little value. I.e. observing low splice scores in intergenic regions. Not only do these extra entries require more storage, but the unused content has a negative impact on annotation speed."),Object(i.b)("p",null,"As a result, Nirvana filters out all the values in the low confidence tier except for regions within 15 bp of nascent splice sites. For those regions, we found it useful to see if Splice AI predicted an interruption of the splicing mechanism."),Object(i.b)("h2",{id:"download-url"},"Download URL"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://basespace.illumina.com/s/5u6ThOblecrh"}),"https://basespace.illumina.com/s/5u6ThOblecrh")),Object(i.b)("h2",{id:"json-output"},"JSON Output"),Object(i.b)(o.default,{mdxType:"JSON"}))}s.isMDXComponent=!0}}]);