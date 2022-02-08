# Built-in functions

# 1. all() - The all() function is an inbuilt function in Python which returns true if all the elements of a given iterable( List, Dictionary, Tuple, set, etc) are True else it returns False. It also returns True if the iterable object is empty.

k = [1,2,3,4]
print(all(k))

k = [0, False]
print(all(k))

# 2. bin() - outputs binary equivalent
x = 10
y = bin(x)
print(y)

# 3. exec()
x = 9
exec('print(x==9)')
exec('print(x+4)')

# 4. any()
l = [1,2,3,4]
print(any(l))

l = [0, False]
print(any(l))

l = [1,2,False]
print(any(l))

# 5. format()
print(format(28,"d"))
print(format(28.782, ".2f"))
print(format(28,"b"))
