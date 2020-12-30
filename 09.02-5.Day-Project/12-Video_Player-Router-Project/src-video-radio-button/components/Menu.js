import React, { Component } from 'react'

export default class Menu extends Component {

  changeVideo = (e) => {
    this.props.chooseVideo(e.target.value);
    console.log(this.props)
  }


  render() {

    return (
      <div>
        <form onClick={this.changeVideo}>
          <input type="radio" value="fast" name="video" />Fast
          <input type="radio" value="slow" name="video" />Slow
          <input type="radio" value="cute" name="video" />Cute
          <input type="radio" value="eek" name="video" />Eek
        </form>
      </div>
    )
  }
}
