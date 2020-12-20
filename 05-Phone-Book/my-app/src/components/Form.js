import React, { Component } from "react";
import "../styles/Form.css";
import PropsTypes from "prop-types";

export default class Form extends Component {
  static propTypes = {
    addContact: PropsTypes.func,
  };

  state = { text: "", phone: "" };
  constructor() {
    super();
    this.inputChange = this.inputChange.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }
  inputChange(e) {
    // name ve phone bilgisine tek seferde alma için [e.target.name]
    this.setState({
      [e.target.name]: e.target.value,
    });
    // * or
    // if (e.target.name === "text") {
    //   this.setState({ text: e.target.value });
    // } else if (e.target.name === "phone") {
    //   this.setState({ phone: e.target.value });
    // }
  }

  sendForm(e) {
    e.preventDefault(); // Bu sayede sayfa yenilenmesi otamatik değil bizim kontrolümüzde olur
    //Eğer inputlar boş ise listeye göndermiyor
    if (this.state.text && this.state.phone) {
      this.props.addContact({ ...this.state });
    }
    //inputları boşalt, state boş değer girersek imputlar boşalmış olur
    this.setState({ text: "", phone: "" });
  }

  render() {
    return (
      <div>
        <form className="formField" onSubmit={this.sendForm}>
          <input
            value={this.state.text}
            onChange={this.inputChange}
            name="text"
            id="text"
            placeholder="Enter a name"
          />
          <br />
          <input
            value={this.state.phone}
            onChange={this.inputChange}
            name="phone"
            id="phone"
            placeholder="Enter a phone number"
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
