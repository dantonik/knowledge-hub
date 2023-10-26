# Python

Python is an interpreted general-purpose high-level programming language with easy syntax and dynamic semantics.  
Python is a dynamically typed language.  
[Stanford Python Guide](https://cs.stanford.edu/people/nick/py/)
Exception Handling  
Debugging  
Classes and Objects  
Inheritance  
Iterators and Generators  
List/Dictionary comprehension  
Sets and command line  
Multiprocessing  
Multithreading  
Unit Testing  
Decorators  
Lambdas  
Regular Expressions  
Context Managers  

## Why Python
- easy to learn
- open source
- huge community
- cross platform
- huge set of libraries and tools

## Where can you run Python code?
- REPL (Read-Eval-Print Loop)
- file
```
python my_program.py
```
- from another program
```
#!/usr/bin/env python

import my_program

my_program hello()

print(my_program add_two(4))
```

When code is saved to file with the purpose of re use, it is called a module.  
When a module or a group of modules is bundled together specifically for distribution to an installation in multiple python environments it is referred to as a package.  

## Python Standard Library

## Packages
Package installation with pip.  
The Python Package Index (pypi)  

```
python3 -m pip install package-1 package-2 ...
```
```
pip install package-1 package-2 ...

pip uninstall package
```
You can install a specific version or display all available version numbers by leaving the version number blank  
```
pip install package==0.10.1

pip install package==
```

List the installed packages with their version number  
```
pip list
```

## Requirements file
With a requirements file you can make your python project portable.  

You can create one with your currently installed packages including their verion number  
```
pip freeze > requirements.txt
```
You can install or uninstall all the packages in the file at once
```
pip install -r requirements.txt

pip uninstall -r requirements.txt
```

## Python Virtual Environment
By default packages are installed across your user environment.  

Problems
- difficult to determine which packages are requirements for any individual project
- you may have projects that require different versions of a package

You can install all of your virtual environments in a central location (e.g. /home/envs) or in their associated project directories.  
```
python -m venv environment-name
```
To use the environment you have to activate it
```
source environment-name/bin/activate
```
If you check with `pip list`, you will see that it's a clean environment. Any packages you install from now on will be installed in this environment only.  

The environment automatically supplies the `deactivate` command.  

## Python Statements
A statement is a single logical line of code.  

Simple Statements
- Expression Statements
- Assert Statements
- Assignment Statements
- Pass Statements
- Del Statements
- Return Statements
- Yield Statements
- Raise Statements
- Break Statements
- Continue Statements
- Import Statements
- Future Statements
- Global Statements
- Nonlocal Statements

Compound Statements
- If Statements
- While Statements
- For Statements
- Try Statements
- With Statements
- Match Statements
- Function Definitions
- Class Definitions
- Coroutines
### Simple Statements
#### Expression Statements
Expression - Code that evaluates to a value.  
```
2+2
'a'
```

#### Assignment Statements
- assign a value to a variable
- use a variable in an expression
- assign multiple values to multiple variables
- update a variable using an expression
```
a = 'hello'
b = 4 / 2
c = d = True
e, f = 1, 2

g, *h, i = 1, 2, 3, 4, 4, 5
```
Augmented assignment operator
```
a += 1
a /= 2
```

#### Import Statements
To use a package in a Python program you must bring it into the program's running memory.  
You can import modules from
- the Python Standard Library
- installed through pip
- local modules

```
import os
print(os)
```
Access functions defined in this module
```
os.getcwd()
```
Access submodules
```
os.path
os.path.isdir('.')
```
only import submodule
```
from os import path
path.isdir('.')
```
```
from os.path import isdir
isdir('.')
```
You can also import all possible sub-modules and functions at once (not recommended)
```
from os import *
```
You can rename imports
```
import pandas as pd
pd.DataFrame
```

#### Additional simple statements
- pass
- del
- return
- yield
- break
- continue
- future
- global
- nonlocal

#### Exceptions

#### Raise statements
```
raise NotImplementedError("My message")
```

#### Assert statements
```
assert a == 2, "a isn't 2"
```
Assert statements slow down a running program, they are usually disabled in production code. This can be done with the `-O` flag.  

### Compound Statements
Compound statements are composed of a controlling statement and a group of controlled statements.  

Controlling statement `<keyword> <expression>:`  

The controlled statements are usually grouped as a block. In Python, a block is a group of statements sharing an indentation level.  

Another way to group them is to put them on the same line seperated by semicolons `<keyword> <expression>:<statement>;<statement>`  

Keywords
- if
- while
- for
- def

Evaluation to True or False
- Comparison operations
- Boolean operations
- Object evaluations

Compare by identity
- is
- is not (None)

Membership Operations
- in
- not in

Objects that don't evaluate to `True`
- 0
- 0.0
- False
- None
- anything with length zero (e.g. "")

#### If Statements
```
if x == 3:
	print('3')
elif x == 2:
	print('2')
else:
	print('neither')
```

#### Match Statements
```
match x:
	case 3:
		print('3')
	case 2:
		print('2')
	case _:
		print('neither')
```

#### While Loops
```
while x < 5:
	x += 1
	if x == 3:
		break
```
If your condition is always true you will need a break statement.
```
while True:
	if x >= 3:
		break
	x += 1
```

#### Functions
A function is a named wrapper that lets you execute a block of code in multiple places.
```
def my_func():
	print('hello')

my_func()
```
You can add a pass statement as a placeholder.
```
def do_nothing():
	pass
```
All functions return `None` by default but we can use a return statement to define a value.
```
def return_two():
	return 2
```
You can pass parameters by order and by name. The default is by order.
```
my_func(first=1, second=2)
```
You can also set default values
```
def greeting(name='you'):
	print('Hey, ' + name)
```
