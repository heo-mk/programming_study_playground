# int 함수 사용법
print(int(2.5))  # 2
print(int(-1.7)) # -1
print(int(8.0))  # 8
print()

print(int('123'))  # 123
print(int('-123')) # -123
# print(int('123.45')) # error 발생 : 왜냐면 정수가 아닌 숫자이기 때문
print()

# base 사용례
# int(value, base) : value는 0, base는 10이 default, 2 <= base <= 36
print(int())          # 0
print(int(11))        # 11
print(int('11', 2))   # 11(2) = 2 + 1 =3
print(int('1a', 16))  # 1a(16) = 16 + 10 = 26
# print(int('112', 2))  # valueError
print()

# bit 수 확인
print((0).bit_length())       # 0 
print((1).bit_length())       # 0
print((63).bit_length())      # 6
print((64).bit_length())      # 7
print((1023).bit_length())    # 10
print((2047).bit_length())    # 11
print((2048).bit_length())    # 12
print()

# 비트 연산자
print(bin(13))  # 10진법 -> 2진법
print(0b1101)   # 2진법 -> 10진법
print(int('1101', 2))  # value, base. 2진수로 된 문자열 1101을 10진수로 변환
print()

# 비트 논리 연산자
# 2진수의 각 자릿수를 AND OR XOR NOT 연산을 한다
print(bin(0b1101 & 0b1001))  # 비트 AND, 0b1101
print(13 & 9)  # 비트 AND, 9
print(bin(0b1101 | 0b1001)) # 비트 OR, 0b1101
print(13 | 9)  # 비트 OR, 13
print(bin(0b1101 ^ 0b1001)) # 비트 XOR, 0b100
print(13 ^ 9)  # 비트 XOR, 4
print(bin(~0b1101)) # 비트 NOT, -0b1101
print(~13)  # 비트 NOT, -14
print()

# shift 연산자
print(0b0011 << 2)  # 비트 왼쪽으로 2만큼 이동, 12
print(bin(12))  # 0b1100
print(0b1100 >> 2) # 비트 오른쪽으로 2만큼 이동, 3
print(bin(3))   # 0b11
