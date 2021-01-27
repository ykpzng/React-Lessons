import React, { useState, useContext } from "react";
import "./AddArticle.css";
import { ArticleContext } from "../../context/articleContext";

const AddArticle = () => {
  const [article, setArticle] = useState();

  //const { saveArticle } = useContext(ArticleContext)
  const { dispatch } = useContext(ArticleContext)

  const hanleArticleData = (e) => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value
    })
  }

  const addNewArticle = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_ARTICLE", article });
    dispatch({ type: "DELETE_ARTICLE" });
  }

  console.log(article)
  return (
    <form className="add-article" onSubmit={addNewArticle}>
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={hanleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Body"
        onChange={hanleArticleData}
      />
      <button>Add article</button>
    </form>
  );
};
export default AddArticle;
