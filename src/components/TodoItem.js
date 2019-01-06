import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    
    getStyle = () =>{
        return{
                background : '#f4f4f4',
                borderBottom: '1px #ddd dotted',
                textDecoration: this.props.todo.completed?'line-through': 'none',
        
        }
    }

  
    render() {
        const {id, title } = this.props.todo;
        return (
        <div style={this.getStyle()}>
            <p>
                <input type="checkbox" onChange={this.props.markComplete.bind( this, id)} />
                {this.props.todo.title}
            </p>
        </div>
        )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

// const itemStyle = {
//     backgroundColor: "#f4f4f4"
// }

export default TodoItem
