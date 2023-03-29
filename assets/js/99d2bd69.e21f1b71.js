"use strict";(self.webpackChunkcdp_docs=self.webpackChunkcdp_docs||[]).push([[228],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?o.createElement(m,i(i({ref:t},p),{},{components:r})):o.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:1},i="Workflow Lifecycle",c={unversionedId:"project_resources/workflow_process",id:"project_resources/workflow_process",title:"Workflow Lifecycle",description:"Using GitHub Projects to plan and manage the work efforts associated with the CDP will support an agile workflow, improve collaboration, and provide transparency to the process.",source:"@site/docs/project_resources/workflow_process.md",sourceDirName:"project_resources",slug:"/project_resources/workflow_process",permalink:"/doc/docs/project_resources/workflow_process",draft:!1,editUrl:"https://github.com/tree/main/cdp-docs/docs/docs/project_resources/workflow_process.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Project Resources",permalink:"/doc/docs/category/project-resources"},next:{title:"CDP Style Guide",permalink:"/doc/docs/project_resources/Style-Guide-Draft"}},s={},l=[{value:"Key Principles",id:"key-principles",level:3},{value:"Workflow Lifecycle",id:"workflow-lifecycle-1",level:3},{value:"Agile Methodology",id:"agile-methodology",level:4},{value:"Iterations",id:"iterations",level:4},{value:"Simple Branching Strategy",id:"simple-branching-strategy",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"workflow-lifecycle"},"Workflow Lifecycle"),(0,n.kt)("p",null,"Using ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects"},"GitHub Projects")," to plan and manage the work efforts associated with the CDP will support an agile workflow, improve collaboration, and provide transparency to the process."),(0,n.kt)("h3",{id:"key-principles"},"Key Principles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A single central ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/orgs/cdp-ucsc/projects/5"},"Project Board")," will collect all the issues, ideas, bugs, etc."),(0,n.kt)("li",{parentName:"ul"},"Project views will be used to focus and prioritize the work and planning. "),(0,n.kt)("li",{parentName:"ul"},"All code changes should be accompanied by a ",(0,n.kt)("a",{parentName:"li",href:"https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues"},"GitHub Issue")),(0,n.kt)("li",{parentName:"ul"},"All changes to the main branch(s) require a pull request and approval by the appropriate reviewers"),(0,n.kt)("li",{parentName:"ul"},"Project team members are encouraged to submit Issues, ideas, bugs, etc.")),(0,n.kt)("h3",{id:"workflow-lifecycle-1"},"Workflow Lifecycle"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Workflow Lifecycle",src:r(9241).Z,width:"771",height:"551"})),(0,n.kt)("h4",{id:"agile-methodology"},"Agile Methodology"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://business.adobe.com/blog/basics/agile"},"Agile project management")," is an incremental and non-linear approach to ",(0,n.kt)("a",{parentName:"p",href:"https://www.workfront.com/project-management"},"project management"),". It focuses on breaking down large projects into manageable tasks, completed in short iterations throughout the ",(0,n.kt)("a",{parentName:"p",href:"https://www.workfront.com/project-management/life-cycle"},"project life cycle"),". "),(0,n.kt)("h4",{id:"iterations"},"Iterations"),(0,n.kt)("p",null,"Iterations are the planning mechanisms that support the agile methodology; they will allow for breaking down the project into realistic work packages and moving the effort forward one iteration at a time.  "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Iteration/Sprint Planning",src:r(7940).Z,width:"814",height:"316"})),(0,n.kt)("h3",{id:"simple-branching-strategy"},"Simple Branching Strategy"),(0,n.kt)("p",null,"In the diagram below, the circles represent commits to a branch; notice multiple features are being worked on simultaneously."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Branching Strategy",src:r(5725).Z,width:"617",height:"389"})))}d.isMDXComponent=!0},5725:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/git_branch_flow-3eaac4a577edc21e18fd8a291b3132be.png"},7940:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/project_board-3ca7d7cf5b4ba2884052cf02ef4882d8.png"},9241:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/workflow-beb839b830e3d8b951c3d35a2e6d21fc.png"}}]);