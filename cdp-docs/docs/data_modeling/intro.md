# Intro



This page documents the approach and high-level architectural considerations that will be followed in the design, development, and operation of the Common Data Platform (CDP). The Common Data Platform is an umbrella term that encompasses many aspects of the management of data on the campus and serves as the Campus Data Strategy to meet the current business needs as well as positioning ourselves to meet future demands.


### Develop an Enterprise Data Model, a single source of facts

The design and development of the Enterprise Data Model (EDW) will primarily follow the Kimball approach to data warehousing. The Kimball methodology has been in existance since the late 1990's, and it's easy to dismiss the approach as a relic of the past. However, much of the content is still relavant today. For more information about the Kimball Methogology and how it applies to the modern data stack, please see  [A 2020 Readers' Guide to the Data Warehouse Toolkit](https://www.holistics.io/blog/how-to-read-data-warehouse-toolkit/).  Additional information can be found here: [Kimball Techniques](https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/books/data-warehouse-dw-toolkit/). The team will be using The Data Warehouse Toolkit as a reference. 

In a nutshell, the Kimball approach uses dimensional modeling techniques to design a [star schema](https://en.wikipedia.org/wiki/Star_schema). A star schema consists of fact tables to record the events of the business surrounded by dimension tables which hold the descriptive data related to those events. Important dimensions, like Student, Employees, Facility, and Finance, can be built once and used in many different fact tables. This reuse of dimension tables allows for consistent data for these important concepts and is called **"conformed dimensions"** in the Kimball approach.

Another feature of the Kimball approach is that it is iterative. This works well within Scrum since the building of individual fact and dimension tables can be done in sprints.

