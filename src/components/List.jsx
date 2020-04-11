import React, { Component } from 'react'

export class List extends Component {
  render() {
    console.log(this.props.listItems, 'this-inside-List');
    
    return (
      <div>
        <ul className='list'>

        </ul>
      </div>
    )
  }
}

export default List
