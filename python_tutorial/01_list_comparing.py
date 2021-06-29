# 1. 파이썬 비교 연산자 사용하기
list1 = [[1,2],[3,4]]
list2 = [[1,2],[3,4]]
print(list1 == list2)

list3 = [[1, 2], [3, 4]]
list4 = [[1, 2], [9, 4]]
print(list3 == list4)
print()

# 2. 내장함수 sorted 사용하기
list5 = [1, 2, 3, 4, 5]
list6 = [3, 1, 4, 2, 5]
print("sorted:", sorted(list5) == sorted(list6))
print();

# 3. 내장함수 set 사용하기
list_test1 = [1,2,3,1,2,4]
list_test2 = [2,3,1,5,3]
list_test3 = [1,3,2,4,1]

print(set(list_test1))
print(set(list_test2))
print(set(list_test3))
print("set:", set(list_test1) == set(list_test2))
print("set:", set(list_test1) == set(list_test3))
print()

# 4. np.array_equal() 사용하기 : 2개의 np로 만든 배열을 비교
import numpy as np
arr1 = np.array([[1,2],[3,4]])
arr2 = np.array([[1,2],[3,4]])
print(np.array_equal(arr1, arr2))

arr3 = np.array([[1,2],[3,4]])
arr4 = np.array([[1,2],[8,4]])
print(np.array_equal(arr3, arr4))
print()

# 5. np.equal() 함수 사용하기 : 각 요소별로 같은지 판별한다
arr5 = np.array([0,1,3])
arr6 = np.array(3)

print(np.equal(arr5, arr6))
print(arr5 == arr6)  # np.array와 동일
print()

# 6. np.isclose(), np.allclose()
np1 = [1.0, 11.0]
np2 = [0.9, 9.0]
print(np.isclose(np1, np2))
print(np.allclose(np1, np2))
print(np.isclose(np1, np2, atol=0.5))
print(np.allclose(np1, np2, atol=0.5))
print(np.isclose(np1, np2, rtol=0.5))
print(np.allclose(np1, np2, rtol=0.5))
