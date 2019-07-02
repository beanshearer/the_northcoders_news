import React, { Component } from "react";
import { Link } from "@reach/router";
import GetRequests from "../../api/Get";
import styled from "styled-components";

const TopicCard = styled.button`
  background-color: aliceblue;
  margin: 5px;
`;

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
            <TopicCard>
              <Link key={slug} to={`/topics/${slug}`}>
                <li>
                  Topic: {slug}
                  <br />
                  Description: {description}
                </li>
              </Link>
            </TopicCard>
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
