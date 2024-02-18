# JavaScript


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
