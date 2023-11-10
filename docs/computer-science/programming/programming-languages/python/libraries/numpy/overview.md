# Overview

[NumPy C-API](https://www.youtube.com/watch?v=45TOazYbedI)  

Numeric Python  
A collection of pre-written functions, classes, and methods.  

Main feature: Arrays  
It's the basis for SciPy and Pandas.  

## N-D array class
N-Dimensional array.  
- 0th -> point -> scalar
- 1st -> line -> vector
- 2nd -> plane -> matrix

`[1, 2, 3, 4]` like Python's list but operations work elementwise.  

```
import numpy as np

array_a = np.array([1, 2, 3])
print(array_a.shape)
```

## Indexing
There are two ways
```
array_a[1][0]
array_a[1,0]

array_a[:,0]
```

## Assigning Values
```
array_a[0,2] = 9

array_a[0] = 9 # sets the whole row to 9
```

## Elementwise Properties
