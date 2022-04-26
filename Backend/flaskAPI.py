from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd

import connectDB
import collaborativeFilters as CF

app = Flask(__name__)
CORS(app)

@app.route('/ratings/showMovies', methods=['GET'])
def showMovies():
    moviesDataSet = pd.read_csv('./csvFiles/movies.csv')
    moviesDF = {
        'movieId': moviesDataSet['id'],
        'title': moviesDataSet['title']
    }
    return pd.DataFrame(moviesDF).to_json(orient = 'records')

@app.route('/ratings/suggestions', methods=['GET'])
def getSuggestions():
    return CF.getSuggestions()

@app.route('/ratings/new', methods=['POST'])
def insert():
    rating = (
        request.json['movieId'],
        request.json['title'],
        request.json['rating']
    )
    connectDB.cursor.execute(connectDB.sqlCommands['INSERT'], rating)
    connectDB.connectionDB.commit()
    response = jsonify({
        "message": "Rating added successfully."
    })
    response.status_code = 201
    return response

@app.route('/ratings/show', methods=['GET'])
def selectAll():
    connectDB.cursor.execute(connectDB.sqlCommands['SELECTALL'])
    users = []
    for movieId, title, rating in connectDB.cursor:
        users.append({
            'movieId': movieId,
            'title': title,
            'rating': float(rating)
        })

    return jsonify(users)

if __name__ == '__main__':
    app.run(
        debug = True,
        host = 'localhost',
        port = '5000'
    )