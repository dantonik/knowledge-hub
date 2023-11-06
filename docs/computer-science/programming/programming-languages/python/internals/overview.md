# Overview

[the missing Python AST docs](https://greentreesnakes.readthedocs.io/)  
[AST observe/rewrite](https://astor.readthedocs.io/)  
[A Python Interpreter Written in Python](https://aosabook.org/en/500L/a-python-interpreter-written-in-python.html)  
[Inside the Python Virtual Machine](https://leanpub.com/insidethepythonvirtualmachine/read)  

[How variables work in Python](https://www.youtube.com/watch?v=Bz3ir-vKqkk)  

CPython uses a stack-oriented virtual machine to execute bytecode.  

## Integers
`0b110` is 6 in binary.  
`0o110` is 72 in octal.  
`0x110` is 272 in hex.  

There is no integer implementation in Python, there is only the PyLong_Type.  
Integers are not iterable.  

## Inspect
```
import ast, inspect, pprint
pprint.pprint(
	ast.dump(
		ast.parse(
			inspect.getsource(function)
		)
	)
)
```

## Disassembler
```
import dis
dis.dis(function)
```

## Preallocation
Small integers are preallocated in an array so they can be shared.  
-NSMALLNEGINTS (inclusive)  
-NSMALLPOSINTS (not inclusive)  
In default Python that is from -5 to 256.  

## Optimization
Constant folding  

## Objects in Python
Everything in Python is an object.  
```
typedef struct _object {
    _PyObject_HEAD_EXTRA
    Py_ssize_t ob_refcnt;
    struct _typeobject *ob_type;
} PyObject;
```
Lists are `PyVarObject`s.  

## +=
```
x = [1, 2]
x = x + [3, 4] # this is evaluated right to left and returns a new object

x += [3, 4]
# internally calls
x = list.__iadd__(x, [3, 4])
```

## Size of an object
we can use the sys module to get the size of an object.  
```
import sys

r = range(3)
sys.getsizeof(r)
```

## Hash functions
All immutable data types in Python have hash functions.  
