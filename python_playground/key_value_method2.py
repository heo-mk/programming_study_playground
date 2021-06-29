# dict에 key:value 추가하기
a = {1: 'a'}
a[2] = 'b'
print(a)

a['name'] = 'mm'
print(a)

a['array'] =[1,2,3]
print(a)

# 삭제하기
del a[1]
print(a)
print()

# key로 value 구하기
grade = {'pey':10, 'julliet': 99}
print(grade['pey'])
print(grade['julliet'])
print()


# 같은 키면 하나를 제외한 다른 것들이 무시된다
same_keys = {1:'a', 1:'b'}
print(same_keys)

# key가 리스트면 오류 발생
# key에는 튜플처럼 변경이 불가능한 것들만 들어간다
# key_not_list = {[1,2] : 'hi'}

# key 리스트 만들기 : .keys() 메서드
a_method = {'name':'heomk', 'age':23, 'birth':1988}
a_keys = a_method.keys()
print(a_keys)  # dict_keys(['name', 'age', 'birth']) : dict_keys 객체
print()

for keys in a_keys:
    print(keys) 

# dict_keys 객체 -> list
a_keys_list = list(a_keys)
print(a_keys_list)
print()

# value 리스트 만들기 :.values() 메서드
a_values = a_method.values() 
print(a_values)  # dict_values(['heomk', 23, 1988]) : dict_values 객체
print();

for values in a_values:
    print(values)

# dict_values 객체 -> list
a_values_list = list(a_values)
print(a_values_list)
print()

# key, value 쌍 얻기 
a_items = a_method.items() 
print(a_items)  # dict_items([('name', 'heomk'), ('age', 23), ('birth', 1988)]) : dict_items 객체
print()

# key:value 쌍 모두 지우기
# a_method.clear()
# print(a_method)
# print()

# key로 value 얻기 : .get() 메서드
get_name = a_method.get('name')
print(get_name)
get_birth = a_method.get('birth')
print(get_birth)
get_lover = a_method.get('lover')
print(get_lover) # None
print()

# 키 값이 없을때 정해둔 default값을 가져오기
get_default = a_method.get('default', 1234)
print(get_default)
print()

# 해당 key가 딕셔너리 안에 있는지 조사하기 : in 
print('name' in a_method)
print('email' in a_method)
