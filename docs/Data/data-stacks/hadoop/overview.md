# Overview

In 2002 Google introduced GFS (Google File System).  
In 2004 Google introduced MapReduce.  

Goals
- Performance
- Scalability
- Reliability
- Availability

### GFS
Assumptions
- Components fail often
- Large files are the norm
- Primarily two kinds of reads: large streaming reads and small random reads
- large sequential writes that append data to files, small arbitrary writes are supported but do not have to be efficient
- atomicity with minimal synchronization overhead is essential
- hight sustained bandwidth is more important than low latency

GFS provides a familiar file system interface, though it does not implement a standard API such as POSIX. Files are organized hierarchically in directories and identified by pathnames.