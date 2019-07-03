import React, { Component } from "react";
import { Link } from "@reach/router";
import GetRequests from "../../api/Get";
import styled from "styled-components";
import Loading from "../../pictures/loading.gif";


const TopicPage = styled.section`
  background-color: white;
  padding: 1%;
  margin: 3%;
`;

const LoadingImg = styled.img`
  width: 10%;
  margin: 45%;
  margin-top: 5%;
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
  grid-template-columns: 50% 50%
  ;
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
    topics: [],
    loading: true
  };

  render() {
    const { topics, loading } = this.state;
    return loading ? (
      <LoadingImg src={Loading} alt="loading" />
    ) : (
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
                      <Row>Topic</Row> <Row>{slug.substring(0, 1).toUpperCase() + slug.substring(1)}</Row>
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
      this.setState({ topics, loading: false });
    });
  }
}

export default AllTopics;
