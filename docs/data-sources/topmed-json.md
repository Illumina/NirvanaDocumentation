```json
"topmed":{ 
   "allAc":20,
   "allAn":125568,
   "allAf":0.000159,
   "allHc":0,
   "failedFilter":true
}
```
| Field        | Type  | Notes                                         |
|--------------|-------|-----------------------------------------------|
| allAc        | int   | TOPMed allele count                           |
| allAn        | int   | TOPMed allele number. Non-zero integer.       |
| allAf        | float | TOPMed allele frequency (computed by Nirvana) |
| allHc        | int   | TOPMed homozygous count                       |
| failedFilter | bool  | True if this variant failed any filters       |