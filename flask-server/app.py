from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient("your_mongodb_uri_here")
db = client["your_db_name"]

@app.route('/register', methods=['POST'])
def register():
    return "Register Page"

if __name__ == '__main__':
    app.run(debug=True)
