```json
"clinvar":[
   {
      "id":"RCV000030258.4",
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
   }
]
```
| Field            | Type         | Notes                     |
|:-----------------|:------------:|:--------------------------|
| id               | string       | ClinVar ID                |
| reviewStatus     | string       | see possible values below |
| alleleOrigins    | string array | see possible values below |
| refAllele        | string       |                           |
| altAllele        | string       |                           |
| phenotypes       | string array |                           |
| medGenIds        | string array | MedGen IDs                |
| omimIds          | string array | OMIM IDs                  |
| orphanetIds      | string array | Orphanet IDs              |
| significance     | string array | see possible values below |
| lastUpdatedDate  | string       | yyyy-MM-dd                |
| pubMedIds        | string array | PubMed IDs                |
| isAlleleSpecific | bool         | true when the current variant alternate allele matches the ClinVar alternate allele |

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
