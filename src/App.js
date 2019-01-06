import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "First one it is",
        completed: false
      },
      {
        id: 2,
        title: "Second again omg",
        completed: true
      },
      {
        id: 3,
        title: "Second runner-up they call me",
        completed: false
      }

    ]
  }
  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map( todo => {
        if(todo.id == id){
          todo.completed = !todo.completed
        }
        return todo;
    })
  })
  }

  render() {
    return (
        <div className="App">
        <Todos todos={this.state.todos} markComplete={this.toggleComplete} />
        </div>
      );
  }
}

export default App;
