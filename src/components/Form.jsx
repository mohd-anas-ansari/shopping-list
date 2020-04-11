import React, { Component } from "react";

export class Form extends Component {
  render() {
    console.log(this);
    
		return (
			<div>
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" name="text" onChange={this.props.handleChange}/>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

export default Form;
