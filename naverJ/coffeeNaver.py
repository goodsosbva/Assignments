coffee = 5
bread = 5
money = int(input('money: '))


while True:
    print("1: coffee 2: bread")

    menu = int(input())
    if menu == 1:
        # 커피가 1개 이상 있고, 돈이 있을때
        if money > 500 and coffee > 0:
            change = money - 500
            money = change
            print(f'coffee {change}')
        else:
            print('부족')
            break
    
    if menu == 2:
        # 빵이 하나이 이상 있고, 돈이 있을 때
        if money > 700 and bread > 0:
            change = money -700
            money = change
            print(f'bread {change}')
            coffee -= 1
        else:
            print('부족')
            break

print('판매 중지')