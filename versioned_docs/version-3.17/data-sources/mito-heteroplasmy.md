---
title: Mitochondrial Heteroplasmy
---

## Overview

Mitochondrial Heteroplasmy is an aggregate population data set that characterizes the amount of heteroplasmy observed for each variant. The latest version of this data set is based on re-processed 1000 Genomes Project data using the Illumina DRAGEN pipeline.

## JSON File

### Example

```json
{
   "T:C":{
      "ad":[
         1,
         1,
         1,
         1,
         1,
         1
      ],
      "allele_type":"alt",
      "vrf":[
         0.002369668246445498,
         0.0024937655860349127,
         0.0016129032258064516,
         0.0025188916876574307,
         0.0022935779816513763,
         0.002008032128514056
      ],
      "vrf_stats":{
         "kurtosis":38.889891511122556,
         "max":0.0025188916876574307,
         "mean":5.4052190471990743e-05,
         "min":0.0,
         "nobs":246,
         "skewness":6.346664692283075,
         "stdev":0.0003461416264750575,
         "variance":1.1981402557879823e-07
      }
   }
}

```

### Parsing

From the JSON file, we're mainly interested in the following keys:
* `variant` (i.e. `T:C`)
* `ad`
* `vrf`
* `nobs` (number of observations)

:::caution Adjusting for null observations
The `nobs` value indicates how many observations were made. Ideally this would have been represented in the `ad` and `vrf` arrays, but it's left as an exercise for the reader.
:::

#### Binning VRF Data

The `vrf` (variant read frequency) array in the JSON object above is paired with with the `ad` array (allele depths) shown above.

The data in the JSON object has a crazy number of significant digits. This means that as the number of samples increase, this array will grow. To make this more future-proof, Nirvana bins everything according to 0.1% increments.

With the binned data, we end up having 775 distinct `vrf` values in the entire JSON file. This also means that the variant with the largest number of VRFs would originally have 246 entries, but due to binning this will decrease to 143.

#### Pre-processing the Data

The JSON file is converted into a small TSV file that is [embedded in Nirvana](https://github.com/Illumina/Nirvana/blob/main/MitoHeteroplasmy/Resources/MitoHeteroplasmy.tsv.gz). Here is an example of the TSV file:

```scss
#CHROM	POS	REF	ALT	VRF_BINS	VRF_COUNTS
chrM	1	G	.	0.981,0.987,0.988,0.989,0.99,0.991,0.992,0.993,0.994,0.995,0.996,0.997,0.998,0.999	1,2,2,4,7,8,11,19,43,60,48,64,499,1736
chrM	2	A	.	0.981,0.987,0.988,0.989,0.99,0.991,0.992,0.993,0.994,0.995,0.996,0.997,0.998,0.999	1,2,2,4,7,8,11,19,43,60,48,64,499,1736
```

#### Algorithm

Nirvana will calculate mitochondrial heteroplasmy data for every sample in the VCF. Using the computed VRF for each sample, we compute where in the empirical mitochondrial heteroplasmy distribution that VRF occurs and express that as a percentile.

:::info Percentiles
Nirvana uses the [statistical definition of percentile](https://en.wikipedia.org/wiki/Percentile) (indicating the value below which a given percentage of observations in a group of observations falls). Unless the sample's VRF is higher than all the VRFs represented in the distribution, the range will be [0, 1).
:::

## Download URL

:::caution Unavailable
The original data set is only available internally at Illumina at the moment.
:::

## JSON Output

```json {14-17}
"samples":[
   {
      "genotype":"0/1",
      "variantFrequencies":[
         0.333,
         0.5
      ],
      ],
      "alleleDepths":[
         10,
         20,
         30
      ],
      "heteroplasmyPercentile":[
         23.13,
         12.65
      ]
   }
]
```

| Field                  | Type         | Notes                     |
|:-----------------------|:------------:|:--------------------------|
| heteroplasmyPercentile | float array  | one percentile for each variant frequency (each alternate allele) |
