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
| chromosome        | string         |                                                                                           |
| begin             | integer        |                                                                                   |
| end               | integer        |                                                                                  |
| variantType       | string         |                                                                                    |
| id                | string         |                                                                             |
| allAn             | floating point | Allele number for all populations. Non-zero integer.                                                       |
| allAc             | floating point | Allele count for all populations. Integer.                                                                 |
| allAf             | floating point | Allele frequency for all populations. Range: 0 - 1.0                                                       |
| afrAf             | floating point | Allele frequency for the African super population. Range: 0 - 1.0                                          |
| amrAf             | floating point | Allele frequency for the Ad Mixed American super population. Range: 0 - 1.0                                |
| eurAf             | floating point | Allele frequency for the European super population. Range: 0 - 1.0                                         |
| easAf             | integer        | Allele frequency for the East Asian super population. Range: 0 - 1.0                                       |
| sasAf             | integer        | Allele frequency for the South Asian super population. Range: 0 - 1.0                                      |
| reciprocalOverlap | floating point | Range: 0 - 1. |
