```json
   "fusionCatcher":[
      {
         "genes":{
            "first":{
               "hgnc":"ETV6",
               "isOncogene":true
            },
            "second":{
               "hgnc":"RUNX1"
            },
            "isParalogPair":true,
            "isPseudogenePair":true,
            "isReadthrough":true
         },
         "germlineSources":[
            "1000 Genomes Project"
         ],
         "somaticSources":[
            "COSMIC",
            "TCGA oesophageal carcinomas"
         ]
      }
   ]
```
| Field            | Type         | Notes                                  |
|:-----------------|:------------:|:---------------------------------------|
| genes            | genes object | 5' gene & 3' gene                      |
| germlineSources  | string array | matches in known germline data sources |
| somaticSources   | string array | matches in known somatic data sources  |

#### genes

| Field            | Type         | Notes                                  |
|:-----------------|:------------:|:---------------------------------------|
| first            | gene object  | 5' gene                                |
| second           | gene object  | 3' gene                                |
| isParalogPair    | bool         | true when both genes are paralogs for each other |
| isPseudogenePair | bool         | true when both genes are pseudogenes for each other |
| isReadthrough    | bool         | true when this fusion gene is a readthrough event (both are on the same strand and there are no genes between them) |

#### gene

| Field            | Type         | Notes                                  |
|:-----------------|:------------:|:---------------------------------------|
| hgnc             | string       | gene symbol. e.g. MSH6                 |
| isOncogene       | bool         | true when this gene is an oncogene     |
