import React, { Component } from "react";
import GetRequests from "../api/Get";
import Comments from "./Comments";
import Liker from "./Liker";

class SingleArticle extends Component {
  state = {
    article: {},
    user: {}
  };

  render() {
    const { article, user } = this.state;
    console.log(article);
    const { uri } = this.props;
    return (
      <div>
        <header>
          <h2>{article && article.title}</h2>
        </header>
        <div>Author: {user && user.name}</div>
        <img src={user.avatar_url} alt={`${user.name}`} />
        <div>{article && article.body}</div>
        <Liker article_id={article.article_id} likes={article.votes} />
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

export default SingleArticle;
