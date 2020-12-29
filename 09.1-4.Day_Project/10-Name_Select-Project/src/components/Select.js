import React from 'react';
import { names } from "./names";
import { wishes } from "./wishes";


export class Select extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
  }



  handleChange() {
    const len = wishes.length;
    let index = Math.floor(Math.random() * len);

    this.props.changeName(document.getElementById('great-names').value, wishes[index]);
  }

  render() {
    return (
      <div>
        <h1>Pickup a name :</h1>
        <select id="great-names" onChange={this.handleChange}>
          {names.map(item => (
            <option value={item}>{item}</option>
          ))}

        </select>
      </div>
    );
  }
}