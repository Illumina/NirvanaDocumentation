---
title: Transcript Consequence Impact
---

## Overview

Nirvana provides transcript consequence impacts from [SnpEff](https://pcingola.github.io/SnpEff).

Following definitions are used for the impact ratings as obtained from [SnpEff](https://github.com/pcingola/SnpEff/blob/master/src/docs/se_inputoutput.md#impact-prediction).

| Impact   | Definition                                                                                                                                                           |
|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| HIGH     | The variant is assumed to have high (disruptive) impact in the protein, probably causing protein truncation, loss of function or triggering nonsense mediated decay. |
| MODERATE | A non-disruptive variant that might change protein effectiveness.                                                                                                    |
| LOW      | Assumed to be mostly harmless or unlikely to change protein behavior.                                                                                                |
| MODIFIER | Usually non-coding variants or variants affecting non-coding genes, where predictions are difficult or there is no evidence of impact.                               |

## Sources
Not all consequences are rated by SnpEff, therefore Nirvana combines the ratings from SnpEff with those from VEP.
1. SnpEff [Documentation](https://pcingola.github.io/SnpEff/se_inputoutput/) and [Codebase](https://github.com/pcingola/SnpEff/blob/001b947893b616e3af082e6c565e253eef59db98/src/main/java/org/snpeff/snpEffect/EffectType.java#L54)
2. VEP [Documentation](https://useast.ensembl.org/info/genome/variation/prediction/predicted_data.html)

## Consequence Impacts
Following table gives the combined rating for all consequences recognized by Nirvana.


| Consequence                        | SnpEff Impact | VEP Impact | Nirvana Impact | Comment                               | 
|------------------------------------|---------------|------------|----------------|---------------------------------------|
| bidirectional_gene_fusion          | HIGH          |            | HIGH           | SnpEff                                |
| coding_sequence_variant            | LOW, MODIFIER | MODIFIER   | MODIFIER       | Based on CDS                          |
| copy_number_change                 |               |            | MODIFIER       |                                       |
| copy_number_decrease               |               |            | MODIFIER       |                                       |
| copy_number_increase               |               |            | MODIFIER       |                                       |
| downstream_gene_variant            | MODIFIER      | MODIFIER   | MODIFIER       | SnpEff + VEP                          |
| feature_elongation                 | MODIFIER      | HIGH       | HIGH           | VEP                                   |
| feature_truncation                 |               | HIGH       | HIGH           | VEP                                   |
| five_prime_duplicated_transcript   |               |            | MODIFIER       |                                       |
| five_prime_UTR_variant             | MODIFIER      | MODIFIER   | MODIFIER       | SnpEff + VEP                          |
| frameshift_variant                 | HIGH          | HIGH       | HIGH           | SnpEff + VEP                          |
| gene_fusion                        | HIGH          |            | HIGH           | SnpEff                                |
| incomplete_terminal_codon_variant  |               | LOW        | LOW            | VEP                                   |
| inframe_deletion                   | MODERATE      | MODERATE   | MODERATE       | SnpEff + VEP                          |
| inframe_insertion                  | MODERATE      | MODERATE   | MODERATE       | SnpEff + VEP                          |
| intron_variant                     | MODIFIER      | MODIFIER   | MODIFIER       | SnpEff + VEP                          |
| mature_miRNA_variant               |               | MODIFIER   | MODIFIER       | VEP                                   |
| missense_variant                   | MODERATE      | MODERATE   | MODERATE       | SnpEff + VEP                          |
| NMD_transcript_variant             |               | MODIFIER   | MODIFIER       | VEP                                   |
| non_coding_transcript_exon_variant | MODIFIER      | MODIFIER   | MODIFIER       | SnpEff + VEP                          |
| non_coding_transcript_variant      | MODIFIER      | MODIFIER   | MODIFIER       | SnpEff + VEP                          |
| protein_altering_variant           |               | MODERATE   | MODERATE       | VEP                                   |
| regulatory_region_ablation         |               | MODIFIER   | MODIFIER       | VEP                                   |
| regulatory_region_amplification    |               | MODIFIER   | MODIFIER       | VEP                                   |
| regulatory_region_variant          | MODIFIER      | MODIFIER   | MODIFIER       | SnpEff + VEP                          |
| short_tandem_repeat_change         |               |            | MODIFIER       |                                       |
| short_tandem_repeat_contraction    |               |            | MODIFIER       |                                       |
| short_tandem_repeat_expansion      |               |            | MODIFIER       |                                       |
| splice_acceptor_variant            | HIGH          | HIGH       | HIGH           | SnpEff + VEP                          |
| splice_donor_variant               | HIGH          | HIGH       | HIGH           | SnpEff + VEP                          |
| splice_region_variant              | MODERATE, LOW | LOW        | LOW            | Based on SPLICE_SITE_REGION in SnpEff |
| start_lost                         | HIGH          | HIGH       | HIGH           | SnpEff + VEP                          |
| start_retained_variant             | LOW           | LOW        | LOW            | SnpEff + VEP                          |
| stop_gained                        | HIGH          | HIGH       | HIGH           | SnpEff + VEP                          |
| stop_lost                          | HIGH          | HIGH       | HIGH           | SnpEff + VEP                          |
| stop_retained_variant              | LOW           | LOW        | LOW            | SnpEff + VEP                          |
| synonymous_variant                 | LOW           | LOW        | LOW            | SnpEff + VEP                          |
| three_prime_duplicated_transcript  |               |            | MODIFIER       |                                       |
| three_prime_UTR_variant            | MODIFIER      | MODIFIER   | MODIFIER       | SnpEff + VEP                          |
| transcript_ablation                | HIGH          | HIGH       | HIGH           | SnpEff + VEP                          |
| transcript_amplification           |               | HIGH       | HIGH           | VEP                                   |
| transcript_variant                 | MODIFIER      |            | MODIFIER       | SnpEff                                |
| unidirectional_gene_fusion         | HIGH          |            | HIGH           | SnpEff                                |
| upstream_gene_variant              | MODIFIER      | MODIFIER   | MODIFIER       | SnpEff + VEP                          |


:::info Note: 
1. For transcripts with multiple consequences, the most severe impact rating is chosen.
2. In case of consequences that do not have any impact rating from SnpEff or VEP, `MODIFIER` is provided.
:::

### Known Issues

:::caution Known Issues
The consequence `splice_polypyrimidine_tract_variant`, is rated as `LOW` by VEP.
However, this consequence is not annotated by Nirvana, therefore the impact will also not be provided.
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
          "impact": "MODIFIER",
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
          "impact": "MODERATE",
          "hgvsc": "ENST00000489635.5:c.134T>C",
          "hgvsp": "ENSP00000426007.1:p.(Met45Thr)",
          "proteinId": "ENSP00000426007.1"
        }
      ]
    }
  ]
}
```