from flask import Flask, render_template, jsonify, request
import json

app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('homepage.html')

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/location')
def myLoc():
    return render_template('location.html')

@app.route('/gumball')
def gumball():
    return render_template('gumball.html')

@app.route('/sales/')
def sales():
    callback = request.args.get("callback")
    if callback is None:
        callback = ""
    s = [{"name":"ARTESIA","time":1308774240669,"sales":8},
         {"name":"LOS ANGELES","time":1308774240669,"sales":2},
         {"name":"PASADENA","time":1308774240669,"sales":8},
         {"name":"STOCKTON","time":1308774240669,"sales":2},
         {"name":"FRESNO","time":1308774240669,"sales":2},
         {"name":"SPRING VALLEY","time":1308774240669,"sales":9},
         {"name":"ELVERTA","time":1308774240669,"sales":5},
         {"name":"SACRAMENTO","time":1308774240669,"sales":7},
         {"name":"SAN MATEO","time":1308774240669,"sales":1}]
    data = json.dumps(s)
    text = "{callback}({data});".format(callback=callback, data=data)
    return text

@app.route('/tweets')
def tweets():
    callback = request.args.get("callback")
    data = [{"text":"haaaaaaaa"},{"text":"can you hear me?"},
            {"text":"what's wrong with you?"}]
    data = json.dumps(data)
    text = "{callback}({data});".format(callback=callback, data=data)

    return text

@app.route('/canvas')
def canvas():
    return render_template('canvas.html')

@app.route('/noteself')
def note():
    return render_template('noteself.html')

@app.route('/pingpong')
def pingpong():
    return render_template('pingpong.html')

@app.route('/fractal')
def fractal():
    return  render_template('fractal.html')

if __name__ == '__main__':
    app.run()