import React, { Component } from "react";
import { Link } from "@reach/router";
import GetRequests from "../../api/Get";
import styled from "styled-components";

const TopicPage = styled.section`
  background-color: white;
  padding: 1%;
  margin: 3%;
`;

const TopicCard = styled.div`
  background-color: #ebf3f9;
  padding: 25px;
  margin: 10px;
  border-radius: 10px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;

class AllTopics extends Component {
  state = {
    topics: []
  };

  render() {
    const { topics } = this.state;
    return (
      <TopicPage>
        <h2>Topics</h2>
        {topics.map(({ slug, description }) => {
          return (
            <TopicCard>
              <Link
                className="remove-underlining"
                key={slug}
                to={`/topics/${slug}`}
              >
                <li>
                  Topic: {slug}
                  <br />
                  Description: {description}
                </li>
              </Link>
            </TopicCard>
          );
        })}
      </TopicPage>
    );
  }
  componentDidMount() {
    GetRequests(`topics`).then(topics => {
      this.setState({ topics });
    });
  }
}

export default AllTopics;
