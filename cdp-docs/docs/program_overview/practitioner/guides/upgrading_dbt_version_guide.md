import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrading dbt Version(s) Guide
*This document has been created specifically for upgrading minor versions of major version 1.x.x.*

---
## General Information:

### dbt Resources
dbt Labs provides resources on available dbt versions and related migration guides. The following resources should be reviewed before upgrading dbt versions:
-  dbt's general document regarding dbt Core versions: [link](https://docs.getdbt.com/docs/dbt-versions/core)
-  dbt's version specific migration guide: [link](https://docs.getdbt.com/guides/migration/versions)

### dbt Cloud vs dbt Core
The process documented in this guideline prioritizes upgrading dbt Cloud. However, included in this document are the necessary steps to enable developers/analysts, who develop locally with dbt Core, to upgrade their workstations.

---

## Upgrade Process:
The following dbt actions are to take place in dbt Cloud. 

### 0. Create an issue
Create an issue documenting and notifying the project team that a dbt version upgrade is planned. Attached at the end of this documentation is a issue template.

### 1. Create an upgrade branch
Create a branch from `main` titled `dbt-upgrade-test`. Therefore, we can test all of the changes in a separate branch and merge into `main` when we are ready to finalize the upgrade.

### 2. Update `dbt_project.yml`
Update the dbt version parameters `version` and `require-dbt-version` in `dbt_project.yml`

### 3. Update `packages.yml`
The command `dbt deps` will output all of the installed packages' current version and latest version. For example,
```shell
18:16:21  Running with dbt=1.4.4
18:16:30  Installing dbt-labs/codegen
18:16:30    Installed from version 0.9.0
18:16:30    Updated version available: 0.11.0
18:16:30  Installing brooklyn-data/dbt_artifacts
18:16:30    Installed from version 2.2.2
18:16:30    Updated version available: 2.5.0
18:16:30  Installing calogica/dbt_expectations
18:16:31    Installed from version 0.8.5
18:16:31    Updated version available: 0.10.0
18:16:31  Installing Montreal-Analytics/snowflake_utils
18:16:32    Installed from version 0.5.0
18:16:32    Updated version available: 0.6.0
18:16:32  Installing dbt-labs/audit_helper
18:16:32    Installed from version 0.9.0
18:16:32    Up to date!
18:16:32  Installing dbt-labs/dbt_utils
18:16:32    Installed from version 1.0.0
18:16:32    Updated version available: 1.1.1
18:16:32  Installing calogica/dbt_date
18:16:33    Installed from version 0.7.2
18:16:33    Updated version available: 0.9.1
18:16:33  
18:16:33  Updates available for packages: ['dbt-labs/codegen', 'brooklyn-data/dbt_artifacts', 'calogica/dbt_expectations', 'Montreal-Analytics/snowflake_utils', 'dbt-labs/dbt_utils', 'calogica/dbt_date']                 
Update your versions in packages.yml, then run dbt deps
```

