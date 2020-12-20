import React, { Component } from "react";
import "../styles/List.css";
import PropsTypes from "prop-types";

export default class List extends Component {
  static propTypes = {
    contacts: PropsTypes.array.isRequired,
  };

  //filter start   state tanımlama ve değer atamacd my
  state = { filterText: "" };

  filterListFunc = (e) => {
    this.setState({ filterText: e.target.value });
    console.log(this.state.filterText);
  };
  // filter end

  render() {
    //filter start
    const filteredDatas = this.props.contacts.filter((item) => {
      return item.text.indexOf(this.state.filterText) !== -1;
    });
    // filter end

    return (
      <div onChange={this.filterListFunc} className="listField">
        <input
          name="filter"
          id="filter"
          placeholder="Filter by name or phone..."
        />
        <ul>
          {filteredDatas.map((item, index) => {
            return (
              <li key={index + 1}>
                <span className={"name"}>{item.text}</span>
                <span className={"phone"}>{item.phone}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
