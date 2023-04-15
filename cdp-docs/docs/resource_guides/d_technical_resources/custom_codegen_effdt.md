---
sidebar_position: 4
---

# Custom Codegen

#### _stg_ucp__effdt_tables_generator.py

## Python driver/generator: `_stg_ucp__effdt_tables_generator.py`

### Import packages used in the functions
```python
import yaml
import subprocess
```

### Define the get_base_tables_and_source function
> This function will load and parse a dbt style source .yml file

The function requires two inputs: the source .yml file path and a source_index. Leave the source_index as 0.
```python
def get_base_tables_and_source(file_path, source_index):
```

Preserve quotes when loading in content from the .yml file. Single and double quotes are handled behind the scenes by Python and then dbt (jinja) and the output is not always what you expect it to be. And both programs are very specific about the use of single and double quotes so this is here to help us manuever quoting.
```python
    yaml.preserve_quotes = True
```

Open the .yml file.
```python
    file = open(file_path)
```

Load the .yml file and grab the necessary content and store them in variables.
```python
    sources = yaml.load(file, Loader=yaml.FullLoader)

    tables_configs = sources['sources'][source_index]['tables']
    table_names = [item['name'] for item in tables_configs]
    table_partition_columns = [item['partition_columns'] for item in tables_configs]
    source_name = sources['sources'][source_index]['name']
```

Specify that the function returns the source_name, table_names, and partition_columns from the .yml.
```python
    return source_name, table_names, table_partition_columns
```

### Define the generate_base_model function
>  This function will generate the bash command that calls the stg_ucp__effdt_tables macro

The functions requires inputs that will specific the stg_ucp__effdt_tables macro arguments.
```python
def generate_base_model(source_name, table_name, table_partition_columns, alphabetize):
```

We need to generate the partition columns in the correct format so the macro can accept the partition columns. We need to loop through the partition columns and wrap each column with a set of single and double quotations.

First we initialize the `quoted_pc` (quoted partition column) as an empty string and get the number of partition columns (`num_pc`).
```python
    quoted_pc = ""
    num_pc = len(table_partition_columns)
```

Then we create the string of partition_columns in the format accepted by the macro.
```python
    for iter in range(num_pc):
        if iter < num_pc-1:
            quoted_pc = quoted_pc + "\'\"\'" + table_partition_columns[iter] + "\'\"\'" + " , "
        else:
            quoted_pc = quoted_pc + "\'\"\'" + table_partition_columns[iter] + "\'\"\'"
```

Then we piece together the bash command that will execute our macro based on the source name, table name, partition columns, and alphabetize inputs.
```python
    bash_command = ""
    bash_command = bash_command + """dbt run-operation stg_ucp__effdt_tables --args "{'source_name': '""" \
        + source_name + """', 'table_name': '""" \
        + table_name + """', 'partition_columns': '[""" \
        + quoted_pc + """]', """ \
        + """'alphabetize': '"""+ alphabetize  \
         + """' }" """
```

Using the `subprocess` package we can execute the bash command and store the output in a variable.
```python
output = subprocess.getoutput(bash_command)
```

Since the output from the bash command contains execution details in the first few lines, we specify a portion of the output that we want to actually save. And the portion we are interested is from the line that starts with "{% set partition_columns"} and onwards. Then we save that output to a variable.
```python
    output = subprocess.getoutput(bash_command)
    sql_index = output.lower().find('{% set partition_columns')
    sql_query = output[sql_index:]
``

Specify that the function returns the output from the macro.
```python
return sql_query
```

### This is where we specify the driver that calls the functions we defined above

This line is a python thing and it tells python to execute the code that follows.
```python
if __name__ == "__main__":
```

User can specify the path of the source .yml file.]
```python
source_yml_path = "models/staging/ucpath/_stg_ucp__sources.yml"
```

Call the `get_base_tables_and_source` function to get the source name, table names, and partition columns from the .yml specified by the user.
```python
    source_name, table_names, table_partition_columns = get_base_tables_and_source(source_yml_path, 0)
