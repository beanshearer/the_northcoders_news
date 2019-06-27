import React, { Component } from "react";
import GetRequests from "../api/Get";
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
    GetRequests(`articles`).then(articles => this.setState({ articles }));
  }
}

export default Home;
