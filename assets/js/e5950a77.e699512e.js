"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[4420],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7173:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(7462),i=(t(7294),t(3905));const r={title:"Gene Fusion Detection"},o=void 0,s={unversionedId:"core-functionality/gene-fusions",id:"version-3.18/core-functionality/gene-fusions",title:"Gene Fusion Detection",description:"Overview",source:"@site/versioned_docs/version-3.18/core-functionality/gene-fusions.md",sourceDirName:"core-functionality",slug:"/core-functionality/gene-fusions",permalink:"/NirvanaDocumentation/3.18/core-functionality/gene-fusions",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.18/core-functionality/gene-fusions.md",tags:[],version:"3.18",frontMatter:{title:"Gene Fusion Detection"},sidebar:"docs",previous:{title:"Canonical Transcripts",permalink:"/NirvanaDocumentation/3.18/core-functionality/canonical-transcripts"},next:{title:"MNV Recomposition",permalink:"/NirvanaDocumentation/3.18/core-functionality/mnv-recomposition"}},l=[{value:"Overview",id:"overview",children:[],level:2},{value:"Approach",id:"approach",children:[{value:"Variant Types",id:"variant-types",children:[],level:3},{value:"Criteria",id:"criteria",children:[],level:3}],level:2},{value:"ETV6/RUNX1 Example",id:"etv6runx1-example",children:[{value:"VCF",id:"vcf",children:[],level:3},{value:"JSON Output",id:"json-output",children:[{value:"Gene Fusion Data Sources",id:"gene-fusion-data-sources",children:[],level:4},{value:"Consequences",id:"consequences",children:[],level:4},{value:"Gene Fusions Section",id:"gene-fusions-section",children:[],level:4}],level:3}],level:2}],c={toc:l};function p(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Gene fusions often result from large genomic rearrangements such as structural variants. While WGS secondary analysis pipelines typically contain alignment and variant calling stages, very few of them contain dedicated gene fusion callers. When they are included, they are usually associated with RNA-Seq pipelines where gene fusions can be readily observed."),(0,i.kt)("p",null,"Since gene fusions are frequently observed in cancer and since many sequencing experiments do not include paired RNA-Seq data, we have added gene fusion detection and annotation to Nirvana."),(0,i.kt)("p",null,"The rich diversity in gene fusion architectures and their likely mechanisms can be seen below:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(1358).Z})),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Kumar-Sinha, C., Kalyana-Sundaram, S. & Chinnaiyan, A.M. ",(0,i.kt)("a",{parentName:"p",href:"https://genomemedicine.biomedcentral.com/articles/10.1186/s13073-015-0252-1"},"Landscape of gene fusions in epithelial cancers: seq and ye shall find"),". Genome Med 7, 129 (2015)"))),(0,i.kt)("h2",{id:"approach"},"Approach"),(0,i.kt)("p",null,"Nirvana uses structural variant calls to evaluate if they form either putative intra-chromosomal or inter-chromosomal gene fusions. Let's consider two transcripts, ",(0,i.kt)("inlineCode",{parentName:"p"},"NM_014206.3")," (",(0,i.kt)("strong",{parentName:"p"},"TMEM258"),") and ",(0,i.kt)("inlineCode",{parentName:"p"},"NM_013402.4")," (",(0,i.kt)("strong",{parentName:"p"},"FADS1"),"). Both of these genes are on the reverse strand in the genome. The vertical bar indicates the breakpoint where these transcripts are fused:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"TMEM258 &amp; FADS1 transcripts",src:t(560).Z})),(0,i.kt)("p",null,"The above explains where the transcripts are fused together, but it doesn't explain in which orientation. By using the directionality encoded in the translocation breakend, we can rearrange these two transcripts in four ways:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"TMEM258 &amp; FADS1 gene fusions",src:t(2369).Z})),(0,i.kt)("p",null,"Only two of the combinations yields a fusion contains both the transcription start site (TSS) and the stop codon. In one case, we can even detect an in-frame gene fusion."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Interpreting translocation breakends")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"At first glance, translocation breakends are a bit daunting. However, once you understand how they work, they're actually quite simple. For more information, we recommend reading section 5.4 in the ",(0,i.kt)("a",{parentName:"p",href:"https://samtools.github.io/hts-specs/VCFv4.2.pdf"},"VCF 4.2 specification"),"."),(0,i.kt)("table",{parentName:"div"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"REF"),(0,i.kt)("th",{parentName:"tr",align:"left"},"ALT"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"s"),(0,i.kt)("td",{parentName:"tr",align:"left"},"t[p["),(0,i.kt)("td",{parentName:"tr",align:"left"},"piece extending to the right of p is joined after t")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"s"),(0,i.kt)("td",{parentName:"tr",align:"left"},"t]p]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"reverse comp piece extending left of p is joined after t")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"s"),(0,i.kt)("td",{parentName:"tr",align:"left"},"]p]t"),(0,i.kt)("td",{parentName:"tr",align:"left"},"piece extending to the left of p is joined before t")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"s"),(0,i.kt)("td",{parentName:"tr",align:"left"},"[p[t"),(0,i.kt)("td",{parentName:"tr",align:"left"},"reverse comp piece extending right of p is joined before t")))))),(0,i.kt)("h3",{id:"variant-types"},"Variant Types"),(0,i.kt)("p",null,"Specifically we can identify gene fusions from the following structural variant types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"deletions (",(0,i.kt)("inlineCode",{parentName:"li"},"<DEL>"),")"),(0,i.kt)("li",{parentName:"ul"},"tandem_duplications (",(0,i.kt)("inlineCode",{parentName:"li"},"<DUP:TANDEM>"),")"),(0,i.kt)("li",{parentName:"ul"},"inversions (",(0,i.kt)("inlineCode",{parentName:"li"},"<INV>"),")"),(0,i.kt)("li",{parentName:"ul"},"translocation breakpoints (",(0,i.kt)("inlineCode",{parentName:"li"},"AAAAAAAAAAAAAAAAAATTAGTCAGGCAC[chr3:153444911["),") ")),(0,i.kt)("h3",{id:"criteria"},"Criteria"),(0,i.kt)("p",null,"The following criteria must be met for Nirvana to identify a gene fusion:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"After accounting for gene orientation and genomic rearrangements, both transcripts must have the same orientation"),(0,i.kt)("li",{parentName:"ol"},"Both transcripts must be from the same transcript source (i.e. we won't mix and match between RefSeq and Ensembl transcripts)"),(0,i.kt)("li",{parentName:"ol"},"Both transcripts must belong to different genes"),(0,i.kt)("li",{parentName:"ol"},"Both transcripts cannot have a coding region that already overlaps without the variant (i.e. in cases where two genes naturally overlap, we don't want to call a gene fusion)")),(0,i.kt)("h2",{id:"etv6runx1-example"},"ETV6/RUNX1 Example"),(0,i.kt)("p",null,"ETV6/RUNX1 is the most common gene fusion in childhood B-cell precursor acute lymphoblastic leukemia (ALL). Patients with this translocation are associated with a good prognosis and excellent response to treatment."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Sun C., Chang L., Zhu X. ",(0,i.kt)("a",{parentName:"p",href:"https://www.oncotarget.com/article/16367/text/"},"Pathogenesis of ETV6/RUNX1-positive childhood acute lymphoblastic leukemia and mechanisms underlying its relapse"),". Oncotarget. 2017; 8: 35445-35459"))),(0,i.kt)("h3",{id:"vcf"},"VCF"),(0,i.kt)("p",null,"Here's a simplified representation of the translocation breakends called by the Manta structural variant caller:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"##fileformat=VCFv4.1\n#CHROM  POS     ID      REF     ALT     QUAL    FILTER  INFO\nchr12   12026270    .   C   [chr21:36420865[C   .   PASS    SVTYPE=BND\nchr12   12026305    .   A   A]chr21:36420571]   .   PASS    SVTYPE=BND\nchr21   36420571    .   C   C]chr12:12026305]   .   PASS    SVTYPE=BND\nchr21   36420865    .   C   [chr12:12026270[C   .   PASS    SVTYPE=BND\n")),(0,i.kt)("p",null,"When you put these calls together, the resulting genomic rearrangement looks something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(3518).Z})),(0,i.kt)("h3",{id:"json-output"},"JSON Output"),(0,i.kt)("p",null,"The annotation for the first variant in the VCF looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{139,141-198,211,213-222}","{139,141-198,211,213-222}":!0},'{\n  "chromosome": "chr12",\n  "position": 12026270,\n  "refAllele": "C",\n  "altAlleles": [\n    "[chr21:36420865[C"\n  ],\n  "filters": [\n    "PASS"\n  ],\n  "cytogeneticBand": "12p13.2",\n  "clingen": [\n    {\n      "chromosome": "12",\n      "begin": 173786,\n      "end": 34835837,\n      "variantType": "copy_number_gain",\n      "id": "nsv995956",\n      "clinicalInterpretation": "pathogenic",\n      "phenotypes": [\n        "Decreased calvarial ossification",\n        "Delayed gross motor development",\n        "Feeding difficulties",\n        "Frontal bossing",\n        "Morphological abnormality of the central nervous system",\n        "Patchy alopecia"\n      ],\n      "phenotypeIds": [\n        "HP:0002007",\n        "HP:0002011",\n        "HP:0002194",\n        "HP:0002232",\n        "HP:0005474",\n        "HP:0011968",\n        "MedGen:C0232466",\n        "MedGen:C1862862",\n        "MedGen:CN001816",\n        "MedGen:CN001820",\n        "MedGen:CN001989",\n        "MedGen:CN004852"\n      ],\n      "observedGains": 1,\n      "validated": true\n    }\n  ],\n  "variants": [\n    {\n      "vid": "12-12026270-C-[chr21:36420865[C",\n      "chromosome": "chr12",\n      "begin": 12026270,\n      "end": 12026270,\n      "isStructuralVariant": true,\n      "refAllele": "C",\n      "altAllele": "[chr21:36420865[C",\n      "variantType": "translocation_breakend",\n      "cosmicGeneFusions": [\n        {\n          "id": "COSF2245",\n          "numSamples": 249,\n          "geneSymbols": [\n            "ETV6",\n            "RUNX1"\n          ],\n          "hgvsr": "ENST00000396373.4(ETV6):r.1_1283::ENST00000300305.3(RUNX1):r.504_6222",\n          "histologies": [\n            {\n              "name": "acute lymphoblastic B cell leukaemia",\n              "numSamples": 169\n            },\n            {\n              "name": "acute lymphoblastic leukaemia",\n              "numSamples": 80\n            }\n          ],\n          "sites": [\n            {\n              "name": "haematopoietic and lymphoid tissue",\n              "numSamples": 249\n            }\n          ],\n          "pubMedIds": [\n            7761424,\n            7780150,\n            8609706,\n            8751464,\n            8982044,\n            9067587,\n            9207408,\n            9226156,\n            9628428,\n            10463610,\n            10774753,\n            11091202,\n            12621238,\n            12661004,\n            12750722,\n            15104290,\n            15642392,\n            24557455,\n            26925663\n          ]\n        }\n      ],\n      "fusionCatcher": [\n        {\n          "genes": {\n            "first": {\n              "hgnc": "ETV6",\n              "isOncogene": true\n            },\n            "second": {\n              "hgnc": "RUNX1",\n              "isOncogene": true\n            }\n          },\n          "somaticSources": [\n            "DepMap CCLE",\n            "Cancer Genome Project",\n            "ChimerKB 4.0",\n            "ChimerPub 4.0",\n            "ChimerSeq 4.0",\n            "Known",\n            "Mitelman DB",\n            "OncoKB",\n            "TICdb"\n          ]\n        }\n      ],\n      "transcripts": [\n        {\n          "transcript": "ENST00000396373.4",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "introns": "5/7",\n          "geneId": "ENSG00000139083",\n          "hgnc": "ETV6",\n          "consequence": [\n            "transcript_variant",\n            "unidirectional_gene_fusion"\n          ],\n          "geneFusions": [\n            {\n              "transcript": "ENST00000437180.1",\n              "bioType": "protein_coding",\n              "intron": 2,\n              "geneId": "ENSG00000159216",\n              "hgnc": "RUNX1",\n              "hgvsr": "ENST00000437180.1(RUNX1):r.?_58+274::ENST00000396373.4(ETV6):r.1009+3367_?"\n            },\n            {\n              "transcript": "ENST00000300305.3",\n              "bioType": "protein_coding",\n              "intron": 1,\n              "geneId": "ENSG00000159216",\n              "hgnc": "RUNX1",\n              "hgvsr": "ENST00000300305.3(RUNX1):r.?_58+274::ENST00000396373.4(ETV6):r.1009+3367_?"\n            },\n            {\n              "transcript": "ENST00000482318.1",\n              "bioType": "nonsense_mediated_decay",\n              "intron": 2,\n              "geneId": "ENSG00000159216",\n              "hgnc": "RUNX1",\n              "hgvsr": "ENST00000482318.1(RUNX1):r.?_58+274::ENST00000396373.4(ETV6):r.1009+3367_?"\n            },\n            {\n              "transcript": "ENST00000486278.2",\n              "bioType": "protein_coding",\n              "intron": 2,\n              "geneId": "ENSG00000159216",\n              "hgnc": "RUNX1",\n              "hgvsr": "ENST00000486278.2(RUNX1):r.?_-15+274::ENST00000396373.4(ETV6):r.1009+3367_?"\n            },\n            {\n              "transcript": "ENST00000455571.1",\n              "bioType": "protein_coding",\n              "intron": 2,\n              "geneId": "ENSG00000159216",\n              "hgnc": "RUNX1",\n              "hgvsr": "ENST00000455571.1(RUNX1):r.?_58+274::ENST00000396373.4(ETV6):r.1009+3367_?"\n            },\n            {\n              "transcript": "ENST00000475045.2",\n              "bioType": "protein_coding",\n              "intron": 11,\n              "geneId": "ENSG00000159216",\n              "hgnc": "RUNX1",\n              "hgvsr": "ENST00000475045.2(RUNX1):r.?_58+274::ENST00000396373.4(ETV6):r.1009+3367_?"\n            },\n            {\n              "transcript": "ENST00000416754.1",\n              "bioType": "protein_coding",\n              "intron": 2,\n              "geneId": "ENSG00000159216",\n              "hgnc": "RUNX1",\n              "hgvsr": "ENST00000416754.1(RUNX1):r.?_58+274::ENST00000396373.4(ETV6):r.1009+3367_?"\n            }\n          ],\n          "isCanonical": true,\n          "proteinId": "ENSP00000379658.3"\n        },\n        {\n          "transcript": "NM_001987.4",\n          "source": "RefSeq",\n          "bioType": "protein_coding",\n          "introns": "5/7",\n          "geneId": "2120",\n          "hgnc": "ETV6",\n          "consequence": [\n            "transcript_variant",\n            "unidirectional_gene_fusion"\n          ],\n          "geneFusions": [\n            {\n              "transcript": "NM_001754.4",\n              "bioType": "protein_coding",\n              "intron": 2,\n              "geneId": "861",\n              "hgnc": "RUNX1",\n              "hgvsr": "NM_001754.4(RUNX1):r.?_58+274::NM_001987.4(ETV6):r.1009+3367_?"\n            }\n          ],\n          "isCanonical": true,\n          "proteinId": "NP_001978.1"\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"transcript"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"transcript ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"bioType"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"descriptions of the ",(0,i.kt)("a",{parentName:"td",href:"https://uswest.ensembl.org/info/genome/genebuild/biotypes.html"},"biotypes from Ensembl"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"exon"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"exon that contained fusion breakpoint")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"intron"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"intron that contained fusion breakpoint")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"geneId"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"gene ID. e.g. ENSG00000116062")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"hgnc"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"gene symbol. e.g. MSH6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"hgvsr"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"HGVS RNA nomenclature")))),(0,i.kt)("h4",{id:"gene-fusion-data-sources"},"Gene Fusion Data Sources"),(0,i.kt)("p",null,"To provide more context to our gene fusions, we provide the following gene fusion data sources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../data-sources/cosmic"},"COSMIC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../data-sources/fusioncatcher"},"FusionCatcher"))),(0,i.kt)("h4",{id:"consequences"},"Consequences"),(0,i.kt)("p",null,"When a gene fusion is identified, we add the following Sequence Ontology consequence:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'              "consequence": [\n                "transcript_variant",\n                "unidirectional_gene_fusion"\n              ],\n')),(0,i.kt)("h4",{id:"gene-fusions-section"},"Gene Fusions Section"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"geneFusions")," section is contained within the object of the originating transcript. It will contain all the pairwise gene fusions that obey the criteria outline above. In the case of ",(0,i.kt)("inlineCode",{parentName:"p"},"ENST00000396373.4"),", there 7 other Ensembl transcripts that would produce a gene fusion. For ",(0,i.kt)("inlineCode",{parentName:"p"},"NM_001987.4"),", there was only one transcript (",(0,i.kt)("inlineCode",{parentName:"p"},"NM_001754.4"),") that produce a gene fusion."),(0,i.kt)("p",null,"For each originating transcript, we report the following for each partner transcript:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"transcript ID"),(0,i.kt)("li",{parentName:"ul"},"gene ID"),(0,i.kt)("li",{parentName:"ul"},"HGNC gene symbol"),(0,i.kt)("li",{parentName:"ul"},"transcript bio type (e.g. protein_coding)"),(0,i.kt)("li",{parentName:"ul"},"intron or exon number containing the breakpoint"),(0,i.kt)("li",{parentName:"ul"},"HGVS RNA notation")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Before Nirvana 3.15, we provided HGVS coding notation. However, HGVS r. notation is more appropriate for these types fusion splicing events (see ",(0,i.kt)("a",{parentName:"p",href:"https://varnomen.hgvs.org/bg-material/consultation/svd-wg007"},"HGVS SVD-WG007"),")."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{8}","{8}":!0},'          "geneFusions": [\n            {\n              "transcript": "NM_001754.4",\n              "bioType": "protein_coding",\n              "intron": 2,\n              "geneId": "861",\n              "hgnc": "RUNX1",\n              "hgvsr": "NM_001754.4(RUNX1):r.?_58+274::NM_001987.4(ETV6):r.1009+3367_?"\n            }\n          ],\n')),(0,i.kt)("p",null,"The HGVS RNA notation above indicates that the gene fusion starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"NM_001754.4")," (RUNX1) until CDS position 58 and continues with ",(0,i.kt)("inlineCode",{parentName:"p"},"NM_001987.4")," (ETV6). ",(0,i.kt)("inlineCode",{parentName:"p"},"1009+3367")," indicates that the fusion occurred 3367 bp within intron 2."))}p.isMDXComponent=!0},2369:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/TMEM258_FADS1_GeneFusions-e5e3758ea9d2c07d3591e3801b2bf7e3.svg"},560:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/TMEM258_FADS1_Transcripts-fe1b9c6be1f7cbfefbce887f8cec5d58.svg"},3518:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/etv6-runx1-fusion-ec8f4312c9aca496bde0d6e2b1bbd50d.svg"},1358:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/gene-fusions-fig2-1cce8ac31b00465c8d36bdc47ec3309e.svg"}}]);