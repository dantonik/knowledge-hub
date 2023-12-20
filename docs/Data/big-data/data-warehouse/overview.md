---
slug: /big-data/data-warehouse
title: Datawarehouse
sidebar_label: datawarehouse
sidebar_position: 1
sidebar_class_name: overview
---

# Data Warehouse

A data warehouse is a computer system dedicated to storing and analyzing data to reveal trends, patterns, and correlations that provide information and insight.  

## Fact
A fact descibes quantitative transactional data.  

- measurements
- metrics
- values for analysis

## Dimension
Descriptive attributes for facts.  

## Star schemas
Dimension and fact tables together.  
Data marts  

- conformed dimensions

## Steps
- Idenrity a Fact
- Determine Dimensions
- Create Marts

Identify a Fact.  
- low granularity
- keys
- numeric values

Granularity example  
- order
- transaction

## Slowly Changing Dimensions (SCD)

### SCD 0
If something has changed to the source dimension, we don't implement that in the warehouse table.  

- not important anymore

### SCD 1
We maintain the latest snapshot. We do not maintain the history.  

### SCD 2
Every time there is a change in the dimension, you add an additional row.  

#### Ressources

[SAP What is a data warehouse?](https://www.sap.com/products/technology-platform/datasphere/what-is-a-data-warehouse.html)  

[Create a DWH with SQLite](https://www.youtube.com/watch?v=fGoERH74AI0)  

[Data Modeling for DWH](https://www.youtube.com/watch?v=acNmHwl9iPs)  

[Understanding Slowly Changing Dimensions](https://www.youtube.com/watch?v=Sg2AAk1vwEs)  
