---
title: Parsing Illumina Annotator JSON
---

## Why JSON?

VCF is a fantastic file format that was developed during the methods development activities within the 1000 Genomes Project. Prior to that, variant callers were outputting information into a variety of tab-delimited formats. Sometimes based on existing standards (like GFF), while most were proprietary. The primary intent of VCF files was to provide a human-readable, standardized representation of genetic variants. Similar to SAM/BAM files, VCF files used BCF files as their binary counterpart.

In the very beginning, Illumina Annotator offered VCF output for annotation. While many variant annotators offer an option to output VCF files, one could argue if they are still human-readable. Here's an example from a VCF file produced by VEP v102:

```
chr3	107840527	.	A	ATTTTTTTTT,AT,ATTTTTTTT	153.51	PASS	AN=6;MQ=244.10;
SOR=1.739;QD=2.24;DP=57;AF=0.500,0.167,0.333;FS=0.000;AC=3,1,2;CSQ=TTTTTTTTT|
intron_variant&non_coding_transcript_variant|MODIFIER|LINC00635|ENSG00000241469|
Transcript|ENST00000608506.6|lncRNA||4/4|ENST00000608506.6:n.622-132_622-124dup|||||||
rs35564779||-1||HGNC|HGNC:27184|||5|||||||||Ensembl|||||||||||||||||||||||||||||||||||
|||||||||0.792|-0.109757,T|intron_variant&non_coding_transcript_variant|MODIFIER|
LINC00635|ENSG00000241469|Transcript|ENST00000608506.6|lncRNA||4/4|
ENST00000608506.6:n.622-124dup|||||||rs35564779||-1||HGNC|HGNC:27184|||5|||||||||
Ensembl||||||||||||||||||||||||||||||||||||||||||||0.932|-0.075622,TTTTTTTT|
intron_variant&non_coding_transcript_variant|MODIFIER|LINC00635|ENSG00000241469|
Transcript|ENST00000608506.6|lncRNA||4/4|ENST00000608506.6:n.622-131_622-124dup|||||||
rs35564779||-1||HGNC|HGNC:27184|||5|||||||||Ensembl|||||||||||||||||||||||||||||||||||
|||||||||0.808|-0.105490,TTTTTTTTT|intron_variant&non_coding_transcript_variant|
MODIFIER|LINC00636|ENSG00000240423|Transcript|ENST00000649048.1|lncRNA||2/3|
ENST00000649048.1:n.179+5223_179+5231dup|||||||rs35564779||1||HGNC|HGNC:27702|||||||||
|||Ensembl||||||||||||||||||||||||||||||||||||||||||||0.792|-0.109757, (etc.)
```

Originally Illumina Annotator used the same VCF notation as VEP uses above. The problem is that you end up with a large amount of text that is difficult to parse out by eye and requires the use of several delimiters to divide the information into useful segments. When we originally annotated this variant using VEP, **this single variant used 488,909 bytes** (almost ½ MB). Surprisingly, we found that this broke some downstream tools that had preconceived notions of how long a single line could be in a VCF file.

:::caution
Whitespace is not allowed in the VCF INFO field. This means that if you wanted to express a gene description from OMIM: **"HRAS PROTOONCOGENE, GTPase; HRAS"**, you would need to replace the spaces with something else like an underline. You would also need to hope that the VCF parser correctly handles embedded commas and semicolons in the description.
:::

### What do other annotators use?

