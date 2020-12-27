import React, { Component } from 'react'

export default class FirstNumber extends Component {
  render() {
    console.log("First Number Component Rendering")
    return (
      <div>
        First:{this.props.firstNumber}
      </div>
    )
  }
}
