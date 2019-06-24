import React, { Component } from "react";
import axios from "axios";
import ArticleList from "./ArticleList";

class AllArticles extends Component {
  state = {
    all_articles: []
  };
  render() {
    const { all_articles } = this.state;
    return (
      <div>
        <h2>All Articles</h2>
        <ArticleList articles={all_articles} />
      </div>
    );
  }

  componentDidMount() {
    console.log("mounting...");
    return axios
      .get("https://bens-northcoders-news.herokuapp.com/api/articles")
      .then(response =>
        this.setState({ all_articles: response.data.articles })
      );
  }
}

export default AllArticles;
