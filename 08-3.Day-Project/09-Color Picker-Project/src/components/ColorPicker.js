import React from "react";
import { Button } from "./Button";

class ColorPicker extends React.Component {
  constructor() {
    super();
    this.state = { color: [250, 200, 100] };
  }

  applyColor = () => {
    document.querySelector("body").style.backgroundColor = this.formatColor(
      this.state.color
    );
  };

  chooseColor = () => {
    let o = Math.round,
      r = Math.random,
      s = 255;
    let arr = [o(r() * s), o(r() * s), o(r() * s)];
    this.setState({ color: arr });
  };

  componentDidMount() {
    // this.chooseColor();
    console.log(
      "i invoked immediately after component is mounted, just one time at the beginning; after render method"
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "i invoked immediately after updating occurs, upon every change."
    );
    this.applyColor();
  }

  isLight(colorArr) {
    return colorArr.reduce((a, b) => a + b) < 127 * 3; // it returns true or false;
  }

  formatColor(colorArr) {
    return "rgb(" + colorArr.join(", ") + ")"; // it returns rgb format of color;
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight(this.state.color) ? "white" : "black"}>
          Your color is {this.formatColor(this.state.color)}!
        </h1>

        <Button
          chooseColor={this.chooseColor}
          color={this.isLight(this.state.color)}
        >
          <p>Hi, im color picker</p>
        </Button>
      </div>
    );
  }
}

export default ColorPicker;
