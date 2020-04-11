import React, { Component } from "react";

export class Form extends Component {
  render() {
    console.log(this, 'inside-form');
    
		return (
			<div>
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" name="text" onChange={this.props.handleChange} value={this.props.text}/>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

export default Form;
