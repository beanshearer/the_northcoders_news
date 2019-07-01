import React, { Component } from "react";
import ArticleList from "../ArticleList";
import ErrorPage from "../../ErrorPage";

class SingleTopic extends Component {
  state = {
    err: null
  };
  render() {
    const { err } = this.state;
    if (err) return <ErrorPage err={err} />;
    const { uri } = this.props;
    const splitUri = uri.split("/");
    const topic = splitUri[splitUri.length - 1];
    const capitalisedTitle =
      topic.substring(0, 1).toUpperCase() + topic.substring(1);
    return (
      <div>
        <h2>{capitalisedTitle}</h2>
        <ArticleList topic={topic} />
      </div>
    );
  }
}

export default SingleTopic;
