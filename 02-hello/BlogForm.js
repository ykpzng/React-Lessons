import React, { Component } from "react";

export default class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.clickButton = this.clickButton.bind(this);
    this.changeState = this.changeState.bind(this);

    // this.state = { name: "Ali Veli123" };
  }
  // state burdada tanımlanabilir, constroctor içinde de tanımlanabilir
  state = { name: "Holy" };

  // butona tıklanınca state içeriğini değiştiriyoruz
  changeState() {
    console.log("worked");
    // this.state.name = "Merhaba";  //Hatalı kullanım
    this.setState({ name: "Holly Changed..." + Math.floor(Math.random() * 4) });
  }

  clickButton() {
    // console.log("Button clicked, Brol.!!!");
    this.props.appClick("Parameters from BlogForm Component...");
  }
  render() {
    // console.log(this.props.appClick);

    return (
      <div>
        <h1>{this.state.name}</h1>
        {/* üç farklı bind etme yöntemi 2.yöntem önerilir. 3 te kullanılır */}

        {/* <button onClick={this.clickButton.bind(this)}>Add</button> */}

        {/* <button onClick={() => this.clickButton()}>Add</button> */}

        <button onClick={this.clickButton}>Add</button>

        <button onClick={this.changeState}>Change</button>
      </div>
    );
  }
}
