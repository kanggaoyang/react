import React, { Component } from 'react'
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {
          this.props.todos.map(todo=>{
            return (
              <TodoItem 
                key={todo.id} 
                {...todo}
                // id={todo.id} 
                // title={todo.title} 
                // isCompleted={todo.isCompleted}
              />
            )
          })
        }
        
      </div>
    )
  }
}