```

User friendly output to the terminal for users to view progress.
```python
    print("")
    print("---------------- DRIVER ----------------")
    print("")
    print("Can generate stage files for the following source and tables.")
    print("")
    print("Source: ", source_name)
    print("Tables: ", table_names)
    print("Partition columns for each table: ", table_partition_columns)
    print("")
    print("***** User must specify table selection inside the file. LINE69 *****")
```

Get the number of tables in the .yml file.
```python
    num_tables = len(table_names)
```

User can specify the path where the generated query will be saved to.
```python
    stg_file_path_prefix = "analyses/test_stg_"
```

User can uncomment the line that specifies what table selection they would like to execute this driver with.
```python
    # table_selection = 'all'
    # table_selection = 'only_one'
    # table_selection = 'from_x_to_y'
```

User can specify the specific of their table selection.
```python
    only_one = 2
    from_x = 1
    to_y = 3
```

User can uncomment the lines that specifies which alphabetize option they would like.
```python
    # alphabetize = "" #No
    # alphabetize = "True" #Yes
```

Based on the user selection of what table selection they would like generated there are different cases.

If the user wants to generate all tables in the .yml file
```python
    if table_selection == 'all':

        for table_number in range(num_tables):
```

If the user wants to only generate one table from the .yml file
```python
    elif table_selection == 'only_one':
```

If the user wants to generate a range of tables from the .yml file
```python
elif table_selection == 'from_x_to_y':
        for table_number in range(from_x, to_y+1):
```

The following code is the same for each table selection option but just slightly modified to accommodate each option.

User friendly output for users to view progress.
```python
            print("")
            print("------ GENERATING...")
            print("")
            print(f'The table, {table_names[table_number]}, with partition columns, {table_partition_columns[table_number]}, has been staged here: ')

```

Call the `generate_base_model` function and save output to a variable.
```python
            query  = generate_base_model(source_name, table_names[table_number], table_partition_columns[table_number], alphabetize)
```

Specify where to save the outputted query based on source and table name.
```python
            stg_file_path = stg_file_path_prefix + source_name + "__" + table_names[table_number] + '.sql'
```

Print it for the user.
```python
            print(stg_file_path)
```

Open the file and write in the outputted query. If the file does not exist this will create the file and then write in the query. If the file does exist this will overwrite all the content that already exists with the new content. (So be careful!!)
```python
            with open(stg_file_path, 'w+') as f:
                                data = f.read()
                                f.seek(0)
                                f.write(query)
                                f.truncate()
                                f.close()
```

User friendly output for users to view progress.
```python
            print("")
            print("---------------- GENERATION COMPLETE ----------------")
            print("")
```

# dbt-pilot/macros/

## macros/generic_tests/

### current_record.sql

Apply at: column level \
Following columns must exist in the model: valid_from, valid_to, current_record_desc

Description:
This test checks all current records for any records where `valid_from` is greater than system date (future) or `valid_to` is less than system date (past).

Note, this can be applied to non-effective sequenced data sets and effective sequenced data sets. However, for effective sequenced data sets this test will not check if the `last_rcd_of_effdt = Y` condition is satisfied. (This feature will be added.)

Example:
```yaml
version: 2

models:

  - name: [enter_model_name]
    tests:
      - current_record
```

### future_record.sql

Apply at: column level \
Following columns must exist in the model: valid_from, current_record_desc

Description:
This test checks all future records for any records where `valid_from` is less than or equal to system date system date (not-future).

Note, can be applied to non-effective sequenced data sets and effective sequenced data sets. However, there is nothing checking the value of `last_rcd_of_effdt`.

Example:
```yaml
version: 2

models:

  - name: [enter_model_name]
    tests:
      - future_record
```

### past_record.sql

Apply at: column level \
Following columns must exist in the model: valid_from, current_record_desc

Description:
This test checks all future records for any records where `valid_from` is less than or equal to system date system date (not-future).

Note, can be applied to non-effective sequenced data sets and effective sequenced data sets. For effective sequenced data sets, this test will check if the 'last_rcd_of_effdt = N` condition is satisfied.

