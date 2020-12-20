import React, { Component } from "react";
import List from "./List";
import Form from "./Form";
export default class Contact extends Component {
  constructor() {
    super();

    this.addContact = this.addContact.bind(this);
  }

  // state = {
  //   contacts: [
  //     { id: 1, name: "Name 1", phone: "+1234567890" },
  //     { id: 2, name: "Name 2", phone: "+1234567891" },
  //     { id: 3, name: "Name 3", phone: "+1234567892" },
  //     { id: 4, name: "Name 4", phone: "+1234567893" },
  //   ],
  // };

  state = {
    contacts: [{ text: "Name 1", phone: "+1234567890" }],
  };

  addContact(datas) {
    // console.log(datas);
    // const newRehber = [];
    // newRehber.push(datas);
    // newRehber.push(...this.state.contacts);
    // this.setState({ contacts: newRehber });
    //* or
    const { contacts } = this.state; //mevcut state değerini bir sabite ata
    contacts.push(datas); //  gelen yeni veriyi üzerine ekle
    this.setState({ contacts: contacts }); // son güncel değeri state koy
  }

  render() {
    return (
      <div>
        <h1>CONTACTS</h1>
        <List contacts={this.state.contacts}></List>
        <Form addContact={this.addContact}></Form>
      </div>
    );
  }
}
