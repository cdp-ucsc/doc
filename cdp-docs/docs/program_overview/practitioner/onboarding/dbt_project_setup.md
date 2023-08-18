---
sidebar_position: 5
tags:
  - Draft
---

# dbt Project Setup
:::caution

This page is a work in progress

:::

dbt is the transformation tool that we use to compile and execute our data models. Developers will need to set up and configure several items to use dbt.

## dbt Core
dbt Core is dbt's CLI version. Learn more about dbt Core [here](https://docs.getdbt.com/docs/core/about-the-cli).

### 1. Clone dbt project repo from GitHub
Instructions can be found on the [GitHub Setup Instructions](github_setup_instructions) page.

### 2. Setup project virtual environment
Instructions can be found on the [Workstation Setup](workstation_setup) page. This step also covers dbt installation.

### 3. Setup `profiles.yml`
Since dbt compiles and runs SQL in our data warehouse, dbt needs to connect to the warehouse. The `profiles.yml` provides dbt with the necessary information to make the connection.

Your `profiles.yml` file should be stored in a directory called `.dbt` at your user/home directory level. 
```shell
$ cd
$ ls -a
./ ../ .dbt ...
```
If you do not have the directory, then create the directory.
```shell
$ cd 
$ ls -a
./ ../ ...
$ mkdir .dbt
```
In `.dbt` create the `profiles.yml` file.
```shell
$ cd .dbt/
$ touch profiles.yml
```
The contents of the `profiles.yml` file is specific to each developer's access to Snowflake. Instructions to request access can be found [here](access_overview). If you have been provided your Snowflake profile information, then enter it the `profiles.yml`. It is recommended to open `profiles.yml` via VSCode to enter in your profile information rather than from the command line. 

For example, a `profiles.yml` should look similar to
```yml
<profile_name>:
  outputs:
    dev:
      account: <account>
      authenticator: externalbrowser
      database: <database>
      role: <role>
      schema: <schema>
      threads: 1
      type: snowflake
      user: <cruzid>@ucsc.edu
      warehouse: <warehouse>
  target: <target>
```
 | Configuration Key| Definition
      |-------------------------------|------------------------------------------------------------------------------------------------------------------|
      | my_project                    | This is defining a profile - this specific name should be the profile that is referenced in our dbt_project.yml  |
      | target: dev                   | This is the default environment that will be used during our runs.                                               |
      | outputs:                      | This is a prompt to start defining targets and their configurations. You likely won't need more than `dev`, but this and any other targets you define can be used to accomplish certain functionalities throughout dbt.|
      | dev:                          | This is defining a target named `dev`.                                                                           |
      | type: [warehouse_name]         | This is the type of target connection we are using, based on our warehouse.                                      |
      | threads: 8                    | This is the amount of concurrent models that can run against our warehouse, for this user, at one time when conducting a `dbt run` |
      | account: [abc12345.us-west-1] | Change this out to the warehouse's account.                                                                      |
      | user: [your_username]         | Change this to use your own username that you use to log in to the warehouse                                     |
      | password: [your_password]     | Change this to use your own password for the warehouse                                                           |
      | role: transformer             | This is the role that has the correct permissions for working in this project.                                   |
      | database: analytics           | This is the database name where our models will build                                                            |
      | schema: dbt_[your_name]       | Change this to a custom name. Follow the convention `dbt_[first initial][last_name]`. This is the schema that models will build into / test from when conducting runs locally.|

Learn more about Snowflake specific `profiles.yml` [here](https://docs.getdbt.com/reference/warehouse-setups/snowflake-setup).

### 4. `dbt build` project
At this point you should be able to `build` the dbt project. 

In VSCode, open the project directory. From the terminal command line, activate the project's virtual environment. Enter the following in the command line. Note: since dbt is connecting to Snowflake, the campus VPN must be active.
```shell
(project_name)
$ dbt build
```

This will build all the models in the Snowflake database and schema specified in your `profiles.yml`.

## dbt Cloud
dbt Cloud is a dbt managed service that is web based. Learn more about dbt Cloud [here](https://docs.getdbt.com/docs/cloud/about-cloud-setup).

### 1. Request access to dbt Cloud
Instructions can be found on the [Request Access](account_request_form) page.

### 2. Login to dbt Cloud
Activate the campus VPN and use UC Santa Cruz's dbt Cloud login [link](https://cloud.ucsc.getdbt.com/enterprise-login/ucsc/).