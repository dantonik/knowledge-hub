# Overview

## Types of Data
- Structured
- Semi-structured
- Unstructured

## Properties of Data
- Volume
- Velocity
- Variety

## Data Warehouse
- designed for complex queries and analysis
- typically uses a star or snowflake schema
- optimized for read-heavy operations

Schema-on-write (predefined)  
ETL  

## Data Lake
- holds a vast amount of raw data
for example
- Amazon S3
- HDFS

Schema-on-read (defined at the time of reading data)  
ELT  

## Data Lakehouse
Combines the best of both worlds.  

- AWS Lake Formation
- Delta Lake
- Databricks Lakehouse Platform
- Azure Synapse Analytics

## Data Mesh
Individual teams own "data products" within a given domain.  
`Domain-based data management`  
Federated governance with central standards is needed.  

## ETL Pipelines

### Transform
- data cleansing
- data enrichent
- format changes
- aggregations or computations
- encoding or decoding data
- handling missing values

## Orchestration
- EventBridge
- Amazon Managed Workflows for Apache Airflow (MWAA)
- AWS Step Functions
- Lambda
- Glue Workflows

## Data Sources
- JDBC Connection
- ODBC
- Raw logs
- API's
- Streams

## Terms
- Data integrity
