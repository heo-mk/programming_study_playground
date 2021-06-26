def add_many(*args):
    result = 0
    for i in args:
        result = result + i
        print(result)
    return result 

result1 = add_many(1, 2, 3)
print(result1)
print()

result2 = add_many(1,2,3,4,5,6,7,8,9,10)
print(result2)
print()

def add_mul(choice,*args):
    if choice == "add":
        result = 0
        for i in args:
            result = result + i
    elif choice == "mul":
        result = 1
        for i in args:
            result = result * i
    else:
        result = 'no answer'
    return result

result3 = add_mul('add', 1,2,3,4,5)
print(result3)
result4 = add_mul('mul', 1,2,3,4,5)
print(result4)
print()

def print_kwargs(**kwargs):
    print(kwargs)

print_kwargs(a=1)
print_kwargs(name='foo', age=3)