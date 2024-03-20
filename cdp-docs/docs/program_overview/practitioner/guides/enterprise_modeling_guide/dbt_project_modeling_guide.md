---
description: Documentation for CDP's individual dbt projects.
sidebar_position: 2
---

# dbt Project Modeling Guide

# Project Structure and Guide
```
└─── dbt_project_name
     ├─── .github
     ├─── .vscode
     ├─── analyses
     ├─── data
     ├─── dbt_packages
     ├─── logs
     ├─── macros
     ├─── models
     │    ├─── base
     │    ├─── intermediate
     │    ├─── legacy
     │    ├─── marts
     │    ├─── reports
     │    └─── staging
     ├─── seeds
     ├─── snapshots
     ├─── target
     ├─── tests
     ├─── .gitignore
     ├─── .sqlfluffignore
     ├─── dbt_project.yml
     ├─── packages.yml
     ├─── README.md
     └─── requirements.txt
```
## dbt_project_name/
```
└─── dbt_project_name
     ├─── .github
     ├─── .vscode
     .
     .
     .
     ├─── .gitignore
     ├─── .sqlfluffignore
     ├─── dbt_project.yml
     ├─── packages.yml
     ├─── README.md
     └─── requirements.txt
```
Comments on the stand alone files.

### Project Properties and Configurations (YAMLs)
```
└─── dbt_project_name
     ├─── models
     │    ├─── ...
     │    └─── │    ├─── properties.yml
               ├─── ...
     ├─── ...
     ├─── dbt_project.yml
     ├─── packages.yml
     ├─── ...
```
A dbt project uses YAML, `.yml`, files to store and specify properties and configurations for different project resources. dbt Labs has documentation regarding properties and configurations [here](https://docs.getdbt.com/reference/configs-and-properties). 
>Note that dbt Lab's documentation is versioned and to select the correct version when reviewing their documentation.

The YAMLs that can be found in a dbt project are `dbt_project.yml`, `packages.yml`, and `properties.yml`.

#### DBT_PROJECT.YML
dbt Labs' project configuration documentation for the `dbt_project.yml` can be found [here](https://docs.getdbt.com/reference/dbt_project.yml). CDP projects usually use the [`dbt_project.yml`](https://github.com/dbt-labs/dbt-core/blob/main/core/dbt/include/starter_project/dbt_project.yml) that is generated during the `dbt init` process with minimal initial modifications. A common area that may receive modifications later on is the models section. For example,
```yml
# In this example config, we tell dbt to build all models in the example/
# directory as views. These settings can be overridden in the individual model
# files using the `{{ config(...) }}` macro.
models:
  cdp_finance:
    staging:
      +materialized: view
    intermediate:
      +materialized: view
    marts:
      +materialized: table
    validation:
      +materialized: table
      +schema: validation
    reverse_etl:
      +materialized: table
      +schema: shared_data
```

#### PACKAGES.YML

#### PROPERTIES.YML
Property YAML files can be named anything. What identifies a YAML file as a property YAML is the resource key and the property keys and values that follow. The following project resources can have property YAML files: models, seeds, snapshots, sources, analyses, exposures, and macros. The [dbt Labs documentation](https://docs.getdbt.com/reference/configs-and-properties) on properties and configurations is very thorough and highly recommended for developers to review. 

This document will build upon dbt Labs documentation and further discuss specific CDP standards for each project resource in its corresponding section.

## dbt_project_name/analyses/

## dbt_project_name/data/

## dbt_project_name/dbt_packages/

## dbt_project_name/logs/

## dbt_project_name/macros/
- Description of the `macros` folder

## dbt_project_name/models/
### Model Properties and Configurations (YAMLs)
The use of the [`sources:`](https://docs.getdbt.com/reference/source-properties) and [`models:`](https://docs.getdbt.com/reference/model-properties) keys in a YAML file specify the file as a model property file (rather than a seeds or macro property file).

The naming convention for model property YAMLs:
```bash
_[model_type]_[source_name]__[resource_type].yml
```
where
- model_type is base, int (intermediate), lgc (legacy), mart (marts), rpt (reports), or stg (staging)
- source_name is the source name
- resource_type is source or model.

### Modeling Best Practices
- The general naming convention for all models and fields should be singular.
> - If you had a dimension that held attributes for a student in a given term, would you call it “dim_student_term”, “dim_student_terms”, or “dim_students_terms”?
> - Simplicity – singular is shorter and doesn’t vary based on word (e.g., “ies”, “es”, “s”)
> - Coding Principals – in coding, entities are always singular (e.g., Public Class Inventory)
> - English Language Learners – pluralization is difficult, e.g., “inventory” vs “inventories”
- Use CTEs.
> A recognizable trait of dbt Lab's modeling style is their use of CTEs. We have adapted dbt Lab's use of CTEs. Commonly replacing subqueries with CTEs and utilizing CTEs to "import" models. New developers should review dbt's documentation on the topic of CTEs and existing CDP models.
> - [Analytics Engineering Glossary: CTE in SQL](https://docs.getdbt.com/terms/cte)
> - ['Import' CTEs](https://docs.getdbt.com/best-practices/how-we-style/2-how-we-style-our-sql#import-ctes) vs ['Functional' CTEs](https://docs.getdbt.com/best-practices/how-we-style/2-how-we-style-our-sql#functional-ctes)
> - [Why dbt Labs (Fishtown) SQL style guide uses so many CTEs](https://discourse.getdbt.com/t/why-the-fishtown-sql-style-guide-uses-so-many-ctes/1091)
> - [Different examples of CDP models]
- Developers should prioritize modular, reusable, concise, and universal modeling.
> - Again, CTEs can be used to create modular and concise modeling.
> - Intermediate models can be used to create modular, reusable, and concise models.
> - Adhering to CDP's SQL style guide can create concise and universal models.

### models/base/
```
└─── dbt_project_name
     ├─── ...
     ├─── models
     │    ├─── ...
     │    └─── base
               ├─── source1
               │    ├─── _base_source1__sources.yml
               │    ├─── _base_source1__models.yml
               │    ├─── base_source1__model1.sql
               │    ├─── ...
               │    └─── base_source1__modeln.yml
               ├─── ...
               └─── sourcen
     ├─── ...

```
The base layer should be organized by source. Each base folder should contain a source yaml, model yaml, and base models.

#### Best Practices
- The base layer should only be used on a case by case basis.
- The base layer should be the landing zone for semi-structure source data that needs to be parsed. (e.g. JSON data)
- The base layer should be `ref()` in the staging layer.
- The base layer should be used if there is a need for a model to retain the deleted records that are usually excluded in the staging layer. (e.g. `_fivetran_deleted = false`)
- The base models should be materialized as a view.

### models/intermediate/
- Description of the `intermediate` folder
- Best practices of `intermediate` folder
  
### models/legacy/
- Description of the `legacy` folder
- Best practices of `base` folder

### models/marts/
- Description of the `marts` folder
- Best practices of `marts` folder

### models/reports/
- Description of the `reports` folder
- Best practices of `reports` folder

### models/staging/
```
└─── dbt_project_name
     ├─── ...
     ├─── models
     │    ├─── ...
     │    └─── staging
               ├─── source1
               │    ├─── _stg_source1__source.yml
               │    ├─── _stg_source1__model.yml
               │    ├─── stg_source1__model1.sql
               │    ├─── ...
               │    └─── stg_source1__modeln.yml
               ├─── source2
               │    ├─── _stg_source2__source.yml
               │    ├─── _stg_source2__model.yml
               │    ├─── stg_source2__model1.sql
               │    ├─── ...
               │    └─── stg_source2__modeln.yml
               ├─── ...
               └─── sourcen
     ├─── ...

```
The staging layer is organized by source. Each source folder should contain one property YAML for source, one property YAML for model, and the staging models itself.

#### NAMING CONVENTIONS
Property YAMLs:
```
_stg_[source]__source.yml
_stg_[source]__model.yml
```

Staging models:
```
 stg_[source]__[source_table_name].sql
```

#### SOURCE.YML
```yml
version: 2
sources:
  - name:
    description:
    loader:
    database:
    schema:
    tables:
      - name:
        description: 
        meta:
          contains_pii: <TRUE/FALSE>
          effective_dated: <TRUE/FALSE>
          partition_columns: ["column1", "column2", ...]
```
All sources at the staging layer must declare the above meta keys.

#### MODEL.YML
```yml
version: 2
models:
  - name:
    description:
    tests:
      - dbt_utils.unique_combination_of_columns:
        combination_of_columns:
          - column1
          - column2
          - ...
      - dbt_expectations.expect_table_row_count_to_be_between:
          min_value: 1
```
All models at the staging layer must be tested for uniqueness and emptyness using the above tests.

#### STAGING MODEL BEST PRACTICES
- All models in the stager layer should be materialized as a view.
- The staging layer should be generated using the domain and source specific staging macro.
  - [More info on staging macros]
  - If the model is SCD2, then the final data set should include `valid_from`, `valid_to`, `current_rcd_desc`, and `is_current_record` fields
  - The staging layer should almost always exclude deleted records.
    - [More info regarding different conditions based on source systems]
- If a base model exists, the staging model should `ref()` the base model.

#### STAGING MODEL MACROS
Inspired by [codegen](https://hub.getdbt.com/dbt-labs/codegen/latest/), CDP uses macros and bash scripts to automate the creation of the staging layer. CDP uses source specific macros and so not all staging macros are identical. The advantages of the staging macros are:
- reducing repetitive manual work with an automated process
- achieving consist style and structure across multiple sources and projects at the staging layer
- sharing foundational SCD2 logic at the staging layer

[How to generate a staging layer with the use of macros]

## dbt_project_name/seeds/
- Description of the `seeds` folder

## dbt_project_name/snapshots/
- Description of the `snapshots` folder

## dbt_project_name/target/

## dbt_project_name/tests/
- Description of the `tests` folder
