import psycopg2
import json
import sys

conn = psycopg2.connect(dbname="bookstore", user="bookstore", password="pass123", host="localhost")

def fetch_by_isbn(isbn):
    cur = conn.cursor()
    cur.execute("SELECT * FROM books WHERE ISBN = (%s);", (isbn,))
    res = cur.fetchone()
    if res is None:
        return None

    book = {
        'ISBN': res[0],
        'title': res[1],
        'author': res[2]
    }

    cur.close()
    return book

def fetch_all_books():
    cur = conn.cursor()
    cur.execute("SELECT * FROM books")
    res = cur.fetchall()
    print("RESULT", res)
    books = []

    for row in res:
        book = {
            'ISBN': row[0],
            'title': row[1],
            'author': row[2]
        }
        books.append(book)

    cur.close()
    return books

def get_some_books(offset, limit):
    cur = conn.cursor()
    cur.execute("SELECT * FROM books order by ISBN offset %s limit %s", (offset, limit))
    res = cur.fetchall()
    books = []

    for row in res:
        book = {
            'ISBN': row[0],
            'title': row[1],
            'author': row[2]
        }
        books.append(book)

    cur.close()
    return books

def insert_book(new_book):
    cur = conn.cursor()
    try:
        cur.execute("INSERT INTO books VALUES (%s, %s, %s, %s);", (new_book['ISBN'], new_book['title'], new_book['author'], None))
        conn.commit()
    except:
        conn.rollback()
        raise
    finally:
        cur.close()

def delete_book(isbn):
    cur = conn.cursor()
    cur.execute("DELETE FROM books WHERE ISBN = (%s)", (isbn,))
    conn.commit()
    cur.close()
