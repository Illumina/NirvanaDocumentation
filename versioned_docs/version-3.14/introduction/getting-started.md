---
title: Getting Started
---

Illumina Annotator is written in C# using [.NET Core](https://www.microsoft.com/net/download/core) (an amazing runtime environment that currently runs on Windows, Linux, Mac OS X, and in Docker images). Once .NET Core has been downloaded, all you need to do is grab the source, compile it, and grab the data files.

:::tip
Illumina Annotator currently uses .NET Core 2.1 or later. Please make sure that you have the most current runtime from the [.NET Core downloads](https://www.microsoft.com/net/download/core) page.
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

The following will grab the latest version of Illumina Annotator from GitHub and compile it using the .NET Core compiler:

```bash
git clone https://github.com/Illumina/Nirvana.git
cd Nirvana
dotnet build -c Release
```

### GitHub Release Notes

Alternatively, you can grab the latest binaries from our [GitHub Releases](https://github.com/Illumina/Nirvana/releases) page:

```bash
mkdir -p Nirvana/Data
cd Nirvana
unzip Nirvana-3.12.0-dotnet-2.1.0.zip
```

### Docker

You can find us on [Docker Hub](https://hub.docker.com/repository/docker/annotation/nirvana) under `annotation/nirvana`:

:::caution 
We think Docker is fantastic. However, because our data files are usually accessed through a Docker volume, there is a noticeable performance penalty when running Illumina Annotator in Docker.
:::

```bash	
mkdir -p Nirvana/Data
cd Nirvana
docker pull annotation/nirvana:3.9.1
```

For Docker, we have special instructions for running the Downloader:

```bash
sudo docker run --rm -it -v Data:/scratch annotation/nirvana:3.9.1 dotnet \
     /opt/nirvana/Downloader.dll --ga GRCh37 -o /scratch
```

Similarly, we have special instructions for running Illumina Annotator (Here's [a toy VCF](https://illumina.github.io/NirvanaDocumentation/files/HiSeq.10000.vcf.gz) in case you need it):

```bash
sudo docker run --rm -it -v Data:/scratch annotation/nirvana:3.9.1 dotnet \
     /opt/nirvana/Nirvana.dll -c /scratch/Cache/GRCh37/Both \
     -r /scratch/References/Homo_sapiens.GRCh37.Nirvana.dat \
     --sd /scratch/SupplementaryAnnotation/GRCh37 \
     -i /scratch/HiSeq.10000.vcf.gz -o /scratch/HiSeq
```

## Downloading the data files

To download the latest data sources (or update the ones that you already have), use the following command to automate the download from S3:

```bash
dotnet bin/Release/netcoreapp2.1/Downloader.dll \
     --ga GRCh37 \
     -o Data
```

* the `--ga` argument specifies the genome assembly which can be `GRCh37`, `GRCh38`, or `both`.
* the `-o` argument specifies the output directory

:::info Glitches in the Matrix
Every once in a while, the download process does not go smoothly. Perhaps the internet connection cut out or you ran out of disk space. The Downloader attempts to detect these situations by checking the file sizes at the very end. If you see that a file was marked `truncated`, try fixing the root cause and running the downloader again.
:::

:::tip
From time to time, you can re-run the Downloader to get the latest annotation files. It will only download the files that changed.
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
