import React from 'react';
import { Select } from './Select';
import { Name } from './Name';

export class App extends React.Component {
  constructor() {
    super();
    this.state = { name: "Abella", wishes: "" }
  }
  changeName = (param, param2) => {
    this.setState({ name: param, wishes: param2 });
  }



  render() {
    return (
      <div>
        <Select changeName={this.changeName} />
        <Name {...this.state} />
      </div>
    );
  }
}

