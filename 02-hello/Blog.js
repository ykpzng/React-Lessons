import React, { Component } from "react";
import BlogItem from "./BlogItem";
import BlogForm from "./BlogForm";

class Blog extends Component {
  render() {
    console.log(this.props);

    return (
      <div
      // style={{
      //   display: "flex",
      //   height: "600px",
      //   width: "600px",
      //   backgroundColor: "yellow",
      // }}
      >
        <BlogForm appClick={this.props.appClick}></BlogForm>
        {/* react ta döngü kullandığımızda döngünün her elemanı için unic(benzersiz) bir değer vermeliyiz. Burada unic key olarak textHead1 verebiliriz */}
        {this.props.blogInfo.map((obj) => (
          <BlogItem
            key={obj.textTitle}
            title={obj.textTitle}
            desc={obj.textDesc}
          />
        ))}

        {/* <BlogItem title={textHead1} desc={textDesc1} />
        <BlogItem title={textHead2} desc={textDesc2} />
        <BlogItem title={textHead3} desc={textDesc3} /> */}
      </div>
    );
  }
}

export default Blog;
