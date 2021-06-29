import itertools 

# permutation
arr_pe = ['A', 'B', 'C']
nPr = itertools.permutations(arr_pe, 2)
print(list(nPr))
print()

# combination
arr_co = ['A', 'B', 'C']
nCr = itertools.combinations(arr_co, 2)
print(list(nCr))
print()

# zip() 동일한 요소 갯수를 가진 iterable 객체들을 모아서 iterable로 반환\
z = zip([1, 2, 3], ('A', 'B', 'C'))
print(next(z))  # (1, 'A')
print(next(z))  # (2, 'B')
print(next(z))  # (3, 'C')
print()

# all() iterable한 객체를 인수로 받아서 원소가 모두 참이면 True, 아니면 False로 반환
a_true = all([1,2,3])
a_false = all([0,1,2])
print(a_true, a_false)
print()

# any() iterable한 객체를 인수로 받아서 원소가 하나라도 참이면 True, 아니면 False로 반환
any_true = any([0,2,3])
any_false = any([0, False, 0])
print(any_true, any_false)
print()

# chain() iterable한 객체를 인수로 받아 하나의 iterator로 변환
c1 = [1, 2]
c2 = ['A', 'B']
c = itertools.chain(c1, c2)
print(next(c))  # 1 
print(next(c))  # 2
print(next(c))  # 'A'
print(next(c))  # 'B'
