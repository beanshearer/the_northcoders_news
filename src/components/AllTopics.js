import React, { Component } from "react";
import { Link } from "@reach/router";
import GetRequests from "./GetRequests";

class AllTopics extends Component {
  state = {
    topics: []
  };
  render() {
    const { topics } = this.state;
    return (
      <div>
        <h2>Topics</h2>
        {topics.map(({ slug, description }) => {
          return (
            <Link key={slug} to={`/topics/${slug}`}>
              <li>
                Topic: {slug}
                <br />
                Description: {description}
              </li>
            </Link>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    GetRequests(`topics`).then(topics => {
      this.setState({ topics });
    });
  }
}

export default AllTopics;
