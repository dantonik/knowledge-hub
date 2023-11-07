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

### Nested
```
for sub_list in list_of_lists:
    for item in sub_list:
        flat.append(item)

[item for sub_list in list_of_lists for item in sublist]
```

## Generator Expressions
```
squared = (x**2 for x in range(num))

evens = (x for x in range(0, 100, 2))
div_three = (y for y in evens if y % 3 == 0)
```

## Generator Functions
```
def counter():
    while True:
        yield x
        x += 1

def fib():
    for cur in (0, 1):
        last = cur
        yield cur
    while True:
        yield cur
        last, cur = cur, last + cur
```
