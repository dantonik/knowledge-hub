# Overview

[OOP in Python](https://www.youtube.com/watch?v=-pEs-Bss8Wc)  

Creating and instantiating classes.  
Inheritance.  
Class and instance variables.  
Static methods and class methods.  

Data and functions associated with a specifi class are called attributes and methods.  
A class is a blueprint for creating instances.  
```
class Employee:
	def __init__(self, first, last, pay): # constructor
		self.first = first
		self.last = last
		self.pay = pay
		self.email = first + '.' + last + '@company.com'

	def fullname(self):
		return '{} {}'.format(self.first, self.last)

emp = Employee('Test', 'User', 50000)
```