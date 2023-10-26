# Overview
Get user input
```
filename = input("File: ")
line_number = int(input("Line: "))
```
Open a file
```
file = open(filename, "r")
lines = file.readlines()
file.close()
total_lines = len(lines)
if (line_number > total_lines):
	print("Can't read line " + str(line_number) + ", the file has only " + str(total_lines) + " lines.")
else:
	line = lines[line_number - 1].rstrip('\n')
	print(line)
```