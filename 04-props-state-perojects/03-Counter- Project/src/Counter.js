import React, { Component } from "react";

export default class Counter extends Component {
  state = { count: 0 };

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrase = () => {
    this.setState({ count: this.state.count - 1 });
  };

  zero = () => {
    // this.setState({ count: 0 });
    alert("Negative numbers are not entered....");
  };

  render() {
    return (
      <div className="card">
        <h1>{this.state.count}</h1>
        <button onClick={this.increase}> + Plus </button>
        <button onClick={this.state.count > 0 ? this.decrase : this.zero}>
          {" "}
          - Minus{" "}
        </button>
      </div>
    );
  }
}
