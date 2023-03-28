"use strict";(self.webpackChunkcdp_docs=self.webpackChunkcdp_docs||[]).push([[6499],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=s(a),c=r,g=m["".concat(d,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(g,i(i({ref:e},p),{},{components:a})):n.createElement(g,i({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3412:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={},i=void 0,o={unversionedId:"cdp-info/Kimball-ETL-Subsystems---WIP",id:"cdp-info/Kimball-ETL-Subsystems---WIP",title:"Kimball-ETL-Subsystems---WIP",description:"The 34 sub systems will be updated to reflect what is still relavent with the shift from Extract Transform and Load to Extract, Load and Transform made possible by current technologies and methodologies.",source:"@site/docs/cdp-info/34-Kimball-ETL-Subsystems---WIP.md",sourceDirName:"cdp-info",slug:"/cdp-info/Kimball-ETL-Subsystems---WIP",permalink:"/doc/docs/cdp-info/Kimball-ETL-Subsystems---WIP",draft:!1,editUrl:"https://github.com/tree/main/cdp-docs/docs/docs/cdp-info/34-Kimball-ETL-Subsystems---WIP.md",tags:[],version:"current",sidebarPosition:34,frontMatter:{},sidebar:"businessProcessSidebar",previous:{title:"CDP Project Docs",permalink:"/doc/docs/category/cdp-project-docs-1"}},d={},s=[],p={toc:s},m="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The 34 sub systems will be updated to reflect what is still relavent with the shift from Extract Transform and Load to Extract, Load and Transform made possible by current technologies and methodologies."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"}," ")),(0,r.kt)("th",{parentName:"tr",align:null},"Sub System"),(0,r.kt)("th",{parentName:"tr",align:null},"Approach / Solution"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Profiling"),(0,r.kt)("td",{parentName:"tr",align:null},"Technical analysis of data to describe its content, consistency, and structure.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Change Data Capture"),(0,r.kt)("td",{parentName:"tr",align:null},"For effective dated tables, ",(0,r.kt)("a",{parentName:"td",href:"https://docs.getdbt.com/docs/build/jinja-macros"},"dbt macros")," will be leveraged at the statging layer to derive effective to and from dates, for non effective dated tables ",(0,r.kt)("a",{parentName:"td",href:"https://docs.getdbt.com/docs/build/snapshots"},"dbt snapshots")," will be used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Extract & Load"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.fivetran.com"},"Fivetran")," - will be leveraged when ever possible to Extract and Load data into the CDP.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Cleansing"),(0,r.kt)("td",{parentName:"tr",align:null},"This activity will begin in the ",(0,r.kt)("a",{parentName:"td",href:"https://docs.getdbt.com/guides/best-practices/how-we-structure/2-staging"},"dbt staging layer")," and be enforced by building ",(0,r.kt)("a",{parentName:"td",href:"https://docs.getdbt.com/docs/build/tests"},"dbt tests")," to confirm assertions about the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Error Event Schema"),(0,r.kt)("td",{parentName:"tr",align:null},"A number of different components will encompass the data pipeline lifecycle, metadata will be collected via the ",(0,r.kt)("a",{parentName:"td",href:"https://hub.getdbt.com/fivetran/fivetran_log/latest/"},"fivetran_log models")," and potentially the ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/brooklyn-data/dbt_artifacts"},"dbt_artifacts package"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"Audit Dimension Assembler"),(0,r.kt)("td",{parentName:"tr",align:null},"A special dimension assembled by the ETL system that contains the metadata context at the moment when a specific fact row is created. ",(0,r.kt)("inlineCode",{parentName:"td"},"Audit Log ?"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Deduplication"),(0,r.kt)("td",{parentName:"tr",align:null},"Eliminating duplicate data that can occur when a dimension is derived from multiple source systems. - ",(0,r.kt)("inlineCode",{parentName:"td"},"TBD"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"Conforming"),(0,r.kt)("td",{parentName:"tr",align:null},"All of the steps required to align the content of some or all of the columns in a dimension with columns in a similar or identical dimensions in other parts of the data warehouse. ",(0,r.kt)("inlineCode",{parentName:"td"},"TBD"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"Slowly Changing Dimension Manager"),(0,r.kt)("td",{parentName:"tr",align:null},"Implements slowly changing dimension (SCD) logic. ",(0,r.kt)("inlineCode",{parentName:"td"},"Is this a role for the project team?"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Surrogate Key Generator"),(0,r.kt)("td",{parentName:"tr",align:null},"Surrogate key generation will be accomplished with the ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/dbt-labs/dbt-utils#generate_surrogate_key-source"},"dbt_utils.generate_surrogate_key"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"Hierarchy Manager"),(0,r.kt)("td",{parentName:"tr",align:null},"Deals with multiple, simultaneous, embedded hierarchical structures within a dimension. ",(0,r.kt)("inlineCode",{parentName:"td"},"Is this a role for the project team?"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"Special Dimension Manager"),(0,r.kt)("td",{parentName:"tr",align:null},"Deals with special dimension like date/time and junk dimensions. ",(0,r.kt)("inlineCode",{parentName:"td"},"Is this a role for the project team?"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"Fact Table Builders"),(0,r.kt)("td",{parentName:"tr",align:null},"Builds the fact tables. ",(0,r.kt)("inlineCode",{parentName:"td"},"Is this a role for the project team?"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"Surrogate Key Pipeline"),(0,r.kt)("td",{parentName:"tr",align:null},"Replaces the operational natural keys in the incoming fact table row with the appropriate dimension surrogate keys. ",(0,r.kt)("inlineCode",{parentName:"td"},"Seems like this would be part of the build process?"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"Multivalued Dimension Bridge Table Builder"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Supports a dimension that takes on multiple values at the lowest granularity of the fact table.")," Seems like this would be part of the build process?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"Late Arriving Data Handler"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Deals with late arriving facts where there is a need to determine which dimension keys were in effect when the activity occurred."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"17"),(0,r.kt)("td",{parentName:"tr",align:null},"Dimension Manager"),(0,r.kt)("td",{parentName:"tr",align:null},"The centralized authority who prepares and publishes conformed dimension for to the data warehouse community. ",(0,r.kt)("inlineCode",{parentName:"td"},"TBD - Governance"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"Fact Provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Owns the administration of one or more fact tables and is responsible for their creation, maintenance and use. ",(0,r.kt)("inlineCode",{parentName:"td"},"TBD - Governance"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"19"),(0,r.kt)("td",{parentName:"tr",align:null},"Aggregate Builder"),(0,r.kt)("td",{parentName:"tr",align:null},"Builds aggregations to improve performance. - ",(0,r.kt)("inlineCode",{parentName:"td"},"Legacy ?"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"dbt Semantic Model"),(0,r.kt)("td",{parentName:"tr",align:null},"Builds OLAP cubes to present dimensional data in an intuitive way. This is one approach to implementing a semantic model.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"21"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Propagation Manager"),(0,r.kt)("td",{parentName:"tr",align:null},"Responsible for the ETL processes required to present conformed, integrated enterprise data from the data warehouse presentation server to other environments for special purposes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"22"),(0,r.kt)("td",{parentName:"tr",align:null},"Job Scheduler"),(0,r.kt)("td",{parentName:"tr",align:null},"Manages the ETL process through a single metadata-driven job control environment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"23"),(0,r.kt)("td",{parentName:"tr",align:null},"Backup"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows the data warehouse to get back to work after a failure.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"24"),(0,r.kt)("td",{parentName:"tr",align:null},"Recovery and Restart"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides crash recovery, stop, and restart capability.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"Version Control"),(0,r.kt)("td",{parentName:"tr",align:null},"Snapshotting capability for the archiving and recovering all of the logic and metadata of the ETL pipeline.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"26"),(0,r.kt)("td",{parentName:"tr",align:null},"Version Migration"),(0,r.kt)("td",{parentName:"tr",align:null},"Manages the progression of ETL logic through the development, test, production lifecycle.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"27"),(0,r.kt)("td",{parentName:"tr",align:null},"Workflow Monitor"),(0,r.kt)("td",{parentName:"tr",align:null},"Monitors the ETL processes to ensure they are operating efficiently and the warehouse is being loaded on a consistently timely basis.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"28"),(0,r.kt)("td",{parentName:"tr",align:null},"Sorting"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides sorting capability used during ETL processing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"29"),(0,r.kt)("td",{parentName:"tr",align:null},"Lineage and Dependency Analyzer"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides an explanation of the complete processing flow that produced or changed any data result.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"30"),(0,r.kt)("td",{parentName:"tr",align:null},"Problem Escalation"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a multi-level support structure similar to what is in place for transactional systems.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"31"),(0,r.kt)("td",{parentName:"tr",align:null},"Parallelizing/Pipelining"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides capabilities to load the data warehouse within given time constraints.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"32"),(0,r.kt)("td",{parentName:"tr",align:null},"Security"),(0,r.kt)("td",{parentName:"tr",align:null},"Delivers role-based security to all data and metadata in the warehouse.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"33"),(0,r.kt)("td",{parentName:"tr",align:null},"Compliance"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows maintaining a chain of custody for all data in the warehouse.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"34"),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata Repository"),(0,r.kt)("td",{parentName:"tr",align:null},"Captures ETL metadata including process, technical, and business metadata.")))))}u.isMDXComponent=!0}}]);