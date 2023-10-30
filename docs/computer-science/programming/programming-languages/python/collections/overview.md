# Overview

## namedtuple
Read-only class/object.  
```
from collections import namedtuple

FullName = namedtuple("FullName", ("first", "second))
my_name = FullName("Test", "User")

print(my_name[0])
print(my_name.first)
```

