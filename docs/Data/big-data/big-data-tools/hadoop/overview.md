# Overview

## HDFS

## MapReduce

## Hadoop Ecosystem
- Pig
- Hive
- HBase
- Impala
- Mahout

### Pig and Hive
Hive queries are very much like standard SQL. Easier to use than MapReduce.  

Hive is optimized for running long batch jobs.  

### Impala
Directly query HDFS files without the need to use MapReduce.  
Optimized for low latency queries.  

### HBase
A real-time database, built on top of HDFS.  

### Hue
Graphical frontend to the cluster.  

### Oozie
A workflow management tool.  

### Mahout
For creating scalable performant ML applications.  
A distributed linear algebra framework and mathematically expressive Scala DSL.  

## Commands
```
> hadoop fs -ls
> hadoop fs -put <file>
```
