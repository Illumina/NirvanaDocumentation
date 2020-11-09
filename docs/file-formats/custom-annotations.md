---
title: Custom Annotations
---

## Overview

While the team tries to keep data sources up-to-date, you might want to start incorporate new annotations ahead of our update cycle. Another 
common use case involves protected health information (PHI). Custom annotations are a mechanism that enables both use cases.

Here are some examples of how our collaborators use custom annotations:
* associating context from both a patient-level and a patient cohort level with the variant annotations
* adding content that is licensed (e.g. HGMD) to the variant annotations

At the moment, we have two different custom annotation file formats. One provides additional annotations to variants (both small variants and SVs)
while the other caters to gene annotations.

In both cases, the custom annotation file format is a tab-delimited file that is separated into two parts: the header & the data.

The header is where you can customize how you want the data to appear in the JSON file and provide context about the genome assembly and how
Nirvana should match the variants.

At Illumina, there are usually many components downstream of Nirvana that have to parse our annotations. If a customer provides a custom
annotation, those downstream tools need to understand more about the data such as:

* data type (e.g. number, boolean, or a string)
* data category (e.g. is this an allele count, allele number, allele frequency, etc.)
* associated population (i.e. if this is an allele frequency)

For each custom annotation, Nirvana uses this context to create a [JSON schema](https://json-schema.org/) that can be sent to downstream tools. If
a tool knows that this is an allele frequency, it can validate user input to ensure that it's in the range of [0, 1].

## Variant File Format

### Basic Allele Frequency Example

#### Create the Custom Annotation TSV

Imagine that you want to create a basic allele frequency custom annotation for small variants. If we visualized the tab-delimited file 
(TSV), it would look something like this:


| Col 1                   | Col 2    | Col 3 | Col 4 | Col 5           |
|:------------------------|:---------|:------|:------|:----------------|
| #title=MyDataSource     |          |       |       |                 |
| #assembly=GRCh37        |          |       |       |                 |
| #matchVariantsBy=allele |          |       |       |                 |
| #CHROM                  | POS      | REF   | ALT   | allAf           |
| #categories             | .        | .     | .     | AlleleFrequency |
| #descriptions           | .        | .     | .     | ALL             |
| #type                   | .        | .     | .     | number          |
| chr16                   | 23603511 | TGA   | T     | 0.000006579     |
| chr16                   | 68801894 | G     | A     | 0.000006569     | 
| chr19                   | 11107436 | G     | A     | 0.00003291      |

You can also [download this example TSV](CA/MyDataSource.tsv).

Let's go over the header and discuss the contents:
* `title` indicates the name of the JSON key
* `assembly` indicates that this data is only valid for `GRCh38`
* `matchVariantsBy` indicates that we should only match the annotations if they are allele-specific
* `categories` provides hints to downstream tools on how they might want to treat the data. In this case, we indicate that it's an allele 
frequency.
* `descriptions` are used in special circumstances to provide more context. Even though column 5 is called `allAf`, it might not be clear to a 
downstream tool that this means a global allele frequency using all sub-populations. In this case, `ALL` indicates the intended population.
* `type` indicates to downstream tools the data type. Since allele frequencies are numbers, we'll write `number` in this column.

#### Convert to Nirvana Format

First we need to convert the TSV file to Nirvana's native file format and let's put that file in a new directory called CA:

```Bash
$ mkdir CA
$ dotnet bin/Release/netcoreapp2.1/SAUtils.dll customvar \
  -r Data/References/Homo_sapiens.GRCh38.Nirvana.dat -i MyDataSource.tsv -o CA
---------------------------------------------------------------------------
SAUtils                                             (c) 2020 Illumina, Inc.
Stromberg, Roy, Lajugie, Jiang, Li, and Kang                         3.12.0
---------------------------------------------------------------------------

Chromosome 16 completed in 00:00:00.1
Chromosome 19 completed in 00:00:00.0

Time: 00:00:00.2
```

#### Annotate with Nirvana

Let's annotate the following VCF (notice that it's one of the variants that we have in our custom annotation):

```
##fileformat=VCFv4.1
#CHROM	POS	ID	REF	ALT	QUAL	FILTER	INFO
16	68801894	.	G	A	.	.	.
```

You can also [download this example VCF](CA/TestCA.vcf).

Since Nirvana can handle multiple directories with external annotations, all we need to do is specify our new CA directory in addition to
the normal Nirvana command-line.

