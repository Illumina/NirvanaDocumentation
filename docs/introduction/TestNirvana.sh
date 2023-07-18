#!/bin/bash

# adjust these paths to reflect where you have downloaded the Nirvana data files
# In this example, we assume that the Cache, References, and SupplementaryDatabase
# folders have been downloaded into the NIRVANA_ROOT folder.

# In addition to downloading the Nirvana data files, make sure you have .NET 6.0
# installed on your computer:
# https://www.microsoft.com/net/download/core

TOP_DIR=~
NIRVANA_BUILD_ZIP=$1
NIRVANA_ROOT=$TOP_DIR/Nirvana
NIRVANA_BUILD_DIR=$NIRVANA_ROOT/build
NIRVANA_BIN=$NIRVANA_BUILD_DIR/Nirvana.dll
DOWNLOADER_BIN=$NIRVANA_BUILD_DIR/Downloader.dll
DATA_DIR=$NIRVANA_ROOT/Data

VCF_PATH=HiSeq.10000.vcf.gz

# just change this to GRCh38 if you want to set everything up for hg38
GENOME_ASSEMBLY=GRCh37

SA_DIR=$DATA_DIR/SupplementaryAnnotation/$GENOME_ASSEMBLY
REF_DIR=$DATA_DIR/References
CACHE_DIR=$DATA_DIR/Cache
REF_TEST=$REF_DIR/Homo_sapiens.${GENOME_ASSEMBLY}.Nirvana.dat

# =====================================================================

YELLOW='\033[1;33m'
RESET='\033[0m'

echo -ne $YELLOW
echo " _   _ _                             "
echo "| \ | (_)                            "
echo "|  \| |_ _ ____   ____ _ _ __   __ _ "
echo "| . \` | | '__\ \ / / _\` | '_ \ / _\` |"
echo "| |\  | | |   \ V / (_| | | | | (_| |"
echo "|_| \_|_|_|    \_/ \__,_|_| |_|\__,_|"
echo -e $RESET

# create the data directories
create_dir() {
    if [ ! -d $1 ]
    then
	mkdir -p $1
    fi
}

# silence pushd and popd
pushd () {
    command pushd "$@" > /dev/null
}

popd () {
    command popd "$@" > /dev/null
}

# ==============================
# unzip the build
# ==============================
create_dir $NIRVANA_BUILD_DIR
cd $NIRVANA_BUILD_DIR
unzip $NIRVANA_BUILD_ZIP

# ==============================
# download all of the data files
# ==============================
create_dir $DATA_DIR
dotnet $DOWNLOADER_BIN --ga $GENOME_ASSEMBLY --out $DATA_DIR

# ==============================
# run Nirvana on a test VCF file
# ==============================
if [ ! -f $VCF_PATH ]
then
    curl -O https://illumina.github.io/NirvanaDocumentation/files/HiSeq.10000.vcf.gz
fi

# analyze it with Nirvana
dotnet $NIRVANA_BIN -c $CACHE_DIR --sd $SA_DIR -r $REF_TEST -i $VCF_PATH -o HiSeq.10000

popd
popd
