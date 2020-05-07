import React from 'react';
import './App.css';

import TodoItem from "./components/TodoItem"
import todosData from './todosData'

function App() {

  const todos = todosData.map(todo => <TodoItem key={todo.id} text={todo.text} completed={todo.completed}/>)
  return (
    <div className="todo-list">
      {todos}
    </div>
  )
}

export default App;
