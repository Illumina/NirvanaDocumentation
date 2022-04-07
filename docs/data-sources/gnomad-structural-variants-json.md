```json
"gnomAD": [
  {
    chromosome": "2",
    begin": 65671202,
    end": 65820720,
    variantId": "gnomAD-SV_v2.1_DUP_2_5019",
    variantType": "duplication",
    allAf": 0.000046,
    afrAf": 0.000105,
    amrAf": 0,
    easAf": 0,
    eurAf": 0,
    othAf": 0,
    femaleAf": 0,
    maleAf": 0.00009,
    allAc": 1,
    afrAc": 1,
    amrAc": 0,
    easAc": 0,
    eurAc": 0,
    othAc": 0,
    femaleAc": 0,
    maleAc": 1,
    allAn": 21694,
    afrAn": 9534,
    amrAn": 1930,
    easAn": 2416,
    eurAn": 7624,
    othAn": 190,
    femaleAn": 10592,
    maleAn": 11056,
    allHc": 0,
    afrHc": 0,
    amrHc": 0,
    easHc": 0,
    eurHc": 0,
    othHc": 95,
    femaleHc": 0,
    maleHc": 0
  }
]

```

| Field        | Type           | Notes                                                                             |
|--------------|----------------|-----------------------------------------------------------------------------------|
| chromosome   | string         | chromosome number                                                                 |
| begin        | integer        | position interval start                                                           |
| end          | integer        | position internal end                                                             |
| variantType  | string         | structural variant type                                                           |
| variantId    | string         | gnomAD ID                                                                         |
| allAf        | floating point | allele frequency for all populations. Range: 0 - 1.0                              |
| afrAf        | floating point | allele frequency for the African super population. Range: 0 - 1.0                 |
| amrAf        | floating point | allele frequency for the Ad Mixed American super population. Range: 0 - 1.0       |
| easAf        | floating point | allele frequency for the East Asian super population. Range: 0 - 1.0              |
| eurAf        | floating point | allele frequency for the European super population. Range: 0 - 1.0                |
| othAf        | floating point | allele frequency for all other populations. Range: 0 - 1.0                        |
| femaleAf     | floating point | allele frequency for female population. Range: 0 - 1.0                            |
| maleAf       | floating point | allele frequency for male population. Range: 0 - 1.0                              |
| allAc        | integer        | allele count for all populations.                                                 |
| afrAc        | integer        | allele count for the African super population.                                    |
| amrAc        | integer        | allele count for the Ad Mixed American super population.                          |
| easAc        | integer        | allele count for the East Asian super population.                                 |
| eurAc        | integer        | allele count for the European super population.                                   |
| othAc        | integer        | allele count for all other populations.                                           |
| maleAc       | integer        | allele count for male population.                                                 |
| femaleAc     | integer        | allele count for female population.                                               |
| allAn        | integer        | allele number for all populations.                                                |
| afrAn        | integer        | allele number for the African super population.                                   |
| amrAn        | integer        | allele number for the Ad Mixed American super population.                         |
| easAn        | integer        | allele number for the East Asian super population.                                |
| eurAn        | integer        | allele number for the European super population.                                  |
| othAn        | integer        | allele number for all other populations.                                          |
| femaleAn     | integer        | allele number for female population.                                              |
| maleAn       | integer        | allele number for male population.                                                |
| allHc        | integer        | count of homozygous individuals for all populations.                              |
| afrHc        | integer        | count of homozygous individuals for the African / African American population.    |
| amrHc        | integer        | count of homozygous individuals for the Latino population.                        |
| easHc        | integer        | count of homozygous individuals for the East Asian population.                    |
| eurAc        | integer        | count of homozygous individuals for the European super population.                |
| othHc        | integer        | count of homozygous individuals for all other populations.                        |
| maleHc       | integer        | count of homozygous individuals for male population.                              |
| femaleHc     | integer        | count of homozygous individuals for female population.                            |
| failedFilter | boolean        | True if this variant failed any filters (Note: we do not list the failed filters) |



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
                 
                 
                 
                                