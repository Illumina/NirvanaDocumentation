#### GRCh38
```json
"primateAI-3D": [
  {
    "aminoAcidPosition": 2,
    "refAminoAcid": "V",
    "altAminoAcid": "M",
    "score": 0.616944,
    "scorePercentile": 0.52,
    "ensemblTranscriptId": "ENST00000335137.4",
    "refSeqTranscriptId": "NM_001005484.1"
  }
]
```

| Field               |  Type   | Notes                         |
|:--------------------|:-------:|:------------------------------|
| aminoAcidPosition   |   int   | Amino Acid Position (1-based) |
| refAminoAcid        | string  | Reference Amino Acid          |
| altAminoAcid        | string  | Alternate Amino Acid          |
| ensemblTranscriptId | string  | Transcript ID (Ensembl)       |
| refSeqTranscriptId  | string  | Transcript ID (RefSeq)        |
| scorePercentile     |  float  | range: 0 - 1.0                |
| score               |  float  | range: 0 - 1.0                |

#### GRCh37
```json
"primateAI": [
   {
      "hgnc":"TP53",
      "scorePercentile":0.3,
   }
]
```
| Field            |   Type    | Notes            |
|:-----------------|:---------:|:-----------------|
| hgnc             |  string   | HGNC Gene Symbol |
| scorePercentile  | float     | range: 0 - 1.0   |