# Python

[Stanford Python Guide](https://cs.stanford.edu/people/nick/py/)

### Where can you run Python code?
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

#### Python Standard Library

#### Packages
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

#### Requirements file
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

#### Python Virtual Environment
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

### Expression Statements
Expression - Code that evaluates to a value.  
```
2+2
'a'
```

### Assignment Statements
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

### Import Statements
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
```