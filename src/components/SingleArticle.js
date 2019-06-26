import React, { Component } from "react";
import GetRequests from "./GetRequests";
import Comments from "./Comments";
import Votes from "./Votes";

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
        <button
          onClick={() => {
            this.setState(state => {
              const id = state.article.article_id;
              const { articles, ...bool } = Votes(
                [state.article],
                "articles",
                id,
                "article_id",
                state[id],
                "article"
              );
              console.log(bool, id, state[id]);
              return { article: articles[0], ...bool };
            });
          }}
        >
          Votes:
          {article && article.votes}
        </button>

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
