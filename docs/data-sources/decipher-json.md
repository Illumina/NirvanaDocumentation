```json
"decipher":[
  {
    "chromosome":"1",
    "begin":13516,
    "end":91073,
    "numDeletions":27,
    "deletionFrequency":0.675,
    "numDuplications":27,
    "duplicationFrequency":0.675,
    "sampleSize":40,
    "reciprocalOverlap": 0.27555,
    "annotationOverlap": 0.5901
  }
],
```
| Field                | Type   | Notes                                                           |
|----------------------|--------|-----------------------------------------------------------------|
| chromosome           | int    | Ensembl-style chromosome names                                  |
| begin                | int    | 1-based position                                                |
| end                  | int    | 1-based position                                                |
| numDeletions         | int    | # of observed deletions                                         |
| deletionFrequency    | float  | deletion frequency                                              |
| numDuplications      | int    | # of observed duplications                                      |
| duplicationFrequency | float  | duplication frequency                                           |
| sampleSize           | int    | total # of samples                                              |
| reciprocalOverlap    | float  | Range: 0 - 1. E.g. 0.57 would indicate a 57% reciprocal overlap |
| annotationOverlap    | float  | Range: 0 - 1. E.g. 0.57 would indicate a 57% annotation overlap |