Example:
```yaml
version: 2

models:

  - name: [enter_model_name]
    tests:
      - past_record
```

## macros/staging/
Description:
The staging macros are created to simplify the generation of staging models. They were initially developed to stage UCPath models. Therefore, lots of the macros are not 100% dynamic; meaning they have hardcoded portions that rely on a specific set up of a stage model. 

For example, the staging macros assume that the import CTE for the source is called `source`. 

### max_effseq.sql 

Input: partition_columns \
Output: max_effseq_of_effdt \
Hard-coded: effseq, effdt

Description:
This macro takes the `partition_columns` variable and returns the column `max_effseq_of_effdt`. The marco applies the `max()` window function over the partition of `partition_columns` and `effdt` column to the `effseq` column to identify the largest effective sequence within the partitioned data set.

Note, `max_effseq_of_effdt` can be used to defined a `last_rcd_of_effdt = Y/N` flag column.

Example:

If ` {% set partition_columns = ['employee', 'empl_rcd'] %} `, then

| employee      | empl_rcd       | effdt      | effseq | max_effseq_of_effdt |
|--------|----------|------------|--------|---------------------|
| Logan  | x | 01/01/2022 | 2      | 2                   |
| Logan  | x | 01/01/2022 | 1      | 2                   |
| Logan  | x | 01/01/2022 | 0      | 2                   |
| Logan | x | 06/06/2022 | 1      | 1                   |
| Logan | x | 06/06/2022 | 0      | 1                   |
| Logan   | x | 09/09/2022 | 0      | 0                   |
| Logan  | y | 01/01/2021 | 2      | 2                   |
| Logan  | y | 01/01/2021 | 1      | 2                   |
| Logan  | y | 01/01/2021 | 0      | 2                   |
| Logan | y | 06/06/2021 | 1      | 1                   |
| Logan | y | 06/06/2021 | 0      | 1                   |
| Logan   | y | 09/09/2021 | 0      | 0                   |

How to call macro: `{{ max_effseq(partition_columns) }}`

### valid_to.sql

Input: partition_columns \
Output: unique_partition_group_record (CTE), valid_to (CTE) \
Hard-coded: effdt

Description: This macro takes the `partition_columns` variable and returns two CTEs, `unique_partition_group_record` and `valid_to`. The `unique_partition_group_record` groups the data by the `partition_columns` and `effdt`. This CTE returns a unique record for each `partition_columns` and `effdt` record combination. The `valid_to` CTE derives a valid to date based on the preceding unique record's `valid_from` date using a window function.

Note, the derived `valid_to` column in the `valid_to` CTE is used in the current record macros. And can be joined with the original data set using the `partition_columns` and `effdt` columns as the joining key. 

Example:

If ` {% set partition_columns = ['employee', 'empl_rcd'] %} `, then

`unique_partition_group_record` CTE 
| employee      | empl_rcd       | effdt     
|--------|----------|------------
| Logan  | x | 01/01/2022        
| Logan | x | 06/06/2022     
| Logan   | x | 09/09/2022     
| Logan  | y | 01/01/2021        
| Logan | y | 06/06/2021     
| Logan   | y | 09/09/2021     

and `valid_to`
| employee | empl_rcd | effdt      | valid_to   
|----------|----------|------------|------------
| Logan    | x        | 01/01/2022 | 06/05/2022 
| Logan    | x        | 06/06/2022 | 09/08/2022 
| Logan    | x        | 09/09/2022 | 12/31/2099 
| Logan    | y        | 01/01/2021 | 06/05/2021 
| Logan    | y        | 06/06/2021 | 09/08/2021 
| Logan    | y        | 09/09/2021 | 12/31/2099 

How to call macro: `{{ valid_to(partition_columns) }}`

### left_join_valid_to.sql
Input: partition_columns \
Output:  \
Hard-coded: valid_to, source.effdt, valid_to.effdt

