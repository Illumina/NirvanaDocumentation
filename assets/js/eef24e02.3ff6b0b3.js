"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[4974],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return d}});var i=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=i.createContext({}),c=function(n){var e=i.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},u=function(n){var e=c(n.components);return i.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,s=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),m=c(t),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return t?i.createElement(h,o(o({ref:e},u),{},{components:t})):i.createElement(h,o({ref:e},u))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:a,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2139:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),o=["components"],l={title:"Jasix"},s=void 0,c={unversionedId:"utilities/jasix",id:"utilities/jasix",isDocsHomePage:!1,title:"Jasix",description:"Overview",source:"@site/docs/utilities/jasix.mdx",sourceDirName:"utilities",slug:"/utilities/jasix",permalink:"/NirvanaDocumentation/utilities/jasix",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/utilities/jasix.mdx",version:"current",frontMatter:{title:"Jasix"},sidebar:"docs",previous:{title:"Variant IDs",permalink:"/NirvanaDocumentation/core-functionality/variant-ids"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Creating the Jasix index",id:"creating-the-jasix-index",children:[{value:"Example",id:"example",children:[]}]},{value:"Querying the index",id:"querying-the-index",children:[]},{value:"Extracting a section",id:"extracting-a-section",children:[]}],p={toc:u};function m(n){var e=n.components,t=(0,a.Z)(n,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Jasix index is aimed at providing TABIX like indexing capabilities for the Nirvana JSON output."),(0,r.kt)("h2",{id:"creating-the-jasix-index"},"Creating the Jasix index"),(0,r.kt)("p",null,"The Jasix index (that comes in a .jsi) file is generated on-the-fly with Nirvana output. It can also be generated independently by running the Jasix command line utility on the JSON output file. Please note that the Jasix utility can only consume JSON files that follow the Nirvana JSON output format. The following code blocks demonstrate the help menu and index generating functionalities of Jasix."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"dotnet Jasix.dll -h\nUSAGE: dotnet Jasix.dll -i in.json.gz [options]\nIndexes a Nirvana annotated JSON file\n\nOPTIONS:\n      --header, -t           print also the header lines\n      --only-header, -H      print only the header lines\n      --chromosomes, -l      list chromosome names\n      --index, -c            create index\n      --in, -i <VALUE>       input\n      --out, -o <VALUE>      compressed output file name (default:console)\n      --query, -q <VALUE>    query range\n      --section, -s <VALUE>  complete section (positions or genes) to output\n      --help, -h             displays the help menu\n      --version, -v          displays the version\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"dotnet Jasix.dll --index -i input.json.gz\n---------------------------------------------------------------------------\nJasix                                               (c) 2017 Illumina, Inc.\nStromberg, Roy, Lajugie, Jiang, Li, and Kang                          2.0.0\n---------------------------------------------------------------------------\n\nRef Sequence chrM indexed in 00:00:00.2\nRef Sequence chr1 indexed in 00:00:05.8\nRef Sequence chr2 indexed in 00:00:06.0\n.\n.\n.\nPeak memory usage: 28.5 MB\nTime: 00:01:14.8\n")),(0,r.kt)("h2",{id:"querying-the-index"},"Querying the index"),(0,r.kt)("p",null,"The Jasix query format is chr:start-end. If not provided, it assumes end=start. If only chr is provided, all entries for that chromosome will be provided."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"dotnet Jasix.dll -i input.json.gz chrM:5000-7000\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "positions":[\n      {\n         "chromosome":"chrM",\n         "refAllele":"C",\n         "position":5581,\n         "quality":3070.00,\n         "filters":[\n            "LowGQXHomSNP"\n         ],\n         "altAlleles":[\n            "T"\n         ],\n         "samples":[\n            {\n               "variantFreq":1,\n               "totalDepth":1625,\n               "genotypeQuality":1,\n               "alleleDepths":[\n                  0,\n                  1625\n               ],\n               "genotype":"1/1"\n            }\n         ],\n         "variants":[\n            {\n               "altAllele":"T",\n               "refAllele":"C",\n               "begin":5581,\n               "chromosome":"chrM",\n               "end":5581,\n               "variantType":"SNV",\n               "vid":"MT:5581:T"\n            }\n         ]\n      },\n      {\n         "chromosome":"chrM",\n         "refAllele":"A",\n         "position":6267,\n         "quality":1637.00,\n         "filters":[\n            "LowGQXHetSNP"\n         ],\n         "altAlleles":[\n            "G"\n         ],\n         "samples":[\n            {\n               "variantFreq":0.6873,\n               "totalDepth":323,\n               "genotypeQuality":1,\n               "alleleDepths":[\n                  101,\n                  222\n               ],\n               "genotype":"0/1"\n            }\n         ],\n         "variants":[\n            {\n               "altAllele":"G",\n               "refAllele":"A",\n               "begin":6267,\n               "chromosome":"chrM",\n               "end":6267,\n               "variantType":"SNV",\n               "vid":"MT:6267:G"\n            }\n         ]\n      }\n   ]\n}\n\n')),(0,r.kt)("p",null,'The default output stream is Console. However, if an output filename is provided, Jasix outputs the results to that file in a bgzip compressed format. The output is always a valid JSON entry. If requested (via -t option) the header of the indexed file will be provided. Multiple queries can be submitted in the same command and the output will contain them within the same "positions" block in order of the submitted queries (Warning: if the queries are out of order, or overlapping, the output will be out or order and intersecting).'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"dotnet Jasix.dll -i input.json.gz  -q chrM:5000-7000 -q chrM:8500-9500 -t\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "header":{\n      "annotator":"Illumina Annotation Engine 1.6.2.0",\n      "creationTime":"2017-08-30 11:42:57",\n      "genomeAssembly":"GRCh37",\n      "schemaVersion":6,\n      "dataVersion":"84.24.39",\n      "dataSources":[\n         {\n            "name":"VEP",\n            "version":"84",\n            "description":"Ensembl",\n            "releaseDate":"2017-01-16"\n         }\n      ],\n      "samples":[\n         "Mother"\n      ]\n   },\n   "positions":[\n      {\n         "chromosome":"chrM",\n         "refAllele":"C",\n         "position":5581,\n         "quality":3070.00,\n         "filters":[\n            "LowGQXHomSNP"\n         ],\n         "altAlleles":[\n            "T"\n         ],\n         "samples":[\n            {\n               "variantFreq":1,\n               "totalDepth":1625,\n               "genotypeQuality":1,\n               "alleleDepths":[\n                  0,\n                  1625\n               ],\n               "genotype":"1/1"\n            }\n         ],\n         "variants":[\n            {\n               "altAllele":"T",\n               "refAllele":"C",\n               "begin":5581,\n               "chromosome":"chrM",\n               "end":5581,\n               "variantType":"SNV",\n               "vid":"MT:5581:T"\n            }\n         ]\n      },\n      {\n         "chromosome":"chrM",\n         "refAllele":"A",\n         "position":6267,\n         "quality":1637.00,\n         "filters":[\n            "LowGQXHetSNP"\n         ],\n         "altAlleles":[\n            "G"\n         ],\n         "samples":[\n            {\n               "variantFreq":0.6873,\n               "totalDepth":323,\n               "genotypeQuality":1,\n               "alleleDepths":[\n                  101,\n                  222\n               ],\n               "genotype":"0/1"\n            }\n         ],\n         "variants":[\n            {\n               "altAllele":"G",\n               "refAllele":"A",\n               "begin":6267,\n               "chromosome":"chrM",\n               "end":6267,\n               "variantType":"SNV",\n               "vid":"MT:6267:G"\n            }\n         ]\n      },\n      {\n         "chromosome":"chrM",\n         "refAllele":"G",\n         "position":8702,\n         "quality":3070.00,\n         "filters":[\n            "LowGQXHomSNP"\n         ],\n         "altAlleles":[\n            "A"\n         ],\n         "samples":[\n            {\n               "variantFreq":0.9987,\n               "totalDepth":1534,\n               "genotypeQuality":1,\n               "alleleDepths":[\n                  2,\n                  1532\n               ],\n               "genotype":"1/1"\n            }\n         ],\n         "variants":[\n            {\n               "altAllele":"A",\n               "refAllele":"G",\n               "begin":8702,\n               "chromosome":"chrM",\n               "end":8702,\n               "variantType":"SNV",\n               "vid":"MT:8702:A"\n            }\n         ]\n      },\n      {\n         "chromosome":"chrM",\n         "refAllele":"G",\n         "position":9378,\n         "quality":3070.00,\n         "filters":[\n            "LowGQXHomSNP"\n         ],\n         "altAlleles":[\n            "A"\n         ],\n         "samples":[\n            {\n               "variantFreq":1,\n               "totalDepth":1018,\n               "genotypeQuality":1,\n               "alleleDepths":[\n                  0,\n                  1018\n               ],\n               "genotype":"1/1"\n            }\n         ],\n         "variants":[\n            {\n               "altAllele":"A",\n               "refAllele":"G",\n               "begin":9378,\n               "chromosome":"chrM",\n               "end":9378,\n               "variantType":"SNV",\n               "vid":"MT:9378:A"\n            }\n         ]\n      }\n   ]\n}\n')),(0,r.kt)("h2",{id:"extracting-a-section"},"Extracting a section"),(0,r.kt)("p",null,"The Nirvana JSON file has three sections: header, positions and genes. Header can be printed using the -H option. If you are interested in only the positions or genes section, you can use the -s or --section option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"dotnet Jasix.dll -i input.json.gz  -s genes\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n{\n  "name": "ABCB10",\n  "omim": [\n    {\n      "mimNumber": 605454,\n      "geneName": "ATP-binding cassette, subfamily B, member 10"\n    }\n  ]\n},\n{\n  "name": "ABCD3",\n  "omim": [\n    {\n      "mimNumber": 170995,\n      "geneName": "ATP-binding cassette, subfamily D, member 3 (peroxisomal membrane protein 1, 70kD)",\n      "description": "The ABCD3 gene encodes a peroxisomal membrane transporter involved in the transport of branched-chain fatty acids and C27 bile acids into the peroxisome; the latter function is a crucial step in bile acid biosynthesis (summary by Ferdinandusse et al., 2015).",\n      "phenotypes": [\n        {\n          "mimNumber": 616278,\n          "phenotype": "?Bile acid synthesis defect, congenital, 5",\n          "mapping": "molecular basis of the disorder is known",\n          "inheritances": [\n            "Autosomal recessive"\n          ],\n          "comments": [\n            "unconfirmed or possibly spurious mapping"\n          ]\n        }\n      ]\n    }\n  ]\n}\n]\n')))}m.isMDXComponent=!0}}]);