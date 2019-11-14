import React from 'react'
import PropTypes from "prop-types";

export default function TodoHeader(props) {  // 函数式组件
  console.log(props)
    return (
      <div>
        <h1>{props.desc}</h1>
        <h3>{props.children}</h3>
        <h5>{props.x+props.y}</h5>
      </div>
    )
}
TodoHeader.propTypes = {
  desc: PropTypes.string,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
}