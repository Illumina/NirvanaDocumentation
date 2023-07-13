"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[7859],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4094:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},u=void 0,c={unversionedId:"data-sources/gnomad-lof-json",id:"version-3.17/data-sources/gnomad-lof-json",title:"gnomad-lof-json",description:"| Field | Type  | Notes                                                                                                                        |",source:"@site/versioned_docs/version-3.17/data-sources/gnomad-lof-json.md",sourceDirName:"data-sources",slug:"/data-sources/gnomad-lof-json",permalink:"/NirvanaDocumentation/3.17/data-sources/gnomad-lof-json",editUrl:"https://github.com/Illumina/NirvanaDocumentation/edit/master/versioned_docs/version-3.17/data-sources/gnomad-lof-json.md",tags:[],version:"3.17",frontMatter:{}},p=[],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"gnomAD":{ \n   "pLi":1.00e0,\n   "pNull":8.94e-40,\n   "pRec":1.84e-16,\n   "synZ":-8.44e-2,\n   "misZ":5.96e-1,\n   "loeuf":1.13e0\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pLi"),(0,o.kt)("td",{parentName:"tr",align:null},"float"),(0,o.kt)("td",{parentName:"tr",align:null},"probability of being intolerant of a single loss-of-function variant (like haploinsufficient genes, observed ~ 0.1*expected)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pNull"),(0,o.kt)("td",{parentName:"tr",align:null},"float"),(0,o.kt)("td",{parentName:"tr",align:null},"probability of being completely tolerant of loss of function variation (observed = expected)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pRec"),(0,o.kt)("td",{parentName:"tr",align:null},"float"),(0,o.kt)("td",{parentName:"tr",align:null},"probability of being intolerant of two loss of function variants (like recessive genes, observed ~ 0.5*expected)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"synZ"),(0,o.kt)("td",{parentName:"tr",align:null},"float"),(0,o.kt)("td",{parentName:"tr",align:null},"corrected synonymous Z score")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"misZ"),(0,o.kt)("td",{parentName:"tr",align:null},"float"),(0,o.kt)("td",{parentName:"tr",align:null},"corrected missense Z score")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"loeuf"),(0,o.kt)("td",{parentName:"tr",align:null},"float"),(0,o.kt)("td",{parentName:"tr",align:null},"loss of function observed/expected upper bound fraction (LOEUF)")))))}d.isMDXComponent=!0}}]);