import React, { Component } from 'react'

import { CounterConsumer } from "../../counterStore";

export default class Counter extends Component {
  render () {
    return (
      // 使用CounterConsumer来接收count
      <CounterConsumer>
        {
          // 注意！注意！注意！CounterConsumer的children必须是一个方法，这个方法有一个参数，这个参数就是Provider的value
          (arg)=>{
            console.log(arg)
            return (
              <span>{arg.count}</span>
            )
          }
        }
      </CounterConsumer>
    )
  }
}

