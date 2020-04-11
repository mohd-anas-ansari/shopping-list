import React, { Component } from "react";

export class List extends Component {
	render() {
		console.log(this.props.listItems, "this-inside-List");

		return (
			<div>
				<ul className="list">
					{this.props.listItems.map((list) => {
						return <li key={list.id}>{list.text}</li>;
					})}
				</ul>
			</div>
		);
	}
}

export default List;
