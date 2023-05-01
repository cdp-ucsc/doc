## SQLFluff

### Background

[UCSC Sql Style Guide](https://github.com/cdp-ucsc/dbt-pilot/wiki/Style-Guide-Draft#sql-style-guide)

[Roles](https://towardsdatascience.com/sqlfluff-the-linter-for-modern-sql-8f89bd2e9117) of a linting tool are to enforce cosmetic rules and prevent code smells.
> *"Code bases without a consistent style are hard to read and work with because of their unpredictable structure....
Beyond “ugly” code, there is another category of “problematic” code. Code that isn’t invalid per say, but might indicate an issue in the logic." - Daniel Mateus Pires, Towards Data Science*

Use [SQLFluff](https://docs.sqlfluff.com/en/stable/) to enforce these rules.

SQLFluff is a dialect-flexible and configurable SQL linter. Designed with ELT applications in mind, SQLFluff also works with Jinja templating and dbt. SQLFluff will auto-fix most linting errors, allowing you to focus your time on what matters.

[Source Reference](https://github.com/sqlfluff/sqlfluff#readme)

### The .sqlfluff config in this project enforces the below rules.

| **SQL Style Guide Rule** | **Rule Code** | **SQLFluff Fix compatible** | **SQLFluff Default Configuration** |
|:---|:---|:---|:---|
| Use trailing commas | [LT04](https://docs.sqlfluff.com/en/stable/rules.html#sqlfluff.rules.sphinx.Rule_LT04) | Yes | Yes |
| Indents should be four spaces <br>(except for predicates, which should line up with the where keyword) | [LT02](https://docs.sqlfluff.com/en/stable/rules.html#sqlfluff.rules.sphinx.Rule_LT02) | Yes | Yes |
| Lines of SQL should be no longer than 120 characters | max_line_length | Yes | No |
| Use all lowercase unless a specific scenario needs you to do otherwise. <br>This means that keywords, field names, function names, and file names should all be lowercased. | [CP01](https://docs.sqlfluff.com/en/stable/rules.html#sqlfluff.rules.sphinx.Rule_CP01),<br> [CP02](https://docs.sqlfluff.com/en/stable/rules.html#sqlfluff.rules.sphinx.Rule_CP02), <br> [CP03](https://docs.sqlfluff.com/en/stable/rules.html#sqlfluff.rules.sphinx.Rule_CP03) | Yes | No |
| Always use the `as` keyword when aliasing columns, expressions, and tables. | [AL01](https://docs.sqlfluff.com/en/stable/rules.html#sqlfluff.rules.sphinx.Rule_AL01), <br> [AL02](https://docs.sqlfluff.com/en/stable/rules.html#sqlfluff.rules.sphinx.Rule_AL02) | Yes | Yes |
| Grouping by column numbers is preferred <br> over grouping by column names/aliases (eg. group by 1, 2) <br>Note that if you are grouping by more than a few columns, <br>it may be worth revisiting your model design. | [AM06](https://docs.sqlfluff.com/en/stable/rules.html#sqlfluff.rules.sphinx.Rule_AM06) | No | No |
| Prefer union all to union| [AM02](https://docs.sqlfluff.com/en/stable/rules.html#sqlfluff.rules.sphinx.Rule_AM02) | N/A,<br>(not supported in snowflake)  | No |
| Avoid using unnecessary table aliases, especially initialisms.<br> It's harder to understand what the table called "c" is <br>compared to "customers". | [AL07](https://docs.sqlfluff.com/en/stable/rules.html#rule-AL07) | Yes | No |
| Be explicit with all join types <br> for example use `inner join` instead of just `join`. | [AM05](https://docs.sqlfluff.com/en/stable/rules.html#rule-AM05) | Yes | No |
| Use single quotes for strings. | [CV10](https://docs.sqlfluff.com/en/stable/rules.html#rule-CV10) | Yes | No |
| Don't use `using` in joins. | [ST07](https://docs.sqlfluff.com/en/stable/rules.html#rule-STO7) | Yes | No |
| Start each CTE on its own line, Use a single blank line around CTEs to add visual separation | [LT07](https://docs.sqlfluff.com/en/stable/rules.html#rule-LT07), <br> [LT08](https://docs.sqlfluff.com/en/stable/rules.html#rule-LT08) | Yes | No |
| Don't end a line with an operator like `and`, `or`, `+`, `||`, etc | [LT03](https://docs.sqlfluff.com/en/stable/rules.html#rule-LT03) | Yes | Yes |
| If there is only one column expression, put it on the same line as select. <br> If there are multiple column expressions, put each one on its own line (including the first one), indented one level more than select. <br> If there is a `distinct` qualifier, put it on the same line as `select`. | [LT09](https://docs.sqlfluff.com/en/stable/rules.html#rule-LT09), [LT10](https://docs.sqlfluff.com/en/stable/rules.html#rule-LT10) | Yes | Yes |
| Don't put extra spaces inside of parentheses | [LT01](https://docs.sqlfluff.com/en/stable/rules.html#rule-LT01) | Yes | Yes |


### Using the sqlfluff config in your project, please use the versions that are in the [requirements.txt](https://github.com/cdp-ucsc/dbt-pilot/blob/main/requirements.txt) e.g: 

- Install  SQLFluff
`pip install sqlfluff==1.4.5`
 
- Install adapter
`pip install dbt-snowflake==1.3.0`

- Install templater
`pip install sqlfluff-templater-dbt==1.4.5`

- there is a configured.sqlfluff in the root of the project.  
it follows the dbt sql style guide as closely as possible (there are some rules that are not able to be linted or fixed)
`.sqlfluff, .sqlfluffignore`

#### cli examples:
- lint a specific file
`sqlfluff lint models/staging/fis/test_joins.sql`

- lint all files in a directory
`sqlfluff lint models/staging/fis`

- sqlfluff fix a specific file (caution: this will make changes to your file)
`sqlfluff fix models/staging/fis/test_joins.sql`

- sqlfluff fix files in specific directory (caution: this will make changes to all files)<br>
`sqlfluff fix models/staging/fis`