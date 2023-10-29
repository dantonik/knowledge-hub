# Overview

## Stacks
LIFO - Last-In First-Out  
All push and pop operations are to/from the top of the Stack.  
Peek - get item on top of stack, without removing it.  

### Simple stack with a python list
```
stack = list()
stack.append(4)
stack.append(7)
stack.append(9)
```
`[4, 7, 9]`
```
stack.pop()
```
`[4, 7]`

### Using a wrapper class
```
class Stack():
	def __init__(self):
		self.stack = list()
	def push(self, item):
		self.stack.append(item)
	def pop(self):
		if len(self.stack) > 0:
			return self.stack.pop()
		else:
			return None
	def peek(self):
		if len(self.stack) > 0:
			return self.stack[len(self.stack)-1]
		else:
			return None
	def __str__(self):
		return str(self.stack)
```

## Queues

