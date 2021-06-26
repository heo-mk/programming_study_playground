lang = 'jython'
def func():
	lang = 'python'
	print(lang)

func()
print(lang)
print()

lang2 = 'jyt'
def func2():
	global lang2
	lang2 = 'pyt'
	print(lang2)

func2()
print(lang2)
print()

def func3():
	var = 1
	def func4():
		nonlocal var
		var = 3
	func4()
	print(var)

func3()