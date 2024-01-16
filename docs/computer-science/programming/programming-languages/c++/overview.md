# C++

[The Design of C++ by Bjarne Stroustrup](https://www.youtube.com/watch?v=69edOm889V4)
[The Essence of C++ by Stroustrup](https://www.youtube.com/watch?v=86xWVb4XIyE)

[Branchless Programming in C++](https://www.youtube.com/watch?v=g-WPhYREFjk)

[General C++](https://www.youtube.com/playlist?list=PLYmIsLVSssdLsw9ic8TV8wcEky5TGc4Ro)  

## Errors and Warnings
- Compile Time Errors
- Runtime Errors
- Warnings

## Input and Output
```
#import <iostream>

std::string name;

std::cout << "Please type in your name: " << std::endl;
std::cin >> name;
```

### Reading data with spaces
```
std::string name;

std::getline(std::cin, name);
```

## Execution Model

## Memory Model

## Initialization List

## Pointers to members
```
Sample instance;
Sample* instanced = &instance;

Int Sample::*p = NULL;
P = &Sample::foo;

instance.*p = 21;
instancep->*p = 42;

void (Sample::*f)(void) const;

f = &Sample::bar;

(Instance.*f)();
(instancep->*f)();
```

## Operator overloading

```
Vector2 operator*(const Vector2& other) const
{
	return Vector2(x * other.x, y * other.y);
}
```
```
bool operator==(const Vector2& other) const
{
	return x==other.x && y == other.y;
}
```

outside the class  
```
std::ostream& operator<<(std::ostream& stream, const Vector2& other)
{
	stream << other.x << ", " << other.y;
	return stream;
}
```

## Constructor Inheritance
```
Drink(double set_ounces) : MenuItem("name")
{
	ounces = set_ounces;
};
```

## New and delete
```
Student bob = Student();
Student* jim = Student();
```
allocate an array of objects
```
Student* students = new Student[42];

delete [] students;
```

## References
```
int numBalls = 42

int* ballsPtr = &numBalls;
int& ballsRef = numBalls
```
pass by reference
```
void byRef(std::string& str)
{
	str += " and...";
}

void byConstRef(std::string const& str)
{
	std::cout << str << std:endl;
}

int main()
{
	std::string str = "test string!";

	byRef(str);
	byConstRef(str);
}
```

## Filestreams
```
#include <fstream>

std::ifstream ifs("numbers");

std::ofstream ofs("test.out");
```

## Function overlading
ad-hoc polymorphism
