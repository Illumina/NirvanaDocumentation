```json
"spliceAI":[ 
   {
      "hgnc":"BLCAP",
      "acceptorGainDistance":-3,
      "acceptorGainScore":0.3,
      "donorLossDistance":7,
      "donorLossScore":0.9
   },
   { 
      "hgnc":"NNAT",
      "acceptorGainDistance":-1,
      "acceptorGainScore":0.2,
      "donorGainDistance":-2,
      "donorGainScore":0.3
   }
]
```
| Field                | Type   | Notes                                            |
|:---------------------|:------:|:-------------------------------------------------|
| hgnc                 | string | HGNC gene symbol                                 |
| acceptorGainDistance | int    | ± bp from current position                       |
| acceptorGainScore    | float  | range: 0 - 1.0. 1 decimal place                  |
| acceptorLossDistance | int    | ± bp from current position                       |
| acceptorLossScore    | float  | range: 0 - 1.0. 1 decimal place                  |
| donorGainDistance    | int    | ± bp from current position                       |
| donorGainScore       | float  | range: 0 - 1.0. 1 decimal place                  |
| donorLossDistance    | int    | ± bp from current position                       |
| donorLossScore       | float  | range: 0 - 1.0. 1 decimal place                  |
