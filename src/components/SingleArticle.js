import React, { Component } from "react";
import GetRequests from "../api/Get";
import Comments from "./Comments";
import Liker from "./Liker";
import Profile from "./Profile";

class SingleArticle extends Component {
  state = {
    article: {},
    user: {}
  };

  render() {
    const { article } = this.state;
    const { uri } = this.props;
    return (
      <div>
        <header>
          <h2>{article && article.title}</h2>
        </header>
        <Profile author={article.author} />
        <div>{article && article.body}</div>
        <Liker article_id={article.article_id} likes={article.votes} />
        <Comments uri={uri} />
      </div>
    );
  }

  componentDidMount() {
    const { uri } = this.props;
    GetRequests(`article`, uri).then(article => {
      this.setState({ article });
      return article.author;
    });
  }
}

export default SingleArticle;
