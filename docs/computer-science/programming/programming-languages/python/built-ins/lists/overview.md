# Overview

## List comprehensions

```
[ x * x             # (3) expression -- SELECT
for x in numbers    # (1) iteration  -- FROM
if x % 2 == 0 ]     # (2) conditon   -- WHERE
```

```
sum([int(x) for x in mylist if x.isdigit()])

'*'.join([str(x) for x in mylist])
```
