from random import randint

sides=int(input("Input the number of sides of the die you want to roll:"))
n=int(input("Input the number of dice you want to roll:"))
score=()

def d(sides):
    return randint(1, sides)

def roll(n, sides):
    return tuple(d(sides) for _ in range(n))

dice = roll(n, sides)

if sides = 6:
    for x in dice:
        if roll = 1:
            score = (0,0)
        elif roll = 2:
            score = (0,0)
        elif roll = 3:
            score = (1,0)
        elif roll = 4:
            score = (1,1)
        elif roll = 5:
            score = (0,2)
        elif roll = 6:
            score = (0,1)
return(score)

print(dice, sum(dice))
print(score)
