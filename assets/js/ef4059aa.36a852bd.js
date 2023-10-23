"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[3790],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=i,h=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63427:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294);function i(e){var t=e.className,n=e.name,i=e.children,o=e.githubUrl,r=e.twitterUrl;return a.createElement("div",{className:t},a.createElement("div",{className:"card card--full-height"},a.createElement("div",{className:"card__header"},a.createElement("div",{className:"avatar avatar--vertical"},a.createElement("img",{className:"avatar__photo avatar__photo--xl",src:o+".png"}),a.createElement("div",{className:"avatar__intro"},a.createElement("h3",{className:"avatar__name"},n)))),a.createElement("div",{className:"card__body"},i),a.createElement("div",{className:"card__footer"},a.createElement("div",{className:"button-group button-group--block"},o&&a.createElement("a",{className:"button button--secondary",href:o},"GitHub"),r&&a.createElement("a",{className:"button button--secondary",href:r},"Twitter")))))}},668:function(e,t,n){n.r(t),n.d(t,{TeamProfileCardCol:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var a=n(63366),i=n(87462),o=(n(67294),n(3905)),r=n(63427),l=["components"],c={id:"introduction",title:"Introduction",description:"Clinical-grade variant annotation",hide_title:!0,slug:"/"},s=void 0,u={unversionedId:"introduction/introduction",id:"introduction/introduction",title:"Introduction",description:"Clinical-grade variant annotation",source:"@site/docs/introduction/introduction.mdx",sourceDirName:"introduction",slug:"/",permalink:"/IlluminaAnnotatorDocumentation/",editUrl:"https://github.com/Illumina/IlluminaAnnotatorDocumentation/edit/master/docs/introduction/introduction.mdx",tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction",description:"Clinical-grade variant annotation",hide_title:!0,slug:"/"},sidebar:"docs",next:{title:"Dependencies",permalink:"/IlluminaAnnotatorDocumentation/introduction/dependencies"}},d=[{value:"What does Illumina Annotator annotate?",id:"what-does-illumina-annotator-annotate",children:[],level:2},{value:"Licensing",id:"licensing",children:[{value:"Data",id:"data",children:[],level:3}],level:2},{value:"Illumina Annotator Team",id:"illumina-annotator-team",children:[{value:"Active Team",id:"active-team",children:[],level:3},{value:"Alumni",id:"alumni",children:[],level:3}],level:2}];function m(e){return(0,o.kt)(r.Z,(0,i.Z)({},e,{className:"col col--6 margin-bottom--lg",mdxType:"TeamProfileCard"}))}var p={toc:d,TeamProfileCardCol:m};function h(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(10626).Z})),(0,o.kt)("p",null,"Illumina Annotator provides clinical-grade annotation of genomic variants (SNVs, MNVs, insertions, deletions, indels, STRs, gene fusions, and SVs (including CNVs). It can be run as a stand-alone package, as an AWS Lambda function, or integrated into larger software tools that require variant annotation."),(0,o.kt)("p",null,"The input to Illumina Annotator are VCFs and the output is a structured JSON representation of all annotation and sample information (as extracted from the VCF). Illumina Annotator handles multiple alternate alleles and multiple samples with ease."),(0,o.kt)("p",null,"The software is being developed under a rigorous SDLC and testing process to ensure accuracy of the results and enable embedding in other software with regulatory needs. Illumina Annotator uses a continuous integration pipeline where millions of variant annotations are monitored against baseline values daily."),(0,o.kt)("h2",{id:"what-does-illumina-annotator-annotate"},"What does Illumina Annotator annotate?"),(0,o.kt)("p",null,"We use Sequence Ontology consequences to describe how each variant impacts a given transcript:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(63796).Z})),(0,o.kt)("p",null,"In addition, we also use external data sources to provide additional context for each variant:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6747).Z})),(0,o.kt)("h2",{id:"licensing"},"Licensing"),(0,o.kt)("h3",{id:"data"},"Data"),(0,o.kt)("p",null,"The data used by Illumina Annotator is publicly available, however some data sources have special restrictions on use by non-academic entities."),(0,o.kt)("h2",{id:"illumina-annotator-team"},"Illumina Annotator Team"),(0,o.kt)("h3",{id:"active-team"},"Active Team"),(0,o.kt)("p",null,"The Illumina Annotator team works on the core functionality, AWS annotation services, in addition to keeping the annotation data sources up-to-date."),(0,o.kt)("p",null,"Current members of the Illumina Annotator team are listed in alphabetical order below."),(0,o.kt)("div",{className:"row"},(0,o.kt)(m,{name:"Fahd Siddiqui",githubUrl:"https://github.com/Fahd-Siddiqui",mdxType:"TeamProfileCardCol"},"Joined our team back in December 2021 and brings even more cloud and ML experience to our team."),(0,o.kt)(m,{name:"Joseph Platzer",githubUrl:"https://github.com/jplatzer2",mdxType:"TeamProfileCardCol"},"Test Lead. Joins Illumina Annotator with a history of building sequencing tools and keeping the customer first."),(0,o.kt)(m,{name:"Rajat Shuvro Roy",githubUrl:"https://github.com/rajatshuvro",mdxType:"TeamProfileCardCol"},"Lead developer. Loves to speed up things and make services available to all interested users.")),(0,o.kt)("h3",{id:"alumni"},"Alumni"),(0,o.kt)("p",null,"Illumina Annotator would never be what it is today without the huge contributions from these folks who have moved on to bigger and greater things."),(0,o.kt)("div",{className:"row"},(0,o.kt)(m,{name:"Haochen Li",githubUrl:"https://github.com/haochenl",mdxType:"TeamProfileCardCol"},"Detail-oriented quick thinker that keeps cool even in the most stressful situations. Now working as a Senior Bioinformatics Data Scientist at GRAIL."),(0,o.kt)(m,{name:"Julien Lajugie",githubUrl:"https://github.com/JulienLajugie",mdxType:"TeamProfileCardCol"},"Julien is a legend around these parts. When he's not taking down opponents in Taekwondo or melting riffs in his rock band, he's demolishing bugs and making the world a better place."),(0,o.kt)(m,{name:"Michael Str\xf6mberg",githubUrl:"https://github.com/MichaelStromberg",mdxType:"TeamProfileCardCol"},"Illumina Annotator founder and former project lead."),(0,o.kt)(m,{name:"Ningxin Ouyang",githubUrl:"https://github.com/N-Ouyang",mdxType:"TeamProfileCardCol"},"Our newest addition to the team with a wealth of experience in transcript factor footprinting."),(0,o.kt)(m,{name:"Shuli Kang",githubUrl:"https://github.com/shulik7",mdxType:"TeamProfileCardCol"},"Oncology bioinformatician from USC before joining our team at Illumina. Now working as a Senior Bioinformatics Scientist at Novartis Gene Therapies."),(0,o.kt)(m,{name:"Yu Jiang",githubUrl:"https://github.com/yujiang02",mdxType:"TeamProfileCardCol"},"Biostatistics genius from Duke University before joining our team at Illumina. Now working as a Research Engineer at Facebook AI Research.")))}h.isMDXComponent=!0},10626:function(e,t,n){t.Z=n.p+"assets/images/IlluminaAnnotatorLogoWithSubtitle-7d89e92697bec775a1305122c447f629.svg"},6747:function(e,t,n){t.Z=n.p+"assets/images/SupplementaryAnnotations-d43d3f1c837f9b80fab530432e0e4b1d.svg"},63796:function(e,t,n){t.Z=n.p+"assets/images/TranscriptConsequences-60ca1c43a36dacf896fecdabf09ce02c.svg"}}]);