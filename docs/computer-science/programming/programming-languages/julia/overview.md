# Overview

[A Gentle Introduction to Julia](https://www.youtube.com/watch?v=4igzy3bGVkQ)  

Julia is a dynamic programming language. It is JIT compiled and garbage-collected.  
It has a flexible parametric type system.  
```
my_answer = 42
typeof(my_answer)
```
int64  

```
println("Hello, World!")
```
#### Comments
```
# For a single line

#=
For multiple lines
=#
```
#### String concatenation
```
string("How many cats ", "are too many cats?")

s1 = "Hello, ";
s2 = "World!";
s3 = s1*s2;
```