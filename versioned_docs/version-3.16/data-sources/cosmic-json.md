```json
   "cosmicGeneFusions":[
      {
         "id":"COSF881",
         "numSamples":6,
         "geneSymbols":[
            "MYB",
            "NFIB"
         ],
         "hgvsr":"ENST00000341911.5(MYB):r.1_2368::ENST00000397581.2(NFIB):r.2592_3318",
         "histologies":[
            {
               "name":"adenoid cystic carcinoma",
               "numSamples":6
            }
         ],
         "sites":[
            {
               "name":"salivary gland (submandibular)",
               "numSamples":1
            },
            {
               "name":"salivary gland (parotid)",
               "numSamples":1
            },
            {
               "name":"salivary gland (nasal cavity)",
               "numSamples":1
            },
            {
               "name":"breast",
               "numSamples":3
            }
         ],
         "pubMedIds":[
            19841262
         ]
      }
   ]
```
| Field       | Type         | Notes                     |
|:------------|:------------:|:--------------------------|
| id          | string       | COSMIC fusion ID          |
| numSamples  | int          |                           |
| geneSymbols | string array | 5' gene & 3' gene         |
| hgvsr       | string       | HGVS RNA translocation fusion notation |
| histologies | count array  | phenotypic descriptions   |
| sites       | count array  | tissue types              |
| pubMedIds   | int array    | PubMed IDs                |

**Count**

| Field       | Type         | Notes                     |
|:------------|:------------:|:--------------------------|
| name        | string       | description               |
| numSamples  | int          |                           |
