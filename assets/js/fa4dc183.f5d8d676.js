"use strict";(self.webpackChunkcdp_docs=self.webpackChunkcdp_docs||[]).push([[684],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=d(t),p=o,h=m["".concat(s,".").concat(p)]||m[p]||c[p]||i;return t?a.createElement(h,l(l({ref:n},u),{},{components:t})):a.createElement(h,l({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=p;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[m]="string"==typeof e?e:o,l[1]=r;for(var d=2;d<i;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=t(7462),o=(t(7294),t(3905));const i={sidebar_position:2},l="SQL Style Guide",r={unversionedId:"project_resources/sql_style_guide",id:"project_resources/sql_style_guide",title:"SQL Style Guide",description:"This guide establishes our standards for SQL and are enforced by code review. Some standards are also enforced by SQLFLuff. The purpose of the guide is to help developers write clear and concise SQL that can be worked on and understood by others.",source:"@site/docs/project_resources/sql_style_guide.md",sourceDirName:"project_resources",slug:"/project_resources/sql_style_guide",permalink:"/doc/docs/project_resources/sql_style_guide",draft:!1,editUrl:"https://github.com/cdp-ucsc/doc/blob/main/cdp-docs/docs/project_resources/sql_style_guide.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"Workflow Lifecycle",permalink:"/doc/docs/project_resources/workflow_process"},next:{title:"Kimball Subsystem Inventory",permalink:"/doc/docs/project_resources/kimball_subsystem"}},s={},d=[{value:"General guidelines",id:"general-guidelines",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Operators",id:"operators",level:3},{value:"Aliases",id:"aliases",level:3},{value:"Grouping",id:"grouping",level:3},{value:"Where vs Having",id:"where-vs-having",level:3},{value:"Union vs Union All",id:"union-vs-union-all",level:3},{value:"Order by",id:"order-by",level:3},{value:"Date functions",id:"date-functions",level:3},{value:"Code comments",id:"code-comments",level:3},{value:"String quotes",id:"string-quotes",level:3},{value:"Joins",id:"joins",level:2},{value:"Using vs On",id:"using-vs-on",level:3},{value:"Multiple tables",id:"multiple-tables",level:3},{value:"Filter using where",id:"filter-using-where",level:3},{value:"CTEs",id:"ctes",level:2},{value:"Formatting:",id:"formatting",level:3},{value:"Subqueries",id:"subqueries",level:3},{value:"Naming",id:"naming",level:2},{value:"Boolean",id:"boolean",level:3},{value:"Table aliases",id:"table-aliases",level:3},{value:"Formatting",id:"formatting-1",level:2},{value:"Alignment",id:"alignment",level:3},{value:"Indentation",id:"indentation",level:3},{value:"Do&#39;s and Don&#39;t",id:"dos-and-dont",level:3},{value:"Case statements:",id:"case-statements",level:3},{value:"Window functions:",id:"window-functions",level:3},{value:"<code>in</code> lists:",id:"in-lists",level:4},{value:"Credits",id:"credits",level:2}],u={toc:d},m="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sql-style-guide"},"SQL Style Guide"),(0,o.kt)("p",null,"This guide establishes our standards for SQL and are enforced by code review. Some standards are also enforced by ",(0,o.kt)("a",{parentName:"p",href:"https://sqlfluff.com/"},"SQLFLuff"),". The purpose of the guide is to help developers write clear and concise SQL that can be worked on and understood by others."),(0,o.kt)("h2",{id:"general-guidelines"},"General guidelines"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Optimize primarily for readability, maintainability, and robustness rather than for fewer lines of code. Newlines are cheap; people's time is expensive.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Avoid large select statements with multiple tables instead utilize CTEs.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If a ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," statement is so large it can't be easily comprehended, it would be better to refactor it into multiple smaller CTEs that are later joined back together.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Lines should ideally not be longer than 120 characters.\nVery long lines are harder to read, especially in situations where space may be limited like on smaller screens or in side-by-side version control diffs.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Identifiers such as aliases and CTE names should be in lowercase ",(0,o.kt)("inlineCode",{parentName:"p"},"snake_case"),".\nIt's more readable, easier to keep consistent, and avoids having to quote identifiers due to capitalization, spaces, or other special characters.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Never use reserved words as identifiers.\nOtherwise the identifier will have to be quoted everywhere it's used. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/sql-reference/reserved-keywords"},"(Snowflake's reserved words)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Never use tab characters.\nIt's easier to keep things consistent in version control when only space characters are used. By default, VS Code inserts spaces and uses 4 space per ",(0,o.kt)("inlineCode",{parentName:"p"},"Tab")," key. ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/codebasics#_indentation"},"(source)")))),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Keywords and function names")," should all be lowercase.\nLowercase is more readable than uppercase, and you won't have to constantly be holding down a shift key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\nselect *\nfrom customers\n\n-- Good\nselect count(*) as customers_count\nfrom customers\n\n-- Bad\nSELECT *\nFROM customers\n\n-- Bad\nSelect *\nFrom customers\n\n-- Bad\nselect COUNT(*) as customers_count\nfrom customers\n")),(0,o.kt)("h3",{id:"operators"},"Operators"),(0,o.kt)("p",null," Use ",(0,o.kt)("inlineCode",{parentName:"p"},"!=")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"<>"),"."),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"!="),' reads like "not equal" which is closer to how we\'d say it out loud.'),(0,o.kt)("h3",{id:"aliases"},"Aliases"),(0,o.kt)("p",null,"Always use the ",(0,o.kt)("inlineCode",{parentName:"p"},"as")," keyword when aliasing columns, expressions, and tables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\nselect count(*) as customers_count\nfrom customers\n\n-- Bad\nselect count(*) customers_count\nfrom customers\n")),(0,o.kt)("h3",{id:"grouping"},"Grouping"),(0,o.kt)("p",null,"Always alias grouping aggregates and other column expressions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\nselect max(id) as max_customer_id\nfrom customers\n\n-- Bad\nselect max(id)\nfrom customers\n")),(0,o.kt)("h3",{id:"where-vs-having"},"Where vs Having"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"having")," when either would suffice.\nQueries filter on the ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," clause earlier in their processing, so ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," filters are more performant."),(0,o.kt)("h3",{id:"union-vs-union-all"},"Union vs Union All"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"union all")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"union")," unless duplicate rows really do need to be removed.\n",(0,o.kt)("inlineCode",{parentName:"p"},"union all")," is more performant because it doesn't have to sort and de-duplicate the rows."),(0,o.kt)("h3",{id:"order-by"},"Order by"),(0,o.kt)("p",null,"Avoid using an ",(0,o.kt)("inlineCode",{parentName:"p"},"order by")," clause unless it's necessary to produce the correct result.\nThere's no need to incur the performance hit.  If consumers of the query need the results ordered they can normally do that themselves."),(0,o.kt)("h3",{id:"date-functions"},"Date functions"),(0,o.kt)("p",null,"For functions that take date part parameters, specify the date part as a string rather than a keyword."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"While some advanced SQL editors can helpfully auto-complete and validate date part keywords, if they get it wrong they'll show superfluous errors."),(0,o.kt)("li",{parentName:"ul"},"Less advanced SQL editors won't syntax highlight date part keywords, so using strings helps them stand out."),(0,o.kt)("li",{parentName:"ul"},"Using a string makes it unambiguous that it's not a column reference.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\ndate_trunc('month', created_at)\n\n-- Bad\ndate_trunc(month, created_at)\n")),(0,o.kt)("h3",{id:"code-comments"},"Code comments"),(0,o.kt)("p",null,"Use -- for single line comments (single comment) and /* */ for multiple line comments (block comment).\nBy default, VS Code includes keyboard shortcuts to toggle single and block comments. ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf"},"(Windows source)")," ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf"},"(Mac source)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Single Comment:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Windows ",(0,o.kt)("inlineCode",{parentName:"li"},"Ctrl+/")),(0,o.kt)("li",{parentName:"ul"},"Mac ",(0,o.kt)("inlineCode",{parentName:"li"},"\u2318/ ")))),(0,o.kt)("li",{parentName:"ul"},"Block Comment:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Windows ",(0,o.kt)("inlineCode",{parentName:"li"},"Shift+Alt+A")),(0,o.kt)("li",{parentName:"ul"},"Mac ",(0,o.kt)("inlineCode",{parentName:"li"},"\u21e7\u2325A"))))),(0,o.kt)("p",null,"When expanding a comment into multiple lines:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Keep the opening ",(0,o.kt)("inlineCode",{parentName:"li"},"/*")," on the same line as the first comment text and the closing ",(0,o.kt)("inlineCode",{parentName:"li"},"*/")," on the same line as the last comment text."),(0,o.kt)("li",{parentName:"ul"},"Indent subsequent lines by 4 spaces, and add an extra space before the first comment text to align it with the text on subsequent lines.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"Single\n-- Good\n\n/* Bad */\n\nBlock\n/*  Good:  Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    Dolor sed viverra ipsum nunc aliquet bibendum enim. */\n\n/* Bad:  Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nDolor sed viverra ipsum nunc aliquet bibendum enim. */\n\n-- Bad:  Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n-- sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n-- Dolor sed viverra ipsum nunc aliquet bibendum enim.\n")),(0,o.kt)("h3",{id:"string-quotes"},"String quotes"),(0,o.kt)("p",null,"Use single quotes for strings.\nSome SQL dialects like BigQuery support using double quotes or even triple quotes for strings, but for most dialects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Double quoted strings represent identifiers."),(0,o.kt)("li",{parentName:"ul"},"Triple quoted strings will be interpreted like the value itself contains leading and trailing single quotes.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\nselect *\nfrom customers\nwhere email like '%@domain.com'\n\n-- Bad\nselect *\nfrom customers\nwhere email like \"%@domain.com\"\n-- Will probably result in an error like `column \"%@domain.com\" does not exist`.\n\n-- Bad\nselect *\nfrom customers\nwhere email like '''%@domain.com'''\n-- Will probably be interpreted like '\\'%domain.com\\''.\n")),(0,o.kt)("h2",{id:"joins"},"Joins"),(0,o.kt)("h3",{id:"using-vs-on"},"Using vs On"),(0,o.kt)("p",null,"Don't use ",(0,o.kt)("inlineCode",{parentName:"p"},"using")," in joins."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Having all joins use ",(0,o.kt)("inlineCode",{parentName:"li"},"on")," is more consistent."),(0,o.kt)("li",{parentName:"ul"},"If additional join conditions need to be added later, ",(0,o.kt)("inlineCode",{parentName:"li"},"on")," is easier to adapt."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"using")," can produce inconsistent results with outer joins in some databases.")),(0,o.kt)("p",null,"Be explicit with all join types for example use ",(0,o.kt)("inlineCode",{parentName:"p"},"inner join")," instead of just ",(0,o.kt)("inlineCode",{parentName:"p"},"join"),".\nIt's better to be explicit so that the join type is crystal clear."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\nselect *\nfrom customers\ninner join orders on customers.id = orders.customer_id\n\n-- Bad\nselect *\nfrom customers\njoin orders on customers.id = orders.customer_id\n")),(0,o.kt)("p",null,"In join conditions, put the table that was referenced first immediately after ",(0,o.kt)("inlineCode",{parentName:"p"},"on"),".\nThis makes it easier to determine if the join is going to cause the results to fan out."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\nselect *\nfrom customers\nleft join orders on customers.id = orders.customer_id\n-- primary key = foreign key --\x3e one-to-many --\x3e fan out\n\n-- Good\nselect *\nfrom orders\nleft join customers on orders.customer_id = customers.id\n-- foreign key = primary key --\x3e many-to-one --\x3e no fan out\n\n-- Bad\nselect *\nfrom customers\nleft join orders on orders.customer_id = customers.id\n")),(0,o.kt)("h3",{id:"multiple-tables"},"Multiple tables"),(0,o.kt)("p",null,"When joining multiple tables, always prefix the column names with the table name/alias.\nYou should be able to tell at a glance where a column is coming from."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\nselect\n    customers.email\n    , orders.invoice_number\n    , orders.total_amount\nfrom customers\ninner join orders on customers.id = orders.customer_id\n\n-- Bad\nselect\n    email\n    , invoice_number\n    , total_amount\nfrom customers\ninner join orders on customers.id = orders.customer_id\n")),(0,o.kt)("h3",{id:"filter-using-where"},"Filter using where"),(0,o.kt)("p",null,"When  joining, put filter conditions in the ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," clause instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"join")," clause.\nOnly join conditions should be put in a ",(0,o.kt)("inlineCode",{parentName:"p"},"join")," clause. All filter conditions should be put together in the ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," clause."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\nselect\n    ...\nfrom orders\ninner join customers on orders.customer_id = customers.id\nwhere\n    orders.total_amount >= 100\n    and customers.email like '%@domain.com'\n\n-- Bad\nselect\n    ...\nfrom orders\ninner join customers on\n    orders.customer_id = customers.id\n    and customers.email like '%@domain.com'\nwhere orders.total_amount >= 100\n")),(0,o.kt)("h2",{id:"ctes"},"CTEs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Where performance permits, CTEs should perform a single, logical unit of work."),(0,o.kt)("li",{parentName:"ul"},"CTE names should be as verbose as needed to convey what they do."),(0,o.kt)("li",{parentName:"ul"},"CTE names should not be prefixed or suffixed with ",(0,o.kt)("inlineCode",{parentName:"li"},"cte"),"."),(0,o.kt)("li",{parentName:"ul"},"CTEs with confusing or notable logic should be commented.")),(0,o.kt)("h3",{id:"formatting"},"Formatting:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start each CTE on its own line, indented one level more than ",(0,o.kt)("inlineCode",{parentName:"li"},"with")," (including the first one, and even if there is only one)."),(0,o.kt)("li",{parentName:"ul"},"Use a single blank line around CTEs to add visual separation."),(0,o.kt)("li",{parentName:"ul"},"Put any comments about the CTE within the CTE's parentheses, at the same indentation level as the ",(0,o.kt)("inlineCode",{parentName:"li"},"select"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\nwith\n    paying_customers as (\n        select ...\n        from customers\n    )\n\nselect ...\nfrom paying_customers\n\n-- Bad\nwith paying_customers as (\n\n    select ...\n    from customers\n\n)\nselect ...\nfrom paying_customers\n\n\n-- Good\nwith\n    paying_customers as (\n        select ...\n        from customers\n    )\n\n    , paying_customers_per_month as (\n        -- CTE comments...\n        select ...\n        from paying_customers\n    )\n\nselect ...\nfrom paying_customers_per_month\n\n-- Bad\nwith paying_customers as (\n\n        select ...\n        from customers\n\n    )\n\n    -- CTE comments...\n    , paying_customers_per_month as (\n\n        select ...\n        from paying_customers\n\n      )\n\nselect ...\nfrom paying_customers_per_month\n")),(0,o.kt)("h3",{id:"subqueries"},"Subqueries"),(0,o.kt)("p",null,"Use CTEs rather than subqueries where possible.\nCTEs will make your queries more straightforward to read/reason about, can be referenced multiple times, and are easier to adapt/refactor later. If you think a subquery is unavoidable, it is a good time to ask for a second pair of eyes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\nwith\n    paying_customers as (\n        select *\n        from customers\n        where plan_name != 'free'\n    )\n\nselect ...\nfrom paying_customers\n\n-- Bad\nselect ...\nfrom (\n    select *\n    from customers\n    where plan_name != 'free'\n) as paying_customers\n")),(0,o.kt)("h2",{id:"naming"},"Naming"),(0,o.kt)("p",null,"The general guide for naming is to be descriptive over minimal."),(0,o.kt)("h3",{id:"boolean"},"Boolean"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Boolean columns should be prefixed with a present or past tense third-person singular verb, such as:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"is_")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"was_"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"has_")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"had_"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"does_")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"did_"))),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"It is also preferred that boolean column values take ",(0,o.kt)("inlineCode",{parentName:"p"},"true/false")," over ",(0,o.kt)("inlineCode",{parentName:"p"},"yes/no")," values.")))),(0,o.kt)("h3",{id:"table-aliases"},"Table aliases"),(0,o.kt)("p",null,"Avoid using unnecessary table aliases, especially initialisms.\nSuggested guidelines:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the table name consists of 3 words or less don't alias it."),(0,o.kt)("li",{parentName:"ul"},"Use a subset of the words as the alias if it makes sense (e.g. if ",(0,o.kt)("inlineCode",{parentName:"li"},"partner_shipments_order_line_items")," is the only line items table being referenced it could be reasonable to alias it as just ",(0,o.kt)("inlineCode",{parentName:"li"},"line_items"),").")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\nselect\n    customers.email,\n    orders.invoice_number\nfrom customers\ninner join orders on customers.id = orders.customer_id\n\n-- Bad\nselect\n    c.email,\n    o.invoice_number\nfrom customers as c\ninner join orders as o on c.id = o.customer_id\n")),(0,o.kt)("h2",{id:"formatting-1"},"Formatting"),(0,o.kt)("p",null,"The general guide for formatting is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If there's only one thing, put it on the same line as the opening keyword."),(0,o.kt)("li",{parentName:"ul"},"If there are multiple things, put each one on its own line (including the first one), indented one level more than the opening keyword.")),(0,o.kt)("h3",{id:"alignment"},"Alignment"),(0,o.kt)("p",null,"Left align everything.\nThis is easier to keep consistent, and is also easier to write."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\nselect email\nfrom customers\nwhere email like '%@domain.com'\n\n-- Bad\nselect email\n  from customers\n where email like '%@domain.com'\n")),(0,o.kt)("h3",{id:"indentation"},"Indentation"),(0,o.kt)("p",null,"Indents should generally be 4 spaces."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\nselect\n    id,\n    email\nfrom customers\nwhere\n    email like '%@domain.com'\n    and plan_name != 'free'\n\n-- Bad\nselect\n  id,\n  email\nfrom customers\nwhere email like '%@domain.com'\n  and plan_name != 'free'\n")),(0,o.kt)("h3",{id:"dos-and-dont"},"Do's and Don't"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," end a line with an operator like ",(0,o.kt)("inlineCode",{parentName:"p"},"and"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"or"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"||"),", etc.\nIf code containing such operators needs to be split across multiple lines, put the operators at the beginning of the subsequent lines."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You should be able to scan the left side of the query text to see the logic being used without having to read to the end of every line."),(0,o.kt)("li",{parentName:"ul"},"The operator is only there for/because of what follows it.  If nothing followed the operator it wouldn't be needed, so putting the operator on the same line as what follows it makes it clearer why it's there.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\nselect *\nfrom customers\nwhere\n    email like '%@domain.com'\n    and plan_name != 'free'\n\n-- Bad\nselect *\nfrom customers\nwhere\n    email like '%@domain.com' and\n    plan_name != 'free'\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use trailing commas"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\nwith\n    customers as (\n        ...\n    ),\n    paying_customers as (\n        ...\n    )\nselect\n    id,\n    email,\n    date_trunc('month', created_at) as signup_month\nfrom paying_customers\nwhere email in (\n        'user-1@example.com',\n        'user-2@example.com',\n        'user-3@example.com'\n    )\n\n-- Bad\nwith\n    customers as (\n        ...\n    )\n    , paying_customers as (\n        ...\n    )\nselect\n    id\n    , email\n    , date_trunc('month', created_at) as signup_month\nfrom paying_customers\nwhere email in (\n        'user-1@example.com'\n        , 'user-2@example.com'\n        , 'user-3@example.com'\n    )\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," follow these standards when using the ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," clause:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If there is only one column expression, put it on the same line as ",(0,o.kt)("inlineCode",{parentName:"li"},"select"),"."),(0,o.kt)("li",{parentName:"ul"},"If there are multiple column expressions, put each one on its own line (including the first one), indented one level more than ",(0,o.kt)("inlineCode",{parentName:"li"},"select"),"."),(0,o.kt)("li",{parentName:"ul"},"If there is a ",(0,o.kt)("inlineCode",{parentName:"li"},"distinct")," qualifier, put it on the same line as ",(0,o.kt)("inlineCode",{parentName:"li"},"select"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\nselect id\n\n\n-- Good\nselect\n    id,\n    email\n\n-- Bad\nselect id, email\n\n-- Bad\nselect id,\n    email\n\n\n-- Good\nselect distinct country\n\n-- Good\nselect distinct\n    state,\n    country\n\n-- Bad\nselect distinct state, country\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," follow these standards when using the ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," clause:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Put the initial table being selected from on the same line as ",(0,o.kt)("inlineCode",{parentName:"li"},"from"),"."),(0,o.kt)("li",{parentName:"ul"},"If there are other tables being joined:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Put each ",(0,o.kt)("inlineCode",{parentName:"li"},"join")," on its own line, at the same indentation level as ",(0,o.kt)("inlineCode",{parentName:"li"},"from"),"."),(0,o.kt)("li",{parentName:"ul"},"If there is only one join condition, put it on the same line as the ",(0,o.kt)("inlineCode",{parentName:"li"},"join"),"."),(0,o.kt)("li",{parentName:"ul"},"If there are multiple join conditions, put each condition on its own line (including the first one), indented one level more than the ",(0,o.kt)("inlineCode",{parentName:"li"},"join"),".")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\nfrom customers\n\n\n-- Good\nfrom customers\nleft join orders on customers.id = orders.customer_id\n\n-- Bad\nfrom customers\n    left join orders on customers.id = orders.customer_id\n\n-- Bad\nfrom customers\nleft join orders\n    on customers.id = orders.customer_id\n\n\n-- Good\nfrom customers\nleft join orders on\n    customers.id = orders.customer_id\n    and customers.region_id = orders.region_id\n\n-- Bad\nfrom customers\nleft join orders on customers.id = orders.customer_id\n    and customers.region_id = orders.region_id\n\n-- Bad\nfrom customers\nleft join orders\n    on customers.id = orders.customer_id\n    and customers.region_id = orders.region_id\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," follow these standards when using the ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," clause:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If there is only one condition, put it on the same line as ",(0,o.kt)("inlineCode",{parentName:"li"},"where"),"."),(0,o.kt)("li",{parentName:"ul"},"If there are multiple conditions, put each one on its own line (including the first one), indented one level more than ",(0,o.kt)("inlineCode",{parentName:"li"},"where"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\nwhere email like '%@domain.com'\n\n\n-- Good\nwhere\n    email like '%@domain.com'\n    and plan_name != 'free'\n\n-- Bad\nwhere email like '%@domain.com' and plan_name != 'free'\n\n-- Bad\nwhere email like '%@domain.com'\n    and plan_name != 'free'\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," follow these standards when using the ",(0,o.kt)("inlineCode",{parentName:"p"},"group by")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"order by")," clauses:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If grouping/ordering by column numbers, put all numbers on the same line as ",(0,o.kt)("inlineCode",{parentName:"li"},"group by"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"order by"),"."),(0,o.kt)("li",{parentName:"ul"},"If grouping/ordering by column names/aliases:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"- If there is only one column, put it on the same line as `group by`/`order by`.\n- If there are multiple columns, put each on its own line (including the first one), indented one level more than `group by`/`order by`.\n")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Grouping by column numbers is preferred over grouping by column names/aliases.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\ngroup by 1, 2, 3\n\n-- Bad\ngroup by\n    1\n    , 2\n    , 3\n\n\n-- Good\norder by plan_name\n\n\n-- Good\norder by\n    plan_name\n    , signup_month\n\n-- Bad\norder by plan_name, signup_month\n\n-- Bad\norder by plan_name\n    , signup_month\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," put extra spaces inside of parentheses."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\nselect *\nfrom customers\nwhere plan_name in ('monthly', 'yearly')\n\n-- Bad\nselect *\nfrom customers\nwhere plan_name in ( 'monthly', 'yearly' )\n\n\n")),(0,o.kt)("h3",{id:"case-statements"},"Case statements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can put a ",(0,o.kt)("inlineCode",{parentName:"li"},"case")," statement all on one line if it only has a single ",(0,o.kt)("inlineCode",{parentName:"li"},"when")," clause and doesn't cause the line's length to be too long."),(0,o.kt)("li",{parentName:"ul"},"For multi-line ",(0,o.kt)("inlineCode",{parentName:"li"},"case")," statements:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"case")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"end as")," should align"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"when(s)")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"else")," should align and be indented one more level than ",(0,o.kt)("inlineCode",{parentName:"li"},"case")," (when there are multiple ",(0,o.kt)("inlineCode",{parentName:"li"},"whens")," for a ",(0,o.kt)("inlineCode",{parentName:"li"},"case"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"and(s)")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"then(s)")," should align and be indented one more level than ",(0,o.kt)("inlineCode",{parentName:"li"},"when")," (when there are multiple conditions for one ",(0,o.kt)("inlineCode",{parentName:"li"},"when"),")")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\nselect\n    case when customers.status_code = 1 then 'Active' else 'Inactive' end as customer_status\n\n-- Bad\nselect\n    case when customers.status_code = 1 and customers.deleted_at is null then 'Active' else 'Inactive' end as customer_status\n\n\n-- Good\nselect\n    ... ,\n    case\n        when customers.status_code = 1\n            and customers.deleted_at is null\n            and ...\n            then 'Active'\n        when customer.status_code = 2 \n            and customers.deleted_at is null\n            and ...\n            then 'Break'\n        else 'Inactive'\n      end as customer_status\n\n-- Bad\nselect\n    ... ,\n    case\n        when customers.status_code = 1 and customers.deleted_at is null\n        then 'Active'\n        when customers.status_code = 2 and customers.deleted_at is null\n        then 'Break'\n        else 'Inactive'\n    end as customer_status\n")),(0,o.kt)("h3",{id:"window-functions"},"Window functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can put a window function all on one line if it doesn't cause the line's length to be too long."),(0,o.kt)("li",{parentName:"ul"},"If breaking a window function into multiple lines:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Put each sub-clause within ",(0,o.kt)("inlineCode",{parentName:"li"},"over ()")," on its own line, indented one level more than the window function:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"partition by")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"order by")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rows between")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"range between")))),(0,o.kt)("li",{parentName:"ul"},"Put the closing ",(0,o.kt)("inlineCode",{parentName:"li"},"over ()")," parenthesis on its own line at the same indentation level as the window function.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\nselect\n    customer_id,\n    invoice_number,\n    row_number() over (partition by customer_id order by created_at) as order_rank\nfrom orders\n\n-- Good\nselect\n    customer_id,\n    invoice_number,\n    row_number() over (\n        partition by customer_id\n        order by created_at\n      ) as order_rank\nfrom orders\n\n-- Bad\nselect\n    customer_id,\n    invoice_number,\n    row_number() over (partition by customer_id\n                         order by created_at) as order_rank\nfrom orders\n")),(0,o.kt)("h4",{id:"in-lists"},(0,o.kt)("inlineCode",{parentName:"h4"},"in")," lists:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Break long lists of ",(0,o.kt)("inlineCode",{parentName:"li"},"in")," values into multiple indented lines with one value per line.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- Good\nwhere email in (\n        'user-1@example.com',\n        'user-2@example.com',\n        'user-3@example.com'\n    )\n\n-- Bad\nwhere email in ('user-1@example.com', 'user-2@example.com', 'user-3@example.com')\n")),(0,o.kt)("h2",{id:"credits"},"Credits"),(0,o.kt)("p",null,"This style guide was inspired in part by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fishtown-analytics/corp/blob/b5c6f55b9e7594e1a1e562edf2378b6dd78a1119/dbt_coding_conventions.md"},"Fishtown Analytics' dbt coding conventions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mattm/sql-style-guide/blob/3eaef3519ca5cc7f21feac6581b257638f9b1564/README.md"},"Matt Mazur's SQL style guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://about.gitlab.com/handbook/business-ops/data-team/sql-style-guide/"},"GitLab's SQL style guide"))))}c.isMDXComponent=!0}}]);