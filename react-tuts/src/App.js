import React, { Component,Fragment } from 'react'

import { 
  TodoHeader,
  TodoInput,
  TodoList,
  Like
} from "./components";

export default class App extends Component {
  // state = {
  //   title: '待办事项列表'
  // }
  constructor(){
    super()
    this.state = {
      title: '待办事项列表',
      desc: '今日事今日毕',
      article: '<div>asdadadasda<i>xxxxxxx</i></div>',
      todos: [{
        id:1,
        title: '吃饭',
        isCompleted: true
      },{
        id:2,
        title: '谁家',
        isCompleted: false
      }]
    }
  }
  addTodo = (todoTitle)=>{
    this.setState({
      todos: this.state.todos.concat({
        id: Math.random(),
        title: todoTitle,
        isCompleted: false
      })
    })
  }
  render() {
    return (
      <Fragment>
        {
          <div dangerouslySetInnerHTML={{__html: this.state.article}}></div>
        }
        {
          this.state.todos.map(todo=>{
            return <div key={todo.id}>{todo.title}</div>
          })
        }
        <TodoHeader desc={this.state.desc} x={1} y={2}>
    <i>{this.state.title}</i>
        </TodoHeader>
        <TodoInput addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos}/>
        <Like />
      </Fragment>
    )
  }
}
