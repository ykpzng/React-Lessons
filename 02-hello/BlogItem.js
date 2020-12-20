import React, { Component } from "react";
import "./BlogItem.css";
import PropTypes from "prop-types";

class BlogItem extends Component {
  constructor(props) {
    super(props);
    console.log("run");
  }

  static propTypes = { title: PropTypes.string, desc: PropTypes.string };
  render() {
    // console.log(this.props);
    const { title, desc } = this.props;
    return (
      <div className="title">
        <h2>{title}</h2>
        <h3>{desc}</h3>
      </div>
    );
  }
}

export default BlogItem;
