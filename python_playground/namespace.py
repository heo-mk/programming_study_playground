a = 3
c = 'hello'
print(globals())

def func():
	a = 100
	b = 'python'
	print('함수 내부 namespace', locals())
	def inner_func():
		print('내부 함수 내부 namespace', locals())
	inner_func()

func()
print()

def func2():
	def inner():
		e = 'python'
	inner()
	print(a)
	# print(e)

func2()

#######

g = 'fastcampus'
def func3():
	b = 'python'
	def func2():
		print(g)
		print(b)
	func2()

func3()