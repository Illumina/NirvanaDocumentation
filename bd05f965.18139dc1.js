(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{166:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},O=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),O=o(a),s=n,m=O["".concat(l,".").concat(s)]||O[s]||j[s]||b;return a?r.a.createElement(m,c(c({ref:t},p),{},{components:a})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<b;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(7),b=(a(0),a(166)),l={},c={unversionedId:"data-sources/clinvar-json",id:"version-3.14/data-sources/clinvar-json",isDocsHomePage:!1,title:"clinvar-json",description:"`json",source:"@site/versioned_docs/version-3.14/data-sources/clinvar-json.md",slug:"/data-sources/clinvar-json",permalink:"/NirvanaDocumentation/3.14/data-sources/clinvar-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.14/data-sources/clinvar-json.md",version:"3.14"},i=[],p={rightToc:i};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"clinvar":[\n   {\n      "id":"VCV000036581.3",\n      "reviewStatus":"reviewed by expert panel",\n      "significance":[\n         "benign"\n      ],\n      "refAllele":"G",\n      "altAllele":"A",\n      "lastUpdatedDate":"2020-03-01",\n      "isAlleleSpecific":true\n   },\n   {\n      "id":"RCV000030258.4",\n      "variationId":"VCV000036581.3",\n      "reviewStatus":"reviewed by expert panel",\n      "alleleOrigins":[\n         "germline"\n      ],\n      "refAllele":"G",\n      "altAllele":"A",\n      "phenotypes":[\n         "Lynch syndrome"\n      ],\n      "medGenIds":[\n         "C1333990"\n      ],\n      "omimIds":[\n         "120435"\n      ],\n      "significance":[\n         "benign"\n      ],\n      "lastUpdatedDate":"2017-05-01",\n      "isAlleleSpecific":true\n   }\n]\n')),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Notes"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ClinVar ID")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"variationId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ClinVar VCV ID")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"reviewStatus"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"see possible values below")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"alleleOrigins"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string array"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"see possible values below")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"refAllele"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"altAllele"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"phenotypes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string array"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"medGenIds"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string array"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MedGen IDs")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"omimIds"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string array"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OMIM IDs")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"orphanetIds"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string array"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Orphanet IDs")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"significance"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string array"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"see possible values below")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"lastUpdatedDate"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"yyyy-MM-dd")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"pubMedIds"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string array"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PubMed IDs")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"isAlleleSpecific"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"true when the current variant alternate allele matches the ClinVar alternate allele")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"reviewStatus:")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"no assertion provided"),Object(b.b)("li",{parentName:"ul"},"no assertion criteria provided"),Object(b.b)("li",{parentName:"ul"},"criteria provided, single submitter"),Object(b.b)("li",{parentName:"ul"},"practice guideline"),Object(b.b)("li",{parentName:"ul"},"classified by multiple submitters"),Object(b.b)("li",{parentName:"ul"},"criteria provided, conflicting interpretations"),Object(b.b)("li",{parentName:"ul"},"criteria provided, multiple submitters, no conflicts"),Object(b.b)("li",{parentName:"ul"},"no interpretation for the single variant")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"alleleOrigins:")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"unknown"),Object(b.b)("li",{parentName:"ul"},"other"),Object(b.b)("li",{parentName:"ul"},"germline"),Object(b.b)("li",{parentName:"ul"},"somatic"),Object(b.b)("li",{parentName:"ul"},"inherited"),Object(b.b)("li",{parentName:"ul"},"paternal"),Object(b.b)("li",{parentName:"ul"},"maternal"),Object(b.b)("li",{parentName:"ul"},"de-novo"),Object(b.b)("li",{parentName:"ul"},"biparental"),Object(b.b)("li",{parentName:"ul"},"uniparental"),Object(b.b)("li",{parentName:"ul"},"not-tested"),Object(b.b)("li",{parentName:"ul"},"tested-inconclusive")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"significance:")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"uncertain significance"),Object(b.b)("li",{parentName:"ul"},"not provided"),Object(b.b)("li",{parentName:"ul"},"benign"),Object(b.b)("li",{parentName:"ul"},"likely benign"),Object(b.b)("li",{parentName:"ul"},"likely pathogenic"),Object(b.b)("li",{parentName:"ul"},"pathogenic"),Object(b.b)("li",{parentName:"ul"},"drug response"),Object(b.b)("li",{parentName:"ul"},"histocompatibility"),Object(b.b)("li",{parentName:"ul"},"association"),Object(b.b)("li",{parentName:"ul"},"risk factor"),Object(b.b)("li",{parentName:"ul"},"protective"),Object(b.b)("li",{parentName:"ul"},"affects"),Object(b.b)("li",{parentName:"ul"},"conflicting data from submitters"),Object(b.b)("li",{parentName:"ul"},"other"),Object(b.b)("li",{parentName:"ul"},"no interpretation for the single variant"),Object(b.b)("li",{parentName:"ul"},"conflicting interpretations of pathogenicity")))}o.isMDXComponent=!0}}]);