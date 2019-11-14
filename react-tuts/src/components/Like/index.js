import React, { Component } from "react";

export default class Like extends Component {
  constructor() {
    super();
    this.state = {
      isLike: false
    };
  }
  handelLikeClick = () =>{ 
    // 要修改数据,就使用setState方法，setState方法可以有两个参数  setState 异步方法
    // this.setState({
    //   isLike: !this.state.isLike 
    // })

    this.setState((prevState,props)=>{   
      console.log(prevState)
      return {
        isLike: !prevState.isLike
      }
    }, ()=>{
      // 由于 setState 异步方法,如果想要获取到最新的state,应该在这个回调里来获取
      console.log(this.state.isLike)
    })
  }
  render() {
    return (
      <div>
        <span onClick={this.handelLikeClick}>
          点击{this.state.isLike ? "取消" : "喜欢"}
        </span>
      </div>
    );
  }
}
