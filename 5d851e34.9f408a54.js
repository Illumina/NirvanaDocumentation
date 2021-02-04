(window.webpackJsonp=window.webpackJsonp||[]).push([[34,4,23],{132:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),r=(a(0),a(179)),o=a(57),c=a(71),l={title:"MITOMAP"},b={unversionedId:"data-sources/mitomap",id:"data-sources/mitomap",isDocsHomePage:!1,title:"MITOMAP",description:"Overview",source:"@site/docs/data-sources/mitomap.mdx",slug:"/data-sources/mitomap",permalink:"/NirvanaDocumentation/data-sources/mitomap",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/mitomap.mdx",version:"current",sidebar:"docs",previous:{title:"Mitochondrial Heteroplasmy",permalink:"/NirvanaDocumentation/data-sources/mito-heteroplasmy"},next:{title:"OMIM",permalink:"/NirvanaDocumentation/data-sources/omim"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Scraping HTML Pages",id:"scraping-html-pages",children:[{value:"Example",id:"example",children:[]},{value:"Parsing",id:"parsing",children:[]}]},{value:"PostgreSQL Dump File",id:"postgresql-dump-file",children:[{value:"Example",id:"example-1",children:[]},{value:"Parsing",id:"parsing-1",children:[]}]},{value:"Known Issues",id:"known-issues",children:[]},{value:"Download URLs",id:"download-urls",children:[]},{value:"JSON Output",id:"json-output",children:[{value:"Small Variants",id:"small-variants",children:[]},{value:"Structural Variants",id:"structural-variants",children:[]}]}],m={toc:s};function d(e){var t=e.components,l=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},m,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"MITOMAP provides a compendium of polymorphisms and mutations in human mitochondrial DNA."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Publication")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Lott, M.T., Leipzig, J.N., Derbeneva, O., Xie, H.M., Chalkia, D., Sarmady, M., Procaccio, V., and Wallace, D.C. mtDNA variation and analysis using MITOMAP and MITOMASTER. ",Object(r.b)("em",{parentName:"p"},"Current Protocols in Bioinformatics")," 1(123):1.23.1-26 (2013). ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.mitomap.org"}),"http://www.mitomap.org")))),Object(r.b)("h2",{id:"scraping-html-pages"},"Scraping HTML Pages"),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("p",null,"MITOMAP is unique in that it doesn't offer the data in a downloadable format. As a result, the annotation content in Nirvana is scraped from the following MITOMAP pages:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://mitomap.org/foswiki/bin/view/MITOMAP/PolymorphismsControl"}),"mtDNA Control Region Sequence Variants")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://mitomap.org/foswiki/bin/view/MITOMAP/PolymorphismsCoding"}),"mtDNA Coding Region & RNA Sequence Variants")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://mitomap.org/foswiki/bin/view/MITOMAP/MutationsRNA"}),"Reported Mitochondrial DNA Base Substitution Diseases: rRNA/tRNA mutations")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://mitomap.org/foswiki/bin/view/MITOMAP/MutationsCodingControl"}),"Reported Mitochondrial DNA Base Substitution Diseases: Coding and Control Region Point Mutations")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://mitomap.org/foswiki/bin/view/MITOMAP/DeletionsSingle"}),"Reported mtDNA Deletions")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://mitomap.org/foswiki/bin/view/MITOMAP/InsertionsSimple"}),"mtDNA Simple Insertions"))),Object(r.b)("p",null,Object(r.b)("img",{src:a(261).default})),Object(r.b)("h3",{id:"parsing"},"Parsing"),Object(r.b)("p",null,"Here's what the HTML code looks like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"[\"582\",\"<a href='/MITOMAP/GenomeLoci#MTTF'>MT-TF</a>\",\"Mitochondrial myopathy\",\"T582C\",\"tRNA Phe\",\"-\",\"+\",\"Reported\",\"<span style='display:inline-block;white-space:nowrap;'><a href='/cgi-bin/mitotip?pos=582&alt=C&quart=2'><u>72.90%</u></a> <i class='fa fa-arrow-up' style='color:orange' aria-hidden='true'></i></span>\",\"0\",\"<a href='/cgi-bin/print_ref_list?refs=90165,91590&title=RNA+Mutation+T582C' target='_blank'>2</a>\"],\n[\"583\",\"<a href='/MITOMAP/GenomeLoci#MTTF'>MT-TF</a>\",\"MELAS / MM & EXIT\",\"G583A\",\"tRNA Phe\",\"-\",\"+\",\"Cfrm\",\"<span style='display:inline-block;white-space:nowrap;'><a href='/cgi-bin/mitotip?pos=583&alt=A&quart=0'><u>93.10%</u></a> <i class='fa fa-arrow-up' style='color:red' aria-hidden='true'></i><i class='fa fa-arrow-up' style='color:red' aria-hidden='true'></i><i class='fa fa-arrow-up' style='color:red' aria-hidden='true'></i></span>\",\"0\",\"<a href='/cgi-bin/print_ref_list?refs=2066,90532,91590&title=RNA+Mutation+G583A' target='_blank'>3</a>\"],\n")),Object(r.b)("p",null,"We're mainly interested in the following columns (numbers indicate the HTML page above):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Position",Object(r.b)("sup",null,"1,2,3,4")),Object(r.b)("li",{parentName:"ul"},"Disease",Object(r.b)("sup",null,"3,4")),Object(r.b)("li",{parentName:"ul"},"Nucleotide Change",Object(r.b)("sup",null,"1,2")),Object(r.b)("li",{parentName:"ul"},"Allele",Object(r.b)("sup",null,"3,4")),Object(r.b)("li",{parentName:"ul"},"Homoplasmy",Object(r.b)("sup",null,"3,4")),Object(r.b)("li",{parentName:"ul"},"Heteroplasmy",Object(r.b)("sup",null,"3,4")),Object(r.b)("li",{parentName:"ul"},"Status",Object(r.b)("sup",null,"3,4")),Object(r.b)("li",{parentName:"ul"},"MitoTIP",Object(r.b)("sup",null,"3,4")),Object(r.b)("li",{parentName:"ul"},"GB Seqs FL(CR)",Object(r.b)("sup",null,"1,2,3,4")),Object(r.b)("li",{parentName:"ul"},"Deletion Junction",Object(r.b)("sup",null,"5")),Object(r.b)("li",{parentName:"ul"},"Insert (nt)",Object(r.b)("sup",null,"6")),Object(r.b)("li",{parentName:"ul"},"Insert Point (nt)",Object(r.b)("sup",null,"6")),Object(r.b)("li",{parentName:"ul"},"References/Curated References",Object(r.b)("sup",null,"1,2,3,4"))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"MitoTIP")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The MitoTIP information is used to populate the ",Object(r.b)("inlineCode",{parentName:"p"},"clinicalSignificance")," and ",Object(r.b)("inlineCode",{parentName:"p"},"scorePercentile"),' JSON keys. The "frequency alert" entries are skipped since it\'s not directly relevant to clinical significance.'))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Left alignment")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Many of the variants in MITOMAP have not been normalized. As part of our import procedure, we left align all insertions and deletions."))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Variant Enumeration")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Sometimes MITOMAP provides data that indicates that multiple values have been observed. Some examples of this are ",Object(r.b)("inlineCode",{parentName:"p"},"C-C(2-8)")," and ",Object(r.b)("inlineCode",{parentName:"p"},"A-AC or ACC"),". Alternate alleles containing IUPAC ambiguity codes are similarly enumerated."))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Inversions")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"MITOMAP inversions are currently treated as MNVs."))),Object(r.b)("h4",{id:"allele-parsing"},"Allele Parsing"),Object(r.b)("p",null,"The following MITOMAP allele parsing conventions are supported:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"C123T"),Object(r.b)("li",{parentName:"ul"},"16021_16022del"),Object(r.b)("li",{parentName:"ul"},"8042del2"),Object(r.b)("li",{parentName:"ul"},"C9537insC"),Object(r.b)("li",{parentName:"ul"},"3902_3908invACCTTGC"),Object(r.b)("li",{parentName:"ul"},"A-AC or ACC"),Object(r.b)("li",{parentName:"ul"},"C-C(2-8)"),Object(r.b)("li",{parentName:"ul"},"8042delAT")),Object(r.b)("h2",{id:"postgresql-dump-file"},"PostgreSQL Dump File"),Object(r.b)("h3",{id:"example-1"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"COPY mitomap.reference (id, authors, title, publication, editors, volume, number, pages, date, city, publisher, keywords, abstract, nlmid) FROM stdin;\n1       Albring, M., Griffith, J. and Attardi, G.       Association of a protein structure of probable membrane derivation with HeLa cell mitochondrial DNA near its origin of replication      Proceedings of the National Academy of Sciences of the United States of America .       74      4       1348-1352       1977    .       .       Deoxyribonucleoproteins; DNA Replication; DNA, Mitochondrial; Hela Cells; Membrane Proteins; Microscopy, Electron; Molecular Weight; Neoplasm Proteins; Protein Binding Almost all (about 95 percent) of the mitochondrial DNA molecules released by Triton X-100 lysis of HeLa cell mitochondria in the presence of 0.15 M salt are associated with a single protein-containing structure varying in appearance between a 10-20 nm knob and a 100-500 nm membrane-like patch. Analysis by high resolution electron microscopy and by polyacrylamide gel electrophoresis after cleavage of mitochondrial DNA with the endonucleases EcoRI, HindIII, and Hpa II has shown that the protein structure is attached to the DNA in the region of the D-loop, and probably near the origin of mitochondrial DNA replication. The data strongly suggest that HeLa cell mitochondrial DNA is attached in vivo to the inner mitochondrial membrane at or near the origin of replication, and that a membrane fragment of variable size remains associated with the DNA during the isolation. After sodium dodecyl sulfate extraction of mitochondrial DNA, a small 5-10 nm protein is found at the same site on a fraction of the mitochondrial DNA molecules.   266177\n2       Anderson, S., Bankier, A.T., Barrell, B.G., de Bruijn, M.H., Coulson, A.R., Drouin, J., Eperon, I.C., Nierlich, D.P., Roe, B.A., Sanger, F., Schreier, P.H., Smith, A.J., Staden, R., Young, I.G.       Sequence and organization of the human mitochondrial genome     Nature  .       290     5806    457-465 1981    .       .       Base Sequence; Codon; DNA Replication; mtDNA; Evolution; Genes, Structural; Human; Nucleic Acid Precursors; Peptide Chain Initiation; Peptide Chain Termination; RNA, Ribosomal; RNA, Transfer; Transcription, Genetic  The complete sequence of the 16,569-base pair human mitochondrial genome is presented. The genes for the 12S and 16S rRNAs, 22 tRNAs, cytochrome c oxidase subunits I, II and III, ATPase subunit 6, cytochrome b and eight other predicted protein coding genes have been located. The sequence shows extreme economy in that the genes have none or only a few noncoding bases between them, and in many cases the termination codons are not coded in the DNA but are created post- transcriptionally by polyadenylation of the mRNAs.       7219534\n")),Object(r.b)("h3",{id:"parsing-1"},"Parsing"),Object(r.b)("p",null,"From the PostgreSQL dump file, we're interested in parsing the mapping between reference IDs and the PubMed IDs:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"id"),Object(r.b)("li",{parentName:"ul"},"nlmid")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Why not use the PostgreSQL file for everything?")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Ideally we would use this file for parsing all of our data, but the schema contains 80+ tables and we haven't invested the time yet to see how the tables are linked together to produce the 6 main HTML pages that we're interested in."))),Object(r.b)("h2",{id:"known-issues"},"Known Issues"),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Duplicated records")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Multiple records describing the same nucleotide change are merged into the same record. If any conflicting information is found (homoplasmy, heteroplasmy, status, clinical significance, score percentile, end coordinate, variant type), an exception is thrown."),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"For diseases and PubMed IDs, we take the union of the values in the duplicated records."),Object(r.b)("li",{parentName:"ul"},"For full length GenBank sequences, we take the largest number from each of the duplicated records since it provides the strongest evidence for this variant.")))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Skipped records")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Records that represent an alternate notation of the original variant are skipped. Similarly some variants with confusing alleles (T961delT+ / -C(n)ins) are also skipped."))),Object(r.b)("h2",{id:"download-urls"},"Download URLs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"see ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#example"}),"HTML Pages")," above"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://mitomap.org/downloads/mitomap.dump.sql.gz"}),"PostgreSQL dump file"))),Object(r.b)("h2",{id:"json-output"},"JSON Output"),Object(r.b)("h3",{id:"small-variants"},"Small Variants"),Object(r.b)(o.default,{mdxType:"SmallJSON"}),Object(r.b)("h3",{id:"structural-variants"},"Structural Variants"),Object(r.b)(c.default,{mdxType:"SVJSON"}))}d.isMDXComponent=!0},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),m=s(a),p=n,O=m["".concat(o,".").concat(p)]||m[p]||d[p]||r;return a?i.a.createElement(O,c(c({ref:t},b),{},{components:a})):i.a.createElement(O,c({ref:t},b))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<r;b++)o[b]=a[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},261:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/MITOMAP-d8d4dd35c2336fdba5fcced77ec438e6.png"},57:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),i=a(7),r=(a(0),a(179)),o={},c={unversionedId:"data-sources/mitomap-small-variants-json",id:"data-sources/mitomap-small-variants-json",isDocsHomePage:!1,title:"mitomap-small-variants-json",description:"`json",source:"@site/docs/data-sources/mitomap-small-variants-json.md",slug:"/data-sources/mitomap-small-variants-json",permalink:"/NirvanaDocumentation/data-sources/mitomap-small-variants-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/mitomap-small-variants-json.md",version:"current"},l=[],b={toc:l};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"mitomap":[ \n   { \n      "refAllele":"G",\n      "altAllele":"A",\n      "diseases":[ \n         "Bipolar disorder",\n         "Melanoma"\n      ],\n      "hasHomoplasmy":false,\n      "hasHeteroplasmy":true,\n      "status":"Reported",\n      "clinicalSignificance":"confirmed pathogenic",\n      "scorePercentile":83.30,\n      "numGenBankFullLengthSeqs":2,\n      "pubMedIds":["2316527","6299878","6301949"],\n      "isAlleleSpecific":true\n   }\n]\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Notes"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"refAllele"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"altAllele"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"diseases"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string array"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"associated diseases")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"hasHomoplasmy"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"hasHeteroplasmy"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"status"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"record status")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"clinicalSignificance"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"predicted pathogenicity")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"scorePercentile"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"float"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MitoTIP score")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"numGenBankFullLengthSeqs"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"integer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"# of GenBank full-length sequences")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pubMedIds"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string array"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"isAlleleSpecific"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"true when the current variant alternate allele matches the MITOMAP alternate allele")))))}s.isMDXComponent=!0},71:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),i=a(7),r=(a(0),a(179)),o={},c={unversionedId:"data-sources/mitomap-structural-variants-json",id:"data-sources/mitomap-structural-variants-json",isDocsHomePage:!1,title:"mitomap-structural-variants-json",description:"`json",source:"@site/docs/data-sources/mitomap-structural-variants-json.md",slug:"/data-sources/mitomap-structural-variants-json",permalink:"/NirvanaDocumentation/data-sources/mitomap-structural-variants-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/mitomap-structural-variants-json.md",version:"current"},l=[],b={toc:l};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"mitomap":[ \n   { \n      "chromosome":"MT",\n      "begin":"3166",\n      "end":"14152",\n      "variantType":"deletion",\n      "reciprocalOverlap":0.18068,\n      "annotationOverlap":0.42405\n   }\n]\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Notes"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"chromosome"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"begin"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"integer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"end"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"integer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"variantType"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string array"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"reciprocalOverlap"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"float"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Range: 0 - 1. Specified up to 5 decimal places")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"annotationOverlap"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"float"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Range: 0 - 1. Specified up to 5 decimal places")))))}s.isMDXComponent=!0}}]);