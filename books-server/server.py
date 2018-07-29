import flask
from flask import Flask, request
import json
import books_db as db
from flask_cors import CORS

app = Flask(__name__)
app.config['DEBUG'] = True
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/books/get/<isbn>')
def get_book(isbn):
    book = db.fetch_by_isbn(isbn)
    return flask.jsonify(book)

@app.route('/books/getall')
def get_all_books():
    books = db.fetch_all_books()
    return flask.jsonify(books)

@app.route('/books/getsome', methods=['POST'])
def get_some_books():
    offset = request.json["offset"]
    limit = request.json["limit"]
    books = db.get_some_books(offset, limit)
    return flask.jsonify(books)

@app.route('/books/newbook', methods=['POST'])
def add_book():
    content = request.json
    try:
        db.insert_book(content)
        return flask.jsonify("OK")
    except:
        return flask.jsonify("Error")


@app.route('/books/deletebook/<isbn>', methods=['DELETE'])
def delete_book(isbn):
    db.delete_book(isbn)

    return flask.jsonify("OK")


if __name__ == '__main__':
    app.run()
