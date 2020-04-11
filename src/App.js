import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";
import List from "./components/List";

export class App extends Component {
	state = {
		list: ["anas", "ansari"],
		text: "",
	};


  render() {
		console.log(this.state.list, "state-list");

		return (
			<div className="App">
				<h1>Your List</h1>
				<List listItems={this.state.list} />
				<Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
			</div>
		);
	}
}

export default App;
