```json
"gnomAD-preview": [
  {
    "chromosome": "1",
    "begin": 40001,
    "end": 47200,
    "variantId": "gnomAD-SV_v2.1_DUP_1_1",
    "variantType": "duplication",
    "failedFilter": true,
    "allAf": 0.068963,
    "afrAf": 0.135694,
    "amrAf": 0.022876,
    "easAf": 0.01101,
    "eurAf": 0.007846,
    "othAf": 0.017544,
    "femaleAf": 0.065288,
    "maleAf": 0.07255,
    "allAc": 943,
    "afrAc": 866,
    "amrAc": 21,
    "easAc": 17,
    "eurAc": 37,
    "othAc": 2,
    "femaleAc": 442,
    "maleAc": 499,
    "allAn": 13674,
    "afrAn": 6382,
    "amrAn": 918,
    "easAn": 1544,
    "eurAn": 4716,
    "othAn": 114,
    "femaleAn": 6770,
    "maleAn": 6878,
    "allHc": 91,
    "afrHc": 90,
    "amrHc": 1,
    "easHc": 0,
    "eurHc": 0,
    "othHc": 55,
    "femaleHc": 44,
    "maleHc": 47,
    "reciprocalOverlap": 0.01839,
    "annotationOverlap": 0.16667
  }
]

```

| Field             | Type            | Notes                                                                             |
|-------------------|-----------------|-----------------------------------------------------------------------------------|
| chromosome        | string          | chromosome number                                                                 |
| begin             | integer         | position interval start                                                           |
| end               | integer         | position internal end                                                             |
| variantType       | string          | structural variant type                                                           |
| variantId         | string          | gnomAD ID                                                                         |
| allAf             | floating point  | allele frequency for all populations. Range: 0 - 1.0                              |
| afrAf             | floating point  | allele frequency for the African super population. Range: 0 - 1.0                 |
| amrAf             | floating point  | allele frequency for the Ad Mixed American super population. Range: 0 - 1.0       |
| easAf             | floating point  | allele frequency for the East Asian super population. Range: 0 - 1.0              |
| eurAf             | floating point  | allele frequency for the European super population. Range: 0 - 1.0                |
| othAf             | floating point  | allele frequency for all other populations. Range: 0 - 1.0                        |
| femaleAf          | floating point  | allele frequency for female population. Range: 0 - 1.0                            |
| maleAf            | floating point  | allele frequency for male population. Range: 0 - 1.0                              |
| allAc             | integer         | allele count for all populations.                                                 |
| afrAc             | integer         | allele count for the African super population.                                    |
| amrAc             | integer         | allele count for the Ad Mixed American super population.                          |
| easAc             | integer         | allele count for the East Asian super population.                                 |
| eurAc             | integer         | allele count for the European super population.                                   |
| othAc             | integer         | allele count for all other populations.                                           |
| maleAc            | integer         | allele count for male population.                                                 |
| femaleAc          | integer         | allele count for female population.                                               |
| allAn             | integer         | allele number for all populations.                                                |
| afrAn             | integer         | allele number for the African super population.                                   |
| amrAn             | integer         | allele number for the Ad Mixed American super population.                         |
| easAn             | integer         | allele number for the East Asian super population.                                |
| eurAn             | integer         | allele number for the European super population.                                  |
| othAn             | integer         | allele number for all other populations.                                          |
| femaleAn          | integer         | allele number for female population.                                              |
| maleAn            | integer         | allele number for male population.                                                |
| allHc             | integer         | count of homozygous individuals for all populations.                              |
| afrHc             | integer         | count of homozygous individuals for the African / African American population.    |
| amrHc             | integer         | count of homozygous individuals for the Latino population.                        |
| easHc             | integer         | count of homozygous individuals for the East Asian population.                    |
| eurAc             | integer         | count of homozygous individuals for the European super population.                |
| othHc             | integer         | count of homozygous individuals for all other populations.                        |
| maleHc            | integer         | count of homozygous individuals for male population.                              |
| femaleHc          | integer         | count of homozygous individuals for female population.                            |
| failedFilter      | boolean         | True if this variant failed any filters (Note: we do not list the failed filters) |
| reciprocalOverlap | floating point  | Reciprocal overlap. Range: 0 - 1.0                                                |
| annotationOverlap | floating point  | Reciprocal overlap. Range: 0 - 1.0                                                |


**Note:** Following fields are not available in *GRCh38* because the source file does not contain this information:

| Field        |
|--------------|
| femaleAf     |
| maleAf       |
| maleAc       |
| femaleAc     |
| femaleAn     |
| maleAn       |
| allHc        |
| afrHc        |                   
| amrHc        |                                  
| easHc        |                                  
| eurAc        |                                  
| othHc        |                                 
| maleHc       |                              
| femaleHc     |                                
| failedFilter |                 
                 
                 
                 
                                