import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    
    getStyle = () =>{
        return{
                background : '#f4f4f4',
                padding: '10px',
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
                <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
            </p>
        </div>
        )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    backgroundColor: '#ff0000',
    borderRadius: "20px",
    color: "#fff",
    padding:"5px 8px",
    float: "right",
    cursor: "pointer"

}
// const itemStyle = {
//     backgroundColor: "#f4f4f4"
// }

export default TodoItem
