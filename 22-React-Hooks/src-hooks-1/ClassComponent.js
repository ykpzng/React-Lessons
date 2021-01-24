import React, { Component } from 'react';

export class ClassComponent extends Component {

  state = { counter: 0, isVisable: true, timer: 0 };

  componentDidMount() {
    console.log("Class Component didMount Çalıştı..");

    this.myTimer = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 })
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter > 4) {
      console.log("Class Component didUpdate Çalıştı..");

      console.log("Timer : ", this.state.timer)
    }

  }

  componentWillUnmount() {
    console.log("Class Component Wiil Ummount Çalıştı..");
    clearInterval(this.myTimer);
  }



  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
  }
  decrase = () => {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    console.log("Class Component : ", this.state.counter);
    return (
      <div>
        <h1>Class Component (Classic)</h1>

        <p>Counter : {this.state.counter}</p>

        <button onClick={this.increase}>Artır</button>

        <button onClick={this.decrase}>Azalt</button>
        <br />
        <span>Timer : {this.state.timer}</span>

      </div>
    )
  }
}

export default ClassComponent