```Bash {3}
$ dotnet bin/Release/netcoreapp2.1/Nirvana.dll -c Data/Cache/GRCh38/Both \
  -r Data/References/Homo_sapiens.GRCh38.Nirvana.dat \
  --sd Data/SupplementaryAnnotation/GRCh38 --sd CA -i TestCA.vcf -o TestCA
---------------------------------------------------------------------------
Nirvana                                             (c) 2020 Illumina, Inc.
Stromberg, Roy, Lajugie, Jiang, Li, and Kang                         3.12.0
---------------------------------------------------------------------------

Initialization                                         Time     Positions/s
---------------------------------------------------------------------------
Cache                                               00:00:01.8
SA Position Scan                                    00:00:00.0           19

Reference                                Preload    Annotation   Variants/s
---------------------------------------------------------------------------
chr16                                   00:00:00.2  00:00:01.3            1

Summary                                                Time         Percent
---------------------------------------------------------------------------
Initialization                                      00:00:01.9       25.5 %
Preload                                             00:00:00.2        3.3 %
Annotation                                          00:00:01.3       18.2 %

Time: 00:00:06.3
```

#### Investigate the Results

We would expect the following data to show up in our JSON output file:

```json {12-16}
      "variants": [
        {
          "vid": "16-68801894-G-A",
          "chromosome": "16",
          "begin": 68801894,
          "end": 68801894,
          "refAllele": "G",
          "altAllele": "A",
          "variantType": "SNV",
          "hgvsg": "NC_000016.10:g.68801894G>A",
          "phylopScore": 1,
          "MyDataSource": {
            "refAllele": "G",
            "altAllele": "A",
            "allAf": 7e-06
          },
          "clinvar": [
```

You can also [download the full JSON file](CA/TestCA.json.gz).

Nirvana preserves up to 6 decimal places for allele frequency data.

## Gene File Format



## Customizing the Header

### Title

For the title, you can provide any string that hasn't already been used. The title should be unique.

:::caution
Make sure that the title does not conflict with other keys in the JSON file.
:::

For small variants, you can't provide a title that conflicts with other keys in the variant object. Some examples of this would be 
`vid`, `chromosome`, `transcripts`, etc.. The title should also not conflict with other data source keys like `clinvar` or `gnomad`.

For structural variants, you can't provide a title that conflicts with other keys in the position object. Some examples of this would be 
`chromosome`, `svLength`, `cytogeneticBand`, etc. The title should also not conflict with other data source keys like `clingen` or `dgv`.

:::caution
Care should be taken not to annotate using multiple custom annotations that all use the same title.
:::

### Genome Assemblies

The following genome assemblies can be specified:
* GRCh37
* GRCh38

### Matching Criteria

The matching criteria instructs how Nirvana should match a VCF variant to the custom annotation.

The following matching criteria can be specified:
* `allele` - use this when you only want allele-specific matches. This is commonly the case when using allele frequency data sources like `gnomAD`
* `position` - use this when you want positional matches. This is commonly used with disease phenotype data sources like `ClinVar`
* `sv` - use this when you want to match to all other overlapping SVs. This use case arose when we were adding custom annotations for baseline 
copy number intervals along the genome.

### Categories

Categories are not used by Nirvana, but are often used by downstream tools. Categories provide hints for how those tools should filter or display 
the annotation data.

When a category is specified, Nirvana will provide additional validation for those fields. The following table describes each category:

| Category        | Description                                                             | Validation |
|:----------------|:------------------------------------------------------------------------|:-----------|
| AlleleCount     | allele counts for a specific population                                 | See the supported populations below |
| AlleleNumber    | allele numbers for a specific population                                | See the supported populations below |
| AlleleFrequency | allele frequencies for a specific population                            | See the supported populations below |
| Prediction      | ACMG-style pathogenicity classifications                                | • `benign` (B)<br/>• `likely benign` (LB)<br/>• `VUS`<br/>• `likely pathogenic` (LP)<br/>• `pathogenic` (P) |
| Filter          | free text that signals downstream tools to add the column to the filter | Max 20 characters  |
| Description     | free-text description                                                   | Max 100 characters |
| Identifier      | any ID                                                                  | Max 50 characters  |
| HomozygousCount | count of homozygous individuals for a specific population               | See the supported populations below |
| Score           | any score value                                                         | Any double-precision floating point number |

### Descriptions

