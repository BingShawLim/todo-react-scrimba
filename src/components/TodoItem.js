import React, { Component } from 'react'

export class TodoItem extends Component {

completeStyle = {
            color: "#cdcdcd",
            fontStyle: "italic",
            textDecoration: "line-through"
        }

    render() {
        return (
            <div className="todo-item">
            <input type="checkbox" onChange={() => this.props.changed(this.props.todo.id)} checked={this.props.todo.completed}/>
                <p style={this.props.todo.completed? this.completeStyle : null}>{this.props.todo.text}</p>
            </div>
        )
    }
}

export default TodoItem

