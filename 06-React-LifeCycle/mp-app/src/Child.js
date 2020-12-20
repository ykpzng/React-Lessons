import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    console.log("Child constructor Running...");
  }
  state = { age: "15" };
  //componentWillMount

  componentWillMount() {
    console.log("Child componentWillMount Running...");
  }

  //componentDidMount

  componentDidMount() {
    console.log("Child componentDidMount Running...");
    setTimeout(() => this.setState({ age: "30" }), 2000);
  }

  componentWillReceiveProps(nextProps) {
    console.log("Child componentWillReceiveProps Running...");
    console.log("nextProps" + nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Child shouldComponentUpdate Running...");
    console.log(
      "nextProps =" + nextProps.name + " nextState = " + nextState.age
    );
    return true;
  }

  componentWillUpdaet(nextProps, nextState) {
    console.log("Child componentWillUpdaet Running...");
    console.log(
      "nextProps =" + nextProps.name + " nextState = " + nextState.age
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Child componentDidUpdate Running...");
    console.log(
      "nextProps =" + prevProps.name + " nextState = " + prevState.age
    );
  }

  componentWillUnmount() {
    console.log("Child componentWillUnmount Running...");
  }

  render() {
    console.log("Child Render Running...");
    return (
      <div>
        <h1>Child Component</h1>
        {this.state.age}
        <h5>{this.props.name}</h5>
      </div>
    );
  }
}
