---
sidebar_position: 2
---

# Snowflake Roles


## System Defined Roles
<sup> Provided by the Snowflake Platform </sup>

[Snowflake Docs](https://docs.snowflake.com/en/user-guide/security-access-control-overview.html#system-defined-roles)


## Source Roles
<sup> Provide direct access to source data. </sup>

Source roles are foundational and typically map one-to-one with a source system. As new sources are brought into the platform, a source role is created and assigned.  These roles will be granted the necessary privileges to allow access to the source system's raw data and also provide compute resources in the form of warehouses.

**Utility**

- These roles are typically granted to a secondary Domain Analyst role, where individuals with those roles generally work on more than one data source.
- These roles can, however, be granted to individual analysts when the business need may not extend beyond a single source.
- In some cases, they may remain stand-alone for security purposes and not be granted to secondary roles.
- Stand-alone grants are not intended for development work 

**Source Role**

| Role Name | Role Purpose |
| --- | --- |
| AIS_ROLE | Direct access to raw Campus Solutions/AIS data (CSPRD) |
| COURSEDOG_ROLE | Direct access to raw Curricum Planning data (CourseDog) |
| CRUZBUY_ROLE | Direct access to raw purchasing and procurement data (CruzBuy) |
| FIS_ROLE | Direct access to raw finacial system data (FIS) |
| HR_DIVDATA_ROLE | Direct access to raw academic hr  data (DivData) |
| HR_PATH_ROLE | Direct access to raw hr/payroll  data (UCPath) |
| IDM_ROLE | Direct access to raw identity management data (IDM) |
| PPS_ROLE | Direct access to raw legacy payroll data (PPS) |


<details>

<sup>required privledges</sup>

```
use role securityadmin;

grant usage on database <database_name> to role <source_role>;
grant usage on schema <database_name>.<schema_name> to role <source_role>;
grant select on all tables in schema <database_name>.<schema_name> to role <source_role>;
grant select on future tables in schema <database_name>.<schema_name> to role <source_role>;

```

**Compute Resouces**

<sup> At this time shared compute will be used in favor of keeping things simple.  Eventually a cost model could be developed and measured based on consumption </sup>

<sup>required privledges</sup>

```
use role securityadmin;
grant operate on warehouse <warehouse_name> to role <source_role>;
grant usage on warehouse <warehouse_name> to role <source_role>;

```




</details>

***


## Domain Analyst Roles

<sup> Provide broad access for specific domains. </sup>

Domain Analyst Roles are intended for individuals with subject matter expertise who are comfortable working with raw data. These roles inherit access to raw source data from `Source Roles.` Typically these roles have access to more than one data source and have and can be used to create models in development databases.

**Utility**

- These roles are granted to individuals tasked with preparing data for consumption. 
- Allow board access across domain-specific systems. 

**Domain Analyst Role**

| Role Name | Role Purpose |
| --- | --- |
| BUSINESS_OPS_ROLE | Broad access to data from administrative business systems (HR, Finance, Procurement, Identity) |
| STUDENT_OPS_ROLE | Broad across to data from academic business systems (AIS, ALEKS, CourseDog, Identity) |
| DATA_OPS_ROLE | Broad access to data operations sources (System usage, job logs) |

<details>


<sup>required privledges</sup>

```
use role securityadmin;
grant usage on database <development_database> to role <domain_analyst_role>;
grant create schema on database <development_database> to role <domain_analyst_role>;
```



</details>

***


## Infrastructure Roles

Roles that are used in support of automation and operations typically have broad access and are only available to account administrators.

**Utility**

- Used for daily operations and administration.
- Allow board access across domain-specific systems. 


| Role Name | Role Purpose |
| --- | --- |
| DATA_ENGINEER | Internal to data engineering team |
| DEPLOYMENT_ROLE | Builds production models through automated processes. |
| LOADER_ROLE | Loads data from source systems (Fivetran). |



## Development Roles
<sup> Broad access across multiple domains. </sup>

Development roles provide broad access and are used to build models that blend information from multiple domains. 

**Utility**

- These roles are typically reserved for members of the data team and are primarily used in developing enterprise data models. 
- These roles have the ability to create models and data sets in the development databases.