Description: This macro left joins the `valid_to` CTE from the `valid_to()` macro to a CTE called `source`. To provide the derived `valid_to` column.

### current_record.sql

Input: valid_from, valid_to \
Output: current_record_desc, current_record
Hard-coded: var("system_date"), current, future, past

Description: This macro takes in two columns, `valid_from` and `valid_to`. Based on the `valid_from` and `valid_to` column for a record it will derive if the record is a current, future or past record. The future record is defined as any record where the `valid_from` date is greater than the system date (i.e. the record is not active yet). The past record is defined as any record where the `valid_to` date is less than the system date (i.e. the record is expired). The current record is defined as any record where the system date is in the window defined from the `valid_from` date and to the `valid_to` date (i.e. is currently active).

Note, this derivation of current, future, and past records is dependent on the assumption that the valid date windows, defined by `valid_from` and `valid_to`, of records do not overlap. This assumption is ensured by how the `valid_to()` macro derives `valid_to` dates and that no record has the same transaction date in the source data.  Since the `valid_to` date, lags the preceding valid_from date this ensure that windows will never have overlapping start and end dates. No overlapping windows ensures that there will only be one current record for a unique record.

Example:

If `system_date = 10/17/2022`, then

| employee | empl_rcd | effdt      | valid_from | valid_to   | current_record_desc | current_record |
|----------|----------|------------|------------|------------|---------------------|----------------|
| Logan    | x        | 01/01/2022 | 01/01/2022 | 10/16/2022 | past                | N              |
| Logan    | x        | 10/17/2022 | 10/17/2022 | 12/30/2022 | current             | Y              |
| Logan    | x        | 12/31/2022 | 12/31/2022 | 01/31/2022 | future              | N              |
| Logan    | x        | 02/01/2023 | 02/01/2023 | 12/31/2099 | future              | N              |
| Logan    | y        | 01/01/2022 | 01/01/2022 | 11/29/2022 | current             | Y              |
| Logan    | y        | 11/30/2022 | 11/30/2022 | 12/31/2022 | future              | N              |
| Logan    | y        | 01/01/2023 | 01/01/2023 | 12/31/2019 | future              | N              |
| Logan    | z        | 01/01/2022 | 01/01/2022 | 10/17/2022 | current             | Y              |
| Logan    | z        | 10/18/2022 | 10/18/2022 | 12/31/2099 | future              | N              |

How to call macro: `{{ current_record('valid_from', 'valid_to') }}`

### current_record_effseq.sql

Input: valid_from, valid_to \
Output: current_record_desc, current_record
Hard-coded: var("system_date"), current, future, past, last_rcd_of_effdt

Description:
This macro is modified version of the `current_record()` macro. Is it modified to derive current records for a data set that is effective sequenced. The modification is an added condition of to the current record where you must also be the record with the largest effective sequence in addition to satisfying the original conditions. 

Note, this macro and the `current_record()` macro can be merged into one macro.

Example:

If `system_date = 10/17/2022`, then

| employee | empl_rcd | effdt      | effseq | last_rcd_of_effdt | valid_from | valid_to   | current_record_desc | current_record |
|----------|----------|------------|--------|-------------------|------------|------------|---------------------|----------------|
| Logan    | x        | 01/01/2022 | 0      | N                 | 01/01/2022 | 01/01/2022 | past                | N              |
| Logan    | x        | 01/01/2022 | 1      | N                 | 01/01/2022 | 0/01/2022  | past                | N              |
| Logan    | x        | 01/01/2022 | 2      | Y                 | 01/01/2022 | 10/16/2022 | past                | N              |
| Logan    | x        | 10/17/2022 | 0      | N                 | 10/17/2022 | 10/17/2022 | past                | N              |
| Logan    | x        | 10/17/2022 | 1      | Y                 | 10/17/2022 | 12/30/2022 | current             | Y              |
| Logan    | x        | 12/31/2022 | 0      | N                 | 12/31/2022 | 01/31/2022 | future              | N              |
| Logan    | x        | 02/01/2023 | 0      | N                 | 02/01/2023 | 12/31/2099 | future              | N              |

