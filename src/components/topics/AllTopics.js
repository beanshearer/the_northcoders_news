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

  :hover {
    background-color: blue;
  }
`;

const TopicArea = styled.div`
  max-width: 700px;
  display: block;
  margin-left: auto;
  margin-right: auto
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  text-align: left;
`;

const Row = styled.div`
  padding: 5px;
  margin: 5px;
  :nth-child(even) {
    background: white;
  }
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
        <TopicArea>
          {topics.map(({ slug, description }) => {
            return (
              <Link
                className="remove-underlining"
                key={slug}
                to={`/topics/${slug}`}
              >
                <TopicCard>
                  <GridContainer>
                    <Row>Topic</Row> <Row>{slug}</Row>
                    <Row>Description</Row> <Row>{description}</Row>
                  </GridContainer>
                </TopicCard>
              </Link>
            );
          })}
        </TopicArea>
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
