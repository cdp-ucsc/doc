"use strict";(self.webpackChunkcdp_docs=self.webpackChunkcdp_docs||[]).push([[795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=l,h=u["".concat(o,".").concat(p)]||u[p]||c[p]||i;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:l,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),l=(n(7294),n(3905));const i={sidebar_position:2},r="CDP Style Guide",s={unversionedId:"project_resources/Style-Guide-Draft",id:"project_resources/Style-Guide-Draft",title:"CDP Style Guide",description:"copied from dbt Style guide",source:"@site/docs/project_resources/Style-Guide-Draft.md",sourceDirName:"project_resources",slug:"/project_resources/Style-Guide-Draft",permalink:"/doc/docs/project_resources/Style-Guide-Draft",draft:!1,editUrl:"https://github.com/tree/main/cdp-docs/docs/docs/project_resources/Style-Guide-Draft.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"Workflow Lifecycle",permalink:"/doc/docs/project_resources/workflow_process"},next:{title:"Kimball Subsystem Inventory",permalink:"/doc/docs/project_resources/kimball_subsystem"}},o={},d=[{value:"Sources",id:"sources",level:2},{value:"Notes:",id:"notes",level:3},{value:"Staging",id:"staging",level:2},{value:"Notes:",id:"notes-1",level:3},{value:"Model Naming",id:"model-naming",level:2},{value:"Model configuration",id:"model-configuration",level:2},{value:"dbt conventions",id:"dbt-conventions",level:2},{value:"Testing",id:"testing",level:2},{value:"Naming and field conventions",id:"naming-and-field-conventions",level:2},{value:"CTEs",id:"ctes",level:2},{value:"SQL style guide",id:"sql-style-guide",level:2},{value:"Example SQL",id:"example-sql",level:3},{value:"YAML style guide",id:"yaml-style-guide",level:2},{value:"Example YAML",id:"example-yaml",level:3},{value:"Jinja style guide",id:"jinja-style-guide",level:2}],m={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cdp-style-guide"},"CDP Style Guide"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"copied from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/dbt-labs/corp/blob/main/dbt_style_guide.md"},"dbt Style guide"))),(0,l.kt)("h1",{id:"model-layer"},"Model Layer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 dbt_project.yml\n\u2514\u2500\u2500 models\n    \u251c\u2500\u2500 marts\n    |   \u2514\u2500\u2500 intermediate\n    |   |   \u251c\u2500\u2500 intermediate.yml\n    |   |   \u251c\u2500\u2500 int_fis_addresses.sql\n    |   |   \u2514\u2500\u2500 int_fis_guvalti.sql\n    |   \u2514\u2500\u2500 dim_vendors.sql\n    |   \u2514\u2500\u2500 legacy_active_vendors.sql\n    \u2514\u2500\u2500 staging\n        \u2514\u2500\u2500 [source]\n        |   \u251c\u2500\u2500 _stg_[source]__[schema]_sources.yml\n        |   \u2514\u2500\u2500 stg_[source]_[table].sql\n        \u2514\u2500\u2500 fis\n            \u251c\u2500\u2500 _stg_fis__fimsmgr_sources.yml\n            \u251c\u2500\u2500 _stg_fis__saturn_sources.yml\n            \u251c\u2500\u2500 stg_fis_ftvvend.sql\n            \u2514\u2500\u2500 stg_fis_spbpers.sql\n")),(0,l.kt)("h2",{id:"sources"},"Sources"),(0,l.kt)("p",null,"All raw data is in the ",(0,l.kt)("inlineCode",{parentName:"p"},"raw")," database in Snowflake. In the dbt project, the raw data should be organized into subdirectories by business source system name in the ",(0,l.kt)("inlineCode",{parentName:"p"},"staging")," directory."),(0,l.kt)("p",null,"A .yml file should be created for each schema in the ",(0,l.kt)("inlineCode",{parentName:"p"},"raw")," database. For one source system subdirectory there may be multiple .yml files."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"TBD: Generating source .yml files with codegen"))),(0,l.kt)("p",null,"The source .yml file should be named in the following format:\n",(0,l.kt)("inlineCode",{parentName:"p"},"_stg_[source]__[schema]_sources.yml")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"where ","[source]"," is the ",(0,l.kt)("inlineCode",{parentName:"li"},"- name: "),"  field and ","[schema]"," is the ",(0,l.kt)("inlineCode",{parentName:"li"},"schema:"),"  field in the .yml file"),(0,l.kt)("li",{parentName:"ul"},"[source]"," should identify the business name of the source system of the raw data (should match the subdirectory name)"),(0,l.kt)("li",{parentName:"ul"},"do not include un-informative prefixes of the schema name in the .yml file name")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("i",null,"Click to toggle an Example")),(0,l.kt)("p",null,"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"_stg_fis__fimsmgr_sources.yml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"version: 2\n\nsources:\n    - name: fis\n      database: raw\n      schema: bprd_fimsmgr\n      tables:\n        - name: ftvvend\n        - name: ftvvent\n        - name: fyredbs\n"))),(0,l.kt)("h3",{id:"notes"},"Notes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Within a single .yml file, source blocks cannot have the same ",(0,l.kt)("inlineCode",{parentName:"li"},"- name: "),"  field."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"{{ source('name', 'table') }}")," function should only be used to reference sources in the staging models; it should not be used in any other model. ")),(0,l.kt)("h2",{id:"staging"},"Staging"),(0,l.kt)("p",null,"A .sql file should be created for each table in the schema. The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/dbt-labs/dbt-codegen/tree/0.8.0/"},"codegen")," dbt package should be used to generate the stage models."),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("i",null,"Click to toggle codegen Instructions")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Check if codegen package is included in the packages.yml file in the dbt project (if not add it) "),(0,l.kt)("li",{parentName:"ul"},"Run ",(0,l.kt)("inlineCode",{parentName:"li"},"dbt deps")," to install the package (if not already done so)"),(0,l.kt)("li",{parentName:"ul"},"Copy the macro into a statement tab in the dbt Cloud IDE, or into an analysis file, and compile your code")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"{{ codegen.generate_base_model(\n    source_name='raw_jaffle_shop',\n    table_name='customers'\n) }}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Copy and paste the compiled code into a staging .sql file")),(0,l.kt)("p",null,"More detailed instructions can be found at the codegen repo or at the ",(0,l.kt)("a",{parentName:"p",href:"https://hub.getdbt.com/"},"dbt packages hub"))),(0,l.kt)("p",null,"The stage .sql file should be named in the following format:\n",(0,l.kt)("inlineCode",{parentName:"p"}," stg_[source]__[table].sql")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[source]"," should match the subdirectory name and the source name in the .yml name and file"),(0,l.kt)("li",{parentName:"ul"},"[table]"," should match the table name in the source .yml file ")),(0,l.kt)("p",null,"The content of the stage .sql file should be in the following format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"with source as (\n\n    select * from {{ source('name', 'table') }}\n\n)\n\nrenamed as (\n\n    select\n        -- Source columns\n        column1,\n        .\n        .\n        columnZ\n    \n        -- Add new columns below\n\n    from source\n\n)\n\nselect * from renamed\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("i",null,"Click to toggle an Example")),(0,l.kt)("p",null,"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"stg_fis__ftvvend.sql")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"with source as (\n\n    select * from {{ source('fis', 'ftvvend') }}\n\n),\n\nrenamed as (\n\n    select\n        -- Source columns\n        ftvvend_user_id,\n        ftvvend_entity_ind,\n        ftvvend_tax_form_status,\n        ...\n\n        -- Added columns\n        CASE\n        WHEN ftvvend_term_date IS NULL \n        THEN 'Y'\n        ELSE 'N'\n        END     ftvvend_active_flag\n\n    from source\n\n)\n\nselect * from renamed\n"))),(0,l.kt)("h3",{id:"notes-1"},"Notes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"{{ ref('model') }}")," function should be used to reference the staging models in any upstream models.")),(0,l.kt)("h2",{id:"model-naming"},"Model Naming"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"dbt")," Our models (typically) fit into three main categories: staging, marts, base/intermediate. For more detail about why we use this structure, check out ",(0,l.kt)("a",{parentName:"em",href:"https://docs.getdbt.com/guides/best-practices/how-we-structure/1-guide-overview"},"this discourse post"),". The file and naming structures are as follows:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"All objects should be plural, such as: ",(0,l.kt)("inlineCode",{parentName:"li"},"stg_stripe__invoices")),(0,l.kt)("li",{parentName:"ul"},"Base tables are prefixed with ",(0,l.kt)("inlineCode",{parentName:"li"},"base__"),", such as: ",(0,l.kt)("inlineCode",{parentName:"li"},"base__<source>_<object>")),(0,l.kt)("li",{parentName:"ul"},"Intermediate tables should end with a past tense verb indicating the action performed on the object, such as: ",(0,l.kt)("inlineCode",{parentName:"li"},"customers__unioned")),(0,l.kt)("li",{parentName:"ul"},"Marts are categorized between fact (immutable, verbs) and dimensions (mutable, nouns) with a prefix that indicates either, such as: ",(0,l.kt)("inlineCode",{parentName:"li"},"fct_orders")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"dim_customers"))),(0,l.kt)("h2",{id:"model-configuration"},"Model configuration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Model-specific attributes (like sort/dist keys) should be specified in the model."),(0,l.kt)("li",{parentName:"ul"},"If a particular configuration applies to all models in a directory, it should be specified in the ",(0,l.kt)("inlineCode",{parentName:"li"},"dbt_project.yml")," file."),(0,l.kt)("li",{parentName:"ul"},"In-model configurations should be specified like this:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"{{\n  config(\n    materialized = 'table',\n    sort = 'id',\n    dist = 'id'\n  )\n}}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Marts should always be configured as tables")),(0,l.kt)("h2",{id:"dbt-conventions"},"dbt conventions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Only ",(0,l.kt)("inlineCode",{parentName:"li"},"stg_")," models (or ",(0,l.kt)("inlineCode",{parentName:"li"},"base_")," models if your project requires them) should select from ",(0,l.kt)("inlineCode",{parentName:"li"},"source"),"s."),(0,l.kt)("li",{parentName:"ul"},"All other models should only select from other models.")),(0,l.kt)("h2",{id:"testing"},"Testing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Every subdirectory should contain a ",(0,l.kt)("inlineCode",{parentName:"li"},".yml")," file, in which each model in the subdirectory is tested. For staging folders, the naming structure should be ",(0,l.kt)("inlineCode",{parentName:"li"},"src_sourcename.yml"),". For other folders, the structure should be ",(0,l.kt)("inlineCode",{parentName:"li"},"foldername.yml")," (example ",(0,l.kt)("inlineCode",{parentName:"li"},"core.yml"),")."),(0,l.kt)("li",{parentName:"ul"},"At a minimum, unique and not_null tests should be applied to the primary key of each model.")),(0,l.kt)("h2",{id:"naming-and-field-conventions"},"Naming and field conventions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Schema, table and column names should be in ",(0,l.kt)("inlineCode",{parentName:"li"},"snake_case"),"."),(0,l.kt)("li",{parentName:"ul"},"Use names based on the ",(0,l.kt)("em",{parentName:"li"},"business")," terminology, rather than the source terminology."),(0,l.kt)("li",{parentName:"ul"},"Each model should have a primary key."),(0,l.kt)("li",{parentName:"ul"},"The primary key of a model should be named ",(0,l.kt)("inlineCode",{parentName:"li"},"<object>_id"),", e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"account_id")," \u2013 this makes it easier to know what ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," is being referenced in downstream joined models."),(0,l.kt)("li",{parentName:"ul"},"For base/staging models, fields should be ordered in categories, where identifiers are first and timestamps are at the end."),(0,l.kt)("li",{parentName:"ul"},"Timestamp columns should be named ",(0,l.kt)("inlineCode",{parentName:"li"},"<event>_at"),", e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"created_at"),", and should be in UTC. If a different timezone is being used, this should be indicated with a suffix, e.g ",(0,l.kt)("inlineCode",{parentName:"li"},"created_at_pt"),"."),(0,l.kt)("li",{parentName:"ul"},"Booleans should be prefixed with ",(0,l.kt)("inlineCode",{parentName:"li"},"is_")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"has_"),"."),(0,l.kt)("li",{parentName:"ul"},"Price/revenue fields should be in decimal currency (e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"19.99")," for $19.99; many app databases store prices as integers in cents). If non-decimal currency is used, indicate this with suffix, e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"price_in_cents"),"."),(0,l.kt)("li",{parentName:"ul"},"Avoid reserved words as column names"),(0,l.kt)("li",{parentName:"ul"},"Consistency is key! Use the same field names across models where possible, e.g. a key to the ",(0,l.kt)("inlineCode",{parentName:"li"},"customers")," table should be named ",(0,l.kt)("inlineCode",{parentName:"li"},"customer_id")," rather than ",(0,l.kt)("inlineCode",{parentName:"li"},"user_id"),".")),(0,l.kt)("h2",{id:"ctes"},"CTEs"),(0,l.kt)("p",null,"For more information about why we use so many CTEs, check out ",(0,l.kt)("a",{parentName:"p",href:"https://discourse.getdbt.com/t/why-the-fishtown-sql-style-guide-uses-so-many-ctes/1091"},"this discourse post"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"All ",(0,l.kt)("inlineCode",{parentName:"li"},"{{ ref('...') }}")," statements should be placed in CTEs at the top of the file"),(0,l.kt)("li",{parentName:"ul"},"Where performance permits, CTEs should perform a single, logical unit of work."),(0,l.kt)("li",{parentName:"ul"},"CTE names should be as verbose as needed to convey what they do"),(0,l.kt)("li",{parentName:"ul"},"CTEs with confusing or noteable logic should be commented"),(0,l.kt)("li",{parentName:"ul"},"CTEs that are duplicated across models should be pulled out into their own models"),(0,l.kt)("li",{parentName:"ul"},"create a ",(0,l.kt)("inlineCode",{parentName:"li"},"final")," or similar CTE that you select from as your last line of code. This makes it easier to debug code within a model (without having to comment out code!)"),(0,l.kt)("li",{parentName:"ul"},"CTEs should be formatted like this:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"with\n\nevents as (\n\n    ...\n\n),\n\n-- CTE comments go here\nfiltered_events as (\n\n    ...\n\n)\n\nselect * from filtered_events\n")),(0,l.kt)("h2",{id:"sql-style-guide"},"SQL style guide"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use trailing commas")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Indents should be four spaces (except for predicates, which should line up with the ",(0,l.kt)("inlineCode",{parentName:"p"},"where")," keyword)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Lines of SQL should be no longer than 120 characters")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Field names and function names should all be lowercase")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"as")," keyword should be used when aliasing a field or table")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fields should be stated before aggregates / window functions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Aggregations should be executed as early as possible before joining to another table.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Ordering and grouping by a number (eg. group by 1, 2) is preferred over listing the column names (see ",(0,l.kt)("a",{parentName:"p",href:"https://blog.getdbt.com/write-better-sql-a-defense-of-group-by-1/"},"this rant")," for why). Note that if you are grouping by more than a few columns, it may be worth revisiting your model design.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Prefer ",(0,l.kt)("inlineCode",{parentName:"p"},"union all")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"union")," ",(0,l.kt)("a",{parentName:"p",href:"http://docs.aws.amazon.com/redshift/latest/dg/c_example_unionall_query.html"},"*"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'Avoid table aliases in join conditions (especially initialisms) \u2013 it\'s harder to understand what the table called "c" is compared to "customers".')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If joining two or more tables, ",(0,l.kt)("em",{parentName:"p"},"always")," prefix your column names with the table alias. If only selecting from one table, prefixes are not needed.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Be explicit about your join (i.e. write ",(0,l.kt)("inlineCode",{parentName:"p"},"inner join")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"join"),"). ",(0,l.kt)("inlineCode",{parentName:"p"},"left joins")," are normally the most useful, ",(0,l.kt)("inlineCode",{parentName:"p"},"right joins")," often indicate that you should change which table you select ",(0,l.kt)("inlineCode",{parentName:"p"},"from")," and which one you ",(0,l.kt)("inlineCode",{parentName:"p"},"join")," to.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"DO NOT OPTIMIZE FOR A SMALLER NUMBER OF LINES OF CODE. NEWLINES ARE CHEAP, BRAIN TIME IS EXPENSIVE")))),(0,l.kt)("h3",{id:"example-sql"},"Example SQL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"with\n\nmy_data as (\n\n    select * from {{ ref('my_data') }}\n\n),\n\nsome_cte as (\n\n    select * from {{ ref('some_cte') }}\n\n),\n\nsome_cte_agg as (\n\n    select\n        id,\n        sum(field_4) as total_field_4,\n        max(field_5) as max_field_5\n\n    from some_cte\n    group by 1\n\n),\n\nfinal as (\n\n    select [distinct]\n        my_data.field_1,\n        my_data.field_2,\n        my_data.field_3,\n\n        -- use line breaks to visually separate calculations into blocks\n        case\n            when my_data.cancellation_date is null\n                and my_data.expiration_date is not null\n                then expiration_date\n            when my_data.cancellation_date is null\n                then my_data.start_date + 7\n            else my_data.cancellation_date\n        end as cancellation_date,\n\n        some_cte_agg.total_field_4,\n        some_cte_agg.max_field_5\n\n    from my_data\n    left join some_cte_agg  \n        on my_data.id = some_cte_agg.id\n    where my_data.field_1 = 'abc'\n        and (\n            my_data.field_2 = 'def' or\n            my_data.field_2 = 'ghi'\n        )\n    having count(*) > 1\n\n)\n\nselect * from final\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Your join should list the "left" table first (i.e. the table you are selecting ',(0,l.kt)("inlineCode",{parentName:"li"},"from"),"):")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    trips.*,\n    drivers.rating as driver_rating,\n    riders.rating as rider_rating\n\nfrom trips\nleft join users as drivers\n    on trips.driver_id = drivers.user_id\nleft join users as riders\n    on trips.rider_id = riders.user_id\n\n")),(0,l.kt)("h2",{id:"yaml-style-guide"},"YAML style guide"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Indents should be two spaces"),(0,l.kt)("li",{parentName:"ul"},"List items should be indented"),(0,l.kt)("li",{parentName:"ul"},"Use a new line to separate list items that are dictionaries where appropriate"),(0,l.kt)("li",{parentName:"ul"},"Lines of YAML should be no longer than 80 characters.")),(0,l.kt)("h3",{id:"example-yaml"},"Example YAML"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"version: 2\n\nmodels:\n  - name: events\n    columns:\n      - name: event_id\n        description: This is a unique identifier for the event\n        tests:\n          - unique\n          - not_null\n\n      - name: event_time\n        description: \"When the event occurred in UTC (eg. 2018-01-01 12:00:00)\"\n        tests:\n          - not_null\n\n      - name: user_id\n        description: The ID of the user who recorded the event\n        tests:\n          - not_null\n          - relationships:\n              to: ref('users')\n              field: id\n")),(0,l.kt)("h2",{id:"jinja-style-guide"},"Jinja style guide"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When using Jinja delimiters, use spaces on the inside of your delimiter, like ",(0,l.kt)("inlineCode",{parentName:"li"},"{{ this }}")," instead of ",(0,l.kt)("inlineCode",{parentName:"li"},"{{this}}")),(0,l.kt)("li",{parentName:"ul"},"Use newlines to visually indicate logical blocks of Jinja")))}c.isMDXComponent=!0}}]);