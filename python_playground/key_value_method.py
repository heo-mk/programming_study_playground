# 딕셔녀리에 키-값 추가하기
x = {'a':10, 'b':20, 'c':30, 'd':40}
x.setdefault('e') # 키만 지정하고 값이 없으면 값은 None으로 지정
print(x) 
print()

# 키값 수정하기 : update는 키가 문자열일때만 가능
x.update(a=900, f=60) # key=value 이런식으로 키-값 추가 가능
print(x)
x.update(e=50)
print(x)
print()

# 키가 문자열이 아닐 경우, update 메서드가 값을 변경하는 방식
# update(iterable)
y = {1: 'one', 2: 'two'}
print("y:", y)
y.update({1: 'ONE', 3: 'THREE'})
print(y) 
y.update([[2, 'TWO'], [4, 'FOUR']])
print(y)
y.update(zip([1,2], ['one', 'two']))
print(y)
print()

# 딕셔너리에서 키-값 삭제하기
y.popitem()
print(y)

# 딕셔너리 모든 키-값 쌍 제거하기
# y.clear()
# print(y)

# 딕셔너리에서 키의 값 가져오기
print(y.get(1))
print()

# 리스트와 튜플로 딕셔너리 만들기
keys = ['a', 'b', 'c', 'd']
dic1 = dict.fromkeys(keys) # 값 지정 없음
print(dic1)
dic2 = dict.fromkeys(keys, 100) # 값 지정
print(dic2)
print()

# 반복문으로 딕셔너리 키-값 쌍 출력하기
for i in y:
    print(i, end=" ")
print()
print()

for key, value in y.items():
    print(key, value)
print()

# dict comprehension 사용하기
keys2 = ['a', 'b', 'c', 'd']
keys2_comprehension = {key: value for key, value in dict.fromkeys(keys2).items()}
print(keys2_comprehension)
keys2_comprehension2 = {key: 0 for key in dict.fromkeys(keys2).keys()}
print(keys2_comprehension2)
keys2_comprehension3 = {value: 0 for value in {'a':10, 'b':20, 'c':30, 'd':40}.values()}
print(keys2_comprehension3)
print()

# dict comprehension에 if 사용하기
dict_del = {'a' :10,'b': 20, 'c': 30, 'd': 40}
# for key, value in dict_del.items():
#     if value == 20:
#         del dict_del[key]
# print(dict_del)
# print()  # RuntimeError

dict_del = {key: value for key, value in dict_del.items() if value != 20}
print(dict_del)
print()

# dictionary 안에 dictionaray
transport = {
  'bus' : {
      'tarif':3.5,
      'horaire': 10,
      'commodite': 1
  },
  'avion': {
      'tarif': 90,
      'horaire': 1,
      'commodite': 8,
  }, 
  'voiture': {
      'tarif': 30000,
      'horaire': 5,
      'commodite': 9,
  }
}
print(transport['avion']['tarif'])
print()

