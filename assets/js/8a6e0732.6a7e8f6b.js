"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[1895],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(n),g=r,k=d["".concat(p,".").concat(g)]||d[g]||c[g]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8735:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"MNV Recomposition"},p=void 0,m={unversionedId:"core-functionality/mnv-recomposition",id:"core-functionality/mnv-recomposition",isDocsHomePage:!1,title:"MNV Recomposition",description:"Overview",source:"@site/docs/core-functionality/mnv-recomposition.md",sourceDirName:"core-functionality",slug:"/core-functionality/mnv-recomposition",permalink:"/NirvanaDocumentation/core-functionality/mnv-recomposition",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/core-functionality/mnv-recomposition.md",tags:[],version:"current",frontMatter:{title:"MNV Recomposition"},sidebar:"docs",previous:{title:"Gene Fusion Detection",permalink:"/NirvanaDocumentation/core-functionality/gene-fusions"},next:{title:"Variant IDs",permalink:"/NirvanaDocumentation/core-functionality/variant-ids"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Criteria",id:"criteria",children:[]},{value:"Examples",id:"examples",children:[{value:"Multiple Samples",id:"multiple-samples",children:[]},{value:"Phase Sets",id:"phase-sets",children:[]},{value:"Conflicting Genotypes",id:"conflicting-genotypes",children:[]}]},{value:"JSON Output",id:"json-output",children:[]}],c={toc:s};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Most annotation tools handle variants independently. The problem with this approach is that nearby variants could affect the same codon leading to a very different annotation. For example, consider the following example (Danecek, 2017):"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1524).Z})),(0,i.kt)("p",null,"When handled independently, the two variants (C\u2192T & G\u2192A) would be annotated as missense annotations. However, if we consider them together, the resulting MNV would yield a stop gain."),(0,i.kt)("p",null,"By default, Nirvana identifies these types of cases where two or more SNVs would affect the same codon. In addition, it's able to perform this operation on VCFs containing large numbers of samples (we've tested this on 2,500+ samples using the 1000 Genomes Project VCF files)."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Petr Danecek, Shane A McCarthy, ",(0,i.kt)("a",{parentName:"p",href:"https://academic.oup.com/bioinformatics/article-abstract/33/13/2037/3000373"},"BCFtools/csq: haplotype-aware variant consequences"),", Bioinformatics, Volume 33, Issue 13, 1 July 2017, Pages 2037\u20132039"))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Supported variant types")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"At the moment, ",(0,i.kt)("strong",{parentName:"p"},"Nirvana only supports recomposing multiple SNVs into an MNV"),". The Danecek paper makes a compelling case for supporting frameshifting variants paired with frame-restoring variants. We've also received requests for supporting the recomposition of an SNV with insertions and deletions. While this is something we've looked into, it represents functionality that many of our clinical customers are not yet comfortable with."))),(0,i.kt)("h2",{id:"criteria"},"Criteria"),(0,i.kt)("p",null,"Nirvana will recompose a set of SNVs if two or more SNVs are located in the same codon for any codon in any of the overlapping transcripts."),(0,i.kt)("p",null,"The following criteria must also be met for at least one sample:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Genotypes are provided for the VCF variants and all variants are in phase or homozygous variant."),(0,i.kt)("li",{parentName:"ol"},"All the available phase set IDs are the same (homozygous variants are available to all phase sets)"),(0,i.kt)("li",{parentName:"ol"},"The genotype ploidy for all the variants are the same."),(0,i.kt)("li",{parentName:"ol"},"No unsupported variant type (i.e. insertion or deletion) overlaps the recomposed variants"),(0,i.kt)("li",{parentName:"ol"},"The first and last base in at least one of the recomposed alleles must be non-reference.")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"During variant recomposition, if two SNVs affect the same codon, it becomes the seed codon. If there are SNVs in the adjacent codons, they will be aggregated into the seed codon."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Three SNVs in two adjacent codons. The recomposed alternate allele is ",(0,i.kt)("inlineCode",{parentName:"p"},"ATAG"),":\n",(0,i.kt)("img",{src:n(9748).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Three SNVs in two adjacent codons (larger distance). The recomposed alternate allele is ",(0,i.kt)("inlineCode",{parentName:"p"},"ATATCC"),":\n",(0,i.kt)("img",{src:n(8693).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Nirvana can use ",(0,i.kt)("strong",{parentName:"p"},"multiple reading frames")," to aggregate the seed codon. In this example, the seed codon is highlighted in green. If we look at reading frame 1, we see that the T\u2192A variant occurs in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ACT")," codon. The adjacent codon to the left also has a variant C\u2192T. As a result, there can be up to four bases between SNVs when aggregating the flanking codons. The recomposed alternate allele is ",(0,i.kt)("inlineCode",{parentName:"p"},"TTCACATAGCACTCAC"),":\n",(0,i.kt)("img",{src:n(2556).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Nothing will be recomposed if there's no seed codon:\n",(0,i.kt)("img",{src:n(5936).Z})))),(0,i.kt)("h3",{id:"multiple-samples"},"Multiple Samples"),(0,i.kt)("p",null,"Recomposing variants while handling multiple samples can be complex. The recomposition criteria described above often leads to sample-specific recomposed variants. Here we show the recomposition of three variants with sample-specific criteria marked in bold:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"center"},"POS"),(0,i.kt)("th",{parentName:"tr",align:"center"},"REF"),(0,i.kt)("th",{parentName:"tr",align:"center"},"ALT"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Sample 1"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Sample 2"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Sample 3"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"100"),(0,i.kt)("td",{parentName:"tr",align:"center"},"A"),(0,i.kt)("td",{parentName:"tr",align:"center"},"C"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0","|","1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0","|","1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1","|","1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"101"),(0,i.kt)("td",{parentName:"tr",align:"center"},"C"),(0,i.kt)("td",{parentName:"tr",align:"center"},"G"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"0/1")),(0,i.kt)("td",{parentName:"tr",align:"center"},"1","|","1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0","|","0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"102"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T"),(0,i.kt)("td",{parentName:"tr",align:"center"},"A"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1","|","1"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},".")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0","|","1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Recomposed Variant 1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"100"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AC"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AG, CG"),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"1","|","2"),(0,i.kt)("td",{parentName:"tr",align:"center"},".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Recomposed Variant 2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"100"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ACT"),(0,i.kt)("td",{parentName:"tr",align:"center"},"CCT, CCA"),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"1","|","2")))),(0,i.kt)("p",null,"In the example above, the heterozygous genotype in sample 1 at position 101 would prevent the MNVs from being recomposed. Similarly, the unknown genotype for sample 2 at position 102 would produce a smaller MNV than the one expressed for sample 3."),(0,i.kt)("h3",{id:"phase-sets"},"Phase Sets"),(0,i.kt)("h4",{id:"homozygous-variants-same-phase-set"},"Homozygous variants, same phase set"),(0,i.kt)("p",null,"Recomposed phase set becomes ",(0,i.kt)("inlineCode",{parentName:"p"},".")," since homozygous variants belong to all phase sets."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"center"},"POS"),(0,i.kt)("th",{parentName:"tr",align:"center"},"REF"),(0,i.kt)("th",{parentName:"tr",align:"center"},"ALT"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Genotype"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Phase Set"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"100"),(0,i.kt)("td",{parentName:"tr",align:"center"},"A"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1","|","1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"567")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"101"),(0,i.kt)("td",{parentName:"tr",align:"center"},"C"),(0,i.kt)("td",{parentName:"tr",align:"center"},"G"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1","|","1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"567")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Recomposed Variant"),(0,i.kt)("td",{parentName:"tr",align:"center"},"100"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AC"),(0,i.kt)("td",{parentName:"tr",align:"center"},"TG"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1","|","1"),(0,i.kt)("td",{parentName:"tr",align:"center"},".")))),(0,i.kt)("h4",{id:"mixing-phased-and-unphased-variants"},"Mixing phased and unphased variants"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"center"},"POS"),(0,i.kt)("th",{parentName:"tr",align:"center"},"REF"),(0,i.kt)("th",{parentName:"tr",align:"center"},"ALT"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Genotype"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Phase Set"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"100"),(0,i.kt)("td",{parentName:"tr",align:"center"},"A"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0","|","1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"567")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"101"),(0,i.kt)("td",{parentName:"tr",align:"center"},"C"),(0,i.kt)("td",{parentName:"tr",align:"center"},"G"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1/1"),(0,i.kt)("td",{parentName:"tr",align:"center"},".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Recomposed Variant"),(0,i.kt)("td",{parentName:"tr",align:"center"},"100"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AC"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AG,TG"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1","|","2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"567")))),(0,i.kt)("h4",{id:"variants-in-different-phase-sets"},"Variants in different phase sets"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"center"},"POS"),(0,i.kt)("th",{parentName:"tr",align:"center"},"REF"),(0,i.kt)("th",{parentName:"tr",align:"center"},"ALT"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Genotype"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Phase Set"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"100"),(0,i.kt)("td",{parentName:"tr",align:"center"},"A"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0","|","1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"567")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"101"),(0,i.kt)("td",{parentName:"tr",align:"center"},"C"),(0,i.kt)("td",{parentName:"tr",align:"center"},"G"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1","|","1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"890")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Recomposed Variant"),(0,i.kt)("td",{parentName:"tr",align:"center"},"100"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AC"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AG,TG"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1","|","2"),(0,i.kt)("td",{parentName:"tr",align:"center"},".")))),(0,i.kt)("h4",{id:"unphased-homozygous-variants"},"Unphased homozygous variants"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"center"},"POS"),(0,i.kt)("th",{parentName:"tr",align:"center"},"REF"),(0,i.kt)("th",{parentName:"tr",align:"center"},"ALT"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Genotype"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Phase Set"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"100"),(0,i.kt)("td",{parentName:"tr",align:"center"},"A"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1/1"),(0,i.kt)("td",{parentName:"tr",align:"center"},".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"101"),(0,i.kt)("td",{parentName:"tr",align:"center"},"C"),(0,i.kt)("td",{parentName:"tr",align:"center"},"G"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1/1"),(0,i.kt)("td",{parentName:"tr",align:"center"},".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Recomposed Variant"),(0,i.kt)("td",{parentName:"tr",align:"center"},"100"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AC"),(0,i.kt)("td",{parentName:"tr",align:"center"},"TG"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1/1"),(0,i.kt)("td",{parentName:"tr",align:"center"},".")))),(0,i.kt)("h4",{id:"homozygous-variants-are-not-commutative"},"Homozygous variants are not commutative"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"center"},"POS"),(0,i.kt)("th",{parentName:"tr",align:"center"},"REF"),(0,i.kt)("th",{parentName:"tr",align:"center"},"ALT"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Genotype"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Phase Set"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"100"),(0,i.kt)("td",{parentName:"tr",align:"center"},"A"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0","|","1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"567")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"101"),(0,i.kt)("td",{parentName:"tr",align:"center"},"C"),(0,i.kt)("td",{parentName:"tr",align:"center"},"G"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1","|","1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"567")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Decomposed Variant 3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"102"),(0,i.kt)("td",{parentName:"tr",align:"center"},"G"),(0,i.kt)("td",{parentName:"tr",align:"center"},"T"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0","|","1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"890")))),(0,i.kt)("p",null,"In this example, the homozygous variant at position 101 cannot bridge the gap between other two variants since there could be a switching error between phase sets 567 & 890. As a result, we have to create two overlapping MNVs:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"center"},"POS"),(0,i.kt)("th",{parentName:"tr",align:"center"},"REF"),(0,i.kt)("th",{parentName:"tr",align:"center"},"ALT"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Genotype"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Phase Set"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Recomposed Variant 1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"100"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AC"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AG, TG"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1","|","2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"567")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Recomposed Variant 2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"101"),(0,i.kt)("td",{parentName:"tr",align:"center"},"CG"),(0,i.kt)("td",{parentName:"tr",align:"center"},"GG, GT"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1","|","2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"890")))),(0,i.kt)("h3",{id:"conflicting-genotypes"},"Conflicting Genotypes"),(0,i.kt)("h2",{id:"json-output"},"JSON Output"),(0,i.kt)("p",null,"Given the following VCF entries:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"#CHROM  POS ID  REF ALT QUAL    FILTER  INFO    FORMAT  S1  S2  S3\nchr1    12861477    .   T   C   .   PASS    .   GT:PS   0/0:.   0/0:.   0|1:12861477\nchr1    12861478    .   G   A   .   PASS    .   GT:PS   0/0:.   0/0:.   0|1:12861477\n")),(0,i.kt)("p",null,"Each original variant would be annotated as usual. The difference is that both will now have a ",(0,i.kt)("inlineCode",{parentName:"p"},"isDecomposedVariant")," flag set to true in addition to an entry in the ",(0,i.kt)("inlineCode",{parentName:"p"},"linkedVids")," field that points to the new MNV:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{31-34,70-73}","{31-34,70-73}":!0},'{\n   "chromosome":"chr1",\n   "position":12861477,\n   "refAllele":"T",\n   "altAlleles":[\n      "C"\n   ],\n   "filters":[\n      "PASS"\n   ],\n   "samples":[\n      {\n         "genotype":"0/0",\n      },\n      {\n         "genotype":"0/0",\n      },\n      {\n         "genotype":"0|1",\n      }\n   ],\n   "variants":[\n      {\n         "vid":"1-12861477-T-C",\n         "chromosome":"chr1",\n         "begin":12861477,\n         "end":12861477,\n         "refAllele":"T",\n         "altAllele":"C",\n         "variantType":"SNV",\n         "isDecomposedVariant":true,\n         "linkedVids":[\n            "1-12861477-TG-CA"\n         ],\n         "hgvsg":"NC_000001.11:g.12861477T>C",\n         "transcripts":[ ... ]\n      }\n   ]\n},\n{\n   "chromosome":"chr1",\n   "position":12861478,\n   "refAllele":"G",\n   "altAlleles":[\n      "A"\n   ],\n   "filters":[\n      "PASS"\n   ],\n   "samples":[\n      {\n         "genotype":"0/0",\n      },\n      {\n         "genotype":"0/0",\n      },\n      {\n         "genotype":"0|1",\n      }\n   ],\n   "variants":[\n      {\n         "vid":"1-12861478-G-A",\n         "chromosome":"chr1",\n         "begin":12861478,\n         "end":12861478,\n         "refAllele":"G",\n         "altAllele":"A",\n         "variantType":"SNV",\n         "isDecomposedVariant":true,\n         "linkedVids":[\n            "1-12861477-TG-CA"\n         ],\n         "hgvsg":"NC_000001.11:g.12861478G>A",\n         "transcripts":[ ... ]\n      }\n   ]\n}\n')),(0,i.kt)("p",null,"The recomposed variant gets a separate entry where the ",(0,i.kt)("inlineCode",{parentName:"p"},"isRecomposedVariant")," flag is set to true and the ",(0,i.kt)("inlineCode",{parentName:"p"},"linkedVids")," field links to the constituent SNVs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{32-36}","{32-36}":!0},'    {\n      "chromosome": "chr1",\n      "position": 12861477,\n      "refAllele": "TG",\n      "altAlleles": [\n        "CA"\n      ],\n      "filters": [\n        "PASS"\n      ],\n      "cytogeneticBand": "1p36.21",\n      "samples": [\n        {\n          "genotype": "0|0"\n        },\n        {\n          "genotype": "0|0"\n        },\n        {\n          "genotype": "0|1"\n        }\n      ],\n      "variants": [\n        {\n          "vid": "1-12861477-TG-CA",\n          "chromosome": "chr1",\n          "begin": 12861477,\n          "end": 12861478,\n          "refAllele": "TG",\n          "altAllele": "CA",\n          "variantType": "MNV",\n          "isRecomposedVariant": true,\n          "linkedVids": [\n            "1-12861477-T-C",\n            "1-12861478-G-A"\n          ],\n          "hgvsg": "NC_000001.11:g.12861477_12861478inv",\n          "transcripts":[ ... ]\n          ]\n        }\n      ]\n    },\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Recomposed QUAL, FILTER, and GQ")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Although the example above does not demonstrate it, Nirvana tries to set the quality score, filter, and genotype quality (GQ) for the recomposed variant. The QUAL score is calculated to be the ",(0,i.kt)("strong",{parentName:"p"},"minimum")," QUAL score for all the constituent SNVs. The same method is used for the genotype quality (GQ) scores. For the ",(0,i.kt)("inlineCode",{parentName:"p"},"filters")," field, ",(0,i.kt)("inlineCode",{parentName:"p"},"PASS")," will be used if all constituent variants passed their filters, otherwise we set it to ",(0,i.kt)("inlineCode",{parentName:"p"},"FilteredVariantsRecomposed"),"."))))}d.isMDXComponent=!0},1524:function(e,t,n){t.Z=n.p+"assets/images/BCFtools-csq-fig1a-a266b0be1c6d74f085fcacb2f433f750.png"},2556:function(e,t,n){t.Z=n.p+"assets/images/multiple-reading-frames-19e896fe74a8781afdd1fa2539edff88.png"},5936:function(e,t,n){t.Z=n.p+"assets/images/no-recomposition-b63eb855b0ed62b8ae331eafc538223d.png"},8693:function(e,t,n){t.Z=n.p+"assets/images/three-SNVs-larger-separation-85b12d5bafd32ee312103a1b9b588720.png"},9748:function(e,t,n){t.Z=n.p+"assets/images/three-SNVs-two-codons-bc45a465809b53d51dbfb32deaa6324a.png"}}]);