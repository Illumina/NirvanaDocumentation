"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[8678],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,v=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(v,l(l({ref:t},p),{},{components:n})):a.createElement(v,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6213:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Variant IDs"},c=void 0,s={unversionedId:"core-functionality/variant-ids",id:"version-3.14/core-functionality/variant-ids",isDocsHomePage:!1,title:"Variant IDs",description:"Overview",source:"@site/versioned_docs/version-3.14/core-functionality/variant-ids.md",sourceDirName:"core-functionality",slug:"/core-functionality/variant-ids",permalink:"/NirvanaDocumentation/3.14/core-functionality/variant-ids",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.14/core-functionality/variant-ids.md",version:"3.14",frontMatter:{title:"Variant IDs"},sidebar:"version-3.14/docs",previous:{title:"Custom Annotations",permalink:"/NirvanaDocumentation/3.14/file-formats/custom-annotations"},next:{title:"Gene Fusion Detection",permalink:"/NirvanaDocumentation/3.14/core-functionality/gene-fusions"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Small Variants",id:"small-variants",children:[{value:"VCF Examples",id:"vcf-examples",children:[]},{value:"Format",id:"format",children:[]},{value:"VID Examples",id:"vid-examples",children:[]}]},{value:"Translocation Breakends",id:"translocation-breakends",children:[{value:"VCF Example",id:"vcf-example",children:[]},{value:"Format",id:"format-1",children:[]},{value:"VID Example",id:"vid-example",children:[]}]},{value:"All Other Structural Variants",id:"all-other-structural-variants",children:[{value:"VCF Examples",id:"vcf-examples-1",children:[]},{value:"Format",id:"format-2",children:[]},{value:"VID Examples",id:"vid-examples-1",children:[]}]}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Many downstream tools use a variant identifier to store annotation results. We've standardized on using variant identifiers (VIDs) that originated from the notation used by the Broad Institute."),(0,i.kt)("p",null,"The Broad VID scheme is not only simple, but it has the advantage that a user could create a bare bones VCF entry from the information captured in the identifier. One of the limitations of the Broad VID scheme is that it does not define how to handle structural variants. Our VID scheme attempts to fill that gap."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Conventions")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"all chromosomes use Ensembl style notation (i.e. 22 instead of chr22)"),(0,i.kt)("li",{parentName:"ul"},"for a reference variant (i.e. no alt allele), replace the period (.) with the reference base"),(0,i.kt)("li",{parentName:"ul"},"padding bases are used, neither the reference nor alternate allele can be empty"),(0,i.kt)("li",{parentName:"ul"},"some large variant callers lazily output N for the reference allele. If this is the case, replace it with the true reference base")))),(0,i.kt)("h2",{id:"small-variants"},"Small Variants"),(0,i.kt)("h3",{id:"vcf-examples"},"VCF Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    66507   .   T   A   184.45  PASS    .\nchr1    66521   .   T   TATATA  144.53  PASS    .\nchr1    66572   .   GTA G,GTACTATATATTATA   45.45   PASS    .\n")),(0,i.kt)("h3",{id:"format"},"Format"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"chromosome"),"\u2014",(0,i.kt)("inlineCode",{parentName:"p"},"position"),"\u2014",(0,i.kt)("inlineCode",{parentName:"p"},"reference allele"),"\u2014",(0,i.kt)("inlineCode",{parentName:"p"},"alternate allele")),(0,i.kt)("h3",{id:"vid-examples"},"VID Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1-66507-T-A"),(0,i.kt)("li",{parentName:"ul"},"1-66521-T-TATATA"),(0,i.kt)("li",{parentName:"ul"},"1-66572-GTA-G"),(0,i.kt)("li",{parentName:"ul"},"1-66572-G-GTACTATATATTA")),(0,i.kt)("h2",{id:"translocation-breakends"},"Translocation Breakends"),(0,i.kt)("h3",{id:"vcf-example"},"VCF Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    2617277 .   A   AAAAAAAAAAAAAAAAAATTAGTCAGGCAC[chr3:153444911[  .   PASS    SVTYPE=BND\n")),(0,i.kt)("h3",{id:"format-1"},"Format"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"chromosome"),"\u2014",(0,i.kt)("inlineCode",{parentName:"p"},"position"),"\u2014",(0,i.kt)("inlineCode",{parentName:"p"},"reference allele"),"\u2014",(0,i.kt)("inlineCode",{parentName:"p"},"alternate allele")),(0,i.kt)("h3",{id:"vid-example"},"VID Example"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1-2617277-A-AAAAAAAAAAAAAAAAAATTAGTCAGGCAC[chr3:153444911[")),(0,i.kt)("h2",{id:"all-other-structural-variants"},"All Other Structural Variants"),(0,i.kt)("h3",{id:"vcf-examples-1"},"VCF Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    1000    .   G   <ROH>   .   PASS    END=3001000;SVTYPE=ROH\nchr1    1350082 .   G   <DEL>   .   PASS    END=1351320;SVTYPE=DEL\nchr1    1477854 .   C   <DUP:TANDEM>    .   PASS    END=1477984;SVTYPE=DUP\nchr1    1477968 .   T   <INS>   .   PASS    END=1477968;SVTYPE=INS\nchr1    1715898 .   N   <DUP>   .   PASS    SVTYPE=CNV;END=1750149\nchr1    2650426 .   N   <DEL>   .   PASS    SVTYPE=CNV;END=2653074\nchr2    321682  .   T   <INV>   .   PASS    SVTYPE=INV;END=421681\nchr20   2633403 .   G   <STR2>  .   PASS    END=2633421\n")),(0,i.kt)("h3",{id:"format-2"},"Format"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"chromosome"),"\u2014",(0,i.kt)("inlineCode",{parentName:"p"},"position"),"\u2014",(0,i.kt)("inlineCode",{parentName:"p"},"end position"),"\u2014",(0,i.kt)("inlineCode",{parentName:"p"},"reference allele"),"\u2014",(0,i.kt)("inlineCode",{parentName:"p"},"alternate allele"),"\u2014",(0,i.kt)("inlineCode",{parentName:"p"},"SVTYPE")),(0,i.kt)("h3",{id:"vid-examples-1"},"VID Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1-1000-3001000-G-","<","ROH",">","-ROH"),(0,i.kt)("li",{parentName:"ul"},"1-1350082-1351320-G-","<","DEL",">","-DEL"),(0,i.kt)("li",{parentName:"ul"},"1-1477854-1477984-C-","<","DUP:TANDEM",">","-DUP"),(0,i.kt)("li",{parentName:"ul"},"1-1477968-1477968-T-","<","INS",">","-INS"),(0,i.kt)("li",{parentName:"ul"},"1-1715898-1750149-A-","<","DUP",">","-CNV ",(0,i.kt)("strong",{parentName:"li"},"(replace the N with A)")),(0,i.kt)("li",{parentName:"ul"},"1-2650426-2653074-N-","<","DEL",">","-CNV ",(0,i.kt)("strong",{parentName:"li"},"(keep the N)")),(0,i.kt)("li",{parentName:"ul"},"2-321682-421681-T-","<","INV",">","-INV"),(0,i.kt)("li",{parentName:"ul"},"20-2633403-2633421-G-","<","STR2",">","-STR")))}u.isMDXComponent=!0}}]);