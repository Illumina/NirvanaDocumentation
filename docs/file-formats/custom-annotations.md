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
| #assembly=GRCh38        |          |       |       |                 |
| #matchVariantsBy=allele |          |       |       |                 |
| #CHROM                  | POS      | REF   | ALT   | allAf           |
| #categories             | .        | .     | .     | AlleleFrequency |
| #descriptions           | .        | .     | .     | ALL             |
| #type                   | .        | .     | .     | number          |
| chr16                   | 23603511 | TGA   | T     | 0.000006579     |
| chr16                   | 68801894 | G     | A     | 0.000006569     |
| chr19                   | 11107436 | G     | A     | 0.00003291      |

Here's [the full TSV file](https://illumina.github.io/NirvanaDocumentation/files/MyDataSource.tsv).

Let's go over the header and discuss the contents:
* `title` indicates the name of the JSON key
* `assembly` indicates that this data is only valid for `GRCh38`. Nirvana only accepts `GRCh38` and `GRCh37`.
* `matchVariantsBy` indicates how annotations should be matched and reported. Allowed values are  `allele` (allele specific small variants), `position` (positional small variants), `sv` (structural variants).
* `categories` provides hints to downstream tools on how they might want to treat the data. In this case, we indicate that it's an allele frequency. Allowed values are `AlleleCount`, `allelenumber`, `allelefrequency`, `homozygouscount`, `prediction`, `filter`, `identifier`, `description` and `score`. To indicate a missing or unknown category, you can use `.`.
* `descriptions` are used in special circumstances to provide more context. Even though column 5 is called `allAf`, it might not be clear to a
downstream tool that this means a global allele frequency using all sub-populations. In this case, `ALL` indicates the intended population.
* `type` indicates to downstream tools the data type. Since allele frequencies are numbers, we'll write `number` in this column. Valid values are `bool`, `string` and `number`. This is a required field and missing values are not allowed.

:::caution Reference Base Checking
Nirvana validates all the reference bases in a custom annotation. If a variant or genomic region is specified that has the wrong reference base, an error will be produced.
:::

:::caution File Format
Nirvana expects plain text (or gzipped text) files. Using tools like Excel can add extra characters that can break parsing. We highly recommend creating and modifying these files with plain text editor like Notepad, Notepad++ or Atom.
:::

:::caution Sorting
The variants within each chromosome must be sorted by genomic position.
:::

:::caution Matching annotations
It is vary important to correctly choose the value of `matchVariantsBy`. When your annotation is allele specific as in gnomAD allele frequencies, we recommend it to be `allele`. If you want all values for a given position (e.g. you want to see all ClinVar entries for a genomic position) use `position`. If your annotations are for structural variants, please use `sv`.
:::

#### Convert to Nirvana Format

First we need to convert the TSV file to Nirvana's native file format and let's put that file in a new directory called CA:

```bash
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

```scss
##fileformat=VCFv4.1
#CHROM	POS	ID	REF	ALT	QUAL	FILTER	INFO
16	68801894	.	G	A	.	.	.
```

Here's [the full VCF file](https://illumina.github.io/NirvanaDocumentation/files/TestCA.vcf).

Since Nirvana can handle multiple directories with external annotations, all we need to do is specify our new CA directory in addition to
the normal Nirvana command-line.

```bash {3}
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

Here's [the full JSON file](https://illumina.github.io/NirvanaDocumentation/files/TestCA.json.gz).

Nirvana preserves up to 6 decimal places for allele frequency data.

### Categories & Descriptions Example

#### Create the Custom Annotation TSV

Building on the previous example, we can add other types of annotations like predictions and general notes.

| Col 1                   | Col 2    | Col 3 | Col 4 | Col 5           | Col 6         | Col 7 |
|:------------------------|:---------|:------|:------|:----------------|:--------------|:------|
| #title=MyDataSource     |          |       |       |                 |               | |
| #assembly=GRCh38        |          |       |       |                 |               | |
| #matchVariantsBy=allele |          |       |       |                 |               | |
| #CHROM                  | POS      | REF   | ALT   | allAf           | pathogenicity | notes |
| #categories             | .        | .     | .     | AlleleFrequency | Prediction    | . |
| #descriptions           | .        | .     | .     | ALL             | .             | . |
| #type                   | .        | .     | .     | number          | string        | string |
| chr16                   | 23603511 | TGA   | T     | 0.000006579     | P             | . |
| chr16                   | 68801894 | G     | A     | 0.000006569     | LP            | Seen in case 123 |
| chr19                   | 11107436 | G     | A     | 0.00003291      | .             | . |

Here's [the full TSV file](https://illumina.github.io/NirvanaDocumentation/files/MyDataSource2.tsv).