Please review relevant package documentation and be careful of breaking changes that could be introduced when upgrading packages. For example, [dbt_utils v1.0](https://docs.getdbt.com/guides/migration/versions/upgrading-to-dbt-utils-v1.0#breaking-changes) included breaking changes. Document all relevant breaking changes in their own issue and list these sub-issues in the main issue's **Related Issues** section. Some breaking issues may need to be resolved before the upgrade is completed and others may be resolved after the upgrade in post upgrade maintenance. For issues that need to be resolved before the upgrade is completed, include the code changes in the `dbt-upgrade-test` branch.

After reviewing, update the packages versions in the `packages.yml`.

### 4. Set the dbt version for a testing environment
Similar to using a testing branch, in Cloud, create a new project environment for testing. 

In the environment's **Settings**, edit the **dbt Version** parameter and specify the new version of dbt. 

In the same window, toggle/check **Only run on a custom branch**. 

Enter in the **Custom Branch** field the name of the testing branch created in step one. In this case, `dbt-upgrade-test`. 

Create a job in the new environment that replicates the project's production environment build all job.

### 5. Test the project compatibility with the new version
Manually run the build all job that was created in step four. 

If the job runs successfully, then the project is compatible with the new version. 

If the job runs unsuccessfully including any errors or warnings, then the project is not 100% compatible with the new version. Identify, document, and resolve all the issues. The issues should be treated accordingly to their severity and impact to the project. (i.e. Low impact issues should be resolved relatively quickly while large impact issues may need to be discussed with the team to decide on a resolution path.) For documentation of the issues, create their own issue and list the issue in the main issue's **Related Issues** section. Include all of the code changes in the `dbt-upgrade-test` branch.

In a dbt Cloud only world this step would be the last step before finalizing the version upgrade. However, an additional step is needed to enable dbt Core users to upgrade as well.

### 7. Update `requirements.txt` for dbt Core
Update the dbt Core package, `dbt-core`, and the adapter plugin , `dbt-snowflake`, in the `requirements.txt` file in the testing branch, `dbt-upgrade-test`. Updating these two packages is what is required to update the dbt version. 

However, in `requirements.txt` there are other secondary packages that are used. The command `pip list --outdated` will output **all** installed packages that have updated versions (only in the CLI not in the Cloud IDE). Many of the packages outputted are packages installed from the packages listed in the requirements file. For example, the requirements files includes `dbt-core`, `dbt-snowflake`, `sqlfluff`, `yamllint`, `sqlfluff-templater-dbt`, `python-dotenv` and the output is
```shell
Package                    Version Latest Type
-------------------------- ------- ------ -----
agate                      1.7.0   1.7.1  wheel
charset-normalizer         2.1.1   3.2.0  wheel
cryptography               38.0.4  41.0.4 wheel
dbt-core                   1.4.4   1.6.3  wheel
dbt-extractor              0.4.1   0.5.0  wheel
dbt-snowflake              1.4.1   1.6.3  wheel
hologram                   0.0.15  0.0.16 wheel
jsonschema                 3.2.0   4.19.1 wheel
keyring                    23.13.1 24.2.0 wheel
Logbook                    1.5.3   1.6.0  wheel
mashumaro                  3.3.1   3.10   wheel
msgpack                    1.0.5   1.0.6  wheel
networkx                   2.8.8   3.1    wheel
parsedatetime              2.4     2.6    wheel
pathspec                   0.10.3  0.11.2 wheel
pydantic                   2.3.0   2.4.1  wheel
pydantic_core              2.6.3   2.10.1 wheel
pyOpenSSL                  22.1.0  23.2.0 wheel
setuptools                 58.1.0  68.2.2 wheel
snowflake-connector-python 2.8.1   3.2.0  wheel
sqlfluff                   2.0.1   2.3.2  wheel
sqlfluff-templater-dbt     2.0.1   2.3.2  wheel
urllib3                    1.26.16 2.0.5  wheel
yamllint                   1.28.0  1.32.0 wheel
```

Similar to the process of updating the `packages.yml`, please review relevant package documentation and be careful of breaking changes that could be introduced when upgrading packages. For [example](https://github.com/cdp-ucsc/dbt-pilot/issues/66), when [upgrading to dbt Core v1.4](https://github.com/cdp-ucsc/dbt-pilot/pull/65) SQLFluff need to upgrade to version v2.0 which introduced to breaking changes to SQLFluff. If there are breaking changes to the secondary packages continue with upgrading the package but document any relevant breaking changes that need to be reviewed/addressed in the post upgrade maintenance. We do not want breaking changes to secondary packages to prevent the dbt version upgrade.

After reviewing, update the other secondary packages in `requirements.txt`.

>It is important to include an updated `requirements.txt` for developers/analysts that are working locally. Without an updated requirements file their local workstation (often managed by virtual environments) will no longer be compatible with the project.

### 6. Finalize and complete the upgrade
To finalize the upgrade the following should be completed in sequence,
- Open and fill out the PR. The template is attached at the end of this document.
- The PR is reviewed and approved by the reviewers. 

After the final approval, the PR is should not be immediately merged and closed.
- After the final approval, in dbt Cloud, update all of the remaining environments (unless otherwise stated).
- Verify all of the PR CI/CD checks pass.
- Merge and close the PR.

**Both the Production environment dbt version needs to be updated and the PR merged before the next Production job or the Production job will fail.**

### 7. Post upgrade maintenance
After step 6, dbt Cloud is fully upgraded and ready for users. For dbt Core/local development, users will needed to upgrade their local workstations based on the new `requirements.txt` file. And if there were any breaking changes to any of the secondary Python packages those will need to be addressed.

Also, any remaining open sub-issues listed in the main issue's **Related Issues** section must be addressed.

---
## Templates:

### Issue Template
**Issue title:**
```
dbt version upgrade vx.x.x to vz.z.z
```

**Issue body**:
```
# Description:
Upgrade dbt versions from vx.x.x to v.z.z.z.

# Links/references: 
The link to dbt's general document regarding dbt Core versions: [link](https://docs.getdbt.com/docs/dbt-versions/core#best-practices-for-upgrading)
The link to dbt's version specific upgrade details: [link](https://docs.getdbt.com/guides/migration/versions/upgrading-to-v1.5) (v1.5 linked as an example)

# Related Issues
All of the sub-issues related to the upgrade are linked and listed here. This issue ticket cannot be closed until all of the sub-issues are completed and/or closed. This means if there are issues left for post upgrade then this issue will remain open until those are addressed. 

Please title the sub-issues appropriately to indicate their relation to the upgrade. For example, "package_name package_version breaking change(s) due to dbt dbt_version upgrade"
- [ ] example_issue #

# Additional Notes/Comments
```

### PR Template
**PR title:** 
```
dbt version upgrade vx.x.x to vz.z.z
```

**PR body:**
```  
# Description:
Upgrade dbt versions from vx.x.x to v.z.z.z.

# Links/references: 
The link to dbt's general document regarding dbt Core versions: [link](https://docs.getdbt.com/docs/dbt-versions/core#best-practices-for-upgrading)
The link to dbt's version specific upgrade details: [link](https://docs.getdbt.com/guides/migration/versions/upgrading-to-v1.5) (v1.5 linked as an example)

# Upgrade Process Check-list:
 - [ ] Create an issue

 - [ ] Create an upgrade branch

- [ ] Update the dbt version parameters `version` and `require-dbt-version` in `dbt_project.yml`

- [ ] Update `packages.yml`
  - [ ] Review relevant package documentation and be careful of breaking changes that could be introduced when upgrading packages. 
  - [ ] Document all relevant breaking changes in their own issue and list these sub-issues in the main issue's **Related Issues** section.
  - [ ] For issues that need to be resolved before the upgrade is completed, include the code changes in the `dbt-upgrade-test` branch.

- [ ] Set the dbt version for a testing environment
  - [ ] Create a new project environment for testing. 
  - [ ] Edit the **dbt Version**  Settings parameter and specify the new version of dbt. 
  - [ ] Toggle/check **Only run on a custom branch**. 
  - [ ] Enter in the **Custom Branch** field the name of the testing branch.
  - [ ] Create a job in the new environment that replicates the project's production environment build all job.

- [ ] Test the project compatibility with the new version by manually running the build all job. 
 - [ ] The job ran successfully.
 - [ ] The job did not run successfully.
    - [ ] Identify, document, and resolve all the issues.
    - [ ] Identify and document the issue(s) in their own issue and list these sub-issues in the main issue's **Related Issues** section.
    - [ ] For issues that need to be resolved before the upgrade is completed, include the code changes in the `dbt-upgrade-test` branch.

- [ ] Update `requirements.txt` for dbt Core
  - [ ] Update the dbt Core package, `dbt-core`, and the adapter plugin , `dbt-snowflake`, in the `requirements.txt` file in the testing branch, `dbt-upgrade-test`. 
  - [ ] Update the secondary packages.
    - [ ] Review relevant package documentation and be careful of breaking changes that could be introduced when upgrading packages. 
    - [ ] Document all relevant breaking changes in their own issue and list these sub-issues in the main issue's **Related Issues** section.
    - [ ] For issues that need to be resolved before the upgrade is completed, include the code changes in the `dbt-upgrade-test` branch.

- [ ] Finalize and complete the upgrade
  - [ ] Open and fill out the PR sections completely.
  - [ ] Assign reviewers.
  - [ ] After the final approval, in dbt Cloud, update all of the remaining environments (unless otherwise stated).
  - [ ] Verify all of the PR CI/CD checks pass.
  - [ ] Merge and close the PR. 
  - [ ] If the main issue ticket is automatically closed by this PR, open it if there are remaining sub-issues needed to be addressed post upgrade.

# Related issues that can be closed by this PR:
Link and list the sub-issues that are listed in the main issue's **Related Issues** section using a closing keyword so the issues will be automatically closed by this PR.
- Resolves issue #X

# Additional Notes/Comments
- Developers/analysts using dbt Core should upgrade their local workstations using the specifications in the `requirements.txt` after this PR has been merged.
- Developers/analysts using dbt Cloud do not need to take any additional action after this PR has been merged to continue their work.
```