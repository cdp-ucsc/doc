---
sidebar_position: 1
tags:
    - Active
---

# SQL Style Guide

This guide establishes our standards for SQL and are enforced by code review. Some standards are also enforced by [SQLFLuff](https://sqlfluff.com/). The purpose of the guide is to help developers write clear and concise SQL that can be worked on and understood by others.

## General guidelines
* Optimize primarily for readability, maintainability, and robustness rather than for fewer lines of code. New lines are cheap; people's time is expensive.

* Avoid large select statements with multiple tables instead utilize CTEs.
* If a `select` statement is so large it can't be easily comprehended, it would be better to refactor it into multiple smaller CTEs that are later joined back together.

* Lines should ideally not be longer than 120 characters. Very long lines are harder to read, especially in situations where space may be limited like on smaller screens or in side-by-side version control diffs.**

* Identifiers such as aliases and CTE names should be in lowercase `snake_case`. It's more readable, easier to keep consistent, and avoids having to quote identifiers due to capitalization, spaces, or other special characters.**

* Never use reserved words as identifiers.
Otherwise the identifier will have to be quoted everywhere it's used. [(Snowflake's reserved words)](https://docs.snowflake.com/en/sql-reference/reserved-keywords)

* Never use tab characters.
It's easier to keep things consistent in version control when only space characters are used. By default, VS Code inserts spaces and uses 4 space per `Tab` key. [(source)](https://code.visualstudio.com/docs/editor/codebasics#_indentation)

| **SQL Style Guide Rule** | **SQLFluff Rule Code** | **SQLFluff Fix compatible** |
|:---|:---|:---|
| **Lines should ideally not be longer than 120 characters | max_line_length | Yes |
| **Identifiers such as aliases and CTE names should be in lowercase. | [CP01](https://docs.sqlfluff.com/en/stable/rules.html#sqlfluff.rules.sphinx.Rule_CP01), [CP02](https://docs.sqlfluff.com/en/stable/rules.html#sqlfluff.rules.sphinx.Rule_CP02), [CP03](https://docs.sqlfluff.com/en/stable/rules.html#sqlfluff.rules.sphinx.Rule_CP03) | Yes |


## Syntax

**Keywords and function names** should all be lowercase.
Lowercase is more readable than uppercase, and you won't have to constantly be holding down a shift key.

```sql
-- Good
select *
from customers

-- Good
select count(*) as customers_count
from customers

-- Bad
SELECT *
FROM customers

-- Bad
Select *
From customers

-- Bad
select COUNT(*) as customers_count
from customers
```

| **SQLFluff Rule Code** | **SQLFluff Fix compatible** |
|:---|:---|
| [CP01](https://docs.sqlfluff.com/en/stable/rules.html#sqlfluff.rules.sphinx.Rule_CP01), [CP02](https://docs.sqlfluff.com/en/stable/rules.html#sqlfluff.rules.sphinx.Rule_CP02), [CP03](https://docs.sqlfluff.com/en/stable/rules.html#sqlfluff.rules.sphinx.Rule_CP03), [CP04](https://docs.sqlfluff.com/en/stable/rules.html#sqlfluff.rules.sphinx.Rule_CP04) | Yes |

### Operators 

 Use `!=` instead of `<>`.
 
 `!=` reads like "not equal" which is closer to how we'd say it out loud.


### Aliases 
Always use the `as` keyword when aliasing columns, expressions, and tables.

```sql
-- Good
select count(*) as customers_count
from customers

-- Bad
select count(*) customers_count
from customers
```

| **SQLFluff Rule Code** | **SQLFluff Fix compatible** |
|:---|:---|
| [AL01](https://docs.sqlfluff.com/en/stable/rules.html#sqlfluff.rules.sphinx.Rule_AL01), [AL02](https://docs.sqlfluff.com/en/stable/rules.html#sqlfluff.rules.sphinx.Rule_AL02), [AL03](https://docs.sqlfluff.com/en/stable/rules.html#sqlfluff.rules.sphinx.Rule_AL03)| Yes |

### Grouping 

Always alias grouping aggregates and other column expressions.
```sql
-- Good
select max(id) as max_customer_id
from customers

-- Bad
select max(id)
from customers
```


### Where vs Having
Use `where` instead of `having` when either would suffice.
Queries filter on the `where` clause earlier in their processing, so `where` filters are more performant.


### Union vs Union All

Use `union all` instead of `union` unless duplicate rows really do need to be removed.
`union all` is more performant because it doesn't have to sort and de-duplicate the rows.


### Order by

Avoid using an `order by` clause unless it's necessary to produce the correct result.
There's no need to incur the performance hit.  If consumers of the query need the results ordered they can normally do that themselves.

### Date functions
For functions that take date part parameters, specify the date part as a string rather than a keyword.
  - While some advanced SQL editors can helpfully auto-complete and validate date part keywords, if they get it wrong they'll show superfluous errors.
  - Less advanced SQL editors won't syntax highlight date part keywords, so using strings helps them stand out.
  - Using a string makes it unambiguous that it's not a column reference.

```sql
-- Good
date_trunc('month', created_at)

-- Bad
date_trunc(month, created_at)
```

### Code comments

Use -- for single line comments (single comment) and /* */ for multiple line comments (block comment).
By default, VS Code includes keyboard shortcuts to toggle single and block comments. [(Windows source)](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf) [(Mac source)](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
- Single Comment:
  - Windows `Ctrl+/`
  - Mac `⌘/ `
- Block Comment:
  - Windows `Shift+Alt+A`
  - Mac `⇧⌥A`

When expanding a comment into multiple lines:
  - Keep the opening `/*` on the same line as the first comment text and the closing `*/` on the same line as the last comment text.
  - Indent subsequent lines by 4 spaces, and add an extra space before the first comment text to align it with the text on subsequent lines.

```sql
Single
-- Good

/* Bad */

Block
/*  Good:  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Dolor sed viverra ipsum nunc aliquet bibendum enim. */

/* Bad:  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Dolor sed viverra ipsum nunc aliquet bibendum enim. */

-- Bad:  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
-- sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
-- Dolor sed viverra ipsum nunc aliquet bibendum enim.
```


### String quotes

Use single quotes for strings.
Some SQL dialects like BigQuery support using double quotes or even triple quotes for strings, but for most dialects:
  - Double quoted strings represent identifiers.
  - Triple quoted strings will be interpreted like the value itself contains leading and trailing single quotes.

```sql
-- Good
select *
from customers
where email like '%@domain.com'

-- Bad
select *
from customers
where email like "%@domain.com"
-- Will probably result in an error like `column "%@domain.com" does not exist`.

-- Bad
select *
from customers
where email like '''%@domain.com'''
-- Will probably be interpreted like '\'%domain.com\''.
```
| **SQLFluff Rule Code** | **SQLFluff Fix compatible** |
|:---|:---|
| [CV10](https://docs.sqlfluff.com/en/stable/rules.html#rule-CV10) | Yes |

## Joins

### Using vs On

Don't use `using` in joins.
  - Having all joins use `on` is more consistent.
  - If additional join conditions need to be added later, `on` is easier to adapt.
  - `using` can produce inconsistent results with outer joins in some databases.

| **SQLFluff Rule Code** | **SQLFluff Fix compatible** |
|:---|:---|
| [ST07](https://docs.sqlfluff.com/en/stable/rules.html#rule-ST07) | Yes |


Be explicit with all join types for example use `inner join` instead of just `join`.
It's better to be explicit so that the join type is crystal clear.

```sql
-- Good
select *
from customers
inner join orders on customers.id = orders.customer_id

-- Bad
select *
from customers
join orders on customers.id = orders.customer_id
```

| **SQLFluff Rule Code** | **SQLFluff Fix compatible** |
|:---|:---|
| [AM05](https://docs.sqlfluff.com/en/stable/rules.html#rule-AM05) | Yes |

In join conditions, put the table that was referenced first immediately after `on`.
This makes it easier to determine if the join is going to cause the results to fan out.

```sql
-- Good
select *
from customers
left join orders on customers.id = orders.customer_id
-- primary key = foreign key --> one-to-many --> fan out

-- Good
select *
from orders
left join customers on orders.customer_id = customers.id
-- foreign key = primary key --> many-to-one --> no fan out

-- Bad
select *
from customers
left join orders on orders.customer_id = customers.id
```

### Multiple tables

When joining multiple tables, always prefix the column names with the table name/alias.
You should be able to tell at a glance where a column is coming from.

```sql
-- Good
select
    customers.email,
    orders.invoice_number,
    orders.total_amount
from customers
inner join orders on customers.id = orders.customer_id

-- Bad
select
    email,
    invoice_number,
    total_amount
from customers
inner join orders on customers.id = orders.customer_id
```

| **SQLFluff Rule Code** | **SQLFluff Fix compatible** |
|:---|:---|
| [RF02](https://docs.sqlfluff.com/en/stable/rules.html#rule-RF02) | No |


### Filter using where

When  joining, put filter conditions in the `where` clause instead of the `join` clause.
Only join conditions should be put in a `join` clause. All filter conditions should be put together in the `where` clause.

```sql
-- Good
select
    ...
from orders
inner join customers on orders.customer_id = customers.id
where
    orders.total_amount >= 100
    and customers.email like '%@domain.com'

-- Bad
select
    ...
from orders
inner join customers on
    orders.customer_id = customers.id
    and customers.email like '%@domain.com'
where orders.total_amount >= 100
```


## CTEs

  - Where performance permits, CTEs should perform a single, logical unit of work.
  - CTE names should be as verbose as needed to convey what they do.
  - CTE names should not be prefixed or suffixed with `cte`.
  - CTEs with confusing or notable logic should be commented.


### Formatting:
  - Start each CTE on its own line, indented one level more than `with` (including the first one, and even if there is only one).
  - Use a single blank line around CTEs to add visual separation.
  - Put any comments about the CTE within the CTE's parentheses, at the same indentation level as the `select`.

```sql
-- Good
with
    paying_customers as (
        select ...
        from customers
    )

select ...
from paying_customers

-- Bad
with paying_customers as (

    select ...
    from customers

)
select ...
from paying_customers


-- Good
with
    paying_customers as (
        select ...
        from customers
    ),

    paying_customers_per_month as (
        -- CTE comments...
        select ...
        from paying_customers
    )

select ...
from paying_customers_per_month

-- Bad
with paying_customers as (

        select ...
        from customers

    ),

    -- CTE comments...
    paying_customers_per_month as (

        select ...
        from paying_customers

      )

select ...
from paying_customers_per_month
```
| **SQLFluff Rule Code** | **SQLFluff Fix compatible** |
|:---|:---|
| [LT07](https://docs.sqlfluff.com/en/stable/rules.html#rule-LT07), [LT08](https://docs.sqlfluff.com/en/stable/rules.html#rule-LT08) | Yes |


### Subqueries 
Use CTEs rather than subqueries where possible.
CTEs will make your queries more straightforward to read/reason about, can be referenced multiple times, and are easier to adapt/refactor later. If you think a subquery is unavoidable, it is a good time to ask for a second pair of eyes.

```sql
-- Good
with
    paying_customers as (
        select *
        from customers
        where plan_name != 'free'
    )

select ...
from paying_customers

-- Bad
select ...
from (
    select *
    from customers
    where plan_name != 'free'
) as paying_customers
```


## Naming

The general guide for naming is to be descriptive over minimal.


### Boolean
  - Boolean columns should be prefixed with a present or past tense third-person singular verb, such as:
    - `is_` or `was_`.
    - `has_` or `had_`.
    - `does_` or `did_`

  > It is also preferred that boolean column values take `true/false` over `yes/no` values.


### Table aliases
Avoid using unnecessary table aliases, especially initialisms.
Suggested guidelines:
  - If the table name consists of 3 words or less don't alias it.
  - Use a subset of the words as the alias if it makes sense (e.g. if `partner_shipments_order_line_items` is the only line items table being referenced it could be reasonable to alias it as just `line_items`).

```sql
-- Good
select
    customers.email,
    orders.invoice_number
from customers
inner join orders on customers.id = orders.customer_id

-- Bad
select
    c.email,
    o.invoice_number
from customers as c
inner join orders as o on c.id = o.customer_id
```

| **SQLFluff Rule Code** | **SQLFluff Fix compatible** |
|:---|:---|
| [AL07](https://docs.sqlfluff.com/en/stable/rules.html#rule-AL07) | Yes |



## Formatting
The general guide for formatting is:
  - If there's only one thing, put it on the same line as the opening keyword.
  - If there are multiple things, put each one on its own line (including the first one), indented one level more than the opening keyword.


### Alignment
Left align everything.
This is easier to keep consistent, and is also easier to write.

```sql
-- Good
select email
from customers
where email like '%@domain.com'

-- Bad
select email
  from customers
 where email like '%@domain.com'
```

### Indentation
Indents should generally be 4 spaces.
```sql
-- Good
select
    id,
    email
from customers
where
    email like '%@domain.com'
    and plan_name != 'free'

-- Bad
select
  id,
  email
from customers
where email like '%@domain.com'
  and plan_name != 'free'
```

| **SQLFluff Rule Code** | **SQLFluff Fix compatible** |
|:---|:---|
| [LT02](https://docs.sqlfluff.com/en/stable/rules.html#rule-LT02) | Yes |

### Do's and Don't 

**Don't** end a line with an operator like `and`, `or`, `+`, `||`, etc.
If code containing such operators needs to be split across multiple lines, put the operators at the beginning of the subsequent lines.
  - You should be able to scan the left side of the query text to see the logic being used without having to read to the end of every line.
  - The operator is only there for/because of what follows it.  If nothing followed the operator it wouldn't be needed, so putting the operator on the same line as what follows it makes it clearer why it's there.

```sql
-- Good
select *
from customers
where
    email like '%@domain.com'
    and plan_name != 'free'

-- Bad
select *
from customers
where
    email like '%@domain.com' and
    plan_name != 'free'
```

| **SQLFluff Rule Code** | **SQLFluff Fix compatible** |
|:---|:---|
| [LT03](https://docs.sqlfluff.com/en/stable/rules.html#rule-LT03) | Yes |


**Do** use trailing commas

```sql
-- Good
with
    customers as (
        ...
    ),
    paying_customers as (
        ...
    )
select
    id,
    email,
    date_trunc('month', created_at) as signup_month
from paying_customers
where email in (
        'user-1@example.com',
        'user-2@example.com',
        'user-3@example.com'
    )

-- Bad
with
    customers as (
        ...
    )
    , paying_customers as (
        ...
    )
select
    id
    , email
    , date_trunc('month', created_at) as signup_month
from paying_customers
where email in (
        'user-1@example.com'
        , 'user-2@example.com'
        , 'user-3@example.com'
    )
```
| **SQLFluff Rule Code** | **SQLFluff Fix compatible** |
|:---|:---|
| [LT04](https://docs.sqlfluff.com/en/stable/rules.html#rule-LT04) | Yes |



**Do** follow these standards when using the `select` clause:
  - If there is only one column expression, put it on the same line as `select`.
  - If there are multiple column expressions, put each one on its own line (including the first one), indented one level more than `select`.
  - If there is a `distinct` qualifier, put it on the same line as `select`.

```sql
-- Good
select id


-- Good
select
    id,
    email

-- Bad
select id, email

-- Bad
select id,
    email


-- Good
select distinct country

-- Good
select distinct
    state,
    country

-- Bad
select distinct state, country
```
| **SQLFluff Rule Code** | **SQLFluff Fix compatible** |
|:---|:---|
| [LT09](https://docs.sqlfluff.com/en/stable/rules.html#rule-LT09), [LT10](https://docs.sqlfluff.com/en/stable/rules.html#rule-LT109)  | Yes |



**Do** follow these standards when using the `from` clause:
  - Put the initial table being selected from on the same line as `from`.
  - If there are other tables being joined:
    - Put each `join` on its own line, at the same indentation level as `from`.
    - If there is only one join condition, put it on the same line as the `join`.
    - If there are multiple join conditions, put each condition on its own line (including the first one), indented one level more than the `join`.

```sql
-- Good
from customers


-- Good
from customers
left join orders on customers.id = orders.customer_id

-- Bad
from customers
    left join orders on customers.id = orders.customer_id

-- Bad
from customers
left join orders
    on customers.id = orders.customer_id


-- Good
from customers
left join orders on
    customers.id = orders.customer_id
    and customers.region_id = orders.region_id

-- Bad
from customers
left join orders on customers.id = orders.customer_id
    and customers.region_id = orders.region_id

-- Bad
from customers
left join orders
    on customers.id = orders.customer_id
    and customers.region_id = orders.region_id
```


**Do** follow these standards when using the `where` clause:
  - If there is only one condition, put it on the same line as `where`.
  - If there are multiple conditions, put each one on its own line (including the first one), indented one level more than `where`.

```sql
-- Good
where email like '%@domain.com'


-- Good
where
    email like '%@domain.com'
    and plan_name != 'free'

-- Bad
where email like '%@domain.com' and plan_name != 'free'

-- Bad
where email like '%@domain.com'
    and plan_name != 'free'
```


**Do** follow these standards when using the `group by` and `order by` clauses:
  - If grouping/ordering by column numbers, put all numbers on the same line as `group by`/`order by`.
  - If grouping/ordering by column names/aliases:
    - If there is only one column, put it on the same line as `group by`/`order by`.
    - If there are multiple columns, put each on its own line (including the first one), indented one level more than `group by`/`order by`.
> Grouping by column numbers is preferred over grouping by column names/aliases.

```sql
-- Good
group by 1, 2, 3

-- Bad
group by
    1,
    2,
    3


-- Good
order by plan_name


-- Good
order by
    plan_name,
    signup_month

-- Bad
order by plan_name, signup_month

-- Bad
order by plan_name,
    signup_month
```

| **SQLFluff Rule Code** | **SQLFluff Fix compatible** |
|:---|:---|
| [AM06](https://docs.sqlfluff.com/en/stable/rules.html#rule-AM06) | Yes |


**Don't** put extra spaces inside of parentheses.

```sql
-- Good
select *
from customers
where plan_name in ('monthly', 'yearly')

-- Bad
select *
from customers
where plan_name in ( 'monthly', 'yearly' )


```
| **SQLFluff Rule Code** | **SQLFluff Fix compatible** |
|:---|:---|
| [LT01](https://docs.sqlfluff.com/en/stable/rules.html#rule-LT01) | Yes |


### Case statements:
  - You can put a `case` statement all on one line if it only has a single `when` clause and doesn't cause the line's length to be too long.
  - For multi-line `case` statements:
    - `case` and `end as` should align
    - `when(s)` and `else` should align and be indented one more level than `case` (when there are multiple `whens` for a `case`)
    - `and(s)` and `then(s)` should align and be indented one more level than `when` (when there are multiple conditions for one `when`)

```sql
-- Good
select
    case when customers.status_code = 1 then 'Active' else 'Inactive' end as customer_status

-- Bad
select
    case when customers.status_code = 1 and customers.deleted_at is null then 'Active' else 'Inactive' end as customer_status


-- Good
select
    ... ,
    case
        when customers.status_code = 1
            and customers.deleted_at is null
            and ...
            then 'Active'
        when customer.status_code = 2 
            and customers.deleted_at is null
            and ...
            then 'Break'
        else 'Inactive'
      end as customer_status

-- Bad
select
    ... ,
    case
        when customers.status_code = 1 and customers.deleted_at is null
        then 'Active'
        when customers.status_code = 2 and customers.deleted_at is null
        then 'Break'
        else 'Inactive'
    end as customer_status
```


### Window functions:
  - You can put a window function all on one line if it doesn't cause the line's length to be too long.
  - If breaking a window function into multiple lines:
    - Put each sub-clause within `over ()` on its own line, indented one level more than the window function:
      - `partition by`
      - `order by`
      - `rows between` / `range between`
    - Put the closing `over ()` parenthesis on its own line at the same indentation level as the window function.

```sql
-- Good
select
    customer_id,
    invoice_number,
    row_number() over (partition by customer_id order by created_at) as order_rank
from orders

-- Good
select
    customer_id,
    invoice_number,
    row_number() over (
        partition by customer_id
        order by created_at
      ) as order_rank
from orders

-- Bad
select
    customer_id,
    invoice_number,
    row_number() over (partition by customer_id
                         order by created_at) as order_rank
from orders
```


#### `in` lists:
  - Break long lists of `in` values into multiple indented lines with one value per line.

```sql
-- Good
where email in (
        'user-1@example.com',
        'user-2@example.com',
        'user-3@example.com'
    )

-- Bad
where email in ('user-1@example.com', 'user-2@example.com', 'user-3@example.com')
```



## Credits

This style guide was inspired in part by:
  - [Fishtown Analytics' dbt coding conventions](https://github.com/fishtown-analytics/corp/blob/b5c6f55b9e7594e1a1e562edf2378b6dd78a1119/dbt_coding_conventions.md)
  - [Matt Mazur's SQL style guide](https://github.com/mattm/sql-style-guide/blob/3eaef3519ca5cc7f21feac6581b257638f9b1564/README.md)
  - [GitLab's SQL style guide](https://about.gitlab.com/handbook/business-technology/data-team/platform/sql-style-guide/)
