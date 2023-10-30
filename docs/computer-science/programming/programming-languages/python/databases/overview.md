# Overview

[Python MySQL](https://www.w3schools.com/python/python_mysql_getstarted.asp)  

`pip install mysql-connector-python`
```
import mysql.connector

mydb = mysql.connector.connect(
	host="localhost",
	user="yourusername",
	password="yourpassword"
)

mycursor = mydb.cursor()
mycursor.execute("CREATE DATABASE mydatabase")

mycursor.execute("SHOW DATABASES")
for x in mycursor:
	print(x)
```
