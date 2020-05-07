import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        return (
            <div className="todo-item">
            <input type="checkbox" checked={this.props.completed}/>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default TodoItem

