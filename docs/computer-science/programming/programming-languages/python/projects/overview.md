# Overview

[I built my own Reddit API to beat Inflation. Web Scraping for data collection.](https://www.youtube.com/watch?v=O_0IGoOX6Dw)  

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

## Web Scraping for data collection

[I built my own Reddit API to beat Inflation. Web Scraping for data collection. ](https://www.youtube.com/watch?v=O_0IGoOX6Dw)  

Playwright  
Puppeteer  
[reddit-api code](https://github.com/dreamsofcode-io/reddit-api)  