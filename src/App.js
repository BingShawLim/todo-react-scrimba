import React, {Component} from 'react';
import './App.css';

import TodoItem from "./components/TodoItem"
import todosData from './todosData'

class App extends Component {
 state = { todos: todosData}
 
 handleChange = (id) => {
   let todos = [...this.state.todos]

   todos.map(todo => {
     if(todo.id === id){
       todo.completed = !todo.completed
     }
     return todo
   })
   this.setState({
     todos
   })

 }
  
  render() {
    const todos = this.state.todos.map(todo => <TodoItem changed={this.handleChange} key={todo.id} todo={todo}/>)

    return (
      <div className="todo-list">
        {todos}
      </div>
    )
  }
}

export default App;


// https://jsonplaceholder.typicode.com/todos
 //the todo api like below!
//  {
//   "userId": 10,
//   "id": 192,
//   "title": "ut quas possimus exercitationem sint voluptates",
//   "completed": false
// },