import React, { Component } from "react";
import { connect } from "react-redux";
import Picker from "../components/Picker";
import Posts from "../components/Posts";
import { fetchPosts } from "../actions/index";

class App extends Component {
  handleChange = (subreddit) => {
    this.props.fetchPosts(subreddit)
  };

  render() {
    console.log("App den", this.props)
    return (
      <div>
        <Picker
          //value={selectedSubreddit}
          onChange={this.handleChange}
          options={[
            "reactjs",
            "frontend",
            "javascript",
            "reduxjs",
            "backend",
            "nodejs",
            "mongodb",
            "reduc",
            "undefined",
          ]}
        />
        <p>
          {/* {lastUpdated && (
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{" "}
            </span>
          )} */}
        </p>
        <Posts posts={this.props.data} />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = {
  fetchPosts
}


export default connect(mapStateToProps, mapDispatchToProps)(App);



