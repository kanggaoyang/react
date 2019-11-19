import React, { Component } from 'react'

import { CounterConsumer } from "../../counterStore";

export default class CounterBtn extends Component {
  render (){
    return (
      <CounterConsumer>
        {
          ({onIncrementCount,onDecrementCount})=>{
            const handle = this.props.type === 'increment'? onIncrementCount:onDecrementCount
            return (
              <button onClick={handle}>{this.props.children}</button>
            )
          }
        }
      </CounterConsumer>
      
    )
  }
}
