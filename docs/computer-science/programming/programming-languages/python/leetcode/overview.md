# Overview

[Python Basics Exercises](https://www.youtube.com/watch?v=YzbjroOlJUQ)  

## Fizzbuzz
One-liner.  
```
class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        return ("FizzBuzz" if not(i%3) and not(i%5) else "Fizz" if not(i%3) else "Buzz" if not(i%5) else str(i) for i in range(1, n + 1))

        
```