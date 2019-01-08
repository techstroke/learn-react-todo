import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import Header from './components/layout/Header';
import About from './components/pages/About';
import './App.css';
import uuid from 'uuid';


class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "First one it is",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Second again omg",
        completed: false
      },
      {
        id: uuid.v4(),
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

  delTodo = (id) => {
    this.setState({ todos : [...this.state.todos.filter(todo => todo.id!== id)]})
  }

  addTodo = (title) => {
      const newTodo = {
        id : uuid.v4(),
        title,
        completed: false
      }
      this.setState( { todos : [...this.state.todos, newTodo]} )
  }


  render() {
    return (
      <Router>
        <div className="App">
        
        <div className="container">
        
        <Header />

        <Route exact path="/" render={ props => (
          <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.toggleComplete} delTodo={this.delTodo}/>
          </React.Fragment>
        )} />

        <Route path="/about" component={About} />
          
        
        </div>
        
        </div>
      </Router>
        
      );
  }
}

export default App;
