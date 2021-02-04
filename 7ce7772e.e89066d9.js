(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{141:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var a=t(3),i=t(7),r=(t(0),t(179)),o={title:"Annotating COVID-19"},c={unversionedId:"introduction/covid19",id:"introduction/covid19",isDocsHomePage:!1,title:"Annotating COVID-19",description:"The Nirvana development team is mainly focused on providing annotations for the human genome. This focus allows us to maximize our resources towards understanding human health.",source:"@site/docs/introduction/covid19.md",slug:"/introduction/covid19",permalink:"/NirvanaDocumentation/introduction/covid19",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/introduction/covid19.md",version:"current",sidebar:"docs",previous:{title:"Parsing Nirvana JSON",permalink:"/NirvanaDocumentation/introduction/parsing-json"},next:{title:"1000 Genomes",permalink:"/NirvanaDocumentation/data-sources/1000Genomes"}},l=[{value:"Getting Nirvana",id:"getting-nirvana",children:[]},{value:"Downloading the COVID-19 data files",id:"downloading-the-covid-19-data-files",children:[]},{value:"Download a COVID-19 VCF file",id:"download-a-covid-19-vcf-file",children:[]},{value:"Running Nirvana",id:"running-nirvana",children:[]},{value:"Investigating the Results",id:"investigating-the-results",children:[]}],s={toc:l};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Nirvana development team is mainly focused on providing annotations for the human genome. This focus allows us to maximize our resources towards understanding human health."),Object(r.b)("p",null,"However, nothing in our architecture prevents us from supporting other genomes. Earlier this year, we had an opportunity to put that statement to the test - we added support for annotating the ",Object(r.b)("strong",{parentName:"p"},"SARS-CoV-2")," genome, the virus that causes the ",Object(r.b)("strong",{parentName:"p"},"COVID-19")," disease."),Object(r.b)("p",null,"In addition to normal transcript annotation, we also supply:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"allele frequencies"),Object(r.b)("li",{parentName:"ul"},"protein domains")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"SARS-CoV-2 Galaxy Project")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The allele frequencies used by Nirvana were provided by the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/galaxyproject/SARS-CoV-2"}),"SARS-CoV-2 Galaxy Project"),". This is an international effort that provides ongoing analysis of COVID-19 using Galaxy, BioConda, and public research infrastructures."))),Object(r.b)("h2",{id:"getting-nirvana"},"Getting Nirvana"),Object(r.b)("p",null,"If you don't have Nirvana already, please consult our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"getting-started"}),"Getting Started")," page first."),Object(r.b)("h2",{id:"downloading-the-covid-19-data-files"},"Downloading the COVID-19 data files"),Object(r.b)("p",null,"Here's ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://illumina.github.io/NirvanaDocumentation/files/Covid19Data.zip"}),"a data zip file")," containing new gene models, reference, and external data sources for SARS-CoV-2:"),Object(r.b)("p",null,"Just go to the directory that contains your Nirvana ",Object(r.b)("inlineCode",{parentName:"p"},"Data")," directory."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ~/Nirvana\ncurl -O https://illumina.github.io/NirvanaDocumentation/files/Covid19Data.zip\nunzip Covid19Data.zip\n")),Object(r.b)("h2",{id:"download-a-covid-19-vcf-file"},"Download a COVID-19 VCF file"),Object(r.b)("p",null,"Here's ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://illumina.github.io/NirvanaDocumentation/files/Covid19Mutations.vcf.gz"}),"a COVID-19 VCF file")," you can play around with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl -O https://illumina.github.io/NirvanaDocumentation/files/Covid19Mutations.vcf.gz\n")),Object(r.b)("h2",{id:"running-nirvana"},"Running Nirvana"),Object(r.b)("p",null,"Once you have downloaded the data sets, use the following command to annotate your VCF:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"dotnet bin/Release/netcoreapp2.1/Nirvana.dll \\\n     -c Data/Cache/SARS-CoV-2/SARS-CoV-2 \\\n     --sd Data/SupplementaryAnnotation/SARS-CoV-2 \\\n     -r Data/References/SARS-CoV-2.ASM985889v3.dat \\\n     -i Covid19Mutations.vcf.gz \\\n     -o Covid19Mutations\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"-c")," argument specifies the cache prefix"),Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"--sd")," argument specifies the supplementary annotation directory"),Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"-r")," argument specifies the compressed reference path"),Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"-i")," argument specifies the input VCF path"),Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"-o")," argument specifies the output filename prefix")),Object(r.b)("p",null,"When running Nirvana, performance metrics are shown as it evaluates each chromosome in the input VCF file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"---------------------------------------------------------------------------\nNirvana                                             (c) 2020 Illumina, Inc.\nStromberg, Roy, Lajugie, Jiang, Li, and Kang                         3.12.0\n---------------------------------------------------------------------------\n\nInitialization                                         Time     Positions/s\n---------------------------------------------------------------------------\nCache                                               00:00:00.0\nSA Position Scan                                    00:00:00.0         1763\n\nReference                                Preload    Annotation   Variants/s\n---------------------------------------------------------------------------\nNC_045512                               00:00:00.0  00:00:00.1          173\n\nSummary                                                Time         Percent\n---------------------------------------------------------------------------\nInitialization                                      00:00:00.0        2.0 %\nPreload                                             00:00:00.0        0.3 %\nAnnotation                                          00:00:00.1        6.0 %\n\nTime: 00:00:01.5\n")),Object(r.b)("p",null,"The output will be a JSON file called ",Object(r.b)("inlineCode",{parentName:"p"},"Covid19Mutations.json.gz"),". Here's ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://illumina.github.io/NirvanaDocumentation/files/Covid19Mutations.json.gz"}),"the full JSON file"),"."),Object(r.b)("h2",{id:"investigating-the-results"},"Investigating the Results"),Object(r.b)("p",null,"Here's an example of what a COVID-19 variant looks like in the JSON output:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n   "chromosome":"NC_045512.2",\n   "position":27323,\n   "refAllele":"C",\n   "altAlleles":[\n      "T"\n   ],\n   "filters":[\n      "PASS"\n   ],\n   "proteinDomains":[\n      {\n         "start":27202,\n         "end":27384,\n         "proteinId":"YP_009724394.1",\n         "domainId":"cl13556",\n         "domainName":"Sars6 super family",\n         "reciprocalOverlap":0.00546,\n         "annotationOverlap":0.00546\n      }\n   ],\n   "variants":[\n      {\n         "vid":"NC_045512.2-27323-C-T",\n         "chromosome":"NC_045512.2",\n         "begin":27323,\n         "end":27323,\n         "refAllele":"C",\n         "altAllele":"T",\n         "variantType":"SNV",\n         "hgvsg":"NC_045512.2:g.27323C>T",\n         "alleleFrequency":{\n            "refAllele":"C",\n            "altAllele":"T",\n            "allAc":8,\n            "allAn":1058,\n            "allAf":0.007561\n         },\n         "transcripts":[\n            {\n               "transcript":"YP_009724394.1",\n               "source":"RefSeq",\n               "bioType":"protein_coding",\n               "codons":"tCt/tTt",\n               "aminoAcids":"S/F",\n               "cdnaPos":"122",\n               "cdsPos":"122",\n               "exons":"1/1",\n               "proteinPos":"41",\n               "geneId":"43740572",\n               "hgnc":"ORF6",\n               "consequence":[\n                  "missense_variant"\n               ],\n               "hgvsc":"YP_009724394.1:c.122C>T",\n               "hgvsp":"YP_009724394.1:p.(Ser41Phe)",\n               "proteinId":"YP_009724394.1"\n            },\n            {\n               "transcript":"YP_009724395.1",\n               "source":"RefSeq",\n               "bioType":"protein_coding",\n               "geneId":"43740573",\n               "hgnc":"ORF7a",\n               "consequence":[\n                  "upstream_gene_variant"\n               ],\n               "proteinId":"YP_009724395.1"\n            }\n         ]\n      }\n   ]\n}\n')))}u.isMDXComponent=!0},179:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),u=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=a,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||r;return t?i.a.createElement(m,c(c({ref:n},s),{},{components:t})):i.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);