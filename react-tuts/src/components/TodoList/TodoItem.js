import React, { Component } from "react";

export default class TodoItem extends Component {
  handleCheckboxChange = ()=>{
    //onChangeCompleted  是否存在 执行下一步
    const {
      onChangeCompleted = ()=>{}, // 默认是一个函数
    } = this.props  // 解构

    onChangeCompleted && onChangeCompleted(this.props.id)
  }
  shouldComponentUpdate(nextProps,nextState){
    return nextProps.completed !== this.props.completed
  }
  render() {
   console.log('todoitem render')
    return (
      <div>
        <li>
          <input type="checkbox" checked={this.props.completed} 
            onChange={this.handleCheckboxChange}
          />
          {this.props.title} {this.props.completed ? "已完成" : "未完成"}
        </li>
      </div>
    );
  }
}
