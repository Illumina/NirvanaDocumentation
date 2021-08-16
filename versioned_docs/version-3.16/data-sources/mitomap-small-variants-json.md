```json
"mitomap":[ 
   { 
      "refAllele":"G",
      "altAllele":"A",
      "diseases":[ 
         "Bipolar disorder",
         "Melanoma"
      ],
      "hasHomoplasmy":false,
      "hasHeteroplasmy":true,
      "status":"Reported",
      "clinicalSignificance":"confirmed pathogenic",
      "scorePercentile":83.30,
      "numGenBankFullLengthSeqs":2,
      "pubMedIds":["2316527","6299878","6301949"],
      "isAlleleSpecific":true
   }
]
```
| Field                    | Type         | Notes                              |
|:-------------------------|:------------:|:-----------------------------------|
| refAllele                | string       |                                    |
| altAllele                | string       |                                    |
| diseases                 | string array | associated diseases                |
| hasHomoplasmy            | boolean      |                                    |
| hasHeteroplasmy          | boolean      |                                    |
| status                   | string       | record status                      |
| clinicalSignificance     | string       | predicted pathogenicity            |
| scorePercentile          | float        | MitoTIP score                      |
| numGenBankFullLengthSeqs | integer      | # of GenBank full-length sequences |
| pubMedIds                | string array |                                    |
| isAlleleSpecific         | boolean      | true when the current variant alternate allele matches the MITOMAP alternate allele |
