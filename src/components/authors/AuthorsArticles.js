import React, { Component } from "react";
import GetRequests from "../../api/Get";

class AuthorsArticles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <div>
        {articles.map(({ title }) => {
          return <div>{title}</div>;
        })}
      </div>
    );
  }
  componentDidMount() {
    GetRequests(`articles`, `articles?author=jessjelly&limit=3`).then(
      articles => this.setState({ articles })
    );
  }
}

export default AuthorsArticles;
