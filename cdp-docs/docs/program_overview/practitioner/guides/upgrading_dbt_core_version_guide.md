# Upgrading dbt Core Version(s) Guide
This document provides context, relevant to dbt Core versions, on our dbt project ecosystem and process guidelines on how to upgrade dbt Core versions.

---
## Additional Information:

### dbt Core Resources
dbt Labs provides several resources regarding the different dbt Core versions and guides to version migrations. Core developers/team member should review all of the relevant resources:
-  dbt's general document regarding dbt Core versions: [link](https://docs.getdbt.com/docs/dbt-versions/core)
-  dbt's version specific migration guide: [link](https://docs.getdbt.com/guides/migration/versions)

### dbt Cloud
In dbt Cloud, there is a dedicated environment to test different dbt Core versions. For the project UCSC/cdp-pilot, the testing environment is labeled **dbt upgrade testing**. This environment mirrors the **Deployment** environment except:
- the dbt version should reflect the desired upgrade  version (usually the 'latest' version)
- runs on the custom branch `dbt-upgrade-testing`
- builds to `CDP_PILOT_PRD.DBT_1_6_QA` in Snowflake

### Python Packages (`requirements.txt`)
As part of our dbt projects, we specify all necessary Python packages and their version in a `requirements.txt` file. This is where the installation version of dbt Core and Snowflake adapter plugin are specified. Amongst dbt Core and Snowflake adapter plugin, other necessary Python packages are in specified here too. 

When upgrading dbt Core versions, we also update all other Python package versions to their latest versions (or, if applicable, the recommended version for the specified dbt Core version). However, if any of the package version upgrades interfere with dbt's ability to run and build the dbt project, then those specific packages should not be upgraded. 

If dbt can run and build the project successfully but the package that has been upgraded does not function properly, the upgrade of that package can still progress. Troubleshooting and adjusting the secondary packages can occur after the dbt Core upgrade effort.

For [example](https://github.com/cdp-ucsc/dbt-pilot/issues/66), when [upgrading to dbt Core v1.4](https://github.com/cdp-ucsc/dbt-pilot/pull/65) SQLFluff need to upgrade to version v2.0. However, this introduced breaking changes for SQLFluff but not dbt. The upgrade for both packages proceeded. After the completion of the dbt Core upgrade, SQLFluff was not usable until the breaking changes were addressed.

In general, we do not want the secondary packages to prevent the upgrade of dbt Core.

### dbt Packages (`packages.yml`)
As part of our dbt projects, we specify all necessary dbt packages and their version in the `packages.yml` file.

When upgrading dbt Core versions, we also update all the dbt packages to their latest versions (or, if applicable, the recommended version for the specified dbt Core version). Please be careful of breaking changes that could be introduced when upgrading packages. For example, [dbt_utils v1.0](https://docs.getdbt.com/guides/migration/versions/upgrading-to-dbt-utils-v1.0#breaking-changes) included some breaking changes.

---

## Upgrade Process:
> This process will be captured in a PR template provided at the end of the documentation. It is recommended that the developer responsible for the upgrade review this document in its entirety.

### 1. Update version numbers throughout the dbt project
- Update all of the following versions numbers in the branch `dbt-upgrade-test`. Make sure the branch is up to date with `main` to avoid any merge conflicts. 
  - If the branch does not exist, create the branch from `main`.
- Update the packages listed in the `requirements.txt`. The command `pip list --outdated` will output all of the installed packages current version and latest version. Note, the command prints out **all** packages. Many of the listed packages are packages installed by the packages listed in the `requirements.txt`. Search through the output to review only the packages listed in the requirements file.
  -  Review any available update documentation for breaking changes. For example, [SQLFluff v2.0.0's breaking changes](https://github.com/sqlfluff/sqlfluff/releases/tag/2.0.0). Document any relevant breaking changes. The packages can still be upgraded. 
- Update the dbt Core version parameters `version` and `require-dbt-version` in `dbt_project.yml`
- Update the dbt packages in the `packages.yml`. The command `dbt deps` will output all of the installed packages current version and latest version.
  - Review any available update documentation for breaking changes. For example, [dbt utils v1.0's breaking changes](https://docs.getdbt.com/guides/migration/versions/upgrading-to-dbt-utils-v1.0). Document any relevant breaking changes. The packages can still be upgraded. 

With dbt Core and all of the packages versions updated, we can now test to see if our dbt project can run and build successfully. 

### 2. Test the version upgrades in CLI
- Based on the updated `requirements.txt`, create a new venv. (Instructions how to make a new venv can be found [here](https://cdp-ucsc.github.io/doc/docs/program_overview/practitioner/onboarding/workstation_setup#5-make-a-virtual-environment-using-venv).)
- Run `dbt build`.
  - If the build is successful, then continue onto the next step.
  - If the build is not successful, then identify, document, and resolve the issue(s) before moving onto the next step.
- Test out secondary Python packages' functionality. For example, `sqlfluff` models to confirm SQLFluff is functioning as expected.
  - If all functionality is successful, then move on the next step.
  - If there is functionality that has been broken by the upgrades, do **not** roll back the package version upgrade. Instead, document the issue(s) to be addressed after the upgrade of the dbt Core version is complete.

Once the `dbt build` of the entire project is successful locally, we can test the new version in the dbt Cloud environment without expecting issues.

### 3. Test the version upgrades in Cloud
- Confirm/set the version for the **dbt upgrade testing** deployment environment.
- Confirm/set the branch for the **dbt upgrade testing** deployment environment is/to `dbt-upgrade-testing`. (The branch that was used in step 1.)
- Confirm the build all job runs at the same time as the production environment's build all job.
  - We can manually run this job to confirm the project builds successfully. 
  - If we want to audit any information between the two environments, we can wait until the next scheduled run.
  - If the build is successful, then continue onto the next step.
  - If the build is not successful, then identify, document, and resolve the issue(s) before moving onto the next step.

Once the build all job runs successfully in the cloud, we can confidently upgrade the version in the production environment.

### 4. Upgrade dbt Cloud's production environment
- Set the version for the production environment.

### 5. Fill out and submit the PR
- Copy and paste the dbt Core version upgrade PR template at the end of this documentation to a real PR.
- Fill out and assign reviewers to the PR.
- Confirm the PR checks pass successfully.
  - If checks do not pass, then identify, document, and resolve the issue(s) before moving onto the next step.

Once the PR has been reviewed, approved, and merged the upgrade of dbt Core versions is completed.

### 6. Post upgrade maintenance
- If there were any breaking changes to the secondary Python packages, then resolves those issues.

---

> Insuh: I'll update all the stuff below once we finalize the content above. 

### Issue and PR Template (copy & paste)
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