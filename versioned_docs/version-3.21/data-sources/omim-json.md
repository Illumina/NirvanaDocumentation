```json
"omim":[ 
   { 
      "mimNumber":600678,
      "geneName":"MutS, E. coli, homolog of, 6",
      "description":"The transcription factor p53 responds to diverse cellular stresses to regulate target genes that induce cell cycle arrest, apoptosis, senescence, DNA repair, or changes in metabolism. In addition, p53 appears to induce apoptosis through nontranscriptional cytoplasmic processes. In unstressed cells, p53 is kept inactive essentially through the actions of the ubiquitin ligase MDM2, which inhibits p53 transcriptional activity and ubiquitinates p53 to promote its degradation. Numerous posttranslational modifications modulate p53 activity, most notably phosphorylation and acetylation. Several less abundant p53 isoforms also modulate p53 activity. Activity of p53 is ubiquitously lost in human cancer either by mutation of the p53 gene itself or by loss of cell signaling upstream or downstream of p53 (Toledo and Wahl, 2006; Bourdon, 2007; Vousden and Lane, 2007)",
      "phenotypes":[ 
         { 
            "mimNumber":614350,
            "phenotype":"Colorectal cancer, hereditary nonpolyposis, type 5",
            "description":"Hereditary nonpolyposis colorectal cancer type 5 is a cancer predisposition syndrome ...",
            "mapping":"molecular basis of the disorder is known",
            "inheritances":[ 
               "Autosomal dominant"
            ]
         },
         { 
            "mimNumber":608089,
            "phenotype":"Endometrial cancer, familial",
            "mapping":"molecular basis of the disorder is known"
         },
         { 
            "mimNumber":276300,
            "phenotype":"Mismatch repair cancer syndrome",
            "description":"Constitutional mismatch repair deficiency is a rare childhood cancer predisposition syndrome ...",
            "mapping":"molecular basis of the disorder is known",
            "inheritances":[ 
               "Autosomal recessive"
            ],
            "comments"     : [
                "contribute to susceptibility to multifactorial disorders or to susceptibility to infection",
                "unconfirmed or possibly spurious mapping"
            ]
         }
      ]
   }
]
```
| Field       | Type         | Notes                                   |
|:------------|:-------------|:----------------------------------------|
| mimNumber   | int          | OMIM ID for gene                        |
| geneName    | string       | gene name                               |
| description | string       |                                         |
| phenotypes  | object array | see [Phenotype entry below](#phenotype) |

#### Phenotype
| Field       | Type         | Notes                                     |
|:------------|:-------------|:------------------------------------------|
| mimNumber   | int          |                                           |
| phenotype   | string       |                                           |
| description | string       |                                           |
| mapping     | string       | see [possible values below](#mapping)     |
| inheritance | string array | see [possible values below](#inheritance) |
| comments    | string array | see [possible values below](#comments)    |

#### Mapping
1. disorder was positioned by mapping of the wild type gene
2. disease phenotype itself was mapped
3. molecular basis of the disorder is known
4. disorder is a chromosome deletion or duplication syndrome

#### Inheritance
- autosomal recessive
- autosomal dominant

#### Comments
- contributes to the susceptibility to multifactorial disorders
- variations that lead to apparently abnormal laboratory test values
- unconfirmed mapping

