import React, { Component } from "react";
import Modal from "react-modal";

import Book from "./Book";
import { communicationService } from "../services/communicationService";

import "./BooksPage.css";

class BooksPage extends Component {
	constructor() {
		super();

		this.state = {
			books: [],
			modalIsOpen: false,
			title: "",
			author: "",
			isbn: "",
			page: 0,
			pageSize: 3
		};
	}

	componentWillMount() {
		Modal.setAppElement("body");
	}

	componentDidMount() {
		this.changePage();
	}

	fetchBooks = () => {
		communicationService.fetchAllBooks().then(response => {
			this.setState({
				books: response.data
			});
		});
	};

	addBook = event => {
		communicationService
			.addBook({
				ISBN: this.state.isbn,
				title: this.state.title,
				author: this.state.author
			})
			.then(response => {
				console.log(response);
			});
	};

	getBookInfo = event => {
		const change = {};
		change[event.target.id] = event.target.value;
		this.setState(change);
	};

	openModal = () => {
		this.setState({ modalIsOpen: true });
	};

	closeModal = () => {
		this.setState({ modalIsOpen: false });
	};

	changePage = page => {
		const body = {
			offset: page * this.state.pageSize,
			limit: this.state.pageSize
		};

		communicationService.fetchSomeBooks(body).then(response => {
			this.setState({ books: response.data });
		});
	};

	previousPage = () => {
		var currentPage = this.state.page;
		this.changePage(currentPage - 1);
		this.setState(state => {
			return {
				page: state.page - 1
			};
		});
	};

	nextPage = () => {
		var currentPage = this.state.page;
		this.changePage(currentPage + 1);
		this.setState(state => {
			return {
				page: state.page + 1
			};
		});
	};

	render() {
		return (
			<div>
				<i className="fas fa-plus add-book" onClick={this.openModal} />
				{this.state.books.map(book => {
					return (
						<Book key={book.ISBN} book={book} updateBooks={this.fetchBooks} />
					);
				})}
				<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}
					contentLabel="Add New Book"
				>
					<h2>Add New Book</h2>
					<button onClick={this.closeModal} className="btn btn.primary">
						Close
					</button>
					<form>
						<label htmlFor="title">Title</label>
						<input id="title" onChange={this.getBookInfo} />
						<br />
						<label htmlFor="author">Author</label>
						<input id="author" onChange={this.getBookInfo} />
						<br />
						<label htmlFor="isbn">ISBN</label>
						<input id="isbn" onChange={this.getBookInfo} />
					</form>
					<button onClick={this.addBook} className="btn btn.primary">
						Add
					</button>
				</Modal>
				<div className="arrows">
					<i className="fas fa-chevron-left" onClick={this.previousPage} />
					<i className="fas fa-chevron-right" onClick={this.nextPage} />
				</div>
			</div>
		);
	}
}

export default BooksPage;
