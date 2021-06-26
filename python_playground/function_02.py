def add_and_mul(a, b):
	return a+b, a*b

result = add_and_mul(3, 4)
print(result)
result1, result2 = add_and_mul(3, 4)
print(result1, result2)
print()

def add_and_mul2(a, b):
	return a+b
	return a*b

result3 = add_and_mul2(2,3)
print(result3)
print()

def say_nick(nick):
	if nick == '바보':
		return
	print("나의 별명은 {}입니다.".format(nick))

say_nick('야호')
say_nick('바보')