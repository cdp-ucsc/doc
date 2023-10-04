---
sidebar_position: 5
---
# Snowflake Setup

## General Information:
What is Snowflake? Snowflake is the data warehouse that stores all of the data from source data to production data. Source data is loaded in via Fivetran and production data is modelled using dbt.

For developers/analysts, a majority of data modeling and analyzing can and will occur in dbt Cloud (or dbt Core). Snowflake access must be given those who are working in dbt Cloud (or dbt Core). But, users may find that they do not need to log in and directly work in Snowflake often as dbt Cloud (or Core) provides them will all of the necessary functionality. However, Snowflake does provide the ability to run SQL queries directly within itself.

## Setup and Walk Through:
### 0. Approved Access to Snowflake
To successfully log into Snowflake users need to have received access to Snowflake via the [Account Request Form(s)](/doc/docs/program_overview/practitioner/onboarding/account_request_form).

### 1. Log on to Snowflake
UCSC's specific logon site for Snowflake can be found in the top right corner of the CDP documentation website. In the top right corner, there is a drop down labeled "Platform Logins" where the link **[Snowflake](https://app.snowflake.com/us-west-2/zna67203)** will direct users to Snowflake. Users will log in with their CruzId and Gold Password (UCSC SSO).

### 2. Navigating Snowflake
User's home page will be the **Worksheets** tab. On the left panel, users can navigate to different areas of Snowflake. The top left corner will display the user's name and the current role. Clicking the carrot next to the user name, users can switch between the roles they have access to. Different roles will have access to different data and abilities.

The **Worksheets** tab is where users can create/access worksheets. Worksheets is where users can write and run SQL queries. Worksheets are automatically saved. 

The **Data** tab is where users can view all of the data they have access to. Data is organized by databases and schemas.