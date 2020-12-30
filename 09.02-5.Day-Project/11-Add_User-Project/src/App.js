import React, { Component } from 'react';
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [
        {
          name: 'Charlie',
          job: 'Janitor',
        },
        {
          name: 'Mac',
          job: 'Bouncer',
        },
        {
          name: 'Dee',
          job: 'Aspring actress',
        }
      ]
    }
  }

  updateName = (item) => {
    this.setState({ users: [...this.state.users, item] });
  }

  render() {
    return (
      <div className="container">
        <h1>React List</h1>
        <p>Add a character with a name and a job to the table.</p>
        <Form updateName={this.updateName} />
        <Table {...this.state} />
      </div>
    )
  }
}

export default App;