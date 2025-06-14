from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/register', methods = ["GET", "POST"])
def register():
    None