Descriptions are used to add more context to the categories. For now, descriptions are mainly used to associate allele counts, numbers, and frequencies with their respective populations.

#### Populations

The following populations were specified in the HapMap project, 1000 Genomes Project, ExAC, and gnomAD.

| Population Code | Super-population Code | Description                                                       | 
|:----------------|:----------------------|:------------------------------------------------------------------|
| ACB             | AFR                   | African Caribbeans in Barbados                                    | 
| AFR             | AFR                   | African                                                           | 
| ALL             | ALL                   | All populations                                                   | 
| AMR             | AMR                   | Ad Mixed American                                                 | 
| ASJ             |                       | Ashkenazi Jewish                                                  | 
| ASW             | AFR                   | Americans of African Ancestry in SW USA                           | 
| BEB             | SAS                   | Bengali from Bangladesh                                           | 
| CDX             | EAS                   | Chinese Dai in Xishuangbanna, China                               | 
| CEU             | EUR                   | Utah Residents (CEPH) with Northern and Western European Ancestry | 
| CHB             | EAS                   | Han Chinese in Beijing, China                                     | 
| CHS             | EAS                   | Southern Han Chinese                                              | 
| CLM             | AMR                   | Colombians from Medellin, Colombia                                | 
| EAS             | EAS                   | East Asian                                                        | 
| ESN             | AFR                   | Esan in Nigeria                                                   | 
| EUR             | EUR                   | European                                                          | 
| FIN             | EUR                   | Finnish in Finland                                                | 
| GBR             | EUR                   | British in England and Scotland                                   | 
| GIH             | SAS                   | Gujarati Indian from Houston, Texas                               | 
| GWD             | AFR                   | Gambian in Western Divisions in the Gambia                        | 
| IBS             | EUR                   | Iberian population in Spain                                       | 
| ITU             | SAS                   | Indian Telugu from the UK                                         | 
| JPT             | EAS                   | Japanese in Tokyo, Japan                                          | 
| KHV             | EAS                   | Kinh in Ho Chi Minh City, Vietnam                                 | 
| LWK             | AFR                   | Luhya in Webuye, Kenya                                            | 
| MAG             | AFR                   | Mandinka in the Gambia                                            | 
| MKK             | AFR                   | Maasai in Kinyawa, Kenya                                          | 
| MSL             | AFR                   | Mende in Sierra Leone                                             | 
| MXL             | AMR                   | Mexican Ancestry from Los Angeles, USA                            | 
| NFE             | EUR                   | European (Non-Finnish)                                            | 
| OTH             | OTH                   | Other                                                             | 
| PEL             | AMR                   | Peruvians from Lima, Peru                                         | 
| PJL             | SAS                   | Punjabi from Lahore, Pakistan                                     | 
| PUR             | AMR                   | Puerto Ricans from Puerto Rico                                    | 
| SAS             | SAS                   | South Asian                                                       | 
| STU             | SAS                   | Sri Lankan Tamil from the UK                                      | 
| TSI             | EUR                   | Toscani in Italia                                                 | 
| YRI             | AFR                   | Yoruba in Ibadan, Nigeria                                         | 

### Data Types

Each custom annotation can be one of the following data types:
* `bool` - true or false
* `number` - any integer or floating-point number
* `string` - text

:::tip
For boolean variables, only keys with a `true` value will be output to the JSON object.
:::

## Using SAUtils

Nirvana includes a tool called `SAUtils` that converts various data sources into Nirvana's native binary format. The sub-commands `customvar` and `customgene` are used to specify a variant file or a gene file respectively.

### Convert Variant File

```Bash
dotnet bin/Release/netcoreapp2.1/SAUtils.dll customvar \
     -r Data/References/Homo_sapiens.GRCh37.Nirvana.dat \
     -i MyDataSource.tsv \
     -o SupplementaryAnnotation
```

* the `-r` argument specifies the compressed reference path
* the `-i` argument specifies the input TSV path
* the `-o` argument specifies the output directory

### Convert Gene File

```Bash
dotnet bin/Release/netcoreapp2.1/SAUtils.dll customgene \
     --uga Nirvana_UGA.tsv \
     -i MyDataSource.tsv \
     -o SupplementaryAnnotation
```

* the `--uga` argument specifies the Nirvana universal gene archive (UGA) path
* the `-i` argument specifies the input TSV path
* the `-o` argument specifies the output directory
