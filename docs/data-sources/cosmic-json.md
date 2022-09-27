```json
{
   "id":"COSV58272668",
   "numSamples":8,
   "refAllele":"-",
   "altAllele":"CCT",
   "histologies":[
      {
         "name":"carcinoma (serous carcinoma)",
         "numSamples":2
      },
      {
         "name":"meningioma (fibroblastic)",
         "numSamples":1
      },
      {
         "name":"carcinoma",
         "numSamples":1
      },
      {
         "name":"carcinoma (squamous cell carcinoma)",
         "numSamples":1
      },
      {
         "name":"meningioma (transitional)",
         "numSamples":1
      },
      {
         "name":"carcinoma (adenocarcinoma)",
         "numSamples":1
      },
      {
         "name":"other (neoplasm)",
         "numSamples":1
      }
   ],
   "sites":[
      {
         "name":"ovary",
         "numSamples":2
      },
      {
         "name":"meninges",
         "numSamples":2
      },
      {
         "name":"thyroid",
         "numSamples":2
      },
      {
         "name":"cervix",
         "numSamples":1
      },
      {
         "name":"large intestine (colon)",
         "numSamples":1
      }
   ],
   "pubMedIds":[
      25738363,
      27548314
   ],
   "confirmedSomatic":true,
   "drugResistance":true, /* not in this particular COSMIC variant */
   "isAlleleSpecific":true
}
```
| Field            | Type        | Notes                      |
|:-----------------|:-----------:|:---------------------------|
| id               | string      | COSMIC Genomic Mutation ID |
| numSamples       | int         |                            |
| refAllele        | string      |                            |
| altAllele        | string      |                            |
| histologies      | count array | phenotypic descriptions    |
| sites            | count array | tissue types               |
| pubMedIds        | int array   | PubMed IDs                 |
| confirmedSomatic | bool        | true when the variant is a confirmed somatic variant           |
| drugResistance   | bool        | true when the variant has been associated with drug resistance |

**Count**

| Field       | Type         | Notes                     |
|:------------|:------------:|:--------------------------|
| name        | string       | description               |
| numSamples  | int          |                           |
