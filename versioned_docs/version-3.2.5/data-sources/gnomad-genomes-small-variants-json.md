```json
"gnomad":{ 
   "coverage":20,
   "allAf":0.190317,
   "afrAf":0.222876,
   "amrAf":0.121394,
   "easAf":0.239802,
   "finAf":0.136833,
   "nfeAf":0.181282,
   "asjAf":0.258278,
   "othAf":0.186094,
   "allAn":30796,
   "afrAn":8664,
   "amrAn":832,
   "easAn":1618,
   "finAn":3486,
   "nfeAn":14916,
   "asjAn":302,
   "othAn":978,
   "allAc":5861,
   "afrAc":1931,
   "amrAc":101,
   "easAc":388,
   "finAc":477,
   "nfeAc":2704,
   "asjAc":78,
   "othAc":182,
   "allHc":561,
   "afrHc":208,
   "amrHc":6,
   "easHc":42,
   "finHc":31,
   "nfeHc":242,
   "asjHc":13,
   "othHc":19,
   "failedFilter":true
}
```
| Field               | Type   | Notes                                                                                            |
|---------------------|--------|--------------------------------------------------------------------------------------------------|
| coverage            | int    | average coverage (non-negative integer values)                                                   |
| allAf               | float  | allele frequency for all populations. Range: 0 - 1.0                                             |
| allAc               | int    | allele count for all populations. Integer.                                                       |
| allAn               | int    | allele number for all populations. Non-zero integer.                                             |
| allHc               | int    | count of homozygous individuals for all populations. Non-negative integer.                       |
| afrAf               | float  | allele frequency for the African / African American population. Range: 0 - 1.0                   |
| afrAc               | int    | allele count for the African / African American population. Integer.                             |
| afrAn               | int    | allele number for the African / African American population. Non-zero integer.                   |
| afrHc               | int    | count of homozygous individuals for African / African American population. Non-negative integer. |
| amrAf               | float  | allele frequency for the Latino population. Range: 0 - 1.0                                       |
| amrAc               | int    | allele count for the Latino population. Integer.                                                 |
| amrAn               | int    | allele number for the Latino population. Non-zero integer.                                       |
| amrHc               | int    | count of homozygous individuals for Latino population. Non-negative integer.                     |
| easAf               | float  | allele frequency for the East Asian population. Range: 0 - 1.0                                   |
| easAc               | int    | allele count for the East Asian population. Integer.                                             |
| easAn               | int    | allele number for the East Asian population. Non-zero integer.                                   |
| easHc               | int    | count of homozygous individuals for East Asian population. Non-negative integer.                 |
| finAf               | float  | allele frequency for the Finnish population. Range: 0 - 1.0                                      |
| finAc               | int    | allele count for the Finnish population. Integer.                                                |
| finAn               | int    | allele number for the Finnish population. Non-zero integer.                                      |
| finHc               | int    | count of homozygous individuals for Finnish population. Non-negative integer                     |
| nfeAf               | float  | allele frequency for the Non-Finnish European population. Range: 0 - 1.0                         |
| nfeAc               | int    | allele count for the Non-Finnish European population. Integer.                                   |
| nfeAn               | int    | allele number for the Non-Finnish European population. Non-zero integer.                         |
| nfeHc               | int    | count of homozygous individuals for Non-Finnish European population. Non-negative integer        |
| othAf               | float  | allele frequency for the Other population. Range: 0 - 1.0                                        |
| othAc               | int    | allele count for the Other population. Integer.                                                  |
| othAn               | int    | allele number for the Other population. Non-zero integer.                                        |
| othHc               | int    | count of homozygous individuals for Other population. Non-negative integer                       |
| asjAf               | float  | allele frequency for the Ashkenazi Jewish population. Range: 0 - 1.0                             |
| asjAc               | int    | allele count for the Ashkenazi Jewish population Integer.                                        |
| asjAn               | int    | allele number for the Ashkenazi Jewish population. Non-zero integer.                             |
| asjHc               | int    | count of homozygous individuals for the Ashkenazi Jewish population. Non-negative integer        |
| failedFilter        | bool   | True if this variant failed any filters (Note: we do not list the failed filters)                |