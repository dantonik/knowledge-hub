# Overview

`L04`[Computational Structures](https://www.youtube.com/playlist?list=PLDSlqjcPpoL64CJdF0Qee5oWqGS6we_Yu)  

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

### Combinational Circuits

#### Boolean Algebra and Binary Arithmetic
Numbers can be represented in binary notation and arithmetic can be performed on binary numbers.  

Addition in base 2 is performed just like in base 10.  

Half adder (HA): adds two 1-bit numbers and produces a sum and a carry bit.  
Full adder (FA): adds two 1-bit numbers and a carry, and produces a sum bit and a carry bit.  
Cascade FAs to perform binary addition.  

### Bluespec System Verilog (BSV)
^ = XOR
& = AND

#### Half Adder
```
function Bit#(2) ha(Bit#(1) a, Bit#(1) b);
	Bit#(1) s = a ^ b;
	Bit#(1) c = a & b;
	return {c, s};
endfunction
```
#### Full Adder
```
function Bit#(2) fa(Bit#(1) a, Bit#(1) b, Bit#(1) c_in);
	Bit#(2) ab = ha(a, b);
	Bit#(2) abc = ha(ab[0], c_in);
	Bit#(1) c_out = ab[1] | abc[1];
	return {c_out, abc[0]};
endfunction
```
#### 2-bit Ripple-Carry Adder
Also called Carry Look Ahead Adder (CLA Adder)

#### Selectors and Multiplexers
Constant selector: e.g., x[2]  

Dynamic selector: x[i]  

2-way multiplexer (mux)  
(s==0)? a : b;  

#### Shift operators
