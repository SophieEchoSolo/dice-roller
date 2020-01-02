from random import randint

sides=int(input("Input the number of sides of the die you want to roll:"))
n=int(input("Input the number of dice you want to roll:"))


def d(sides):
    return randint(1, sides)

def roll(n, sides):
    return tuple(d(sides) for _ in range(n))

dice = roll(n, sides)

# def score(dice):
#     if sides == 6:
dscore=[]
for x in dice:
    if x == 1:
        dscore.append([0,0])
    elif x == 2:
        dscore.append([0,0])
    elif x == 3:
        dscore.append([1,0])
    elif x == 4:
        dscore.append([1,1])
    elif x == 5:
        dscore.append([0,2])
    elif x == 6:
        dscore.append([0,1])
        # return(dscore)

print(dice, sum(dice))
print(dscore)
