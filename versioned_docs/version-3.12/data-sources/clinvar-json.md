```json
"clinvar":[
   {
      "id":"VCV000036581.3",
      "reviewStatus":"reviewed by expert panel",
      "significance":[
         "benign"
      ],
      "refAllele":"G",
      "altAllele":"A",
      "lastUpdatedDate":"2020-03-01",
      "isAlleleSpecific":true
   },
   {
      "id":"RCV000030258.4",
      "variationId":"VCV000036581.3",
      "reviewStatus":"reviewed by expert panel",
      "alleleOrigins":[
         "germline"
      ],
      "refAllele":"G",
      "altAllele":"A",
      "phenotypes":[
         "Lynch syndrome"
      ],
      "medGenIds":[
         "C1333990"
      ],
      "omimIds":[
         "120435"
      ],
      "significance":[
         "benign"
      ],
      "lastUpdatedDate":"2017-05-01",
      "isAlleleSpecific":true
   },
   {
      "id":"RCV000144626.1",
      "variationId":"VCV000036581.3",
      "reviewStatus":"no assertion criteria provided",
      "alleleOrigins":[
         "germline"
      ],
      "refAllele":"G",
      "altAllele":"A",
      "phenotypes":[
         "Lynch syndrome I"
      ],
      "medGenIds":[
         "C2936783"
      ],
      "omimIds":[
         "120435"
      ],
      "orphanetIds":[
         "144"
      ],
      "significance":[
         "benign"
      ],
      "lastUpdatedDate":"2017-04-05",
      "pubMedIds":[
         "18523027",
         "22703879",
         "22949387"
      ],
      "isAlleleSpecific":true
   }
]
```
| Field            | Type         | Required | Notes                     |
|:-----------------|:------------:|:--------:|:--------------------------|
| id               | string       | Yes      | ClinVar ID                |
| variationId      | string       | Yes      | ClinVar VCV ID            |
| reviewStatus     | string       | Yes      | see possible values below |
| alleleOrigins    | string array | Yes      | see possible values below |
| refAllele        | string       | Yes      |                           |
| altAllele        | string       | Yes      |                           |
| phenotypes       | string array | Yes      |                           |
| medGenIds        | string array | Yes      | MedGen IDs                |
| omimIds          | string array | Yes      | OMIM IDs                  |
| orphanetIds      | string array | Yes      | Orphanet IDs              |
| significance     | string array | Yes      | see possible values below |
| lastUpdatedDate  | string       | No       | yyyy-MM-dd                |
| pubMedIds        | string array | Yes      | PubMed IDs                |
| isAlleleSpecific | bool         | No       | set to true if the current variant alternate allele matches the ClinVar alternate allele |

**reviewStatus:**
- no assertion provided
- no assertion criteria provided
- criteria provided, single submitter
- practice guideline
- classified by multiple submitters
- criteria provided, conflicting interpretations
- criteria provided, multiple submitters, no conflicts
- no interpretation for the single variant

**alleleOrigins:**
- unknown
- other
- germline
- somatic
- inherited
- paternal
- maternal
- de-novo
- biparental
- uniparental
- not-tested
- tested-inconclusive

**significance:**
- uncertain significance
- not provided
- benign
- likely benign
- likely pathogenic
- pathogenic
- drug response
- histocompatibility
- association
- risk factor
- protective
- affects
- conflicting data from submitters
- other
- no interpretation for the single variant
- conflicting interpretations of pathogenicity
