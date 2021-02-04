```json
"clingenDosageSensitivityMap": [{
    "chromosome": "15",
    "begin": 30900686,
    "end": 32153204,
    "haploinsufficiency": "sufficient evidence suggesting dosage sensitivity is associated with clinical phenotype",
    "triplosensitivity": "little evidence suggesting dosage sensitivity is associated with clinical phenotype",
    "reciprocalOverlap": 0.00147,
    "annotationOverlap": 0.33994
},
{
    "chromosome": "15",
    "begin": 31727418,
    "end": 32153204,
    "haploinsufficiency": "sufficient evidence suggesting dosage sensitivity is associated with clinical phenotype",
    "triplosensitivity": "dosage sensitivity unlikely",
    "reciprocalOverlap": 0.00147,
    "annotationOverlap": 1
}]
```
| Field                       | Type           | Notes                                                                                                                            |
|-----------------------------|----------------|----------------------------------------------------------------------------------------------------------------------------------|
| clingenDosageSensitivityMap | object array   |                                                                                                                                  |
| chromosome                  | string         | Ensembl-style chromosome names                                                                                                   |
| begin                       | integer        | 1-based position                                                                                                                 |
| end                         | integer        | 1-based position                                                                                                                 |
| haploinsufficiency          | string         | see possible values below    |
| triplosensitivity           | string         | (same as haploinsufficiency)                                                                                                     |
| reciprocalOverlap           | floating point | Range: 0 - 1. E.g. 0.57 would indicate a 57% reciprocal overlap. Specified up to 5 decimal places (Not reported for Insertions). |
| annotationOverlap           | floating point | Range: 0 - 1. E.g. 0.57 would indicate a 57% reciprocal overlap. Specified up to 5 decimal places (Not reported for Insertions). |


**haploinsufficiency and triplosensitivity**
- no evidence to suggest that dosage sensitivity is associated with clinical phenotype
- little evidence suggesting dosage sensitivity is associated with clinical phenotype
- emerging evidence suggesting dosage sensitivity is associated with clinical phenotype
- sufficient evidence suggesting dosage sensitivity is associated with clinical phenotype
- gene associated with autosomal recessive phenotype
- dosage sensitivity unlikely