How to call macro: `{{ current_record('valid_from', 'valid_to') }}`

### ucsc_record.sql
Input: partition_columns \
Output: ucsc_record_desc, ucsc_record \
Hard-coded: setid, estabid 

Description:
This macro identifies if the record is a ucsc applicable record or not by checking if setid or estabid is included in the partition columns variable and what their values are. 

### order_by_partition_cols.sql
Input: partition_columns \
Output: *script* \
Hard-coded: effdt

Description:
This macro returns a order by partition columns and effdt clause.

## macros/custom_codegen/

### stg_ucp__effdt_tables.sql
Input: source_name, table_name, partition_columns, case_sensitive_cols \
Output: *query script* \
Hard-coded: *this is intentionally a hard-coded macro*

Description:
This macro generates a staging file for UCPath effective dated tables. It is a customization of the codegen generate base model macro. 

Example: (BASH command) \
    ``` dbt run-operation stg_ucp__effdt_tables --args '{"source_name": "ucpath", "table_name": "ps_compensation", "partition_columns": "['"'emplid'"', '"'empl_rcd'"']"}' ```

## macros/utils/

### custom_get_columns.sql

Input: source_name, table_name, rel_type \
Output: column_names \
Hard-coded: 

Description:
This macro returns the column name of the relation inputted in a list format. The macro can return the columns of relation specified by explicit name reference, source, or ref reference. The macro relies on the `adapter.get_columns_in_relation` function which gets the relation information from the information schema. Therefore, CTEs and ephemeral models are not compatible with this macro. 

> Note, `dbt_utils.get_filtered_columns_in_relation` is a similar macro. There are a few differences between the two:
> * how the custom macro and dbt-utils macro reference relations is slightly different
> * explicit reference of a relation can be used as input in the custom and not in the dbt-util
> * dbt-util checks for and returns error messages regarding incompatible relation types (i.e. CTE, ephemeral models) and custom does not check or return error messages but also cannot process the incompatible relation types (user will get a compilation error)
> * dbt-utils allows you to specify columns that you would like to exclude and custom does not


Example:

Using explicit rel_type: \
` custom_get_columns('none', 'raw.odsprd_hcm_ods.ps_compensation', 'explicit') `

Using source rel_type: \
` custom_get_columns('ucpath', 'ps_compensation', 'source') `

Using ref rel_type: \
` custom_get_columns('none', 'stg_ucp__ps_compensation') `

# dbt-pilot/staging/stg_ucp__effdt_tables.sql

## Custom codegen macro: `stg_ucp__effdt_tables.sql`

### Opening declaration of the macro
```jinja
{% macro stg_ucp__effdt_tables(source_name, table_name, partition_columns, alphabetize=False) %}
```

### Define the source relation
```jinja
    {%- set source_relation = source(source_name, table_name) -%}
```

### Get the columns from the relation
```jinja
    {%- set columns = adapter.get_columns_in_relation(source_relation) -%}
```

### Sort the columns by alphabetical order if `alphabetize = 'True'`. If false, then the columns will be ordered by its ordinal position value (can be found in the information schema).
```jinja
    {% if alphabetize %}
        {%- set column_names=columns | map(attribute='name') | sort -%}
    {% else %}
        {%- set column_names=columns | map(attribute='name') -%}
    {% endif %}
```

### Opening declaration of stg_ucp__effdt_tables variable. Everything within this declaration will be the query outputted by the macro.
> Query refers to the the query outputted/generated by this macro.
```jinja
    {%- set stg_ucp__effdt_tables -%}
```

### In the query define the partition_columns (not in the macro)
> The contents wrapped by `{% raw %} {% endraw %}` will not be processed as jinja but as plain txt. 
```jinja
        {% raw -%} {% set partition_columns = {% endraw %} {{ partition_columns }} {% raw -%} %} {% endraw %}
```

