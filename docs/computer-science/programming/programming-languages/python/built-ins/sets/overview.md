# Overview

Sets are an unordered collection of unique objects.  

```
s = set()
s.add('d')
print('d' in s)

s.pop()
s.remove('d')
```

## Operations

### Disjoint
```
s1 = set([1, 2])
s2 = set([3, 4])

print(s1.isdisjoint(s2))
```

### Subset
```
s2.issubset(s1)
s1.issuperset(s2)
```

### Union
```
s3 = s1.union(s2)
```

### Intersection
```
s3 = s1.intersection(s2)
```
