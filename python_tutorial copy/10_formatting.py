# 1. 인덱스용 숫자 사용하기
print('A: {0}, B: {1}'.format('Tim', 22))
print('A: {1}, B: {0}'.format('Tim', 22))
print('A: {}, B: {}'.format('Tim', 22))
print()

print('A:' + str(12) + ', B:' + str(24) + ', C:' + str(36) + ', D:' + str(48))
print('A:{}, B:{}, C:{}, D:{}'.format(12, 24, 36, 48))

# 2. 이름 사용하기
print('A:{name}, B:{age}'.format(name='Tim', age=22))
print('A:{age}, B:{name}'.format(name='Tim', age=22))
print();

# 3. 형식 지정하기
print('A:{:e}, B:{:E}'.format(15, 124))
print('C:{:,}, D:{:.2f}'.format(1024, 5723))
print()

# 4. f-string 사용하기 
name="MkHeo"
age="23"
print(f'A:{name}, B:{age}')
print('A:{name}, B:{age}'.format(name=name, age=age))
