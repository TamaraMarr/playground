import axios from "axios";

class CommunicationService {
	fetchSingleBook = isbn => {
		return axios.get(`http://localhost:5000/books/get/${isbn}`);
	};

	fetchAllBooks = () => {
		return axios.get("http://localhost:5000/books/getall");
	};

	fetchSomeBooks = pageInfo => {
		console.log(pageInfo);
		return axios.post(`http://localhost:5000/books/getsome`, pageInfo);
	};

	deleteBook = isbn => {
		return axios.delete(`http://localhost:5000/books/deletebook/${isbn}`);
	};

	addBook = bookInfo => {
		return axios.post(`http://localhost:5000/books/newbook`, bookInfo);
	};
}

export const communicationService = new CommunicationService();
