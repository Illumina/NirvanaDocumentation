---
title: Transcript Consequence Impact
---

## Overview

Illumina Annotator provides transcript consequence impacts from [SnpEff](https://pcingola.github.io/SnpEff).

Following definitions are used for the impact ratings as obtained from [SnpEff](https://github.com/pcingola/SnpEff/blob/master/src/docs/se_inputoutput.md#impact-prediction).

| Impact   | Definition                                                                                                                                                           |
|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| high     | The variant is assumed to have high (disruptive) impact in the protein, probably causing protein truncation, loss of function or triggering nonsense mediated decay. |
| moderate | A non-disruptive variant that might change protein effectiveness.                                                                                                    |
| low      | Assumed to be mostly harmless or unlikely to change protein behavior.                                                                                                |
| modifier | Usually non-coding variants or variants affecting non-coding genes, where predictions are difficult or there is no evidence of impact.                               |

## Sources
Not all consequences are rated by SnpEff, therefore Illumina Annotator combines the ratings from SnpEff with those from VEP.
1. SnpEff [Documentation](https://pcingola.github.io/SnpEff/se_inputoutput/) and [Codebase](https://github.com/pcingola/SnpEff/blob/001b947893b616e3af082e6c565e253eef59db98/src/main/java/org/snpeff/snpEffect/EffectType.java#L54)
2. VEP [Documentation](https://useast.ensembl.org/info/genome/variation/prediction/predicted_data.html)

## Consequence Impacts
Following table gives the combined rating for all consequences recognized by Illumina Annotator.


| Consequence                        | SnpEff Impact | VEP Impact | Illumina Annotator Impact | Comment                               | 
|------------------------------------|---------------|------------|----------------|---------------------------------------|
| bidirectional_gene_fusion          | high          |            | high           | SnpEff                                |
| coding_sequence_variant            | low, modifier | modifier   | modifier       | Based on CDS                          |
| copy_number_change                 |               |            | modifier       |                                       |
| copy_number_decrease               |               |            | modifier       |                                       |
| copy_number_increase               |               |            | modifier       |                                       |
| downstream_gene_variant            | modifier      | modifier   | modifier       | SnpEff + VEP                          |
| feature_elongation                 | modifier      | high       | high           | VEP                                   |
| feature_truncation                 |               | high       | high           | VEP                                   |
| five_prime_duplicated_transcript   |               |            | modifier       |                                       |
| five_prime_UTR_variant             | modifier      | modifier   | modifier       | SnpEff + VEP                          |
| frameshift_variant                 | high          | high       | high           | SnpEff + VEP                          |
| gene_fusion                        | high          |            | high           | SnpEff                                |
| incomplete_terminal_codon_variant  |               | low        | low            | VEP                                   |
| inframe_deletion                   | moderate      | moderate   | moderate       | SnpEff + VEP                          |
| inframe_insertion                  | moderate      | moderate   | moderate       | SnpEff + VEP                          |
| intron_variant                     | modifier      | modifier   | modifier       | SnpEff + VEP                          |
| mature_miRNA_variant               |               | modifier   | modifier       | VEP                                   |
| missense_variant                   | moderate      | moderate   | moderate       | SnpEff + VEP                          |
| NMD_transcript_variant             |               | modifier   | modifier       | VEP                                   |
| non_coding_transcript_exon_variant | modifier      | modifier   | modifier       | SnpEff + VEP                          |
| non_coding_transcript_variant      | modifier      | modifier   | modifier       | SnpEff + VEP                          |
| protein_altering_variant           |               | moderate   | moderate       | VEP                                   |
| regulatory_region_ablation         |               | modifier   | modifier       | VEP                                   |
| regulatory_region_amplification    |               | modifier   | modifier       | VEP                                   |
| regulatory_region_variant          | modifier      | modifier   | modifier       | SnpEff + VEP                          |
| short_tandem_repeat_change         |               |            | modifier       |                                       |
| short_tandem_repeat_contraction    |               |            | modifier       |                                       |
| short_tandem_repeat_expansion      |               |            | modifier       |                                       |
| splice_acceptor_variant            | high          | high       | high           | SnpEff + VEP                          |
| splice_donor_variant               | high          | high       | high           | SnpEff + VEP                          |
| splice_region_variant              | moderate, low | low        | low            | Based on SPLICE_SITE_REGION in SnpEff |
| start_lost                         | high          | high       | high           | SnpEff + VEP                          |
| start_retained_variant             | low           | low        | low            | SnpEff + VEP                          |
| stop_gained                        | high          | high       | high           | SnpEff + VEP                          |
| stop_lost                          | high          | high       | high           | SnpEff + VEP                          |
| stop_retained_variant              | low           | low        | low            | SnpEff + VEP                          |
| synonymous_variant                 | low           | low        | low            | SnpEff + VEP                          |
| three_prime_duplicated_transcript  |               |            | modifier       |                                       |
| three_prime_UTR_variant            | modifier      | modifier   | modifier       | SnpEff + VEP                          |
| transcript_ablation                | high          | high       | high           | SnpEff + VEP                          |
| transcript_amplification           |               | high       | high           | VEP                                   |
| transcript_variant                 | modifier      |            | modifier       | SnpEff                                |
| unidirectional_gene_fusion         | high          |            | high           | SnpEff                                |
| upstream_gene_variant              | modifier      | modifier   | modifier       | SnpEff + VEP                          |


:::info Note: 
1. For transcripts with multiple consequences, the most severe impact rating is chosen.
2. In case of consequences that do not have any impact rating from SnpEff or VEP, Illumina Annotator provides `modifier`.

:::

### Known Issues

:::caution Known Issues
The consequence `splice_polypyrimidine_tract_variant`, is rated as `low` by VEP. 
However, this consequence is not annotated by Illumina Annotator, therefore the impact will also not be provided.
:::

## Example Transcript
The key `impact` for each transcript gives the impact rating for the `consequence`.

```json {20-24}
{
  "variants": [
    {
      "vid": "1-1623412-T-C",
      "chromosome": "1",
      "begin": 1623412,
      "end": 1623412,
      "refAllele": "T",
      "altAllele": "C",
      "variantType": "SNV",
      "hgvsg": "NC_000001.11:g.1623412T>C",
      "transcripts": [
        {
          "transcript": "ENST00000479659.5",
          "source": "Ensembl",
          "bioType": "lncRNA",
          "introns": "2/18",
          "geneId": "ENSG00000197530",
          "hgnc": "MIB2",
          "consequence": [
            "intron_variant",
            "non_coding_transcript_variant"
          ],
          "impact": "modifier",
          "hgvsc": "ENST00000479659.5:n.288-19T>C"
        },
        {
          "transcript": "ENST00000489635.5",
          "source": "VEP",
          "bioType": "mRNA",
          "codons": "aTg/aCg",
          "aminoAcids": "M/T",
          "cdnaPos": "269",
          "cdsPos": "134",
          "exons": "3/20",
          "proteinPos": "45",
          "geneId": "ENSG00000197530",
          "hgnc": "MIB2",
          "consequence": [
            "missense_variant"
          ],
          "impact": "moderate",
          "hgvsc": "ENST00000489635.5:c.134T>C",
          "hgvsp": "ENSP00000426007.1:p.(Met45Thr)",
          "proteinId": "ENSP00000426007.1"
        }
      ]
    }
  ]
}
```