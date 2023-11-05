# Overview

Sequence Types
- Lists
- Tuples
- Strings
- Binary strings
- Range Objects

Operations
- Membership
- Indexing and slicing
- Interrogation
- Math

## Membership
```
3 in [1, 2, 3]
12 not in [4, 5, 6]
```

## Interrogation
```
len(...)
min(...)
max(...)
name.count('e')
name.index('i')
```

## Math
```
"prefix" + "-" + "postfix"
[1, 2] + [3, 4]
[0, 2] * 4
```

## Strings
`string.index('e')` will throw an error if it can't find the string.  
`string.find('e')` is an alternative that returns `-1`.  
`.startswith('e')`  
`.endswith('e')`  

## Format strings
Introduced in Python 3.6  
Prefixed by either a 'F' or 'f'  
Values are inserted at runtime using replacement fields.  
```
f"Example {1}"

num = 13
padding = 5
f"places:{num:{padding}d}"

num = 1234567890
f"Your balance is {balance:,}"
```
