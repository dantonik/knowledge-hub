# Overview

A set of cooperating computers that are communicating with each other over network to get some coherent task done.  

## What does it try to achive?
- parallelism
- fault tolerance
- physical
- security/ isolation
- performance

## Challenges
- concurrency
- partial failure

Coordination is slow and complex.  

[MIT 6.824 Distributed Systems (Spring 2020)](https://www.youtube.com/playlist?list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB)  

Distributed Lock Server

## Consistency
Strong consistency vs eventual consistency  

## Conflict-free Replicated Data Types (CRDT)
Order Theory
- total and partial orders
- joins
- join semi-lattices

G-Counter (grow only counter)  
Monotonic join semi-lattice  

[CRDTs and the Quest for Distributed Consistency](https://www.youtube.com/watch?v=B5NULPSiOGw)  
[CRDTS The Hard Parts](https://www.youtube.com/watch?v=x7drE24geUw)  

## Saga pattern
- compensation 'delete' operations

## Application event log

## Change Data Capture (CDC)
Database native tools
- MongoDB Oplog
- MySQL Changelog
- PostgreSQL Changelog

## Event-first
- EDA
- CQRS

## Asynchronous Event Handling
[Patterns and Frameworks for Asynchronous Event Handling](https://www.youtube.com/watch?v=2rGOX8Oy7-Q)  

### Books

Distributed Systems: Concepts and Design, by George Coulouris, Jean Dollimore, Tim Kindberg, Gordon Blair. (Addison Wesley; 5th edition, 2012);

Distributed Systems, by Maarten van Steen and Andrew S. Tanenbaum (Prentice Hall; 3rd edition, 2017)
