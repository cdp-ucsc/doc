---
sidebar_position: 5
---
# dbt Cloud Setup
The provided documentation here is align with dbt Lab's free course. Feel free to take the course and skip over this documentation if preferred.

dbt Lab's free course: [dbt Cloud and Snowflake for Developers](https://courses.getdbt.com/courses/dbt-cloud-and-snowflake-for-developers)

## General Information:
What is dbt Cloud? The depth of this answer is slightly different depending on your role and responsibilities. Generally for Business/Data Analysts, simply put dbt Cloud is the platform where they can perform data analysis and model data (i.e. write and execute SQL queries). Additionally, they can quickly find information regarding the status of the data (i.e. was the last run successful and when did it run) or the relationship between different data models (i.e. what is the DAG). For Analytics Engineers and Data Engineers, dbt Cloud provides things like the ability to manage project deployments and environments or access API for integrations.

This setup documentation will provide an express coverage of dbt Cloud to allow analysts to access quickly and efficiently access Cloud for data analysis and development.

For those wanting to expand their knowledge on dbt and dbt Cloud specifically, [dbt Lab's official documentation](https://docs.getdbt.com/docs/cloud/about-cloud-setup) is a fantastic place to start.

## Setup and Walk Through:
### 1. Approved Access to GitHub, dbt Cloud, and Snowflake
For the best experience, users will have already set up their GitHub account and gained access to both dbt Cloud and Snowflake. 

The UCSC's specific logon site for Cloud can be found in the top right corner of the CDP documentation website. In the top right corner, there is a drop down labeled "Platform Logins" where the link **dbt Labs** will direct users to Cloud. The link will send users to the UCSC login page where CruzId and Gold Password will be used to log in.

### 2. Home Page
The home page of dbt Cloud should look similar to this where the project name, `example-project`, can be seen in the top right corner. Users can click on the project name to toggle a list of all projects they have access to. As part of the account request, users should have been given access to their relevant projects.
![image](img/../../../../../static/img/onboarding/dbt_cloud/example_home.png)

If users look at the left corner there are different tabs, the home page is the **Deploy** tab. In **Deploy**, users can find the **Run History**, **Jobs**, **Environments**, and **Data Sources**. The project shown is an example so there are no run histories, jobs, environments, or data sources to be viewed.
![image](img/../../../../../static/img/onboarding/dbt_cloud/home_deploy.png)

An active project home page may look similar to this example.
![image](img/../../../../../static/img/onboarding/dbt_cloud/active_proj_home.png)

Not all of the available tabs will be explored in this document.

### 3. Connect to Snowflake
Before users can begin developing in Cloud, they must set up their connection credentials to Snowflake. This requires users to have gained access to Snowflake beforehand.
> The reason why a connection needs to be established with Snowflake from dbt Cloud is because the SQL written in and executed in Cloud is actually sent to and executed by Snowflake. This is a key service of dbt. For addition information: [What, exactly, is dbt?](https://www.getdbt.com/blog/what-exactly-is-dbt). 

In the top right corner, users can find the gear symbol (⛭). Click the gear symbol and click **Account Settings**. On the left panel click **Credentials** under **User Profile**. Click the desire project. In the right panel that has popped up, click **Edit** and input all of the Snowflake credential information that was provided. Then click **Connect Snowflake Account** and sign in using UCSC SSO. 

### 4. Connect to GitHub
? Needed?

### 5. Develop
In the top left corner click the **Develop** tab which will take you to Cloud's IDE.
![image](img/../../../../../static/img/onboarding/dbt_cloud/ide.png)

Click **Create New File** and begin writing and executing SQL queries. Click **Preview** to see a preview of the SQL query.
![image](img/../../../../../static/img/onboarding/dbt_cloud/preview.png)



