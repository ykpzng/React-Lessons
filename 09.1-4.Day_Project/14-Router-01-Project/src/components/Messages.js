import React from 'react'
import { Link, Switch, Route } from 'react-router-dom';
import Message from "./Message";

export default function Messages(props) {
  console.log(props.match.url)

  return (
    <div>
      <h1>This is my messages page</h1>
      <ul>
        <Link to="/messages/1"><li key="1">Message Number - 1 </li></Link>
        <Link to="/messages/2"><li key="2">Message Number - 2 </li></Link>
        <Link to="/messages/3"> <li key="3">Message Number - 3 </li></Link>
      </ul>

      <Switch>
        <Route path={`${props.match.url}/:id`} component={Message} />

        {/* <Route path="messages/:id" component={Message} /> */}

      </Switch>
    </div >
  )
}
