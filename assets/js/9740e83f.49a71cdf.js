"use strict";(self.webpackChunkcdp_docs=self.webpackChunkcdp_docs||[]).push([[990],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>g});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?t.createElement(g,i(i({ref:r},d),{},{components:n})):t.createElement(g,i({ref:r},d))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8711:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4,tags:["Placeholder"]},i="CDP Workflows",s={unversionedId:"program_overview/practitioner/guides/workflow_info",id:"program_overview/practitioner/guides/workflow_info",title:"CDP Workflows",description:"Workflow Processes",source:"@site/docs/program_overview/practitioner/guides/workflow_info.md",sourceDirName:"program_overview/practitioner/guides",slug:"/program_overview/practitioner/guides/workflow_info",permalink:"/doc/docs/program_overview/practitioner/guides/workflow_info",draft:!1,editUrl:"https://github.com/cdp-ucsc/doc/blob/main/cdp-docs/docs/program_overview/practitioner/guides/workflow_info.md",tags:[{label:"Placeholder",permalink:"/doc/docs/tags/placeholder"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,tags:["Placeholder"]},sidebar:"documentationSidebar",previous:{title:"Additional Resources",permalink:"/doc/docs/program_overview/practitioner/guides/additional_resources"},next:{title:"Onboarding",permalink:"/doc/docs/category/onboarding"}},c={},l=[{value:"Workflow Processes",id:"workflow-processes",level:3},{value:"Project Team Members",id:"project-team-members",level:3},{value:"Managers and Leads",id:"managers-and-leads",level:3},{value:"Engineering and Business Teams",id:"engineering-and-business-teams",level:3}],d={toc:l},p="wrapper";function u(e){let{components:r,...n}=e;return(0,o.kt)(p,(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cdp-workflows"},"CDP Workflows"),(0,o.kt)("h3",{id:"workflow-processes"},"Workflow Processes"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This page is a work in progress")),(0,o.kt)("p",null,"The CDP will enhance operational efficiencies through a proactive pursuit of automation and streamlined processes."),(0,o.kt)("h3",{id:"project-team-members"},"Project Team Members"),(0,o.kt)("p",null,"All are encouraged to submit ideas for consideration. For now this can be done through the GitHub Project interface.  Future integrations with Asana are being evaluated."),(0,o.kt)("h3",{id:"managers-and-leads"},"Managers and Leads"),(0,o.kt)("p",null,"Managers and leads will meet on a regular basis to discuss new requests, create, prioritize and assign issues to members of the cdp engineering teams."),(0,o.kt)("mermaid",{value:"\nsequenceDiagram\n    participant new as New\n    participant backlog as Backlog\n    participant ready as Ready\n\n\n    Note over new,ready: Review, prioritize\n    new->>+backlog: After review by managers or leads\n    new->>+ready: After review by managers or leads\n\n    Note over ready: GitHub issues created"}),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"engineering-and-business-teams"},"Engineering and Business Teams"),(0,o.kt)("mermaid",{value:"sequenceDiagram\n    \n    participant in-progress as In Progress\n    participant in-review as In Review\n    participant done as Done\n\n\n    Note over in-progress,in-review: Pull Request \n    in-progress->>in-review: Work is complete and PR is submitted\n\n    Note over in-review,done: Leads added as Reviewers\n    in-review->>done: PR is approved and merged to main\n"}))}u.isMDXComponent=!0}}]);