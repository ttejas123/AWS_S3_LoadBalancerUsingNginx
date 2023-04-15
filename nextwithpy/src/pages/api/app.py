from flask import Flask, jsonify
import json

with open('data.json') as f:
    data = json.load(f)

app = Flask(__name__)

@app.route('/data', methods=['GET'])
def my_api_endpoint():
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)