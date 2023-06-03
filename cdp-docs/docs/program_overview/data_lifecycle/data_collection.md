---
sidebar_position: 2
tags:
  - Draft
  - Data Lifecycle
---

# Data Collection

The CDP is using [Fivetran](/docs/learning_center/glossary/#fivetran) for extracting and loading data from campus information systems (sources) into [Snowflake](https://snowflake.com) the foundational layer in the CDP.  Fivetran continuously syncs data into the [Data Lake](/docs/learning_center/glossary/#data-lake)

## Active Data Sources

### Finance
- Financial Information System [(FIS)](https://financial.ucsc.edu/Pages/Launch_FIS.aspx)

### Human Resources
- [UCPath](https://ucpath.ucsc.edu/)

### Identity
-  Identity and Access Management [(IAM)](https://its.ucsc.edu/idm/index.html)
-  User profile information. This provides general identity and status information about users.

### Payroll 
- [UCPath](https://ucpath.ucsc.edu/)
- PPS - Legacy Payroll Information System

### Student 
- Academic Information System (AIS)
- Curriculum Planning [(CourseDog)](https://registrar.ucsc.edu/curriculum-management-project/cmp-menu/phase-ii.html)

