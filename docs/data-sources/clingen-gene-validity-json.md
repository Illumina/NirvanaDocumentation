```json
"clingenGeneValidity":[
   {
      "diseaseId":"MONDO_0007893",
      "disease":"Noonan syndrome with multiple lentigines",
      "classification":"no reported evidence",
      "classificationDate":"2018-06-07"
   },
   {
      "diseaseId":"MONDO_0015280",
      "disease":"cardiofaciocutaneous syndrome",
      "classification":"no reported evidence",
      "classificationDate":"2018-06-07"
   }
]
```
| Field               | Type   | Notes                               |
|---------------------|--------|-------------------------------------|
| clingenGeneValidity | object |                                     |
| diseaseId           | string | Monarch Disease Ontology ID (MONDO) |
| disease             | string | disease label                       |
| classification      | string | see below for possible values       |
| classificationDate  | string | yyyy-MM-dd                          |


**classification**
- no reported evidence
- disputed
- limited
- moderate
- definitive
- strong
- refuted
- no known disease relationship
