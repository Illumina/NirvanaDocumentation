(window.webpackJsonp=window.webpackJsonp||[]).push([[47,53,80,83],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(2),i=n(6),l=(n(0),n(167)),r=n(74),c=n(75),o=n(76),b={title:"ClinGen"},s={unversionedId:"data-sources/clingen",id:"data-sources/clingen",isDocsHomePage:!1,title:"ClinGen",description:"Overview",source:"@site/docs/data-sources/clingen.mdx",slug:"/data-sources/clingen",permalink:"/NirvanaDocumentation/data-sources/clingen",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/clingen.mdx",version:"current",sidebar:"docs",previous:{title:"Amino Acid Conservation",permalink:"/NirvanaDocumentation/data-sources/amino-acid-conservation"},next:{title:"ClinVar",permalink:"/NirvanaDocumentation/data-sources/clinvar"}},p=[{value:"Overview",id:"overview",children:[]},{value:"ISCA Regions",id:"isca-regions",children:[{value:"TSV Extraction",id:"tsv-extraction",children:[]}]},{value:"Conflict Resolution",id:"conflict-resolution",children:[{value:"Clinical significance priority",id:"clinical-significance-priority",children:[]},{value:"Validation Priority",id:"validation-priority",children:[]},{value:"Download URL",id:"download-url",children:[]},{value:"JSON Output",id:"json-output",children:[]}]},{value:"Dosage Sensitivity Map",id:"dosage-sensitivity-map",children:[{value:"TSV Source files",id:"tsv-source-files",children:[]},{value:"Dosage Rating System",id:"dosage-rating-system",children:[]},{value:"Download URL",id:"download-url-1",children:[]},{value:"JSON Output",id:"json-output-1",children:[]}]},{value:"Gene-Disease Validity",id:"gene-disease-validity",children:[{value:"Source TSV",id:"source-tsv",children:[]},{value:"Download URL",id:"download-url-2",children:[]},{value:"Conflict Resolution",id:"conflict-resolution-1",children:[]},{value:"JSON Output",id:"json-output-2",children:[]}]}],d={rightToc:p};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"overview"},"Overview"),Object(l.b)("p",null,"ClinGen is a National Institutes of Health (NIH)-funded resource dedicated to building a central resource that defines the clinical relevance of genes and variants for use in precision medicine and research."),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Publication")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Heidi L. Rehm, Ph.D., Jonathan S. Berg, M.D., Ph.D., Lisa D. Brooks, Ph.D., Carlos D. Bustamante, Ph.D., James P. Evans, M.D., Ph.D., Melissa J. Landrum, Ph.D., David H. Ledbetter, Ph.D., Donna R. Maglott, Ph.D., Christa Lese Martin, Ph.D., Robert L. Nussbaum, M.D., Sharon E. Plon, M.D., Ph.D., Erin M. Ramos, Ph.D., Stephen T. Sherry, Ph.D., and Michael S. Watson, Ph.D., for ClinGen. ",Object(l.b)("strong",{parentName:"p"},"ClinGen The Clinical Genome Resource.")," ",Object(l.b)("em",{parentName:"p"},"N Engl J Med 2015; 372:2235-2242 June 4, 2015 DOI: 10.1056/NEJMsr1406261.")))),Object(l.b)("h2",{id:"isca-regions"},"ISCA Regions"),Object(l.b)("h3",{id:"tsv-extraction"},"TSV Extraction"),Object(l.b)("p",null,"ClinGen contains only copy number variation variants, since the coordinates in ClinGen original file follow the same rule as BED format, the coordinates had to be adjusted to ","[BEGIN+1, END]","."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),"#bin    chrom   chromStart      chromEnd        name    score   strand  thickStart      thickEnd        attrCount       attrTags        attrVals\nnsv530705       1       564405  8597804 0       1       copy_number_loss        pathogenic      False   Developmental delay AND/OR other significant developmental or morphological phenotypes\nnsv530706       1       564424  3262790 0       1       copy_number_loss        pathogenic      False   Abnormal facial shape,Abnormality of cardiac morphology,Global developmental delay,Muscular hypotonia   HP:0001252,HP:0001263,HP:0001627,HP:0001999,MedGen:CN001147,MedGen:CN001157,MedGen:CN001482,MedGen:CN001810\nnsv530707       1       564424  7068738 0       1       copy_number_loss        pathogenic      False   Abnormality of cardiac morphology,Cleft upper lip,Failure to thrive,Global developmental delay,Intrauterine growth retardation,Microcephaly,Short stature       HP:0000204,HP:0000252,HP:0001263,HP:0001508,HP:0001511,HP:0001627,HP:0004322,MedGen:C0349588,MedGen:C1845868,MedGen:C1853481,MedGen:C2364119,MedGen:CN000197,MedGen:CN001157,MedGen:CN001482\nnsv533512       1       564435  649748  0       1       copy_number_loss        benign  False   Developmental delay AND/OR other significant developmental or morphological phenotypes\nnsv931338       1       714078  4958499 0       1       copy_number_loss        pathogenic      False   Developmental delay AND/OR other significant developmental or morphological phenotypes\nnsv530300       1       728138  5066371 1       0       copy_number_gain        pathogenic      False   Abnormality of cardiac morphology,Cleft palate,Global developmental delay       HP:0000175,HP:0001263,HP:0001627,MedGen:C2240378,MedGen:CN001157,MedGen:CN001482\n")),Object(l.b)("h4",{id:"status-levels"},"Status levels"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"benign"),Object(l.b)("li",{parentName:"ul"},"curated benign"),Object(l.b)("li",{parentName:"ul"},"curated pathogenic"),Object(l.b)("li",{parentName:"ul"},"likely benign"),Object(l.b)("li",{parentName:"ul"},"likely pathogenic"),Object(l.b)("li",{parentName:"ul"},"path gain"),Object(l.b)("li",{parentName:"ul"},"path loss"),Object(l.b)("li",{parentName:"ul"},"pathogenic"),Object(l.b)("li",{parentName:"ul"},"uncertain")),Object(l.b)("h4",{id:"parsing"},"Parsing"),Object(l.b)("p",null,"We parse the ClinGen tsv file and extract the following:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"chrom"),Object(l.b)("li",{parentName:"ul"},"chromStart (note this a 0-based coordinate)"),Object(l.b)("li",{parentName:"ul"},"chromEnd"),Object(l.b)("li",{parentName:"ul"},"attrTags"),Object(l.b)("li",{parentName:"ul"},"attrVals")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"attrTags")," and ",Object(l.b)("inlineCode",{parentName:"p"},"attrVals")," are comma separated lists. ",Object(l.b)("inlineCode",{parentName:"p"},"attrTags")," contains the field keys and ",Object(l.b)("inlineCode",{parentName:"p"},"attrVals")," contains the field values. We will parse the following keys from the two fields:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parent (this will be used as the ID in our JSON output)"),Object(l.b)("li",{parentName:"ul"},"clinical_int"),Object(l.b)("li",{parentName:"ul"},"validated"),Object(l.b)("li",{parentName:"ul"},"phenotype (this should be a string array)"),Object(l.b)("li",{parentName:"ul"},"phenotype_id (this should be a string array)")),Object(l.b)("p",null,"Observed losses and observed gains will be calculated from entries that share a common parent ID."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"variants with a common parent ID and same coordinates are grouped",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"calculated observed losses, observed gains for each group"),Object(l.b)("li",{parentName:"ul"},"Clinical significance and validation status are collapsed using the priority strategy described below"))),Object(l.b)("li",{parentName:"ul"},"Variants with the same parent ID can have different coordinates (mapped to hg38)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"nsv491508 : chr14:105583663-106881350 and chr14:105605043-106766076 (only one example)"),Object(l.b)("li",{parentName:"ul"},"we kept both variants")))),Object(l.b)("h2",{id:"conflict-resolution"},"Conflict Resolution"),Object(l.b)("h3",{id:"clinical-significance-priority"},"Clinical significance priority"),Object(l.b)("p",null,"When there are a mixture of variants belonging to the same parent ID, we will choose the most pathogenic clinical significance from the available values. i.e. if 3 samples were deemed pathogenic and 2 samples were likely pathogenic, we would list the variant as pathogenic."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Priority")," (high to low)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Priority"),Object(l.b)("li",{parentName:"ul"},"Pathogenic"),Object(l.b)("li",{parentName:"ul"},"Likely pathogenic"),Object(l.b)("li",{parentName:"ul"},"Benign"),Object(l.b)("li",{parentName:"ul"},"Likely benign"),Object(l.b)("li",{parentName:"ul"},"Uncertain significance")),Object(l.b)("h3",{id:"validation-priority"},"Validation Priority"),Object(l.b)("p",null,"When there are a mixture of variants belonging to same parent ID, we will set the validation status to true if any of the variants were validated."),Object(l.b)("h3",{id:"download-url"},"Download URL"),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://cirm.ucsc.edu/cgi-bin/hgTrackUi?db=hg19&g=iscaComposite"}),"https://cirm.ucsc.edu/cgi-bin/hgTrackUi?db=hg19&g=iscaComposite")),Object(l.b)("h3",{id:"json-output"},"JSON Output"),Object(l.b)(r.default,{mdxType:"CLINGENJSON"}),Object(l.b)("h2",{id:"dosage-sensitivity-map"},"Dosage Sensitivity Map"),Object(l.b)("p",null,"The Clinical Genome Resource (ClinGen) consortium is curating genes and regions of the genome to assess whether there is evidence to support that these genes/regions are dosage sensitive and should be targeted on a cytogenomic array. Nirvana reports these annotations for overlapping SVs."),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Publication")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Riggs ER, Nelson T, Merz A, Ackley T, Bunke B, Collins CD, Collinson MN, Fan YS, Goodenberger ML, Golden DM, Haglund-Hazy L, Krgovic D, Lamb AN, Lewis Z, Li G, Liu Y, Meck J, Neufeld-Kaiser W, Runke CK, Sanmann JN, Stavropoulos DJ, Strong E, Su M, Tayeh MK, Kokalj Vokac N, Thorland EC, Andersen E, Martin CL. ",Object(l.b)("strong",{parentName:"p"},"Copy number variant discrepancy resolution using the ClinGen dosage sensitivity map results in updated clinical interpretations in ClinVar.")," ",Object(l.b)("em",{parentName:"p"},"Hum Mutat. 2018 Nov;39(11):1650-1659. doi: 10.1002/humu.23610. PMID: 30095202; PMCID: PMC7374944.")))),Object(l.b)("h3",{id:"tsv-source-files"},"TSV Source files"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Regions")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),"#ClinGen Region Curation Results\n#07 May,2019\n#Genomic Locations are reported on GRCh38 (hg38): GCF_000001405.36\n#https://www.ncbi.nlm.nih.gov/projects/dbvar/clingen\n#to create link: https://www.ncbi.nlm.nih.gov/projects/dbvar/clingen/clingen_region.cgi?id=key\n#ISCA ID    ISCA Region Name    cytoBand    Genomic Location    Haploinsufficiency Score    Haploinsufficiency Description  Haploinsufficiency PMID1    Haploinsufficiency PMID2    Haploinsufficiency PMID3    Triplosensitivity Score Triplosensitivity Description   Triplosensitivity PMID1 Triplosensitivity PMID2 Triplosensitivity PMID3 Date Last Evaluated Loss phenotype OMIM ID  Triplosensitive phenotype OMIM ID\nISCA-46299  Xp11.22 region (includes HUWE1) Xp11.22 tbd 0   No evidence available               3   Sufficient evidence for dosage pathogenicity    22840365    20655035    26692240    2018-11-19\nISCA-46295  15q13.3 recurrent region (D-CHRNA7 to BP5) (includes CHRNA7 and OTUD7A) 15q13.3 chr15:31727418-32153204 3   Sufficient evidence for dosage pathogenicity    19898479    20236110    22775350    40  Dosage sensitivity unlikely 26968334    22420048        2018-05-10\nISCA-46291  7q11.23 recurrent distal region (includes HIP1, YWHAG)  7q11.23 chr7:75528718-76433859  2   Some evidence for dosage pathogenicity  21109226    16971481        1   Little evidence for dosage pathogenicity    21109226    27867344        2018-12-31\nISCA-46290  Xp11.22p11.23 recurrent region (includes SHROOM4)   Xp11.22-p11.23  chrX: 48447780-52444264 0   No evidence available               3   Sufficient evidence for dosage pathogenicity    19716111    21418194    25425167    2017-12-14      300801\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Genes")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),"#ClinGen Gene Curation Results\n#24 May,2019\n#Genomic Locations are reported on GRCh37 (hg19): GCF_000001405.13\n#https://www.ncbi.nlm.nih.gov/projects/dbvar/clingen\n#to create link: https://www.ncbi.nlm.nih.gov/projects/dbvar/clingen/clingen_gene.cgi?sym=Gene Symbol\n#Gene Symbol    Gene ID cytoBand    Genomic Location    Haploinsufficiency Score    Haploinsufficiency Description  Haploinsufficiency PMID1    Haploinsufficiency PMID2    Haploinsufficiency PMID3    Triplosensitivity Score Triplosensitivity Description   Triplosensitivity PMID1 Triplosensitivity PMID2 Triplosensitivity PMID3 Date Last Evaluated Loss phenotype OMIM ID  Triplosensitive phenotype OMIM ID\nA4GALT  53947   22q13.2 chr22:43088121-43117307 30  Gene associated with autosomal recessive phenotype              0   No evidence available               2014-12-11  111400\nAAGAB   79719   15q23   chr15:67493013-67547536 3   Sufficient evidence for dosage pathogenicity    23064416    23000146        0   No evidence available               2013-02-28  148600\n")),Object(l.b)("h3",{id:"dosage-rating-system"},"Dosage Rating System"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Rating"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Possible Clinical Interpretation"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No evidence to suggest that dosage sensitivity is associated with clinical phenotype")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Little evidence suggesting dosage sensitivity is associated with clinical phenotype")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Emerging evidence suggesting dosage sensitivity is associated with clinical phenotype")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sufficient evidence suggesting dosage sensitivity is associated with clinical phenotype")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"30"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Gene associated with autosomal recessive phenotype")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"40"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Dosage sensitivity unlikely")))),Object(l.b)("p",null,"Reference: ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ncbi.nlm.nih.gov/projects/dbvar/clingen/help.shtml"}),"https://www.ncbi.nlm.nih.gov/projects/dbvar/clingen/help.shtml")),Object(l.b)("h3",{id:"download-url-1"},"Download URL"),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"ftp://ftp.clinicalgenome.org/"}),"ftp://ftp.clinicalgenome.org/")),Object(l.b)("h3",{id:"json-output-1"},"JSON Output"),Object(l.b)(c.default,{mdxType:"ClinGenDosageJson"}),Object(l.b)("h2",{id:"gene-disease-validity"},"Gene-Disease Validity"),Object(l.b)("p",null,"The ClinGen Gene-Disease Clinical Validity curation process involves evaluating the strength of evidence supporting or refuting a claim that variation in a particular gene causes a particular disease. Nirvana reports these annotations for genes in the genes section of the JSON."),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Publication")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Strande NT, Riggs ER, Buchanan AH, et al. ",Object(l.b)("strong",{parentName:"p"},"Evaluating the Clinical Validity of Gene-Disease Associations: An Evidence-Based Framework Developed by the Clinical Genome Resource.")," ",Object(l.b)("em",{parentName:"p"},"Am J Hum Genet. 2017;100(6):895-906. doi:10.1016/j.ajhg.2017.04.015")))),Object(l.b)("h3",{id:"source-tsv"},"Source TSV"),Object(l.b)("p",null,"The source data comes in a CSV file that we convert to a TSV as follows:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),"CLINGEN GENE VALIDITY CURATIONS\nFILE CREATED: 2019-05-28\nWEBPAGE: https://search.clinicalgenome.org/kb/gene-validity\n+++++++++++,++++++++++++++,+++++++++++++,++++++++++++++++++,+++++++++,++++++++++++++,+++++++++++++,+++++++++++++++++++\nGENE SYMBOL,GENE ID (HGNC),DISEASE LABEL,DISEASE ID (MONDO),SOP,CLASSIFICATION,ONLINE REPORT,CLASSIFICATION DATE\n+++++++++++,++++++++++++++,+++++++++++++,++++++++++++++++++,+++++++++,++++++++++++++,+++++++++++++,+++++++++++++++++++\nA2ML1,HGNC:23336,Noonan syndrome with multiple lentigines,MONDO_0007893,SOP5,No Reported Evidence,https://search.clinicalgenome.org/kb/gene-validity/59b87033-dd91-4f1e-aec1-c9b1f5124b16--2018-06-07T14:37:47,2018-06-07T14:37:47.175Z\nA2ML1,HGNC:23336,cardiofaciocutaneous syndrome,MONDO_0015280,SOP5,No Reported Evidence,https://search.clinicalgenome.org/kb/gene-validity/fc3c41d8-8497-489b-a350-c9e30016bc6a--2018-06-07T14:31:03,2018-06-07T14:31:03.696Z\nA2ML1,HGNC:23336,Costello syndrome,MONDO_0009026,SOP5,No Reported Evidence,https://search.clinicalgenome.org/kb/gene-validity/ea72ba8d-cf62-44bc-86be-da64e3848eba--2018-06-07T14:34:05,2018-06-07T14:34:05.324Z\n")),Object(l.b)("h3",{id:"download-url-2"},"Download URL"),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://search.clinicalgenome.org/kb/gene-validity.csv"}),"https://search.clinicalgenome.org/kb/gene-validity.csv")),Object(l.b)("h3",{id:"conflict-resolution-1"},"Conflict Resolution"),Object(l.b)("h4",{id:"multiple-classifications"},"Multiple Classifications"),Object(l.b)("p",null,"Here is an example of multiple classifications."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),"$ grep MONDO_0010192 ClinGen-Gene-Disease-Summary-2019-12-02.csv  | grep EDNRB\nEDNRB,HGNC:3180,Waardenburg syndrome type 4A,MONDO_0010192,SOP6,Moderate,https://search.clinicalgenome.org/kb/gene-validity/d7abbd45-7915-437b-849b-dea876bfc2f5--2018-05-08T04:00:00,2018-05-08T04:00:00.000Z\nEDNRB,HGNC:3180,Waardenburg syndrome type 4A,MONDO_0010192,SOP6,Limited,https://search.clinicalgenome.org/kb/gene-validity/73ee9727-60c1-40fd-830f-08c2b513d2ee--2018-05-08T04:00:00,2018-05-08T04:00:00.000Z\n")),Object(l.b)("p",null,"In such cases, we select the more severe classification."),Object(l.b)("h4",{id:"multiple-dates"},"Multiple Dates"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),"$ grep MONDO_0016419 ClinGen-Gene-Disease-Summary-2019-12-02.csv  | grep MUTYH\nMUTYH,HGNC:7527,hereditary breast carcinoma,MONDO_0016419,SOP4,No Reported Evidence,https://search.clinicalgenome.org/kb/gene-validity/9904,2017-05-24T00:00:00\nMUTYH,HGNC:7527,hereditary breast carcinoma,MONDO_0016419,SOP4,No Reported Evidence,https://search.clinicalgenome.org/kb/gene-validity/9902,2017-05-25T00:00:00\n")),Object(l.b)("p",null,"If the classifications are the same, we should select the latest classification date."),Object(l.b)("h3",{id:"json-output-2"},"JSON Output"),Object(l.b)(o.default,{mdxType:"ClinGenGeneValidity"}))}u.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||l;return n?i.a.createElement(m,c(c({ref:t},b),{},{components:n})):i.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var b=2;b<l;b++)r[b]=n[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(6),l=(n(0),n(167)),r={},c={unversionedId:"data-sources/clingen-json",id:"data-sources/clingen-json",isDocsHomePage:!1,title:"clingen-json",description:"`json",source:"@site/docs/data-sources/clingen-json.md",slug:"/data-sources/clingen-json",permalink:"/NirvanaDocumentation/data-sources/clingen-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/clingen-json.md",version:"current"},o=[],b={rightToc:o};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"clingen":[\n   {\n      "chromosome":"17",\n      "begin":525,\n      "end":14667519,\n      "variantType":"copy_number_gain",\n      "id":"nsv996083",\n      "clinicalInterpretation":"pathogenic",\n      "observedGains":1,\n      "validated":true,\n      "phenotypes":[\n         "Intrauterine growth retardation"\n      ],\n      "phenotypeIds":[\n         "HP:0001511",\n         "MedGen:C1853481"\n      ],\n      "reciprocalOverlap":0.00131\n   },\n   {\n      "chromosome":"17",\n      "begin":45835,\n      "end":7600330,\n      "variantType":"copy_number_loss",\n      "id":"nsv869419",\n      "clinicalInterpretation":"pathogenic",\n      "observedLosses":1,\n      "validated":true,\n      "phenotypes":[\n         "Developmental delay AND/OR other significant developmental or morphological phenotypes"\n      ],\n      "reciprocalOverlap":0.00254\n   }\n]\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Field"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"clingen"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"object array"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"chromosome"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Ensembl-style chromosome names")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"begin"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1-based position")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"end"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1-based position")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"variantType"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Any of the\xa0sequence alterations defined here.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"id"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Identifier from the data source. Alternatively a VID")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"clinicalInterpretation"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"see possible values below")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"observedGains"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Range: 0 - (2",Object(l.b)("sup",null,"31"),"\xa0- 1). Only used if copy_number_variation, copy_number_loss, or copy_number_gain.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"observedLosses"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Range: 0 - (2",Object(l.b)("sup",null,"31"),"\xa0- 1). Only used if copy_number_variation, copy_number_loss, or copy_number_gain.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"validated"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"phenotypes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string array"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Description of the phenotype.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"phenotypeIds"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string array"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Description of the phenotype IDs.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"reciprocalOverlap"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"floating point"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Range: 0 - 1. E.g. 0.57 would indicate a 57% reciprocal overlap. Specified up to 5 decimal places (Not reported for Insertions).")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"clinicalInterpretation")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"benign"),Object(l.b)("li",{parentName:"ul"},"curated benign"),Object(l.b)("li",{parentName:"ul"},"curated pathogenic"),Object(l.b)("li",{parentName:"ul"},"likely benign"),Object(l.b)("li",{parentName:"ul"},"likely pathogenic"),Object(l.b)("li",{parentName:"ul"},"path gain"),Object(l.b)("li",{parentName:"ul"},"path loss"),Object(l.b)("li",{parentName:"ul"},"pathogenic"),Object(l.b)("li",{parentName:"ul"},"uncertain")))}s.isMDXComponent=!0},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(6),l=(n(0),n(167)),r={},c={unversionedId:"data-sources/clingen-dosage-json",id:"data-sources/clingen-dosage-json",isDocsHomePage:!1,title:"clingen-dosage-json",description:"`json",source:"@site/docs/data-sources/clingen-dosage-json.md",slug:"/data-sources/clingen-dosage-json",permalink:"/NirvanaDocumentation/data-sources/clingen-dosage-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/clingen-dosage-json.md",version:"current"},o=[],b={rightToc:o};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"clingenDosageSensitivityMap": [{\n    "chromosome": "15",\n    "begin": 30900686,\n    "end": 32153204,\n    "haploinsufficiency": "sufficient evidence suggesting dosage sensitivity is associated with clinical phenotype",\n    "triplosensitivity": "little evidence suggesting dosage sensitivity is associated with clinical phenotype",\n    "reciprocalOverlap": 0.00147,\n    "annotationOverlap": 0.33994\n},\n{\n    "chromosome": "15",\n    "begin": 31727418,\n    "end": 32153204,\n    "haploinsufficiency": "sufficient evidence suggesting dosage sensitivity is associated with clinical phenotype",\n    "triplosensitivity": "dosage sensitivity unlikely",\n    "reciprocalOverlap": 0.00147,\n    "annotationOverlap": 1\n}]\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Field"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"clingenDosageSensitivityMap"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"object array"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"chromosome"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Ensembl-style chromosome names")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"begin"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1-based position")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"end"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1-based position")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"haploinsufficiency"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"see possible values below")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"triplosensitivity"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"(same as haploinsufficiency)\xa0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"reciprocalOverlap"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"floating point"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Range: 0 - 1. E.g. 0.57 would indicate a 57% reciprocal overlap. Specified up to 5 decimal places (Not reported for Insertions).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"annotationOverlap"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"floating point"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Range: 0 - 1. E.g. 0.57 would indicate a 57% reciprocal overlap. Specified up to 5 decimal places (Not reported for Insertions).")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"haploinsufficiency and triplosensitivity")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"no evidence to suggest that dosage sensitivity is associated with clinical phenotype"),Object(l.b)("li",{parentName:"ul"},"little evidence suggesting dosage sensitivity is associated with clinical phenotype"),Object(l.b)("li",{parentName:"ul"},"emerging evidence suggesting dosage sensitivity is associated with clinical phenotype"),Object(l.b)("li",{parentName:"ul"},"sufficient evidence suggesting dosage sensitivity is associated with clinical phenotype"),Object(l.b)("li",{parentName:"ul"},"gene associated with autosomal recessive phenotype"),Object(l.b)("li",{parentName:"ul"},"dosage sensitivity unlikely")))}s.isMDXComponent=!0},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(6),l=(n(0),n(167)),r={},c={unversionedId:"data-sources/clingen-gene-validity-json",id:"data-sources/clingen-gene-validity-json",isDocsHomePage:!1,title:"clingen-gene-validity-json",description:"`json",source:"@site/docs/data-sources/clingen-gene-validity-json.md",slug:"/data-sources/clingen-gene-validity-json",permalink:"/NirvanaDocumentation/data-sources/clingen-gene-validity-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/clingen-gene-validity-json.md",version:"current"},o=[],b={rightToc:o};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"clingenGeneValidity":[\n   {\n      "diseaseId":"MONDO_0007893",\n      "disease":"Noonan syndrome with multiple lentigines",\n      "classification":"no reported evidence",\n      "classificationDate":"2018-06-07"\n   },\n   {\n      "diseaseId":"MONDO_0015280",\n      "disease":"cardiofaciocutaneous syndrome",\n      "classification":"no reported evidence",\n      "classificationDate":"2018-06-07"\n   }\n]\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Field"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"clingenGeneValidity"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"object"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"diseaseId"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Monarch Disease Ontology ID (MONDO)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"disease"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"disease label")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"classification"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"see below for possible values")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"classificationDate"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yyyy-MM-dd")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"classification")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"no reported evidence"),Object(l.b)("li",{parentName:"ul"},"disputed"),Object(l.b)("li",{parentName:"ul"},"limited"),Object(l.b)("li",{parentName:"ul"},"moderate"),Object(l.b)("li",{parentName:"ul"},"definitive"),Object(l.b)("li",{parentName:"ul"},"strong"),Object(l.b)("li",{parentName:"ul"},"refuted")))}s.isMDXComponent=!0}}]);