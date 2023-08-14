"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[2696],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},45675:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],l={title:"Getting Started"},s=void 0,c={unversionedId:"introduction/getting-started",id:"introduction/getting-started",title:"Getting Started",description:"Nirvana is written in C# using .NET Core (an amazing runtime environment that currently runs on Windows, Linux, Mac OS X, and in Docker images). Once .NET Core has been downloaded, all you need to do is grab the source, compile it, and grab the data files.",source:"@site/docs/introduction/getting-started.md",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/NirvanaDocumentation/introduction/getting-started",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/introduction/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started"},sidebar:"docs",previous:{title:"Dependencies",permalink:"/NirvanaDocumentation/introduction/dependencies"},next:{title:"Parsing Nirvana JSON",permalink:"/NirvanaDocumentation/introduction/parsing-json"}},d=[{value:"Getting Nirvana",id:"getting-nirvana",children:[{value:"Latest Release",id:"latest-release",children:[],level:3},{value:"GitHub Release Notes",id:"github-release-notes",children:[],level:3},{value:"Quick Start",id:"quick-start",children:[],level:3},{value:"Docker",id:"docker",children:[],level:3}],level:2},{value:"Downloading the data files",id:"downloading-the-data-files",children:[],level:2},{value:"Download a test VCF file",id:"download-a-test-vcf-file",children:[],level:2},{value:"Running Nirvana",id:"running-nirvana",children:[],level:2},{value:"The Nirvana command line",id:"the-nirvana-command-line",children:[{value:"Specifying annotation sources",id:"specifying-annotation-sources",children:[],level:3}],level:2}],p={toc:d};function m(e){var n=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Nirvana is written in C# using ",(0,r.kt)("a",{parentName:"p",href:"https://www.microsoft.com/net/download/core"},".NET Core")," (an amazing runtime environment that currently runs on Windows, Linux, Mac OS X, and in Docker images). Once .NET Core has been downloaded, all you need to do is grab the source, compile it, and grab the data files."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Nirvana currently uses .NET6.0. Please make sure that you have the most current runtime from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.microsoft.com/net/download/core"},".NET Core downloads")," page."))),(0,r.kt)("h2",{id:"getting-nirvana"},"Getting Nirvana"),(0,r.kt)("h3",{id:"latest-release"},"Latest Release"),(0,r.kt)("p",null,"Contact the team (",(0,r.kt)("a",{parentName:"p",href:"mailto:Nirvana@illumina.com"},"Nirvana@illumina.com"),") to obtain the latest release and or Docker image."),(0,r.kt)("h3",{id:"github-release-notes"},"GitHub Release Notes"),(0,r.kt)("p",null,"Alternatively, you can grab the previous binaries from our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Illumina/Nirvana/releases"},"GitHub Releases")," page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p Nirvana/Data\ncd Nirvana\nunzip Nirvana-3.18.1-net6.0.zip\n")),(0,r.kt)("h3",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"If you want to get started right away, we've created ",(0,r.kt)("a",{target:"_blank",href:t(79494).Z},"a script")," that unzips the Nirvana build, downloads the annotation data, and starts annotating a test file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bash ./TestNirvana.sh NirvanaBuild.zip\n")),(0,r.kt)("p",null,"We have verified that this script works on Windows (using Git Bash or WSL), Linux, and Mac OS X."),(0,r.kt)("h3",{id:"docker"},"Docker"),(0,r.kt)("p",null,"Obtain the docker image in a zip file (e.g. Nirvana-v3.21.0-net6.0-docker.tar.gz), and load it as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker load < Nirvana-v3.21.0-net6.0-docker.tar.gz\n")),(0,r.kt)("p",null,"For Docker, we have special instructions for running the Downloader:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it -v local/data/folder:/scratch nirvana:v3.21.0 Downloader --ga GRCh37 -o /scratch\n")),(0,r.kt)("p",null,"Similarly, we have special instructions for running Nirvana (Here's ",(0,r.kt)("a",{parentName:"p",href:"https://illumina.github.io/NirvanaDocumentation/files/HiSeq.10000.vcf.gz"},"a toy VCF")," in case you need it):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it -v local/data/folder:/scratch nirvana:v3.21.0 Nirvana -c /scratch/Cache/ \\\n     -r /scratch/References/Homo_sapiens.GRCh37.Nirvana.dat \\\n     --sd /scratch/SupplementaryAnnotation/GRCh37 \\\n     -i /scratch/HiSeq.10000.vcf.gz -o /scratch/HiSeq\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We think Docker is fantastic. However, because our data files are usually accessed through a Docker volume, there is a noticeable performance penalty when running Nirvana in Docker."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For convenience, the user is encouraged to create aliases for the docker commands. For example:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'alias nirvana="docker run --rm -it -v local/data/folder:/scratch nirvana:v3.21.0 Nirvana"\n')))),(0,r.kt)("h2",{id:"downloading-the-data-files"},"Downloading the data files"),(0,r.kt)("p",null,"To download the latest data sources (or update the ones that you already have), use the following command to automate the download from S3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet bin/Release/net6.0/Downloader.dll \\\n     --ga GRCh37 \\\n     -o Data\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"--ga")," argument specifies the genome assembly which can be ",(0,r.kt)("inlineCode",{parentName:"li"},"GRCh37"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"GRCh38"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"both"),"."),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"-o")," argument specifies the output directory")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Glitches in the Matrix")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Every once in a while, the download process does not go smoothly. Perhaps the internet connection cut out or you ran out of disk space. The Downloader attempts to detect these situations by checking the file sizes at the very end. If you see that a file was marked ",(0,r.kt)("inlineCode",{parentName:"p"},"truncated"),", try fixing the root cause and running the downloader again."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"From time to time, you can re-run the Downloader to get the latest annotation files. It will only download the files that changed."))),(0,r.kt)("h2",{id:"download-a-test-vcf-file"},"Download a test VCF file"),(0,r.kt)("p",null,"Here's ",(0,r.kt)("a",{parentName:"p",href:"https://illumina.github.io/NirvanaDocumentation/files/HiSeq.10000.vcf.gz"},"a toy VCF file")," you can play around with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O https://illumina.github.io/NirvanaDocumentation/files/HiSeq.10000.vcf.gz\n")),(0,r.kt)("h2",{id:"running-nirvana"},"Running Nirvana"),(0,r.kt)("p",null,"Once you have downloaded the data sets, use the following command to annotate your VCF:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet bin/Release/net6.0/Nirvana.dll \\\n     -c Data/Cache \\\n     --sd Data/SupplementaryAnnotation/GRCh37 \\\n     -r Data/References/Homo_sapiens.GRCh37.Nirvana.dat \\\n     -i HiSeq.10000.vcf.gz \\\n     -o HiSeq.10000\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"-c")," argument specifies the cache directory"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"--sd")," argument specifies the supplementary annotation directory"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"-r")," argument specifies the compressed reference path"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"-i")," argument specifies the input VCF path"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"-o")," argument specifies the output filename prefix")),(0,r.kt)("p",null,"When running Nirvana, performance metrics are shown as it evaluates each chromosome in the input VCF file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"---------------------------------------------------------------------------\nNirvana                                             (c) 2023 Illumina, Inc.\nStromberg, Roy, Platzer, Siddiqui, Ouyang, et al                     3.21.0\n---------------------------------------------------------------------------\n\nInitialization                                         Time     Positions/s\n---------------------------------------------------------------------------\nCache                                               00:00:00.0\nSA Position Scan                                    00:00:00.0      153,634\n\nReference                                Preload    Annotation   Variants/s\n---------------------------------------------------------------------------\nchr1                                    00:00:00.2  00:00:00.8       11,873\n\nSummary                                                Time         Percent\n---------------------------------------------------------------------------\nInitialization                                      00:00:00.0        1.5 %\nPreload                                             00:00:00.2        4.9 %\nAnnotation                                          00:00:00.8       18.5 %\n\nTime: 00:00:04.4\n")),(0,r.kt)("p",null,"The output will be a JSON file called ",(0,r.kt)("inlineCode",{parentName:"p"},"HiSeq.10000.json.gz"),". Here's ",(0,r.kt)("a",{parentName:"p",href:"https://illumina.github.io/NirvanaDocumentation/files/HiSeq.10000.json.gz"},"the full JSON file"),"."),(0,r.kt)("h2",{id:"the-nirvana-command-line"},"The Nirvana command line"),(0,r.kt)("p",null,"The full command line options can be viewed by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-h")," option or no options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet bin/Release/net6.0/Nirvana.dll\n---------------------------------------------------------------------------\nNirvana                                             (c) 2023 Illumina, Inc.\nStromberg, Roy, Platzer, Siddiqui, Ouyang, et al                     3.21.0\n---------------------------------------------------------------------------\n\nUSAGE: dotnet Nirvana.dll -i <vcf path> -c <cache dir> --sd <sa dir> -r <ref path> -o <base output filename>\nAnnotates a set of variants\n\nOPTIONS:\n      --cache, -c <directory>\n                             input cache directory\n      --in, -i <path>        input VCF path\n      --out, -o <file path>  output file path\n      --ref, -r <path>       input compressed reference sequence path\n      --sd <directory>       input supplementary annotation directory\n      --sources, -s <VALUE>  annotation data sources to be used (comma\n                               separated list of supported tags)\n      --force-mt             forces to annotate mitochondrial variants\n      --legacy-vids          enables support for legacy VIDs\n      --enable-dq            report DQ from VCF samples field\n      --enable-bidirectional-fusions\n                             enables support for bidirectional gene fusions\n      --str <VALUE>          user provided STR annotation TSV file\n      --vcf-info <VALUE>     additional vcf info field keys (comma separated)\n                               desired in the output\n      --vcf-sample-info <VALUE>\n                             additional vcf format field keys (comma separated)\n                                desired in the output\n      --help, -h             displays the help menu\n      --version, -v          displays the version\n\nSupplementary annotation version: 69, Reference version: 7\n")),(0,r.kt)("h3",{id:"specifying-annotation-sources"},"Specifying annotation sources"),(0,r.kt)("p",null,"By default, Nirvana will use all available data sources. However, the user can customize the set of sources using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--sources|-s")," option. If an unknown source is specified, a warning message will be printed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet bin/Release/net6.0/Nirvana.dll \\\n     -c Data/Cache/GRCh37 \\\n     --sd Data/SupplementaryAnnotation/GRCh37 \\\n     -r Data/References/Homo_sapiens.GRCh37.Nirvana.dat \\\n     -i HiSeq.10000.vcf.gz \\\n     -o HiSeq.10000 \\\n     -s omim,gnomad,ense\n ---------------------------------------------------------------------------\n Nirvana                                             (c) 2023 Illumina, Inc.\n Stromberg, Roy, Platzer, Siddiqui, Ouyang, et al                     3.21.0\n ---------------------------------------------------------------------------\n\n WARNING: Unknown tag in data-sources: ense.\n Available values are: aminoAcidConservation,primateAI,dbsnp,spliceAI,revel,cosmic,clinvar,gnomad,\n mitomap,oneKg,gmeVariome,topmed,clingen,decipher,gnomAD-preview,clingenDosageSensitivityMap,\n gerpScore,dannScore,omim,clingenGeneValidity,phylopScore,lowComplexityRegion,refMinor,\n heteroplasmy,Ensembl,RefSeq\n\n Initialization                                         Time     Positions/s\n ---------------------------------------------------------------------------\n SA Position Scan                                    00:00:00.3      307,966\n ....\n ..\n")),(0,r.kt)("p",null,"The list of available values is compiled from the files provided (using ",(0,r.kt)("inlineCode",{parentName:"p"},"-c")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--sd")," options)."))}m.isMDXComponent=!0},79494:function(e,n,t){n.Z=t.p+"assets/files/TestNirvana-393f155ae4157b0ffbd1b7e399348477.sh"}}]);