(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{179:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),m=p(a),s=r,O=m["".concat(o,".").concat(s)]||m[s]||u[s]||c;return a?n.a.createElement(O,i(i({ref:t},l),{},{components:a})):n.a.createElement(O,i({ref:t},l))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=s;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},71:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),c=(a(0),a(179)),o={},i={unversionedId:"data-sources/mitomap-structural-variants-json",id:"data-sources/mitomap-structural-variants-json",isDocsHomePage:!1,title:"mitomap-structural-variants-json",description:"`json",source:"@site/docs/data-sources/mitomap-structural-variants-json.md",slug:"/data-sources/mitomap-structural-variants-json",permalink:"/NirvanaDocumentation/data-sources/mitomap-structural-variants-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/docs/data-sources/mitomap-structural-variants-json.md",version:"current"},b=[],l={toc:b};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"mitomap":[ \n   { \n      "chromosome":"MT",\n      "begin":"3166",\n      "end":"14152",\n      "variantType":"deletion",\n      "reciprocalOverlap":0.18068,\n      "annotationOverlap":0.42405\n   }\n]\n')),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Field"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Notes"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"chromosome"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"string"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"begin"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"integer"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"end"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"integer"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"variantType"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"string array"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"reciprocalOverlap"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"float"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Range: 0 - 1. Specified up to 5 decimal places")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"annotationOverlap"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"float"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Range: 0 - 1. Specified up to 5 decimal places")))))}p.isMDXComponent=!0}}]);