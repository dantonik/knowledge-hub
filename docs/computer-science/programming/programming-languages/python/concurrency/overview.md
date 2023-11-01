# Overview

Asynchronous
Multithreading
Multiprocessing

- Concurrency
- Processes
- Threads
- Time-sclicing/Interleaving and Parallelism
- OS Thread Scheduler
- Python Global Interpreter Lock
- CPU vs I/O Bound Workloads
- Preemptive vs Cooperative multitasking
- Async Programming

## Concurrency
Concurrency is a concept, it is how a program is structured.  
An algorithm is concurrent when it is structured into several sub parts that can be executed out of order, without affecting the outcome.  

### How are concurrent fragments executed?
- Parallel execution
- Time-sliced execution
	context switching = save and load the state of the executions

## Processes
Processes run concurrently.  
Each process runs independently. Memory is not shared between processes.  

## Threads
Each process is executed using one or more threads. Always starts with at least one thread (main thread) as well as "global" data (shared data).  
