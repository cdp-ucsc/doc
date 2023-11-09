# Modeling Guide

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

## dbt_project_name/macros/
- Description of the `macros` folder

## dbt_project_name/models/
- The general naming convention for all models should be singular. 
> - If you had a dimension that held attributes for a student in a given term, would you call it “dim_student_term”, “dim_student_terms”, or “dim_students_terms”?
> - Simplicity – singular is shorter and doesn’t vary based on word (e.g., “ies”, “es”, “s”)
> - Coding Principals – in coding, entities are always singular (e.g., Public Class Inventory)
> - English Language Learners – pluralization is difficult, e.g., “inventory” vs “inventories”
- All models should be documented and tested.
- All model table documentation should utilize doc blocks. 

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
               │    ├─── _stg_source1__sources.yml
               │    ├─── _stg_source1__models.yml
               │    ├─── stg_source1__model1.sql
               │    ├─── ...
               │    └─── stg_source1__modeln.yml
               ├─── source2
               │    ├─── _stg_source2__sources.yml
               │    ├─── _stg_source2__sources_effdt.yml
               │    ├─── _stg_source2__models.yml
               │    ├─── stg_source2__model1.sql
               │    ├─── ...
               │    └─── stg_source2__modeln.yml
               ├─── ...
               └─── sourcen
     ├─── ...

```
The staging layer should organized by source. Each source folder should contain a source yaml, model yaml, and staging models.

#### Naming Convention
The source yaml should follow the naming convention:
```
_stg_[source]__sources.yml
```

The model yaml should follow the naming convention:
```
_stg_[source]__models.yml
```

The staging model should follow the naming convention:
```
 stg_[source]__[source_table_name].sql
```

#### Best Practices
- The staging layer can contain the following transformations:
  - renaming
  - type casting
  - basic computations (e.g. cents to dollars)
  - categorizing (e.g. using condition logic to group values via a case when statement)
The staging layer should **not** contain transformation like joins or aggregations. 
- The staging layer should almost always exclude deleted records. 
- If a base model exists, the staging model should `ref()` the base model.
- The staging model is generated differently depending if it is a SCD1 or SCD2 table.
- The staging models should be materialized as views.

#### Model Structure
If the table is a SCD1 table, then the model structure:
```sql
with
    source as (
        select * from {{ source('[source]', '[source_table_name]') }}
        -- If DML (insert, update, delete) indicator type field(s) exist, then conditional(s) on the field(s) to exclude deleted records
        where
            _fivetran_deleted != true
    ),

    renamed as (
        select
            field1,
            field2,
            .
            .
            .
        from source
    )

select * from renamed
```
The SCD1 tables should be generated using the dbt package codegen.

If the table is a SCD2 table, then the model structure:
```sql
/*  The partition columns are:
    ['column1', 'column2', ..., 'columnn']
*/

with
    source as (
            select * from {{ source('[source]', '[source_table_name]') }}
            -- If DML (insert, update, delete) indicator type field(s) exist, then conditional(s) on the field(s) to exclude deleted records
            where
                _fivetran_deleted != true
    ),

    valid_to as (
        ...
    ),

    final as (
        ...
    )

select * from final
```

The SCD2 tables should be generated using a SCD2 table generator macro. SCD2 tables should be listed in a separate source yaml file. The SCD2 yaml file should follow the naming convention:
```
_stg_[source]__sources_effdt.yml
```

## dbt_project_name/seeds/
- Description of the `seeds` folder

## dbt_project_name/snapshots/
- Description of the `snapshots` folder

## dbt_project_name/tests/
- Description of the `tests` folder

## Common Modeling Topics
### Optimizing query times with CTEs
### Parsing semi-structured data
### Joining SCD2 tables