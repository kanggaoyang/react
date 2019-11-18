
import React, { useState,useEffect } from 'react'

import { render } from "react-dom";

 
const Counter = ()=>{
  // useState 是一个方法，这个方法的 参数就是默认值，结果是一个数组，数组的第一个就是state，第二个就相当于setState
// 结构出来的数组中的两个值
  const [count, setCount] = useState(0)
  // useEffect的参数是一个回调，不管是组件挂在还是更新，都会触发这个回调方法，类似于componentDidMount 和 componentDidUpdate的结合
  useEffect(()=>{
    console.log('更新了')
    document.title = `${count}当前的数量为`
  })
  return (
    <div>
      <p>当前的数量为{count}</p>
      {/* 这里的setCount就是useState所生辰改的方法(第二个)。注意和setState不一样的地方在于参数，这里的参数就是一个新值即可 */}
      <button onClick={()=>{setCount(count-1)}}>-</button>
      {/* 这里就是useState创建的值（第一个） */}
      <span>{count}</span>
      <button onClick={()=>{setCount(count+1)}}>+</button>
    </div>
  )
}
render(
  <Counter />,
  document.querySelector('#root')
)