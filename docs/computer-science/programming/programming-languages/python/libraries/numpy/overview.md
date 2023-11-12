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
```
array_a + 2
array_a + array_b
```
You can perform arithmetic operations on arrays of different shapes.  
[Broadcasting](https://numpy.org/doc/stable/user/basics.broadcasting.html)  

## Data Types
All the numerical datatypes supported by C.  
```
array_a = np.array([1, 2, 3], dtype=str)
```

## Universal Functions
Work with arrays on an element-by-element bases.  

- mathematical operations
- trigonometric functions
- comparison functions

## Broadcasting
1. The arrays have the same shape
2. The length of each dimension is either common or 1
3. The arrays that have too few dimensions can have their shapes altered with a dimension 1, to satisfy the second rule

## Type Casting
```
np.add(array_a, array_b, dtype=float64)
```
That does not only change the result, but rather changes the inputs themselves.  

## Running over an Axis
```
np.mean(matrix_c, axis = 0)
```
axis=0: Finding the mean of each column of the array.  
axis=1: Finding the mean of each row of the array.  

## Slicing
Slicing can be done for each dimension of the array.  
```
matrix_a[:,:]
```