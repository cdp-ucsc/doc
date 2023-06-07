"use strict";(self.webpackChunkcdp_docs=self.webpackChunkcdp_docs||[]).push([[2431],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(a),p=r,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3945:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:2,tags:["Draft","Data Lifecycle"]},i="Data Collection",l={unversionedId:"learning_center/data_collection",id:"learning_center/data_collection",title:"Data Collection",description:"The CDP (Common Data Platform) utilizes Fivetran to extract and load data from campus information systems, which are the sources of data. The extracted data is loaded into Snowflake, which serves as the foundational layer in the CDP. Fivetran continuously syncs data from the campus information systems into the Data Lake. This continuous syncing ensures that the most recent data from the campus information systems is available for analysis and usage within the CDP.",source:"@site/docs/learning_center/data_collection.md",sourceDirName:"learning_center",slug:"/learning_center/data_collection",permalink:"/doc/docs/learning_center/data_collection",draft:!1,editUrl:"https://github.com/cdp-ucsc/doc/blob/main/cdp-docs/docs/learning_center/data_collection.md",tags:[{label:"Draft",permalink:"/doc/docs/tags/draft"},{label:"Data Lifecycle",permalink:"/doc/docs/tags/data-lifecycle"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Draft","Data Lifecycle"]},sidebar:"documentationSidebar",previous:{title:"Data Catalogs",permalink:"/doc/docs/learning_center/data_catalogs"},next:{title:"CDP Glossary",permalink:"/doc/docs/learning_center/glossary"}},c={},s=[{value:"Active Data Sources",id:"active-data-sources",level:2},{value:"Finance",id:"finance",level:3},{value:"Human Resources",id:"human-resources",level:3},{value:"Identity",id:"identity",level:3},{value:"Payroll",id:"payroll",level:3},{value:"Student",id:"student",level:3}],u={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-collection"},"Data Collection"),(0,r.kt)("p",null,"The CDP (Common Data Platform) utilizes ",(0,r.kt)("a",{parentName:"p",href:"/docs/learning_center/glossary/#fivetran"},"Fivetran")," to extract and load data from campus information systems, which are the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learning_center/glossary/#sources"},"sources")," of data. The extracted data is loaded into ",(0,r.kt)("a",{parentName:"p",href:"/docs/learning_center/glossary/#snowflake"},"Snowflake"),", which serves as the foundational layer in the CDP. Fivetran continuously syncs data from the campus information systems into the Data Lake. This continuous syncing ensures that the most recent data from the campus information systems is available for analysis and usage within the CDP."),(0,r.kt)("h2",{id:"active-data-sources"},"Active Data Sources"),(0,r.kt)("h3",{id:"finance"},"Finance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Financial Information System ",(0,r.kt)("a",{parentName:"li",href:"https://financial.ucsc.edu/Pages/Launch_FIS.aspx"},"(FIS)"))),(0,r.kt)("h3",{id:"human-resources"},"Human Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ucpath.ucsc.edu/"},"UCPath"))),(0,r.kt)("h3",{id:"identity"},"Identity"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Identity and Access Management ",(0,r.kt)("a",{parentName:"li",href:"https://its.ucsc.edu/idm/index.html"},"(IAM)")),(0,r.kt)("li",{parentName:"ul"},"User profile information. This provides general identity and status information about users.")),(0,r.kt)("h3",{id:"payroll"},"Payroll"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ucpath.ucsc.edu/"},"UCPath")),(0,r.kt)("li",{parentName:"ul"},"PPS - Legacy Payroll Information System")),(0,r.kt)("h3",{id:"student"},"Student"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Academic Information System (AIS)"),(0,r.kt)("li",{parentName:"ul"},"Curriculum Planning ",(0,r.kt)("a",{parentName:"li",href:"https://registrar.ucsc.edu/curriculum-management-project/cmp-menu/phase-ii.html"},"(CourseDog)"))))}m.isMDXComponent=!0}}]);