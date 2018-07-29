import psycopg2
import json
import sys

isbn = sys.argv[1]

conn = psycopg2.connect(dbname="bookstore", user="bookstore", password="pass123", host="localhost")
cur = conn.cursor()
cur.execute("SELECT * FROM books WHERE ISBN = '{isbn}';".format(isbn = isbn))
res = cur.fetchall()

books = []

for row in res:
    book = {
        'ISBN': row[0],
        'title': row[1],
        'author': row[2]
    }
    books.append(book)

print(json.dumps(books, sort_keys=True, indent=4))