### Customized source cte
```jinja
        with source as (

            select * from {% raw -%} {{ source( {% endraw %} '{{ source_name }}', '{{ table_name }}' {% raw -%} ) }} {% endraw %}

            where dml_ind in ('I', 'U')

        ),
```

### Call the valid_to macro in the query
```jinja
        {% raw -%} {{ valid_to(partition_columns) }} {% endraw %}
```

### Defines the final cte. This will list all of the columns from the source relation in lowercase (source case is not preserved). It will also append all of the partition columns and the effdt column with "source.".
```jinja
        final as (

            select

                {%- for iter in column_names -%}
                    {%- if iter|lower in partition_columns or iter|lower == 'effdt' %}
                        source.{{iter | lower}},
                    {%- else  %}
                        {{iter | lower}},
                    {%-endif-%}
                {%- endfor %}
```

### Define valid_from as
```jinja
                source.effdt as valid_from ,
```

### Everything until the closing `{% endraw %}` is processed as plain txt
```jinja
                {% raw -%}
```

### If effseq exists logic
```jinja
                {% if 'EFFSEQ' in custom_get_columns( {% endraw %} '{{ source_name }}' {% raw -%} , {% endraw %} '{{ table_name }}' {% raw -%} , 'source') %}
```

### If effseq exists then
```jinja
                    {{ max_effseq(partition_columns) }} 
                    case source.effseq when max_effseq_of_effdt then 'Y' else 'N' end as last_rcd_of_effdt ,
```
#### Valid_to is defined differently for records where their effseq < max(effseq)
```jinja
                    case 
                        when last_rcd_of_effdt = 'Y'
                        then valid_to.valid_to

                        when last_rcd_of_effdt = 'N'
                        then source.effdt
                    end as valid_to ,
```

#### Call current record effseq macro 
```jinja
                    {{ current_record_effseq('valid_from', 'valid_to') }}
```

### If effseq does not exist then
```jinja
                {% else %}
                    valid_to.valid_to as valid_to ,
                    {{ current_record('valid_from', 'valid_to') }}

                {% endif %}   
```

### Call ucsc_record macro
```jinja
                {{ ucsc_record(partition_columns) }}

```

### Closing the {% raw %} statement
```jinja
                {% endraw %}
```

### For the final cte
```jinja
        from source
```

### Call the left_join_valid_to macro in the query
> `{{' '}}` is the same as `{% raw %}{% endraw %}`
```jinja
        {{' {{ left_join_valid_to(partition_columns) }} '}}
```

### Select from and order by final cte
```jinja
        )

        {# Custom #}
        select * from final

        {% raw %} {{ order_by_partition_cols(partition_columns) }} {% endraw %}

```

### Closing declaration of the stg_ucp__effdt_tables variable
```jinja
    {% endset %}
```

### If the macro is executed then log the info and return the variable
> This portion is straight from the codegen macro. I am not 100% sure what it accomplishes
```jinja
    {% if execute %}

        {# Custom #}
        {{ log(stg_ucp__effdt_tables, info=True) }}
        {# EndCustom #}

        {% do return(stg_ucp__effdt_tables) %}

    {% endif %}
```

### Closing declaration of the macro
```jinja
{% endmacro %}
```

## Example of outputted query from macro
<details>
  <summary>Query</summary>

