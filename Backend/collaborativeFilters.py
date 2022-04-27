import pandas as pd
import math

import connectDB as cDB

moviesDataSet = pd.read_csv('./csvFiles/movies.csv')
movies = {
    'movieId': moviesDataSet['movieId'],
    'title': moviesDataSet['title']
}
movies_df = pd.DataFrame(movies)
ratings_df = pd.read_csv('./csvFiles/ratings.csv')

def getRatingsUserActive():
    cDB.cursor.execute(cDB.sqlCommands['SELECTALL'])
    userActive = []
    for movieId, title, rating in cDB.cursor:
        userActive.append({
            'movieId': movieId,
            'title': title,
            'rating': float(rating)
        })
    userActiveDF = (
        pd.DataFrame(userActive)
    ).sort_values(by='movieId')

    return userActiveDF

def coincidencesMovies(userActiveDFParam):
    matchUsers = ratings_df[ratings_df['movieId'].isin(userActiveDFParam['movieId'])]
    matchUsersTuples = sorted(matchUsers.groupby(['userId']))
    return matchUsersTuples

def calculateCoefficients():
    coefficients = {
        'coefficient': [],
        'userId': []
    }
    for userId, tuple in coincidencesMovies(getRatingsUserActive()):
        tuple = tuple.sort_values(by='movieId')
        sameRatings = getRatingsUserActive()[
            getRatingsUserActive()['movieId'].isin(tuple['movieId'])
        ]['rating'].tolist()
        diccionaryAux = {
            'sameRatings': sameRatings,
            'currentTupleRatings': tuple['rating'].tolist()
        }
        diccionaryAuxDF = pd.DataFrame(diccionaryAux)
        coefficient = diccionaryAuxDF.corr(method="pearson")['currentTupleRatings']['sameRatings']
        if math.isnan(coefficient) == True:
            coefficient = 0
        coefficients['coefficient'].append(coefficient)
        coefficients['userId'].append(userId)

    return pd.DataFrame(coefficients).sort_values(by='coefficient', ascending=False)

def collaborativeFilters(coefficientsDF):
    ratingsCoefficients = coefficientsDF.merge(
        ratings_df, left_on='userId', right_on='userId', how='inner'
    )
    ratingsCoefficients['weighing'] = ratingsCoefficients['coefficient']*ratingsCoefficients['rating']
    summations = ratingsCoefficients.groupby('movieId').sum()[['coefficient','weighing']]
    summations.columns = ['sumCoefficient','sumWeighing']
    suggestions = {
        'movieId': summations.index,
        'weightedAverage': summations['sumWeighing']/summations['sumCoefficient']
    }
    suggestionsDF = pd.DataFrame(suggestions).sort_values(by='weightedAverage', ascending=False)
    suggestionsAux = {
        'movieId': [],
        'weightedAverage': []
    }
    for values in suggestionsDF.values:
        if math.isnan(values[1]) == False:
            suggestionsAux['movieId'].append(int(values[0]))
            suggestionsAux['weightedAverage'].append(values[1])
    suggestionsAuxDF = pd.DataFrame(suggestionsAux)
    suggestionsAuxDF = pd.merge(
        suggestionsAuxDF,
        movies_df[movies_df['movieId'].isin(suggestionsAuxDF['movieId'])]
    )
    
    return suggestionsAuxDF

def getSuggestions():
    suggestions = collaborativeFilters(calculateCoefficients())
    return suggestions.to_json(orient='records')