import psycopg2 as psy

connectionDB = psy.connect(
    database = 'movies_db',
    user = 'postgres',
    password = 'H@wkers358s',
    host = 'localhost',
    port = '5432'
)

cursor = connectionDB.cursor()

sqlCommands = {
    'INSERT': 'INSERT INTO ratings (movieId, title, rating) VALUES (%s, %s, %s)',
    'SELECTALL': 'SELECT * FROM ratings'
}