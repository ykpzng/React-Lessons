import React from "react";
import { connect } from "react-redux";
import NewsItem from "../components/NewsItem";

let TopNews = ({ data }) => {
  let topNews = "";
  console.log(data)
  if (data) {
    topNews = data.articles.map((article, index) => (
      <div key={`${index}`} className="card">
        <NewsItem article={article} />
      </div>
    ));
  }
  // if (loading) {
  //   topNews = <h3 className="loading-indicator">Loading ...</h3>;
  // }
  return <div>{topNews}</div>;
};

const mapStateToProps = (data) => ({
  data: data.data
  //loading: state.loading,
});

TopNews = connect(mapStateToProps, null)(TopNews);
export default TopNews;
