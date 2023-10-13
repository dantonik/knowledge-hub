# Overview

`L03`[Computational Structures](https://www.youtube.com/playlist?list=PLDSlqjcPpoL64CJdF0Qee5oWqGS6we_Yu)  

## L01: The Digital Abstraction
Computer programs  
-> Virtual machines  
Module 3: Computer systems  
Operating systems, virtual memory, I/O  
-> Instruction set + memory  
Module 2: Computer architecture  
Assembly language, processors, caches, pipelining  
-> Digital circuits  
Module 1: Digital design  
Combinational and sequential circuits  
-> Bits, Logic gates  
Devices  
Materials  
Atoms  

## L02: Combinational Devices and Boolean Algebra
#### Boolean Algebra Axioms
identity ax1=a a+0=a
null ax0=0 a+1=1
negation Ō=1 Ī=0

Duality principle: if a boolean expression is true, the replacing 0 with 1 and AND with OR yields another expression that is true.  

#### Useful Boolean Algebra Properties
- commutative
- associative
- distributive
- complements
- absorption
- reduction
- DeMorgan's law

Logical synthesis  
#### From Boolean Algebra to Gates
AND, OR, and NOT are universal gates: they can implement any combinational function.  
sum-of-products (SOP)  
a minimal SOP has the smallest possible number of AND and OR operators.  
minimal SOP's can be implemented with fewer gates but they are nor unique.  

#### Other Common Gates
XOR (exclusive-OR)  
NAND  
NOR  

NANDs and NORs are universal.  
