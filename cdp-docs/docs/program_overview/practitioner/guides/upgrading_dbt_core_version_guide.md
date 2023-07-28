# Upgrading dbt Core Version(s) Guide

This document provides the process guidelines that should be followed when upgrading dbt Core versions.

- Required reading:
  -  dbt's general document regarding dbt Core versions: [link](https://docs.getdbt.com/docs/dbt-versions/core#best-practices-for-upgrading)
  -  dbt's version specific migration guide: [link](https://docs.getdbt.com/guides/migration/versions)
  
  If we are upgrading multiple minor (or major) versions (i.e. v1.1.x to v1.9.x), then read all of the version migration guides up to the current upgrade version (i.e. guides v1.2.x to v1.9.x). 

- Created an issue to request/notify of the upgrade (copy and paste the following content) <br />
  **Issue title:**
  ```
  dbt Core version upgrade vx.x.x to vz.z.z
  ```
  **Issue body**:
  ```
  # Description:
  Upgrade dbt core versions from vx.x.x to v.z.z.z.

  # Links/references: 
  The link to dbt's general document regarding dbt Core versions: [link](https://docs.getdbt.com/docs/dbt-versions/core#best-practices-for-upgrading)
  The link to dbt's version specific upgrade details: [link](https://docs.getdbt.com/guides/migration/versions/upgrading-to-v1.5) (v1.5 linked as an example)

  # Impacted packages:
  [List any packages that need version upgrades due to the dbt Core version upgrade. Specify their current version and the required version.]
  ```

- Create a PR (copy and paste the following content) <br/>
  **PR title:** 
  ```
  dbt Core version upgrade vx.x.x to vz.z.z
  ```
  **PR body:**
    ```  
    # Description:
    Upgrade dbt core versions from vx.x.x to v.z.z.z.

    # Links/references: 
    The link to dbt's general document regarding dbt Core versions: [link](https://docs.getdbt.com/docs/dbt-versions/core#best-practices-for-upgrading)
    The link to dbt's version specific upgrade details: [link](https://docs.getdbt.com/guides/migration/versions/upgrading-to-v1.5) (v1.5 linked as an example)

    # Upgrader's Checklist:
    - [ ] Update `version` and `require-dbt-version` in `dbt_project.yml`
    - [ ] Update `dbt-snowflake` and any packages that also need to upgraded in `requirements.txt`
    - [ ] Upgrade current venv based on updated `requirements.txt`: `pip install -r requirements.txt --upgrade`
    - [ ] Or create a new venv based on updated `requirements.txt`: `pip install -r requirements.txt`
    - [ ] `dbt build` the entire project and provide successful build result screenshot(s)
    > The successful `dbt build` done locally confirms that the upgrade does not break any of our models. However, it does not confirm if the actual data within the models have not been impacted. 
    - [ ] Audit the `information_schema` to verify table structure, row counts, and other meta data. (Execute `drop_old_relations` for the audit)
    <details>
        <summary>Table audit code</summary>

        ```sql
        with
        prod_tables as (
            select * 
                exclude(table_catalog, table_schema, table_owner, created, last_altered, last_ddl, last_ddl_by)
            from cdp_pilot_prd.information_schema.tables
            where table_schema = 'CDP_PILOT'
        ),

        upgraders_tables as (
            select * 
                exclude(table_catalog, table_schema, table_owner, created, last_altered, last_ddl, last_ddl_by)
            from cdp_pilot_dev.information_schema.tables
            where table_schema = '[upgraders_schema]'
        ),

        prod_minus_upgraders as (
            select * from prod_tables
            minus
            select * from upgraders_tables
        ),

        upgraders_minus_prod as (
            select * from upgraders_tables
            minus
            select * from prod_tables
        ),
        
        table_audit as (
            select 'prod' as source, * from prod_minus_upgraders
            union all
            select 'upgraders', * from upgraders_minus_prod
        )

        select count(table_name) over( partition by table_name) shared_or_solo, * from table_audit
        order by shared_or_solo, table_name, source

        ```
    </details>
    
    <details>
        <summary>Column audit code</summary>

        ```sql
        with
        prod_columns as (
            select * 
                exclude(table_catalog, table_schema)
            from cdp_pilot_prd.information_schema.columns
            where table_schema = 'CDP_PILOT'
        ),

        upgraders_columns as (
            select * 
                exclude(table_catalog, table_schema)
            from cdp_pilot_dev.information_schema.columns
            where table_schema = '[upgraders_schema]'
        ),

        prod_minus_upgraders as (
            select * from prod_columns
            minus
            select * from upgraders_columns
        ),

        upgraders_minus_prod as (
            select * from upgraders_columns
            minus
            select * from prod_columns
        ),
        
        table_audit as (
            select 'prod' as source, * from prod_minus_upgraders
            union all
            select 'upgraders', * from upgraders_minus_prod
        )

        select count(column_name) over( partition by table_name, column_name) shared_or_solo, * from table_audit
        order by shared_or_solo, table_name, column_name, source

        ```
    </details>

    - [ ] Update dbt Version in dbt Cloud's `dbt version QA` environment
    - [ ] Trigger manually the `qa build` job and provide successful execution screenshot

    > If the local build was successful, the audit passed, and the dbt Cloud job was successful, then we can be confident that the upgrade does not break our dbt project.

    - [ ] Update the dbt Version in dbt Cloud's `Deployment` environment
    > The dbt Cloud check in the PR should now pass.

    # Screenshots:
    - [ ] Successful `dbt build` locally
    - [ ] Audit pass
    - [ ] Successful `qa build` in cloud

    # New Features/Modified Functionality to Note:

    # Breaking Changes and their Corrections:

    # After merge to-do:
    - [ ] All developers must use the updated `requirements.txt`
    > To update existing venv:
    > i. active venv
    > ii. `pip install -r requirements.txt --upgrade`
    ```

- Follow and complete the issue and PR tasks