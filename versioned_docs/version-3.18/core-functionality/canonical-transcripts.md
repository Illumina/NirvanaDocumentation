---
title: Canonical Transcripts
---

## Overview

One of the more polarizing topics within annotation is the notion of canonical transcripts. Because of alternative splicing, we often have several transcripts for each gene. In the human genome, there are an average of 3.4 transcripts per gene (Tung, 2020). As scientists, we seem to have a need for identifying a representative example of a gene - even if there's no biological basis for the motivation.

![](hk1-transcripts.png)

:::info Golden Helix Blog
A few years ago, the guys over at Golden Helix wrote an excellent post about the pitfalls and issues surrounding the identification of canonical transcripts: [What’s in a Name: The Intricacies of Identifying Variants](https://blog.goldenhelix.com/whats-in-a-name-the-intricacies-of-identifying-variants/).
:::

In Nirvana, we wanted to identify an algorithm for determining the canonical transcript and apply it consistently to all of our transcript data sources.

## Known Algorithms

### UCSC

UCSC publishes a list of canonical transcripts in its `knownCanonical` table which is available via the [TableBrowser](https://genome.ucsc.edu/cgi-bin/hgTables). Of the RefSeq data sources, it was the only one we could find that provided canonical transcripts:

> The canonical transcript is defined as either the longest CDS, if the gene has translated transcripts, or the longest cDNA.

If you were to implement this and compare it with the knownCanonical table, you would see a lot of exceptions to the rule.

### Ensembl

The [Ensembl glossary](http://uswest.ensembl.org/Help/Glossary) states:

> The canonical transcript is used in the gene tree analysis in Ensembl and does not necessarily reflect the most biologically relevant transcript of a gene. For human, the canonical transcript for a gene is set according to the following hierarchy:
> 1. Longest CCDS translation with no stop codons.
> 1. If no (1), choose the longest Ensembl/Havana merged translation with no stop codons.
> 1. If no (2), choose the longest translation with no stop codons.
> 1. If no translation, choose the longest non-protein-coding transcript.

### ACMG

From the ACMG Guidelines for the Interpretation of Sequence Variants:

> A reference transcript for each gene should be used and provided in the report when describing coding variants. The transcript should represent either the longest known transcript and/or the most clinically relevant transcript.

### ClinVar

From the ClinVar paper:

> When there are multiple transcripts for a gene, ClinVar selects one HGVS expression to construct a preferred name. By default, this selection is based on the first reference standard transcript identified by the RefSeqGene/LRG (Locus Reference Genomic) collaboration.

## Unified Approach

Our approach is almost identical to the one Golden Helix discussed in their article:

1. If we're looking at RefSeq, only consider NM & NR transcripts as candidates for canonical transcripts.
1. Sort the transcripts in the following order:
   1. [Locus Reference Genomic (LRG)](https://www.lrg-sequence.org/) entries occur before non-LRG entries
   1. Descending CDS length
   1. Descending transcript length
   1. Ascending accession number
1. Grab the first entry
