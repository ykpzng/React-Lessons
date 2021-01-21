import React from "react";
import { connect } from "react-redux"

// Articles Componenet
const Articles = ({ articles, searchTerm }) => {
  return (
    <ul>{
      articles.filter((article) => article.title.includes(searchTerm)).map((article) => (
        <li key={article.id}> <a href={article.url}>{article.title}</a> </li>
      ))
    }
    </ul>

  )
}


// Search Componenet
const Search = (props) => {
  return (
    <div>
      <input onChange={(e) => props.onSearch(e.target.value)} placeholder="Enter for search"></input>
    </div>

  )
}


function App(props) {
  return (
    <div className="App">
      <h1>REDUX ARTİCLELİST SEARCH APP</h1>
      <Search onSearch={props.onSearch} />
      <Articles articles={props.articles} searchTerm={props.searchTerm} />
    </div>
  );
}


const mapStateToProps = state => ({
  articles: state.articleReducers.articles,
  searchTerm: state.searchReducer.searchTerm,
});

const mapDispatchToProps = dispatch => ({
  onSearch: searchTerm => dispatch({ type: 'SEARCH_SET', searchTerm }),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);