:::tip Placeholders
You can use a period to denote an empty value (much in the same way as periods are used in VCF files to signify missing values). While
Nirvana also accepts empty columns in the TSV file, we use them in these examples to promote readability.
:::

Let's go over what's new in this example:
* **Column 6** adds a field called `pathogenicity` which uses the `Prediction` category. When using this category, Nirvana will
validate to make
sure that the field contains either the abbreviations (B, LB, VUS, LP, and P) or the long-form equivalents (e.g. benign or pathogenic).
* **Column 7** adds a field called `notes` and it doesn't have a category or description. We're just going to use it to add some internal
notes.

#### Annotate with Nirvana

Let's use a new VCF file. It includes all the same positions as our custom annotation file, but only the middle variant also matches the
alternate allele (allele-specific match):

```scss
##fileformat=VCFv4.1
#CHROM  POS     ID      REF     ALT     QUAL    FILTER  INFO
16	23603511	.	TG	T	.	.	.
16	68801894	.	G	A	.	.	.
19	11107436	.	G	C	.	.	.
```

Here's [the full VCF file](https://illumina.github.io/NirvanaDocumentation/files/TestCA2.vcf).

#### Investigate the Results

Because we specified `#matchVariantsBy=allele` in our custom annotation file, only the middle variant will get an annotation:

```json {12-18}
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
            "allAf": 7e-06,
            "pathogenicity": "LP",
            "notes": "Seen in case 123"
          },
          "clinvar": [
```

Here's [the full JSON file](https://illumina.github.io/NirvanaDocumentation/files/TestCA2.json.gz).

#### Using Positional Matches

What would happen if we changed to `#matchVariantsBy=position`? Two things will happen. First, our positional variants will now match:

```json {12-17}
      "variants": [
        {
          "vid": "16-23603511-TG-T",
          "chromosome": "16",
          "begin": 23603512,
          "end": 23603512,
          "refAllele": "G",
          "altAllele": "-",
          "variantType": "deletion",
          "hgvsg": "NC_000016.10:g.23603512delG",
          "MyDataSource": [
            {
              "refAllele": "GA",
              "altAllele": "-",
              "allAf": 7e-06,
              "pathogenicity": "P"
            }
          ],
          "clinvar": [
```

In addition, you will now see an extra flag for our allele-specific variant:

```json {12-20}
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
          "MyDataSource": [
            {
              "refAllele": "G",
              "altAllele": "A",
              "allAf": 7e-06,
              "pathogenicity": "LP",
              "notes": "Seen in case 123",
              "isAlleleSpecific": true
            }
          ],
          "clinvar": [
```

### Genomic Region Example

#### Create the Custom Annotation TSV

In the previous example, we added a note for the middle variant, but sometimes it's handy to annotate a genomic region. Consider the following example:

| Col 1                   | Col 2    | Col 3 | Col 4 | Col 5 |
|:------------------------|:---------|:------|:------|:------|
| #title=MyDataSource     |          |       |       | |
| #assembly=GRCh38        |          |       |       | |
| #matchVariantsBy=allele |          |       |       | |
| #CHROM                  | POS      | REF   | END   | notes |
| #categories             | .        | .     | .     | . |
| #descriptions           | .        | .     | .     | . |
| #type                   | .        | .     | .     | string |
| chr16                   | 20000000 | T     | 70000000 | Lots of false positives in this region |

Here's [the full TSV file](https://illumina.github.io/NirvanaDocumentation/files/MyDataSource3.tsv).

Let's go over what's new in this example:
* **Column 5** now has a field called `notes`. In essence, it looks exactly like column 7 from our previous example.
* The main difference is that now one of our custom annotation entries is actually a genomic region. Any variant that overlaps with that region will get a custom annotation.

In the previous example we learned about positional matching vs allele-specific matching. For genomic regions, `#matchVariantsBy=allele` and `#matchVariantsBy=position` produce
the same result.

#### Annotate with Nirvana

Let's use the same VCF file as our previous example.

#### Investigate the Results

```json {9-17}
    {
      "chromosome": "16",
      "position": 23603511,
      "refAllele": "TG",
      "altAlleles": [
        "T"
      ],
      "cytogeneticBand": "16p12.2",
      "MyDataSource": [
        {
          "start": 20000000,
          "end": 70000000,
          "notes": "Lots of false positives in this region",
          "reciprocalOverlap": 0,
          "annotationOverlap": 0
        }
      ],
      "variants": [
```

Here's [the full JSON file](https://illumina.github.io/NirvanaDocumentation/files/TestCA3.json.gz).

