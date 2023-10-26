# Overview

[the missing Python AST docs](https://greentreesnakes.readthedocs.io/)  
[AST observe/rewrite](https://astor.readthedocs.io/)  

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