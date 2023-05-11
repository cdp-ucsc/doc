---
sidebar_position: 2
tags:
  - Draft
  - Data Lifecycle
---

# Data Collection

The CDP is using [Fivetran](https://fivetran.com) for extracting and loading data from campus information systems (sources) into [Snowflake](https://snowflake.com) the foundational layer in the CDP.  Fivetran continuously syncs data into the [Data Lake](/docs/glossary/#data-lake)

## Current Data Sources

### Student 
- Academic Information System (AIS)
- Curriculum Planning (CourseDog)

### Human Resources
- UCPath 

### Financials
- Financial Information System (FIS)

### Identidy Management

### Sources: 
A source is any application or website that generates relevant data for your organization. Customer apps, software used for marketing, sales or CRM, internal databases and document stores are examples of sources.

### Destinations: 
A destination can be a centralized storage system like a cloud data warehouse or a data lake. It can also be an application, like a business intelligence tool or messaging system.

### Cloud migration: 
Data ingestion can move data from traditional storage into cloud-based storage and processing tools. This is necessary for modern businesses to break down data silos and handle ever-growing data loads.
While manual data ingestion might work for minor use cases with few data sets, organizations looking to thrive in a data-driven world need automated data ingestion. This ensures that data is collected without delay and analysts have fresh data to work with.

![Data Life Cycle](/img/fivetran_el.png)