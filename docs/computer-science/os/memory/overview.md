# Overview

Where does memory come from?
- User space allocator library
- sbrk/brk
- mmap

malloc (glibc allocator) -> heap  
```
char *heap = malloc(1024);
free(heap);
```
brk/sbrk sets the break or lowest address of a process's data segment  
```
void *break = sbrk(0);
break = sbrk(0x1000);
```
The mmap() system call gives back memory you have access to
```
void *new_memory = mmap(NULL, 0x1000, PROT_READ|PROT_WRITE, MAP_PRIVATE, MAP_ANONYMOUS, 0, 0);
munmap(new_memory, 0x1000);
```

[Are You Sure You Want to Use MMAP in Your
Database Management System?](https://www.youtube.com/watch?v=1BRGU_AS25c)
[Translation lookaside buffer](https://en.wikipedia.org/wiki/Translation_lookaside_buffer)  

[How to write a custom allocator](https://www.youtube.com/watch?v=kSWfushlvB8)
