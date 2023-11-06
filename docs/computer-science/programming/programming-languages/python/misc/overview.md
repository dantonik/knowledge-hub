# Overview

## __main__
`__name__` evaluates to `__main__` only if it's run as a script, not if it is imported.
```
def main():
	print("Hello, World!")

if __name__ == '__main__':
	main()
```

## Walrus Operator
```
def analyze_text(text: str) -> dict:
    details: dict = {'words': (words := text.split()),
                     'amount': len(words)}
```
