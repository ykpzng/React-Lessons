import React from "react";

class Login extends React.Component {
  constructor() {
    super();

    this.state = { authorized: true, counter: 2, isEditing: true };
  }
  authorize = () => {
    if (
      this.props.user.pasword === document.querySelector(".form-control").value
    ) {
      this.setState({ authorized: false });
    } else {
      this.setState({ counter: this.state.counter - 1 });
      if (this.state.counter === 0) {
        this.setState({ isEditing: false });
        this.enableInput();
      }
    }
  };

  enableInput = () => {
    setTimeout(() => {
      this.setState({ isEditing: true, counter: 2 });
    }, 3000);
  };

  render() {
    let contact = (
      <div className="card">
        <div className="top">
          <h2 className="name">{this.props.user.name}</h2>
          <img
            className="circle-img"
            src={this.props.user.imgURL}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p className="info">{this.props.user.phone}</p>
          <p className="info">{this.props.user.mail}</p>
        </div>
      </div>
    );

    let login = (
      <div className="card">
        <form className="form-inline" action="#" onSubmit={this.authorize}>
          <div className="form-group">
            <input
              type="password"
              className="form-control mx-sm-3"
              placeholder="Password"
              disabled={!this.state.isEditing}
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!this.state.isEditing}
            >
              Submit
            </button>
            {!this.state.isEditing ? (
              <p>You have to wait 30 seconds...</p>
            ) : null}
          </div>
        </form>
      </div>
    );

    return (
      <div id="authorization">
        <h1>
          {this.state.authorized ? "Contact Profile" : "Enter the Password"}
        </h1>
        {this.state.authorized ? login : contact}
      </div>
    );
  }
}

export default Login;
