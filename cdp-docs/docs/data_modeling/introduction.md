# Intro



This page documents the approach and high-level architectural considerations that will be followed in the design, development, and operation of the Common Data Platform (CDP). The Common Data Platform is an umbrella term that encompasses many aspects of the management of data on the campus and serves as the Campus Data Strategy to meet the current business needs as well as positioning ourselves to meet future demands.


## Enterprise Data Warehouse

The Enterprise Data Warehouse (EDW) will be used for reporting and analysis. It is a central repository of current and historical data from UCSC's Enterprise Administrative Applications. We use an ELT method to Extract, Load, and Transform data in the EDW. We use Snowflake as our data platform, Fivetran for extract and Loat (EL) and use dbt to transform(T) data in the EDW. 

The design and development of the Enterprise Data Model (EDW) will primarily follow the Kimball approach to data warehousing. The Kimball methodology has been in existance since the late 1990's, and it's easy to dismiss the approach as a relic of the past. However, much of the content is still relavant today. For more information about the Kimball Methogology and how it applies to the modern data stack, please see  [A 2020 Readers' Guide to the Data Warehouse Toolkit](https://www.holistics.io/blog/how-to-read-data-warehouse-toolkit/).  Additional information can be found here: [Kimball Techniques](https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/books/data-warehouse-dw-toolkit/). The team will be using The Data Warehouse Toolkit as a reference. 

In a nutshell, the Kimball approach uses dimensional modeling techniques to design a [star schema](https://en.wikipedia.org/wiki/Star_schema). A star schema consists of fact tables to record the events of the business surrounded by dimension tables which hold the descriptive data related to those events. Important dimensions, like Student, Employees, Facility, and Finance, can be built once and used in many different fact tables. This reuse of dimension tables allows for consistent data for these important concepts and is called **"conformed dimensions"** in the Kimball approach.

Another feature of the Kimball approach is that it is iterative. This works well within Scrum since the building of individual fact and dimension tables can be done in sprints.

## What Is Dimensional Modeling?

Dimensional modeling is part of the Business Dimensional Lifecycle methodology developed by [Ralph Kimball](https://en.wikipedia.org/wiki/Ralph_Kimball) which includes a set of methods, techniques and concepts for use in data warehouse design.

_a logical design technique that seeks to present the data in a standard, intuitive framework that allows for high-performance access_

Dimensional Modeling is business process oriented and can be built in 4 steps:

1. Choose the business process e.g. track monthly revenue
1. Declare the grain e.g. per student
1. Identify the dimensions
1. Identify the fact

### Fact and dimension tables

Dimensional modeling always uses the concepts of facts (measures), and dimensions (context).
Facts are typically (but not always) numeric values that can be aggregated, and dimensions are groups of hierarchies and descriptors that define the facts.

In the simplest version fact table is a central table and is linked to dimensional tables with foreign keys creating a star schema.
Star schema with dimensional tables linking to more dimensional tables are called snowflake schemas, multi fact tables schemas are called galaxies.

### Why is it worth using dimensional modeling 

- Dimensional Modeling has a few flavors, but the overall design is industry standard and has been used successfully for decades
- The FACT and DIM structures result in easy to understand and access data, suitable for business teams
- Dimensional modeling supports centralized implementation of business logic and consistent definitions across business users e.g. one source of truth of student definition
- The design supports 'plug and play' of new subject areas and in fact the model grows in power as more dimensions are added



### Reference Links

[Conceptual Data Model](https://lucid.app/lucidchart/070cf384-c59f-4bc7-93a7-99e8c60b416f/edit?page=0_0#)


### Credits

[Gitlab Data Team Platform](https://about.gitlab.com/handbook/business-technology/data-team/platform/edw/)
