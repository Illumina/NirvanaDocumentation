#!/bin/bash

# The first argument is the path to the release zip file.
# adjust these paths to reflect where you have downloaded the Illumina Connected Annotations data files
# In this example, we assume that the Cache, References, and SupplementaryDatabase
# folders have been downloaded into the ILLUMINA_ANNOTATOR_ROOT folder.

# In addition to downloading the Illumina Connected Annotations data files, make sure you have .NET 6.0
# installed on your computer:
# https://www.microsoft.com/net/download/core


ILLUMINA_ANNOTATOR_BUILD_ZIP=$1
ILLUMINA_ANNOTATOR_ROOT=~/IlluminaConnectedAnnotationsTest
ILLUMINA_ANNOTATOR_BUILD_DIR=$ILLUMINA_ANNOTATOR_ROOT/build
ILLUMINA_ANNOTATOR_BIN=$ILLUMINA_ANNOTATOR_BUILD_DIR/Annotator.dll
DOWNLOADER_BIN=$ILLUMINA_ANNOTATOR_BUILD_DIR/Downloader.dll
DATA_DIR=$ILLUMINA_ANNOTATOR_ROOT/Data

VCF_PATH=HiSeq.10000.vcf.gz

# just change this to GRCh38 if you want to set everything up for hg38
GENOME_ASSEMBLY=GRCh37

SA_DIR=$DATA_DIR/SupplementaryAnnotation/$GENOME_ASSEMBLY
REF_DIR=$DATA_DIR/References
CACHE_DIR=$DATA_DIR/Cache
REF_TEST=$REF_DIR/Homo_sapiens.${GENOME_ASSEMBLY}.Nirvana.dat

########## Help function #############
PrintHelp(){
	echo "USAGE: ./TestIlluminaConnectedAnnotations.sh /path/to/build/Annotator.zip"
}
############ Checking arguments ########
if [ "$#" -neq 1 ] ; then
	PrintHelp
	exit
fi
#######################################


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
    echo "making directory $1"
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
create_dir $ILLUMINA_ANNOTATOR_BUILD_DIR
cd $ILLUMINA_ANNOTATOR_BUILD_DIR
unzip $ILLUMINA_ANNOTATOR_BUILD_ZIP

# ==============================
# download all of the data files
# ==============================
echo "Download all data files"
create_dir $DATA_DIR
dotnet $DOWNLOADER_BIN --ga $GENOME_ASSEMBLY --out $DATA_DIR

# ==============================
# run Illumina Connected Annotations on a test VCF file
# ==============================
echo "run Illumina Connected Annotations on a test VCF file"
if [ ! -f $VCF_PATH ]
then
    curl -O https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/files/HiSeq.10000.vcf.gz
fi

# analyze it with IlluminaConnectedAnnotations
dotnet $ILLUMINA_ANNOTATOR_BIN -c $CACHE_DIR --sd $SA_DIR -r $REF_TEST -i $VCF_PATH -o HiSeq.10000

popd
popd
