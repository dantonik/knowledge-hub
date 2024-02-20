# JavaScript

JavaScript types are dynamic.
A variable without a value has the value undefined.
```
let car; // value is undefined, type is undefined
```

`getElementById()`

```
document.getElementById("demo").innerHTML = "Hello JavaScript";

document.getElementById("demo").style.fontSize = "35px";

document.getElementById("demo").style.display = "none";
document.getElementById("demo").style.display = "block";
```

multiple statements on one line
```
a = 5; b = 6; c = a + b;
```

you can declare many variables in one statement
```
let person = "John Doe", carName = "Volvo", price = 200;
```

## Variables

The keyword `const` defines a constant reference to  a value.
Use const when you declare:
- array
- object
- function
- RegExp

### Strings
Template Strings were introduced with ES6 (JavaScript 2016).
```
let text = `He's often called "Johnny"`;
```
Concatenation
```javascript
let fullName = "John" + " " + "Doe";
let fullName = "John".concat(" ", "Doe");
```
Cases
```javascript
let text = "Hello World!";
let text = "Hello World!".toUpperCase(); // HELLO WORLD!
let text = "Hello World!".toLowerCase(); // hello world!
```
Slice
```javascript
let text = "Hello World!";
let text = "Hello World!".slice(0, 5); // Hello
```
Split & join
```javascript
let text = "a,b,c,d";
let text = "a,b,c,d".split(","); // ["a", "b", "c", "d"]
let text = ["a", "b", "c", "d"].join(","); // a,b,c,d
```
Includes
```javascript
let text = "Hello World!";
let text = "Hello World!".includes("World"); // true
```


## Operators
- arithmetic operators
- assignment operators
- comparison operators
- string operators
- logical operators
- bitwise operators
- ternary operators
- type operators

### Equality operators
- `===` strict equality (type and value)
- `==` loose equality (value)

## Script
Placing scripts at the bottom of the <body> element improves the display speed, because script interpretation slows down the display.

Scripts can be placed in external files
```
 <script src="myScript.js"></script>
```

## Functions
Function declaration
```
function makeBla() {
	return "Bla";
}
```

Function expression
```
const makeBla = function() {
	return "Bla";
}
```

### Immediately Invocable Function Expressions
```
(function () {
	...
})();
```

### Arrow functions

### Closures

### Higher-order functions

## Events
An HTML event can be something the browser does, or something a user does.
```
<element event='some JavaScript'>

<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
```

### Common Event
- onchange
- onclick
- onmouseover
- onmouseout
- onkeydown
- onload
