print("None : ", None)
print("1:", None == 0)
print("2:", None == [])
print("3:", None == False)
print("4:", None == "")
x = None
y = None
print("5:", x == y)
print()

def void_function():
	a = 10
	b = 20
	c = a + b


result = void_function()
print(result)
print("값이 없음" if result == None else result)
print()

# assert
a = 10
assert a > 5
# assert a < 5
assert a < 5, "a의 값이 너무 큽니다."