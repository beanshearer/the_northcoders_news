import React, { Component } from "react";
import ArticleList from "./ArticleList";
import getRequests from "./Api";

class AllArticles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <div>
        <h2>All Articles</h2>
        <ArticleList articles={articles} />
      </div>
    );
  }

  componentDidMount() {
    getRequests(`articles`).then(articles => this.setState({ articles }));
  }
}

export default AllArticles;
