---
tags:
  - Draft
  - Informative
---

# CDP Glossary



### Continuous Deployment (CD)
Continuous Deployment makes up the CD portion of CI/CD. (Note CD can also stand for continuous delivery which is different that continuous deployment.) Continuous deployment is the practice of pushing code that has passed the CI tests automatically into production.

### Continuous Integration (CI)
Continuous Integration makes up the CI portion of CI/CD. Continuous integration is the practice of integrating code changes from various developers into a single project and automatically building and testing the changes. Github's pull request feature is used to integrate code changes. And dbt Cloud's continuous integration feature is used to automatically trigger jobs to build and test the code changes contained in the pull request. Learn more about dbt Cloud CI job [here](https://docs.getdbt.com/docs/deploy/cloud-ci-job).

### Data Lake
The term data lake refers to the section of the CDP where raw data is continuously synced from source systems awaiting transformation. 

### Data Stack
A data stack is a collection of various technologies that allow for raw data to be processed before it can be used. A modern data stack (MDS) consists of the specific tools that are used to organize, store, and transform data. Modern typically refers to cloud-native technologies.

### dbt
dbt (data build tool) is a Python package command line tool that is used to transform data in warehouses. dbt compiles code into SQL and runs it against the data warehouse. Learn more [here](https://docs.getdbt.com/docs/introduction) and [here](https://www.getdbt.com/blog/what-exactly-is-dbt/).

### Destinations
A destination can be a centralized storage system like a cloud data warehouse or a data lake. It can also be an application, like a business intelligence tool or messaging system.

### Docusaurus 
Docusaurus is a set of npm packages that builds, deploys and maintains websites. Learn more [here](https://docusaurus.io/docs).

### Fivetran
[Fivetran](https://fivetran.com) is a market leader in Extract and Load data processing. The CDP is leveraging Fivetran to move data from [Source](#sources) to [Destination](#destinations) on a continuous automated schedule.

### Git
Git is a free and open-source distributed version control system software that tracks modifications/manages source code history. Learn more [here](https://git-scm.com/about).

### GitHub
GitHub is a web-based service that hosts Git repositories using cloud-based storage. In addition to providing the distributed version control of Git, GitHub provides a variety of other services like access control, bug tracking, pull requests, task management, continuous integration, and documentation. Learn more about GitHub's features and services [here](https://github.com/features).

### Production
Production is the environment where the latest version of data ready to be consumed by users is available. Compared to the development environment.

### Pull Request
A pull request (PR) is used to initiate the process of integrating code changes into a project. A PR will only contain the code changes relevant to the request and must be reviewed by others before it can be approved. Once the PR is approved the new code will be merged into the project repository, usually the main branch of the repo. Learn more about pull requests in GitHub [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

### Sources 
A source is any application or system that generates relevant data in support of the campus administrative operations. AIS, FIS, ODS, IAM, internal databases and document stores are examples of sources.