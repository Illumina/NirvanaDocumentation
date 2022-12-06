---
title: Getting Started
---

Nirvana is written in C# using [.NET Core](https://www.microsoft.com/net/download/core) (an amazing runtime environment that currently runs on Windows, Linux, Mac OS X, and in Docker images). Once .NET Core has been downloaded, all you need to do is grab the source, compile it, and grab the data files.

:::tip
Nirvana currently uses .NET Core 2.1. Please make sure that you have the most current runtime from the [.NET Core downloads](https://www.microsoft.com/net/download/core) page.
:::

## Quick Start

If you want to get started right away, we've created [a script](https://illumina.github.io/NirvanaDocumentation/files/TestNirvana.sh) that downloads Nirvana, compiles it, and starts annotating a test file:

```bash
curl -O https://illumina.github.io/NirvanaDocumentation/files/TestNirvana.sh
sh ./TestNirvana.sh
```

We have verified that this script works on Windows (using Git Bash or WSL), Linux, and Mac OS X.

## Getting Nirvana

### Compile from Source

The following will grab the latest version of Nirvana from GitHub and compile it using the .NET Core compiler:

```bash
git clone https://github.com/Illumina/Nirvana.git
cd Nirvana
dotnet build -c Release
```

### GitHub Release Notes

Alternatively, you can grab the latest binaries from our [GitHub Releases](https://github.com/Illumina/Nirvana/releases/tag/v3.2.5) page:

```bash
mkdir -p Nirvana/Data
cd Nirvana
unzip Nirvana-3.2.5-dotnet-2.1.0.zip
```

## Downloading the data files

:::warning Downloader not available
Nirvana 3.2.5 does not include a downloader tool, but these files can be copied over from the TSO 500 or TSO Comprehensive data directory if you have those. Otherwise, an unsupported route is to use the downloader from [Nirvana 3.13](https://github.com/Illumina/Nirvana/releases/tag/v3.13.0) to get the reference, cache, and supplementary annotation files. 
:::

## Download a test VCF file

Here's [a toy VCF file](https://illumina.github.io/NirvanaDocumentation/files/HiSeq.10000.vcf.gz) you can play around with:

```bash
curl -O https://illumina.github.io/NirvanaDocumentation/files/HiSeq.10000.vcf.gz
```

## Running Nirvana

Once you have downloaded the data sets, use the following command to annotate your VCF:

```bash
dotnet bin/Release/netcoreapp2.1/Nirvana.dll \
     -c Data/Cache/GRCh37/Both \
     --sd Data/SupplementaryAnnotation/GRCh37 \
     -r Data/References/Homo_sapiens.GRCh37.Nirvana.dat \
     -i HiSeq.10000.vcf.gz \
     -o HiSeq.10000
```

* the `-c` argument specifies the cache prefix
* the `--sd` argument specifies the supplementary annotation directory
* the `-r` argument specifies the compressed reference path
* the `-i` argument specifies the input VCF path
* the `-o` argument specifies the output filename prefix

When running Nirvana, performance metrics are shown as it evaluates each chromosome in the input VCF file:

```bash
---------------------------------------------------------------------------
Nirvana                                             (c) 2020 Illumina, Inc.
Stromberg, Roy, Lajugie, Jiang, Li, and Kang                         3.12.0
---------------------------------------------------------------------------

Initialization                                         Time     Positions/s
---------------------------------------------------------------------------
Cache                                               00:00:01.8
SA Position Scan                                    00:00:00.7        12902

Reference                                Preload    Annotation   Variants/s
---------------------------------------------------------------------------
chr1                                    00:00:02.3  00:00:04.5         2176

Summary                                                Time         Percent
---------------------------------------------------------------------------
Initialization                                      00:00:02.6       16.5 %
Preload                                             00:00:02.3       15.2 %
Annotation                                          00:00:04.5       29.0 %

Time: 00:00:14.7
```

The output will be a JSON file called `HiSeq.10000.json.gz`. Here's [the full JSON file](https://illumina.github.io/NirvanaDocumentation/files/HiSeq.10000.json.gz).
