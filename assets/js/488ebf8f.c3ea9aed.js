"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[156,3130],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,v=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2529:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s=void 0,d={unversionedId:"data-sources/decipher-json",id:"version-3.18/data-sources/decipher-json",title:"decipher-json",description:"| Field                | Type   | Notes                                                           |",source:"@site/versioned_docs/version-3.18/data-sources/decipher-json.md",sourceDirName:"data-sources",slug:"/data-sources/decipher-json",permalink:"/NirvanaDocumentation/3.18/data-sources/decipher-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.18/data-sources/decipher-json.md",tags:[],version:"3.18",frontMatter:{}},c=[],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"decipher":[\n  {\n    "chromosome":"1",\n    "begin":13516,\n    "end":91073,\n    "numDeletions":27,\n    "deletionFrequency":0.675,\n    "numDuplications":27,\n    "duplicationFrequency":0.675,\n    "sampleSize":40,\n    "reciprocalOverlap": 0.27555,\n    "annotationOverlap": 0.5901\n  }\n],\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"chromosome"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"Ensembl-style chromosome names")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"begin"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"1-based position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"end"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"1-based position")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"numDeletions"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"# of observed deletions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"deletionFrequency"),(0,i.kt)("td",{parentName:"tr",align:null},"float"),(0,i.kt)("td",{parentName:"tr",align:null},"deletion frequency")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"numDuplications"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"# of observed duplications")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"duplicationFrequency"),(0,i.kt)("td",{parentName:"tr",align:null},"float"),(0,i.kt)("td",{parentName:"tr",align:null},"duplication frequency")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sampleSize"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"total # of samples")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"reciprocalOverlap"),(0,i.kt)("td",{parentName:"tr",align:null},"float"),(0,i.kt)("td",{parentName:"tr",align:null},"Range: 0 - 1. E.g. 0.57 would indicate a 57% reciprocal overlap")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"annotationOverlap"),(0,i.kt)("td",{parentName:"tr",align:null},"float"),(0,i.kt)("td",{parentName:"tr",align:null},"Range: 0 - 1. E.g. 0.57 would indicate a 57% annotation overlap")))))}u.isMDXComponent=!0},7429:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(2529),l=["components"],s={title:"DECIPHER"},d=void 0,c={unversionedId:"data-sources/decipher",id:"version-3.18/data-sources/decipher",title:"DECIPHER",description:"Overview",source:"@site/versioned_docs/version-3.18/data-sources/decipher.mdx",sourceDirName:"data-sources",slug:"/data-sources/decipher",permalink:"/NirvanaDocumentation/3.18/data-sources/decipher",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.18/data-sources/decipher.mdx",tags:[],version:"3.18",frontMatter:{title:"DECIPHER"},sidebar:"docs",previous:{title:"dbSNP",permalink:"/NirvanaDocumentation/3.18/data-sources/dbsnp"},next:{title:"FusionCatcher",permalink:"/NirvanaDocumentation/3.18/data-sources/fusioncatcher"}},p=[{value:"Overview",id:"overview",children:[{value:"TSV Extraction",id:"tsv-extraction",children:[{value:"Parsing",id:"parsing",children:[],level:4}],level:3}],level:2},{value:"Download URL",id:"download-url",children:[{value:"JSON output",id:"json-output",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.deciphergenomics.org/"},"DECIPHER")," (DatabasE of genomiC varIation and Phenotype in Humans using Ensembl Resources) is an interactive web-based database which incorporates a suite of tools designed to aid the interpretation of genomic variants."),(0,i.kt)("p",null,"DECIPHER enhances clinical diagnosis by retrieving information from a variety of bioinformatics resources relevant to the variant found in the patient. The patient's variant is displayed in the context of both normal variation and pathogenic variation reported at that locus thereby facilitating interpretation."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"DECIPHER: Database of Chromosomal Imbalance and Phenotype in Humans using Ensembl Resources. Firth, H.V. et al., 2009. Am.J.Hum.Genet 84, 524-533 (DOI: dx.doi.org/10/1016/j.ajhg.2009.03.010)"))),(0,i.kt)("h3",{id:"tsv-extraction"},"TSV Extraction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"#population_cnv_id  chr start   end deletion_observations   deletion_frequency  deletion_standard_error duplication_observations    duplication_frequency   duplication_standard_error  observations    frequency   standard_error  type    sample_size study\n1   1   10529   177368  0   0   1   3   0.075   0.555277708 3   0.075   0.555277708 1   40  42M calls\n2   1   13516   91073   0   0   1   27  0.675   0.109713431 27  0.675   0.109713431 1   40  42M calls\n3   1   18888   35451   0   0   1   2   0.002366864 0.706269473 2   0.002366864 0.706269473 1   845 DDD\n")),(0,i.kt)("h4",{id:"parsing"},"Parsing"),(0,i.kt)("p",null,"We parse the DECIPHER tsv file and extract the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"chr"),(0,i.kt)("li",{parentName:"ul"},"start"),(0,i.kt)("li",{parentName:"ul"},"end"),(0,i.kt)("li",{parentName:"ul"},"deletion_observations"),(0,i.kt)("li",{parentName:"ul"},"deletion_frequency"),(0,i.kt)("li",{parentName:"ul"},"duplication_observations"),(0,i.kt)("li",{parentName:"ul"},"duplication_frequency"),(0,i.kt)("li",{parentName:"ul"},"sample_size")),(0,i.kt)("h2",{id:"download-url"},"Download URL"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.deciphergenomics.org/files/downloads/population_cnv_grch38.txt.gz"},"https://www.deciphergenomics.org/files/downloads/population_cnv_grch38.txt.gz"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.deciphergenomics.org/files/downloads/population_cnv_grch37.txt.gz"},"https://www.deciphergenomics.org/files/downloads/population_cnv_grch37.txt.gz")),(0,i.kt)("h3",{id:"json-output"},"JSON output"),(0,i.kt)(o.default,{mdxType:"JSON"}))}m.isMDXComponent=!0}}]);