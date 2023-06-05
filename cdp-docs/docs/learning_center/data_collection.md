---
sidebar_position: 2
tags:
  - Draft
  - Data Lifecycle
---

# Data Collection
The CDP (Common Data Platform) is utilizing [Fivetran](/docs/learning_center/glossary/#fivetran) to extract and load data from campus information systems, which are the [sources](/docs/learning_center/glossary/#sources) of data. The extracted data is loaded into [Snowflake](/docs/learning_center/glossary/#snowflake), which serves as the foundational layer in the CDP. Fivetran continuously syncs data from the campus information systems into the Data Lake, this continuous syncing ensures that the most recent data from the campus information systems is available for analysis and usage within the CDP.


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

