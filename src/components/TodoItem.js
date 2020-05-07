import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        return (
            <div className="todo-item">
            <input type="checkbox" onChange={() => this.props.changed(this.props.todo.id)} checked={this.props.todo.completed}/>
                <p>{this.props.todo.text}</p>
            </div>
        )
    }
}

export default TodoItem

