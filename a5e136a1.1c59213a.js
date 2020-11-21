(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{109:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,d=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return a?r.a.createElement(d,c(c({ref:t},b),{},{components:a})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var b=2;b<i;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),i=(a(0),a(109)),l={title:"Variant IDs"},c={unversionedId:"core-functionality/variant-ids",id:"core-functionality/variant-ids",isDocsHomePage:!1,title:"Variant IDs",description:"Overview",source:"@site/docs/core-functionality/variant-ids.md",slug:"/core-functionality/variant-ids",permalink:"/NirvanaDocumentation/core-functionality/variant-ids",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/core-functionality/variant-ids.md",version:"current",sidebar:"docs",previous:{title:"Custom Annotations",permalink:"/NirvanaDocumentation/file-formats/custom-annotations"}},o=[{value:"Overview",id:"overview",children:[]},{value:"Small Variants",id:"small-variants",children:[{value:"VCF Examples",id:"vcf-examples",children:[]},{value:"Format",id:"format",children:[]},{value:"VID Examples",id:"vid-examples",children:[]}]},{value:"Translocation Breakends",id:"translocation-breakends",children:[{value:"VCF Example",id:"vcf-example",children:[]},{value:"Format",id:"format-1",children:[]},{value:"VID Example",id:"vid-example",children:[]}]},{value:"All Other Structural Variants",id:"all-other-structural-variants",children:[{value:"VCF Examples",id:"vcf-examples-1",children:[]},{value:"Format",id:"format-2",children:[]},{value:"VID Examples",id:"vid-examples-1",children:[]}]}],b={rightToc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"Many downstream tools use a variant identifier to store annotation results. We've standardized on using variant identifiers (VIDs) that originated from the notation used by the Broad Institute."),Object(i.b)("p",null,"The Broad VID scheme is not only simple, but it has the advantage that a user could create a bare bones VCF entry from the information captured in the identifier. One of the limitations of the Broad VID scheme is that it does not define how to handle structural variants. Our VID scheme attempts to fill that gap."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Conventions")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"all chromosomes use Ensembl style notation (i.e. 22 instead of chr22)"),Object(i.b)("li",{parentName:"ul"},"for a reference variant (i.e. no alt allele), replace the period (.) with the reference base"),Object(i.b)("li",{parentName:"ul"},"padding bases are used, neither the reference nor alternate allele can be empty"),Object(i.b)("li",{parentName:"ul"},"some large variant callers lazily output N for the reference allele. If this is the case, replace it with the true reference base")))),Object(i.b)("h2",{id:"small-variants"},"Small Variants"),Object(i.b)("h3",{id:"vcf-examples"},"VCF Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"chr1    66507   .   T   A   184.45  PASS    .\nchr1    66521   .   T   TATATA  144.53  PASS    .\nchr1    66572   .   GTA G,GTACTATATATTATA   45.45   PASS    .\n")),Object(i.b)("h3",{id:"format"},"Format"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"chromosome"),"\u2014",Object(i.b)("inlineCode",{parentName:"p"},"position"),"\u2014",Object(i.b)("inlineCode",{parentName:"p"},"reference allele"),"\u2014",Object(i.b)("inlineCode",{parentName:"p"},"alternate allele")),Object(i.b)("h3",{id:"vid-examples"},"VID Examples"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"1-66507-T-A"),Object(i.b)("li",{parentName:"ul"},"1-66521-T-TATATA"),Object(i.b)("li",{parentName:"ul"},"1-66572-GTA-G"),Object(i.b)("li",{parentName:"ul"},"1-66572-G-GTACTATATATTA")),Object(i.b)("h2",{id:"translocation-breakends"},"Translocation Breakends"),Object(i.b)("h3",{id:"vcf-example"},"VCF Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"chr1    2617277 .   A   AAAAAAAAAAAAAAAAAATTAGTCAGGCAC[chr3:153444911[  .   PASS    SVTYPE=BND\n")),Object(i.b)("h3",{id:"format-1"},"Format"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"chromosome"),"\u2014",Object(i.b)("inlineCode",{parentName:"p"},"position"),"\u2014",Object(i.b)("inlineCode",{parentName:"p"},"reference allele"),"\u2014",Object(i.b)("inlineCode",{parentName:"p"},"alternate allele")),Object(i.b)("h3",{id:"vid-example"},"VID Example"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"1-2617277-A-AAAAAAAAAAAAAAAAAATTAGTCAGGCAC[chr3:153444911[")),Object(i.b)("h2",{id:"all-other-structural-variants"},"All Other Structural Variants"),Object(i.b)("h3",{id:"vcf-examples-1"},"VCF Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"chr1    1000    .   G   <ROH>   .   PASS    END=3001000;SVTYPE=ROH\nchr1    1350082 .   G   <DEL>   .   PASS    END=1351320;SVTYPE=DEL\nchr1    1477854 .   C   <DUP:TANDEM>    .   PASS    END=1477984;SVTYPE=DUP\nchr1    1477968 .   T   <INS>   .   PASS    END=1477968;SVTYPE=INS\nchr1    1715898 .   N   <DUP>   .   PASS    SVTYPE=CNV;END=1750149\nchr1    2650426 .   N   <DEL>   .   PASS    SVTYPE=CNV;END=2653074\nchr2    321682  .   T   <INV>   .   PASS    SVTYPE=INV;END=421681\nchr20   2633403 .   G   <STR2>  .   PASS    END=2633421\n")),Object(i.b)("h3",{id:"format-2"},"Format"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"chromosome"),"\u2014",Object(i.b)("inlineCode",{parentName:"p"},"position"),"\u2014",Object(i.b)("inlineCode",{parentName:"p"},"end position"),"\u2014",Object(i.b)("inlineCode",{parentName:"p"},"reference allele"),"\u2014",Object(i.b)("inlineCode",{parentName:"p"},"alternate allele"),"\u2014",Object(i.b)("inlineCode",{parentName:"p"},"SVTYPE")),Object(i.b)("h3",{id:"vid-examples-1"},"VID Examples"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"1-1000-3001000-G-","<","ROH",">","-ROH"),Object(i.b)("li",{parentName:"ul"},"1-1350082-1351320-G-","<","DEL",">","-DEL"),Object(i.b)("li",{parentName:"ul"},"1-1477854-1477984-C-","<","DUP:TANDEM",">","-DUP"),Object(i.b)("li",{parentName:"ul"},"1-1477968-1477968-T-","<","INS",">","-INS"),Object(i.b)("li",{parentName:"ul"},"1-1715898-1750149-A-","<","DUP",">","-CNV ",Object(i.b)("strong",{parentName:"li"},"(replace the N with A)")),Object(i.b)("li",{parentName:"ul"},"1-2650426-2653074-N-","<","DEL",">","-CNV ",Object(i.b)("strong",{parentName:"li"},"(keep the N)")),Object(i.b)("li",{parentName:"ul"},"2-321682-421681-T-","<","INV",">","-INV"),Object(i.b)("li",{parentName:"ul"},"20-2633403-2633421-G-","<","STR2",">","-STR")))}s.isMDXComponent=!0}}]);