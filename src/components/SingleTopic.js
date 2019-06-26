import React, { Component } from "react";
import ArticleList from "./ArticleList";
import GetRequests from "./GetRequests";

class SingleTopic extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    const { uri } = this.props;
    const splitUri = uri.split("/");
    const lowercaseTitle = splitUri[splitUri.length - 1];
    const capitalisedTitle =
      lowercaseTitle.substring(0, 1).toUpperCase() +
      lowercaseTitle.substring(1);

    return (
      <div>
        <h2>{capitalisedTitle}</h2>
        <ArticleList articles={articles} />
      </div>
    );
  }

  componentDidMount() {
    const { uri } = this.props;
    const splitUri = uri.split("/");
    const lowercaseTitle = splitUri[splitUri.length - 1];
    GetRequests(`articles`, `articles?topic=${lowercaseTitle}`).then(articles =>
      this.setState({ articles })
    );
  }
}

export default SingleTopic;
