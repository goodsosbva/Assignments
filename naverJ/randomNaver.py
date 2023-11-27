import random

com_number = random.randint(1, 100)

print(com_number)

def is_same(target, number):
    if target == number:
        result = "Win"
    elif target > number:
        result = "High"
    else:
        result = "Low"
    return result

print('1~100')


isAns = False
while isAns == False:
    user_guess = int(input('1~100 choice -> enter: '))
    
    h_or_l = is_same(com_number, user_guess)

    if h_or_l == "High":
        print("그것보다 높아")
    elif h_or_l == "Low":
        print("그것보다 낮아")
    else:
        isAns = True

print("ans!")

    
