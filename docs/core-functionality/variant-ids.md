---
title: Variant IDs
---

## Overview

Many downstream tools use a variant identifier to store annotation results. We've standardized on using variant identifiers (VIDs) that originated from the notation used by the Broad Institute.

The Broad VID scheme is not only simple, but it has the advantage that a user could create a bare bones VCF entry from the information captured in the identifier. One of the limitations of the Broad VID scheme is that it does not define how to handle structural variants. Our VID scheme attempts to fill that gap.

:::info Conventions
* all chromosomes use Ensembl style notation (i.e. 22 instead of chr22)
* for a reference variant (i.e. no alt allele), replace the period (.) with the reference base
* padding bases are used, neither the reference nor alternate allele can be empty
* some large variant callers lazily output N for the reference allele. If this is the case, replace it with the true reference base
:::

## Small Variants

### VCF Examples

```scss
chr1	66507	.	T	A	184.45	PASS	.
chr1	66521	.	T	TATATA	144.53	PASS	.
chr1	66572	.	GTA	G,GTACTATATATTATA	45.45	PASS	.
```

### Format

`chromosome`&mdash;`position`&mdash;`reference allele`&mdash;`alternate allele`

### VID Examples

* 1-66507-T-A
* 1-66521-T-TATATA
* 1-66572-GTA-G
* 1-66572-G-GTACTATATATTA

## Translocation Breakends

### VCF Example

```scss
chr1	2617277	.	A	AAAAAAAAAAAAAAAAAATTAGTCAGGCAC[chr3:153444911[	.	PASS	SVTYPE=BND
```

### Format

`chromosome`&mdash;`position`&mdash;`reference allele`&mdash;`alternate allele`

### VID Example

* 1-2617277-A-AAAAAAAAAAAAAAAAAATTAGTCAGGCAC[chr3:153444911[

## All Other Structural Variants

### VCF Examples

```scss
chr1	1000	.	G	<ROH>	.	PASS	END=3001000;SVTYPE=ROH
chr1	1350082	.	G	<DEL>	.	PASS	END=1351320;SVTYPE=DEL
chr1	1477854	.	C	<DUP:TANDEM>	.	PASS	END=1477984;SVTYPE=DUP
chr1	1477968	.	T	<INS>	.	PASS	END=1477968;SVTYPE=INS
chr1	1715898	.	N	<DUP>	.	PASS	SVTYPE=CNV;END=1750149
chr1	2650426	.	N	<DEL>	.	PASS	SVTYPE=CNV;END=2653074
chr2	321682	.	T	<INV>	.	PASS	SVTYPE=INV;END=421681
chr20	2633403	.	G	<STR2>	.	PASS	END=2633421
```

### Format

`chromosome`&mdash;`position`&mdash;`end position`&mdash;`reference allele`&mdash;`alternate allele`&mdash;`SVTYPE`

### VID Examples

* 1-1000-3001000-G-&lt;ROH&gt;-ROH
* 1-1350082-1351320-G-&lt;DEL&gt;-DEL
* 1-1477854-1477984-C-&lt;DUP:TANDEM&gt;-DUP
* 1-1477968-1477968-T-&lt;INS&gt;-INS
* 1-1715898-1750149-A-&lt;DUP&gt;-CNV **(replace the N with A)**
* 1-2650426-2653074-N-&lt;DEL&gt;-CNV **(keep the N)**
* 2-321682-421681-T-&lt;INV&gt;-INV
* 20-2633403-2633421-G-&lt;STR2&gt;-STR
