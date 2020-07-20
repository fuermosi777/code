Question: design/implement a class that supports inserting integers and getting the product of K most recently inserted numbers (K is provided at the time of construction). 

Follow-up: K is not fixed, it's provided with each "getProduct" query. 

Expectations for good candidates: We're targeting constant time (per operation) and linear space (in K for the first problem, in #(insertions) for the second) algorithms for both problems, that correctly handle inserting zeroes, as well as a correct implementation for the first problem. 

Q: http://shortn/_3ZyhdEvO0m
More: http://shortn/_OSlUEKvVRQ

===

A constructor takes a parameter K
add(x: int)  -> N times
getProduct():int   => the product of last K elements