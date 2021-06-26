def say_myself(name, old, man=True):
	print('나의 이름은 {}입니다.'.format(name))
	print("나이는 {}살입니다.".format(old))
	if man:
		print("남자입니다.")
	else:
		print("여자입니다.")

say_myself("허민규", 27)
print()
say_myself("허민규", 27, True)
print()
say_myself("여지영", 27, False)
print()

a = 1
def vartest():
	# a = a + 1
	global a
	a = a + 1
	# return a

vartest()
print(a)
print()

# lambda
add = lambda a, b: a + b
result5 = add(3, 4)
print(result5)

def add(a, b):
	return a + b

result6 = add(3, 4)
print(result6)