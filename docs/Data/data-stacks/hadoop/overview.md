# Overview

In 2002 Google introduced GFS (Google File System).  
[Paper](https://static.googleusercontent.com/media/research.google.com/en//archive/gfs-sosp2003.pdf)  
In 2004 Google introduced MapReduce.  

Goals
- Performance
- Scalability
- Reliability
- Availability

### GFS
GFS is a distributed file storage. In any cluster there can be hundreds of commodity servers.  
Assumptions
- Failures are common
- Large files are the norm
- Primarily two kinds of reads: large streaming reads and small random reads
- large sequential writes that append data to files, small arbitrary writes are supported but do not have to be efficient
- atomicity with minimal synchronization overhead is essential
- high sustained bandwidth is more important than low latency

GFS provides a familiar file system interface, though it does not implement a standard API such as POSIX. Files are organized hierarchically in directories and identified by pathnames.  
Three replicas are stored by default.  

Files are split into chunks of 64mb identified by a 64bit ID. Chunks of a single file are distributed on multiple machines.  

The master server stores the entire metadata of the cluster.  

Chunkservers send regular 'heartbeats' to confirme that they are up and running without any problems.  