import React, { Component,Fragment } from 'react'

import { 
  TodoHeader,
  TodoInput,
  TodoList,
  Like
} from "./components";


import { getTodos } from "./services";

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
        completed: true
      },{
        id:2,
        title: '谁家',
        completed: false
      }],
      isLoading: false
    }
  }
  addTodo = (todoTitle)=>{
    this.setState({
      todos: this.state.todos.concat({
        id: Math.random(),
        title: todoTitle,
        completed: false
      })
    })
  }
  onChangeCompleted = (id)=>{
    console.log('onChangeCompleted',id)
    this.setState((prevState)=>{
      return {
        todos: prevState.todos.map(todo=>{
          if (todo.id === id){
            todo.completed = !todo.completed
            
          }
          return todo
        })
      }
    })
  }

  getData = ()=>{
    this.setState({
      isLoading: true
    })
    getTodos().then((resp)=>{
      console.log(resp)
      if (resp.status === 200){
        this.setState({
          todos: resp.data
        })
      }
    }).catch(err=>{
      console.log(err)

    }).finally(()=>{
      this.setState({
        isLoading: false
      })
    })
  }
  componentDidMount(){
    this.getData()
  }
  render() {
    return (
      <Fragment>
        {
          <div dangerouslySetInnerHTML={{__html: this.state.article}}></div>
        }
        {
          // this.state.todos.map(todo=>{
          //   return <div key={todo.id}>{todo.title}</div>
          // })
        }
        <TodoHeader desc={this.state.desc} x={1} y={2}>
    <i>{this.state.title}</i>
        </TodoHeader>
        <TodoInput addTodo={this.addTodo}/>
        {
          this.state.isLoading?
          <div>loading</div>:
          <TodoList 
            todos={this.state.todos}
            onChangeCompleted={this.onChangeCompleted}
          />
      }
       
        <Like />
      </Fragment>
    )
  }
}
