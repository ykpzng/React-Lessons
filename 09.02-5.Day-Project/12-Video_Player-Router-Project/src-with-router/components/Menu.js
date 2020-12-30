import React, { Component } from 'react'
import Videos from "./Videos";
import { Link, Route } from 'react-router-dom'

export default class Menu extends Component {
  render() {

    return (
      <div>
        <Link to="/videos/fast">Fast | </Link>
        <Link to="/videos/slow">Slow | </Link>
        <Link to="/videos/cute">Cute | </Link>
        <Link to="/videos/eek">Eek</Link>

        <Route path="/videos/:type" component={Videos} />

      </div>
    )
  }
}
