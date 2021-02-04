(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(179)),o={title:"Canonical Transcripts"},c={unversionedId:"core-functionality/canonical-transcripts",id:"core-functionality/canonical-transcripts",isDocsHomePage:!1,title:"Canonical Transcripts",description:"Overview",source:"@site/docs/core-functionality/canonical-transcripts.md",slug:"/core-functionality/canonical-transcripts",permalink:"/NirvanaDocumentation/core-functionality/canonical-transcripts",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/core-functionality/canonical-transcripts.md",version:"current",sidebar:"docs",previous:{title:"Custom Annotations",permalink:"/NirvanaDocumentation/file-formats/custom-annotations"},next:{title:"MNV Recomposition",permalink:"/NirvanaDocumentation/core-functionality/mnv-recomposition"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Known Algorithms",id:"known-algorithms",children:[{value:"UCSC",id:"ucsc",children:[]},{value:"Ensembl",id:"ensembl",children:[]},{value:"ACMG",id:"acmg",children:[]},{value:"ClinVar",id:"clinvar",children:[]}]},{value:"Unified Approach",id:"unified-approach",children:[]}],s={toc:l};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"One of the more polarizing topics within annotation is the notion of canonical transcripts. Because of alternative splicing, we often have several transcripts for each gene. In the human genome, there are an average of 3.4 transcripts per gene (Tung, 2020). As scientists, we seem to have a need for identifying a representative example of a gene - even if there's no biological basis for the motivation."),Object(i.b)("p",null,Object(i.b)("img",{src:n(257).default})),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Golden Helix Blog")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"A few years ago, the guys over at Golden Helix wrote an excellent post about the pitfalls and issues surrounding the identification of canonical transcripts: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://blog.goldenhelix.com/whats-in-a-name-the-intricacies-of-identifying-variants/"}),"What\u2019s in a Name: The Intricacies of Identifying Variants"),"."))),Object(i.b)("p",null,"In Nirvana, we wanted to identify an algorithm for determining the canonical transcript and apply it consistently to all of our transcript data sources."),Object(i.b)("h2",{id:"known-algorithms"},"Known Algorithms"),Object(i.b)("h3",{id:"ucsc"},"UCSC"),Object(i.b)("p",null,"UCSC publishes a list of canonical transcripts in its ",Object(i.b)("inlineCode",{parentName:"p"},"knownCanonical")," table which is available via the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://genome.ucsc.edu/cgi-bin/hgTables"}),"TableBrowser"),". Of the RefSeq data sources, it was the only one we could find that provided canonical transcripts:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The canonical transcript is defined as either the longest CDS, if the gene has translated transcripts, or the longest cDNA.")),Object(i.b)("p",null,"If you were to implement this and compare it with the knownCanonical table, you would see a lot of exceptions to the rule."),Object(i.b)("h3",{id:"ensembl"},"Ensembl"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://uswest.ensembl.org/Help/Glossary"}),"Ensembl glossary")," states:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The canonical transcript is used in the gene tree analysis in Ensembl and does not necessarily reflect the most biologically relevant transcript of a gene. For human, the canonical transcript for a gene is set according to the following hierarchy:"),Object(i.b)("ol",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ol"},"Longest CCDS translation with no stop codons."),Object(i.b)("li",{parentName:"ol"},"If no (1), choose the longest Ensembl/Havana merged translation with no stop codons."),Object(i.b)("li",{parentName:"ol"},"If no (2), choose the longest translation with no stop codons."),Object(i.b)("li",{parentName:"ol"},"If no translation, choose the longest non-protein-coding transcript."))),Object(i.b)("h3",{id:"acmg"},"ACMG"),Object(i.b)("p",null,"From the ACMG Guidelines for the Interpretation of Sequence Variants:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"A reference transcript for each gene should be used and provided in the report when describing coding variants. The transcript should represent either the longest known transcript and/or the most clinically relevant transcript.")),Object(i.b)("h3",{id:"clinvar"},"ClinVar"),Object(i.b)("p",null,"From the ClinVar paper:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"When there are multiple transcripts for a gene, ClinVar selects one HGVS expression to construct a preferred name. By default, this selection is based on the first reference standard transcript identified by the RefSeqGene/LRG (Locus Reference Genomic) collaboration.")),Object(i.b)("h2",{id:"unified-approach"},"Unified Approach"),Object(i.b)("p",null,"Our approach is almost identical to the one Golden Helix discussed in their article:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"If we're looking at RefSeq, only consider NM & NR transcripts as candidates for canonical transcripts."),Object(i.b)("li",{parentName:"ol"},"Sort the transcripts in the following order:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.lrg-sequence.org/"}),"Locus Reference Genomic (LRG)")," entries occur before non-LRG entries"),Object(i.b)("li",{parentName:"ol"},"Descending CDS length"),Object(i.b)("li",{parentName:"ol"},"Descending transcript length"),Object(i.b)("li",{parentName:"ol"},"Ascending accession number"))),Object(i.b)("li",{parentName:"ol"},"Grab the first entry")))}p.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,h=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(h,c(c({ref:t},s),{},{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},257:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/hk1-transcripts-a5b85474d3b002553687715dbd004907.png"}}]);