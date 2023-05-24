---
sidebar_position: 3
---

# dbt Project Setup Instructions
dbt is the transformation tool that we use to compile and execute our data models. Developers will need to set up and configure several items to use dbt.

## dbt Core
dbt Core is dbt's CLI version. Learn more about dbt Core [here](https://docs.getdbt.com/docs/core/about-the-cli).

### 1. Clone dbt project repo from GitHub
Instructions can be found on the [GitHub Setup Instructions](github_setup_instructions) page.

### 2. Setup project virtual environment
Instructions can be found on the [Local Development Setup Instructions](local_development_setup_instructions) page. This step also covers dbt installation.

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
The contents of the `profiles.yml` file is specific to each developer. If you have not been provided with your profile information, then contact [BLANK]. If you have been provided your profile information, then enter it the `profiles.yml`. It is recommended to open `profiles.yml` via VSCode to enter in your profile information than from the command line. 

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

Learn more about Snowflake specific `profiles.yml` [here](https://docs.getdbt.com/reference/warehouse-setups/snowflake-setup).

### 4. `dbt build` project
At this point you should be able to `build` the dbt project. 

In VSCode, open the project directory. From the terminal command line, activate the project's virtual environment. Enter the following in the command line.
```shell
(project_name)
$ dbt build
```

This will build all the models in the Snowflake database and schema specified in your `profiles.yml`.

## dbt Cloud
dbt Cloud is a dbt managed service that is web based. Learn more about dbt Cloud [here](https://docs.getdbt.com/docs/cloud/about-cloud-setup).