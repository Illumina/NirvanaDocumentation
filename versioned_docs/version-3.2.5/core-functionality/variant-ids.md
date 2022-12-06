---
title: Variant IDs
---

## Overview

Many downstream tools use a variant identifier to store annotation results. 

:::warning Deprecated
This initial variant ID (VID) scheme was designed to be parsimonious and was not meant to be used to reconstitute the original VCF variant. In later versions of Nirvana, we migrated to the identifier scheme used at the Broad Institute (with some extensions to handle structural variants).
:::

:::info Conventions
* all chromosomes use Ensembl style notation (i.e. 22 instead of chr22)
* for a reference variant (i.e. no alt allele), replace the period (.) with the reference base
* padding bases are used, neither the reference nor alternate allele can be empty
* some large variant callers lazily output N for the reference allele. If this is the case, replace it with the true reference base
:::

## SNV

#### VCF Example
```scss
chr1	69224	.	A	C	.	.	.
```

#### Format
`chromosome`:`position`:`alternate allele`

#### VID Example
* `1:69224:C`

## Insertion

#### VCF Example

```scss
chr1	69567	.	A	AT	.	.	.
```

#### Format

`chromosome`:`position after insertion`:`position before insertion`:`alternate allele OR MD5 hash`

If more than 32 bases are being inserted, the VID scheme uses an MD5 checksum instead

#### VID Example

* `1:69568:69567:T`
* `1:69568:69567:B9ECE18C950AFBFA6B0FDBFA4FF731D3`

## Deletion

#### VCF Example

```scss
chr1	136647	.	GG	G	.	.	.
```

#### Format

`chromosome`:`start position`:`end position`

#### VID Example

* `1:136645:136645`

## Delins

#### VCF Example

```scss
chr1	965025	.	GCAGTGCATGGTGCTGTGAGATCAGCATGTGTG	GTGCAGTGCATGGTGCTGTGAGATCAGCA	.	.	.
```

#### Format

`chromosome`:`start position`:`end position`:`inserted bases`

If more than 32 bases are being inserted, the VID scheme uses an MD5 checksum instead

#### VID Example

* `1:965026:965057:TGCAGTGCATGGTGCTGTGAGATCAGCA`
* `1:965026:965057:5DC27E17BE0B0F184325DC8654E34F1F`

## MNV

#### VCF Example

```scss
chr1	979210	.	TGG	TTT	.	.	.
```

#### Format

`chromosome`:`start position`:`end position`:`alternate allele`

If more than 32 bases are being inserted, the VID scheme uses an MD5 checksum instead

#### VID Example

* `1:979211:979212:TT`
* `1:979211:979212:DF1F3EDB9115ACB0A1E04209B7A9937B`

## CNV

#### VCF Example

```scss
chr1	854895	.	N	<CN0>,<CN3>	.	PASS	SVTYPE=CNV;END=861879;CNVLEN=6984;CIPOS=-291,291;CIEND=-291,291	GT:RC:BC:CN:MCC:MCCQ:QS:FT:DQ	1/2:165.40:12:3:3:16.80:16.71:PASS:.
chr1	814866	.	N	<CNV>	4	q10;CLT10kb	SVTYPE=CNV;END=824517	RC:BC:CN	214:7:4
```

#### Format

`chromosome`:`start position`:`end position`:`copy number or "CNV"`

#### VID Example

* `1:854896:861879:3`
* `1:814867:824517:CNV`

## Inversion (SV)

#### VCF Example

```scss
chr1	17051724	.	C	<INV>	3070	MaxDepth	END=234912187;SVTYPE=INV;SVLEN=217860463	GT:GQ:PR:SR	0/1:3070:77,69:84,76
```

#### Format

`chromosome`:`start position`:`end position`:`Inverse`

#### VID Example

* `1:17051725:234912187:Inverse`

## Translocation (SV)

#### VCF Example

```scss
chr1	797265	.	G	G]chr8:245687]	55	PASS	SVTYPE=BND;CIPOS=0,31	GT:GQ:PR:SR	0/1:55:39,6:20,3
```

#### Format

`chromosome 1`:`breakpoint 1`:`orientation 1`:`chromosome 2`:`breakpoint 2`:`orientation 2`

#### VID Example

* `1:797265:+:8:245687:-`

## Deletion (SV)

#### VCF Example

```scss
chr1	2053194	.	G	<DEL>	38	PASS	END=2055480;SVTYPE=DEL;SVLEN=-2286;IMPRECISE;CIPOS=-143,144;CIEND=-102,102	GT:GQ:PR	0/1:38:3,5
```

#### Format

`chromosome`:`start position`:`end position`

#### VID Example

* `1:2053195:2055480`

## Insertion (SV)

#### VCF Example

```scss
chr1	1925144	.	G	<INS>	1439	PASS	END=1925144;SVTYPE=INS;CIPOS=0,14;CIEND=0,14	GT:GQ:PR:SR	1/1:72:2,7:0,33
```

#### Format

`chromosome`:`start position`:`end position`:INS

#### VID Example

* `1:1925145:1925144:INS`

## Tandem Duplication (SV)

#### VCF Example

```scss
chr1	2454149	.	G	<DUP:TANDEM>	976	MaxDepth	END=2454244;SVTYPE=DUP;SVLEN=95;CIPOS=0,10;CIEND=0,10	GT:GQ:PR:SR	0/1:976:6,0:80,52
```

#### Format

`chromosome`:`start position`:`end position`:TDUP

#### VID Example

* `1:2454150:2454244:TDUP`