import React, { Component } from "react";
import GetRequests from "./Api";
import Comments from "./Comments";

class SingleArticle extends Component {
  state = {
    article: {},
    user: {}
  };

  render() {
    const { article, user } = this.state;
    const { uri } = this.props;
    return (
      <div>
        <header>
          <h2>{article && article.title}</h2>
        </header>
        <div>Author: {user && user.name}</div>
        <img src={user.avatar_url} alt={`${user.name}`} />
        <div>{article && article.body}</div>
        <div>
          Comments: {article && article.comment_count}, Votes:
          {article && article.votes}
        </div>
        <Comments uri={uri} />
      </div>
    );
  }
  componentDidMount() {
    const { uri } = this.props;
    GetRequests(`article`, uri)
      .then(article => {
        this.setState({ article });
        return article.author;
      })
      .then(author => {
        return GetRequests(`user`, `users/${author}`);
      })
      .then(user => {
        this.setState({ user });
      });
  }
}

// requesting article
// then request user info
// store all of it

export default SingleArticle;
