# Overview

## Lists
Lists grow and shrink as needed. They are of type sequence and sortable.  

Constructors for lists.  
```
x = list()
y = ['a', 25]
z = list((10,20))
```

### List comprehension
new_list = [transform sequence [filter]]
```
a = [m for m in range(8)]
b = [i**2 for i in range(10) if i>4]

odds = [x for x in range(10) if x%2 == 1]
```

### Delete
You can delete one item or the entire list.
```
del(x[1])
del(x)
```

### Append
```
x.append(7)
```

### Extend
Extend combines two lists into one.
```
x = [1, 2, 3]
y = [4, 5, 6]
x.extend(y)
```

### Insert
Insert an item at a given index.
```
x.insert(1, ['a', 'm'])
```

### Pop
Pops last item off the list and returns the item.
```
x.pop()
```

### Remove
Removes the first instance of an item.
```
x.remove(3)
```

### Reverse
Reverse the order of the list in place.
```
x.reverse()
```

### Sort
Sort the list in place.
```
x.sort()
x.sort(reverse=True)
```

## Tuples
Tuples are immutable. They are useful for fixed data and faster than lists. They are of type sequence.  

Constructors for tuples.
```
x = ()
x = (1,)
x = 2,
x = tuple([1, 2, 3])
```

You can concatenate two tuples.
```
y += (4,)
```

## Sets
Stores non-duplicate items.  
Very fast access vs Lists.  
Math Set ops (union, intersect).  
Sets are unordered.  
The items get hashed internally.  

Constructors for sets
```
x = {1, 2, 3}
x = set()
x = set([1 ,2 ,3])
```
### Operations
```
x.add(4)
x.remove(3)
x.pop() # pops random item from the set
x.clear()
```

### Mathematical set operations
```
s1 & s2 # intersection (AND)
s1 | s2 # union (OR)
s1 ^ s2 # symmetric difference (XOR)
s1 - s2
s1 <= s2
s1 >= s2
```

## Dictionaries
Key/Value pairs.  
Associative array.  
Dicts are unordered.  

Constructors for dicts
```
x = {'pork':25.3, 'duck':33}
x = dict([('fig', 12), ('apple', 11)]) # List of tuples
x = dict(fig=12, apple=11) # no quotation marks
```

### Operations
```
x['orange'] = 38 # add or update
del(x['orange'])
x.clear() # delete all items
del(x) # delete dict
```

### Accessing keys and values
```
x.keys()
x.values()
x.items() # key-value pairs

'orange' in x # only checks in the keys
'orange' in x.values()

for key in x:
	print(key, x[key])

for k, v in x.items():
	print(k, v)
```
