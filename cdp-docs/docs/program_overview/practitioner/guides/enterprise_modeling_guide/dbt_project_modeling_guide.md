---
description: Documentation for CDP's individual dbt projects.
sidebar_position: 1
---

# dbt Project Modeling Guide

:::caution

This page is a work in progress

:::

# Project Structure and Guide
```
└─── dbt_project_name
     ├─── .github
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
     ├─── template
     ├─── tests
     ├─── .gitignore
     ├─── .sqlfluff
     ├─── .sqlfluffignore
     ├─── dbt_project.yml
     ├─── packages.yml
     ├─── README.md
     └─── requirements.txt
```
The naming convention of projects are:
```bash
[project]-analytics
```

For example, the financial domain project is named `financial-analytics`.

## dbt_project_name/
### Template Repo
```
└─── dbt_project_name
     ├─── .github
     ├─── ...
     ├─── template
     ├─── ...
     ├─── .gitignore
     ├─── .sqlfluff
     ├─── .sqlfluffignore
     ├─── ...
     ├─── packages.yml
     ├─── README.md
     └─── requirements.txt
```
The selected resources above are managed by the template repo, [dbt-project-template](https://github.com/cdp-ucsc/dbt-project-template). Therefore, the resources shared by all of the dbt projects are centrally managed. All dbt projects are created from the template repo.

### dbt Project
```
└─── dbt_project_name
     ├─── ...
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
     ├─── ...
     ├─── tests
     ├─── ...
     ├─── dbt_project.yml
     ├─── ...
```
The remaining resources are project specific and are not managed by the template repo.

### Different Project Properties and Configurations (YAMLs)
```
└─── dbt_project_name
     ├─── ...
     ├─── models
     │    ├─── ...
     │    ├─── │    ├─── properties.yml
     │    ├─── ...
     ├─── ...
     ├─── dbt_project.yml
     ├─── packages.yml
     ├─── ...
```
A dbt project uses YAML, `.yml`, files to store and specify properties and configurations for project resources and the project itself. dbt Labs has documentation regarding properties and configurations [here](https://docs.getdbt.com/reference/configs-and-properties).
>Note that dbt Lab's documentation is versioned and to select the correct version when reviewing their documentation.

The different type of YAMLs that can be found in a dbt project are `dbt_project.yml`, `packages.yml`, and `properties.yml`.

#### dbt_project.yml
dbt Labs' project configuration documentation for the `dbt_project.yml` can be found [here](https://docs.getdbt.com/reference/dbt_project.yml). CDP projects use the [`dbt_project.yml`](https://github.com/dbt-labs/dbt-core/blob/main/core/dbt/include/starter_project/dbt_project.yml) that is generated during the `dbt init` process and make modifications as necessary. A common area that may receive modifications is the models section. For example,
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
    reverse_etl:
      +materialized: table
      +schema: shared_data
```
There is only one `dbt_project.yml` in a dbt project.

#### packages.yml
The `packages.yml` is where packages that should be made available for use in the dbt project are specified. There is only one `packages.yml` in a dbt project. Note that the `packages.yml` is managed by the template repo. 

#### properties.yml
Property YAML files can be named anything. What identifies a YAML file as a property YAML is the resource key and the property keys and values that follow. The following project resources can have property YAML files: models, seeds, snapshots, sources, analyses, exposures, and macros. There can be multiple `properties.yml` files in a dbt project. The [dbt Labs documentation](https://docs.getdbt.com/reference/configs-and-properties) on properties and configurations is very thorough and highly recommended for developers to review.

This document will build upon dbt Labs documentation and further discuss specific CDP standards for each project resource in its corresponding section.

## dbt_project_name/analyses/
> Documentation needed.

## dbt_project_name/data/
> Documentation needed.

## dbt_project_name/dbt_packages/
> Documentation needed.

## dbt_project_name/logs/
> Documentation needed.

## dbt_project_name/macros/
> Documentation needed.

## dbt_project_name/models/
### Model Best Practices
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
> - [Add CDP example models]
- Developers should prioritize modular, reusable, concise, and universal modeling.
> - Again, CTEs can be used to create modular and concise modeling.
> - Intermediate models can be used to create modular, reusable, and concise models.
> - Adhering to CDP's SQL style guide can create concise and universal models.

### models/base/
```
└─── dbt_project_name
     ├─── ...
     ├─── models
     │    └─── base
               ├─── source1
               │    ├─── _base_source1__source.yml
               │    ├─── _base_source1__model.yml
               │    ├─── base_source1__model1.sql
               │    ├─── ...
               │    └─── base_source1__modeln.yml
               ├─── ....
               └─── sourcen
     │    ├─── ...
     ├─── ...

```
The base layer should be organized by source. Each base folder should contain a source yaml, model yaml, and base models.

#### RESOURCE NAMING CONVENTION
Source Property YAML:
```
_base_[source]__source.yml
```

Model Property YAML:
```
_base_[source]__model.yml
```

Base Model:
```
base_[source]__model.sql
```

#### SOURCE.YML
```yml
version: 2
sources:
    - name: source_name
      tables:
        - name: table_name
```
CDP utilizes the source YAML as per dbt lab's documentation. Models declared at the base layer source should not be declared in the staging layer source.

See more source properties [here](https://docs.getdbt.com/reference/source-properties).

#### MODEL.YML
```yml
version: 2
models:
  - name:
    description:
```
Base layer models will be tested at the staging layer per the staging layer's practices.

See more model properties [here](https://docs.getdbt.com/reference/model-properties).


#### BASE LAYER BEST PRACTICES
- The base layer should only be used on a case by case basis.
- Base models should be materialized as a view.
- Base models should not exclude any columns or rows from the source data. Except soft deletes should be excluded.
- Base models should be used as the landing zone for semi-structure source data that needs to be parsed. (e.g. JSON data)
- Base models can be used if there is a need to retain the soft deleted records that are excluded in the staging layer. (e.g. `_fivetran_deleted = false`)
  - This is a rare case. Double-check if this is the correct approach or `dbt snapshot` should be used.
- Base models should be `ref()` in the staging layer. 
  - The staging model name should end in `_flattened` if the base model was semi-structured data.


### models/intermediate/
> Documentation needed.er

### models/legacy/
> Documentation needed.

### models/marts/
> Documentation needed.

### models/reverse_etl/
```
└─── dbt_project_name
     ├─── ...
     ├─── models
     │    ├─── ...
     │    ├─── reverse_etl
               ├─── destination_system1
               │    ├─── _retl_destination_system1_exposure.yml
               │    ├─── _retl_destination_system1_model.yml
               │    ├─── retl_destination_system1__model1.sql
               │    ├─── retl_destination_system1__model2.sql
               │    ├─── ...
               │    └─── retl_destination_system1__modeln.sql
               ├─── destination_system2
               │    ├─── ...
               ├─── ...
     │    ├─── ...
     ├─── ...
```
The reverse ETL layer is organized by destination systems. Each destination system will have a model YAML and exposure YAML.

#### RESOURCE NAMING CONVENTION
Model Property YAML:
```
_retl_[destination_system]_model.yml
```

Exposure Property YAML:
```
_retl_[destination_system]_exposure.yml
```

Reverse ETL Model:
```
retl_[destination_system]__[model_name].sql
```

#### MODEL.YML
```yml
version: 2
models:
  - name:
    description: 
```
There is no set of standard tests recommended for reverse ETL models. Suggested tests are tests related to data integrity/formatting required by the reverse ETL tool Census and the destination system.

The model descriptions should detail the business requirements that the model is meeting for the specific destination system.

See more model properties [here](https://docs.getdbt.com/reference/model-properties).

#### EXPOSURE.YML
```yml
version: 2
exposures:
  - name:
    label:
    description:
    type:
    maturity:
    depends_on:
    tags:
    owner:
      name:
      email: 
```
All reverse ETL models should be referenced under an exposure's `depends_on` key. Exposures are important to surface the destination system in the project DAG. 

See more exposure properties [here](https://docs.getdbt.com/reference/exposure-properties).

#### REVERSE ETL LAYER BEST PRACTICES
- Reverse ETL models should not `ref()` staging models. Ideally they `ref()` mart models.
  - Beware of models referencing resources of different materializations (i.e. staging view vs mart table).
- Reverse ETL models should extract business requirements/logic out of the reverse ETL tool so it can be managed in the dbt project.
  - Reverse etl tools can change. Managing the business requirements in the dbt project makes it easily transferrable. The dbt project also provides version management that is already integrated with CDP's workflow.

### models/staging/
```
└─── dbt_project_name
     ├─── ...
     ├─── models
     │    ├─── ...
     │    ├─── staging
               ├─── source1
               │    ├─── _stg_source1__source.yml
               │    ├─── _stg_source1__model.yml
               │    ├─── stg_source1__model1.sql
               │    ├─── ...
               │    └─── stg_source1__modeln.yml
               ├─── source2
               │    ├─── _stg_source2__schemaX_source.yml
               │    ├─── _stg_source2__schemaY_source.yml
               │    ├─── _stg_source2__schemaZ_source.yml
               │    ├─── _stg_source2__model.yml
               │    ├─── stg_source2__model1.sql
               │    ├─── ...
               │    └─── stg_source2__modeln.yml
               ├─── ...
     │    ├─── ...
     ├─── ...
```
The staging layer is organized by source. A source can be further organized into separate source YAMLs for each schema if the source is comprised of multiple schemas. A single source will have a single model YAML regardless of the organization of source YAMLs.

See the `financial-analytics` [staging layer](https://github.com/cdp-ucsc/financial-analytics/tree/main/models/staging/) for an example.

#### RESOURCE NAMING CONVENTION
Source Property YAML:
```
_stg_[source]__source.yml or `_stg_[source]__[schema]_source.yml
```

Model Property YAML:
```
_stg_[source]__model.yml
```

Staging Model:
```
 stg_[source]__[source_table_name].sql
```

#### SOURCE.YML
```yml
version: 2
sources:
    - name: source_name
      meta:
        soft_delete_columns:
      tables:
        - name: table_name
          meta:
            effective_type:
            effective_date_col:
            effective_sequence_col:
            effective_sequence_order:
            partition_columns:
            columns:
              - name: column_a
                meta:
                  casted_as: data_type
                  renamed_as: new_name
```
CDP utilizes the source YAML as per dbt lab's documentation. CDP also utilizes dbt's meta tag to declare additional information specific to CDP's staging process. Further information can be found [here](https://github.com/cdp-ucsc/cdp-ucsc-dbt-codegen/tree/staging-layer-macros/macros/cdp-ucsc-staging-layer).

See more source properties [here](https://docs.getdbt.com/reference/source-properties).

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

See more model properties [here](https://docs.getdbt.com/reference/model-properties).

#### STAGING LAYER BEST PRACTICES
- Staging models should be materialized as views.
- Staging models should not exclude any columns or rows from the source data. Except soft deletes should be excluded.
- Staging models can include renamed fields.
  - The new field name should be independent of business name/logic. More business friendly names can be declared in downstream layers. 
- Staging models can include data type conversions.
- [CDP's staging macros](https://github.com/cdp-ucsc/cdp-ucsc-dbt-codegen/tree/staging-layer-macros/macros/cdp-ucsc-staging-layer) should be used to generate models. The staging macros reflect the staging model's best practices.
  - By utilizing CDP's staging macros, staging logic will be consistently managed across all of the dbt projects.
  - If a base model exists, the staging model should `ref()` the base model and not be generated from CDP's staging macros.

## dbt_project_name/seeds/
> Documentation needed.

## dbt_project_name/snapshots/
> Documentation needed.

## dbt_project_name/target/
> Documentation needed.

## dbt_project_name/tests/
> Documentation needed.
