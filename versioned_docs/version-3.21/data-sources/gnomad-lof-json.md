```json
"gnomAD":{ 
   "pLi":1.00e0,
   "pNull":8.94e-40,
   "pRec":1.84e-16,
   "synZ":-8.44e-2,
   "misZ":5.96e-1,
   "loeuf":1.13e0
}
```
| Field | Type  | Notes                                                                                                                        |
|-------|-------|------------------------------------------------------------------------------------------------------------------------------|
| pLi   | float | probability of being intolerant of a single loss-of-function variant (like haploinsufficient genes, observed ~ 0.1*expected) |
| pNull | float | probability of being completely tolerant of loss of function variation (observed = expected)                                 |
| pRec  | float | probability of being intolerant of two loss of function variants (like recessive genes, observed ~ 0.5*expected)             |
| synZ  | float | corrected synonymous Z score                                                                                                 |
| misZ  | float | corrected missense Z score                                                                                                   |
| loeuf | float | loss of function observed/expected upper bound fraction (LOEUF)                                                              |