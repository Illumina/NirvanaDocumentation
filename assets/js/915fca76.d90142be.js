"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[9639,7942],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20737:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={},s=void 0,p={unversionedId:"data-sources/primate-ai-json",id:"data-sources/primate-ai-json",title:"primate-ai-json",description:"GRCh38",source:"@site/docs/data-sources/primate-ai-json.md",sourceDirName:"data-sources",slug:"/data-sources/primate-ai-json",permalink:"/NirvanaDocumentation/data-sources/primate-ai-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/primate-ai-json.md",tags:[],version:"current",frontMatter:{}},d=[{value:"GRCh38",id:"grch38",children:[],level:4},{value:"GRCh37",id:"grch37",children:[],level:4}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"grch38"},"GRCh38"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"primateAI-3D": [\n  {\n    "aminoAcidPosition": 2,\n    "refAminoAcid": "V",\n    "altAminoAcid": "M",\n    "score": 0.616944,\n    "scorePercentile": 0.52,\n    "ensemblTranscriptId": "ENST00000335137.4",\n    "refSeqTranscriptId": "NM_001005484.1"\n  }\n]\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"aminoAcidPosition"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Amino Acid Position (1-based)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"refAminoAcid"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Reference Amino Acid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"altAminoAcid"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Alternate Amino Acid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ensemblTranscriptId"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Transcript ID (Ensembl)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"refSeqTranscriptId"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Transcript ID (RefSeq)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"scorePercentile"),(0,i.kt)("td",{parentName:"tr",align:"center"},"float"),(0,i.kt)("td",{parentName:"tr",align:"left"},"range: 0 - 1.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"score"),(0,i.kt)("td",{parentName:"tr",align:"center"},"float"),(0,i.kt)("td",{parentName:"tr",align:"left"},"range: 0 - 1.0")))),(0,i.kt)("h4",{id:"grch37"},"GRCh37"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"primateAI": [\n   {\n      "hgnc":"TP53",\n      "scorePercentile":0.3,\n   }\n]\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"hgnc"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"HGNC Gene Symbol")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"scorePercentile"),(0,i.kt)("td",{parentName:"tr",align:"center"},"float"),(0,i.kt)("td",{parentName:"tr",align:"left"},"range: 0 - 1.0")))))}m.isMDXComponent=!0},93556:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(20737),l=["components"],s={title:"Primate AI"},p=void 0,d={unversionedId:"data-sources/primate-ai",id:"data-sources/primate-ai",title:"Primate AI",description:"Overview",source:"@site/docs/data-sources/primate-ai.mdx",sourceDirName:"data-sources",slug:"/data-sources/primate-ai",permalink:"/NirvanaDocumentation/data-sources/primate-ai",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/primate-ai.mdx",tags:[],version:"current",frontMatter:{title:"Primate AI"},sidebar:"docs",previous:{title:"PhyloP",permalink:"/NirvanaDocumentation/data-sources/phylop"},next:{title:"REVEL",permalink:"/NirvanaDocumentation/data-sources/revel"}},c=[{value:"Overview",id:"overview",children:[],level:2},{value:"Primate AI 3D: GRCh38",id:"primate-ai-3d-grch38",children:[{value:"Parsing",id:"parsing",children:[{value:"CSV File",id:"csv-file",children:[],level:4},{value:"Parsing Command",id:"parsing-command",children:[],level:4}],level:3},{value:"Known Issues",id:"known-issues",children:[],level:3},{value:"Download URL",id:"download-url",children:[],level:3}],level:2},{value:"Primate AI: GRCh37",id:"primate-ai-grch37",children:[{value:"Parsing",id:"parsing-1",children:[{value:"TSV File",id:"tsv-file",children:[],level:4}],level:3},{value:"Pre-processing",id:"pre-processing",children:[{value:"Converting UCSC IDs",id:"converting-ucsc-ids",children:[],level:4},{value:"Running the Pre-Processor",id:"running-the-pre-processor",children:[],level:4}],level:3},{value:"Known Issues",id:"known-issues-1",children:[],level:3},{value:"Download URL",id:"download-url-1",children:[],level:3}],level:2},{value:"JSON Output",id:"json-output",children:[],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Primate AI is a deep residual neural network for classifying the pathogenicity of missense mutations."),(0,i.kt)("p",null,"The newer version, PrimateAI-3D, uses a 3D convolutional neural network, to predict protein variant pathogenicity using structural information.\nThe model's innovative use of primate sequencing and structural data offers promising insights into variant interpretation and disease gene identification.\nThe predictive score range between 0 and 1, with 0 being benign and 1 being most pathogenic."),(0,i.kt)("p",null,"For more details, refer to these publications:"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Hong Gao et al. ,The landscape of tolerated genetic variation in humans and primates. ",(0,i.kt)("em",{parentName:"li"},"Science")," ",(0,i.kt)("strong",{parentName:"li"},"380"),", eabn8153 (2023). ",(0,i.kt)("a",{parentName:"li",href:"https://doi.org/10.1126/science.abn8197"},"https://doi.org/10.1126/science.abn8197")),(0,i.kt)("li",{parentName:"ol"},"Sundaram, L., Gao, H., Padigepati, S.R. et al. Predicting the clinical impact of human mutation with deep neural networks. ",(0,i.kt)("em",{parentName:"li"},"Nat Genet")," ",(0,i.kt)("strong",{parentName:"li"},"50"),", 1161\u20131170 (2018). ",(0,i.kt)("a",{parentName:"li",href:"https://doi.org/10.1038/s41588-018-0167-z"},"https://doi.org/10.1038/s41588-018-0167-z"))))),(0,i.kt)("p",null,"Primate AI is available in two versions based on assembly:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Primate AI 3D: Only available for GRCh38"),(0,i.kt)("li",{parentName:"ol"},"Primate AI: Only available for GRCh37")),(0,i.kt)("p",null,"Both have different file structures, and information. Therefore, they are handled separately:"),(0,i.kt)("h2",{id:"primate-ai-3d-grch38"},"Primate AI 3D: GRCh38"),(0,i.kt)("h3",{id:"parsing"},"Parsing"),(0,i.kt)("h4",{id:"csv-file"},"CSV File"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},",chr,pos,non_flipped_ref,non_flipped_alt,gene_name,change_position_1based,ref_aa,alt_aa,score_PAI3D,percentile_PAI3D,refseq\n0,chr1,69094,G,A,ENST00000335137.4,2,V,M,0.6169436463713646,0.5200308441794135,NM_001005484.1\n1,chr1,69094,G,C,ENST00000335137.4,2,V,L,0.5557043975591658,0.4271457250214688,NM_001005484.1\n2,chr1,69094,G,T,ENST00000335137.4,2,V,L,0.5557043975591658,0.4271457391722522,NM_001005484.1\n")),(0,i.kt)("p",null,"From the CSV file, all columns are parsed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chr")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pos")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ref")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"alt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gene_name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"change_position_1based")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ref_aa")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"alt_aa")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"score_PAI3D")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"percentile_PAI3D")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refseq"))),(0,i.kt)("p",null,"The fields ",(0,i.kt)("inlineCode",{parentName:"p"},"gene_name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"refseq")," define the Ensembl and RefSeq transcript IDs respectively.\nThese transcripts are passed as-is and some of them might be unrecognized/deprecated by RefSeq/Ensembl."),(0,i.kt)("h4",{id:"parsing-command"},"Parsing Command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'dotnet SAUtils.dll \\\nPrimateAi \\\n--r "${References}/Homo_sapiens.GRCh38.Nirvana.dat" \\\n--i "${ExternalDataSources}/PrimateAI/3D/PAI3D_wholeProteome_23_04_11.percentiles.pkg.refseq.csv.gz" \\\n--o "${SaUtilsOutput]"\n')),(0,i.kt)("h3",{id:"known-issues"},"Known Issues"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Known Issues")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some transcript IDs defined in the data file are obsolete, retired, or updated.\nThey are not removed or modified by Nirvana, and are passed as-is from the PrimateAI-3D data source."),(0,i.kt)("h4",{parentName:"div",id:"example"},"Example:"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"ENST00000643905.1")," transcript is retired according to ",(0,i.kt)("a",{parentName:"p",href:"https://useast.ensembl.org/Homo_sapiens/Transcript/Idhistory?db=core;t=ENST00000643905"},"Ensembl")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"NM_182838.2")," transcript is removed because it is a pseudo-gene according to ",(0,i.kt)("a",{parentName:"p",href:"https://www.ncbi.nlm.nih.gov/nuccore/NM_182838.3"},"RefSeq")))),(0,i.kt)("h3",{id:"download-url"},"Download URL"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://primad.basespace.illumina.com/"},"https://primad.basespace.illumina.com/")),(0,i.kt)("h2",{id:"primate-ai-grch37"},"Primate AI: GRCh37"),(0,i.kt)("h3",{id:"parsing-1"},"Parsing"),(0,i.kt)("h4",{id:"tsv-file"},"TSV File"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"chr pos ref alt refAA   altAA   strand_1pos_0neg    trinucleotide_context   UCSC_gene   ExAC_coverage   primateDL_score\nchr10   1046704 C   T   R   C   1   CCG uc001ift.3  45.49   0.849114537239\nchr10   1046704 C   G   R   G   1   CCG uc001ift.3  45.49   0.795686006546\n")),(0,i.kt)("p",null,"From the TSV file, we're mainly interested in the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chr")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pos")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ref")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"alt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"primateDL_score"))),(0,i.kt)("p",null,"We also use ",(0,i.kt)("inlineCode",{parentName:"p"},"UCSC_gene")," to filter out variants that don't have matching gene models in Nirvana."),(0,i.kt)("h3",{id:"pre-processing"},"Pre-processing"),(0,i.kt)("h4",{id:"converting-ucsc-ids"},"Converting UCSC IDs"),(0,i.kt)("p",null,"Primate AI only provides UCSC IDs. As an initial pre-processing step, we'll need to convert these to either Entrez or Ensembl Gene IDs."),(0,i.kt)("p",null,"The following queries are used to download the conversions from UCSC:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'mysql -h genome-mysql.soe.ucsc.edu -u genome -A -P 3306 \\\n      -e "select * FROM knownToLocusLink;" hg19 > ucsc_locuslink.tsv\n\nmysql -h genome-mysql.soe.ucsc.edu -u genome -A -P 3306 \\\n      -e "select knownToEnsembl.name, knownToEnsembl.value, ensGene.name2 FROM knownToEnsembl, ensGene WHERE knownToEnsembl.value = ensGene.name;" \\\n      hg19 > ucsc_ensembl.tsv\n')),(0,i.kt)("h4",{id:"running-the-pre-processor"},"Running the Pre-Processor"),(0,i.kt)("p",null,"The Primate AI pre-processor can be run as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet PrimateAiPreProcessor.dll UGA_develop.tsv PrimateAI_scores_v0.2.tsv.gz \\\n     ucsc_locuslink.tsv ucsc_ensembl.tsv PrimateAI_0.2_GRCh37.tsv.gz\n")),(0,i.kt)("p",null,"During conversion, 0.5% of the UCSC Ids cannot be converted to either Entrez or Ensembl gene IDs. Once the gene IDs have been acquired, we check to see which are available in Nirvana."),(0,i.kt)("p",null,"The following Entrez Gene IDs were not found:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"399753\n401980\n504189\n504191\n100293534\n")),(0,i.kt)("p",null,"Here is the output from the pre-processor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"- loading UCSC to Entrez Gene ID dictionary... 73,432 genes loaded.\n- loading UCSC to Ensembl Gene ID dictionary... 76,178 genes loaded.\n- loading UGA gene ID to gene dictionary... 103,277 genes loaded.\n- parsing Primate AI variants... 70,121,953 variants parsed.\n\n# variants with unknown gene ID: 27,253 / 70,121,953\n# genes with unknown gene ID:    109 / 19,614\n\n# variants not in UGA: 2,036 / 70,121,953\n# genes not in UGA:    6 / 19,614\n")),(0,i.kt)("h3",{id:"known-issues-1"},"Known Issues"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Known Issues")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Primate AI data set provides raw scores, but the scores are biased according to gene context. I.e. a 0.4 means something different in ",(0,i.kt)("inlineCode",{parentName:"p"},"TP53")," than it does in ",(0,i.kt)("inlineCode",{parentName:"p"},"KRAS"),"."),(0,i.kt)("p",{parentName:"div"},"As a result, the Primate AI team provided guidance on aggregating these scores and presenting them as percentiles with respect to the associated gene. According to their research, the 25",(0,i.kt)("sup",null,"th")," percentile is a good proxy for benign variants and the 75",(0,i.kt)("sup",null,"th")," percentile is a good proxy for pathogenic variants."))),(0,i.kt)("h3",{id:"download-url-1"},"Download URL"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://basespace.illumina.com/s/cPgCSmecvhb4"},"https://basespace.illumina.com/s/cPgCSmecvhb4")),(0,i.kt)("h2",{id:"json-output"},"JSON Output"),(0,i.kt)(o.default,{mdxType:"JSON"}))}u.isMDXComponent=!0}}]);