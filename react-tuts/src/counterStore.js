import React,{ Component, createContext } from "react";

const {
  Provider,
  Consumer:CounterConsumer   // 解构出来重新赋值给一个CounterConsumer的组件
} = createContext()

class CounterProvider extends Component {
  constructor (){
    super()
    // 这里的状态就是共享的，任何CounterProvider的后代组价都可以通过CounterConsumer来接收这个值
    this.state = {
      count: 100
    }
  }
  // 这里的方法也会继续通过Provider 
  incrementCount = ()=>{
    this.setState({
      count: this.state.count + 1
    })
  }
  decrementConut = ()=>{
    this.setState({
      count: this.state.count - 1
    })
  }
  render (){
    return (
      //  使用Provider这个组件，它必须要有一个value值，这个value里可以传递任何的数据，一般还是传递一个对象比较合理
      <Provider value={{
        count: this.state.count,
        x: 1,
        onIncrementCount: this.incrementCount,
        onDecrementCount: this.decrementConut
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  CounterConsumer,
  CounterProvider
}