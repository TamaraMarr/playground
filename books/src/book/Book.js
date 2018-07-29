import React, { Component } from "react";

import { communicationService } from "../services/communicationService";

import "./Book.css";

export default class Book extends Component {
	deleteBook = event => {
		communicationService.deleteBook(event.target.id);
		this.props.updateBooks();
	};

	render() {
		const book = this.props.book;
		return (
			<div className="col-12 book-div">
				<div className="flex-div">
					<h4>{book.author}</h4>
					<i
						className="fas fa-trash"
						id={book.ISBN}
						onClick={this.deleteBook}
					/>
				</div>
				<h3>{book.title}</h3>
				<div className="flex-div">
					<span>ISBN: {book.ISBN}</span>
					<span>
						<i className="fas fa-pencil-alt" />
					</span>
				</div>
			</div>
		);
	}
}
