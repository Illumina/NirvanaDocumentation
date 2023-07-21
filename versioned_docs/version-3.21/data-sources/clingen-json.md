```json
"clingen":[
   {
      "chromosome":"17",
      "begin":525,
      "end":14667519,
      "variantType":"copy_number_gain",
      "id":"nsv996083",
      "clinicalInterpretation":"pathogenic",
      "observedGains":1,
      "validated":true,
      "phenotypes":[
         "Intrauterine growth retardation"
      ],
      "phenotypeIds":[
         "HP:0001511",
         "MedGen:C1853481"
      ],
      "reciprocalOverlap":0.00131
   },
   {
      "chromosome":"17",
      "begin":45835,
      "end":7600330,
      "variantType":"copy_number_loss",
      "id":"nsv869419",
      "clinicalInterpretation":"pathogenic",
      "observedLosses":1,
      "validated":true,
      "phenotypes":[
         "Developmental delay AND/OR other significant developmental or morphological phenotypes"
      ],
      "reciprocalOverlap":0.00254
   }
]
```
| Field                  | Type           | Notes                                                                                                                            |
|------------------------|----------------|----------------------------------------------------------------------------------------------------------------------------------|
| clingen                | object array   |                                                                                                                                  |
| chromosome             | string         | Ensembl-style chromosome names                                                                                                   |
| begin                  | integer        | 1-based position                                                                                                                 |
| end                    | integer        | 1-based position                                                                                                                 |
| variantType            | string         | Any of the sequence alterations defined here.                                                                                    |
| id                     | string         | Identifier from the data source. Alternatively a VID                                                                             |
| clinicalInterpretation | string         | see possible values below                                                                                                      |
| observedGains          | integer        | Range: 0 - (2<sup>31</sup> - 1). Only used if copy_number_variation, copy_number_loss, or copy_number_gain.                                 |
| observedLosses         | integer        | Range: 0 - (2<sup>31</sup> - 1). Only used if copy_number_variation, copy_number_loss, or copy_number_gain.                                 |
| validated              | boolean        |                                                                                                                                  |
| phenotypes             | string array   | Description of the phenotype.                                                                                                    |
| phenotypeIds           | string array   | Description of the phenotype IDs.                                                                                                |
| reciprocalOverlap      | floating point | Range: 0 - 1. E.g. 0.57 would indicate a 57% reciprocal overlap. Specified up to 5 decimal places (Not reported for Insertions). |

**clinicalInterpretation**
- benign
- curated benign
- curated pathogenic
- likely benign
- likely pathogenic
- path gain
- path loss
- pathogenic
- uncertain
