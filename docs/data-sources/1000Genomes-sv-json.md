```json
"oneKg":[
   {
      "chromosome":"1",
      "begin":1595369,
      "end":1612441,
      "variantType": "copy_number_variation",
      "id": "esv3635753;esv3635754;esv3635755;esv3635756;esv3635757",
      "allAn": 5008,
      "allAc": 2702,
      "allAf": 0.539537,
      "afrAf": 0.6052,
      "amrAf": 0.3675,
      "eurAf": 0.5357,
      "easAf": 0.5368,
      "sasAf": 0.5797,
      "reciprocalOverlap": 0.07555
   }
],
```
| Field             | Type           | Notes                                                                                                                           |
|-------------------|----------------|---------------------------------------------------------------------------------------------------------------------------------|
| oneKg             | object array   |                                                                                                                                 |
| chromosome        | string         | Ensembl-style chromosome names                                                                                                  |
| begin             | integer        | 1-based position                                                                                                                |
| end               | integer        | 1-based position                                                                                                                |
| variantType       | string         | Any of the sequence alterations defined here.                                                                                   |
| id                | string         | Identifier from the data source. Alternatively a VID                                                                            |
| allAn             | floating point | 1000 Genomes Project allele number for all populations. Non-zero integer.                                                       |
| allAc             | floating point | 1000 Genomes Project allele count for all populations. Integer.                                                                 |
| allAf             | floating point | 1000 Genomes Project allele frequency for all populations. Range: 0 - 1.0                                                       |
| afrAf             | floating point | 1000 Genomes Project allele frequency for the African super population. Range: 0 - 1.0                                          |
| amrAf             | floating point | 1000 Genomes Project allele frequency for the Ad Mixed American super population. Range: 0 - 1.0                                |
| eurAf             | floating point | 1000 Genomes Project allele frequency for the European super population. Range: 0 - 1.0                                         |
| easAf             | integer        | 1000 Genomes Project allele frequency for the East Asian super population. Range: 0 - 1.0                                       |
| sasAf             | integer        | 1000 Genomes Project allele frequency for the South Asian super population. Range: 0 - 1.0                                      |
| reciprocalOverlap | floating point | Range: 0 - 1. E.g. 0.57 would indicate a 57% reciprocal overlap. Specified up to 5 decimal places(Not reported for Insertions). |
