---
title: Annotating COVID-19
---

The Nirvana development team is mainly focused on providing annotations for the human genome. This focus allows us to maximize our resources towards understanding human health.

However, nothing in our architecture prevents us from supporting other genomes. Earlier this year, we had an opportunity to put that statement to the test - we added support for annotating the **SARS-CoV-2** genome, the virus that causes the **COVID-19** disease.

In addition to normal transcript annotation, we also supply:
* allele frequencies
* protein domains

:::tip SARS-CoV-2 Galaxy Project
The allele frequencies used by Nirvana were provided by the [SARS-CoV-2 Galaxy Project](https://github.com/galaxyproject/SARS-CoV-2). This is an international effort that provides ongoing analysis of COVID-19 using Galaxy, BioConda, and public research infrastructures.
:::

## Getting Nirvana

If you don't have Nirvana already, please consult our [Getting Started](getting-started) page first.

## Downloading the COVID-19 data files

Here's [a data zip file](https://illumina.github.io/NirvanaDocumentation/files/Covid19Data.zip) containing new gene models, reference, and external data sources for SARS-CoV-2:

Just go to the directory that contains your Nirvana `Data` directory.

```bash
cd ~/Nirvana
curl -O https://illumina.github.io/NirvanaDocumentation/files/Covid19Data.zip
unzip Covid19Data.zip
```

## Download a COVID-19 VCF file

Here's [a COVID-19 VCF file](https://illumina.github.io/NirvanaDocumentation/files/Covid19Mutations.vcf.gz) you can play around with:

```bash
curl -O https://illumina.github.io/NirvanaDocumentation/files/Covid19Mutations.vcf.gz
```

## Running Nirvana

Once you have downloaded the data sets, use the following command to annotate your VCF:

```bash
dotnet bin/Release/netcoreapp2.1/Nirvana.dll \
     -c Data/Cache/SARS-CoV-2/SARS-CoV-2 \
     --sd Data/SupplementaryAnnotation/SARS-CoV-2 \
     -r Data/References/SARS-CoV-2.ASM985889v3.dat \
     -i Covid19Mutations.vcf.gz \
     -o Covid19Mutations
```

* the `-c` argument specifies the cache prefix
* the `--sd` argument specifies the supplementary annotation directory
* the `-r` argument specifies the compressed reference path
* the `-i` argument specifies the input VCF path
* the `-o` argument specifies the output filename prefix

When running Nirvana, performance metrics are shown as it evaluates each chromosome in the input VCF file:

```bash
---------------------------------------------------------------------------
Nirvana                                             (c) 2020 Illumina, Inc.
Stromberg, Roy, Lajugie, Jiang, Li, and Kang                         3.12.0
---------------------------------------------------------------------------

Initialization                                         Time     Positions/s
---------------------------------------------------------------------------
Cache                                               00:00:00.0
SA Position Scan                                    00:00:00.0         1763

Reference                                Preload    Annotation   Variants/s
---------------------------------------------------------------------------
NC_045512                               00:00:00.0  00:00:00.1          173

Summary                                                Time         Percent
---------------------------------------------------------------------------
Initialization                                      00:00:00.0        2.0 %
Preload                                             00:00:00.0        0.3 %
Annotation                                          00:00:00.1        6.0 %

Time: 00:00:01.5
```

The output will be a JSON file called `Covid19Mutations.json.gz`. Here's [the full JSON file](https://illumina.github.io/NirvanaDocumentation/files/Covid19Mutations.json.gz).

## Investigating the Results

Here's an example of what a COVID-19 variant looks like in the JSON output:

```json
{
   "chromosome":"NC_045512.2",
   "position":27323,
   "refAllele":"C",
   "altAlleles":[
      "T"
   ],
   "filters":[
      "PASS"
   ],
   "proteinDomains":[
      {
         "start":27202,
         "end":27384,
         "proteinId":"YP_009724394.1",
         "domainId":"cl13556",
         "domainName":"Sars6 super family",
         "reciprocalOverlap":0.00546,
         "annotationOverlap":0.00546
      }
   ],
   "variants":[
      {
         "vid":"NC_045512.2-27323-C-T",
         "chromosome":"NC_045512.2",
         "begin":27323,
         "end":27323,
         "refAllele":"C",
         "altAllele":"T",
         "variantType":"SNV",
         "hgvsg":"NC_045512.2:g.27323C>T",
         "alleleFrequency":{
            "refAllele":"C",
            "altAllele":"T",
            "allAc":8,
            "allAn":1058,
            "allAf":0.007561
         },
         "transcripts":[
            {
               "transcript":"YP_009724394.1",
               "source":"RefSeq",
               "bioType":"protein_coding",
               "codons":"tCt/tTt",
               "aminoAcids":"S/F",
               "cdnaPos":"122",
               "cdsPos":"122",
               "exons":"1/1",
               "proteinPos":"41",
               "geneId":"43740572",
               "hgnc":"ORF6",
               "consequence":[
                  "missense_variant"
               ],
               "hgvsc":"YP_009724394.1:c.122C>T",
               "hgvsp":"YP_009724394.1:p.(Ser41Phe)",
               "proteinId":"YP_009724394.1"
            },
            {
               "transcript":"YP_009724395.1",
               "source":"RefSeq",
               "bioType":"protein_coding",
               "geneId":"43740573",
               "hgnc":"ORF7a",
               "consequence":[
                  "upstream_gene_variant"
               ],
               "proteinId":"YP_009724395.1"
            }
         ]
      }
   ]
}
```
