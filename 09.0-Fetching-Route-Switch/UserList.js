import React, { Component } from "react";
import axios from "axios";

export default class UserList extends Component {
  state = { users: [], isLoading: true };

  componentDidMount() {
    //* fetch ile veri çekme
    // setTimeout(() => {
    //   fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((response) => response.json())
    //     .then((json) => this.setState({ users: json, isLoading: false }));
    // }, 3000);

    //* axios ile veri çekme

    setTimeout(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          //console.log(response.data);
          this.setState({ users: response.data, isLoading: false });
        });
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <h2>Users List</h2>
        {isLoading ? "Loading..." : this.state.users.map((user) =>
          (<div key={user.id}>{user.name} @{user.username}</div>))}
      </div>
    );
  }
}
