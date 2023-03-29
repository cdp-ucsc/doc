---
sidebar_position: 3
---

# Kimball Subsystem Inventory

The 34 sub systems will be updated to reflect what is still relavent with the shift from Extract Transform and Load to Extract, Load and Transform made possible by current technologies and methodologies.


` ` | Sub System | Approach / Solution
-- | -- | --
1 | Data Profiling | Technical analysis of data to describe its content, consistency, and structure.
2 | Change Data Capture | For effective dated tables, [dbt macros](https://docs.getdbt.com/docs/build/jinja-macros) will be leveraged at the statging layer to derive effective to and from dates, for non effective dated tables [dbt snapshots](https://docs.getdbt.com/docs/build/snapshots) will be used.
3 | Extract & Load | [Fivetran](https://www.fivetran.com) - will be leveraged when ever possible to Extract and Load data into the CDP.
4 | Data Cleansing | This activity will begin in the [dbt staging layer](https://docs.getdbt.com/guides/best-practices/how-we-structure/2-staging) and be enforced by building [dbt tests](https://docs.getdbt.com/docs/build/tests) to confirm assertions about the data.
5 | Error Event Schema | A number of different components will encompass the data pipeline lifecycle, metadata will be collected via the [fivetran_log models](https://hub.getdbt.com/fivetran/fivetran_log/latest/) and potentially the [dbt_artifacts package](https://github.com/brooklyn-data/dbt_artifacts).
6 | Audit Dimension Assembler | A special dimension assembled by the ETL system that contains the metadata context at the moment when a specific fact row is created. `Audit Log ?`
7 | Deduplication | Eliminating duplicate data that can occur when a dimension is derived from multiple source systems. - `TBD`
8 | Conforming | All of the steps required to align the content of some or all of the columns in a dimension with columns in a similar or identical dimensions in other parts of the data warehouse. `TBD`
9 | Slowly Changing Dimension Manager | Implements slowly changing dimension (SCD) logic. `Is this a role for the project team?`
10 | Surrogate Key Generator | Surrogate key generation will be accomplished with the [dbt_utils.generate_surrogate_key](https://github.com/dbt-labs/dbt-utils#generate_surrogate_key-source).
11 | Hierarchy Manager | Deals with multiple, simultaneous, embedded hierarchical structures within a dimension. `Is this a role for the project team?`
12 | Special Dimension Manager | Deals with special dimension like date/time and junk dimensions. `Is this a role for the project team?`
13 | Fact Table Builders | Builds the fact tables. `Is this a role for the project team?`
14 | Surrogate Key Pipeline | Replaces the operational natural keys in the incoming fact table row with the appropriate dimension surrogate keys. `Seems like this would be part of the build process?`
15 | Multivalued Dimension Bridge Table Builder | `Supports a dimension that takes on multiple values at the lowest granularity of the fact table.` Seems like this would be part of the build process?
16 | Late Arriving Data Handler | `Deals with late arriving facts where there is a need to determine which dimension keys were in effect when the activity occurred.` 
17 | Dimension Manager | The centralized authority who prepares and publishes conformed dimension for to the data warehouse community. `TBD - Governance`
18 | Fact Provider | Owns the administration of one or more fact tables and is responsible for their creation, maintenance and use. `TBD - Governance`
19 | Aggregate Builder | Builds aggregations to improve performance. - `Legacy ?`
20 | dbt Semantic Model | Builds OLAP cubes to present dimensional data in an intuitive way. This is one approach to implementing a semantic model.
21 | Data Propagation Manager | Responsible for the ETL processes required to present conformed, integrated enterprise data from the data warehouse presentation server to other environments for special purposes.
22 | Job Scheduler | Manages the ETL process through a single metadata-driven job control environment.
23 | Backup | Allows the data warehouse to get back to work after a failure.
24 | Recovery and Restart | Provides crash recovery, stop, and restart capability.
25 | Version Control | Snapshotting capability for the archiving and recovering all of the logic and metadata of the ETL pipeline.
26 | Version Migration | Manages the progression of ETL logic through the development, test, production lifecycle.
27 | Workflow Monitor | Monitors the ETL processes to ensure they are operating efficiently and the warehouse is being loaded on a consistently timely basis.
28 | Sorting | Provides sorting capability used during ETL processing.
29 | Lineage and Dependency Analyzer | Provides an explanation of the complete processing flow that produced or changed any data result.
30 | Problem Escalation | Provides a multi-level support structure similar to what is in place for transactional systems.
31 | Parallelizing/Pipelining | Provides capabilities to load the data warehouse within given time constraints.
32 | Security | Delivers role-based security to all data and metadata in the warehouse.
33 | Compliance | Allows maintaining a chain of custody for all data in the warehouse.
34 | Metadata Repository | Captures ETL metadata including process, technical, and business metadata.

