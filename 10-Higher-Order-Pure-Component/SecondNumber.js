import React, { PureComponent } from 'react'

export default class SecondNumber extends PureComponent {

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.secondNumber !== this.props.secondNumber;
  // }


  render() {
    console.log("Second Number Component Rendering")
    return (
      <div>
        Scond:{this.props.secondNumber}
      </div>
    )
  }
}


//*  shouldComponentUpdate deki işlemi yapmak yerine PureComponent yeterlidir