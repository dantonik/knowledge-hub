# Overview

## List comprehension
```
new_list = [x for x in numbers if x % 2 == 0]
new_list = [s.upper() for s in str_list]

new_list = [timesFive(i) for i in nums]

results = [i['name'] for i in dicts] # list of dictionaries
```
With If Else
```
new_list = [i*5 if i==3 else i for i in list1]
new_list = [i for i in list1 if i > 0]
```
If statements to the right of the loop are like filters.  
You can't have an else statement to the right ot the for loop.  
```
list(map(lambda i: i * 5 if i == 3 else i, list1))

list(map(lambda i: i*5 if i==3 else i, filter(lambda i: i > 1, list1)))
```

```
[(i,f) for i in nums if i > 1 for f in fruits]
```