```sql
{% set partition_columns =  ['emplid', 'empl_rcd'] %} 


with source as (

    select * from {{ source(  'ucpath', 'ps_compensation' ) }} 


    where dml_ind in ('I', 'U')


),


{{ valid_to(partition_columns) }} 



final as (


    select
                _fivetran_deleted,
                _fivetran_id,
                _fivetran_synced,
                change_amt,
                change_pct,
                change_pts,
                cmp_src_ind,
                comp_effseq,
                comp_frequency,
                comp_pct,
                comp_rate_points,
                comp_ratecd,
                comprate,
                convert_comprt,
                cr_bt_dtm,
                cr_bt_nbr,
                currency_cd,
                dml_ind,
                source.effdt,
                effseq,
                source.empl_rcd,
                source.emplid,
                fte_indicator,
                manual_sw,
                ods_vrsn_nbr,
                rate_code_group,
                upd_bt_dtm,
                upd_bt_nbr,


        -- New Objects
        source.effdt as valid_from ,

        {% if 'EFFSEQ' in custom_get_columns(  'ucpath' ,  'ps_compensation' , 'source') %}

            {{ max_effseq(partition_columns) }}
            case source.effseq when max_effseq_of_effdt then 'Y' else 'N' end as last_rcd_of_effdt ,

            case
                when last_rcd_of_effdt = 'Y'
                then valid_to.valid_to

                when last_rcd_of_effdt = 'N'
                then source.effdt
            end as valid_to ,

            {{ current_record_effseq('valid_from', 'valid_to') }}

        {% else %}
            valid_to.valid_to as valid_to ,
            {{ current_record('valid_from', 'valid_to') }}

        {% endif %}

        {{ ucsc_record(partition_columns) }}



    from source

        {{ left_join_valid_to(partition_columns) }}


)


select * from final

    {{ order_by_partition_cols(partition_columns) }}
```

</details>

## Example of compiled version of the outputted query
<details>
  <summary>Compiled Query</summary>

```sql
with source as (

    select * from raw.odsprd_hcm_ods.ps_compensation 

    where dml_ind in ('I', 'U')

),

unique_partition_group_record as (
    select 
        emplid ,
        empl_rcd ,
        effdt

    from source

    group by 
        emplid ,
        empl_rcd ,
        effdt

),


valid_to as (
    select 
        emplid ,
        empl_rcd ,
        effdt ,
        ( lag(effdt, 1, '2100-01-01' ) over (
                                            partition by 
                                                emplid
                                                ,empl_rcd
                                                order by effdt desc
                                        )
        - 1 ) as valid_to 

    from unique_partition_group_record

    order by 
        emplid ,
        empl_rcd ,
        effdt

), 

final as (


    select
        _fivetran_deleted,
        _fivetran_id,
        _fivetran_synced,
        change_amt,
        change_pct,
        change_pts,
        cmp_src_ind,
        comp_effseq,
        comp_frequency,
        comp_pct,
        comp_rate_points,
        comp_ratecd,
        comprate,
        convert_comprt,
        cr_bt_dtm,
        cr_bt_nbr,
        currency_cd,
        dml_ind,
        source.effdt,
        effseq,
        source.empl_rcd,
        source.emplid,
        fte_indicator,
        manual_sw,
        ods_vrsn_nbr,
        rate_code_group,
        upd_bt_dtm,
        upd_bt_nbr,


        -- New Objects
        source.effdt as valid_from ,

        max(effseq) over ( 
                partition by 
                    source.emplid ,
                    source.empl_rcd ,
                    source.effdt
            ) as max_effseq_of_effdt ,

        case source.effseq when max_effseq_of_effdt then 'Y' else 'N' end as last_rcd_of_effdt ,

        case
            when last_rcd_of_effdt = 'Y'
            then valid_to.valid_to

            when last_rcd_of_effdt = 'N'
            then source.effdt
        end as valid_to ,

        case 
            when valid_from > sysdate()::date 
            then 'future'

            when valid_to < sysdate()::date 
            then 'past'

            when valid_to >= sysdate()::date and last_rcd_of_effdt = 'Y'
            then 'current'

            when valid_to >= sysdate()::date and last_rcd_of_effdt = 'N'
            then 'past'

            else 'verification_needed' 
        end as current_record_desc ,

        case 
            when current_record_desc = 'current' 
            then 'Y'

            when current_record_desc in ('future', 'past')
            then 'N'

            else 'verification_needed'
        end as current_record

    from source

    left join valid_to
        on source.emplid = valid_to.emplid
        and source.empl_rcd = valid_to.empl_rcd
        and source.effdt = valid_to.effdt


)


select * from final

order by 
    emplid
    , empl_rcd
    , effdt
```

</details>