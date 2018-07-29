import React, { Component } from "react";

import BooksPage from "./book/BooksPage";

class App extends Component {
	render() {
		return (
			<div className="container">
				<BooksPage />
			</div>
		);
	}
}

export default App;
