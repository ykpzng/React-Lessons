import React, { Component } from 'react'
import LoaderHOC from "./LoaderHOC";
import "./App.css";

class Post extends Component {

  render() {

    return (
      <div className="userList">
        {
          this.props.posts.map(post => <div key={post.id}>{post.title}</div>)
        }
      </div>
    )
  }
}


export default LoaderHOC(Post, "posts");