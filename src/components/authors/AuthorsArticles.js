import React, { Component } from "react";
import GetRequests from "../../api/Get";
import { Link } from "@reach/router";

class AuthorsArticles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <div>
        {articles.map(({ title, article_id }) => {
          return (
            <div>
              <Link key={article_id} to={`/articles/${article_id}`}>
                {title}
              </Link>
            </div>
          );
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
