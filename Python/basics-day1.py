from tkinter import Y


a = 10 #Integer
b = 10.5 #Float
c = 5+10j #Complex number

print(c)

# Type conversion
print(int(b), float(a), str(c))

#Lists
myList = [1,2,3,'hello']
print(myList)

#Tuples
myTuple = (2,3,1,1,"hello")
print(myTuple)

#Dictionary
myDict = {
    "name":"Hyundai",
    "model":"Creta",
    "year":"2021"
}
print(myDict)

#Set
set1 = {1,2,3,4,4} # Set cannot store duplicate values
set2 = {5,4,3,3}
print(set1, set2)

#Arithmetic operators
x = 15
y = 2
print(x//y) #Integer division. / retains decimal values.
print(x/y)

#Assignment operator
x += y
print(x)

#Comparison operator
x = 5
y = 3
print(x==y)

import sys
print(sys.version)

import datetime
print(datetime.datetime.now())