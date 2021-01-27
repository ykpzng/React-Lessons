import React from "react";
import "./Article.css";

const article = (props) => (

  <div className="article">
    <h1>{props.article.title}</h1>
    <p>{props.article.body}</p>
  </div>
);

export default article;
