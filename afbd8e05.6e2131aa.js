(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),r=(n(0),n(169)),o={title:"Getting Started"},c={unversionedId:"introduction/getting-started",id:"version-3.12/introduction/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Nirvana is written in C# using .NET Core (an amazing runtime environment that currently runs on Windows, Linux, Mac OS X, and in Docker images). Once .NET Core has been downloaded, all you need to do is grab the source, compile it, and grab the data files.",source:"@site/versioned_docs/version-3.12/introduction/getting-started.mdx",slug:"/introduction/getting-started",permalink:"/NirvanaDocumentation/3.12/introduction/getting-started",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.12/introduction/getting-started.mdx",version:"3.12",sidebar:"version-3.12/docs",previous:{title:"Dependencies",permalink:"/NirvanaDocumentation/3.12/introduction/dependencies"},next:{title:"ClinVar",permalink:"/NirvanaDocumentation/3.12/data-sources/clinvar"}},l=[{value:"Quick Start",id:"quick-start",children:[]},{value:"Compiling Nirvana",id:"compiling-nirvana",children:[]},{value:"Downloading the data files",id:"downloading-the-data-files",children:[]},{value:"Download a test VCF file",id:"download-a-test-vcf-file",children:[]},{value:"Running Nirvana",id:"running-nirvana",children:[]}],s={toc:l};function u(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Nirvana is written in C# using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.microsoft.com/net/download/core"}),".NET Core")," (an amazing runtime environment that currently runs on Windows, Linux, Mac OS X, and in Docker images). Once .NET Core has been downloaded, all you need to do is grab the source, compile it, and grab the data files."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Nirvana currently uses .NET Core 2.1 or later. Please make sure that you have the most current runtime from the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.microsoft.com/net/download/core"}),".NET Core downloads")," page."))),Object(r.b)("h2",{id:"quick-start"},"Quick Start"),Object(r.b)("p",null,"If you want to get started right away, we've created a script that downloads Nirvana, compiles it, and starts annotating a test file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl -O https://illumina.github.io/NirvanaDocumentation/scripts/TestNirvana.sh\nsh ./TestNirvana.sh\n")),Object(r.b)("p",null,"We have verified that this script works on Windows (using Git Bash or WSL), Linux, and Mac OS X."),Object(r.b)("h2",{id:"compiling-nirvana"},"Compiling Nirvana"),Object(r.b)("p",null,"The following will grab the latest version of Nirvana from GitHub and compile it using the .NET Core compiler:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Bash"}),"git clone https://github.com/Illumina/Nirvana.git\ncd Nirvana\ndotnet build -c Release\n")),Object(r.b)("h2",{id:"downloading-the-data-files"},"Downloading the data files"),Object(r.b)("p",null,"To download the latest data sources (or update the ones that you already have), use the following command to automate the download from S3:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Bash"}),"dotnet bin/Release/netcoreapp2.1/Downloader.dll \\\n     --ga GRCh37 \\\n     -o Data\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"--ga")," argument specifies the genome assembly which can be ",Object(r.b)("inlineCode",{parentName:"li"},"GRCh37"),", ",Object(r.b)("inlineCode",{parentName:"li"},"GRCh38"),", or ",Object(r.b)("inlineCode",{parentName:"li"},"both"),"."),Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"-o")," argument specifies the output directory")),Object(r.b)("h2",{id:"download-a-test-vcf-file"},"Download a test VCF file"),Object(r.b)("p",null,"Here's a toy VCF file you can play around with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Bash"}),"curl -O https://illumina.github.io/NirvanaDocumentation/VCF/HiSeq.10000.vcf\n")),Object(r.b)("h2",{id:"running-nirvana"},"Running Nirvana"),Object(r.b)("p",null,"Once you have downloaded the data sets, use the following command to annotate your VCF:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Bash"}),"dotnet bin/Release/netcoreapp2.1/Nirvana.dll \\\n     -c Data/Cache/GRCh37/Both \\\n     --sd Data/SupplementaryAnnotation/GRCh37 \\\n     -r Data/References/Homo_sapiens.GRCh37.Nirvana.dat \\\n     -i HiSeq.10000.vcf \\\n     -o HiSeq.10000.annotated\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"-c")," argument specifies the cache prefix"),Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"--sd")," argument specifies the supplementary annotation directory"),Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"-r")," argument specifies the compressed reference path"),Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"-i")," argument specifies the input VCF path"),Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"-o")," argument specifies the output filename prefix")),Object(r.b)("p",null,"When running Nirvana, performance metrics are shown as it evaluates each chromosome in the input VCF file:"),Object(r.b)("p",null,Object(r.b)("img",{src:n(254).default})))}u.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(o,".").concat(p)]||d[p]||b[p]||r;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},254:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/NirvanaOutput-c3151d5d62daa1e282b8b0d09e2ba3d9.png"}}]);