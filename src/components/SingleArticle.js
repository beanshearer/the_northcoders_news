import React, { Component } from "react";
import axios from "axios";

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
    return axios
      .get(`https://bens-northcoders-news.herokuapp.com/api${uri}`)
      .then(response => {
        const { article } = response.data;
        this.setState({ article });
      })
      .then(() => {
        const { author } = this.state.article;
        return axios.get(
          `https://bens-northcoders-news.herokuapp.com/api/users/${author}`
        );
      })
      .then(response => {
        const { user } = response.data;
        this.setState({ user });
      });
  }
}

export default SingleArticle;