:::tip Reciprocal & Annotation Overlap
For all intervals, Nirvana internally calculates two overlaps: a **variant overlap** and an **annotation overlap**. Variant overlap is the percentage of the variant's length that is
overlapped. Annotation overlap is the percentage of the annotation's length that is overlap.

**Reciprocal overlap** is the minimum of those two overlaps. Given that the annotation is 50 Mbp and the deletion is one 1 bp, both overlaps will be pretty close to 0.
:::

We will also see this annotation for the other variant on chr16:

```json {9-17}
    {
      "chromosome": "16",
      "position": 68801894,
      "refAllele": "G",
      "altAlleles": [
        "A"
      ],
      "cytogeneticBand": "16q22.1",
      "MyDataSource": [
        {
          "start": 20000000,
          "end": 70000000,
          "notes": "Lots of false positives in this region",
          "reciprocalOverlap": 0,
          "annotationOverlap": 0
        }
      ],
      "variants": [
```

:::tip Targeting Structural Variants
Often we use genomic regions to represent other known CNVs and SVs in the genome. In this use case, we usually don't want to match these regions to other small variants. To
force Nirvana to match regions only to other SVs, use the `#matchVariantsBy=sv` option in the header.
:::

### Mixing Small Variants and Genomic Regions

#### Create the Custom Annotation TSV

Previously we looked at examples that either had small variants or genomic regions. Let's create a file that contains both:

