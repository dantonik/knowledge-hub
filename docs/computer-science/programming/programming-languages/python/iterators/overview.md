# Overview

Iterators are used to loop through the items of a container.  
```
for element in [1, 2, 3]
```

Python uses the `__iter__()` method to return an iterator object of the class.  
`__next__()` method to get the next item.  
The loop stops when the StopIteration Exception is raised.  
