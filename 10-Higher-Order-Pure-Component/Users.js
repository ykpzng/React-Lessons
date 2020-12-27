import React, { Component } from 'react'
import LoaderHOC from "./LoaderHOC";
import "./App.css";

class Users extends Component {

  render() {

    return (
      <div className="userList">
        {
          this.props.users.map(user => <div key={user.id}>{user.name}</div>)
        }
      </div>
    )
  }
}


export default LoaderHOC(Users, "users");