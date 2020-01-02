from random import randint

sides=int(input("Input the number of sides of the die you want to roll:"))
n=int(input("Input the number of dice you want to roll:"))

def d(sides):
    return randint(1, sides)

def roll(n, sides):
    return tuple(d(sides) for _ in range(n))

dice = roll(n, sides)
print(dice, sum(dice))
