import "./App.css";
import UserList from "./UserList";
import { BrowserRouter, Route, Link, NavLink, Redirect, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import React, { Component } from "react";
import Error from "./Error";

const Contact = ({ match }) => {
  console.log(match);
  return <h1>Contact Page - {match.params.id}</h1>;
};

const Profile = () => {

  return <h1>Profile Page </h1>;
};



class App extends Component {

  state = { loggedIn: false }

  onClickButton = () => {
    this.setState((prevState) => ({ loggedIn: !prevState.loggedIn }));
    //*or
    //this.setState({ loggedIn: !this.state.loggedIn });

  }

  render() {
    return (
      <BrowserRouter>

        <div className="container">
          APP COMPONENT <br />
          {/* 
          
          <Navbar />
          <Route path="/About" exact component={UserList} />

          <Route path="/" exact render={() => { return <h1>Home Page</h1> }} />
          <Route
            path="/Contact" exact strict render={() => {
              return <h1>Contact Page</h1>;
            }}
            component={Contact} />
-------------------------------------------------------------- */}

          <input type="button" onClick={this.onClickButton} value={this.state.loggedIn ? "Logout" : "Login"}></input>

          <br />
          <Link to="/">Home</Link> <br />
          <Link to="/Contact">Contact</Link> <br />
          <NavLink activeStyle={{ color: "red" }} to="/About/1">About-1</NavLink>  <br />
          <NavLink activeStyle={{ color: "red" }} to="/Profile">Profile</NavLink>  <br />
          <NavLink activeClassName="activeCls" to="/About/2">About-2</NavLink>

          {/* Bu sayfalar haricinde bir şey yazılırsa error çalışsın bunun için switch kullanılır ve path siz bir route belirlenir */}
          <Switch>
            <Route path="/" exact render={() => { return <h1>Home Page</h1> }} />

            <Route
              path="/Contact"
              exact // sadece bu sayfa gelsin. Bu olmazsa çağrışan sayfaların hepsi gelir
              strict // path in isminin sonuna slash eklense sayfa açılmaz
              // render={() => {
              //   return <h1>Contact Page</h1>;
              // }}
              //*Eğer burada componenet çağırmak istersek
              component={Contact} />

            {/* Redirect sayfayı yönlendirir, yetkisel yönlendirmeler Redirect ile yapılır*/}

            <Route path="/Profile" exact component={() => this.state.loggedIn ? <Profile /> : <Redirect to="/" />} />


            <Route path="/About/1" exact render={() => { return <h1>About - 1</h1> }} />
            <Route path="/About/2" exact component={UserList} />

            <Route component={Error} />

          </Switch>

        </div>
      </BrowserRouter>
    );
  }

}

export default App;
