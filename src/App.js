import React, {Component} from 'react';
import './App.css';

import TodoItem from "./components/TodoItem"
import todosData from './todosData'

class App extends Component {
 state = { todos: todosData}
 
 handleChange = (e) => {
   let todos = [...this.state.todos]

   this.setState({
     todos
   })


 }
  
  render() {
    const todos = this.state.todos.map(todo => <TodoItem changed={this.handleChange} id={todo.id} key={todo.id} text={todo.text} completed={todo.completed}/>)

    return (
      <div className="todo-list">
        {todos}
      </div>
    )
  }
}

export default App;
