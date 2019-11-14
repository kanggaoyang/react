import React, { Component } from 'react'

import PropTypes from 'prop-types'

export default class TodoInput extends Component {
  static propTypes = {
    btnText: PropTypes.string
  }
  static defaultProps = {
    btnText: '添加TODO'
  }
  state = {
    inputValue: ''
  }
  handleAddData = ()=>{
    let val = this.state.inputValue
    if (val!=''){
      this.props.addTodo(val)
      this.setState({
        inputValue: ''
      })
    }
  }
  handleChangeInput = (e)=>{
    console.log(e.currentTarget.value)
    this.setState({
      inputValue: e.currentTarget.value
    })
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleChangeInput}/> 
        <button onClick={this.handleAddData}>{this.props.btnText}</button>
      </div>
    )
  }
}
