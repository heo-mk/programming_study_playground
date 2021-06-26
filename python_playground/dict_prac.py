a = {1:'a'}
print(a)

a[2] = 'b'
print(a)

a['name'] = 'pey'
print(a)

a[3] = [1,2,3]
print(a)

del a[1]
print(a)

a2 = {'a': [1,2,3]}

players = {'김연아':'피겨', '류현진':'야구', '박지성':'축구'}
grade = {'pey':10, 'julliet':99}
print(grade['pey'])
print()

b = {1:'a', 2:'b'}
print(b[1])
print(b[2])
print()

c = {'a':1, 'b':2}
print(c['a'])
print(c['b'])
print()

dic = {'name':'pey', 'phone':'0119993323', 'birth': '1118'}
print(dic['name'])
print(dic['phone'])
print(dic['birth'])
print()

# mutable is not allowed to be a key
# d = {[1,2]:'hi'}

print(dic.keys())
print(list(dic.keys()))
print()

for k in dic.keys():
	print(k)
print()

print(dic.values())
print()

print(dic.items())
print()

# dic.clear()
# print(dic)

print(dic.get('name'))
print(dic.get('phone'))
print(dic.get('birth'))
print()

print(dic.get('nokey'))
# print(dic['nokey'])
print(dic.get('foo', 'bar'))
print(dic)
print()

print('name' in dic)
print('email' in dic)