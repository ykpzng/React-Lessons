import React, { Component } from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
}

const TableBody = (props) => {
  return (
    <tbody>
      {props.users.map((user, index) => (
        <tr key={index}>
          <td>{user.name}</td>
          <td>{user.job}</td>
        </tr>
      ))}

    </tbody>
  )
}

class Table extends Component {
  render() {
    console.log(this.props.users)
    return (
      <table>
        <TableHeader />
        <TableBody users={this.props.users} />
      </table>
    )
  }
}

export default Table;