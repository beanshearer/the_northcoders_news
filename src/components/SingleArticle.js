import React, { Component } from "react";
import getRequests from "./Api";

class SingleArticle extends Component {
  state = {
    article: {},
    user: {}
  };
  render() {
    const { article, user } = this.state;
    return (
      <div>
        <header>
          <h2>{article ? article.title : null}</h2>
        </header>
        <div>Author: {user ? user.name : null}</div>
        <img src={user.avatar_url} alt={`${user.name}`} />
        <div>{article ? article.body : null}</div>
        <div>
          Comments: {article ? article.comment_count : null}, Votes:{" "}
          {article ? article.votes : null}
        </div>
      </div>
    );
  }
  componentDidMount() {
    const { uri } = this.props;
    getRequests(`article`, uri)
      .then(article => {
        this.setState({ article });
        return article.author;
      })
      .then(author => {
        return getRequests(`user`, `users/${author}`);
      })
      .then(user => {
        this.setState({ user });
      });
  }
}

export default SingleArticle;
