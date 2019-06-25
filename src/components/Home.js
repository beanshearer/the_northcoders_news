import React, { Component } from "react";
import getRequests from "./Api";
import ArticleList from "./ArticleList";

class Home extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <div>
        <h2>Home</h2>
        <ArticleList articles={articles} />
      </div>
    );
  }

  componentDidMount() {
    getRequests(`articles`).then(articles => this.setState({ articles }));
  }
}

export default Home;
