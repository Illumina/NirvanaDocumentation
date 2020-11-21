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
| acceptorGainDistance | int    | Can be negative (backward) or positive (forward) |
| acceptorGainScore    | float  | Range: 0 - 1.0 (one decimal place precision)     |
| acceptorLossDistance | int    | Can be negative (backward) or positive (forward) |
| acceptorLossScore    | float  | Range: 0 - 1.0 (one decimal place precision)     |
| donorGainDistance    | int    | Can be negative (backward) or positive (forward) |
| donorGainScore       | float  | Range: 0 - 1.0 (one decimal place precision)     |
| donorLossDistance    | int    | Can be negative (backward) or positive (forward) |
| donorLossScore       | float  | Range: 0 - 1.0 (one decimal place precision)     |
