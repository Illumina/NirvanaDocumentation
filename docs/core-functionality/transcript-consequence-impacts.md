---
title: Transcript Consequence Impact
---

## Overview

Nirvana provides transcript consequence impacts from [SnpEff](https://pcingola.github.io/SnpEff).

Following definitions are used for the impact ratings as obtained from [SnpEff](https://github.com/pcingola/SnpEff/blob/master/src/docs/se_inputoutput.md#impact-prediction).

| Impact   | Definition                                                                                                                                                           |
|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| High     | The variant is assumed to have high (disruptive) impact in the protein, probably causing protein truncation, loss of function or triggering nonsense mediated decay. |
| Moderate | A non-disruptive variant that might change protein effectiveness.                                                                                                    |
| Low      | Assumed to be mostly harmless or unlikely to change protein behavior.                                                                                                |
| Modifier | Usually non-coding variants or variants affecting non-coding genes, where predictions are difficult or there is no evidence of impact.                               |

## Sources
Not all consequences are rated by SnpEff, therefore Nirvana combines the ratings from SnpEff with those from VEP.
1. SnpEff [Documentation](https://pcingola.github.io/SnpEff/se_inputoutput/) and [Codebase](https://github.com/pcingola/SnpEff/blob/001b947893b616e3af082e6c565e253eef59db98/src/main/java/org/snpeff/snpEffect/EffectType.java#L54)
2. VEP [Documentation](https://useast.ensembl.org/info/genome/variation/prediction/predicted_data.html)

## Consequence Impacts
Following table gives the combined rating for all consequences recognized by Nirvana.


| Consequence                        | SnpEff Impact | VEP Impact | Nirvana Impact | Comment                               | 
|------------------------------------|---------------|------------|----------------|---------------------------------------|
| bidirectional_gene_fusion          | High          |            | High           | SnpEff                                |
 | coding_sequence_variant            | Low, Modifier | Modifier   | Modifier       | Based on CDS                          |
 | copy_number_change                 |               |            | Modifier       |                                       |
 | copy_number_decrease               |               |            | Modifier       |                                       |
 | copy_number_increase               |               |            | Modifier       |                                       |
 | downstream_gene_variant            | Modifier      | Modifier   | Modifier       | SnpEff + VEP                          |
 | feature_elongation                 | Modifier      | High       | High           | VEP                                   |
 | feature_truncation                 |               | High       | High           | VEP                                   |
 | five_prime_duplicated_transcript   |               |            | Modifier       |                                       |
 | five_prime_UTR_variant             | Modifier      | Modifier   | Modifier       | SnpEff + VEP                          |
 | frameshift_variant                 | High          | High       | High           | SnpEff + VEP                          |
 | gene_fusion                        | High          |            | High           | SnpEff                                |
 | incomplete_terminal_codon_variant  |               | Low        | Low            | VEP                                   |
 | inframe_deletion                   | Moderate      | Moderate   | Moderate       | SnpEff + VEP                          |
 | inframe_insertion                  | Moderate      | Moderate   | Moderate       | SnpEff + VEP                          |
 | intron_variant                     | Modifier      | Modifier   | Modifier       | SnpEff + VEP                          |
 | mature_miRNA_variant               |               | Modifier   | Modifier       | VEP                                   |
 | missense_variant                   | Moderate      | Moderate   | Moderate       | SnpEff + VEP                          |
 | NMD_transcript_variant             |               | Modifier   | Modifier       | VEP                                   |
 | non_coding_transcript_exon_variant | Modifier      | Modifier   | Modifier       | SnpEff + VEP                          |
 | non_coding_transcript_variant      | Modifier      | Modifier   | Modifier       | SnpEff + VEP                          |
 | protein_altering_variant           |               | Moderate   | Moderate       | VEP                                   |
 | regulatory_region_ablation         |               | Modifier   | Modifier       | VEP                                   |
 | regulatory_region_amplification    |               | Modifier   | Modifier       | VEP                                   |
 | regulatory_region_variant          | Modifier      | Modifier   | Modifier       | SnpEff + VEP                          |
 | short_tandem_repeat_change         |               |            | Modifier       |                                       |
 | short_tandem_repeat_contraction    |               |            | Modifier       |                                       |
 | short_tandem_repeat_expansion      |               |            | Modifier       |                                       |
 | splice_acceptor_variant            | High          | High       | High           | SnpEff + VEP                          |
 | splice_donor_variant               | High          | High       | High           | SnpEff + VEP                          |
 | splice_region_variant              | Moderate, Low | Low        | Low            | Based on SPLICE_SITE_REGION in snpeff |
 | start_lost                         | High          | High       | High           | SnpEff + VEP                          |
 | start_retained_variant             | Low           | Low        | Low            | SnpEff + VEP                          |
 | stop_gained                        | High          | High       | High           | SnpEff + VEP                          |
 | stop_lost                          | High          | High       | High           | SnpEff + VEP                          |
 | stop_retained_variant              | Low           | Low        | Low            | SnpEff + VEP                          |
 | synonymous_variant                 | Low           | Low        | Low            | SnpEff + VEP                          |
 | three_prime_duplicated_transcript  |               |            | Modifier       |                                       |
 | three_prime_UTR_variant            | Modifier      | Modifier   | Modifier       | SnpEff + VEP                          |
 | transcript_ablation                | High          | High       | High           | SnpEff + VEP                          |
 | transcript_amplification           |               | High       | High           | VEP                                   |
 | transcript_variant                 | Modifier      |            | Modifier       | SnpEff                                |
 | unidirectional_gene_fusion         | High          |            | High           | SnpEff                                |
 | upstream_gene_variant              | Modifier      | Modifier   | Modifier       | SnpEff + VEP                          |


:::info Note: 
1. For transcripts with multiple consequences, the most severe impact rating is chosen.
2. In case of consequences that do not have any impact rating from SnpEff or VEP, `Modifier` is chosen.
:::

## Example Transcript
The key `impact` for each transcript gives the impact rating for the `consequence`.

```json
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
          "impact": "Modifier",
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
          "impact": "Moderate",
          "hgvsc": "ENST00000489635.5:c.134T>C",
          "hgvsp": "ENSP00000426007.1:p.(Met45Thr)",
          "proteinId": "ENSP00000426007.1"
        }
      ]
    }
  ]
}
```