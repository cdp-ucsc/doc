# SQL Style Guide

## General guidelines

#### Optimize primarily for readability, maintainability, and robustness rather than for fewer lines of code.
Newlines are cheap; people's time is expensive.

<br>

#### Avoid large select statements with multiple tables instead utilize CTEs.
If a `select` statement is so large it can't be easily comprehended, it would be better to refactor it into multiple smaller CTEs that are later joined back together.

<br>

#### Lines should ideally not be longer than 120 characters.
Very long lines are harder to read, especially in situations where space may be limited like on smaller screens or in side-by-side version control diffs.

<br>

#### Identifiers such as aliases and CTE names should be in lowercase `snake_case`.
It's more readable, easier to keep consistent, and avoids having to quote identifiers due to capitalization, spaces, or other special characters.

<br>

#### Never use reserved words as identifiers.
Otherwise the identifier will have to be quoted everywhere it's used.

<br>

#### Never use tab characters.
It's easier to keep things consistent in version control when only space characters are used. By default, VS Code inserts spaces and uses 4 space per `Tab` key. [(source)](https://code.visualstudio.com/docs/editor/codebasics#_indentation)

<br>

## Syntax

#### Keywords and function names should all be lowercase.
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

<br>

#### Use `!=` instead of `<>`.
`!=` reads like "not equal" which is closer to how we'd say it out loud.

<br>

#### Always use the `as` keyword when aliasing columns, expressions, and tables.
```sql
-- Good
select count(*) as customers_count
from customers

-- Bad
select count(*) customers_count
from customers
```

<br>

#### Always alias grouping aggregates and other column expressions.
```sql
-- Good
select max(id) as max_customer_id
from customers

-- Bad
select max(id)
from customers
```

<br>

#### Use `where` instead of `having` when either would suffice.
Queries filter on the `where` clause earlier in their processing, so `where` filters are more performant.

<br>

#### Use `union all` instead of `union` unless duplicate rows really do need to be removed.
`union all` is more performant because it doesn't have to sort and de-duplicate the rows.

<br>

#### Avoid using an `order by` clause unless it's necessary to produce the correct result.
There's no need to incur the performance hit.  If consumers of the query need the results ordered they can normally do that themselves.

<br>

#### For functions that take date part parameters, specify the date part as a string rather than a keyword.
  - While some advanced SQL editors can helpfully auto-complete and validate date part keywords, if they get it wrong they'll show superfluous errors.
  - Less advanced SQL editors won't syntax highlight date part keywords, so using strings helps them stand out.
  - Using a string makes it unambiguous that it's not a column reference.

```sql
-- Good
date_trunc('month', created_at)

-- Bad
date_trunc(month, created_at)
```

<br>

#### Use -- for single line comments (single comment) and /* */ for multiple line comments (block comment).
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

<br>

#### Use single quotes for strings.
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

<br>

### Joins

#### Don't use `using` in joins.
  - Having all joins use `on` is more consistent.
  - If additional join conditions need to be added later, `on` is easier to adapt.
  - `using` can produce inconsistent results with outer joins in some databases.

<br>

#### Be explicit with all join types for example use `inner join` instead of just `join`.
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

<br>

#### In join conditions, put the table that was referenced first immediately after `on`.
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

<br>

#### When joining multiple tables, always prefix the column names with the table name/alias.
You should be able to tell at a glance where a column is coming from.

```sql
-- Good
select
    customers.email
    , orders.invoice_number
    , orders.total_amount
from customers
inner join orders on customers.id = orders.customer_id

-- Bad
select
    email
    , invoice_number
    , total_amount
from customers
inner join orders on customers.id = orders.customer_id
```

<br>

#### When  joining, put filter conditions in the `where` clause instead of the `join` clause.
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
