"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[8384],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=a.createContext({}),c=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},u=function(n){var e=c(n.components);return a.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,s=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),d=c(t),m=i,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(v,o(o({ref:e},u),{},{components:t})):a.createElement(v,o({ref:e},u))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},78863:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],l={title:"Annotating COVID-19"},s=void 0,c={unversionedId:"introduction/covid19",id:"version-3.17/introduction/covid19",title:"Annotating COVID-19",description:"The Nirvana development team is mainly focused on providing annotations for the human genome. This focus allows us to maximize our resources towards understanding human health.",source:"@site/versioned_docs/version-3.17/introduction/covid19.md",sourceDirName:"introduction",slug:"/introduction/covid19",permalink:"/NirvanaDocumentation/3.17/introduction/covid19",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.17/introduction/covid19.md",tags:[],version:"3.17",frontMatter:{title:"Annotating COVID-19"},sidebar:"version-3.17/docs",previous:{title:"Parsing Nirvana JSON",permalink:"/NirvanaDocumentation/3.17/introduction/parsing-json"},next:{title:"1000 Genomes",permalink:"/NirvanaDocumentation/3.17/data-sources/1000Genomes"}},u=[{value:"Getting Nirvana",id:"getting-nirvana",children:[],level:2},{value:"Downloading the COVID-19 data files",id:"downloading-the-covid-19-data-files",children:[],level:2},{value:"Download a COVID-19 VCF file",id:"download-a-covid-19-vcf-file",children:[],level:2},{value:"Running Nirvana",id:"running-nirvana",children:[],level:2},{value:"Investigating the Results",id:"investigating-the-results",children:[],level:2}],p={toc:u};function d(n){var e=n.components,t=(0,i.Z)(n,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Nirvana development team is mainly focused on providing annotations for the human genome. This focus allows us to maximize our resources towards understanding human health."),(0,r.kt)("p",null,"However, nothing in our architecture prevents us from supporting other genomes. Earlier this year, we had an opportunity to put that statement to the test - we added support for annotating the ",(0,r.kt)("strong",{parentName:"p"},"SARS-CoV-2")," genome, the virus that causes the ",(0,r.kt)("strong",{parentName:"p"},"COVID-19")," disease."),(0,r.kt)("p",null,"In addition to normal transcript annotation, we also supply:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"allele frequencies"),(0,r.kt)("li",{parentName:"ul"},"protein domains")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"SARS-CoV-2 Galaxy Project")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The allele frequencies used by Nirvana were provided by the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/galaxyproject/SARS-CoV-2"},"SARS-CoV-2 Galaxy Project"),". This is an international effort that provides ongoing analysis of COVID-19 using Galaxy, BioConda, and public research infrastructures."))),(0,r.kt)("h2",{id:"getting-nirvana"},"Getting Nirvana"),(0,r.kt)("p",null,"If you don't have Nirvana already, please consult our ",(0,r.kt)("a",{parentName:"p",href:"getting-started"},"Getting Started")," page first."),(0,r.kt)("h2",{id:"downloading-the-covid-19-data-files"},"Downloading the COVID-19 data files"),(0,r.kt)("p",null,"Here's ",(0,r.kt)("a",{parentName:"p",href:"https://illumina.github.io/NirvanaDocumentation/files/Covid19Data.zip"},"a data zip file")," containing new gene models, reference, and external data sources for SARS-CoV-2:"),(0,r.kt)("p",null,"Just go to the directory that contains your Nirvana ",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/Nirvana\ncurl -O https://illumina.github.io/NirvanaDocumentation/files/Covid19Data.zip\nunzip Covid19Data.zip\n")),(0,r.kt)("h2",{id:"download-a-covid-19-vcf-file"},"Download a COVID-19 VCF file"),(0,r.kt)("p",null,"Here's ",(0,r.kt)("a",{parentName:"p",href:"https://illumina.github.io/NirvanaDocumentation/files/Covid19Mutations.vcf.gz"},"a COVID-19 VCF file")," you can play around with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O https://illumina.github.io/NirvanaDocumentation/files/Covid19Mutations.vcf.gz\n")),(0,r.kt)("h2",{id:"running-nirvana"},"Running Nirvana"),(0,r.kt)("p",null,"Once you have downloaded the data sets, use the following command to annotate your VCF:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet bin/Release/netcoreapp2.1/Nirvana.dll \\\n     -c Data/Cache/SARS-CoV-2/SARS-CoV-2 \\\n     --sd Data/SupplementaryAnnotation/SARS-CoV-2 \\\n     -r Data/References/SARS-CoV-2.ASM985889v3.dat \\\n     -i Covid19Mutations.vcf.gz \\\n     -o Covid19Mutations\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"-c")," argument specifies the cache prefix"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"--sd")," argument specifies the supplementary annotation directory"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"-r")," argument specifies the compressed reference path"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"-i")," argument specifies the input VCF path"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"-o")," argument specifies the output filename prefix")),(0,r.kt)("p",null,"When running Nirvana, performance metrics are shown as it evaluates each chromosome in the input VCF file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"---------------------------------------------------------------------------\nNirvana                                             (c) 2020 Illumina, Inc.\nStromberg, Roy, Lajugie, Jiang, Li, and Kang                         3.12.0\n---------------------------------------------------------------------------\n\nInitialization                                         Time     Positions/s\n---------------------------------------------------------------------------\nCache                                               00:00:00.0\nSA Position Scan                                    00:00:00.0         1763\n\nReference                                Preload    Annotation   Variants/s\n---------------------------------------------------------------------------\nNC_045512                               00:00:00.0  00:00:00.1          173\n\nSummary                                                Time         Percent\n---------------------------------------------------------------------------\nInitialization                                      00:00:00.0        2.0 %\nPreload                                             00:00:00.0        0.3 %\nAnnotation                                          00:00:00.1        6.0 %\n\nTime: 00:00:01.5\n")),(0,r.kt)("p",null,"The output will be a JSON file called ",(0,r.kt)("inlineCode",{parentName:"p"},"Covid19Mutations.json.gz"),". Here's ",(0,r.kt)("a",{parentName:"p",href:"https://illumina.github.io/NirvanaDocumentation/files/Covid19Mutations.json.gz"},"the full JSON file"),"."),(0,r.kt)("h2",{id:"investigating-the-results"},"Investigating the Results"),(0,r.kt)("p",null,"Here's an example of what a COVID-19 variant looks like in the JSON output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "chromosome":"NC_045512.2",\n   "position":27323,\n   "refAllele":"C",\n   "altAlleles":[\n      "T"\n   ],\n   "filters":[\n      "PASS"\n   ],\n   "proteinDomains":[\n      {\n         "start":27202,\n         "end":27384,\n         "proteinId":"YP_009724394.1",\n         "domainId":"cl13556",\n         "domainName":"Sars6 super family",\n         "reciprocalOverlap":0.00546,\n         "annotationOverlap":0.00546\n      }\n   ],\n   "variants":[\n      {\n         "vid":"NC_045512.2-27323-C-T",\n         "chromosome":"NC_045512.2",\n         "begin":27323,\n         "end":27323,\n         "refAllele":"C",\n         "altAllele":"T",\n         "variantType":"SNV",\n         "hgvsg":"NC_045512.2:g.27323C>T",\n         "alleleFrequency":{\n            "refAllele":"C",\n            "altAllele":"T",\n            "allAc":8,\n            "allAn":1058,\n            "allAf":0.007561\n         },\n         "transcripts":[\n            {\n               "transcript":"YP_009724394.1",\n               "source":"RefSeq",\n               "bioType":"protein_coding",\n               "codons":"tCt/tTt",\n               "aminoAcids":"S/F",\n               "cdnaPos":"122",\n               "cdsPos":"122",\n               "exons":"1/1",\n               "proteinPos":"41",\n               "geneId":"43740572",\n               "hgnc":"ORF6",\n               "consequence":[\n                  "missense_variant"\n               ],\n               "hgvsc":"YP_009724394.1:c.122C>T",\n               "hgvsp":"YP_009724394.1:p.(Ser41Phe)",\n               "proteinId":"YP_009724394.1"\n            },\n            {\n               "transcript":"YP_009724395.1",\n               "source":"RefSeq",\n               "bioType":"protein_coding",\n               "geneId":"43740573",\n               "hgnc":"ORF7a",\n               "consequence":[\n                  "upstream_gene_variant"\n               ],\n               "proteinId":"YP_009724395.1"\n            }\n         ]\n      }\n   ]\n}\n')))}d.isMDXComponent=!0}}]);