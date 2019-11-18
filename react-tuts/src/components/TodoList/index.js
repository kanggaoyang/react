import React, { Component } from 'react'
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })).isRequired,
    onChangeCompleted: PropTypes.func 
  } 
  render() {
    return (
      <div>
        {
          this.props.todos.map(todo=>{
            return (
              <TodoItem 
                onChangeCompleted = {this.props.onChangeCompleted}
                key={todo.id} 
                {...todo}
                
                // id={todo.id} 
                // title={todo.title} 
                // completed={todo.completed}
              />
            )
          })
        }
        
      </div>
    )
  }
}
