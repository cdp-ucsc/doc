---
tags:
  - Draft
  - Informative
---

# CDP Glossary


### Continuous Deployment (CD)
Continuous Deployment makes up the CD portion of CI/CD. (Note CD can also stand for continuous delivery which is different than continuous deployment.) Continuous deployment is the practice of pushing code that has passed the CI tests automatically into production.

### Continuous Integration (CI)
Continuous Integration makes up the CI portion of CI/CD. Continuous integration is the practice of integrating code changes from various developers into a single project and automatically building and testing the changes. Github's pull request feature is used to integrate code changes. dbt Cloud's continuous integration feature is used to automatically trigger jobs to build and test the code changes contained in the pull request. Learn more about dbt Cloud CI job [here](https://docs.getdbt.com/docs/deploy/cloud-ci-job).

### Data Lake
The term data lake refers to the portion of the CDP where raw data is continuously synced from source systems awaiting transformation. 

### Data Stack
A data stack is a collection of various technologies that allow for raw data to be processed before it can be used. A modern data stack (MDS) consists of the specific tools that are used to organize, store, and transform data. Modern typically refers to cloud-native technologies.

### dbt-core
[dbt (data build tool)](https://docs.getdbt.com/docs/introduction) is an open source software package that is used to transform data in warehouses. dbt compiles code into SQL and runs it against the data warehouse. 

### dbt Labs
[dbt Labs](https://www.getdbt.com/dbt-labs/about-us/) is the commercial enterprise that created and maintains the dbt-core software package. dbt Labs is rapidly developing the dbt-cloud experience to assist organizations in deploying dbt at scale, with a web-based development environment, job scheduling, documentation, and GitHub integration to enable CI/CD.   

### Destinations
A destination can be a centralized storage system like a cloud data warehouse or a data lake. It can also be an application, like a business intelligence tool or messaging system.

### Docusaurus 
[Docusaurus](https://docusaurus.io/docs) is an open source documentation framework based on nodejs. The product was developed internally at Facebook and enjoys a strong adoption rate by organizations worldwide. This website was created with Docusaurus. 

### Fivetran
[Fivetran](https://fivetran.com) is a market leader in Extract and Load data processing. The CDP is leveraging Fivetran to move data from [Source](#sources) to [Destination](#destinations) via a continuous automated schedule.

### Git
[Git](https://git-scm.com/about) is a open-source distributed version control system that tracks modifications and manages source code history.

### GitHub
[GitHub](https://github.com/features) is a web-based service that hosts Git repositories using cloud-based storage. In addition to providing the distributed version control of Git, GitHub provides a variety of other services like access control, bug tracking, pull requests, task management, continuous integration, and documentation.

### Production
Production is the environment where the latest version of the data that is ready to be consumed by users is available.

### Development
Development is the environment where different versions of the data are being worked on and tested.

### Pull Request
A pull request (PR) is used to initiate the process of integrating code changes into a project. A PR will only contain the code changes relevant to the request and must be reviewed by others before it can be approved. Once the PR is approved the new code will be merged into the project repository, usually the main branch of the repo. Learn more about pull requests in GitHub [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

### Snowflake
Developed in 2012, [Snowflake](https://snowflake.com) is a fully managed cloud native SaaS (software as a service) that provides a single platform for data warehousing, data lakes, data engineering, data science, data application development, and secure sharing and consumption of real-time / shared data. Snowflake has out-of-the-box features like separation of storage and compute, on-the-fly scalable compute, data sharing, data cloning, and third-party tools support in order to handle the demanding needs of a growing enterprise.

### Sources 
A source is any application or system that generates relevant data in support of the campus administrative operations. AIS, FIS, ODS, IAM, internal databases and document stores are examples of sources.

### SqlFluff
[SQLFluff](https://sqlfluff.com/) is a dialect-flexible and configurable SQL linter. Designed with ELT applications in mind, SQLFluff also works with Jinja templating and dbt. SQLFluff will auto-fix most linting errors, allowing you to focus your time on what matters.