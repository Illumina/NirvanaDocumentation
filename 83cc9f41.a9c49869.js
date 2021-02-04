(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),r=(n(0),n(167)),o={title:"Getting Started"},c={unversionedId:"introduction/getting-started",id:"version-3.14/introduction/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Nirvana is written in C# using .NET Core (an amazing runtime environment that currently runs on Windows, Linux, Mac OS X, and in Docker images). Once .NET Core has been downloaded, all you need to do is grab the source, compile it, and grab the data files.",source:"@site/versioned_docs/version-3.14/introduction/getting-started.md",slug:"/introduction/getting-started",permalink:"/NirvanaDocumentation/3.14/introduction/getting-started",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.14/introduction/getting-started.md",version:"3.14",sidebar:"version-3.14/docs",previous:{title:"Dependencies",permalink:"/NirvanaDocumentation/3.14/introduction/dependencies"},next:{title:"Annotating COVID-19",permalink:"/NirvanaDocumentation/3.14/introduction/covid19"}},l=[{value:"Quick Start",id:"quick-start",children:[]},{value:"Getting Nirvana",id:"getting-nirvana",children:[{value:"Compile from Source",id:"compile-from-source",children:[]},{value:"GitHub Release Notes",id:"github-release-notes",children:[]},{value:"Docker",id:"docker",children:[]}]},{value:"Downloading the data files",id:"downloading-the-data-files",children:[]},{value:"Download a test VCF file",id:"download-a-test-vcf-file",children:[]},{value:"Running Nirvana",id:"running-nirvana",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Nirvana is written in C# using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.microsoft.com/net/download/core"}),".NET Core")," (an amazing runtime environment that currently runs on Windows, Linux, Mac OS X, and in Docker images). Once .NET Core has been downloaded, all you need to do is grab the source, compile it, and grab the data files."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Nirvana currently uses .NET Core 2.1 or later. Please make sure that you have the most current runtime from the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.microsoft.com/net/download/core"}),".NET Core downloads")," page."))),Object(r.b)("h2",{id:"quick-start"},"Quick Start"),Object(r.b)("p",null,"If you want to get started right away, we've created ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://illumina.github.io/NirvanaDocumentation/files/TestNirvana.sh"}),"a script")," that downloads Nirvana, compiles it, and starts annotating a test file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl -O https://illumina.github.io/NirvanaDocumentation/files/TestNirvana.sh\nsh ./TestNirvana.sh\n")),Object(r.b)("p",null,"We have verified that this script works on Windows (using Git Bash or WSL), Linux, and Mac OS X."),Object(r.b)("h2",{id:"getting-nirvana"},"Getting Nirvana"),Object(r.b)("h3",{id:"compile-from-source"},"Compile from Source"),Object(r.b)("p",null,"The following will grab the latest version of Nirvana from GitHub and compile it using the .NET Core compiler:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/Illumina/Nirvana.git\ncd Nirvana\ndotnet build -c Release\n")),Object(r.b)("h3",{id:"github-release-notes"},"GitHub Release Notes"),Object(r.b)("p",null,"Alternatively, you can grab the latest binaries from our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Illumina/Nirvana/releases"}),"GitHub Releases")," page:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p Nirvana/Data\ncd Nirvana\nunzip Nirvana-3.12.0-dotnet-2.1.0.zip\n")),Object(r.b)("h3",{id:"docker"},"Docker"),Object(r.b)("p",null,"You can find us on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.docker.com/repository/docker/annotation/nirvana"}),"Docker Hub")," under ",Object(r.b)("inlineCode",{parentName:"p"},"annotation/nirvana"),":"),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"We think Docker is fantastic. However, because our data files are usually accessed through a Docker volume, there is a noticeable performance penalty when running Nirvana in Docker."))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p Nirvana/Data\ncd Nirvana\ndocker pull annotation/nirvana:3.9.1\n")),Object(r.b)("p",null,"For Docker, we have special instructions for running the Downloader:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo docker run --rm -it -v Data:/scratch annotation/nirvana:3.9.1 dotnet \\\n     /opt/nirvana/Downloader.dll --ga GRCh37 -o /scratch\n")),Object(r.b)("p",null,"Similarly, we have special instructions for running Nirvana (Here's ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://illumina.github.io/NirvanaDocumentation/files/HiSeq.10000.vcf.gz"}),"a toy VCF")," in case you need it):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo docker run --rm -it -v Data:/scratch annotation/nirvana:3.9.1 dotnet \\\n     /opt/nirvana/Nirvana.dll -c /scratch/Cache/GRCh37/Both \\\n     -r /scratch/References/Homo_sapiens.GRCh37.Nirvana.dat \\\n     --sd /scratch/SupplementaryAnnotation/GRCh37 \\\n     -i /scratch/HiSeq.10000.vcf.gz -o /scratch/HiSeq\n")),Object(r.b)("h2",{id:"downloading-the-data-files"},"Downloading the data files"),Object(r.b)("p",null,"To download the latest data sources (or update the ones that you already have), use the following command to automate the download from S3:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"dotnet bin/Release/netcoreapp2.1/Downloader.dll \\\n     --ga GRCh37 \\\n     -o Data\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"--ga")," argument specifies the genome assembly which can be ",Object(r.b)("inlineCode",{parentName:"li"},"GRCh37"),", ",Object(r.b)("inlineCode",{parentName:"li"},"GRCh38"),", or ",Object(r.b)("inlineCode",{parentName:"li"},"both"),"."),Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"-o")," argument specifies the output directory")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Glitches in the Matrix")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Every once in a while, the download process does not go smoothly. Perhaps the internet connection cut out or you ran out of disk space. The Downloader attempts to detect these situations by checking the file sizes at the very end. If you see that a file was marked ",Object(r.b)("inlineCode",{parentName:"p"},"truncated"),", try fixing the root cause and running the downloader again."))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"From time to time, you can re-run the Downloader to get the latest annotation files. It will only download the files that changed."))),Object(r.b)("h2",{id:"download-a-test-vcf-file"},"Download a test VCF file"),Object(r.b)("p",null,"Here's ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://illumina.github.io/NirvanaDocumentation/files/HiSeq.10000.vcf.gz"}),"a toy VCF file")," you can play around with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl -O https://illumina.github.io/NirvanaDocumentation/files/HiSeq.10000.vcf.gz\n")),Object(r.b)("h2",{id:"running-nirvana"},"Running Nirvana"),Object(r.b)("p",null,"Once you have downloaded the data sets, use the following command to annotate your VCF:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"dotnet bin/Release/netcoreapp2.1/Nirvana.dll \\\n     -c Data/Cache/GRCh37/Both \\\n     --sd Data/SupplementaryAnnotation/GRCh37 \\\n     -r Data/References/Homo_sapiens.GRCh37.Nirvana.dat \\\n     -i HiSeq.10000.vcf.gz \\\n     -o HiSeq.10000\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"-c")," argument specifies the cache prefix"),Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"--sd")," argument specifies the supplementary annotation directory"),Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"-r")," argument specifies the compressed reference path"),Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"-i")," argument specifies the input VCF path"),Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"-o")," argument specifies the output filename prefix")),Object(r.b)("p",null,"When running Nirvana, performance metrics are shown as it evaluates each chromosome in the input VCF file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"---------------------------------------------------------------------------\nNirvana                                             (c) 2020 Illumina, Inc.\nStromberg, Roy, Lajugie, Jiang, Li, and Kang                         3.12.0\n---------------------------------------------------------------------------\n\nInitialization                                         Time     Positions/s\n---------------------------------------------------------------------------\nCache                                               00:00:01.8\nSA Position Scan                                    00:00:00.7        12902\n\nReference                                Preload    Annotation   Variants/s\n---------------------------------------------------------------------------\nchr1                                    00:00:02.3  00:00:04.5         2176\n\nSummary                                                Time         Percent\n---------------------------------------------------------------------------\nInitialization                                      00:00:02.6       16.5 %\nPreload                                             00:00:02.3       15.2 %\nAnnotation                                          00:00:04.5       29.0 %\n\nTime: 00:00:14.7\n")),Object(r.b)("p",null,"The output will be a JSON file called ",Object(r.b)("inlineCode",{parentName:"p"},"HiSeq.10000.json.gz"),". Here's ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://illumina.github.io/NirvanaDocumentation/files/HiSeq.10000.json.gz"}),"the full JSON file"),"."))}b.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(n),p=a,m=d["".concat(o,".").concat(p)]||d[p]||u[p]||r;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);