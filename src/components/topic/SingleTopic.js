import React, { Component } from "react";
import ArticleList from "../ArticleList";

class SingleTopic extends Component {
  render() {
    const { uri } = this.props;
    const splitUri = uri.split("/");
    const topic = splitUri[splitUri.length - 1];
    return (
      <div>
        <ArticleList topic={topic} />
      </div>
    );
  }
}

export default SingleTopic;
