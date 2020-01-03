from flask import Flask, escape, request
import json
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)


dice = {
    "boost": [[0,0],[0,0],[1,0],[1,1],[0,2],[0,1]],
    "setback": [[0,0],[0,0],[-1,0],[-1,0],[0,-1],[0,-1]],
    "ability": [[0,0],[1,0],[1,0],[2,0],[0,1],[0,1],[1,1],[0,2]],
    "difficulty": [[0,0],[-1,0],[-2,0],[0,-1],[0,-1],[0,-1],[0,-2],[-1,-1]],
    "proficiency": [[0,0],[1,0],[1,0],[2,0],[2,0],[0,1],[1,1],[1,1],[1,1],[0,2],[0,2],[1,1,1]],
    "challenge": [[0,0],[-1,0],[-1,0],[-2,0],[-2,0],[0,-1],[0,-1],[-1,-1],[-1,-1],[0,-2],[0,-2],[-1,-1,-1]]
}
# for i, x in enumerate(dice["proficiency"]):
#     # print(i)
#     y = dice["challenge"][i]
#     # print(x,y)
#     score = [x[0]+y[0],x[1]+y[1]]
#     print(score)

@app.route('/rolldie', methods=['POST'])
def postroll():
    data = request.get_json()
    print(data)
    return "hi"

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5000)