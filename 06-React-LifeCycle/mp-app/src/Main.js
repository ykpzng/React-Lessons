import React, { Component } from "react";
import Child from "./Child";

export default class Main extends Component {
  //state burada da tanımlanabilir
  state = { name: "hasan" }; //state ve props oluşumu constructor dan önce olur

  constructor(props) {
    super(props);
    //*Initialization

    console.log("Main constructor Running...");

    // console.log("PROPS.." + this.props);
    //state burada da tanımlanabilir
    this.state = { name: "Ali" };
  }

  //componentWillMount

  componentWillMount() {
    console.log("Main componentWillMount Running...");
  }

  //componentDidMount

  componentDidMount() {
    console.log("Main componentDidMount Running...");
    //setState fonksiyonu kullanırsak render tekrar çalışır
    // setTimeout(() => this.setState({ name: "Veli" }), 2000);
  }

  render() {
    console.log("Main Render Running...");
    return (
      <div>
        <h1>Main Component</h1>
        {this.state.name}
        {console.log(this.props)}
        {/* <Child name={this.state.name}></Child> */}
      </div>
    );
  }
}
