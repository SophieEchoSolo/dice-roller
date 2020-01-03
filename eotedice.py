from flask import Flask, escape, request
import json
from flask_cors import CORS
from random import randint

app = Flask(__name__)
cors = CORS(app)

# dictionary for each type of die and their sides
# the position in the lists corresponds to a pip on the physical dice
dice = {
    "boost": [[0,0,0],[0,0,0],[1,0,0],[1,1,0],[0,2,0],[0,1,0]],
    "setback": [[0,0,0],[0,0,0],[-1,0,0],[-1,0,0],[0,-1,0],[0,-1,0]],
    "ability": [[0,0,0],[1,0,0],[1,0,0],[2,0,0],[0,1,0],[0,1,0],[1,1,0],[0,2,0]],
    "difficulty": [[0,0,0],[-1,0,0],[-2,0,0],[0,-1,0],[0,-1,0],[0,-1,0],[0,-2,0],[-1,-1,0]],
    "proficiency": [[0,0,0],[1,0,0],[1,0,0],[2,0,0],[2,0,0],[0,1,0],[1,1,0],[1,1,0],[1,1,0],[0,2,0],[0,2,0],[1,1,1]],
    "challenge": [[0,0,0],[-1,0,0],[-1,0,0],[-2,0,0],[-2,0,0],[0,-1,0],[0,-1,0],[-1,-1,0],[-1,-1,0],[0,-2,0],[0,-2,0],[-1,-1,-1]]
}

##This is outdated code that was used to test that the dice would roll properly
# for i, x in enumerate(dice["proficiency"]):
#     # print(i)
#     y = dice["challenge"][i]
#     # print(x,y)
#     score = [x[0]+y[0],x[1]+y[1]]
#     print(score)

def roll(die):
    return dice[die][randint(0,len(dice[die])-1)]

# print(roll("proficiency"))
# This code is used to get the dice pool from the front end and post the results
@app.route('/rolldie', methods=['POST'])
def postroll():
    data = request.get_json()
    for die in data:
        print(roll(die))
    print(data)
    return "hi"

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5000)