| Col 1                   | Col 2    | Col 3 | Col 4             | Col 5    | Col 6  |
|:------------------------|:---------|:------|:------------------|:---------|:-------|
| #title=MyDataSource     |          |       |                   |          |        |
| #assembly=GRCh38        |          |       |                   |          |        |
| #matchVariantsBy=allele |          |       |                   |          |        |
| #CHROM                  | POS      | REF   | ALT               | END      | notes  |
| #categories             | .        | .     | .                 | .        | .      |
| #descriptions           | .        | .     | .                 | .        | .      |
| #type                   | .        | .     | .                 | .        | string |
| chr16                   | 23603511 | TGA   | T                 | .        | .      |
| chr16                   | 68801894 | G     | A                 | .        | .      |
| chr19                   | 11107436 | G     | A                 | .        | .      |
| chr21                   | 10510818 | C     | .                 | 10699435 | Interval #1          |
| chr21                   | 10510818 | C     | &lt;DEL&gt;       | 10699435 | Interval #2          |
| chr22                   | 12370388 | T     | T[chr22:12370729[ | .        | Known false-positive |

Here's [the full TSV file](https://illumina.github.io/NirvanaDocumentation/files/MyDataSource4.tsv).

Let's go over what's new in this example:
* **Column 4** now has the `REF` field. Exception for the case listed below, this is only used by small variants or translocation breakends.
* **Column 5** now has the `END` field. This is only used by genomic regions.
* There are two custom annotations on chr21 and the start and end coordinates look the same, so what's different? Interval #2 has **a symbolic allele in the ALT column**. When this is used in custom annotation, the start position is treated as the padding base (using VCF conventions). When Nirvana matches a variant to interval #2, it will ignore the padding base and consider the start position to be at position 10510819.

#### Annotate with Nirvana

Let's use a new VCF file to study how matching works for intervals #1 and #2:

```scss
##fileformat=VCFv4.1
#CHROM	POS	ID	REF	ALT	QUAL	FILTER	INFO
21	10510818	.	C	<DUP>	.	.	END=10699435;SVTYPE=DUP
22	12370388	.	T	T[chr22:12370729[	.	.	SVTYPE=BND
```

Here's [the full VCF file](https://illumina.github.io/NirvanaDocumentation/files/TestCA3.vcf).

The first variant is similar to the custom annotation labelled "interval #2". Position 10510818 is the padding base, so it effectively starts at position 10510819.

#### Investigate the Results

```json {11-26}
  "positions": [
    {
      "chromosome": "21",
      "position": 10510818,
      "svEnd": 10699435,
      "refAllele": "C",
      "altAlleles": [
        "<DUP>"
      ],
      "cytogeneticBand": "21p11.2",
      "MyDataSource": [
        {
          "start": 10510818,
          "end": 10699435,
          "notes": "Interval #1",
          "reciprocalOverlap": 0.99999,
          "annotationOverlap": 0.99999
        },
        {
          "start": 10510819,
          "end": 10699435,
          "notes": "Interval #2",
          "reciprocalOverlap": 1,
          "annotationOverlap": 1
        }
      ],
```

Here's [the full JSON file](https://illumina.github.io/NirvanaDocumentation/files/TestCA4.json.gz).

As expected, the variant and interval #2 have matching endpoints, therefore there is 100% overlap. Interval #1 technically starts 1 bp earlier, so its overlap 99.9%.

Further down the JSON file, we find the annotated translocation breakend:

```json {11-15}
      "variants": [
        {
          "vid": "22-12370388-T-T[chr22:12370729[",
          "chromosome": "22",
          "begin": 12370388,
          "end": 12370388,
          "isStructuralVariant": true,
          "refAllele": "T",
          "altAllele": "T[chr22:12370729[",
          "variantType": "translocation_breakend",
          "MyDataSource": {
            "refAllele": "T",
            "altAllele": "T[chr22:12370729[",
            "notes": "Known false-positive"
          }
        }
```

## Gene File Format

### Basic Gene Example

#### Create the Custom Annotation TSV

Previously we looked at examples that either had small variants or genomic regions, however, sometimes we would like to add custom gene annotations. The gene custom annotation file format
looks slightly different:

| Col 1                   | Col 2           | Col 3                                              | Col 4    |
|:------------------------|:----------------|:---------------------------------------------------|:---------|
| #title=MyDataSource     |                 |                                                    |          |
| #geneSymbol             | geneId          | phenotype                                          | notes    |
| #categories             | .               | .                                                  | .        |
| #descriptions           | .               | .                                                  | .        |
| #type                   | .               | string                                             | string   |
| TP53                    | 7157            | Colorectal cancer, hereditary nonpolyposis, type 5 | .        |        
| KRAS                    | ENSG00000133703 | Mismatch repair cancer syndrome                    | Seen in cohort 123 |

Here's [the full TSV file](https://illumina.github.io/NirvanaDocumentation/files/MyDataSource5.tsv).

Let's go over what's in this example:
* **Column 2** has the `geneId` field. This can be either an **Entrez Gene ID** or an **Ensembl ID**.

:::caution Gene Symbols
Gene symbols are always in flux and are being updated on a daily basis at the NCBI and at HGNC. Due to this, Nirvana uses the `geneId` to match genes rather than the gene symbol. However, to
make the custom annotation files easier to read, we've included the `geneSymbol` column as well.
:::

:::caution Unknown Gene IDs
When Nirvana parses the gene custom annotation file, it will note any gene IDs that are currently not recognized in Nirvana. In such a case, Nirvana will display an error showing all the
unrecognized gene IDs.
:::

#### Annotate with Nirvana

Let's use a VCF file that contain variants in TP53 and KRAS:

```scss
##fileformat=VCFv4.1
#CHROM	POS	ID	REF	ALT	QUAL	FILTER	INFO
12	25227255	.	A	T	.	.	.
17	7675074	.	C	A	.	.	.
```

Here's [the full VCF file](https://illumina.github.io/NirvanaDocumentation/files/TestCA4.vcf).

#### Investigate the Results

```json {24-27}
  "genes": [
    {
      "name": "KRAS",
      "clingenGeneValidity": [
        {
          "diseaseId": "MONDO_0009026",
          "disease": "Costello syndrome",
          "classification": "disputed",
          "classificationDate": "2018-07-24"
        }
      ],
      "clingenDosageSensitivityMap": {
        "haploinsufficiency": "no evidence to suggest that dosage sensitivity is associated with clinical phenotype",
        "triplosensitivity": "no evidence to suggest that dosage sensitivity is associated with clinical phenotype"
      },
      "gnomAD": {
        "pLi": 0.000788,
        "pRec": 0.789,
        "pNull": 0.21,
        "synZ": 0.336,
        "misZ": 2.32,
        "loeuf": 1.24
      },
      "MyDataSource": {
        "phenotype": "Mismatch repair cancer syndrome",
        "notes": "Seen in cohort 123"
      }
    },
```

This is the abbreviated output for KRAS. Here's [the full JSON file](https://illumina.github.io/NirvanaDocumentation/files/TestCA5.json.gz) if you want to see the complete KRAS entry.

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

```bash
dotnet bin/Release/netcoreapp2.1/SAUtils.dll customvar \
     -r Data/References/Homo_sapiens.GRCh37.Nirvana.dat \
     -i MyDataSource.tsv \
     -o SupplementaryAnnotation
```

* the `-r` argument specifies the compressed reference path
* the `-i` argument specifies the input TSV path
* the `-o` argument specifies the output directory

### Convert Gene File

```bash
dotnet bin/Release/netcoreapp2.1/SAUtils.dll customgene \
     --uga Nirvana_UGA.tsv \
     -i MyDataSource.tsv \
     -o SupplementaryAnnotation
```

* the `--uga` argument specifies the Nirvana universal gene archive (UGA) path
* the `-i` argument specifies the input TSV path
* the `-o` argument specifies the output directory
