num = '3212'
base = 5

answer = 0
for idx, number in enumerate(num[::-1]):
	print(idx, number)
	answer += int(number) * (base ** idx)

print(answer)

####################################
num_pythonic = '3244'
base_pythonic = 5
answer_pythonic = int(num_pythonic, base_pythonic)
print(answer_pythonic)
print()

ex1 = int('0b101010', 2)
ex2 = int('0o52', 8)
ex3 = int('0x2a', 16)
print(ex1, ex2, ex3)