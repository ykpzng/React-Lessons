import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li>
                <NavLink className="nav-link" to="/" activeClassName="nav-item active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact" activeClassName="nav-item active">Contact</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/About" activeClassName="nav-item active">About</NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>




      </div>
    )
  }
}
