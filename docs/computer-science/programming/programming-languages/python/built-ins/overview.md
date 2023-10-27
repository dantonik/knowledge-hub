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
```
a = [m for m in range(8)]
b = [i**2 for i in range(10) if i>4]
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
