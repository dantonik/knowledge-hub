# Overview

`Playlist`[Intro to Polars](https://www.youtube.com/playlist?list=PL6FP7t_F5uo6M-YXwZ5cadqr3EMwPoteP)  

## Cython
[Intro Cython](https://pythonprogramming.net/introduction-and-basics-cython-tutorial/)  
`pip install cython`  
```
from distutils.core import setup
from Cython.Build import cythonize

setup(ext_modules = cythonize('example.pyx'))
```
`python3 setup.py build_ext --inplace`  