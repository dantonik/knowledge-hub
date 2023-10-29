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
	n_emps = 0
	raise_amount = 1.04

	def __init__(self, first, last, pay): # constructor
		self.first = first
		self.last = last
		self.pay = pay
		self.email = first + '.' + last + '@company.com'

		Employee.n_emps += 1

	def fullname(self):
		return '{} {}'.format(self.first, self.last)

	def apply_raise(self):
		self.pay = int(self.pay * Employee.raise_amount)

emp = Employee('Test', 'User', 50000)
```
Both lines do the same thing.
```
emp.fullname()
Employee.fullname(emp)
```

## Class Variables
Class Variables are variables that are shared among all instances of a class.  

## Methods
Regular methods take the instance as the first argument.  
Class methods  
Static methods  

Static method
```
class Employee:
	[...]
	@classmethod
	def set_raise_amount(cls, amount)
		cls.raise_amount = amount

	@classmethod
	def from_string(cls, emp_str)
		first, last, pay = emp_str.split('-')
		return cls(first, last, pay)

Employee.set_raise_amount(1.05)
emp = Employee.from_string(str)
```
Static method
```
class Employee:
	[...]
	@staticmethod
	def is_workday(day):
		if day.weekday() == 5 or day.weekday() == 6:
			return False
		return True
```

## Inheritance

```
class Developer(Employee):
	def __init__(self, first, last, pay, prog_lang):
		super().__init__(irst, last, pay)
		self.prog_lang = prog_lang

dev = Developer('Test', 'User', 50000, 'Python')
```

## isinstance
```
print(isinstance(dev, Employee))
print(issubclass(Developer, Employee))
```

## Special methods
Operator overloading.  
`def __repr__(self):`  
`def __str__(self):`  
```
def __repr__(self):
	return "Employee('{}', '{}', '{})".format(self.first, self.last, self.pay)

det __str__(self):
	return '{} - {}'.format(self.fullname(), self.email)

def __add__(self, other):
	return self.pay + other.pay
```

[Docs Emulating numeric types](https://docs.python.org/3/reference/datamodel.html#emulating-numeric-types)  

```
print(int.__add__(1,2))
print('test'.__len__()) # used when len('test') is called
```
`3`  
`4`  

## Property decorators
