import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";
import List from "./components/List";

export class App extends Component {
	state = {
		list: [],
		text: "",
	};

  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

	handleSubmit = (event) => {
    event.preventDefault();
    
    const newInput = {
      text: this.state.text,
      id: Date.now()
    }

    this.setState(state => ({
      list: this.state.list.concat(newInput),
      text: ''  
    }))
  };

	render() {
		console.log(this.state.list, "state-list");

		return (
			<div className="App">
				<h1>Your List</h1>
				<List listItems={this.state.list} />
				<Form
					handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          text={this.state.text}
				/>
			</div>
		);
	}
}

export default App;