Unfortunately, file format standardization has not made it all the way to variant annotation yet. The [GA4GH Annotation group](https://ga4gh-gks.github.io/variant_annotation.html) had many discussions on the topic several years ago. While a set of JSON schemas were created in that effort, there wasn't enough momentum to make this a new standard.

While there is some overlap in general file formats (JSON vs VCF vs TSV), none of those are compatible with each other. I.e. the VCF representation in VEP and snpEff is different just like the JSON schemas used by VEP, Illumina Annotator, and GA4GH are different.

| Source  | Formats        |
|---------|----------------|
| VEP     | **JSON**, TSV, VCF |
| snpEff  | VCF            |
| Annovar | TSV            |
| Illumina Annotator | **JSON**           |
| GA4GH   | **JSON**           |

We are interested in working together with others in the annotation space to develop a common annotation file format. Our belief is that this would accelerate methods development and benchmarking activities within annotation much in the same way the creation of SAM/BAM & VCF/BCF accelerated secondary analysis development.

### What do we gain by using JSON?

* JSON files are better at showing hierarchical and other relational data. For example when we output ClinVar data, we often want to output several overlapping RCV entries (variants coupled with a disease phenotype). In each, we would want to output a list of phenotypes, clinical significance, etc. That is difficult to accomplish in a human-readable way using VCF files (without resorting to growing lexicon of delimiters).
* JSON files use JavaScript data types, while VCF INFO fields don't directly have data types. Instead, external metadata located in the VCF header is required to indicated the preferred data type.
* JSON files are more verbose. Often this is seen as a negative, but compression largely compensates for this. Given the following excerpt from the VCF example above `HGNC:27184|||5|||||||||Ensembl` it's not immediately obvious what the `5` refers to (without checking the VCF header for details). With JSON files, you would always see a key name associated with a value.
* JSON files can be natively imported into different search and analytics solutions like Elasticsearch and Snowflake.
* JSON strings do not have any limitations on the use of whitespace.

## Parsing JSON

Our JSON files are organized similarly to original VCF variants:

![](../file-formats/JSON-Layout.svg)

Illumina Annotator JSON files can get very large and sometimes we receive feedback that a bioinformatician tried to read the JSON file into Python or R resulting in a program that ran out of available RAM. This happens because those parsers try to load everything into memory all at once.

To get around those issues, we play some clever tricks with newlines that enables our users to parse our JSON files quickly and efficiently.

### Organization

Our JSON file is arranged as follows:
* the header section is located on the first line
* each line after that corresponds to a position (same as a row in a VCF file)
  * until you reach the genes section `],"genes":[`
* each line after that corresponds to a gene
  * until you reach the end `]}`

Knowing this, you can load each position line as an independent JSON object and extract the information you need. 

:::info Jupyter Notebook
To demonstrate this, we have put together a [Jupyter notebook demonstrating how to do this in Python](https://github.com/Illumina/IlluminaAnnotatorDocumentation/blob/master/static/files/parse-json-python.ipynb) and a [R version](https://github.com/Illumina/IlluminaAnnotatorDocumentation/blob/master/static/files/parse-json-r.ipynb) as well.
:::

### JASIX

One of the tools that we really like in the VCF ecosystem is [tabix](https://dx.doi.org/10.1093%2Fbioinformatics%2Fbtq671). Unfortunately, tabix only works for tab-delimited file formats. As a result, we created a similar tool for Illumina Annotator JSON files called JASIX.

Here's an example of how you might use JASIX:

```bash
dotnet bin/Release/net6.0/Jasix.dll -i dragen.json.gz -q chr1:942450-942455
```

* the `-i` argument specifies the Illumina Annotator JSON path
* the `-q` argument specifies a genomic range *(you can use as many of these as you want)*

JASIX also includes additional options for showing the Illumina Annotator header or for extracting different sections (like the genes section).

The output from JASIX is compliant JSON object shown in pretty-printed form:

```json
{"positions":[
{
  "chromosome": "chr1",
  "position": 942451,
  "refAllele": "T",
  "altAlleles": [
    "C"
  ],
  "quality": 484.23,
  "filters": [
    "PASS"
  ],
  "cytogeneticBand": "1p36.33",
  "samples": [
    {
      "genotype": "1/1",
      "variantFrequencies": [
        1
      ],
      "totalDepth": 21,
      "genotypeQuality": 60,
      "alleleDepths": [
        0,
        21
      ]
    },
    {
      "genotype": "1/1",
      "variantFrequencies": [
        1
      ],
      "totalDepth": 32,
      "genotypeQuality": 93,
      "alleleDepths": [
        0,
        32
      ]
    },
    {
      "genotype": "1/1",
      "variantFrequencies": [
        1
      ],
      "totalDepth": 36,
      "genotypeQuality": 105,
      "alleleDepths": [
        0,
        36
      ]
    }
  ],
  "variants": [
    {
      "vid": "1-942451-T-C",
      "chromosome": "chr1",
      "begin": 942451,
      "end": 942451,
      "refAllele": "T",
      "altAllele": "C",
      "variantType": "SNV",
      "hgvsg": "NC_000001.11:g.942451T>C",
      "phylopScore": -0.1,
      "clinvar": [
        {
          "id": "VCV000836156.1",
          "reviewStatus": "criteria provided, single submitter",
          "significance": [
            "uncertain significance"
          ],
          "refAllele": "T",
          "altAllele": "T",
          "lastUpdatedDate": "2020-08-20"
        },
        {
          "id": "RCV001037211.1",
          "variationId": 836156,
          "reviewStatus": "criteria provided, single submitter",
          "alleleOrigins": [
            "germline"
          ],
          "refAllele": "T",
          "altAllele": "T",
          "phenotypes": [
            "not provided"
          ],
          "medGenIds": [
            "CN517202"
          ],
          "significance": [
            "uncertain significance"
          ],
          "lastUpdatedDate": "2020-08-20",
          "pubMedIds": [
            "28492532"
          ]
        }
      ],
      "dbsnp": [
        "rs6672356"
      ],
      "gnomad": {
        "coverage": 25,
        "allAf": 0.999855,
        "allAn": 123742,
        "allAc": 123724,
        "allHc": 61853,
        "afrAf": 0.999416,
        "afrAn": 10278,
        "afrAc": 10272,
        "afrHc": 5133,
        "amrAf": 0.99995,
        "amrAn": 20008,
        "amrAc": 20007,
        "amrHc": 10003,
        "easAf": 1,
        "easAn": 6054,
        "easAc": 6054,
        "easHc": 3027,
        "finAf": 1,
        "finAn": 8696,
        "finAc": 8696,
        "finHc": 4348,
        "nfeAf": 0.999899,
        "nfeAn": 49590,
        "nfeAc": 49585,
        "nfeHc": 24790,
        "asjAf": 1,
        "asjAn": 7208,
        "asjAc": 7208,
        "asjHc": 3604,
        "sasAf": 0.99967,
        "sasAn": 18160,
        "sasAc": 18154,
        "sasHc": 9074,
        "othAf": 1,
        "othAn": 3748,
        "othAc": 3748,
        "othHc": 1874,
        "maleAf": 0.9999,
        "maleAn": 69780,
        "maleAc": 69773,
        "maleHc": 34883,
        "femaleAf": 0.999796,
        "femaleAn": 53962,
        "femaleAc": 53951,
        "femaleHc": 26970,
        "controlsAllAf": 0.999815,
        "controlsAllAn": 48654,
        "controlsAllAc": 48645
      },
      "oneKg": {
        "allAf": 1,
        "afrAf": 1,
        "amrAf": 1,
        "easAf": 1,
        "eurAf": 1,
        "sasAf": 1,
        "allAn": 5008,
        "afrAn": 1322,
        "amrAn": 694,
        "easAn": 1008,
        "eurAn": 1006,
        "sasAn": 978,
        "allAc": 5008,
        "afrAc": 1322,
        "amrAc": 694,
        "easAc": 1008,
        "eurAc": 1006,
        "sasAc": 978
      },
      "primateAI": [
        {
          "hgnc": "SAMD11",
          "scorePercentile": 0.87
        }
      ],
      "revel": {
        "score": 0.145
      },
      "topmed": {
        "allAf": 0.999809,
        "allAn": 125568,
        "allAc": 125544,
        "allHc": 62760
      },
      "transcripts": [
        {
          "transcript": "ENST00000420190.6",
          "source": "Ensembl",
          "bioType": "protein_coding",
          "geneId": "ENSG00000187634",
          "hgnc": "SAMD11",
          "consequence": [
            "downstream_gene_variant"
          ],
          "proteinId": "ENSP00000411579.2"
        },
        {
          "transcript": "ENST00000342066.7",
          "source": "Ensembl",
          "bioType": "protein_coding",
          "codons": "Tgg/Cgg",
          "aminoAcids": "W/R",
          "cdnaPos": "1110",
          "cdsPos": "1027",
          "exons": "10/14",
          "proteinPos": "343",
          "geneId": "ENSG00000187634",
          "hgnc": "SAMD11",
          "consequence": [
            "missense_variant"
          ],
          "hgvsc": "ENST00000342066.7:c.1027T>C",
          "hgvsp": "ENSP00000342313.3:p.(Trp343Arg)",
          "polyPhenScore": 0,
          "polyPhenPrediction": "benign",
          "proteinId": "ENSP00000342313.3",
          "siftScore": 1,
          "siftPrediction": "tolerated"
        },
        {
          "transcript": "ENST00000618181.4",
          "source": "Ensembl",
          "bioType": "protein_coding",
          "codons": "Tgg/Cgg",
          "aminoAcids": "W/R",
          "cdnaPos": "732",
          "cdsPos": "652",
          "exons": "7/11",
          "proteinPos": "218",
          "geneId": "ENSG00000187634",
          "hgnc": "SAMD11",
          "consequence": [
            "missense_variant"
          ],
          "hgvsc": "ENST00000618181.4:c.652T>C",
          "hgvsp": "ENSP00000480870.1:p.(Trp218Arg)",
          "polyPhenScore": 0,
          "polyPhenPrediction": "benign",
          "proteinId": "ENSP00000480870.1",
          "siftScore": 1,
          "siftPrediction": "tolerated"
        },
        {
          "transcript": "ENST00000622503.4",
          "source": "Ensembl",
          "bioType": "protein_coding",
          "codons": "Tgg/Cgg",
          "aminoAcids": "W/R",
          "cdnaPos": "1110",
          "cdsPos": "1030",
          "exons": "10/14",
          "proteinPos": "344",
          "geneId": "ENSG00000187634",
          "hgnc": "SAMD11",
          "consequence": [
            "missense_variant"
          ],
          "hgvsc": "ENST00000622503.4:c.1030T>C",
          "hgvsp": "ENSP00000482138.1:p.(Trp344Arg)",
          "isCanonical": true,
          "polyPhenScore": 0,
          "polyPhenPrediction": "benign",
          "proteinId": "ENSP00000482138.1",
          "siftScore": 1,
          "siftPrediction": "tolerated"
        },
        {
          "transcript": "ENST00000618323.4",
          "source": "Ensembl",
          "bioType": "protein_coding",
          "codons": "cTg/cCg",
          "aminoAcids": "L/P",
          "cdnaPos": "712",
          "cdsPos": "632",
          "exons": "8/12",
          "proteinPos": "211",
          "geneId": "ENSG00000187634",
          "hgnc": "SAMD11",
          "consequence": [
            "missense_variant"
          ],
          "hgvsc": "ENST00000618323.4:c.632T>C",
          "hgvsp": "ENSP00000480678.1:p.(Leu211Pro)",
          "polyPhenScore": 0,
          "polyPhenPrediction": "unknown",
          "proteinId": "ENSP00000480678.1",
          "siftScore": 0.03,
          "siftPrediction": "deleterious - low confidence"
        },
        {
          "transcript": "ENST00000616016.4",
          "source": "Ensembl",
          "bioType": "protein_coding",
          "codons": "ccT/ccC",
          "aminoAcids": "P",
          "cdnaPos": "944",
          "cdsPos": "864",
          "exons": "9/13",
          "proteinPos": "288",
          "geneId": "ENSG00000187634",
          "hgnc": "SAMD11",
          "consequence": [
            "synonymous_variant"
          ],
          "hgvsc": "ENST00000616016.4:c.864T>C",
          "hgvsp": "ENST00000616016.4:c.864T>C(p.(Pro288=))",
          "proteinId": "ENSP00000478421.1"
        },
        {
          "transcript": "ENST00000618779.4",
          "source": "Ensembl",
          "bioType": "protein_coding",
          "codons": "Tgg/Cgg",
          "aminoAcids": "W/R",
          "cdnaPos": "921",
          "cdsPos": "841",
          "exons": "9/13",
          "proteinPos": "281",
          "geneId": "ENSG00000187634",
          "hgnc": "SAMD11",
          "consequence": [
            "missense_variant"
          ],
          "hgvsc": "ENST00000618779.4:c.841T>C",
          "hgvsp": "ENSP00000484256.1:p.(Trp281Arg)",
          "polyPhenScore": 0,
          "polyPhenPrediction": "benign",
          "proteinId": "ENSP00000484256.1",
          "siftScore": 1,
          "siftPrediction": "tolerated"
        },
        {
          "transcript": "ENST00000616125.4",
          "source": "Ensembl",
          "bioType": "protein_coding",
          "codons": "Tgg/Cgg",
          "aminoAcids": "W/R",
          "cdnaPos": "783",
          "cdsPos": "703",
          "exons": "8/12",
          "proteinPos": "235",
          "geneId": "ENSG00000187634",
          "hgnc": "SAMD11",
          "consequence": [
            "missense_variant"
          ],
          "hgvsc": "ENST00000616125.4:c.703T>C",
          "hgvsp": "ENSP00000484643.1:p.(Trp235Arg)",
          "polyPhenScore": 0,
          "polyPhenPrediction": "benign",
          "proteinId": "ENSP00000484643.1",
          "siftScore": 1,
          "siftPrediction": "tolerated"
        },
        {
          "transcript": "ENST00000620200.4",
          "source": "Ensembl",
          "bioType": "protein_coding",
          "codons": "cTg/cCg",
          "aminoAcids": "L/P",
          "cdnaPos": "427",
          "cdsPos": "347",
          "exons": "5/9",
          "proteinPos": "116",
          "geneId": "ENSG00000187634",
          "hgnc": "SAMD11",
          "consequence": [
            "missense_variant"
          ],
          "hgvsc": "ENST00000620200.4:c.347T>C",
          "hgvsp": "ENSP00000484820.1:p.(Leu116Pro)",
          "polyPhenScore": 0,
          "polyPhenPrediction": "unknown",
          "proteinId": "ENSP00000484820.1",
          "siftScore": 0.16,
          "siftPrediction": "tolerated - low confidence"
        },
        {
          "transcript": "ENST00000617307.4",
          "source": "Ensembl",
          "bioType": "protein_coding",
          "codons": "Tgg/Cgg",
          "aminoAcids": "W/R",
          "cdnaPos": "867",
          "cdsPos": "787",
          "exons": "9/13",
          "proteinPos": "263",
          "geneId": "ENSG00000187634",
          "hgnc": "SAMD11",
          "consequence": [
            "missense_variant"
          ],
          "hgvsc": "ENST00000617307.4:c.787T>C",
          "hgvsp": "ENSP00000482090.1:p.(Trp263Arg)",
          "polyPhenScore": 0,
          "polyPhenPrediction": "benign",
          "proteinId": "ENSP00000482090.1",
          "siftScore": 1,
          "siftPrediction": "tolerated"
        },
        {
          "transcript": "NM_152486.2",
          "source": "RefSeq",
          "bioType": "protein_coding",
          "codons": "Cgg/Cgg",
          "aminoAcids": "R",
          "cdnaPos": "1107",
          "cdsPos": "1027",
          "exons": "10/14",
          "proteinPos": "343",
          "geneId": "148398",
          "hgnc": "SAMD11",
          "consequence": [
            "synonymous_variant"
          ],
          "hgvsc": "NM_152486.2:c.1027T>C",
          "hgvsp": "NM_152486.2:c.1027T>C(p.(Arg343=))",
          "isCanonical": true,
          "proteinId": "NP_689699.2"
        },
        {
          "transcript": "ENST00000341065.8",
          "source": "Ensembl",
          "bioType": "protein_coding",
          "codons": "Tgg/Cgg",
          "aminoAcids": "W/R",
          "cdnaPos": "750",
          "cdsPos": "751",
          "exons": "8/12",
          "proteinPos": "251",
          "geneId": "ENSG00000187634",
          "hgnc": "SAMD11",
          "consequence": [
            "missense_variant"
          ],
          "hgvsc": "ENST00000341065.8:c.750T>C",
          "hgvsp": "ENSP00000349216.4:p.(Trp251Arg)",
          "polyPhenScore": 0,
          "polyPhenPrediction": "benign",
          "proteinId": "ENSP00000349216.4",
          "siftScore": 1,
          "siftPrediction": "tolerated"
        },
        {
          "transcript": "ENST00000455979.1",
          "source": "Ensembl",
          "bioType": "protein_coding",
          "codons": "Tgg/Cgg",
          "aminoAcids": "W/R",
          "cdnaPos": "507",
          "cdsPos": "508",
          "exons": "4/7",
          "proteinPos": "170",
          "geneId": "ENSG00000187634",
          "hgnc": "SAMD11",
          "consequence": [
            "missense_variant"
          ],
          "hgvsc": "ENST00000455979.1:c.507T>C",
          "hgvsp": "ENSP00000412228.1:p.(Trp170Arg)",
          "polyPhenScore": 0,
          "polyPhenPrediction": "benign",
          "proteinId": "ENSP00000412228.1",
          "siftScore": 1,
          "siftPrediction": "tolerated"
        },
        {
          "transcript": "ENST00000478729.1",
          "source": "Ensembl",
          "bioType": "processed_transcript",
          "geneId": "ENSG00000187634",
          "hgnc": "SAMD11",
          "consequence": [
            "downstream_gene_variant"
          ]
        },
        {
          "transcript": "ENST00000474461.1",
          "source": "Ensembl",
          "bioType": "retained_intron",
          "cdnaPos": "389",
          "exons": "3/4",
          "geneId": "ENSG00000187634",
          "hgnc": "SAMD11",
          "consequence": [
            "non_coding_transcript_exon_variant"
          ],
          "hgvsc": "ENST00000474461.1:n.389T>C"
        },
        {
          "transcript": "ENST00000466827.1",
          "source": "Ensembl",
          "bioType": "retained_intron",
          "cdnaPos": "191",
          "exons": "2/2",
          "geneId": "ENSG00000187634",
          "hgnc": "SAMD11",
          "consequence": [
            "non_coding_transcript_exon_variant"
          ],
          "hgvsc": "ENST00000466827.1:n.191T>C"
        },
        {
          "transcript": "ENST00000464948.1",
          "source": "Ensembl",
          "bioType": "retained_intron",
          "cdnaPos": "286",
          "exons": "1/2",
          "geneId": "ENSG00000187634",
          "hgnc": "SAMD11",
          "consequence": [
            "non_coding_transcript_exon_variant"
          ],
          "hgvsc": "ENST00000464948.1:n.286T>C"
        },
        {
          "transcript": "NM_015658.3",
          "source": "RefSeq",
          "bioType": "protein_coding",
          "geneId": "26155",
          "hgnc": "NOC2L",
          "consequence": [
            "downstream_gene_variant"
          ],
          "isCanonical": true,
          "proteinId": "NP_056473.2"
        },
        {
          "transcript": "ENST00000483767.5",
          "source": "Ensembl",
          "bioType": "retained_intron",
          "geneId": "ENSG00000188976",
          "hgnc": "NOC2L",
          "consequence": [
            "downstream_gene_variant"
          ]
        },
        {
          "transcript": "ENST00000327044.6",
          "source": "Ensembl",
          "bioType": "protein_coding",
          "geneId": "ENSG00000188976",
          "hgnc": "NOC2L",
          "consequence": [
            "downstream_gene_variant"
          ],
          "isCanonical": true,
          "proteinId": "ENSP00000317992.6"
        },
        {
          "transcript": "ENST00000477976.5",
          "source": "Ensembl",
          "bioType": "retained_intron",
          "geneId": "ENSG00000188976",
          "hgnc": "NOC2L",
          "consequence": [
            "downstream_gene_variant"
          ]
        },
        {
          "transcript": "ENST00000496938.1",
          "source": "Ensembl",
          "bioType": "processed_transcript",
          "geneId": "ENSG00000188976",
          "hgnc": "NOC2L",
          "consequence": [
            "downstream_gene_variant"
          ]
        }
      ]
    }
  ]
}
]}
```
