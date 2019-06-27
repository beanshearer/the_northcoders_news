import React, { Component } from "react";
import GetRequests from "../api/Get";
import ArticleList from "./ArticleList";

class AllAuthors extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <section>
        <h2>Authors</h2>
        <ArticleList articles={articles} />
      </section>
    );
  }
  componentDidMount() {
    GetRequests(`articles`, `articles?sort_by=author&order=asc`).then(
      articles => this.setState({ articles })
    );
  }
}

export default AllAuthors;
