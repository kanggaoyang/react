import React, { Component } from 'react'


const withCopyright = (YourComponent)=>{
  return class withCopyright extends Component {
    render() {
      return (
        <div>
            <YourComponent {...this.props}/>
            <div>2019 千峰教育</div>
        </div>
      )
    }
  }
}

export default withCopyright
